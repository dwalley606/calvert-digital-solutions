// apps/website/src/app/page.tsx
import Image from "next/image";

const services = [
  {
    title: "Websites that convert",
    desc: "Fast, modern landing pages and small business sites that look legit and load instantly.",
  },
  {
    title: "Automation & CRM setup",
    desc: "Simple pipelines, follow-ups, and lead capture so you stop losing money to “I’ll remember later.”",
  },
  {
    title: "Security-first setup",
    desc: "Domains, email, DNS, password management, and hardening basics—no sketchy shortcuts.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <Image
              src="/apps/website/public/brand/icon/CDS Shield.png" // adjust filename if needed
              alt="Calvert Digital Solutions"
              width={40}
              height={40}
              priority
            />
            <div className="leading-tight">
              <div className="font-semibold tracking-wide">Calvert Digital Solutions</div>
              <div className="text-xs text-slate-300">Web • Security • Automation</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#process" className="hover:text-white">Process</a>
            <a href="#about" className="hover:text-white">About</a>
            <a
              href="#contact"
              className="rounded-lg bg-white/10 px-3 py-2 hover:bg-white/15"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
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

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <Image
              src="/apps/website/public/brand/logo/CDS Shield with title.png" // adjust filename
              alt="Calvert Digital Solutions"
              width={400}
              height={400}
              priority
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold tracking-tight">Services</h2>
          <p className="mt-2 max-w-2xl text-slate-300">
            Simple packages that cover what most small businesses actually need.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="text-lg font-semibold">{s.title}</div>
                <div className="mt-2 text-sm text-slate-300">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold tracking-tight">How it works</h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["1) Quick call", "What you do, what you sell, what you need. 15–30 minutes."],
              ["2) Simple plan", "One page: pages, copy, assets, timeline, and price."],
              ["3) Ship + support", "Launch, connect domain/email, and keep it running."],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-sm font-semibold text-red-300">{title}</div>
                <div className="mt-2 text-sm text-slate-300">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold tracking-tight">About</h2>
          <p className="mt-2 max-w-3xl text-slate-300">
            CDS is a local-first digital shop focused on practical outcomes: clean web presence,
            reliable infrastructure, and security-minded setup. If you’re tired of “a guy who knows a guy,”
            you’re in the right place.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold tracking-tight">Contact</h2>
            <p className="mt-2 text-slate-300">
              For now, keep it simple: email + phone. We can add a form + CRM capture later.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-slate-950/40 p-5">
                <div className="text-sm text-slate-400">Email</div>
                <div className="mt-1 font-semibold">you@calvertdigitalsolutions.com</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-950/40 p-5">
                <div className="text-sm text-slate-400">Phone</div>
                <div className="mt-1 font-semibold">(xxx) xxx-xxxx</div>
              </div>
            </div>

            <div className="mt-6 text-xs text-slate-400">
              © {new Date().getFullYear()} Calvert Digital Solutions, LLC
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

