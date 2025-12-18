import Services from "@/components/sections/Services";
import ServiceTree from "@/components/blocks/ServiceTree";

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Page header */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-4xl font-extrabold tracking-tight">Services</h1>
          <p className="mt-4 max-w-2xl text-slate-300">
            Three big categories, with simple options under each. Start small, build up.
          </p>
        </div>
      </section>

      {/* Category cards */}
      <Services />

      {/* Big tree */}
      <ServiceTree />

      {/* CTA */}
      <section id="services-cta">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold tracking-tight">Not sure what you need?</h2>
            <p className="mt-2 max-w-2xl text-slate-300">
              Book a quick intro call and I’ll tell you what matters, what doesn’t, and what the fastest path is.
            </p>
            <div className="mt-6">
              <a
                href="https://meetings-na2.hubspot.com/daniel-walley"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-200 transition"
              >
                Book a quick call
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


