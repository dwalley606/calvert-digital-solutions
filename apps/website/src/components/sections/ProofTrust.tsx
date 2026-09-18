import Image from "next/image";
import Link from "next/link";
import { homepage } from "@/content/homepage";

export default function ProofTrust() {
  const { trust } = homepage;

  return (
    <section className="grid overflow-hidden bg-navy text-off-white lg:grid-cols-[0.92fr_1.08fr]">
      <div className="flex items-center px-6 py-16 sm:px-10 lg:min-h-[37rem] lg:px-[max(3rem,calc((100vw-72rem)/2))] lg:py-20">
        <div className="ml-auto w-full max-w-xl lg:pr-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sand">{trust.eyebrow}</p>
          <h2 className="cds-display mt-5 text-[clamp(4rem,7vw,7rem)] leading-[0.86]">{trust.title}</h2>
          <p className="mt-6 max-w-lg text-base leading-7 text-slate-300 sm:text-lg">{trust.description}</p>
          <ul className="mt-8 space-y-3">
            {trust.points.map((point) => (
              <li key={point} className="flex items-center gap-3 font-semibold">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red text-xs" aria-hidden="true">
                  ✓
                </span>
                {point}
              </li>
            ))}
          </ul>
          <Link href={trust.href} className="button-base button-primary mt-9">
            {trust.linkLabel}
            <span className="ml-2" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      <div className="relative min-h-[29rem] sm:min-h-[36rem] lg:min-h-full">
        <Image
          src="/about/selfie.jpg"
          alt="Danny Walley, founder of Calvert Digital Solutions"
          fill
          sizes="(max-width: 1023px) 100vw, 54vw"
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-navy/10" />
        <div className="absolute inset-x-0 bottom-0 p-6 text-off-white sm:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sand">Direct from start to finish</p>
          <p className="cds-display mt-2 text-3xl tracking-[0.04em] sm:text-4xl">Danny Walley · Calvert County</p>
        </div>
      </div>
    </section>
  );
}
