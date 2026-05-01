import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Monthly Maintenance & Support | Calvert Digital Solutions',
  description: 'Ongoing website maintenance, updates, security monitoring, and support for small businesses. One flat monthly rate.',
};

const included = [
  {
    title: 'Content Updates',
    desc: "New hours, new services, new photos, updated pricing — send it over and it gets done. No ticket systems, no waiting a week for a three-line change.",
  },
  {
    title: 'Security Monitoring',
    desc: "Someone's keeping an eye on things so you don't find out something's broken from a customer. Plugin updates, certificate renewals, access reviews — handled.",
  },
  {
    title: 'Performance Checks',
    desc: 'Regular checks to make sure your site is still fast and functional. Slow sites lose visitors — this catches problems before they become your problem.',
  },
  {
    title: 'Priority Support',
    desc: "If something breaks, you're not in a queue. Retainer clients go to the front of the line. Most issues get resolved the same day.",
  },
  {
    title: 'Hosting Management',
    desc: "Renewals, configurations, uptime — all managed. You won't get surprised by an expired domain or a hosting bill you didn't know was coming.",
  },
];

export default function MonthlyRetainerPage() {
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
            Monthly Retainer
          </div>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Monthly Maintenance & Support
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            Your site is live — now someone needs to keep it that way. This is the retainer
            for clients who want their website handled by someone who knows it inside and out,
            without having to think about it themselves.
          </p>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-400">
            One flat monthly rate. No surprise invoices, no nickel-and-diming for every
            small update. Just a reliable point of contact who keeps your site secure,
            current, and working the way it should.
          </p>
        </div>
      </section>

      {/* ── What's included ────────────────────────────────────── */}
      <section className="border-b border-white/10 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-white">What's Covered</h2>
            <p className="mt-3 text-slate-400">
              Everything it takes to keep your site healthy and your business looking sharp online.
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
            Ready to stop thinking about your website?
          </h2>
          <p className="mt-3 text-slate-400">
            Book a free 15-minute call. We'll talk through what your site needs on an ongoing
            basis and I'll put together a flat monthly rate that makes sense.
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
