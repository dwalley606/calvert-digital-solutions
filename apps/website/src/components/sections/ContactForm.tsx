'use client';

import { useState } from 'react';
import { contactPage } from '@/content/contact';
import styles from './Contact.module.css';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    setStatus(res.ok ? 'success' : 'error');
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
        <p className={styles.error}>{contactPage.form.error}</p>
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
