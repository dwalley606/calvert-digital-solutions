import { test } from 'node:test';
import assert from 'node:assert/strict';
import { trackConversion, BOOKING_TRACKING_ENABLED } from '../src/lib/analytics.ts';
import { validateBookingMessage, decodeVerifiedHubSpotBooking, listenForVerifiedBookings } from '../src/lib/booking-tracking.ts';
const lead = { name: 'generate_lead', parameters: { lead_type: 'contact_form', form_id: 'cds_contact', submission_method: 'custom_api' } };
function browser(hostname = 'www.calvertdigitalsolutions.com') {
  const calls = [], storage = new Map();
  globalThis.window = { location: { hostname }, sessionStorage: { getItem: key => storage.get(key), setItem: (key, value) => storage.set(key, value) }, gtag: (...args) => calls.push(args) };
  return calls;
}
test('only fixed allowlisted fields reach GA4 even if runtime caller adds PII', () => {
  const calls = browser();
  trackConversion({ ...lead, parameters: { ...lead.parameters, email: 'private@example.com', message: 'secret' } }, 'opaque-identifier-1');
  assert.deepEqual(calls, [['event', 'generate_lead', lead.parameters]]);
  assert.ok(!JSON.stringify(calls).includes('private'));
  assert.equal(trackConversion({ name: 'arbitrary', parameters: { email: 'private@example.com' } }, 'opaque-identifier-2'), false);
});
test('duplicate callbacks, rerenders and session history cannot duplicate conversion', () => {
  const calls = browser();
  assert.equal(trackConversion(lead, 'opaque-identifier-3'), true);
  assert.equal(trackConversion(lead, 'opaque-identifier-3'), false);
  assert.equal(calls.length, 1);
  window.sessionStorage.setItem('cds-conversion:generate_lead:opaque-identifier-4', '1');
  assert.equal(trackConversion(lead, 'opaque-identifier-4'), false);
});
test('preview/local hosts never send conversions; unavailable GA does not break form', () => {
  for (const host of ['localhost', 'calvertdigitalsolutions.com', 'preview.vercel.app']) {
    const calls = browser(host); assert.equal(trackConversion(lead, 'opaque-identifier-5'), false); assert.equal(calls.length, 0);
  }
  browser(); delete window.gtag; assert.equal(trackConversion(lead, 'opaque-identifier-6'), false);
});
test('booking trigger is disabled without a verified decoder, including success-looking payloads', () => {
  const calls = browser();
  assert.equal(BOOKING_TRACKING_ENABLED, false); assert.equal(decodeVerifiedHubSpotBooking, null);
  assert.equal(trackConversion({ name: 'schedule_consultation', parameters: { consultation_type: 'phone', booking_provider: 'hubspot' } }, 'booking-identifier-1'), false);
  let listeners = 0; window.addEventListener = () => listeners++;
  listenForVerifiedBookings({}, trackConversion)();
  assert.equal(listeners, 0); assert.equal(calls.length, 0);
});
test('booking infrastructure rejects wrong origins, windows, formats, IDs, and mismatched consultation', () => {
  const source = {}; const origin = 'https://meetings-na2.hubspot.com';
  const event = { origin, source, data: { confirmed: true } };
  const url = origin + '/daniel-walley';
  const decode = () => ({ bookingId: 'booking-12345678', consultationType: 'phone' });
  assert.ok(validateBookingMessage(event, source, url, decode));
  assert.equal(validateBookingMessage(event, source, url, null), null);
  assert.equal(validateBookingMessage({ ...event, origin: 'https://evil.example' }, source, url, decode), null);
  assert.equal(validateBookingMessage(event, {}, url, decode), null);
  assert.equal(validateBookingMessage({ ...event, data: [] }, source, url, decode), null);
  assert.equal(validateBookingMessage(event, source, url, () => ({ bookingId: 'private@example.com', consultationType: 'phone' })), null);
  assert.equal(validateBookingMessage(event, source, url, () => ({ bookingId: 'booking-12345678', consultationType: 'google_meet' })), null);
  assert.equal(validateBookingMessage(event, source, origin + '/unknown', decode), null);
});
