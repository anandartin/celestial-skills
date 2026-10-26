---
name: graphql-api-engineering
description: "Engineering skill: GraphQL API server — how to build and ship a api / service with GraphQL Yoga + Pothos, TypeScript on Node.js, Vitest. Use when writing, reviewing, testing or releasing code in this stack, and when turning a Celestial design or experience skill into code."
type: engineering
stack: api
core: "1.0"
checked: 2026-10-26
---

# GraphQL API server

A code-first GraphQL API in TypeScript with batched data loading, field-level authorisation, cost limits and a schema that only changes in backwards-compatible steps.

For APIs that serve several clients with different data needs: web and mobile apps sharing one backend, partner integrations, product platforms. The schema is built in TypeScript, resolvers batch database access per request, and the server runs as a container on Node with a staging environment per pull request.

## Stack
- **Language:** TypeScript on Node.js TypeScript ^5.6 · Node 22 LTS+ — Schema, resolvers and database types share one type system.
- **Framework:** GraphQL Yoga + Pothos (code-first schema builder) Yoga ^6 · Pothos ^4 · graphql ^17 — Spec-compliant server with plugins for limits and masking; the schema is typed code, not a separate SDL file to keep in sync.
- **State:** Per-request context (user, loaders, request id) — Nothing user-specific outlives the request.
- **Data:** PostgreSQL via Drizzle ORM, batched with DataLoader PostgreSQL 16+ · DataLoader ^2 — Typed queries, and one query per relation per request instead of one per row.
- **Build:** TypeScript compiler (tsc) into a container image ^5.6 — Plain JavaScript output, small image, no bundler surprises on the server.
- **Hosting:** Container on a managed runtime, with a staging environment per pull request — Horizontal scaling and a working endpoint for each change.
- **Package manager:** pnpm ^10 — Fast, strict installs and reproducible images.
- **Testing:** Vitest ^3 — Resolver and service tests, plus operation tests executed against the schema.
- **Testing:** Testcontainers ^11 — Operation tests run against a real PostgreSQL, not mocks.
- **Testing:** GraphQL Inspector ^5 — Detects breaking schema changes against main.

## Commands
- dev: `pnpm dev`
- lint: `pnpm lint && pnpm typecheck && pnpm schema:check`
- test: `pnpm test`
- build: `pnpm build`
- deploy: `docker build -t graphql-api . && pnpm deploy:staging`
- install: `pnpm install --frozen-lockfile`

## Structure
- `src/server.ts` — Yoga server, plugins (depth and cost limits, error masking, persisted operations) and health checks
- `src/schema/builder.ts` — Pothos builder with context type, scalars and auth plugin
- `src/schema/<domain>/` — Object types, queries and mutations for one domain
- `src/loaders/` — DataLoader factories, created fresh per request in the context
- `src/services/` — Business logic and database access; resolvers stay thin
- `schema.graphql` — Printed schema, committed and diffed in review
- `tests/operations/` — One test file per client operation or journey, against a real database

## Naming
- Files: kebab-case.ts
- Tests: *.test.ts beside services; tests/operations/<journey-id>.test.ts
- Branches: type/short-description, e.g. feat/invoice-line-items
- Components: Types PascalCase; fields camelCase; mutations verbNoun (createInvoice) with Input and Payload types

## From design and experience skills
This stack has no UI; design skills do not apply.

When a Celestial experience skill is in use, give each journey one end-to-end test (happy path plus its error and empty states) and name analytics events `object_action` from its measures.

## Conventions
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

## Do
- Trace each operation by name with OpenTelemetry and record resolver timings
- Design mutations around user intent (approveInvoice), not table updates (updateInvoiceStatus)
- Review the printed schema diff before the code diff

## Don't
- Expose database columns one-to-one as the schema
- Return null for authorisation failures without a typed error the client can act on
- Share DataLoader instances across requests

## Quality gates
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Lint and types | The stack’s linter and type checker | 0 errors | Every pull request |
| Unit and component tests | The stack’s test runner | All pass; every design-skill component state covered | Every pull request |
| Performance budget | Load test of persisted operations + query counter in operation tests | p95 ≤ 300ms per operation at expected peak · ≤ 1 SQL query per relation per request | Every pull request (load test nightly) |
| Dependency and secret scan | Dependency audit + secret scanner | No high or critical findings; no secrets | Every pull request and nightly |
| Preview deploy | Hosting preview environment | A working preview link on the pull request | Every pull request |
| Schema compatibility | GraphQL Inspector diff against main | 0 breaking changes; removals only for fields deprecated 30+ days with zero recorded usage | Every pull request |

## Workflow
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

## Overrides of the engineering core
- Accessibility: Not applicable — the API has no UI; error messages in payloads are written to be shown to users — Nothing is rendered here; clients own accessibility.
- Journey tests: Replaced by operation tests: one per experience-skill journey's client operations, against a real database — The API's journeys are the operations clients run, not screens.
- Performance budget: Replaced by latency and query-count budgets per operation — Web vitals do not apply to an API.

## Examples
### Type with batched relation and field auth (`src/schema/invoices/invoice.ts`)

```ts
import { builder } from '../builder';
import { CustomerRef } from '../customers/customer';

export const InvoiceRef = builder.objectRef<Invoice>('Invoice');

InvoiceRef.implement({
  authScopes: { member: true },
  fields: (t) => ({
    id: t.exposeID('id'),
    number: t.exposeString('number'),
    totalCents: t.exposeInt('totalCents'),
    customer: t.field({
      type: CustomerRef,
      // One query for all invoices in this request, not one per invoice.
      resolve: (invoice, _args, ctx) => ctx.loaders.customerById.load(invoice.customerId),
    }),
    internalNotes: t.exposeString('internalNotes', {
      nullable: true,
      authScopes: { finance: true },
    }),
  }),
});
```

## Further reading
- [GraphQL learning guide](https://graphql.org/learn/) — Schema design, pagination, execution and authorisation concepts.
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/) — GraphQL-specific guidance on depth limits, batching attacks and introspection.
- [OpenTelemetry documentation](https://opentelemetry.io/docs/) — Tracing operations and resolvers across the server and database.
