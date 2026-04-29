# Calvert Digital Solutions — Project Guide

## What this is
The marketing website for Calvert Digital Solutions LLC — a one-person web dev shop serving local small businesses in Calvert County and Southern Maryland. The site's job is to explain what CDS does, build trust with local owners, and convert visitors to a 15-minute intro call via HubSpot.

## Owner / developer
Daniel Walley. Background is React / Next.js web development. The "Security & Foundations" service category covers practical setup work (domain, Google Workspace, SSL) that happens at launch — not deep security consulting.

## Repo layout
```
calvert-digital-solutions/
├── CLAUDE.md               ← you are here
├── apps/
│   └── website/            ← Next.js 16 app (see apps/website/CLAUDE.md)
└── README.md
```

This is a monorepo. There is currently one app. Future apps (admin dashboard, client portal, etc.) would be added as `apps/<name>`.

## Hosting & infrastructure
- **Hosting:** Vercel (free tier) — avoid Vercel-specific APIs or edge features that create lock-in
- **Domain:** Managed on Cloudflare — DNS is handled there, not in code
- **CRM / scheduling:** HubSpot free tier — meeting link: `https://meetings-na2.hubspot.com/daniel-walley`

## Tone & voice
- Direct, no-fluff, practical
- Local and personal ("I'll tell you", "we ship") — not corporate
- Small business audience: skeptical of tech jargon, cares about outcomes and price
- No pressure sales language

## AI tooling notes
This project is designed to be AI-tool-agnostic. CLAUDE.md files are the source of truth for agent context. If adapting for another tool:
- Cursor: copy CLAUDE.md content into `.cursorrules`
- ChatGPT/Copilot: paste relevant sections as system context
