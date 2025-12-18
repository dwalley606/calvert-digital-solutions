export type ServiceLeaf = {
    title: string;
    bullets: string[];
  };
  
  export type ServiceBranch = {
    id: string; // used for #anchors
    title: string;
    desc: string;
    leaves: ServiceLeaf[];
  };
  
  export const serviceBranches: ServiceBranch[] = [
    {
      id: "web-presence",
      title: "Web Presence",
      desc: "Modern websites and landing pages that make your business look legitimate and convert visitors into leads.",
      leaves: [
        {
          title: "Business Website",
          bullets: [
            "Modern design + mobile-first layout",
            "Fast load times + clean structure",
            "Clear calls-to-action (calls, booking, email)",
            "Basic SEO setup (titles, meta, indexing)",
          ],
        },
        {
          title: "Landing Pages",
          bullets: [
            "Single-offer pages for campaigns",
            "Clear above-the-fold messaging",
            "Tracking-ready (later: ads/GBP/UTM)",
            "Conversion-focused layout",
          ],
        },
        {
          title: "Site Refresh / Rebuild",
          bullets: [
            "Fix outdated design and messaging",
            "Clean up structure and navigation",
            "Improve speed and mobile behavior",
            "Keep what works—replace what doesn’t",
          ],
        },
      ],
    },
    {
      id: "lead-flow",
      title: "Lead Flow & Automation",
      desc: "Simple systems to capture leads, respond faster, and stop losing money to missed follow-ups.",
      leaves: [
        {
          title: "Contact & Booking Setup",
          bullets: [
            "Scheduling link setup (HubSpot/Calendly)",
            "Contact page conversion cleanup",
            "Fast response pathways (email + booking)",
          ],
        },
        {
          title: "CRM Setup",
          bullets: [
            "Pipeline + stages (simple, not enterprise)",
            "Basic contact organization",
            "Lead source tracking (later expansion)",
          ],
        },
        {
          title: "Notifications & Follow-ups",
          bullets: [
            "Email notifications on new leads",
            "Basic templates for quick replies",
            "Optional: text alerts later",
          ],
        },
      ],
    },
    {
      id: "security-foundations",
      title: "Security & Foundations",
      desc: "Domains, email, and security basics set up correctly—so you’re not one password reset away from chaos.",
      leaves: [
        {
          title: "Domain & DNS",
          bullets: [
            "Domain purchase + ownership cleanup",
            "DNS records setup (A/CNAME/TXT)",
            "Basic protections (where applicable)",
          ],
        },
        {
          title: "Business Email",
          bullets: [
            "Google Workspace or Microsoft 365 setup",
            "SPF/DKIM/DMARC basics (deliverability)",
            "Mailbox + forwarding + aliases (as needed)",
          ],
        },
        {
          title: "Website Security Basics",
          bullets: [
            "HTTPS/SSL sanity check",
            "Access control / admin hardening",
            "Backups and recovery basics",
          ],
        },
      ],
    },
  ];
  