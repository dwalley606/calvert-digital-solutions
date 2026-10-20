import type { Metadata } from "next";
import Link from "next/link";
import { cmsWebsite } from "@/content/cmsWebsite";
import { ServiceDetailHero, ServiceDetailSection, ServiceDetailList, ServiceDetailCta } from "@/components/services/ServiceDetail";
import styles from "@/components/services/ServiceDetail.module.css";

export const metadata: Metadata = {
  ...cmsWebsite.metadata,
  alternates: { canonical: "/services/cms-websites" },
};

export default function CmsWebsitesPage() {
  const { hero, meaning, fit, projects, responsibilities, platform, cta } = cmsWebsite;
  return <>
    <ServiceDetailHero content={hero} />
    <ServiceDetailSection id="cms-meaning" eyebrow={meaning.eyebrow} title={meaning.title} description={meaning.description}>
      <ServiceDetailList items={meaning.items} />
    </ServiceDetailSection>
    <ServiceDetailSection id="cms-fit" eyebrow={fit.eyebrow} title={fit.title} tone="dark">
      <ul className={styles.examples}>{fit.examples.map((example) => <li key={example}>{example}</li>)}</ul>
      <aside className={styles.counterpoint} aria-labelledby="cms-counterpoint-heading">
        <h3 id="cms-counterpoint-heading" className="cds-display text-3xl sm:text-4xl">{fit.counterpoint.title}</h3>
        <p>{fit.counterpoint.description}</p>
        <Link href={fit.link.href} className={styles.textLink}>{fit.link.label}<span aria-hidden="true"> →</span></Link>
      </aside>
    </ServiceDetailSection>
    <ServiceDetailSection id="cms-projects" eyebrow={projects.eyebrow} title={projects.title}>
      <div className="divide-y divide-navy/20 border-y border-navy/20">
        {projects.items.map((item) => <article key={item.title} className="py-7 first:pt-6">
          <h3 className="cds-display text-3xl sm:text-4xl">{item.title}</h3>
          <p className="mt-4 leading-8 text-slate">{item.description}</p>
        </article>)}
      </div>
    </ServiceDetailSection>
    <ServiceDetailSection id="cms-responsibilities" eyebrow={responsibilities.eyebrow} title={responsibilities.title} description={responsibilities.description} tone="dark">
      <div className="divide-y divide-coastal-blue/30 border-t border-coastal-blue/50">
        {responsibilities.items.map((item) => <article key={item.title} className="py-7">
          <h3 className="cds-display text-3xl text-sand sm:text-4xl">{item.title}</h3>
          <p className="mt-4 leading-8 text-slate-300">{item.description}</p>
        </article>)}
      </div>
      <p className="border-l-3 border-sand pl-6 leading-8 text-slate-200">{responsibilities.note}</p>
    </ServiceDetailSection>
    <ServiceDetailSection id="cms-platform" eyebrow={platform.eyebrow} title={platform.title}>
      <div className={styles.prose}>{platform.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
    </ServiceDetailSection>
    <ServiceDetailCta content={cta} />
  </>;
}
