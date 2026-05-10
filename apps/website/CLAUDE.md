# apps/website — Next.js App Guide

## Stack
- **Framework:** Next.js 16.0.10, App Router, `src/app` directory
- **Styling:** Tailwind v4 — uses `@import "tailwindcss"` in `globals.css`, NO `tailwind.config.js`
- **Language:** TypeScript strict
- **React:** v19.2.1
- **Email:** Resend (`resend` npm package) — used in the contact form API route
- **CRM:** HubSpot (free tier) — meeting embed + contact creation via private app token

## Running locally
```bash
cd apps/website
npm run dev   # http://localhost:3000
```
Requires a `.env.local` file copied from `.env.example` with real keys filled in.

## Environment variables
| Variable | Scope | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Public | Canonical URL (`https://calvertdigitalsolutions.com`) |
| `NEXT_PUBLIC_HUBSPOT_MEETING_URL` | Public | HubSpot embed URL — used in `Contact.tsx` iframe |
| `RESEND_API_KEY` | Server | Resend API key for contact form email delivery |
| `HUBSPOT_ACCESS_TOKEN` | Server | HubSpot private app token — creates CRM contacts on form submit |

## Design system (globals.css)
Custom Tailwind v4 color tokens:
```
navy      #0a1628   ← main page background
navy-800  #0d1f3c   ← card / navbar / footer background
navy-700  #122347   ← gradient surface variant
red       #c41e3a   ← primary CTA / accent color
red-dark  #a81932   ← hover state for red
```
Body defaults: `bg-navy text-slate-100`, font: `system-ui, -apple-system, Arial, sans-serif` (no Google Fonts).

---

## Directory layout

```
src/
├── app/
│   ├── layout.tsx                    ← root: Navbar + Footer, dark body
│   ├── globals.css                   ← Tailwind v4 + @theme tokens
│   ├── page.tsx                      ← home page
│   ├── about/page.tsx                ← /about (fully self-contained page)
│   ├── contact/page.tsx              ← /contact (wraps Contact section)
│   ├── services/
│   │   ├── page.tsx                  ← /services overview
│   │   ├── custom-websites/page.tsx  ← /services/custom-websites
│   │   ├── cms-websites/page.tsx     ← /services/cms-websites
│   │   └── monthly-retainer/page.tsx ← /services/monthly-retainer
│   └── api/
│       └── contact/route.ts          ← POST handler: Resend email + HubSpot contact
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx                ← sticky, bg-navy-800
│   │   └── Footer.tsx                ← bg-navy-800, © Calvert Digital Solutions LLC
│   └── sections/
│       ├── Hero.tsx                  ← used on home
│       ├── Services.tsx              ← used on home + /services page
│       ├── WhyCDS.tsx                ← used on home
│       ├── FeaturedWork.tsx          ← used on home
│       ├── Contact.tsx               ← used on home + /contact (HubSpot embed + ContactForm)
│       ├── ContactForm.tsx           ← 'use client', submits to /api/contact
│       ├── About.tsx                 ← NOT currently used on any page (old stub)
│       ├── Video.tsx                 ← NOT currently used, has placeholder VIDEO_ID
│       └── Process.tsx               ← NOT currently used on any page
├── content/
│   └── services.ts                   ← 3-item services array (title, desc, href)
│   (site.ts, process.ts, caseStudies.ts are empty stubs)
└── lib/
    └── utils.ts, constraints.ts      ← both empty stubs
```

---

## Pages

### Home (`/`)
Composes: `Hero → Services → WhyCDS → FeaturedWork → Contact`

### About (`/about`)
Fully self-contained in `about/page.tsx` — no separate section component used. Sections:
- Intro: photo + headline + one-para bio
- Background: 3 paragraphs (logistics/PM background → education degree → web dev)
- "What Working With Me Looks Like": 3-card grid (Clear timeline / Regular updates / You own everything)
- CTA: links to `/contact`

### Services overview (`/services`)
`Services` section (card grid from `services.ts`) + "Not sure what you need?" CTA block.

### Service detail pages (all share same structure)
Each has: back link → hero section → "What's Included/Covered" card grid → CTA

| Route | Title | Included items |
|---|---|---|
| `/services/custom-websites` | Custom Website Development | Custom Design, Mobile Responsive, SEO Foundations, Contact & Booking Integration, Performance Optimization |
| `/services/cms-websites` | CMS Website Builds & Migrations | Platform Consultation, Redesign, Content Migration, Mobile Optimization, Basic SEO Setup |
| `/services/monthly-retainer` | Monthly Maintenance & Support | Content Updates, Security Monitoring, Performance Checks, Priority Support, Hosting Management |

### Contact (`/contact`)
Wraps the `Contact` section — HubSpot meeting iframe + `ContactForm` below it.

---

## Components

### Layout
- **Navbar** — sticky `top-0 z-50`, nav links: Home / Services / About / Contact, "Book a Call" CTA anchors to `#contact`
- **Footer** — logo, nav links (Services / About / Contact), copyright + "Built in Maryland"

### Sections
- **Hero** — centered, logo image + h1 "Modern Websites for Calvert County Businesses" + two CTAs (Book a Free Call → `#contact`, See Services → `/services`)
- **Services** — reads from `src/content/services.ts`, renders 3 cards as `<Link>` to service detail pages
- **WhyCDS** — 3-card grid: "Local & Available" / "Clear Communication" / "Ships on Time"
- **FeaturedWork** — 3 placeholder project cards (all link to `https://danielwalley.vercel.app`), "View full portfolio →" link to same URL
- **Contact** — `id="contact"` section; HubSpot meeting iframe (src from `NEXT_PUBLIC_HUBSPOT_MEETING_URL`), then `ContactForm`
- **ContactForm** — `'use client'` component, fields: Name + Email + Message, POSTs JSON to `/api/contact`
- **About** _(unused)_ — old stub section, not imported anywhere
- **Video** _(unused)_ — YouTube embed with `YOUR_VIDEO_ID` placeholder, not imported anywhere
- **Process** _(unused)_ — 3-step "how it works" section, not imported anywhere

---

## API route — `POST /api/contact`

Validates name/email/message (basic type + presence checks). On valid input:
1. Sends email via Resend to `dwalley606@gmail.com`
2. Creates a HubSpot CRM contact via `https://api.hubapi.com/crm/v3/objects/contacts`

Both run in parallel (`Promise.allSettled`). Response is `500` only if email send fails; HubSpot failure is silent.

---

## Content files

`src/content/services.ts` — the only populated content file. Exports `services: Service[]`:
```ts
type Service = { title: string; desc: string; href: string; }
```
Current entries: Custom Websites (`/services/custom-websites`), CMS Websites (`/services/cms-websites`), Monthly Retainer (`/services/monthly-retainer`).

`site.ts`, `process.ts`, `caseStudies.ts`, `src/lib/constraints.ts` are all empty — intended for future use.

---

## Brand assets (`public/`)
```
public/
├── brand/
│   ├── logo/
│   │   ├── cds-logo-full-size.png   ← used in Hero and Navbar/Footer
│   │   ├── cds-logo-horizontal.png  ← available, not currently used
│   │   ├── cds-navbar.png           ← available, not currently used
│   │   └── cds-navbar-paint.png     ← available, not currently used
│   └── icon/
│       └── cds-shield.png           ← favicon + apple icon (in layout.tsx metadata)
└── about/
    └── selfie.jpg                   ← used on /about page
```
Service images (`web.jpg`, `automation.jpg`, `security.jpg`) live in `src/app/services/` — they are not currently used in any page or component.

---

## Key patterns

- Use `next/image` for all images
- Use `next/link` for all internal navigation
- Use `<a target="_blank" rel="noreferrer">` for external links (HubSpot, portfolio, etc.)
- All site copy and data belongs in `src/content/` — never inline data in JSX
- Tailwind v4 CSS-first config: add new design tokens in the `@theme` block in `globals.css`, never create `tailwind.config.js`

## What to avoid
- Vercel-specific APIs (`@vercel/og`, edge middleware, etc.) — keep it platform-portable
- Putting copy or data inside JSX — it belongs in `src/content/`
- Creating `tailwind.config.js` — this project uses Tailwind v4 CSS-first config

---

## Known TODOs
- `VideoSection` (`Video.tsx`) has `YOUR_VIDEO_ID` placeholder — swap when real video is ready or delete the component
- `About.tsx`, `Video.tsx`, `Process.tsx` exist but are not used anywhere — clean up or wire in when needed
- `FeaturedWork` cards all link to `https://danielwalley.vercel.app` — replace with real project links when available
- `site.ts`, `process.ts`, `caseStudies.ts`, `constraints.ts` are empty stubs
- Contact API `from` address is `onboarding@resend.dev` — needs a Resend-verified domain email before production
- Service images (`web.jpg`, etc.) in `src/app/services/` are unused — move to `public/` or delete
