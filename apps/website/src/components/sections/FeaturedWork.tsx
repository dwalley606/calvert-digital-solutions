const projects = [
  {
    title: "Local Business Website",
    tag: "Web Design",
    desc: "Responsive landing page for a Calvert County home services contractor. Built to rank locally and convert on mobile.",
    href: "https://danielwalley.vercel.app",
    bg: "from-navy-700 to-navy-800",
    accent: "bg-red",
  },
  {
    title: "Small Business Rebrand",
    tag: "Redesign",
    desc: "Full site refresh for a Southern Maryland business. Updated messaging, clean layout, and a working contact form.",
    href: "https://danielwalley.vercel.app",
    bg: "from-navy-800 to-navy-700",
    accent: "bg-red/80",
  },
  {
    title: "Service Landing Page",
    tag: "Landing Page",
    desc: "Single-offer page with HubSpot booking integration. Built to capture leads from Google Business Profile traffic.",
    href: "https://danielwalley.vercel.app",
    bg: "from-navy-700 to-navy-800",
    accent: "bg-red",
  },
];

export default function FeaturedWork() {
  return (
    <section className="border-b border-white/10 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white">Recent Work</h2>
            <p className="mt-2 text-slate-400">A sample of sites built for local businesses.</p>
          </div>
          <a
            href="https://danielwalley.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-red hover:text-red-dark transition-colors"
          >
            View full portfolio →
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group block rounded-2xl border border-white/10 bg-navy-800 overflow-hidden hover:border-red/40 transition-colors"
            >
              <div className={`relative h-44 bg-gradient-to-br ${p.bg} flex items-center justify-center`}>
                <div className={`h-16 w-16 rounded-2xl ${p.accent} opacity-30 group-hover:opacity-50 transition-opacity`} />
                <span className="absolute bottom-3 left-4 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                  {p.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-white group-hover:text-red transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.desc}</p>
                <span className="mt-4 inline-block text-xs font-semibold text-red">
                  View project →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
