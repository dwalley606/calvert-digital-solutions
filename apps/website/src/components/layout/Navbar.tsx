"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-coastal-blue/20 bg-navy/95 shadow-[0_8px_30px_rgba(2,12,27,0.18)] backdrop-blur">
      <div className="site-container flex min-h-20 items-center justify-between gap-4">
        <Link
          href="/"
          aria-label="Calvert Digital Solutions home"
          className="inline-flex shrink-0 items-center rounded-sm focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-coastal-blue"
        >
          <Image
            src="/brand/production/cds-horizontal-color-light.svg"
            alt="Calvert Digital Solutions"
            width={870}
            height={280}
            priority
            className="hidden h-auto w-[218px] md:block lg:w-[238px]"
          />
          <Image
            src="/brand/production/cds-shield-icon-color.svg"
            alt=""
            width={240}
            height={280}
            priority
            className="h-12 w-auto md:hidden"
          />
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-6 text-sm md:flex">
          {nav.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`border-b-2 py-2 font-medium transition-colors focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-coastal-blue ${
                  isActive
                    ? "border-red text-off-white"
                    : "border-transparent text-slate-300 hover:text-off-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link href="/contact" className="button-base button-primary ml-1">
            Book a Call
          </Link>
        </nav>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-coastal-blue/35 text-off-white transition-colors hover:border-coastal-blue hover:bg-white/5 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-coastal-blue md:hidden"
        >
          <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
          <span aria-hidden="true" className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 block h-0.5 w-5 bg-current transition-transform ${
                isOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] block h-0.5 w-5 bg-current transition-opacity ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 block h-0.5 w-5 bg-current transition-transform ${
                isOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!isOpen}
        className="border-t border-coastal-blue/20 bg-navy px-4 pb-5 pt-3 md:hidden"
      >
        <div className="mx-auto flex max-w-6xl flex-col">
          {nav.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setIsOpen(false)}
                className={`border-b border-white/10 px-2 py-3.5 text-base font-medium ${
                  isActive ? "text-off-white" : "text-slate-300"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="button-base button-primary mt-4 w-full"
          >
            Book a Call
          </Link>
        </div>
      </nav>
    </header>
  );
}
