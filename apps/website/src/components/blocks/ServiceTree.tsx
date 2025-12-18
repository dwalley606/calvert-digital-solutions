import Link from "next/link";
import { serviceBranches } from "@/content/servicesTree";

export default function ServiceTree() {
  return (
    <section className="border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight">More options</h2>
          <p className="mt-3 text-slate-300">
            Browse the breakdown below. Each item can be a small project by itself,
            or bundled together for a full setup.
          </p>
        </div>

        <div className="space-y-14">
          {serviceBranches.map((branch) => (
            <div
              key={branch.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-7"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold">{branch.title}</h3>
                  <p className="mt-2 text-slate-300">{branch.desc}</p>
                </div>

                <Link
                  href={`/services/${branch.id}`}
                  className="mt-3 inline-flex text-sm font-semibold text-slate-200 hover:text-white md:mt-0"
                >
                  View {branch.title} →
                </Link>
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-3">
                {branch.leaves.map((leaf) => {
                  const leafSlug = slugify(leaf.title);
                  return (
                    <div
                      key={leaf.title}
                      className="rounded-xl border border-white/10 bg-slate-950/40 p-5"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <h4 className="font-semibold text-slate-100">
                          {leaf.title}
                        </h4>

                        <Link
                          href={`/services/${branch.id}/${leafSlug}`}
                          className="shrink-0 text-xs font-semibold text-slate-300 hover:text-white"
                        >
                          Details →
                        </Link>
                      </div>

                      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300">
                        {leaf.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}


