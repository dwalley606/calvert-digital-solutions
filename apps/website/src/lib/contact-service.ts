import { createHash } from 'node:crypto';
import type { SubmissionStore, SubmissionRecord } from './submission-store.ts';

export type Inquiry = { submissionId: string; name: string; email: string; message: string };
export type Providers = {
  recordInquiry: (inquiry: Inquiry) => Promise<string>;
  findInquiry?: (inquiry: Inquiry) => Promise<string | null>;
  notify: (inquiry: Inquiry) => Promise<boolean>;
};
export class ProviderFailure extends Error {
  uncertain: boolean;
  constructor(uncertain = false) { super('Provider operation failed'); this.uncertain = uncertain; }
}
export function parseInquiry(body: unknown): Inquiry | null {
  if (!body || typeof body !== 'object') return null;
  const { submissionId, name, email, message } = body as Record<string, unknown>;
  if (typeof submissionId !== 'string' || !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(submissionId)) return null;
  if (typeof name !== 'string' || !name.trim() || name.length > 200 ||
      typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 ||
      typeof message !== 'string' || !message.trim() || message.length > 10000) return null;
  return { submissionId, name: name.trim(), email: email.trim().toLowerCase(), message: message.trim() };
}
export async function processInquiry(inquiry: Inquiry, store: SubmissionStore, providers: Providers) {
  const fingerprint = createHash('sha256').update(JSON.stringify([inquiry.name, inquiry.email, inquiry.message])).digest('hex');
  const fresh: SubmissionRecord = { fingerprint, state: 'processing' };
  if (!await store.claim(inquiry.submissionId, fresh)) {
    const prior = await store.read(inquiry.submissionId);
    if (!prior || prior.fingerprint !== fingerprint) return { status: 409, body: { success: false, error: 'This submission identifier is already in use.' } };
    if (prior.state === 'recorded' && prior.noteId) return {
      status: 200, body: { success: true, recorded: true, submissionId: inquiry.submissionId, notification: prior.notification ?? 'failed' },
    };
    if (prior.state !== 'failed' && providers.findInquiry) {
      const recovered = await providers.findInquiry(inquiry);
      if (recovered) {
        await store.write(inquiry.submissionId, { ...prior, state: 'recorded', noteId: recovered, notification: 'failed' });
        return { status: 200, body: { success: true, recorded: true, submissionId: inquiry.submissionId, notification: 'failed' } };
      }
    }
    // Retry only a confirmed failure, atomically. Unknown acknowledgements must
    // be reconciled with HubSpot, never repeated as another note POST.
    if (prior.state !== 'failed' || !await store.retry(inquiry.submissionId, prior, fresh)) {
      return { status: 503, body: { success: false, pending: true, error: 'We are checking this submission. Please retry to check its status, or contact us directly.' } };
    }
  }
  let noteId: string;
  try { noteId = await providers.recordInquiry(inquiry); }
  catch (error) {
    await store.write(inquiry.submissionId, { fingerprint, state: error instanceof ProviderFailure && !error.uncertain ? 'failed' : 'uncertain' });
    return { status: 503, body: { success: false, error: 'We could not confirm your message. Please contact us directly.' } };
  }
  if (!noteId) throw new Error('Missing confirmed inquiry record');
  // Commit successful recording before notification. Notification can never turn
  // a recorded inquiry into a failed form submission.
  const recorded: SubmissionRecord = { fingerprint, state: 'recorded', noteId, notification: 'failed' };
  await store.write(inquiry.submissionId, recorded);
  let accepted = false;
  try { accepted = await providers.notify(inquiry); } catch { /* inquiry is safe */ }
  try { await store.write(inquiry.submissionId, { ...recorded, notification: accepted ? 'accepted' : 'failed' }); } catch { /* recording already committed */ }
  return { status: 200, body: { success: true, recorded: true, submissionId: inquiry.submissionId, notification: accepted ? 'accepted' : 'failed' } };
}
