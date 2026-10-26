# AGENTS.md — NestJS service

A modular TypeScript service where each domain is a Nest module with its own controllers, providers and tests, wired by dependency injection.

## Setup and commands
- dev: `npm run start:dev`
- e2e: `npm run test:e2e`
- lint: `npm run lint && npx tsc --noEmit`
- test: `npm test`
- build: `npm run build`
- install: `npm ci`

## Project structure
- `src/main.ts` — Bootstrap: global pipes, filters, security headers, shutdown hooks
- `src/app.module.ts` — Root module importing config, database and feature modules
- `src/modules/<domain>/` — One folder per domain: module, controller, service, dto/, entities, *.spec.ts
- `src/common/` — Guards, interceptors, exception filters and decorators shared across modules
- `src/config/` — Typed configuration validated at startup
- `prisma/` — schema.prisma and migrations
- `test/` — End-to-end specs that boot the app with Supertest

## Code style
- Files: kebab-case.<role>.ts, e.g. orders.controller.ts
- Tests: *.spec.ts beside the unit; test/<domain>.e2e-spec.ts
- Branches: type/short-description, e.g. fix/billing-proration

### Code
- Prefer small, pure functions and explicit types at module boundaries. _(Easier to test, review and change.)_
- A module exports only the providers other modules need; cross-module calls go through those exported services, never through another module’s repository. _(Keeps domain boundaries real so a module can be extracted later.)_
- Controllers translate HTTP to service calls and nothing more; no Prisma calls in controllers. _(Business rules stay testable without HTTP.)_

### Components
- Components read design tokens; no raw hex values, pixel sizes or font names in component code. _(One token change restyles the product.)_

### Data
- Analytics events are object_action in snake_case and come from the experience skill’s measures. _(Names stay consistent across teams and tools.)_
- Enable a global ValidationPipe with whitelist, forbidNonWhitelisted and transform; every body and query is a DTO class. _(Unknown fields are rejected before they reach a service.)_

### Errors
- Every async action has loading, empty, error and success states, matching the experience skill. _(Unhandled states are where users get stuck.)_
- Map domain errors to HTTP in one exception filter; services throw domain errors, not HttpException. _(Services stay transport-agnostic and errors stay consistent.)_

### Security
- Secrets never live in the repository; read them from the environment or a secret store. _(A leaked key outlives the commit that removed it.)_
- Validate every input on the server, even when the client already did. _(Clients can be bypassed.)_
- Web pages ship a Content-Security-Policy, HSTS, X-Frame-Options and nosniff. _(Cheap protection against the most common attacks.)_
- Protect routes with guards that are on by default (global auth guard) and opt out explicitly with a @Public() decorator. _(Forgetting a decorator fails closed instead of open.)_

### Performance
- Move anything slower than 200ms or dependent on a third party into a queue job with retries and idempotency keys. _(Keeps request latency predictable when dependencies misbehave.)_

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
| Performance budget | Load test against the preview environment | p95 ≤ 250ms and p99 ≤ 600ms at target RPS; error rate < 0.1% | Every pull request touching a controller or query |
| Dependency and secret scan | Dependency audit + secret scanner | No high or critical findings; no secrets | Every pull request and nightly |
| Preview deploy | Hosting preview environment | A working preview link on the pull request | Every pull request |
| API contract | OpenAPI diff against main | No breaking change without a version bump | Every pull request |

## Pull requests
- Branching: Trunk-based: short-lived branches off main, squash-merged within two days.

**Review checklist**
- Correctness: does it do what the issue asks, including edge cases?
- Readability: could a new teammate change it safely?
- Architecture: is it in the right place, with the right boundaries?
- Security: inputs, secrets, permissions, dependencies
- Performance: budgets, queries, bundle size
- Tests fail when the code is broken (flip a condition and re-run)
- Module owners review changes inside their module
- Two reviewers for auth guards, migrations or anything touching money

**Definition of done**
- Acceptance criteria met and demoed on the preview link
- Tests added for new behaviour and every state
- Accessibility and performance gates green
- Analytics events named from the experience skill
- Docs or changelog updated when behaviour changes
- DTOs validate every input field
- Unit spec for the service and an e2e spec for the route

**Release**
- Small pull requests (aim for under 400 changed lines)
- CI green before review
- Squash-merge to main; main is always deployable
- Every release has a written rollback path
- Merge to main deploys API and worker images together with a rolling update
- Prisma migrations are backwards compatible with the previous release

**Incidents**
- Roll back by redeploying the previous image; pause queues if jobs are failing
- Blameless note within 48 hours

_Generated from the Celestial engineering skill “NestJS service” (engineering core v1.0, checked 2026-10-26)._
