import Image from "next/image";
import Link from "next/link";
import { homepage } from "@/content/homepage";

export default function HomeCTA() {
  const { cta } = homepage;

  return (
    <section className="relative overflow-hidden bg-red text-off-white">
      <Image
        src="/brand/production/cds-shield-simplified-color.svg"
        alt=""
        width={448}
        height={448}
        className="pointer-events-none absolute -bottom-32 -right-16 w-80 opacity-[0.09] sm:w-[28rem]"
      />
      <div className="site-container relative py-16 sm:py-20 lg:py-24">
        <div className="grid gap-9 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-off-white/75">{cta.eyebrow}</p>
            <h2 className="cds-display mt-4 max-w-4xl text-[clamp(3.7rem,8vw,7.5rem)] leading-[0.88]">
              {cta.title}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-off-white/85 sm:text-lg">
              {cta.description}
            </p>
          </div>
          <div className="flex flex-col items-start gap-5 lg:items-end lg:pb-1">
            <Link
              href={cta.primary.href}
              className="button-base min-w-44 border-off-white bg-off-white px-7 text-navy hover:bg-navy hover:text-off-white focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-navy"
            >
              {cta.primary.label}
            </Link>
            <Link
              href={cta.secondary.href}
              className="border-b border-off-white/70 pb-1 text-sm font-semibold text-off-white transition-colors hover:border-off-white focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-navy"
            >
              {cta.secondary.label} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
