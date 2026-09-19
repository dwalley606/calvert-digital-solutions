import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./ServicesPage.module.css";
import { servicesPage } from "@/content/servicesPage";

export const metadata: Metadata = {
  title: "Services",
  description: "Practical website design, digital improvements, and ongoing local support for Calvert County businesses.",
};

export default function ServicesPage() {
  const { hero, build, grow, support, decisions, cta } = servicesPage;

  return (
    <>
      <section className={styles.hero} aria-labelledby="services-heading">
        <div className={styles.heroGlow} aria-hidden="true" />
        <Image src="/brand/production/cds-shield-simplified-color.svg" alt="" width={380} height={440} className={styles.heroMark} />
        <div className="site-container relative py-16 sm:py-20 lg:py-24">
          <div className="max-w-4xl">
            <p className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-sand">
              {hero.eyebrow}<span className="h-px w-24 bg-red" aria-hidden="true" />
            </p>
            <h1 id="services-heading" className="cds-display mt-6 text-[clamp(4rem,9vw,8rem)] leading-[0.84] tracking-[0.015em] text-off-white">{hero.title}</h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-200 sm:text-xl sm:leading-8">{hero.description}</p>
            <nav className="mt-9 flex flex-wrap gap-x-8 gap-y-4" aria-label="Services page sections">
              {hero.links.map((link) => (
                <a key={link.href} href={link.href} className="border-b-2 border-red pb-1 text-sm font-semibold text-off-white transition-colors hover:text-coastal-blue focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-coastal-blue">
                  {link.label} <span aria-hidden="true">↓</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      <section id="build" className="scroll-mt-24 bg-off-white text-navy">
        <div className="site-container section-spacing">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <SectionLead eyebrow={build.eyebrow} title={build.title} description={build.description}>
              <p className="mt-7 text-sm leading-6 text-slate">
                {build.guidance}{" "}
                <Link href="/contact" className="font-bold text-red underline decoration-red/40 underline-offset-4 hover:decoration-red">Talk it through <span aria-hidden="true">→</span></Link>
              </p>
            </SectionLead>
            <div className="border-t-2 border-navy">
              {build.approaches.map((approach) => (
                <article key={approach.title} className="grid gap-5 border-b border-navy/20 py-8 sm:grid-cols-[3.5rem_1fr_auto] sm:items-start sm:gap-6">
                  <IconBadge icon={approach.icon} tone="red" />
                  <div>
                    <h3 className="text-xl font-extrabold text-navy">{approach.title}</h3>
                    <p className="mt-3 max-w-xl leading-7 text-slate">{approach.description}</p>
                    <ul className="mt-5 grid gap-2 text-sm font-semibold text-navy/85 sm:grid-cols-2">
                      {approach.details.map((detail) => <li key={detail} className="flex gap-2"><span className="text-red" aria-hidden="true">✓</span>{detail}</li>)}
                    </ul>
                  </div>
                  <Link href={approach.href} className="inline-flex w-fit border-b-2 border-red pb-1 text-sm font-bold text-navy hover:text-red focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-coastal-blue sm:col-start-2 lg:col-start-auto">
                    Learn more <span className="ml-2" aria-hidden="true">→</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="grow" className={[styles.coastal, "scroll-mt-24 text-off-white"].join(" ")}>
        <div className="site-container section-spacing relative">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <SectionLead eyebrow={grow.eyebrow} title={grow.title} description={grow.description} dark />
            <div className="grid border-t border-coastal-blue/50 sm:grid-cols-2">
              {grow.capabilities.map((capability, index) => (
                <article key={capability.title} className={["py-8 sm:px-8", index % 2 === 0 ? "sm:border-r sm:border-coastal-blue/35 sm:pl-0" : "", index > 1 ? "border-t border-coastal-blue/35" : "", index % 2 === 1 ? "sm:pr-0" : ""].join(" ")}>
                  <ServiceIcon name={capability.icon} className="h-9 w-9 text-off-white" />
                  <h3 className="mt-5 text-lg font-extrabold">{capability.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{capability.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="support" className={[styles.support, "scroll-mt-24 text-off-white"].join(" ")}>
        <div className="site-container section-spacing relative">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_0.72fr_0.56fr] lg:gap-14">
            <SectionLead eyebrow={support.eyebrow} title={support.title} description={support.description} dark />
            <div className="border-t border-coastal-blue/45 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <IconBadge icon="shield" tone="blue" />
              <h3 className="mt-5 text-xl font-extrabold">{support.careTitle}</h3>
              <ul className="mt-5 space-y-3 text-sm font-semibold text-slate-200">
                {support.items.map((item) => <li key={item} className="flex gap-3"><span className="text-red" aria-hidden="true">✓</span>{item}</li>)}
              </ul>
              <Link href="/services/monthly-retainer" className="mt-7 inline-flex border-b-2 border-red pb-1 text-sm font-bold text-off-white hover:text-coastal-blue focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-coastal-blue">
                Explore ongoing support <span className="ml-2" aria-hidden="true">→</span>
              </Link>
            </div>
            <aside className="border-t border-coastal-blue/45 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <ServiceIcon name="person" className="h-10 w-10" />
              <h3 className="mt-5 text-xl font-extrabold">{support.partnerTitle}</h3>
              <p className="mt-4 leading-7 text-slate-300">{support.partnerDescription}</p>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-off-white text-navy" aria-labelledby="decision-heading">
        <div className="site-container py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.62fr_1.38fr] lg:items-end">
            <header>
              <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-navy"><span className="h-0.5 w-8 bg-red" aria-hidden="true" />{decisions.eyebrow}</p>
              <h2 id="decision-heading" className="cds-display mt-4 text-5xl leading-none sm:text-6xl">{decisions.title}</h2>
              <p className="mt-5 max-w-md leading-7 text-slate">{decisions.description}</p>
            </header>
            <div className="grid border-y border-navy/20 sm:grid-cols-2 lg:grid-cols-4">
              {decisions.options.map((option, index) => (
                <Link key={option.label} href={option.href} className={["group flex min-h-44 flex-col justify-between border-navy/20 px-5 py-6 transition-colors hover:bg-white focus-visible:outline-3 focus-visible:-outline-offset-3 focus-visible:outline-coastal-blue", index > 0 ? "border-t sm:border-t-0 sm:border-l" : "", index === 2 ? "sm:border-t lg:border-t-0" : ""].join(" ")}>
                  <ServiceIcon name={option.icon} className="h-8 w-8 text-navy" />
                  <div className="mt-7">
                    <p className="text-sm font-semibold leading-6 text-navy">{option.label}</p>
                    <p className="mt-3 text-xs font-extrabold uppercase tracking-[0.16em] text-red">{option.action} <span aria-hidden="true">→</span></p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.closingCta}>
        <div className="site-container flex flex-col gap-7 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div><h2 className="cds-display text-4xl tracking-[0.03em] text-off-white sm:text-5xl">{cta.title}</h2><p className="mt-2 text-sm leading-6 text-slate-200 sm:text-base">{cta.description}</p></div>
          <Link href="/contact" className="button-base button-primary shrink-0 px-7">{cta.label} <span className="ml-2" aria-hidden="true">→</span></Link>
        </div>
      </section>
    </>
  );
}

function SectionLead({ eyebrow, title, description, dark = false, children }: { eyebrow: string; title: string; description: string; dark?: boolean; children?: React.ReactNode }) {
  return <header>
    <p className={["flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em]", dark ? "text-sand" : "text-navy"].join(" ")}><span className="h-0.5 w-8 bg-red" aria-hidden="true" />{eyebrow}</p>
    <h2 className="cds-display mt-5 text-[clamp(3.6rem,6vw,6rem)] leading-[0.88] tracking-[0.02em]">{title}</h2>
    <p className={["mt-6 max-w-lg leading-7", dark ? "text-slate-300" : "text-slate"].join(" ")}>{description}</p>{children}
  </header>;
}

type IconName = "code" | "cms" | "speed" | "search" | "analytics" | "consulting" | "shield" | "person" | "support";

function IconBadge({ icon, tone }: { icon: IconName; tone: "red" | "blue" }) {
  return <span className={["flex h-12 w-12 items-center justify-center rounded-md", tone === "red" ? "bg-navy text-off-white" : "bg-coastal-blue/15 text-off-white"].join(" ")}><ServiceIcon name={icon} className="h-7 w-7" /></span>;
}

function ServiceIcon({ name, className }: { name: IconName; className?: string }) {
  const common = { className, viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeWidth: 2, "aria-hidden": true } as const;
  if (name === "code") return <svg {...common}><path d="m11 8-7 8 7 8M21 8l7 8-7 8M19 4l-6 24" /></svg>;
  if (name === "cms") return <svg {...common}><circle cx="16" cy="16" r="12" /><path d="M8 11l4 12 4-10 4 10 4-12M7 11h18" /></svg>;
  if (name === "speed") return <svg {...common}><path d="M5 23a12 12 0 1 1 22 0M16 16l7-5" /><circle cx="16" cy="16" r="2" /></svg>;
  if (name === "search") return <svg {...common}><circle cx="14" cy="14" r="9" /><path d="m21 21 7 7" /></svg>;
  if (name === "analytics") return <svg {...common}><path d="M5 27V16h5v11M14 27V9h5v18M23 27V4h5v23M3 27h27" /></svg>;
  if (name === "consulting") return <svg {...common}><path d="M5 6h22v16H14l-7 5v-5H5V6Z" /><path d="M10 14h.1M16 14h.1M22 14h.1" strokeWidth="3" /></svg>;
  if (name === "shield") return <svg {...common}><path d="M16 3 27 7v8c0 7-4.6 11.8-11 14-6.4-2.2-11-7-11-14V7l11-4Z" /><path d="m11 16 3 3 7-7" /></svg>;
  if (name === "person") return <svg {...common}><circle cx="16" cy="10" r="6" /><path d="M5 29v-4c0-5 4-8 11-8s11 3 11 8v4H5Z" /></svg>;
  return <svg {...common}><path d="M16 3v4M16 25v4M3 16h4M25 16h4M7 7l3 3M22 22l3 3M25 7l-3 3M10 22l-3 3" /><circle cx="16" cy="16" r="6" /></svg>;
}
