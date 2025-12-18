import Image from "next/image";
import Link from "next/link";
import { services } from "@/content/services";

export default function Services() {
  return (
    <section className="border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="mb-10 text-3xl font-bold tracking-tight">
          Services
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
            >
              <div className="relative mb-4 h-40 overflow-hidden rounded-xl bg-slate-900">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 transition"
                />
              </div>

              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-300">
                {service.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}





