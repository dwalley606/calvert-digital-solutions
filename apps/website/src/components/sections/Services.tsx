import Link from 'next/link';
import { services } from '@/content/services';

export default function Services() {
  return (
    <section className="border-b border-white/10 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">What I Build</h2>
          <p className="mt-3 max-w-xl mx-auto text-slate-400">
            Three straightforward options for small businesses that need a solid online presence.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-white/30 hover:bg-white/10"
            >
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{service.desc}</p>
              <span className="mt-4 inline-block text-xs font-medium text-slate-400 group-hover:text-white transition-colors">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
