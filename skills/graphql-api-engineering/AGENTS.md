# AGENTS.md — GraphQL API server

A code-first GraphQL API in TypeScript with batched data loading, field-level authorisation, cost limits and a schema that only changes in backwards-compatible steps.

## Setup and commands
- dev: `pnpm dev`
- lint: `pnpm lint && pnpm typecheck && pnpm schema:check`
- test: `pnpm test`
- build: `pnpm build`
- deploy: `docker build -t graphql-api . && pnpm deploy:staging`
- install: `pnpm install --frozen-lockfile`

## Project structure
- `src/server.ts` — Yoga server, plugins (depth and cost limits, error masking, persisted operations) and health checks
- `src/schema/builder.ts` — Pothos builder with context type, scalars and auth plugin
- `src/schema/<domain>/` — Object types, queries and mutations for one domain
- `src/loaders/` — DataLoader factories, created fresh per request in the context
- `src/services/` — Business logic and database access; resolvers stay thin
- `schema.graphql` — Printed schema, committed and diffed in review
- `tests/operations/` — One test file per client operation or journey, against a real database

## Code style
- Files: kebab-case.ts
- Tests: *.test.ts beside services; tests/operations/<journey-id>.test.ts
- Branches: type/short-description, e.g. feat/invoice-line-items
- Components: Types PascalCase; fields camelCase; mutations verbNoun (createInvoice) with Input and Payload types

### Code
- Prefer small, pure functions and explicit types at module boundaries. _(Easier to test, review and change.)_
- Resolvers only map arguments, call a service and return; business rules live in src/services. _(Logic is testable without GraphQL and reusable from jobs and webhooks.)_

### Components
- Components read design tokens; no raw hex values, pixel sizes or font names in component code. _(One token change restyles the product.)_

### Data
- Analytics events are object_action in snake_case and come from the experience skill’s measures. _(Names stay consistent across teams and tools.)_
- Schema changes are additive; mark fields @deprecated with a reason and remove them only when usage metrics show zero for 30 days. _(Mobile clients stay installed for months and cannot all upgrade at once.)_
- Lists use cursor-based connections with a default and maximum first argument. _(Stable pagination and a hard cap on rows per request.)_

### Errors
- Every async action has loading, empty, error and success states, matching the experience skill. _(Unhandled states are where users get stuck.)_
- Expected failures are typed results in the payload (union of success and error types); unexpected errors are masked to a generic message with a request id. _(Clients can handle business errors, and stack traces never leak.)_

### Security
- Secrets never live in the repository; read them from the environment or a secret store. _(A leaked key outlives the commit that removed it.)_
- Validate every input on the server, even when the client already did. _(Clients can be bypassed.)_
- Web pages ship a Content-Security-Policy, HSTS, X-Frame-Options and nosniff. _(Cheap protection against the most common attacks.)_
- Authorise in the schema at field level (auth scopes on types and fields), not only at the top-level query. _(Nested fields can reach data through paths the top-level check never saw.)_
- Enforce max depth, max cost per operation and max page size; first-party clients use persisted operations in production. _(One crafted query must not exhaust the database.)_

### Performance
- Every field that loads a related record or list goes through a per-request DataLoader; resolvers never query inside a loop. _(Prevents N+1 queries that turn one request into hundreds.)_

### Accessibility
- Use native elements first; add ARIA only when no native element fits. _(Native controls bring keyboard and screen-reader support for free.)_

## Design and journeys
This stack has no UI; design skills do not apply.

When a Celestial experience skill is in use, give each journey one end-to-end test (happy path plus its error and empty states) and name analytics events `object_action` from its measures.

## Testing and checks (must pass before a pull request)
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Lint and types | The stack’s linter and type checker | 0 errors | Every pull request |
| Unit and component tests | The stack’s test runner | All pass; every design-skill component state covered | Every pull request |
| Performance budget | Load test of persisted operations + query counter in operation tests | p95 ≤ 300ms per operation at expected peak · ≤ 1 SQL query per relation per request | Every pull request (load test nightly) |
| Dependency and secret scan | Dependency audit + secret scanner | No high or critical findings; no secrets | Every pull request and nightly |
| Preview deploy | Hosting preview environment | A working preview link on the pull request | Every pull request |
| Schema compatibility | GraphQL Inspector diff against main | 0 breaking changes; removals only for fields deprecated 30+ days with zero recorded usage | Every pull request |

## Pull requests
- Branching: Trunk-based: short-lived branches off main, squash-merged within two days.

**Review checklist**
- Correctness: does it do what the issue asks, including edge cases?
- Readability: could a new teammate change it safely?
- Architecture: is it in the right place, with the right boundaries?
- Security: inputs, secrets, permissions, dependencies
- Performance: budgets, queries, bundle size
- Tests fail when the code is broken (flip a condition and re-run)
- One approving review; two for auth scopes, cost limits or data deletion
- A client developer reviews any new or changed type

**Definition of done**
- Acceptance criteria met and demoed on the preview link
- Tests added for new behaviour and every state
- Accessibility and performance gates green
- Analytics events named from the experience skill
- Docs or changelog updated when behaviour changes
- Printed schema updated and every new field has a description
- Operation test covers success, a typed error and an unauthorised caller

**Release**
- Small pull requests (aim for under 400 changed lines)
- CI green before review
- Squash-merge to main; main is always deployable
- Every release has a written rollback path
- Merge to main deploys to production with a canary at 10% for 30 minutes
- Database migrations run before the deploy and stay compatible with the previous release

**Incidents**
- Roll back to the previous image; block a runaway operation by name at the gateway
- Write a blameless note within 48 hours: what happened, impact, fix, prevention

_Generated from the Celestial engineering skill “GraphQL API server” (engineering core v1.0, checked 2026-10-26)._
