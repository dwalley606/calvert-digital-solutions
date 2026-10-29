import { parseInquiry, processInquiry } from '../../../lib/contact-service.ts';
import { contactProviders } from '../../../lib/contact-providers.ts';
import { redisSubmissionStore } from '../../../lib/submission-store.ts';

export const runtime = 'nodejs';
export async function POST(request: Request) {
  const reply = (body: object, status: number) => Response.json(body, { status, headers: { 'Cache-Control': 'no-store' } });
  // Existing production endpoint must not be switched until its ledger is configured.
  // No memory-only fallback: it cannot protect concurrent serverless invocations.
  const url = process.env.CONTACT_LEDGER_REST_URL;
  const token = process.env.CONTACT_LEDGER_REST_TOKEN;
  const hubspotToken = process.env.HUBSPOT_ACCESS_TOKEN;
  const resendKey = process.env.RESEND_API_KEY;
  if (!url || !token || !hubspotToken || !resendKey) return reply({ success: false, error: 'Messaging is temporarily unavailable. Please contact us directly.' }, 503);
  const origin = request.headers.get('origin');
  const expected = new URL(request.url).origin;
  if (origin && origin !== expected) return reply({ success: false, error: 'Invalid request origin.' }, 403);
  if (!request.headers.get('content-type')?.includes('application/json')) return reply({ success: false, error: 'Expected JSON.' }, 415);
  try {
    const raw = await request.text();
    if (raw.length > 15000) return reply({ success: false, error: 'Message is too long.' }, 413);
    let body: unknown;
    try { body = JSON.parse(raw); } catch { return reply({ success: false, error: 'Invalid input.' }, 400); }
    const inquiry = parseInquiry(body);
    if (!inquiry) return reply({ success: false, error: 'Please check your name, email, and message.' }, 400);
    const result = await processInquiry(inquiry, redisSubmissionStore(url, token), contactProviders({ hubspotToken, resendKey }));
    return reply(result.body, result.status);
  } catch {
    // Never include provider responses, customer fields or tokens in public errors/logs.
    return reply({ success: false, error: 'We could not confirm your message. Please retry to check its status, or contact us directly.' }, 503);
  }
}
