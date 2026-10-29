/** Only these fixed, non-personal fields may reach GA4. */
export const PRODUCTION_HOST = 'www.calvertdigitalsolutions.com';
export const BOOKING_TRACKING_ENABLED = false;
export type Conversion =
  | { name: 'generate_lead'; parameters: { lead_type: 'contact_form'; form_id: 'cds_contact'; submission_method: 'custom_api' } }
  | { name: 'schedule_consultation'; parameters: { consultation_type: 'phone' | 'google_meet'; booking_provider: 'hubspot' } };

type AnalyticsWindow = Window & { gtag?: (...args: unknown[]) => void };
const sent = new Set<string>();

export function trackConversion(event: Conversion, opaqueId: string): boolean {
  if (typeof window === 'undefined' || window.location.hostname !== PRODUCTION_HOST) return false;
  if (!/^[a-zA-Z0-9_-]{8,128}$/.test(opaqueId)) return false;
  if (event.name === 'schedule_consultation' && !BOOKING_TRACKING_ENABLED) return false;
  // Reconstruct the payload: never spread caller-supplied fields into analytics.
  let parameters: Conversion['parameters'];
  if (event.name === 'generate_lead') {
    parameters = { lead_type: 'contact_form', form_id: 'cds_contact', submission_method: 'custom_api' };
  } else if (event.name === 'schedule_consultation' && ['phone', 'google_meet'].includes(event.parameters.consultation_type)) {
    parameters = { consultation_type: event.parameters.consultation_type, booking_provider: 'hubspot' };
  } else return false;
  const key = `cds-conversion:${event.name}:${opaqueId}`;
  if (sent.has(key)) return false;
  try { if (window.sessionStorage.getItem(key)) return false; } catch { /* memory fallback */ }
  const gtag = (window as AnalyticsWindow).gtag;
  if (typeof gtag !== 'function') return false;
  // Mark before dispatch to guard synchronous duplicate callbacks.
  sent.add(key);
  try {
    gtag('event', event.name, parameters);
    try { window.sessionStorage.setItem(key, '1'); } catch { /* memory fallback */ }
    return true;
  } catch { sent.delete(key); return false; }
}
