import Services from '@/components/sections/Services';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-white">Services</h1>
          <p className="mt-4 max-w-2xl text-slate-300">
            Pick the option that fits. Not sure which one? Book a quick call and I'll tell you.
          </p>
        </div>
      </section>

      <Services />

      <section>
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold tracking-tight text-white">Not sure what you need?</h2>
            <p className="mt-2 max-w-2xl text-slate-300">
              Book a quick intro call and I'll tell you what makes sense and what it'll cost.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-200 transition"
              >
                Book a Discovery Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
