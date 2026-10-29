'use client';

import { useRef, useState } from 'react';
import { submissionIdentity, submitContact } from '@/lib/contact-client';
import { trackConversion } from '@/lib/analytics';
import { contactPage } from '@/content/contact';
import styles from './Contact.module.css';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  const inFlight = useRef(false);
  const identity = useRef<{ payload: string; id: string } | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (inFlight.current) return;
    inFlight.current = true;
    setStatus('loading');

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const payload = JSON.stringify(data);
      if (identity.current?.payload !== payload) {
        identity.current = { payload, id: await submissionIdentity(data) };
      }
      const confirmed = await submitContact(data, identity.current!.id);
      setStatus('success');
      trackConversion({ name: 'generate_lead', parameters: {
        lead_type: 'contact_form', form_id: 'cds_contact', submission_method: 'custom_api',
      } }, confirmed.submissionId);
    } catch {
      setStatus('error');
    } finally {
      inFlight.current = false;
    }
  }

  if (status === 'success') {
    return (
      <p className={styles.success}>
        {contactPage.form.success}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.fieldRow}>
        <div>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className={styles.input}
            placeholder={contactPage.form.namePlaceholder}
          />
        </div>
        <div>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={styles.input}
            placeholder={contactPage.form.emailPlaceholder}
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className={styles.label}>
          {contactPage.form.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className={styles.input}
          placeholder={contactPage.form.messagePlaceholder}
        />
      </div>
      {status === 'error' && (
        <p className={styles.error}>We could not confirm your message. Retry to check its status, or email me directly at{' '}
          <a href="mailto:dwalley606@gmail.com">dwalley606@gmail.com</a>.</p>
      )}
      <button
        type="submit"
        disabled={status === 'loading'}
        className={`button-base button-primary ${styles.submit}`}
      >
        {status === 'loading' ? contactPage.form.sending : contactPage.form.submit}
      </button>
    </form>
  );
}
