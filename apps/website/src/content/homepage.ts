export const homepage = {
  valueProof: [
    { icon: "fast", title: "Fast", description: "Built for real-world performance" },
    { icon: "custom", title: "Custom", description: "Designed around your business" },
    { icon: "mobile", title: "Mobile-first", description: "Intentional on every screen" },
    { icon: "local", title: "Local support", description: "A real person in Calvert County" },
  ],
  services: {
    eyebrow: "What CDS does",
    title: "Build. Grow. Support.",
    introduction:
      "Websites, strategy, and ongoing support to help local businesses look better, work smarter, and grow.",
    pillars: [
      {
        number: "01",
        title: "Build",
        statement: "Make the right first impression.",
        description:
          "New websites, focused redesigns, and a professional web presence shaped around your business.",
        href: "/services/custom-websites",
        linkLabel: "Explore website builds",
      },
      {
        number: "02",
        title: "Grow",
        statement: "Turn your website into a working business tool.",
        description:
          "Performance, search foundations, analytics, integrations, and practical digital improvements.",
        href: "/services",
        linkLabel: "Explore digital services",
      },
      {
        number: "03",
        title: "Support",
        statement: "Keep it current without chasing another contractor.",
        description:
          "Updates, maintenance, hosting and domain help, troubleshooting, and an ongoing local relationship.",
        href: "/services/monthly-retainer",
        linkLabel: "Explore ongoing support",
      },
    ],
  },
  trust: {
    eyebrow: "The CDS difference",
    title: "Local means local.",
    description:
      "You’re not a ticket number. Work directly with Danny from the first conversation through launch and beyond.",
    points: [
      "Clear, plain-English communication",
      "A real plan and real deadlines",
      "A site designed to perform",
      "An ongoing local partner",
    ],
    href: "/about",
    linkLabel: "Meet Danny",
  },
  cta: {
    eyebrow: "Ready when you are",
    title: "Let’s build something better.",
    description:
      "Tell me what your business needs. I’ll give you a clear, practical next step.",
    primary: { label: "Book a Call", href: "/contact" },
    secondary: { label: "Prefer email? Send me a message", href: "/contact" },
  },
} as const;
