import Link from "next/link";
import Image from "next/image";
import { homepage } from "@/content/homepage";

export default function BuildGrowSupport() {
  const { services } = homepage;

  return (
    <section className="bg-off-white text-navy">
      <div className="site-container section-spacing">
        <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          <header className="relative lg:pt-3">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red">{services.eyebrow}</p>
            <h2 className="cds-display mt-5 max-w-xl text-[clamp(4.5rem,8vw,8rem)] leading-[0.83] tracking-[0.01em]">
              {services.title}
            </h2>
            <div className="mt-7 h-1 w-20 bg-red" aria-hidden="true" />
            <p className="mt-6 max-w-md text-base leading-7 text-slate sm:text-lg">
              {services.introduction}
            </p>
            <Image
              src="/brand/production/cds-shield-simplified-color.svg"
              alt=""
              width={240}
              height={280}
              className="pointer-events-none mt-10 hidden w-32 opacity-[0.08] lg:block"
            />
          </header>

          <div className="border-t-2 border-navy">
            {services.pillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className="group grid gap-5 border-b border-navy/20 py-9 sm:grid-cols-[4.5rem_1fr] sm:gap-7 lg:grid-cols-[4.5rem_1fr_auto] lg:items-center lg:py-10"
              >
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-full text-off-white ${
                    index === 0 ? "bg-red" : index === 1 ? "bg-navy-700" : "bg-sand text-navy"
                  }`}
                >
                  <ServiceIcon index={index} />
                  <span className="sr-only">{pillar.number}</span>
                </span>
                <div>
                  <h3 className="cds-display text-4xl leading-none tracking-[0.04em] sm:text-5xl">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-xl font-bold leading-7 text-navy">{pillar.statement}</p>
                  <p className="mt-3 max-w-xl leading-7 text-slate">{pillar.description}</p>
                </div>
                <Link
                  href={pillar.href}
                  className="inline-flex w-fit items-center gap-2 border-b-2 border-red pb-1 text-sm font-bold text-navy transition-colors hover:text-red focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-coastal-blue sm:col-start-2 lg:col-start-auto"
                >
                  {pillar.linkLabel}
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceIcon({ index }: { index: number }) {
  if (index === 0) {
    return (
      <svg className="h-7 w-7" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="4" y="5" width="24" height="17" />
        <path d="M11 27h10M16 22v5" />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg className="h-7 w-7" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
        <path d="M4 26h5v-8H4v8Zm9 0h6V11h-6v15Zm10 0h5V4h-5v22Z" />
      </svg>
    );
  }

  return (
    <svg className="h-7 w-7" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="M16 3v4M16 25v4M3 16h4M25 16h4M6.8 6.8l2.8 2.8M22.4 22.4l2.8 2.8M25.2 6.8l-2.8 2.8M9.6 22.4l-2.8 2.8" />
      <circle cx="16" cy="16" r="6" />
    </svg>
  );
}
