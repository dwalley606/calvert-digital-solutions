const reasons = [
  {
    title: "Local & Available",
    desc: "Based in Calvert County. You're not filing a support ticket — you're texting a real person who picks up.",
  },
  {
    title: "Clear Communication",
    desc: "No tech jargon, no surprise invoices. You get a plain-English plan before any work starts.",
  },
  {
    title: "Ships on Time",
    desc: "Project management background means deadlines are real. Scoped correctly, launched on schedule.",
  },
];

export default function WhyCDS() {
  return (
    <section className="border-b border-white/10 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">Why CDS</h2>
          <p className="mt-3 max-w-xl mx-auto text-slate-400">
            There are a lot of "web guys." Here's what makes working with CDS different.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reasons.map((r, i) => (
            <div key={r.title} className="rounded-2xl border border-white/10 bg-navy-800 p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-red text-sm font-bold text-white">
                {i + 1}
              </div>
              <h3 className="text-lg font-semibold text-white">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
