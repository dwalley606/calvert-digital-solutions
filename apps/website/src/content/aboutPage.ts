export const aboutPage = {
  metadata: {
    title: "About",
    description: "Meet Danny Walley, the Calvert County developer behind Calvert Digital Solutions. Practical web experience. Direct communication. Local support.",
  },
  hero: {
    eyebrow: "Danny Walley / Calvert County, Maryland",
    lines: ["Local business.", "Local developer.", "No handoffs."],
    introduction: "I’m Danny Walley. I started Calvert Digital Solutions to give local businesses a practical alternative to agencies, DIY website builders, and platforms that leave you figuring everything out yourself.",
    description: "When you work with CDS, you’re working directly with the person building and supporting the work.",
    photo: { src: "/about/selfie.jpg", alt: "Danny Walley", caption: "Danny Walley", detail: "Your developer. Your point of contact." },
  },
  story: {
    eyebrow: "How I got here",
    lines: ["I’ve been", "solving web", "problems for", "a while."],
    paragraphs: [
      "I served in the U.S. Air Force for more than a decade, originally as a professional musician. From 2019–2023, I also maintained and developed the U.S. Air Force Band’s public website using AFPIMS, the Air Force’s enterprise publishing system.",
      "That meant building public-facing pages, organizing content and digital resources, supporting events and ticketing, and improving search visibility. It was practical work: making a complex publishing system useful to the people relying on it.",
      "After leaving the Air Force, I completed a full-stack web development program at George Washington University in 2024 and expanded into modern web-development tools.",
    ],
    conclusion: "The part that stuck with me wasn’t any particular platform or programming language. It was being the person people came to when something on the web needed to work.",
    media: { src: "/about/selfie.jpg", alt: "Danny Walley, founder of Calvert Digital Solutions", label: "Meet Danny", caption: "The person behind the work." },
  },
  philosophy: {
    eyebrow: "The thinking behind CDS",
    title: "Build. Grow. Support.",
    pillars: [
      { title: "Build.", description: "Years of building and maintaining public-facing web systems, now applied to practical websites designed around what your business actually needs." },
      { title: "Grow.", description: "Launch isn’t the finish line. Improve how your business communicates, how customers find it, and how your website connects with the tools you use." },
      { title: "Support.", description: "Maintaining and improving systems has been part of my work for years. I can stay involved to troubleshoot, make improvements, and help you decide what comes next." },
    ],
  },
  working: {
    eyebrow: "Working directly with me",
    title: "Here’s what to expect.",
    points: [
      { number: "01", title: "Know the plan", description: "Clear scope, timeline, and cost before work begins." },
      { number: "02", title: "Know what’s happening", description: "Direct communication and updates from the person actually doing the work." },
      { number: "03", title: "Own what we build", description: "Your domain, website, accounts, and business assets remain yours. The work is set up to avoid proprietary lock-in." },
    ],
  },
  local: {
    eyebrow: "Calvert County, Maryland",
    title: "I live here too.",
    description: "CDS is based in Calvert County. I live and work here, and I build websites for businesses in the same community. You’ll know who you’re working with—and where to find me.",
  },
} as const;