export default function Contact() {
    return (
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
    );
  }
  