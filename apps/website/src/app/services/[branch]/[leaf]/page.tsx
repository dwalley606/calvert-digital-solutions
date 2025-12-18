import { serviceBranches } from "@/content/servicesTree";
import Link from "next/link";

export default function LeafPage({
  params,
}: {
  params: { branch: string; leaf: string };
}) {
  const branch = serviceBranches.find((b) => b.id === params.branch);
  const leaf =
    branch?.leaves.find((l) => slugify(l.title) === params.leaf) ?? null;

  if (!branch || !leaf) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-2xl font-bold">Service option not found</h1>
        <Link className="mt-4 inline-block text-slate-300 hover:text-white" href="/services">
          ← Back to Services
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <Link
        href={`/services/${branch.id}`}
        className="text-sm font-semibold text-slate-300 hover:text-white"
      >
        ← Back to {branch.title}
      </Link>

      <h1 className="mt-4 text-4xl font-extrabold tracking-tight">{leaf.title}</h1>
      <p className="mt-4 max-w-2xl text-slate-300">
        (Placeholder) Quick overview of what this includes and when it’s a good fit.
      </p>

      <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-7">
        <h2 className="text-xl font-semibold">What’s included</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
          {leaf.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
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
