import { BOOKING_TRACKING_ENABLED, type Conversion } from './analytics.ts';

export type VerifiedBooking = { bookingId: string; consultationType: 'phone' | 'google_meet' };
export type BookingDecoder = (payload: unknown) => VerifiedBooking | null;

// Intentionally no decoder: the live HubSpot success payload has NOT been verified.
// A controlled approved booking must establish its identity and success semantics.
export const decodeVerifiedHubSpotBooking: BookingDecoder | null = null;

export function validateBookingMessage(
  event: Pick<MessageEvent, 'origin' | 'source' | 'data'>,
  iframeWindow: Window | null,
  iframeUrl: string,
  decode: BookingDecoder | null,
): VerifiedBooking | null {
  if (!iframeWindow || !decode || event.source !== iframeWindow) return null;
  let url: URL;
  try { url = new URL(iframeUrl); } catch { return null; }
  if (url.origin !== 'https://meetings-na2.hubspot.com' || event.origin !== url.origin) return null;
  const format = url.pathname === '/daniel-walley' ? 'phone'
    : url.pathname === '/daniel-walley/google-meet-video-consultation' ? 'google_meet' : null;
  if (!format || !event.data || typeof event.data !== 'object' || Array.isArray(event.data)) return null;
  const booking = decode(event.data);
  if (!booking || booking.consultationType !== format || !/^[a-zA-Z0-9_-]{8,128}$/.test(booking.bookingId)) return null;
  return booking;
}

export function listenForVerifiedBookings(iframe: HTMLIFrameElement, emit: (event: Conversion, id: string) => unknown) {
  if (!BOOKING_TRACKING_ENABLED || !decodeVerifiedHubSpotBooking) return () => {};
  const listener = (event: MessageEvent) => {
    const booking = validateBookingMessage(event, iframe.contentWindow, iframe.src, decodeVerifiedHubSpotBooking);
    if (booking) emit({ name: 'schedule_consultation', parameters: { consultation_type: booking.consultationType, booking_provider: 'hubspot' } }, booking.bookingId);
  };
  window.addEventListener('message', listener);
  return () => window.removeEventListener('message', listener);
}
