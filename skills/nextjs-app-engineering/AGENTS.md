# AGENTS.md — Next.js full-stack app

A full-stack TypeScript web app on the App Router, rendering on the server by default and shipping client JavaScript only where a screen needs interaction.

## Setup and commands
- dev: `pnpm dev`
- e2e: `pnpm build && pnpm test:e2e`
- lint: `pnpm lint && pnpm typecheck`
- test: `pnpm test`
- build: `pnpm build`
- install: `pnpm install`

## Project structure
- `src/app/` — Routes: page.tsx, layout.tsx, loading.tsx, error.tsx and not-found.tsx per segment
- `src/app/(marketing)/ and src/app/(app)/` — Route groups that split public pages from signed-in screens with their own layouts
- `src/components/` — Design-skill components; server components by default, client ones marked at the top
- `src/features/<feature>/` — actions.ts (server actions), queries.ts (server reads), schema.ts (input validation)
- `src/server/` — Database client, auth helpers and anything that must never reach the browser (imports server-only)
- `src/styles/tokens.css` — CSS variables written from the design skill
- `tests/e2e/` — One Playwright spec per experience-skill journey

## Code style
- Files: kebab-case.ts; components PascalCase.tsx; route files use the framework names (page.tsx, layout.tsx)
- Tests: *.test.ts(x) beside the file; tests/e2e/<journey-id>.spec.ts
- Branches: type/short-description, e.g. feat/order-history
- Components: PascalCase, named after the design-skill component; client components end in .client.tsx when a server twin exists

### Code
- Prefer small, pure functions and explicit types at module boundaries. _(Easier to test, review and change.)_

### Components
- Components read design tokens; no raw hex values, pixel sizes or font names in component code. _(One token change restyles the product.)_
- Components are server components unless they need state, effects or browser APIs; put 'use client' on the smallest leaf that does. _(Every client boundary pulls its imports into the browser bundle.)_

### Data
- Analytics events are object_action in snake_case and come from the experience skill’s measures. _(Names stay consistent across teams and tools.)_
- Read data in server components through src/features/*/queries.ts; after a mutation, revalidate the exact path or tag it changed. _(One place to see what is cached and why a screen is stale.)_

### Errors
- Every async action has loading, empty, error and success states, matching the experience skill. _(Unhandled states are where users get stuck.)_
- Every route segment that fetches has loading.tsx and error.tsx; missing records call notFound(). _(Streaming shows progress, and failures stay inside the segment instead of blanking the page.)_

### Security
- Secrets never live in the repository; read them from the environment or a secret store. _(A leaked key outlives the commit that removed it.)_
- Validate every input on the server, even when the client already did. _(Clients can be bypassed.)_
- Web pages ship a Content-Security-Policy, HSTS, X-Frame-Options and nosniff. _(Cheap protection against the most common attacks.)_
- Every server action parses its input with a schema and checks the session before touching data. _(Server actions are public HTTP endpoints, whatever the UI shows.)_
- Modules under src/server/ import 'server-only'; only NEXT_PUBLIC_ variables may be read in client code, and none of them hold secrets. _(The build fails instead of leaking a database client or key to the browser.)_

### Performance
- Images go through next/image with explicit sizes; fonts through next/font; third-party scripts load after interaction. _(Protects LCP and CLS without hand-tuning each page.)_

### Accessibility
- Use native elements first; add ARIA only when no native element fits. _(Native controls bring keyboard and screen-reader support for free.)_
- Each page exports metadata with a unique title, and every page has exactly one h1. _(The route announcer reads the title, so screen-reader users hear where they landed.)_

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
| Performance budget | next build route report + Lighthouse CI | LCP ≤ 2.5s · INP ≤ 200ms · CLS ≤ 0.1 · ≤ 170KB first-load JS per route | Every pull request |
| Dependency and secret scan | Dependency audit + secret scanner | No high or critical findings; no secrets | Every pull request and nightly |
| Preview deploy | Hosting preview environment | A working preview link on the pull request | Every pull request |
| Server boundary | server-only imports + build | Build fails on any server-only module in a client bundle; 0 secrets in NEXT_PUBLIC_ variables | Every pull request |

## Pull requests
- Branching: Trunk-based: short-lived branches off main, squash-merged within two days.

**Review checklist**
- Correctness: does it do what the issue asks, including edge cases?
- Readability: could a new teammate change it safely?
- Architecture: is it in the right place, with the right boundaries?
- Security: inputs, secrets, permissions, dependencies
- Performance: budgets, queries, bundle size
- Tests fail when the code is broken (flip a condition and re-run)
- One approving review; two for auth, payments, data deletion or any new server action
- Reviewer checks each new 'use client' boundary and each revalidate call

**Definition of done**
- Acceptance criteria met and demoed on the preview link
- Tests added for new behaviour and every state
- Accessibility and performance gates green
- Analytics events named from the experience skill
- Docs or changelog updated when behaviour changes
- New server actions have a test for invalid input and for a signed-out caller

**Release**
- Small pull requests (aim for under 400 changed lines)
- CI green before review
- Squash-merge to main; main is always deployable
- Every release has a written rollback path
- Merge to main deploys to production; risky changes ship behind feature flags
- Database migrations run before the deploy and stay backwards compatible for one release

**Incidents**
- Roll back by promoting the previous deployment; migrations are forward-only, so ship a fix migration if needed
- Write a blameless note within 48 hours: what happened, impact, fix, prevention

_Generated from the Celestial engineering skill “Next.js full-stack app” (engineering core v1.0, checked 2026-10-26)._
