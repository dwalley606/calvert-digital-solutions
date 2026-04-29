export type Service = {
  title: string;
  desc: string;
  href: string;
  icon: "globe" | "server" | "refresh";
};

export const services: Service[] = [
  {
    title: "Web Design & Development",
    desc: "Clean, modern websites built with React and Next.js. Fast-loading, mobile-first, and designed to turn visitors into leads.",
    href: "/services/web-design",
    icon: "globe",
  },
  {
    title: "Domain & Hosting Setup",
    desc: "Get your domain, DNS, and hosting configured correctly from the start. No confusion, no waiting — just a working setup.",
    href: "/services/domain-hosting",
    icon: "server",
  },
  {
    title: "Site Maintenance & Updates",
    desc: "Keep your site current, fast, and functional. Monthly check-ins, content updates, and someone to call when something breaks.",
    href: "/services/maintenance",
    icon: "refresh",
  },
];
