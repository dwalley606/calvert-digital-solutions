import Link from "next/link";
import Image from "next/image";

const links = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-800">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-3">
            <Image
              src="/brand/logo/cds-logo-full-size.png"
              alt="Calvert Digital Solutions"
              width={200}
              height={44}
            />
            <p className="text-sm text-slate-400">
              Web design for Calvert County small businesses.
            </p>
          </div>

          <nav className="flex gap-6 text-sm text-slate-400">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 flex flex-col gap-1 text-xs text-slate-500 md:flex-row md:justify-between">
          <span>© {new Date().getFullYear()} Calvert Digital Solutions, LLC</span>
          <span>Built in Maryland</span>
        </div>
      </div>
    </footer>
  );
}
