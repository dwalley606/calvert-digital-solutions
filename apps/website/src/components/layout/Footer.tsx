export default function Footer() {
    return (
      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-slate-400 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <span>
            © {new Date().getFullYear()} Calvert Digital Solutions
          </span>
  
          <span className="text-slate-500">
            Built in Maryland · Security-first
          </span>
        </div>
      </footer>
    );
  }
  