import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Website Development | Calvert Digital Solutions',
  description: 'Fully custom Next.js websites built for small businesses. No templates, no drag-and-drop — designed and built from scratch around your business.',
};

const included = [
  {
    title: 'Custom Design',
    desc: "Not a template with your logo swapped in. Every layout, color, and detail is built around your business specifically — what you do, who you serve, and what action you want visitors to take.",
  },
  {
    title: 'Mobile Responsive',
    desc: 'Looks and works correctly on every screen size. Phones, tablets, desktops — tested across all of them, not just assumed to be fine.',
  },
  {
    title: 'SEO Foundations',
    desc: 'Clean markup, fast load times, proper page titles, meta descriptions, and Google indexing setup. The groundwork that makes everything else — ads, social, word of mouth — actually work.',
  },
  {
    title: 'Contact & Booking Integration',
    desc: 'Contact forms, scheduling links, phone click-to-call — whatever your business needs to turn a visitor into a lead, built in from the start, not bolted on later.',
  },
  {
    title: 'Performance Optimization',
    desc: "Fast by default. Images compressed and lazy-loaded, code split, and delivered efficiently. A slow website costs you leads — this one won't be slow.",
  },
];

export default function CustomWebsitesPage() {
  return (
    <main>
      {/* ── Back link ──────────────────────────────────────────── */}
      <div className="mx-auto max-w-6xl px-4 pt-8">
        <Link
          href="/services"
          className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
        >
          ← All Services
        </Link>
      </div>

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="border-b border-white/10 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
            <span className="h-2 w-2 rounded-full bg-red" />
            Custom Development
          </div>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Custom Website Development
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            Built from scratch with Next.js — no templates, no drag-and-drop, no bloat.
            If you need a site that actually reflects your business and performs the way
            it should, this is how you get there.
          </p>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-400">
            Built for small businesses and professionals who've outgrown a template site,
            need something specific that off-the-shelf can't deliver, or just want it done right
            the first time.
          </p>
        </div>
      </section>

      {/* ── What's included ────────────────────────────────────── */}
      <section className="border-b border-white/10 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-white">What's Included</h2>
            <p className="mt-3 text-slate-400">
              Everything you need to launch a site that works — nothing you don't.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {included.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-red/10">
                  <CheckIcon className="h-5 w-5 text-red" />
                </div>
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Let's talk about your project.
          </h2>
          <p className="mt-3 text-slate-400">
            Book a free 15-minute discovery call. I'll ask about your business, tell you
            what makes sense, and give you a straight answer on cost and timeline.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-red px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-red-dark"
            >
              Book a Discovery Call
            </Link>
          </div>
          <p className="mt-3 text-xs text-slate-500">No pressure · 15 minutes · Free</p>
        </div>
      </section>
    </main>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}
