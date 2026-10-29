import { ProviderFailure, type Providers, type Inquiry } from './contact-service.ts';

export const escapeHtml = (value: string) => value.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));

type Config = { hubspotToken: string; resendKey: string };
export function contactProviders(config: Config): Providers {
  const headers = { Authorization: `Bearer ${config.hubspotToken}`, 'Content-Type': 'application/json' };
  const request = async (path: string, init: RequestInit = {}) => {
    try {
      return await fetch(`https://api.hubapi.com${path}`, {
        ...init, headers, signal: AbortSignal.timeout(8000), cache: 'no-store',
      });
    } catch { throw new ProviderFailure(true); }
  };
  const getContact = async (email: string): Promise<string | null> => {
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        const res = await request(`/crm/v3/objects/contacts/${encodeURIComponent(email)}?idProperty=email&properties=email`);
        if (res.status === 404) return null;
        if (res.ok) { const body = await res.json(); if (typeof body.id === 'string') return body.id; }
        if (res.status !== 429 && res.status < 500) throw new ProviderFailure();
      } catch (error) { if (error instanceof ProviderFailure && !error.uncertain) throw error; }
      if (attempt < 2) await new Promise(resolve => setTimeout(resolve, 200 * (attempt + 1)));
    }
    throw new ProviderFailure(); // only reads failed; no inquiry was written
  };
  const ensureContact = async (inquiry: Inquiry) => {
    const existing = await getContact(inquiry.email);
    if (existing) return existing; // never overwrite an existing customer's fields
    let res: Response;
    try {
      res = await request('/crm/v3/objects/contacts', {
        method: 'POST', body: JSON.stringify({ properties: { firstname: inquiry.name, email: inquiry.email } }),
      });
    } catch {
      // Creation may have succeeded. Resolve by unique email before doing more.
      const recovered = await getContact(inquiry.email);
      if (recovered) return recovered;
      throw new ProviderFailure(); // a contact alone is not an inquiry
    }
    if (res.ok) {
      const body = await res.json();
      if (typeof body.id === 'string') return body.id;
    }
    if (res.status === 409 || res.status >= 500) {
      const recovered = await getContact(inquiry.email);
      if (recovered) return recovered;
    }
    throw new ProviderFailure();
  };
  return {
    findInquiry: async inquiry => {
      const res = await request('/crm/v3/objects/notes/search', {
        method: 'POST', body: JSON.stringify({ query: inquiry.submissionId, properties: ['hs_note_body'], limit: 10 }),
      });
      if (!res.ok) return null;
      const result = await res.json();
      const marker = `Submission: ${inquiry.submissionId}</p>`;
      const note = result.results?.find((item: { id?: string; properties?: { hs_note_body?: string } }) => item.properties?.hs_note_body?.includes(marker));
      return typeof note?.id === 'string' ? note.id : null;
    },
    recordInquiry: async inquiry => {
      const contactId = await ensureContact(inquiry);
      // Resolve association type from HubSpot; do not hardcode an unverified ID.
      const labels = await request('/crm/v4/associations/notes/contacts/labels');
      if (!labels.ok) throw new ProviderFailure();
      const schema = await labels.json();
      const association = schema.results?.find((item: { category?: string; label?: string | null }) => item.category === 'HUBSPOT_DEFINED' && item.label === null);
      if (!association || !Number.isInteger(association.typeId)) throw new ProviderFailure();
      const res = await request('/crm/v3/objects/notes', {
        method: 'POST', body: JSON.stringify({
          properties: {
            hs_timestamp: new Date().toISOString(),
            hs_note_body: `<h2>Website inquiry</h2><p>Submission: ${inquiry.submissionId}</p><p>Name: ${escapeHtml(inquiry.name)}</p><p>Email: ${escapeHtml(inquiry.email)}</p><p>${escapeHtml(inquiry.message).replace(/\n/g, '<br>')}</p>`,
          },
          associations: [{ to: { id: contactId }, types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: association.typeId }] }],
        }),
      });
      if (!res.ok) throw new ProviderFailure(res.status >= 500 || res.status === 408);
      try { const body = await res.json(); if (typeof body.id === 'string' && body.id) return body.id; } catch { /* ambiguous acknowledgement */ }
      throw new ProviderFailure(true);
    },
    notify: async inquiry => {
      for (let attempt = 0; attempt < 3; attempt++) {
        try {
          const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: { Authorization: `Bearer ${config.resendKey}`, 'Content-Type': 'application/json', 'Idempotency-Key': `cds-contact/${inquiry.submissionId}` },
            signal: AbortSignal.timeout(5000),
            body: JSON.stringify({
              from: 'onboarding@resend.dev', to: 'dwalley606@gmail.com',
              subject: `New contact from ${inquiry.name.replace(/[\r\n]/g, ' ')}`,
              html: `<h2>New message from your website</h2><p>Submission: ${inquiry.submissionId}</p><p>Name: ${escapeHtml(inquiry.name)}</p><p>Email: ${escapeHtml(inquiry.email)}</p><p>${escapeHtml(inquiry.message).replace(/\n/g, '<br>')}</p>`,
            }),
          });
          const data = await response.json();
          if (response.ok) return !data.error && typeof data.id === 'string' && !!data.id;
          if (response.status !== 429 && response.status < 500) return false;
        } catch { /* safe to retry using the same provider idempotency key */ }
        if (attempt < 2) await new Promise(resolve => setTimeout(resolve, 200 * (attempt + 1)));
      }
      return false;
    },
  };
}
