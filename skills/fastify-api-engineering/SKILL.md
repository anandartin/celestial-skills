---
name: fastify-api-engineering
description: "Engineering skill: Fastify REST API — how to build and ship a api / service with Fastify, TypeScript, Vitest. Use when writing, reviewing, testing or releasing code in this stack, and when turning a Celestial design or experience skill into code."
type: engineering
stack: api
core: "1.0"
checked: 2026-10-26
---

# Fastify REST API

A typed JSON REST API on Node.js where every route declares its request and response schema, so validation, serialisation and docs come from one source.

For product backends, BFFs and internal services that need predictable latency on Node.js. Runs as a stateless container behind a load balancer, with Postgres as the system of record and an OpenAPI document generated from the route schemas.

## Stack
- **Language:** TypeScript ^5.6 — Route handlers are typed from their schemas, so a renamed field fails the build.
- **Framework:** Fastify ^5 — Schema-first routing with fast serialisation and an encapsulated plugin model.
- **State:** Stateless requests; shared state in Postgres or Redis — Any instance can serve any request, so scaling is adding containers.
- **Data:** PostgreSQL with Drizzle ORM Postgres 16+ · Drizzle ^0.36 — Typed SQL close to the database, with migrations checked into the repo.
- **Build:** tsc + tsx TypeScript ^5.6 · tsx ^4 — tsc emits the production build; tsx runs and watches TypeScript in development.
- **Hosting:** Container platform with preview environments Node.js 22 LTS+ — One image per commit; each pull request gets its own environment.
- **Package manager:** pnpm ^9 — Fast, strict installs with a committed lockfile.
- **Testing:** Vitest ^3 — Fast unit tests that share the TypeScript config.
- **Testing:** fastify.inject built in — Exercises routes, hooks and schemas in-process without opening a port.
- **Testing:** Testcontainers ^10 — Integration tests against a real, throwaway Postgres.

## Commands
- dev: `pnpm tsx watch src/server.ts`
- lint: `pnpm eslint . && pnpm tsc --noEmit`
- test: `pnpm vitest run`
- build: `pnpm tsc -p tsconfig.build.json`
- deploy: `docker build -t api . && docker push`
- install: `pnpm install --frozen-lockfile`

## Structure
- `src/app.ts` — Builds the Fastify instance and registers plugins; no listen() here so tests can import it
- `src/server.ts` — Entry point: reads config, calls listen(), handles shutdown signals
- `src/plugins/` — Cross-cutting plugins: auth, database pool, rate limit, security headers, error handler
- `src/routes/` — One folder per resource with routes.ts, schema.ts and service.ts
- `src/db/` — Drizzle schema, migrations and the query helpers
- `src/config.ts` — Environment parsing and validation at startup
- `test/` — Integration tests per resource, using app.inject and a containerised database

## Naming
- Files: kebab-case.ts
- Tests: *.test.ts beside the module; test/<resource>.int.test.ts for integration
- Branches: type/short-description, e.g. feat/orders-refund

## From design and experience skills
This stack has no UI; design skills do not apply.

When a Celestial experience skill is in use, give each journey one end-to-end test (happy path plus its error and empty states) and name analytics events `object_action` from its measures.

## Conventions
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

## Do
- Export buildApp() and test through app.inject
- Generate the OpenAPI document from route schemas and commit a snapshot
- Handle SIGTERM by closing the server, then the database pool

## Don't
- Use await inside a forEach or leave a promise unhandled
- Read process.env outside config.ts
- Return database rows directly without a response schema

## Quality gates
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Lint and types | The stack’s linter and type checker | 0 errors | Every pull request |
| Unit and component tests | The stack’s test runner | All pass; every design-skill component state covered | Every pull request |
| Performance budget | Load test (k6 or autocannon) against the preview environment | p95 ≤ 200ms and p99 ≤ 500ms at target RPS; error rate < 0.1% | Every pull request touching a route or query |
| Dependency and secret scan | Dependency audit + secret scanner | No high or critical findings; no secrets | Every pull request and nightly |
| Preview deploy | Hosting preview environment | A working preview link on the pull request | Every pull request |
| API contract | OpenAPI diff against main | No breaking change without a new version path | Every pull request |

## Workflow
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

## Overrides of the engineering core
- Journey tests: Replaced by route-level integration tests via app.inject plus an OpenAPI contract diff — No UI in this stack; the consumer-facing journey is the API contract.
- Accessibility: Not applicable — No UI in this stack; accessibility is owned by the clients that call it.
- components: Not applicable — No design-skill components or tokens in an API service.
- Performance budget: Replaced by server latency targets: p95 ≤ 200ms, p99 ≤ 500ms — Web Vitals and bundle size do not apply to an API.

## Examples
### Schema-first route (`src/routes/orders/routes.ts`)

```ts
import { Type } from '@sinclair/typebox';
import type { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';
import { getOrder } from './service';

const Order = Type.Object({ id: Type.String(), total: Type.Integer(), status: Type.String() });

const routes: FastifyPluginAsyncTypebox = async (app) => {
  app.get('/orders/:id', {
    schema: {
      params: Type.Object({ id: Type.String({ format: 'uuid' }) }),
      response: { 200: Order, 404: Type.Object({ title: Type.String() }) },
    },
  }, async (req, reply) => {
    const order = await getOrder(app.db, req.user.id, req.params.id);
    if (!order) return reply.code(404).send({ title: 'Order not found' });
    return order;
  });
};
export default routes;
```

## Further reading
- [Fastify documentation](https://fastify.dev/docs/latest/) — Plugins, encapsulation, hooks and the validation and serialisation model.
- [OWASP Top Ten](https://owasp.org/www-project-top-ten/) — The attack classes every endpoint review should check against.
- [The Twelve-Factor App](https://12factor.net/) — Config in the environment, stateless processes and disposable containers.
