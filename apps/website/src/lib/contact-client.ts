export type ContactFields = { name: string; email: string; message: string };
export type Confirmation = { success: true; recorded: true; submissionId: string; notification: 'accepted' | 'failed' };
export async function submitContact(fields: ContactFields, submissionId: string, send: typeof fetch = fetch): Promise<Confirmation> {
  const response = await send('/api/contact', {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...fields, submissionId }),
  });
  const body = await response.json();
  if (!response.ok || body.success !== true || body.recorded !== true || body.submissionId !== submissionId ||
      !['accepted', 'failed'].includes(body.notification)) throw new Error('Inquiry not confirmed');
  return body;
}
export async function submissionIdentity(fields: ContactFields): Promise<string> {
  const bytes = new TextEncoder().encode(JSON.stringify([fields.name.trim(), fields.email.trim().toLowerCase(), fields.message.trim()]));
  const fingerprint = Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256', bytes))).map(b => b.toString(16).padStart(2, '0')).join('');
  const key = 'cds-pending-inquiry';
  try {
    const prior = JSON.parse(sessionStorage.getItem(key) || 'null');
    if (prior?.fingerprint === fingerprint && /^[0-9a-f-]{36}$/i.test(prior.id)) return prior.id;
  } catch { /* storage blocked: caller keeps its in-memory identity */ }
  const id = crypto.randomUUID();
  try { sessionStorage.setItem(key, JSON.stringify({ fingerprint, id })); } catch { /* in-memory fallback */ }
  return id;
}
