import { services, type Service } from "@/content/services";

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  );
}

function ServerIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 0 0 3 3h4.5a3 3 0 0 0 3-3m-16.5 0v-9a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v9m-18 0a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3" />
    </svg>
  );
}

function RefreshIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
    </svg>
  );
}

const iconMap: Record<Service["icon"], React.ComponentType<{ className?: string }>> = {
  globe: GlobeIcon,
  server: ServerIcon,
  refresh: RefreshIcon,
};

export default function Services() {
  return (
    <section className="border-b border-white/10 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">What We Build</h2>
          <p className="mt-3 max-w-xl mx-auto text-slate-400">
            Straightforward packages for small businesses that need a clean online presence — no bloat, no enterprise pricing.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.title}
                className="rounded-2xl border border-white/10 bg-navy-800 p-6 transition-colors hover:border-red/40"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red/10">
                  <Icon className="h-6 w-6 text-red" />
                </div>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
