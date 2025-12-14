export default function Process() {
    const steps: Array<[string, string]> = [
      ["1) Quick call", "What you do, what you sell, what you need. 15–30 minutes."],
      ["2) Simple plan", "One page: pages, copy, assets, timeline, and price."],
      ["3) Ship + support", "Launch, connect domain/email, and keep it running."],
    ];
  
    return (
      <section id="process" className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold tracking-tight">How it works</h2>
  
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {steps.map(([title, desc]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-sm font-semibold text-red-300">{title}</div>
                <div className="mt-2 text-sm text-slate-300">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  