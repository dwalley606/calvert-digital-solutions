import type { Metadata } from "next";

import type { DetailHeroContent, DetailItem, DetailCtaContent } from '@/components/services/types';

type CustomWebsiteContent = {
  metadata: Metadata;
  hero: DetailHeroContent;
  meaning: { eyebrow: string; title: string; description: string; items: readonly DetailItem[] };
  fit: { eyebrow: string; title: string; examples: readonly string[]; counterpoint: DetailItem; link: { label: string; href: string } };
  approach: { eyebrow: string; title: string; paragraphs: readonly string[] };
  cta: DetailCtaContent;
};

export const customWebsite: CustomWebsiteContent = {
  metadata: {
    title: "Custom Website Development",
    description: "Websites built around your business, audience, and workflow. Explore when custom development makes sense with Calvert Digital Solutions.",
  },
  hero: {
    eyebrow: "Build / Custom Website Development",
    lines: ["Built around", "your business.", "Not a template."],
    description: "When an off-the-shelf website can’t do what your business needs, I’ll build around the problem instead of forcing the problem into a template.",
  },
  meaning: {
    eyebrow: "Purpose before platform",
    title: "What “custom” actually means.",
    description: "The starting point is what your business needs to accomplish. The design, features, and tools follow from there.",
    items: [
      { title: "Designed for your business", description: "The structure and experience are shaped around your business, audience, and goals, rather than starting with a preselected page-builder template." },
      { title: "Built for different screens", description: "Responsive behavior is designed and tested across representative phone, tablet, and desktop sizes." },
      { title: "Built to be found", description: "Clean structure, metadata, indexing fundamentals, and sensible SEO foundations are part of the build." },
      { title: "Connected to your workflow", description: "Forms, scheduling, lead capture, APIs, or other integrations can be incorporated where the project requires them." },
      { title: "Performance matters", description: "Performance, image handling, loading behavior, and efficient delivery are considered as part of implementation." },
    ],
  },
  fit: {
    eyebrow: "Choose the approach that fits",
    title: "Custom makes sense when…",
    examples: [
      "Your website needs to do something specific for your business or its customers.",
      "An existing platform or template is creating meaningful limitations.",
      "The integrations or workflows you need don’t fit an off-the-shelf solution.",
      "Control, performance, or room to extend the site materially matters to the project.",
    ],
    counterpoint: {
      title: "You don’t necessarily need custom.",
      description: "If a simpler CMS-based approach will accomplish your goal well, I can recommend that instead. Custom development can include editable, CMS-backed content, and a CMS project can include custom design and development. The goal is the right fit for the work.",
    },
    link: { label: "Explore CMS websites", href: "/services/cms-websites" },
  },
  approach: {
    eyebrow: "The tools serve the work",
    title: "Modern under the hood. Simple on your end.",
    paragraphs: [
      "I use modern web-development tools appropriate to the project. The choice depends on what the site needs to do, how content will be managed, and what needs to connect to it.",
      "You shouldn’t need to understand the technical stack just to operate your website. We’ll work out what you want to manage yourself and where ongoing help makes sense.",
    ],
  },
  cta: {
    title: "Have something specific in mind?",
    description: "Tell me what you’re trying to build. I’ll help you figure out whether custom development actually makes sense.",
    primary: { label: "Book a Call", href: "/contact#book-a-time" },
    secondary: { label: "Send a Message", href: "/contact#send-a-message" },
  },
};
