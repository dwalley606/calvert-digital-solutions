import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <Image
            src="/brand/icon/cds-shield.png"
            alt="Calvert Digital Solutions"
            width={40}
            height={40}
            priority
          />
          <div className="leading-tight">
            <div className="font-semibold tracking-wide">Calvert Digital Solutions</div>
            <div className="text-xs text-slate-300">Web • Security • Automation</div>
          </div>
        </div>

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
    </header>
  );
}
