import Image from "next/image";

export default function Hero() {
  return (
    <section className="border-b border-white/10">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
            <span className="h-2 w-2 rounded-full bg-red-500/80" />
            Serving Calvert County & Southern Maryland
          </div>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            Build a clean online presence.
            <span className="block text-slate-300">Protect it. Automate it.</span>
          </h1>

          <p className="mt-4 text-base text-slate-300">
            Calvert Digital Solutions helps local businesses launch modern websites,
            streamline lead flow, and tighten up the basics—domain, email, security,
            and simple automation.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-200"
            >
              Get a quote
            </a>
            <a
              href="#services"
              className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
            >
              See services
            </a>
          </div>

          <p className="mt-4 text-xs text-slate-400">
            No pressure. Quick call, quick plan, quick ship.
          </p>
        </div>

        <div className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-6">
          <Image
          src="/brand/logo/cds-logo-horizontal.png"
          alt="Calvert Digital Solutions"
          width={360}
          height={120}
          className="max-w-full object-contain h-auto"
          priority
        />
      </div>
      </div>
    </section>
  );
}
