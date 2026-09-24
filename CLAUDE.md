# CDS repository guidance

Read [README.md](README.md) for canonical developer documentation and [apps/website/CLAUDE.md](apps/website/CLAUDE.md) for app implementation guidance. Treat current source as authoritative when documentation disagrees; update affected documentation with an authorized implementation change.

## Scope and working conventions

- The only current app is `apps/website`. Run npm commands there; no root npm workspace is configured.
- Inspect git status before editing and preserve unrelated work. Stage only explicitly intended files when staging is authorized; never sweep untracked files into a website commit.
- `apps/website/REAPER-MCP-CAPABILITY-INVENTORY.md` is unrelated. Leave it untouched and exclude it from all website/redesign commits.
- Keep cleanup separate unless explicitly requested: retained components, assets, stubs, and lockfiles are not automatic deletion targets.
- Never expose or copy secret environment values into documentation or output.
- Vercel/Cloudflare are documented infrastructure assumptions, not repository-verified account or deployment facts. Do not invent plan or deployment claims.

## Product and content

CDS is Danny Walley's local web-development business serving Calvert County and Southern Maryland. Use practical, direct, personal language for small-business owners. Build/Grow/Support organizes the primary pages; avoid unsupported results, response-time guarantees, or invented service capabilities.

Home, Services overview, About, Contact, Custom Websites, and CMS Websites use the current editorial system. Monthly Retainer modernization remains pending. Preserve established branding, shared navigation/footer, and integration behavior within each task's scope.

## Verification

Use the README's validation commands and known-issue baseline. Report checks actually performed and distinguish pre-existing failures from regressions. Keep credentials, delivery tests, and external configuration changes out of presentation-only work. Do not stage, commit, or push without authorization.
