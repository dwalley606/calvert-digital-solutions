import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import type { DetailHeroContent, DetailItem, DetailCtaContent } from "./types";
import styles from "./ServiceDetail.module.css";

export function ServiceDetailHero({ content }: { content: DetailHeroContent }) {
  return <section className={styles.hero} aria-labelledby="service-heading">
    <div className="site-container">
      <nav aria-label="Service navigation" className={styles.backNav}>
        <Link href="/services" className={styles.textLink}><span aria-hidden="true">← </span>All Services</Link>
      </nav>
      <div className={styles.heroGrid}>
        <div>
          <p className={styles.eyebrow}>{content.eyebrow}</p>
          <h1 id="service-heading" className={`cds-display ${styles.heroTitle}`}>{content.lines.map((line) => <span key={line}>{line}{" "}</span>)}</h1>
        </div>
        <div className={styles.heroAside}>
          <Image src="/brand/production/cds-shield-simplified-color.svg" alt="" width={144} height={168} className={styles.heroMark} />
          <p>{content.description}</p>
        </div>
      </div>
    </div>
  </section>;
}

export function ServiceDetailSection({ id, eyebrow, title, description, tone = "light", children }: {
  id: string; eyebrow: string; title: string; description?: string; tone?: "light" | "dark"; children: ReactNode;
}) {
  return <section className={tone === "light" ? styles.light : styles.dark} aria-labelledby={`${id}-heading`}>
    <div className={`site-container section-spacing ${styles.editorialGrid}`}>
      <header>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2 id={`${id}-heading`} className={`cds-display ${styles.sectionTitle}`}>{title}</h2>
        {description && <p className={styles.description}>{description}</p>}
      </header>
      <div className={styles.sectionBody}>{children}</div>
    </div>
  </section>;
}

export function ServiceDetailList({ items }: { items: readonly DetailItem[] }) {
  return <ol className={styles.numberedList}>
    {items.map((item, index) => <li key={item.title}>
      <span className={`cds-display ${styles.number}`} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
      <div><h3 className="cds-display text-3xl sm:text-4xl">{item.title}</h3><p>{item.description}</p></div>
    </li>)}
  </ol>;
}

export function ServiceDetailCta({ content }: { content: DetailCtaContent }) {
  return <section className={styles.cta} aria-labelledby="service-cta-heading">
    <Image src="/brand/production/cds-shield-simplified-color.svg" alt="" width={448} height={448} className={styles.ctaMark} />
    <div className={`site-container section-spacing ${styles.ctaGrid}`}>
      <div><h2 id="service-cta-heading" className={`cds-display ${styles.ctaTitle}`}>{content.title}</h2><p>{content.description}</p></div>
      <div className={styles.actions}>
        <Link href={content.primary.href} className={`button-base ${styles.ctaPrimary}`}>{content.primary.label}</Link>
        <Link href={content.secondary.href} className={styles.textLink}>{content.secondary.label}<span aria-hidden="true"> →</span></Link>
      </div>
    </div>
  </section>;
}
