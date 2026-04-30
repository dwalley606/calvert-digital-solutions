# CDS Website

Marketing site for Calvert Digital Solutions. Built with Next.js 16 App Router, Tailwind v4, TypeScript strict, React 19.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint    # eslint check
```

## Project structure

```
src/
├── app/                    # Routes (App Router)
│   ├── page.tsx            # Home
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   └── services/
│       ├── page.tsx
│       ├── [branch]/page.tsx
│       └── [branch]/[leaf]/page.tsx
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── sections/           # Full-width page sections (Hero, Services, About, …)
│   ├── blocks/             # Reusable blocks (ServiceTree)
│   └── ui/                 # Small UI primitives
├── content/                # All copy and data (edit here, not in JSX)
│   ├── site.ts
│   ├── services.ts
│   ├── servicesTree.ts
│   ├── process.ts
│   └── caseStudies.ts
└── lib/                    # Utilities, validators, CRM helpers
```

## Key conventions

- All copy/data lives in `src/content/` — never inline it in JSX
- Sections are self-contained; pages just compose sections
- Tailwind v4 CSS-first — no `tailwind.config.js`, configuration lives in `globals.css`
- Path alias `@/` maps to `src/`

## Open TODOs before launch

- [ ] Fill `site.ts`, `process.ts`, `caseStudies.ts`, `constraints.ts` stubs
- [ ] Replace `YOUR_VIDEO_ID` placeholder in `VideoSection`
- [ ] Fix empty `href` on `web-presence` service card
- [ ] Add Process section to home page
- [ ] Move service images from `src/app/services/` → `public/`
- [ ] Configure `next/font` for Geist (currently falling back to Arial)
