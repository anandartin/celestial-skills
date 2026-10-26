# AGENTS.md — React web app

A single-page product app in TypeScript with utility-first styling, fast unit tests and real-browser journey tests.

## Setup and commands
- dev: `pnpm dev`
- e2e: `pnpm test:e2e`
- lint: `pnpm lint && pnpm typecheck`
- test: `pnpm test`
- build: `pnpm build`
- install: `pnpm install`

## Project structure
- `src/app/` — Routes and layouts, one folder per route
- `src/components/` — Design-skill components (Button, Input, Card…) — one folder each with component, test and story
- `src/features/` — Feature slices: UI + hooks + API calls for one journey
- `src/lib/` — Framework-free helpers
- `src/styles/tokens.css` — CSS variables written from the design skill
- `tests/e2e/` — One Playwright spec per experience-skill journey

## Code style
- Files: kebab-case.ts; components PascalCase.tsx
- Tests: *.test.ts(x) beside the file; e2e/<journey-id>.spec.ts
- Branches: type/short-description, e.g. feat/checkout-address
- Components: PascalCase, named after the design-skill component

### Code
- Prefer small, pure functions and explicit types at module boundaries. _(Easier to test, review and change.)_

### Components
- Components read design tokens; no raw hex values, pixel sizes or font names in component code. _(One token change restyles the product.)_
- Every component accepts className last and forwards refs. _(Composable without wrapper divs.)_
- Variants come from a typed variant map, never boolean prop soup. _(Matches the design skill’s variants and keeps props readable.)_

### Data
- Analytics events are object_action in snake_case and come from the experience skill’s measures. _(Names stay consistent across teams and tools.)_
- Server state only through query hooks in src/features/*/api.ts. _(One place to cache, retry and invalidate.)_

### Errors
- Every async action has loading, empty, error and success states, matching the experience skill. _(Unhandled states are where users get stuck.)_

### Security
- Secrets never live in the repository; read them from the environment or a secret store. _(A leaked key outlives the commit that removed it.)_
- Validate every input on the server, even when the client already did. _(Clients can be bypassed.)_
- Web pages ship a Content-Security-Policy, HSTS, X-Frame-Options and nosniff. _(Cheap protection against the most common attacks.)_

### Performance
- Lazy-load each route; keep third-party scripts out of the first load. _(Holds the 170KB per-route budget.)_

### Accessibility
- Use native elements first; add ARIA only when no native element fits. _(Native controls bring keyboard and screen-reader support for free.)_
- Focus moves to the page heading on route change. _(Screen-reader users hear where they are.)_

## Design and journeys
When a Celestial design skill is in use, write its tokens as Tailwind theme in `src/styles/tokens.css`, and build its components in `src/components` with the same names and variants. Components read tokens only — no raw colours, sizes or font names.

When a Celestial experience skill is in use, give each journey one end-to-end test (happy path plus its error and empty states) and name analytics events `object_action` from its measures.

## Testing and checks (must pass before a pull request)
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Lint and types | The stack’s linter and type checker | 0 errors | Every pull request |
| Unit and component tests | The stack’s test runner | All pass; every design-skill component state covered | Every pull request |
| Journey tests | End-to-end runner | One test per experience-skill journey: happy path + error state | Every pull request |
| Accessibility | Automated audit (axe on web, platform audit on mobile) | WCAG 2.2 AA · no new violations | Every pull request |
| Performance budget | Lighthouse CI + bundle analyzer | LCP ≤ 2.5s · INP ≤ 200ms · CLS ≤ 0.1 · ≤ 170KB JS per route | Every pull request |
| Dependency and secret scan | Dependency audit + secret scanner | No high or critical findings; no secrets | Every pull request and nightly |
| Preview deploy | Hosting preview environment | A working preview link on the pull request | Every pull request |

## Pull requests
- Branching: Trunk-based: short-lived branches off main, squash-merged within two days.

**Review checklist**
- Correctness: does it do what the issue asks, including edge cases?
- Readability: could a new teammate change it safely?
- Architecture: is it in the right place, with the right boundaries?
- Security: inputs, secrets, permissions, dependencies
- Performance: budgets, queries, bundle size
- Tests fail when the code is broken (flip a condition and re-run)
- One approving review; two for auth, payments or data deletion
- Reviewer runs the preview link through the journey, not just the diff

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
- Merge to main deploys to production behind feature flags
- Flags removed within two sprints of full rollout

**Incidents**
- Roll back by redeploying the previous build
- Write a blameless note within 48 hours: what happened, impact, fix, prevention

_Generated from the Celestial engineering skill “React web app” (engineering core v1.0, checked 2026-10-25)._
