import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

const services = [
  {
    title: "Websites that convert",
    desc: "Fast, modern landing pages and small business sites that look legit and load instantly.",
  },
  {
    title: "Automation & CRM setup",
    desc: "Simple pipelines, follow-ups, and lead capture so you stop losing money to “I’ll remember later.”",
  },
  {
    title: "Security-first setup",
    desc: "Domains, email, DNS, password management, and hardening basics—no sketchy shortcuts.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services services={services} />
      <Process />
      <About />
      <Contact />
    </main>
  );
}


