# apps/website — Next.js App Guide

## Stack
- **Framework:** Next.js 16, App Router, `src/app` directory
- **Styling:** Tailwind v4 — uses `@import "tailwindcss"` in `globals.css`, NOT `tailwind.config.js`
- **Language:** TypeScript strict
- **React:** v19

## Running locally
```bash
cd apps/website
npm run dev   # http://localhost:3000
```

## Directory conventions

### `src/app/` — pages (App Router)
Each folder is a route. `page.tsx` is the entry point. Layouts compose via `layout.tsx`.

```
app/
├── layout.tsx            ← root layout: Navbar + Footer, dark bg-slate-950 body
├── page.tsx              ← home: Hero + VideoSection + Contact
├── services/
│   ├── page.tsx          ← services overview
│   ├── [branch]/page.tsx ← dynamic: /services/web-presence etc.
│   └── [branch]/[leaf]/page.tsx ← dynamic: individual service detail
├── about/page.tsx
└── contact/page.tsx
```

### `src/components/`
- `layout/` — Navbar, Footer (shared across all pages via root layout)
- `sections/` — full-width page sections (Hero, Services, About, Process, Contact, Video)
- `blocks/` — reusable content blocks used inside sections (ServiceTree)

**Pattern:** sections are standalone, self-contained. They import from `@/content/` for data.
Pages compose sections. Sections do not import each other.

### `src/content/` — all site copy and data
Edit here, not inside components.

| File | Purpose |
|---|---|
| `services.ts` | 3 top-level service cards (title, desc, image, href) |
| `servicesTree.ts` | Detailed branch/leaf breakdown for the services page |
| `process.ts` | Empty — intended for the 3-step "how it works" data |
| `caseStudies.ts` | Empty — intended for future case study cards |
| `site.ts` | Empty — intended for global metadata (business name, phone, etc.) |

### `src/lib/`
- `utils.ts` — shared utilities
- `constraints.ts` — empty, intended for business rules / constants

### `public/brand/`
- `logo/cds-logo-full-size.png` — large full logo
- `logo/cds-logo-horizontal.png` — wide format (used in hero)
- `logo/cds-navbar.png` — logo used in sticky navbar
- `logo/cds-navbar-paint.png` — paint-style variant
- `icon/cds-shield.png` — favicon / icon

## Key patterns

### Images
Use `next/image` for all images. Brand assets are in `/public/brand/`. Service images are currently in `src/app/services/` (web.jpg, automation.jpg, security.jpg) — these should eventually move to `public/`.

### Links
Use `next/link` for internal navigation. Use `<a target="_blank" rel="noreferrer">` for external (HubSpot, etc.).

### Slugs
`serviceBranches[].id` is the URL segment for `/services/[branch]`. Leaf slugs are generated with the local `slugify()` helper (lowercase, hyphens). This helper is duplicated — worth extracting to `src/lib/utils.ts`.

### Dynamic routes
`[branch]` and `[leaf]` pages are scaffolded but thin. They read from `servicesTree.ts` — no DB, no API.

## Known issues / TODOs
- `services.ts`: `web-presence` card has `href: ""` — should be `href: "/services/web-presence"`
- `VideoSection`: has placeholder `YOUR_VIDEO_ID` — swap when real video exists, or replace with a fallback UI
- `Process` section exists (`components/sections/Process.tsx`) but is not on the home page
- `site.ts`, `process.ts`, `caseStudies.ts`, `constraints.ts` are all empty stubs
- Geist font referenced in `globals.css` theme variables but `next/font/google` is not set up — body falls back to Arial
- `slugify()` is duplicated in `ServiceTree.tsx` and `[branch]/page.tsx` — extract to `lib/utils.ts`
- Service images (`web.jpg` etc.) live in `src/app/services/` — should move to `public/`

## What to avoid
- Vercel-specific APIs (`@vercel/og`, edge middleware, etc.) — keep it platform-portable
- Putting copy or data inside JSX — all content belongs in `src/content/`
- New `tailwind.config.js` — this project uses Tailwind v4 CSS-first config
