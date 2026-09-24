import type { Metadata } from "next";
import type { DetailHeroContent, DetailItem, DetailCtaContent } from "@/components/services/types";

type CmsWebsiteContent = {
  metadata: Metadata;
  hero: DetailHeroContent;
  meaning: { eyebrow: string; title: string; description: string; items: readonly DetailItem[] };
  fit: { eyebrow: string; title: string; examples: readonly string[]; counterpoint: DetailItem; link: { label: string; href: string } };
  projects: { eyebrow: string; title: string; items: readonly DetailItem[] };
  responsibilities: { eyebrow: string; title: string; description: string; items: readonly DetailItem[]; note: string };
  platform: { eyebrow: string; title: string; paragraphs: readonly string[] };
  cta: DetailCtaContent;
};

export const cmsWebsite: CmsWebsiteContent = {
  metadata: {
    title: "CMS Websites",
    description: "Professional websites with practical content editing for you and your team. Explore CMS website builds, redesigns, and migrations with Calvert Digital Solutions.",
  },
  hero: {
    eyebrow: "Build / CMS Websites",
    lines: ["Professional", "when they see it.", "Editable when", "you need it."],
    description: "A content management system gives you a professional website with a practical way to manage the content that changes—without rebuilding the page or calling a developer for every routine update.",
  },
  meaning: {
    eyebrow: "Useful control over your content",
    title: "What a CMS actually gives you.",
    description: "The point isn’t to give you another complicated piece of software. It’s to make the parts of your website that change regularly manageable.",
    items: [
      { title: "Professional design", description: "The public-facing website is still designed around your business, audience, and goals. Using a CMS doesn’t mean settling for a generic-looking site." },
      { title: "Editable content", description: "We define which routine content you or your staff should be able to update: text, images, team information, services, events, posts, or other content appropriate to your project." },
      { title: "Content that makes sense", description: "Editable content is organized into meaningful fields and sections, so routine updates don’t depend on understanding page layout or code." },
      { title: "Training and handoff", description: "When the project includes customer-managed content, a practical handoff helps the people responsible understand the parts they need to use." },
      { title: "Solid foundations", description: "Responsive behavior, sensible SEO and indexing foundations, performance considerations, and maintainable implementation remain part of the website." },
    ],
  },
  fit: {
    eyebrow: "Make everyday updates easier",
    title: "CMS makes sense when…",
    examples: [
      "Your business changes routine website content regularly.",
      "Several people need to update agreed types of content.",
      "You want control over everyday edits without touching code.",
      "Your site has repeatable content such as staff, services, events, articles, listings, or resources.",
      "An existing site is difficult to maintain, and better content structure would improve the workflow.",
    ],
    counterpoint: {
      title: "You don’t necessarily need a CMS.",
      description: "If your site changes rarely or a different architecture fits better, a CMS may add complexity without much benefit. Specialized functionality may call for custom development and editable, CMS-backed content together. These approaches can overlap.",
    },
    link: { label: "Explore Custom Websites", href: "/services/custom-websites" },
  },
  projects: {
    eyebrow: "Start fresh or rethink what’s there",
    title: "New website. Or a better way forward.",
    items: [
      { title: "New builds", description: "When owner- or staff-managed content is part of the requirements from the beginning, we can plan the design and editing experience together." },
      { title: "Existing sites / migrations", description: "A redesign or migration can help when the current site is hard to maintain, no longer fits the business, or needs its content reorganized. We assess the source platform, content, integrations, and requirements before agreeing what can move and what needs rebuilding." },
    ],
  },
  responsibilities: {
    eyebrow: "Define the handoff, not just the login",
    title: "What do I manage?",
    description: "You manage the content that makes sense for your business to control. I handle the development work that shouldn’t require you to become a web developer.",
    items: [
      { title: "Your everyday edits", description: "We agree which content you want to manage and who will update it. The editing experience and handoff focus on those responsibilities; not every element of the site needs to be editable." },
      { title: "The technical work", description: "Layout changes, integrations, system configuration, and other technical work sit outside normal content editing. We define what the project covers and what help you may want after launch." },
    ],
    note: "You don’t have to take on routine updates yourself. We can discuss ongoing help and agree its scope separately.",
  },
  platform: {
    eyebrow: "Requirements first",
    title: "The platform should fit the work.",
    paragraphs: [
      "What needs to be editable? Who will edit it, and how often? Those questions come before choosing a platform.",
      "Required features and integrations, long-term maintainability, and the amount of technical responsibility you want all inform the choice. The goal is a manageable website that fits your business.",
    ],
  },
  cta: {
    title: "Want a site you can actually keep current?",
    description: "Tell me what changes on your website and who needs to manage it. I’ll help you figure out whether a CMS approach makes sense.",
    primary: { label: "Book a Call", href: "/contact#book-a-time" },
    secondary: { label: "Send a Message", href: "/contact#send-a-message" },
  },
};
