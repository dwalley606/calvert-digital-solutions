import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseInquiry, processInquiry, ProviderFailure } from '../src/lib/contact-service.ts';
import { submitContact, submissionIdentity } from '../src/lib/contact-client.ts';
import { contactProviders } from '../src/lib/contact-providers.ts';
import { redisSubmissionStore } from '../src/lib/submission-store.ts';

const inquiry = { submissionId: '12345678-1234-4234-8234-123456789abc', name: 'Test Person', email: 'test@example.com', message: 'Test inquiry' };
function ledger() {
  const rows = new Map();
  return {
    rows,
    async claim(id, row) { if (rows.has(id)) return false; rows.set(id, structuredClone(row)); return true; },
    async read(id) { return rows.get(id) ?? null; },
    async write(id, row) { rows.set(id, structuredClone(row)); },
    async retry(id, previous, row) {
      if (JSON.stringify(rows.get(id)) !== JSON.stringify(previous)) return false;
      rows.set(id, structuredClone(row)); return true;
    },
  };
}
const providers = () => ({ async recordInquiry() { return 'note-123'; }, async notify() { return true; } });
test('invalid fields and identifiers rejected before provider work', () => {
  assert.ok(parseInquiry(inquiry));
  for (const bad of [{ name: '' }, { email: 'invalid' }, { message: '' }, { message: 'x'.repeat(10001) }, { submissionId: 'email@example.com' }]) assert.equal(parseInquiry({ ...inquiry, ...bad }), null);
});
test('successful confirmed note returns opaque ID, no PII', async () => {
  const result = await processInquiry(inquiry, ledger(), providers());
  assert.equal(result.status, 200); assert.equal(result.body.recorded, true);
  assert.equal(result.body.submissionId, inquiry.submissionId);
  assert.ok(!JSON.stringify(result.body).includes(inquiry.email));
});
test('failed CRM does not notify or confirm; a definite failure can retry', async () => {
  const store = ledger(); let calls = 0, notifications = 0;
  const p = { async recordInquiry() { if (++calls === 1) throw new ProviderFailure(); return 'note'; }, async notify() { notifications++; return true; } };
  assert.equal((await processInquiry(inquiry, store, p)).status, 503);
  assert.equal(notifications, 0);
  assert.equal((await processInquiry(inquiry, store, p)).status, 200);
  assert.equal(notifications, 1);
});
test('Resend failure does not undo recorded inquiry', async () => {
  for (const notify of [async () => false, async () => { throw new Error(); }]) {
    const result = await processInquiry(inquiry, ledger(), { ...providers(), notify });
    assert.equal(result.body.recorded, true); assert.equal(result.body.notification, 'failed');
  }
});
test('concurrent clicks and repeat requests produce one inquiry and notification', async () => {
  const store = ledger(); let records = 0, emails = 0;
  const p = { async recordInquiry() { records++; return 'note'; }, async notify() { emails++; return true; } };
  await Promise.all(Array.from({ length: 10 }, () => processInquiry(inquiry, store, p)));
  assert.equal((await processInquiry(inquiry, store, p)).body.recorded, true);
  assert.equal(records, 1); assert.equal(emails, 1);
});
test('new submission IDs preserve repeat inquiries', async () => {
  const store = ledger(); let count = 0;
  const p = { ...providers(), async recordInquiry() { return `note-${++count}`; } };
  await processInquiry(inquiry, store, p);
  await processInquiry({ ...inquiry, submissionId: '22345678-1234-4234-8234-123456789abc' }, store, p);
  assert.equal(count, 2);
});
test('reused ID with changed content cannot confirm a different inquiry', async () => {
  const store = ledger(); await processInquiry(inquiry, store, providers());
  assert.equal((await processInquiry({ ...inquiry, message: 'Changed' }, store, providers())).status, 409);
});
test('ambiguous CRM write is not retried; can reconcile confirmed existing note', async () => {
  const store = ledger(); let count = 0;
  const p = { ...providers(), async recordInquiry() { count++; throw new ProviderFailure(true); } };
  await processInquiry(inquiry, store, p);
  assert.equal((await processInquiry(inquiry, store, p)).status, 503); assert.equal(count, 1);
  const recovered = await processInquiry(inquiry, store, { ...p, findInquiry: async () => 'recovered-note' });
  assert.equal(recovered.body.recorded, true); assert.equal(count, 1);
});
test('ledger failure before claim makes no provider calls', async () => {
  let called = false;
  await assert.rejects(processInquiry(inquiry, { ...ledger(), claim: async () => { throw new Error(); } }, { ...providers(), recordInquiry: async () => { called = true; return 'note'; } }));
  assert.equal(called, false);
});
test('client requires exact backend confirmation, not HTTP 200 alone', async () => {
  const send = body => async () => Response.json(body);
  for (const body of [{ success: true }, { success: true, recorded: true, submissionId: 'wrong' }, { success: false }]) await assert.rejects(submitContact(inquiry, inquiry.submissionId, send(body)));
  const valid = { success: true, recorded: true, submissionId: inquiry.submissionId, notification: 'failed' };
  assert.deepEqual(await submitContact(inquiry, inquiry.submissionId, send(valid)), valid);
  await assert.rejects(submitContact(inquiry, inquiry.submissionId, async () => { throw new Error('network'); }));
});
test('browser identity survives retry/reload without storing customer fields', async () => {
  const map = new Map(); globalThis.sessionStorage = { getItem: key => map.get(key), setItem: (key, value) => map.set(key, value) };
  const first = await submissionIdentity(inquiry);
  assert.equal(await submissionIdentity(inquiry), first);
  assert.notEqual(await submissionIdentity({ ...inquiry, message: 'Another inquiry' }), first);
  assert.ok(!JSON.stringify([...map.values()]).includes(inquiry.email));
});

function mockFetch(handler) { const original = globalThis.fetch; globalThis.fetch = handler; return () => { globalThis.fetch = original; }; }
const config = { hubspotToken: 'mock-only', resendKey: 're_mock_only' };
const association = { results: [{ category: 'HUBSPOT_DEFINED', typeId: 202, label: null }] };
test('existing contact fields are untouched; each message becomes an associated note', async () => {
  const calls = []; const restore = mockFetch(async (url, init) => {
    calls.push([url, init]);
    if (url.includes('/labels')) return Response.json(association);
    if (url.endsWith('/notes')) return Response.json({ id: 'new-note' }, { status: 201 });
    return Response.json({ id: 'existing' });
  });
  try {
    assert.equal(await contactProviders(config).recordInquiry(inquiry), 'new-note');
    assert.equal(calls.filter(([, init]) => init.method === 'POST').length, 1);
    const note = JSON.parse(calls.at(-1)[1].body);
    assert.equal(note.associations[0].to.id, 'existing');
    assert.ok(note.properties.hs_note_body.includes(inquiry.message));
  } finally { restore(); }
});
test('contact creation conflict resolves existing record', async () => {
  let reads = 0; const restore = mockFetch(async (url) => {
    if (url.includes('?idProperty')) return ++reads === 1 ? new Response(null, { status: 404 }) : Response.json({ id: 'existing' });
    if (url.endsWith('/contacts')) return new Response(null, { status: 409 });
    if (url.includes('/labels')) return Response.json(association);
    return Response.json({ id: 'note' });
  });
  try { assert.equal(await contactProviders(config).recordInquiry(inquiry), 'note'); } finally { restore(); }
});
test('note HTTP failure never becomes a success; ambiguous 5xx is flagged', async () => {
  for (const status of [400, 403, 429, 500]) {
    const restore = mockFetch(async url => url.includes('/labels') ? Response.json(association) : url.endsWith('/notes') ? new Response(null, { status }) : Response.json({ id: 'existing' }));
    try { await assert.rejects(contactProviders(config).recordInquiry(inquiry), error => error instanceof ProviderFailure && error.uncertain === (status >= 500)); } finally { restore(); }
  }
});
test('resolved Resend error is failure and send uses idempotency key', async () => {
  const restore = mockFetch(async (_url, init) => {
    assert.ok(new Headers(init.headers).get('idempotency-key')?.includes(inquiry.submissionId));
    return Response.json({ statusCode: 422, name: 'validation_error', message: 'mock error' }, { status: 422 });
  });
  try { assert.equal(await contactProviders(config).notify(inquiry), false); } finally { restore(); }
});
test('atomic Redis claims, command errors and HTTPS enforcement', async () => {
  assert.throws(() => redisSubmissionStore('http://example.test', 'mock'));
  const commands = []; const restore = mockFetch(async (_url, init) => {
    commands.push(JSON.parse(init.body)); return Response.json({ result: commands.length === 1 ? 'OK' : null });
  });
  try {
    const store = redisSubmissionStore('https://example.test', 'mock');
    assert.equal(await store.claim('id', { state: 'processing', fingerprint: 'hash' }), true);
    assert.equal(await store.claim('id', { state: 'processing', fingerprint: 'hash' }), false);
    assert.equal(commands[0].at(-1), 'NX');
  } finally { restore(); }
});
test('notification retries transient failures with exactly the same idempotency key', async () => {
  const keys = [];
  const restore = mockFetch(async (_url, init) => {
    keys.push(new Headers(init.headers).get('idempotency-key'));
    return keys.length === 1 ? Response.json({ message: 'temporary' }, { status: 503 }) : Response.json({ id: 'email-123' });
  });
  try { assert.equal(await contactProviders(config).notify(inquiry), true); assert.equal(keys.length, 2); assert.equal(keys[0], keys[1]); } finally { restore(); }
});
test('safe contact reads retry a transient 429 before creating the inquiry', async () => {
  let reads = 0;
  const restore = mockFetch(async url => {
    if (url.includes('?idProperty')) return ++reads === 1 ? new Response(null, { status: 429 }) : Response.json({ id: 'existing' });
    if (url.includes('/labels')) return Response.json(association);
    return Response.json({ id: 'note' });
  });
  try { assert.equal(await contactProviders(config).recordInquiry(inquiry), 'note'); assert.equal(reads, 2); } finally { restore(); }
});
test('ledger completion-write failure cannot report success or resend the note', async () => {
  const store = ledger(); let count = 0;
  store.write = async () => { throw new Error('store unavailable'); };
  const p = { ...providers(), async recordInquiry() { count++; return 'note'; } };
  await assert.rejects(processInquiry(inquiry, store, p));
  assert.equal((await processInquiry(inquiry, store, p)).status, 503); assert.equal(count, 1);
});
