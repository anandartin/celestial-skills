# AGENTS.md — Server-rendered marketing site

Content pages that load fast on a slow phone: rendered on the server, almost no JavaScript, and strict performance gates.

## Setup and commands
- dev: `pnpm dev`
- e2e: `pnpm test:e2e`
- lint: `pnpm lint && pnpm check`
- test: `pnpm test`
- build: `pnpm build`
- install: `pnpm install`

## Project structure
- `src/pages/` — One file per route
- `src/layouts/` — Page shells: marketing, article, docs
- `src/components/` — Design-skill components as server components
- `src/content/` — Markdown content collections with typed frontmatter
- `src/styles/tokens.css` — CSS variables from the design skill, light and dark
- `public/` — Static assets, fonts and _headers

## Code style
- Files: kebab-case
- Tests: tests/<template>.spec.ts
- Branches: type/short-description
- Components: PascalCase.astro

### Code
- Prefer small, pure functions and explicit types at module boundaries. _(Easier to test, review and change.)_

### Components
- Components read design tokens; no raw hex values, pixel sizes or font names in component code. _(One token change restyles the product.)_

### Data
- Analytics events are object_action in snake_case and come from the experience skill’s measures. _(Names stay consistent across teams and tools.)_
- Every page sets a unique title, description and canonical URL from frontmatter. _(Search and sharing previews stay correct.)_

### Errors
- Every async action has loading, empty, error and success states, matching the experience skill. _(Unhandled states are where users get stuck.)_

### Security
- Secrets never live in the repository; read them from the environment or a secret store. _(A leaked key outlives the commit that removed it.)_
- Validate every input on the server, even when the client already did. _(Clients can be bypassed.)_
- Web pages ship a Content-Security-Policy, HSTS, X-Frame-Options and nosniff. _(Cheap protection against the most common attacks.)_

### Performance
- Ship zero JavaScript by default; every island needs a reason in the pull request. _(Content pages are judged on first load.)_
- Self-host fonts with font-display: swap and preload the one used above the fold. _(Avoids invisible text and layout shift.)_

### Accessibility
- Use native elements first; add ARIA only when no native element fits. _(Native controls bring keyboard and screen-reader support for free.)_
- One h1 per page; headings never skip a level. _(Screen-reader users navigate by headings.)_

## Design and journeys
When a Celestial design skill is in use, write its tokens as CSS custom properties in `src/styles/tokens.css`, and build its components in `src/components` with the same names and variants. Components read tokens only — no raw colours, sizes or font names.

When a Celestial experience skill is in use, give each journey one end-to-end test (happy path plus its error and empty states) and name analytics events `object_action` from its measures.

## Testing and checks (must pass before a pull request)
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Lint and types | The stack’s linter and type checker | 0 errors | Every pull request |
| Unit and component tests | The stack’s test runner | All pass; every design-skill component state covered | Every pull request |
| Journey tests | End-to-end runner | One test per experience-skill journey: happy path + error state | Every pull request |
| Accessibility | Automated audit (axe on web, platform audit on mobile) | WCAG 2.2 AA · no new violations | Every pull request |
| Performance budget | Lighthouse CI | Performance ≥ 95 · LCP ≤ 2.0s · CLS ≤ 0.05 · ≤ 50KB JS per page | Every pull request |
| Dependency and secret scan | Dependency audit + secret scanner | No high or critical findings; no secrets | Every pull request and nightly |
| Preview deploy | Hosting preview environment | A working preview link on the pull request | Every pull request |
| SEO and links | Lighthouse SEO + link checker | SEO ≥ 95 · no broken links | Every pull request |

## Pull requests
- Branching: Trunk-based; content edits can merge with one review from the content owner.

**Review checklist**
- Correctness: does it do what the issue asks, including edge cases?
- Readability: could a new teammate change it safely?
- Architecture: is it in the right place, with the right boundaries?
- Security: inputs, secrets, permissions, dependencies
- Performance: budgets, queries, bundle size
- Tests fail when the code is broken (flip a condition and re-run)
- Check the preview on a phone before approving
- Content changes reviewed for voice against the design skill

**Definition of done**
- Acceptance criteria met and demoed on the preview link
- Tests added for new behaviour and every state
- Accessibility and performance gates green
- Analytics events named from the experience skill
- Docs or changelog updated when behaviour changes

**Release**
- Small pull requests (aim for under 400 changed lines)
- CI green before review
- Squash-merge to main; main is always deployable
- Every release has a written rollback path
- Merge deploys; scheduled content publishes by date in frontmatter

**Incidents**
- Redeploy the previous build; content rollbacks via git revert

_Generated from the Celestial engineering skill “Server-rendered marketing site” (engineering core v1.0, checked 2026-10-25)._
