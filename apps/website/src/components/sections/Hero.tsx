import Image from "next/image";

export default function Hero() {
  return (
    <section className="border-b border-white/10 px-4 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <div className="flex justify-center mb-10">
          <Image
            src="/brand/logo/cds-logo-full-size.png"
            alt="Calvert Digital Solutions"
            width={436}
            height={151}
            priority
            className="h-auto w-full max-w-xs sm:max-w-sm md:max-w-md"
          />
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
          Modern Websites for<br className="hidden sm:block" />
          Calvert County Businesses
        </h1>

        <p className="mt-5 text-lg text-slate-300 max-w-2xl mx-auto">
          Affordable, professional web design built for local businesses —
          from Prince Frederick to Solomons Island.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-red px-7 py-3 text-base font-semibold text-white hover:bg-red-dark transition-colors"
          >
            Book a Free Call
          </a>
          <a
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-7 py-3 text-base font-semibold text-white hover:bg-white/10 transition-colors"
          >
            See Services
          </a>
        </div>

        <p className="mt-4 text-xs text-slate-500">
          15-minute intro call · No pressure · Free
        </p>
      </div>
    </section>
  );
}
