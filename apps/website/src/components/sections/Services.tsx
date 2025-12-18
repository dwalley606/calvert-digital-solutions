import { services } from "@/content/services";

export default function Services() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-3xl font-bold">Services</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-slate-800 bg-slate-900 p-6"
            >
              <h3 className="mb-2 text-xl font-semibold">
                {service.title}
              </h3>
              <p className="text-slate-400">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

