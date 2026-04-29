import Link from "next/link";
import Image from "next/image";

const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/brand/logo/cds-navbar.png"
            alt="Calvert Digital Solutions"
            width={180}
            height={40}
            priority
          />
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-slate-300 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="#contact"
            className="rounded-lg bg-red px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-dark"
          >
            Book a Call
          </a>
        </nav>
      </div>
    </header>
  );
}
