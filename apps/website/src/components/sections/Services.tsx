type Service = { title: string; desc: string };

export default function Services({ services }: { services: Service[] }) {
  return (
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
  );
}
