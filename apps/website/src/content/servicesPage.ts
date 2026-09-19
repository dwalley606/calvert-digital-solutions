export const servicesPage = {
  hero: {
    eyebrow: "Web design / digital improvements / support",
    title: "Build. Grow. Support.",
    description: "Practical digital help for local businesses—whether you need a new website, a more useful one, or someone to keep it working.",
    links: [{ label: "Build", href: "#build" }, { label: "Grow", href: "#grow" }, { label: "Support", href: "#support" }],
  },
  build: {
    eyebrow: "Build",
    title: "Start with the right foundation.",
    description: "A custom build and a managed content system are both useful approaches. The right choice depends on what your business needs to publish, manage, and connect.",
    guidance: "You do not need to choose the technology before we talk.",
    approaches: [
      { title: "Custom Websites", icon: "code" as const, description: "A purpose-built website shaped around your content, services, workflow, and long-term needs.", details: ["Custom design and development", "Responsive layouts", "Forms and practical integrations", "Performance foundations"], href: "/services/custom-websites" },
      { title: "Managed CMS Websites", icon: "cms" as const, description: "A flexible, familiar editing experience for businesses that want to manage routine content themselves.", details: ["CMS setup and configuration", "Content structure and training", "Plugin and theme guidance", "Ongoing technical support"], href: "/services/cms-websites" },
    ],
  },
  grow: {
    eyebrow: "Grow",
    title: "Make the website do more than exist.",
    description: "Improve how your website communicates, performs, connects to useful tools, and supports the work your business is already doing.",
    capabilities: [
      { title: "Performance & Usability", icon: "speed" as const, description: "Practical improvements to load times, navigation, mobile behavior, and the overall visitor experience." },
      { title: "Search Foundations", icon: "search" as const, description: "Technical structure, metadata, local signals, and content guidance that help search engines understand the site." },
      { title: "Analytics & Integrations", icon: "analytics" as const, description: "Connect analytics, forms, scheduling, CRM, email, and other useful business tools where appropriate." },
      { title: "Digital Consulting", icon: "consulting" as const, description: "A practical second set of eyes when you need help deciding what deserves attention and what can wait." },
    ],
  },
  support: {
    eyebrow: "Support",
    title: "Keep it working without the headache.",
    description: "Get help with the recurring website work that is easy to postpone and frustrating to troubleshoot alone.",
    careTitle: "Ongoing Website Care",
    items: ["Maintenance and content updates", "Hosting and domain help", "Troubleshooting", "Analytics checks", "Security and monitoring where supported", "Incremental improvements"],
    partnerTitle: "More than maintenance",
    partnerDescription: "CDS can remain involved as a local digital point person—helping you sort through questions, coordinate improvements, and decide on a sensible next step.",
  },
  decisions: {
    eyebrow: "Not sure where you fit?",
    title: "That’s normal.",
    description: "Tell CDS what you are trying to accomplish. You should not need to diagnose the technology before asking for help.",
    options: [
      { label: "I need a new website.", action: "Build", href: "/services/custom-websites", icon: "code" as const },
      { label: "My site isn't doing enough.", action: "Grow", href: "/contact", icon: "analytics" as const },
      { label: "I don't want to deal with this anymore.", action: "Support", href: "/services/monthly-retainer", icon: "support" as const },
      { label: "I'm not sure what the problem is.", action: "Let's talk", href: "/contact", icon: "consulting" as const },
    ],
  },
  cta: { title: "Ready to talk it through?", description: "Tell me what you are trying to accomplish, and we can identify a practical next step.", label: "Book a Call" },
} as const;
