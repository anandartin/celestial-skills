# AGENTS.md — Angular enterprise app

A large Angular app built from standalone components and signals, with lazy feature routes, typed HTTP services and strict compiler settings.

## Setup and commands
- dev: `pnpm ng serve`
- e2e: `pnpm test:e2e`
- lint: `pnpm ng lint`
- test: `pnpm ng test`
- build: `pnpm ng build`
- install: `pnpm install --frozen-lockfile`

## Project structure
- `src/app/app.config.ts` — Providers: router, HttpClient with interceptors, zoneless change detection
- `src/app/app.routes.ts` — Top-level routes; each feature loaded with loadChildren or loadComponent
- `src/app/features/<feature>/` — Pages, feature routes, data service and store for one business area
- `src/app/ui/` — Design-skill components: presentational, signal inputs and outputs only, no services
- `src/app/core/` — Auth, interceptors, error handler and app-wide services (provided in root)
- `src/styles/tokens.css` — CSS variables written from the design skill
- `e2e/` — One Playwright spec per experience-skill journey

## Code style
- Files: kebab-case with type suffix where it helps: order-list.ts, order-list.html, orders.service.ts, orders.store.ts
- Tests: *.spec.ts beside the file; e2e/<journey-id>.spec.ts
- Branches: type/TICKET-short-description, e.g. feat/OPS-412-bulk-approve
- Components: PascalCase class named after the design-skill component; selector prefixed with the app prefix, e.g. app-button

### Code
- Prefer small, pure functions and explicit types at module boundaries. _(Easier to test, review and change.)_

### Components
- Components read design tokens; no raw hex values, pixel sizes or font names in component code. _(One token change restyles the product.)_
- Standalone components only, ChangeDetectionStrategy.OnPush, input()/output()/model() signals, and inject() instead of constructor parameters. _(One component style across teams; works with zoneless change detection.)_
- Templates use built-in control flow (@if, @for with track, @switch) and @defer for heavy below-the-fold blocks. _(Faster rendering and smaller initial bundles than structural directives.)_

### Data
- Analytics events are object_action in snake_case and come from the experience skill’s measures. _(Names stay consistent across teams and tools.)_
- Components never call HttpClient; they read signals from a feature service or store. Any manual subscribe uses takeUntilDestroyed. _(One place per API area to cache, retry and test; no leaked subscriptions.)_

### Errors
- Every async action has loading, empty, error and success states, matching the experience skill. _(Unhandled states are where users get stuck.)_
- A global ErrorHandler reports to telemetry; each resource-driven view renders its loading, empty and error state from the resource status. _(Failures are visible to users and to the team, not swallowed in a subscribe.)_

### Security
- Secrets never live in the repository; read them from the environment or a secret store. _(A leaked key outlives the commit that removed it.)_
- Validate every input on the server, even when the client already did. _(Clients can be bypassed.)_
- Web pages ship a Content-Security-Policy, HSTS, X-Frame-Options and nosniff. _(Cheap protection against the most common attacks.)_
- Never call bypassSecurityTrust* on data that came from a user or an API; auth tokens are attached by an interceptor, never by components. _(Angular sanitises bindings by default; bypassing it reopens XSS.)_

### Performance
- Every feature is a lazy route; ui/ components import nothing from features/. _(Keeps the initial bundle inside budget as the app grows.)_

### Accessibility
- Use native elements first; add ARIA only when no native element fits. _(Native controls bring keyboard and screen-reader support for free.)_
- Use CDK a11y for focus trapping and LiveAnnouncer for async results; set a page title on every route. _(Dialogs and background updates are the usual gaps in enterprise screens.)_

## Design and journeys
When a Celestial design skill is in use, write its tokens as CSS custom properties in `src/styles/tokens.css`, and build its components in `src/app/ui` with the same names and variants. Components read tokens only — no raw colours, sizes or font names.

When a Celestial experience skill is in use, give each journey one end-to-end test (happy path plus its error and empty states) and name analytics events `object_action` from its measures.

## Testing and checks (must pass before a pull request)
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Lint and types | The stack’s linter and type checker | 0 errors | Every pull request |
| Unit and component tests | The stack’s test runner | All pass; every design-skill component state covered | Every pull request |
| Journey tests | End-to-end runner | One test per experience-skill journey: happy path + error state | Every pull request |
| Accessibility | Automated audit (axe on web, platform audit on mobile) | WCAG 2.2 AA · no new violations | Every pull request |
| Performance budget | angular.json budgets + Lighthouse CI | Initial bundle error at 500KB, warning at 400KB · ≤ 170KB per lazy route · LCP ≤ 2.5s · INP ≤ 200ms | Every pull request |
| Dependency and secret scan | Dependency audit + secret scanner | No high or critical findings; no secrets | Every pull request and nightly |
| Preview deploy | Hosting preview environment | A working preview link on the pull request | Every pull request |
| Module boundaries | ESLint boundary rules | 0 imports from one feature into another; ui/ imports no feature or core code | Every pull request |

## Pull requests
- Branching: Trunk-based with short-lived branches; release branches only for regulated deployments that need a frozen build.

**Review checklist**
- Correctness: does it do what the issue asks, including edge cases?
- Readability: could a new teammate change it safely?
- Architecture: is it in the right place, with the right boundaries?
- Security: inputs, secrets, permissions, dependencies
- Performance: budgets, queries, bundle size
- Tests fail when the code is broken (flip a condition and re-run)
- One approving review from the owning team; two for auth, permissions or data deletion
- CODEOWNERS routes each feature folder to its team

**Definition of done**
- Acceptance criteria met and demoed on the preview link
- Tests added for new behaviour and every state
- Accessibility and performance gates green
- Analytics events named from the experience skill
- Docs or changelog updated when behaviour changes
- Feature route lazy-loaded and listed in the route map

**Release**
- Small pull requests (aim for under 400 changed lines)
- CI green before review
- Squash-merge to main; main is always deployable
- Every release has a written rollback path
- Merge to main deploys to staging; production deploys on a tagged build behind feature flags
- Release notes generated from conventional commits

**Incidents**
- Roll back by redeploying the previous tagged build
- Write a blameless note within 48 hours: what happened, impact, fix, prevention

_Generated from the Celestial engineering skill “Angular enterprise app” (engineering core v1.0, checked 2026-10-26)._
