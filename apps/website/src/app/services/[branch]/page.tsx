import { serviceBranches } from "@/content/servicesTree";
import Link from "next/link";

export default function BranchPage({ params }: { params: { branch: string } }) {
  const branch = serviceBranches.find((b) => b.id === params.branch);

  if (!branch) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-2xl font-bold">Service not found</h1>
        <Link className="mt-4 inline-block text-slate-300 hover:text-white" href="/services">
          ← Back to Services
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-extrabold tracking-tight">{branch.title}</h1>
      <p className="mt-4 max-w-2xl text-slate-300">{branch.desc}</p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {branch.leaves.map((leaf) => {
          const leafSlug = slugify(leaf.title);
          return (
            <Link
              key={leaf.title}
              href={`/services/${branch.id}/${leafSlug}`}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
            >
              <h2 className="text-lg font-semibold">{leaf.title}</h2>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
                {leaf.bullets.slice(0, 3).map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="mt-4 text-sm font-semibold text-slate-200">View details →</div>
            </Link>
          );
        })}
      </div>
    </main>
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
