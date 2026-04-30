# Calvert Digital Solutions

Marketing website and tooling for Calvert Digital Solutions LLC — a web dev shop serving small businesses in Calvert County and Southern Maryland.

## Repo layout

```
calvert-digital-solutions/
├── apps/
│   └── website/    ← Next.js 16 marketing site (main app)
├── CLAUDE.md       ← agent context & project guide
└── README.md
```

This is a monorepo. Future apps (admin dashboard, client portal) would live under `apps/<name>`.

## Quick start

```bash
cd apps/website
npm install
npm run dev       # http://localhost:3000
```

## Apps

| App | Stack | Description |
|-----|-------|-------------|
| [website](apps/website) | Next.js 16, Tailwind v4, TypeScript | Public marketing site |

## Infrastructure

- **Hosting:** Vercel (free tier)
- **Domain / DNS:** Cloudflare
- **CRM / scheduling:** HubSpot free tier
