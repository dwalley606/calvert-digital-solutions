export default function Contact() {
  return (
    <section id="contact" className="px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">Let's Talk</h2>
          <p className="mt-3 max-w-xl mx-auto text-slate-400">
            15-minute call. Tell me what your business needs. I'll tell you exactly what makes sense and what it'll cost.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-navy-800 overflow-hidden">
          <iframe
            src="https://meetings-na2.hubspot.com/daniel-walley?embed=true"
            width="100%"
            height="690"
            style={{ border: 0 }}
            title="Book a call with Calvert Digital Solutions"
          />
        </div>

        <p className="mt-6 text-center text-xs text-slate-500">
          Prefer email? Reach out at{" "}
          <a href="mailto:daniel@calvertdigitalsolutions.com" className="text-slate-400 hover:text-white transition-colors">
            daniel@calvertdigitalsolutions.com
          </a>
        </p>
      </div>
    </section>
  );
}
