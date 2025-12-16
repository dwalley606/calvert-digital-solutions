import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080E16] backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <Image
            src="/brand/logo/cds-navbar-paint.png"
            alt="Calvert Digital Solutions"
            width={220}
            height={64}
            priority
          />    

        <nav className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#process" className="hover:text-white">Process</a>
          <a href="#about" className="hover:text-white">About</a>
          <a
            href="#contact"
            className="rounded-lg bg-white/10 px-3 py-2 hover:bg-white/15"
          >
            Contact
          </a>
        </nav>
      </div>
      </div>
    </header>
  );
}
