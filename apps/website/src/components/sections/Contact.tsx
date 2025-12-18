export default function Contact() {
  return (
    <section id="contact" className="border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-bold tracking-tight">Contact</h2>
          <p className="mt-2 max-w-2xl text-slate-300">
            Quick intro call is the fastest way to see if we’re a good fit.
            No pressure, no sales script.
          </p>

          {/* Primary CTA */}
          <div className="mt-6">
            <a
              href="https://meetings-na2.hubspot.com/daniel-walley"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-200 transition"
            >
              Book a quick call
            </a>
            <p className="mt-2 text-xs text-slate-400">
              15 minutes · Phone or Google Meet
            </p>
          </div>

          

          <div className="mt-6 text-xs text-slate-400">
            © {new Date().getFullYear()} Calvert Digital Solutions, LLC
          </div>
        </div>
      </div>
    </section>
  );
}
