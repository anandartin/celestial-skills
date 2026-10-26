# AGENTS.md — Fastify REST API

A typed JSON REST API on Node.js where every route declares its request and response schema, so validation, serialisation and docs come from one source.

## Setup and commands
- dev: `pnpm tsx watch src/server.ts`
- lint: `pnpm eslint . && pnpm tsc --noEmit`
- test: `pnpm vitest run`
- build: `pnpm tsc -p tsconfig.build.json`
- deploy: `docker build -t api . && docker push`
- install: `pnpm install --frozen-lockfile`

## Project structure
- `src/app.ts` — Builds the Fastify instance and registers plugins; no listen() here so tests can import it
- `src/server.ts` — Entry point: reads config, calls listen(), handles shutdown signals
- `src/plugins/` — Cross-cutting plugins: auth, database pool, rate limit, security headers, error handler
- `src/routes/` — One folder per resource with routes.ts, schema.ts and service.ts
- `src/db/` — Drizzle schema, migrations and the query helpers
- `src/config.ts` — Environment parsing and validation at startup
- `test/` — Integration tests per resource, using app.inject and a containerised database

## Code style
- Files: kebab-case.ts
- Tests: *.test.ts beside the module; test/<resource>.int.test.ts for integration
- Branches: type/short-description, e.g. feat/orders-refund

### Code
- Prefer small, pure functions and explicit types at module boundaries. _(Easier to test, review and change.)_
- Keep handlers thin: parse, call a service function, return. Business logic lives in service.ts and takes plain arguments. _(Services can be unit-tested without a request object.)_
- Register cross-cutting concerns as plugins with fastify-plugin only when they must be visible to sibling scopes. _(Encapsulation keeps one resource’s hooks from silently applying to another.)_

### Components
- Components read design tokens; no raw hex values, pixel sizes or font names in component code. _(One token change restyles the product.)_

### Data
- Analytics events are object_action in snake_case and come from the experience skill’s measures. _(Names stay consistent across teams and tools.)_
- Every route declares JSON schemas for params, querystring, body and each response status, using TypeBox or Zod type providers. _(Fastify validates input and strips unknown output fields from the same schema, so nothing undeclared leaks.)_

### Errors
- Every async action has loading, empty, error and success states, matching the experience skill. _(Unhandled states are where users get stuck.)_
- Throw typed HTTP errors and let one setErrorHandler map them to a problem+json body; never send stack traces outside development. _(Clients get a stable error shape and attackers get nothing useful.)_

### Security
- Secrets never live in the repository; read them from the environment or a secret store. _(A leaked key outlives the commit that removed it.)_
- Validate every input on the server, even when the client already did. _(Clients can be bypassed.)_
- Web pages ship a Content-Security-Policy, HSTS, X-Frame-Options and nosniff. _(Cheap protection against the most common attacks.)_
- Authenticate in an onRequest hook and authorise inside the service using the caller’s id, never an id taken from the body. _(Ownership checks that rely on client input are the most common API flaw.)_

### Performance
- Set bodyLimit, connection and request timeouts, and a pool size per instance; use the logger at info level with redaction of auth headers. _(Bounded resources keep one slow client from starving the process.)_

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
| Performance budget | Load test (k6 or autocannon) against the preview environment | p95 ≤ 200ms and p99 ≤ 500ms at target RPS; error rate < 0.1% | Every pull request touching a route or query |
| Dependency and secret scan | Dependency audit + secret scanner | No high or critical findings; no secrets | Every pull request and nightly |
| Preview deploy | Hosting preview environment | A working preview link on the pull request | Every pull request |
| API contract | OpenAPI diff against main | No breaking change without a new version path | Every pull request |

## Pull requests
- Branching: Trunk-based: short-lived branches off main, squash-merged within two days.

**Review checklist**
- Correctness: does it do what the issue asks, including edge cases?
- Readability: could a new teammate change it safely?
- Architecture: is it in the right place, with the right boundaries?
- Security: inputs, secrets, permissions, dependencies
- Performance: budgets, queries, bundle size
- Tests fail when the code is broken (flip a condition and re-run)
- One approving review; two for auth, payments, migrations or data deletion
- Reviewer reads the OpenAPI diff before the code diff

**Definition of done**
- Acceptance criteria met and demoed on the preview link
- Tests added for new behaviour and every state
- Accessibility and performance gates green
- Analytics events named from the experience skill
- Docs or changelog updated when behaviour changes
- Route has request and response schemas for every status it returns
- Integration test covers success, validation failure and unauthorised access

**Release**
- Small pull requests (aim for under 400 changed lines)
- CI green before review
- Squash-merge to main; main is always deployable
- Every release has a written rollback path
- Merge to main builds an image and deploys with a rolling update
- Migrations are additive and run before the new code; destructive changes ship a release later

**Incidents**
- Roll back by redeploying the previous image tag
- Write a blameless note within 48 hours: what happened, impact, fix, prevention

_Generated from the Celestial engineering skill “Fastify REST API” (engineering core v1.0, checked 2026-10-26)._
