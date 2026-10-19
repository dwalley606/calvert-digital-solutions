# Calvert Digital Solutions

Canonical developer documentation for the CDS public website. The site serves Calvert County and Southern Maryland businesses. This repository currently contains one Next.js application in `apps/website`; it has a monorepo-style directory layout but no root package manifest or configured npm workspaces.

Home, Services overview, About, Contact, Custom Websites, and CMS Websites use the current editorial design system. Monthly Retainer still requires modernization; the public-site redesign is not complete across every route.

## Runtime and quick start

The locked Next.js 16.0.10 dependency requires Node.js >=20.9.0. The repository does not pin a Node version. Use a supported compatible Node release and npm; run application commands from `apps/website`.

```sh
cd apps/website
npm ci
cp .env.example .env.local
# Supply appropriate values in .env.local before exercising integrations/building.
npm run dev
```

The default development URL is `http://localhost:3000`. Do not overwrite an existing `.env.local`; compare variable names with the example instead. Environment files other than `.env.example` are ignored. Never commit credentials.

This is a Next.js application requiring a Node-capable runtime: `/api/contact` performs server-side email and CRM work. A static-only export is not equivalent to this application.

## Stack and structure

- Next.js 16.0.10 App Router; React/React DOM 19.2.1.
- TypeScript with strict checking and `@/` mapped to `src/`.
- Tailwind CSS v4 through `@tailwindcss/postcss`, plus CSS modules.
- Resend for server-side email; HubSpot CRM calls use `fetch`.
- ESLint with Next.js Core Web Vitals and TypeScript rules.

```text
README.md                         Canonical project documentation
CLAUDE.md                         Repository-level agent guidance
package-lock.json                 Empty root lockfile; not an npm workspace
apps/
  package-lock.json               Empty intermediate lockfile
  website/
    package.json                  App scripts and dependencies
    package-lock.json             Application dependency lockfile
    .env.example                  Environment-variable template
    README.md                     App entry point into these docs
    CLAUDE.md                     App implementation guidance
    src/
      app/                        Public routes, API, root layout, theme, fonts
      components/layout/          Navbar and Footer
      components/sections/        Current page sections and retained legacy sections
      components/services/        Shared service-detail presentation, styles, and types
      content/                    Main-page copy/data and retained stubs
      lib/                        Currently empty utility/constraint stubs
    public/
      about/                      Current portrait
      brand/                      Production SVGs, hero artwork, icons, social image
```

The root and intermediate lockfiles currently trigger a multiple-lockfile/root-inference warning from Next.js. Review them in a separate cleanup task; application dependency installation belongs in `apps/website`.

## Routes and application architecture

All paths below are relative to `apps/website/src`.

| Route | Implementation | Current role |
| --- | --- | --- |
| `/` | `app/page.tsx` | Hero, ValueProof, BuildGrowSupport, ProofTrust, HomeCTA |
| `/services` | `app/services/page.tsx` | Build/Grow/Support offering, decision guidance, contact CTA |
| `/about` | `app/about/page.tsx` | Danny's background, philosophy, working commitments, local close, HomeCTA |
| `/contact` | `app/contact/page.tsx` | Contact section: booking, written contact, business-card link |
| `/services/custom-websites` | `app/services/custom-websites/page.tsx` | Modernized custom-development detail |
| `/services/cms-websites` | `app/services/cms-websites/page.tsx` | Modernized CMS editing, builds, and migrations detail |
| `/services/monthly-retainer` | `app/services/monthly-retainer/page.tsx` | Maintenance/support detail; pending modernization |
| `POST /api/contact` | `app/api/contact/route.ts` | Input validation, Resend email, HubSpot contact creation |

`app/layout.tsx` supplies local fonts, global CSS, metadata, Navbar, the main landmark, Footer, and optional Google Analytics scripts. Navbar has desktop/mobile navigation and active-route indication; shared booking links lead to `/contact`.

Build/Grow/Support is an organizing principle for Home's service introduction, the Services overview, and About's operating philosophy. It does not create additional routes or a separate application subsystem.

Main-page content lives in `content/hero.ts`, `homepage.ts`, `servicesPage.ts`, `aboutPage.ts`, and `contact.ts`. Services and About compose their sections directly in their page files. `Contact.tsx` is used only on `/contact` and renders the client-side `ContactForm.tsx`. `HomeCTA.tsx` is shared by Home and About. Monthly Retainer and some shared components retain inline copy; content separation is a convention, not a universal current property.

Custom and CMS remain independently composed routes. They reuse `src/components/services/ServiceDetail.tsx` for hero/back navigation, editorial sections, numbered lists, and closing CTAs; `ServiceDetail.module.css` supplies shared scoped styling and `types.ts` defines reusable content types. Typed per-service copy lives in `src/content/customWebsite.ts` and `src/content/cmsWebsite.ts`. The shared system does not require identical sections or section counts.

## Design system and assets

`src/app/globals.css` defines Tailwind v4 tokens, `.site-container`, `.section-spacing`, shared button classes, and `.cds-display`. Local fonts are loaded by `next/font/local` in the root layout:

- Montserrat variable font: body/UI text.
- Bebas Neue: display headings via `.cds-display`.

| Token | Value |
| --- | --- |
| navy / navy-800 / navy-700 | `#0b1f3b` / `#102a4c` / `#183b66` |
| red / red-dark | `#b22234` / `#8f1b2a` |
| off-white / slate | `#f5f5f4` / `#4b5563` |
| coastal-blue / sand | `#7ea3c8` / `#d4c3a2` |

The primary pages combine oversized display typography, asymmetric layouts, light/dark sections, red accents, rules, and lighthouse artwork. Reuse existing container, button, focus, and responsive patterns. Shared buttons and hero buttons include reduced-motion handling; this is not a claim that every existing transition has been audited.

Page-specific styles are in Hero, ServicesPage, AboutPage, and Contact CSS modules; Custom and CMS reuse the ServiceDetail CSS module. Production brand SVGs live in `public/brand/production`. Home uses `public/brand/hero/cds-shield-primary-color.svg` with solid backing behind the CDS lettering; root metadata and the web manifest reference icon/social assets. `public/about/selfie.jpg` is currently used on Home and in About's portrait and future-video areas. About's media frame currently contains a still, not a video player.

## Integrations and contact data flow

### Booking and digital business card

`Contact.tsx` renders `ConsultationBooking.tsx`, a native radio selector that defaults to Phone Consultation and switches the embedded HubSpot calendar to Google Meet Video Consultation. The two scheduling URLs and explanatory copy live in `src/content/contact.ts`; each URL uses `?embed=true`. The former `NEXT_PUBLIC_HUBSPOT_MEETING_URL` setting is no longer read by the booking section. HubSpot controls scheduling and the embedded interface; its appearance/configuration is managed outside this repository.

The Connect link uses `digitalBusinessCard.href` in `src/content/contact.ts`, opens in a new tab, and is source-managed separately from environment variables. Its destination needs a later owner-confirmed update; do not infer a replacement.

### Written contact

1. `ContactForm.tsx` collects required `name`, `email`, and `message` fields.
2. It POSTs those JSON keys to `/api/contact` and displays loading/success/error states based on the response.
3. The API checks string types, nonempty name/message, and an `@` in email; invalid input returns 400.
4. It starts a Resend email and a HubSpot contact-creation request in parallel, waiting through `Promise.allSettled`.
5. HubSpot receives `firstname`, `email`, and `message` properties at its contacts API. Email sender and recipient are currently hardcoded in the route; the sender is still the Resend onboarding address.

Existing limitations, recorded without changing behavior:

- The Resend client is constructed at module initialization. Missing `RESEND_API_KEY` blocked the recent production build while collecting `/api/contact` page data.
- A rejected email promise produces a 500 response. Resolved Resend error results are not inspected.
- HubSpot failure does not control the API response; the CRM HTTP response status is not checked.
- The browser submission handler has no network-error catch, so a rejected fetch can leave the form in its loading state.
- Current basic validation is not a comprehensive validation/abuse-prevention system.

The redesign preserved the scheduler configuration, business-card destination, form submission handler, and backend route. Presentation changes do not establish end-to-end email/CRM delivery verification.

## Environment variables

Use `apps/website/.env.example` as the variable template. No credential values belong in documentation. `NEXT_PUBLIC_` variables are public browser configuration, not secret storage.

| Variable | Scope | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Public | Metadata base URL; source supplies a production-domain fallback |
| `NEXT_PUBLIC_HUBSPOT_MEETING_URL` | Public | Legacy scheduler setting; the selector now uses the two source-managed URLs |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Public | Enables Google Analytics scripts in the root layout when set |
| `RESEND_API_KEY` | Server only | Resend email delivery and API module initialization |
| `HUBSPOT_ACCESS_TOKEN` | Server only | HubSpot contact creation; example documents `crm.objects.contacts.write` scope |

Provide real configuration separately in local/deployment environments. The example's placeholders are not working credentials. The GA integration is conditional; the contact integrations are not implemented as optional mock services.

## Development and validation

Run these from `apps/website`:

| Command | Purpose |
| --- | --- |
| `npm ci` | Install from the app lockfile |
| `npm run dev` | Start local Next.js development server |
| `npm run lint` | Run app-wide ESLint |
| `npx tsc --noEmit` | Type-check; incremental settings may write a cache |
| `npx tsc --noEmit --incremental false` | Type-check without writing the incremental cache |
| `npm run build` | Create production build; requires usable environment configuration |
| `npm start` | Serve a successful production build |

There is no dedicated type-check npm script or repository automated test suite. For scoped changes, run ESLint against the changed TS/TSX files and inspect desktop/mobile layouts, navigation, focus states, and relevant form states. Intercept form requests when testing presentation so tests do not send real email or create CRM records.

At the 2026-09-24 checkpoint audit, app-wide lint reported six pre-existing `react/no-unescaped-entities` errors: three in Monthly Retainer and three in unused `WhyCDS.tsx`. Both files remain untouched by this redesign checkpoint. Targeted lint and TypeScript checks passed for the changed source, including Custom and CMS. This is a dated baseline, not permission to ignore newly introduced failures.

The preceding About/Contact verification passed targeted lint and TypeScript checks. Contact was checked at 320, 390, 768, and 1440 pixels, including live scheduler rendering and intercepted loading/error/retry/success responses. The production build remained blocked by the missing Resend key. No live form delivery is implied by those checks.

## Deployment

Source establishes a standard Next.js build/start workflow, server-side contact API, and required environment configuration. `next.config.ts` currently contains no deployment-specific customization. There is no tracked CI deployment workflow, Dockerfile, or Vercel deployment configuration.

Earlier documentation identifies Vercel hosting and Cloudflare DNS as expected/documented infrastructure. This repository does not verify the active hosting account, DNS configuration, deployment root, branch, plan, or deployed revision. Confirm those separately; no hosting-plan claim is made here.

A deployment must build the app in `apps/website`, provide its environment configuration, and support the Next.js server behavior. Confirm production sender/domain setup with Resend, HubSpot token permissions, scheduler settings, and analytics/site configuration in their respective services before treating deployment as verified.

## Known limitations and pending work

- Replace temporary photography on Home/About and supply final approved assets.
- Add the future Meet Danny video to About's prepared media frame; no real video is wired yet.
- Confirm and update the digital business-card destination separately.
- Adjust scheduler appearance/configuration in HubSpot.
- Complete/verify production environment setup, including `RESEND_API_KEY`, email sender configuration, and CRM credentials.
- Modernize `/services/monthly-retainer`. It retains older visual patterns, a nested main landmark, and a title string that repeats the root metadata template's brand suffix. Review older cost/support claims during that future pass. Custom and CMS have been modernized and no longer have those landmark/title issues.
- Complete a whole-site desktop/mobile review after service-detail modernization.
- Address existing lint failures and contact error-handling limitations in separate scoped work.

Repository cleanup candidates are intentionally retained: unused About, FeaturedWork, Process, Services, Video, and WhyCDS sections; empty content/lib stubs; legacy logo/shield assets and service JPGs; and the empty root/intermediate lockfiles. The legacy Video component contains a placeholder video ID and is not About's future media implementation. Do not delete or activate candidates merely because they exist.

`apps/website/REAPER-MCP-CAPABILITY-INVENTORY.md` is unrelated to CDS website documentation. Leave it untouched and exclude it from website/redesign commits; it will be handled separately.
