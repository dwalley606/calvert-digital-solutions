import { homepage } from "@/content/homepage";

export default function ValueProof() {
  return (
    <section aria-label="What makes a CDS website different" className="bg-coastal-blue text-navy">
      <div className="site-container py-6 sm:py-7">
        <ul className="grid grid-cols-2 md:grid-cols-4">
          {homepage.valueProof.map((item, index) => (
            <li
              key={item.title}
              className={`flex min-h-28 items-center gap-4 px-3 py-4 sm:px-5 ${
                index % 2 === 0 ? "border-r border-navy/25" : ""
              } ${index < 2 ? "border-b border-navy/25 md:border-b-0" : ""} ${
                index === 1 ? "md:border-r" : ""
              } ${index === 2 ? "md:border-r" : ""}`}
            >
              <ProofIcon name={item.icon} />
              <span>
                <strong className="cds-display block text-2xl leading-none tracking-[0.04em] sm:text-3xl">
                  {item.title}
                </strong>
                <span className="mt-1.5 block max-w-40 text-xs font-medium leading-4 text-navy/75">
                  {item.description}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ProofIcon({ name }: { name: (typeof homepage.valueProof)[number]["icon"] }) {
  const shared = "h-9 w-9 shrink-0 text-navy sm:h-10 sm:w-10";

  if (name === "fast") {
    return (
      <svg className={shared} viewBox="0 0 48 48" fill="currentColor" aria-hidden="true">
        <path d="M28 2 9 27h12l-3 19 21-28H27l1-16Z" />
      </svg>
    );
  }

  if (name === "custom") {
    return (
      <svg className={shared} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
        <rect x="5" y="7" width="38" height="27" rx="1" />
        <path d="M18 42h12M24 34v8" />
      </svg>
    );
  }

  if (name === "mobile") {
    return (
      <svg className={shared} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
        <rect x="14" y="3" width="20" height="42" rx="3" />
        <path d="M21 8h6M21 39h6" />
      </svg>
    );
  }

  return (
    <svg className={shared} viewBox="0 0 48 48" fill="currentColor" aria-hidden="true">
      <path d="M24 3C14.6 3 7 10.5 7 19.8 7 32.3 24 46 24 46s17-13.7 17-26.2C41 10.5 33.4 3 24 3Zm0 23.5a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z" />
    </svg>
  );
}
