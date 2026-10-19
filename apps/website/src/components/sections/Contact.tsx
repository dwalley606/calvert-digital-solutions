import Image from 'next/image';
import { contactPage, digitalBusinessCard } from '@/content/contact';
import ContactForm from '@/components/sections/ContactForm';
import ConsultationBooking from '@/components/sections/ConsultationBooking';
import styles from './Contact.module.css';

export default function Contact() {
  const { hero, scheduler, written } = contactPage;
  return (
    <div id="contact">
      <section className={styles.hero} aria-labelledby="contact-heading">
        <Image src="/brand/production/cds-shield-simplified-color.svg" alt="" width={380} height={440} className={styles.heroMark} />
        <div className={`site-container section-spacing ${styles.heroGrid}`}>
          <div>
            <p className={styles.eyebrow}>{hero.eyebrow}</p>
            <h1 id="contact-heading" className={`cds-display ${styles.heroTitle}`}>
              {hero.lines.map((line) => <span key={line}>{line}{' '}</span>)}
            </h1>
          </div>
          <div className={styles.heroAside}>
            <p className={styles.introduction}>{hero.description}</p>
            <nav className={styles.paths} aria-label="Ways to contact CDS">
              <div><a href="#book-a-time" className="button-base button-primary">{hero.call.label}<span aria-hidden="true">&nbsp;↓</span></a><p>{hero.call.detail}</p></div>
              <div><a href="#send-a-message" className="button-base button-secondary">{hero.message.label}<span aria-hidden="true">&nbsp;↓</span></a><p>{hero.message.detail}</p></div>
              <div className={styles.connect}>
                <a href={digitalBusinessCard.href} target="_blank" rel="noopener noreferrer">
                  {hero.connect.label}<span aria-hidden="true"> ↗</span><span className="sr-only"> (opens in a new tab)</span>
                </a>
                <p>{hero.connect.detail}</p>
              </div>
            </nav>
          </div>
        </div>
      </section>

      <section id="book-a-time" className={styles.scheduler} aria-labelledby="scheduler-heading">
        <div className="site-container section-spacing">
          <header className={styles.schedulerHeader}>
            <div><p className={styles.eyebrow}>{scheduler.eyebrow}</p><h2 id="scheduler-heading" className={`cds-display ${styles.sectionTitle}`}>{scheduler.title}</h2></div>
            <p className={styles.description}>{scheduler.description}</p>
          </header>
          <ConsultationBooking />
        </div>
      </section>

      <section id="send-a-message" className={styles.written} aria-labelledby="written-heading">
        <div className={`site-container section-spacing ${styles.writtenGrid}`}>
          <header>
            <p className={styles.eyebrow}>{written.eyebrow}</p>
            <h2 id="written-heading" className={`cds-display ${styles.writtenTitle}`}>{written.lines.map((line) => <span key={line}>{line}{' '}</span>)}</h2>
            <p className={styles.writtenDescription}>{written.description}</p>
          </header>
          <div className={styles.formFrame}><ContactForm /></div>
        </div>
      </section>
    </div>
  );
}