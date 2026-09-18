import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-coastal-blue/25 bg-navy text-off-white">
      <div className="site-container py-12 sm:py-14">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.35fr)_minmax(15rem,0.65fr)] md:items-end">
          <div>
            <Link
              href="/"
              aria-label="Calvert Digital Solutions home"
              className="inline-block rounded-sm focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-coastal-blue"
            >
              <Image
                src="/brand/production/cds-horizontal-tagline-color-light.svg"
                alt="Calvert Digital Solutions — Local businesses. Real solutions."
                width={870}
                height={280}
                className="h-auto w-[290px] sm:w-[350px]"
              />
            </Link>
            <p className="mt-5 max-w-md text-sm leading-6 text-slate-300">
              Practical websites and ongoing support for small businesses in Calvert County and Southern Maryland.
            </p>
          </div>

          <div className="md:text-right">
            <p className="cds-display text-2xl tracking-[0.08em] text-off-white">
              Rooted in Calvert. Built for what&apos;s next.
            </p>
            <nav aria-label="Footer navigation" className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm md:justify-end">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-300 transition-colors hover:text-off-white focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-coastal-blue"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <Link href="/contact" className="button-base button-primary mt-6">
              Book a Call
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-coastal-blue/20 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Calvert Digital Solutions, LLC</span>
          <span>Calvert County, Maryland</span>
        </div>
      </div>
    </footer>
  );
}
