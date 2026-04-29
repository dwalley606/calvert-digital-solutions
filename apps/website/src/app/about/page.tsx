import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Calvert Digital Solutions",
  description: "Danny Walley — Calvert County web developer. Local, direct, no agency overhead.",
};

const workingPoints = [
  {
    title: "Clear timeline upfront",
    desc: "Before any work starts you get a plain-English plan: what's included, what it costs, and when it ships. No surprises.",
  },
  {
    title: "Regular updates throughout",
    desc: "You'll hear from me during the build, not just when it's done. No black holes, no waiting weeks for a reply.",
  },
  {
    title: "You own everything when we're done",
    desc: "Code, domain, hosting — it's all yours. No monthly lock-in, no proprietary platform, no gotchas.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* ── Intro ─────────────────────────────────────────────── */}
      <section className="border-b border-white/10 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">

            {/* Photo */}
            <div className="flex justify-center md:justify-start">
              <div className="relative h-80 w-64 overflow-hidden rounded-2xl border border-white/10 shadow-xl md:h-[420px] md:w-80">
                <Image
                  src="/about/selfie.jpg"
                  alt="Danny Walley"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>

            {/* Text */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                <span className="h-2 w-2 rounded-full bg-red" />
                Calvert County, Maryland
              </div>

              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
                Local Developer.<br />
                Real Communication.<br />
                Actual Results.
              </h1>

              <p className="mt-5 text-base leading-relaxed text-slate-300">
                I'm Danny Walley — not an agency, not a template mill. Just a Calvert County
                developer who builds clean, professional websites for local businesses. You deal
                directly with me from the first call to launch day and beyond. No account managers,
                no hand-offs, no runaround.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Background ────────────────────────────────────────── */}
      <section className="border-b border-white/10 px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-white">Background</h2>

          <div className="mt-8 space-y-6 text-base leading-relaxed text-slate-300">
            <p>
              Before web development I spent years in people management and logistics — coordinating
              moving parts, keeping schedules on track when things went sideways, and being the person
              others could count on to actually get it done. That experience doesn't disappear when I'm
              building your site. It's how I run every project: scoped, scheduled, and shipped.
            </p>
            <p>
              I'm also pursuing a degree in education, which means I've spent a lot of time thinking
              about how to explain complicated things clearly. That shows up in how I talk with clients —
              plain English, no jargon, no "just trust me" moments. You'll always know what's happening
              and why, whether it's a DNS change or a layout decision.
            </p>
            <p>
              Web development is where all of that comes together. I build with React and Next.js —
              modern tools that produce fast, reliable websites. Because I understand both the technical
              side and the communication side, I can build something that works for your business, not
              just something that looks good in a demo.
            </p>
          </div>
        </div>
      </section>

      {/* ── What working with me looks like ───────────────────── */}
      <section className="border-b border-white/10 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              What Working With Me Looks Like
            </h2>
            <p className="mt-3 text-slate-400">No mystery. No waiting around. Here's how it goes.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {workingPoints.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-navy-800 p-6">
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

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Ready to get started?
          </h2>
          <p className="mt-3 text-slate-400">
            Book a free 15-minute call. We'll talk through what you need and I'll tell you exactly
            what it'll take.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-red px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-red-dark"
            >
              Book a Free Call
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
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}
