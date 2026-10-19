"use client";

import { useState } from 'react';
import { consultationFormats } from '@/content/contact';
import styles from './Contact.module.css';

export default function ConsultationBooking() {
  const [selectedId, setSelectedId] = useState<string>(consultationFormats[0].id);
  const selected = consultationFormats.find((format) => format.id === selectedId) ?? consultationFormats[0];

  return (
    <div>
      <fieldset className={styles.consultationSelector}>
        <legend className={styles.consultationLegend}>How would you like to meet?</legend>
        <div className={styles.consultationOptions}>
          {consultationFormats.map((format) => (
            <label key={format.id} className={styles.consultationOption}>
              <input
                type="radio"
                name="consultation-format"
                value={format.id}
                checked={selectedId === format.id}
                onChange={() => setSelectedId(format.id)}
                aria-label={format.label}
                aria-describedby={`consultation-${format.id}-description`}
              />
              <span>
                <span className={styles.consultationName}>{format.label}</span>
                <span id={`consultation-${format.id}-description`} className={styles.consultationDescription}>{format.description}</span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      <p className={styles.consultationDetails}>60 minutes · Monday–Friday, 10 AM–4 PM Eastern</p>
      <p className={styles.calendarStatus} role="status">{selected.label} selected. Choose a time below.</p>
      <div className={styles.schedulerFrame}>
        <iframe
          key={selected.id}
          src={`${selected.url}?embed=true`}
          width="100%"
          height="790"
          style={{ border: 0 }}
          title={`Book a ${selected.label} with Calvert Digital Solutions`}
        />
      </div>
    </div>
  );
}
