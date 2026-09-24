# Website implementation guidance

Canonical architecture, routes, setup, integration behavior, and known limitations are in the [root README](../../README.md). Follow the [repository guide](../../CLAUDE.md) as well.

## Implementation entry points

- `src/app/layout.tsx` owns shared navigation, the main landmark, footer, metadata, local fonts, and conditional analytics. Do not add another main landmark inside new page implementations. The existing Monthly Retainer violation is pending separate work.
- `src/app/page.tsx` composes Home sections. Services overview and About compose sections in their own page files. About also reuses `HomeCTA`.
- `src/components/sections/Contact.tsx` is used only by `/contact` and renders `ContactForm`. Shared booking navigation leads to `/contact`.
- Prefer new/editable page copy in `src/content`; existing legacy pages and some shared components still contain inline text. Do not broadly refactor unrelated copy to enforce the convention.

## Visual implementation

Use the current Home, Services overview, About, and Contact implementations as design references. Reuse `globals.css` theme tokens, `.site-container`, `.section-spacing`, `.button-base`, button variants, and `.cds-display`.

Montserrat and Bebas Neue are locally loaded through `next/font/local`; use the established font variables and display class. Tailwind v4 configuration is CSS-first in `globals.css`; do not introduce a `tailwind.config.js`. Keep page-specific styling in scoped CSS modules where appropriate.

Use the existing production lighthouse SVGs and hero asset rather than older logo assumptions. The current selfie is temporary and appears on Home/About; About's media area is a still awaiting a real video. Never fabricate a video URL, controls, testimonial, or replacement business-card destination.

Prefer `next/image` for images and `next/link` for internal route navigation; use ordinary anchors for section links/external destinations. Preserve meaningful heading order, accessible names, contrast, visible focus, and intentional mobile reflow. Respect reduced-motion preferences when adding motion.

## Integration boundaries

Presentation work must preserve the HubSpot iframe destination/configuration, form fields and submission handling, API routes, scripts, IDs, and environment configuration unless the task explicitly authorizes integration changes. HubSpot's embedded appearance belongs to HubSpot configuration.

`src/content/contact.ts` owns the source-managed digital business-card destination. `/api/contact` performs Resend email and HubSpot CRM work; see the README for existing error-handling limitations. Mock/intercept requests for UI verification rather than sending real test messages.

## Scope and validation

Custom and CMS are modernized and independently compose the shared `src/components/services/ServiceDetail.tsx` pieces, `ServiceDetail.module.css`, and `types.ts`, using typed `src/content/customWebsite.ts` and `src/content/cmsWebsite.ts` content. Reuse that system for future service-detail adaptations.

Monthly Retainer still retains older design, structural, metadata, and lint issues. Modernize it only under an explicit scoped request; do not treat the current redesign as completion of every route.

Run targeted lint/type checks and appropriate visual checks for changed code. App-wide lint currently has six pre-existing errors: three in Monthly Retainer and three in unused `WhyCDS.tsx`; report them accurately. There is no automated test suite or dedicated type-check script. Keep dependency changes, cleanup, and unrelated lint fixes separate from documentation/presentation tasks.
