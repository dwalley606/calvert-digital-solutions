import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CMS Website Builds & Migrations | Calvert Digital Solutions',
  description: 'Wix, Squarespace, and WordPress rebuilds and migrations for small businesses. Modern, manageable, and actually fast.',
};

const included = [
  {
    title: 'Platform Consultation',
    desc: "Wix, Squarespace, WordPress — they're not all the same and the right one depends on how your business actually works. We'll figure that out before touching anything.",
  },
  {
    title: 'Redesign',
    desc: "A clean, modern look that doesn't scream 'free template from 2019.' Your site will look like a business you'd trust, not a placeholder.",
  },
  {
    title: 'Content Migration',
    desc: "Your existing pages, text, images, and links — moved over cleanly. Nothing gets lost, nothing gets broken, nothing gets left behind.",
  },
  {
    title: 'Mobile Optimization',
    desc: "Actually optimized, not just technically responsive. Menus that work, text that's readable, buttons you can actually tap. Tested on real devices.",
  },
  {
    title: 'Basic SEO Setup',
    desc: 'Page titles, meta descriptions, image alt tags, and Google indexing configured correctly from day one. The stuff that makes your site findable.',
  },
];

export default function CmsWebsitesPage() {
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
            CMS Builds & Migrations
          </div>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            CMS Website Builds & Migrations
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            Still fighting a slow, clunky template site? You don't need a full custom build —
            you need someone to fix what's broken, modernize what's not, and make it something
            you're not embarrassed to send people to.
          </p>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-400">
            Whether you're on Wix, Squarespace, or WordPress — or you're migrating between them —
            I'll handle the rebuild and redesign so you end up with something modern, fast, and
            actually manageable without a developer on speed dial.
          </p>
        </div>
      </section>

      {/* ── What's included ────────────────────────────────────── */}
      <section className="border-b border-white/10 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-white">What's Covered</h2>
            <p className="mt-3 text-slate-400">
              The practical middle ground — modern and manageable, without the cost of a fully custom build.
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
            Tired of your current site? Let's fix it.
          </h2>
          <p className="mt-3 text-slate-400">
            Book a free 15-minute call. Tell me what platform you're on and what's driving
            you crazy — I'll tell you exactly what the fix looks like and what it'll cost.
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
