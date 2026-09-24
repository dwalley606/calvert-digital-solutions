import type { Metadata } from "next";
import Link from "next/link";
import { customWebsite } from "@/content/customWebsite";
import { ServiceDetailHero, ServiceDetailSection, ServiceDetailList, ServiceDetailCta } from "@/components/services/ServiceDetail";
import styles from "@/components/services/ServiceDetail.module.css";

export const metadata: Metadata = customWebsite.metadata;

export default function CustomWebsitesPage() {
  const { hero, meaning, fit, approach, cta } = customWebsite;
  return <>
    <ServiceDetailHero content={hero} />
    <ServiceDetailSection id="custom-meaning" eyebrow={meaning.eyebrow} title={meaning.title} description={meaning.description}>
      <ServiceDetailList items={meaning.items} />
    </ServiceDetailSection>
    <ServiceDetailSection id="custom-fit" eyebrow={fit.eyebrow} title={fit.title} tone="dark">
      <ul className={styles.examples}>{fit.examples.map((example) => <li key={example}>{example}</li>)}</ul>
      <aside className={styles.counterpoint} aria-labelledby="custom-counterpoint-heading">
        <h3 id="custom-counterpoint-heading" className="cds-display text-3xl sm:text-4xl">{fit.counterpoint.title}</h3>
        <p>{fit.counterpoint.description}</p>
        <Link href={fit.link.href} className={styles.textLink}>{fit.link.label}<span aria-hidden="true"> →</span></Link>
      </aside>
    </ServiceDetailSection>
    <ServiceDetailSection id="custom-approach" eyebrow={approach.eyebrow} title={approach.title}>
      <div className={styles.prose}>{approach.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
    </ServiceDetailSection>
    <ServiceDetailCta content={cta} />
  </>;
}
