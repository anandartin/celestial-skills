# AGENTS.md — SvelteKit web app

A SvelteKit app in TypeScript where pages load data on the server, forms work without JavaScript and get enhanced when it arrives.

## Setup and commands
- dev: `pnpm dev`
- e2e: `pnpm test:e2e`
- lint: `pnpm lint && pnpm check`
- test: `pnpm test`
- build: `pnpm build`
- install: `pnpm install`

## Project structure
- `src/routes/` — +page.svelte, +page.server.ts, +layout.svelte and +error.svelte per route
- `src/lib/components/` — Design-skill components, one folder each with component and test
- `src/lib/server/` — Database, auth and secrets; SvelteKit refuses to import it into client code
- `src/lib/state/` — Shared reactive state as .svelte.ts modules, created per request or per component tree
- `src/lib/schemas/` — Validation schemas shared by forms and actions
- `src/hooks.server.ts` — Session lookup, security headers and request logging
- `src/styles/tokens.css` — CSS variables written from the design skill
- `tests/e2e/` — One Playwright spec per experience-skill journey

## Code style
- Files: kebab-case.ts; components PascalCase.svelte; route files use the + prefix names
- Tests: *.test.ts beside the file; tests/e2e/<journey-id>.spec.ts
- Branches: type/short-description, e.g. feat/reschedule-booking
- Components: PascalCase, named after the design-skill component

### Code
- Prefer small, pure functions and explicit types at module boundaries. _(Easier to test, review and change.)_

### Components
- Components read design tokens; no raw hex values, pixel sizes or font names in component code. _(One token change restyles the product.)_
- Mutations are form actions with a real <form method="POST"> and use:enhance; no fetch-based submit handlers for standard forms. _(Forms keep working before JavaScript loads or if it fails.)_
- Declare props with $props() and a typed interface; derive values with $derived, not $effect. _(Effects that set state cause extra renders and ordering bugs.)_

### Data
- Analytics events are object_action in snake_case and come from the experience skill’s measures. _(Names stay consistent across teams and tools.)_
- Never hold per-user data in module-level variables on the server; pass it through locals, load data or context. _(Module state is shared by every request and leaks between users.)_

### Errors
- Every async action has loading, empty, error and success states, matching the experience skill. _(Unhandled states are where users get stuck.)_
- Actions return fail(status, { errors, values }) for invalid input; unexpected problems throw error() and render +error.svelte. _(Users keep what they typed and see field-level messages.)_

### Security
- Secrets never live in the repository; read them from the environment or a secret store. _(A leaked key outlives the commit that removed it.)_
- Validate every input on the server, even when the client already did. _(Clients can be bypassed.)_
- Web pages ship a Content-Security-Policy, HSTS, X-Frame-Options and nosniff. _(Cheap protection against the most common attacks.)_
- Read secrets only from $env/static/private or $env/dynamic/private, and only inside src/lib/server or *.server.ts files. _(SvelteKit fails the build if private env or server modules reach the client.)_

### Accessibility
- Use native elements first; add ARIA only when no native element fits. _(Native controls bring keyboard and screen-reader support for free.)_
- Treat Svelte compiler accessibility warnings as errors; every page sets <title> in <svelte:head>. _(The compiler catches missing labels and alt text before review.)_

## Design and journeys
When a Celestial design skill is in use, write its tokens as CSS custom properties in `src/styles/tokens.css`, and build its components in `src/lib/components` with the same names and variants. Components read tokens only — no raw colours, sizes or font names.

When a Celestial experience skill is in use, give each journey one end-to-end test (happy path plus its error and empty states) and name analytics events `object_action` from its measures.

## Testing and checks (must pass before a pull request)
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Lint and types | ESLint + svelte-check | 0 errors; 0 compiler accessibility warnings | Every pull request |
| Unit and component tests | The stack’s test runner | All pass; every design-skill component state covered | Every pull request |
| Journey tests | End-to-end runner | One test per experience-skill journey: happy path + error state | Every pull request |
| Accessibility | Automated audit (axe on web, platform audit on mobile) | WCAG 2.2 AA · no new violations | Every pull request |
| Performance budget | Lab measurement in CI | Web: LCP ≤ 2.5s · INP ≤ 200ms · CLS ≤ 0.1 · ≤ 170KB JS per route. Mobile: cold start ≤ 2s · 60fps scroll | Every pull request |
| Dependency and secret scan | Dependency audit + secret scanner | No high or critical findings; no secrets | Every pull request and nightly |
| Preview deploy | Hosting preview environment | A working preview link on the pull request | Every pull request |
| Progressive forms | Playwright with JavaScript disabled | Every form in a journey submits and shows validation errors without JavaScript | Every pull request |

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
- Reviewer checks what each load function returns to the client

**Definition of done**
- Acceptance criteria met and demoed on the preview link
- Tests added for new behaviour and every state
- Accessibility and performance gates green
- Analytics events named from the experience skill
- Docs or changelog updated when behaviour changes
- Forms tested with and without JavaScript

**Release**
- Small pull requests (aim for under 400 changed lines)
- CI green before review
- Squash-merge to main; main is always deployable
- Every release has a written rollback path
- Merge to main deploys to production behind feature flags
- Adapter or Svelte major upgrades ship in their own pull request

**Incidents**
- Roll back by redeploying the previous build
- Write a blameless note within 48 hours: what happened, impact, fix, prevention

_Generated from the Celestial engineering skill “SvelteKit web app” (engineering core v1.0, checked 2026-10-26)._
