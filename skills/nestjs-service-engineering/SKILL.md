---
name: nestjs-service-engineering
description: "Engineering skill: NestJS service — how to build and ship a api / service with NestJS, TypeScript, Jest. Use when writing, reviewing, testing or releasing code in this stack, and when turning a Celestial design or experience skill into code."
type: engineering
stack: api
core: "1.0"
checked: 2026-10-26
---

# NestJS service

A modular TypeScript service where each domain is a Nest module with its own controllers, providers and tests, wired by dependency injection.

For larger backends with several domains and teams: ordering, billing, accounts, admin APIs. Ships as a container image behind a load balancer; modules can later be split into separate services without rewriting their internals.

## Stack
- **Language:** TypeScript ^5.6 — Decorators and DTO classes keep request shapes explicit.
- **Framework:** NestJS ^12 — Modules, dependency injection, guards and pipes give each concern one obvious home.
- **State:** Stateless requests; queues for background work BullMQ ^5 — Request handlers stay fast; slow work moves to workers that can retry.
- **Data:** PostgreSQL with Prisma Postgres 16+ · Prisma ^6 — Schema file, typed client and migrations in one tool.
- **Build:** Nest CLI (tsc or SWC) ^12 — Consistent builds and generators for modules, controllers and providers.
- **Hosting:** Container platform with preview environments Node.js 22 LTS+ — Same image runs API and worker processes with different entry commands.
- **Package manager:** npm ^10 — Default for the Nest CLI; lockfile committed.
- **Testing:** Jest ^29 — Default Nest test runner, with the testing module for overriding providers.
- **Testing:** Supertest ^7 — End-to-end HTTP tests against the full Nest application.
- **Testing:** Testcontainers ^10 — Real Postgres and Redis in integration tests.

## Commands
- dev: `npm run start:dev`
- e2e: `npm run test:e2e`
- lint: `npm run lint && npx tsc --noEmit`
- test: `npm test`
- build: `npm run build`
- install: `npm ci`

## Structure
- `src/main.ts` — Bootstrap: global pipes, filters, security headers, shutdown hooks
- `src/app.module.ts` — Root module importing config, database and feature modules
- `src/modules/<domain>/` — One folder per domain: module, controller, service, dto/, entities, *.spec.ts
- `src/common/` — Guards, interceptors, exception filters and decorators shared across modules
- `src/config/` — Typed configuration validated at startup
- `prisma/` — schema.prisma and migrations
- `test/` — End-to-end specs that boot the app with Supertest

## Naming
- Files: kebab-case.<role>.ts, e.g. orders.controller.ts
- Tests: *.spec.ts beside the unit; test/<domain>.e2e-spec.ts
- Branches: type/short-description, e.g. fix/billing-proration

## From design and experience skills
This stack has no UI; design skills do not apply.

When a Celestial experience skill is in use, give each journey one end-to-end test (happy path plus its error and empty states) and name analytics events `object_action` from its measures.

## Conventions
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

## Do
- Generate the OpenAPI document with the Swagger module and diff it in CI
- Override providers in tests with Test.createTestingModule rather than mocking imports
- Call app.enableShutdownHooks() so connections close on deploy

## Don't
- Create circular module imports and patch them with forwardRef
- Put request-scoped providers on hot paths without measuring
- Return Prisma models straight from controllers

## Quality gates
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Lint and types | The stack’s linter and type checker | 0 errors | Every pull request |
| Unit and component tests | The stack’s test runner | All pass; every design-skill component state covered | Every pull request |
| Performance budget | Load test against the preview environment | p95 ≤ 250ms and p99 ≤ 600ms at target RPS; error rate < 0.1% | Every pull request touching a controller or query |
| Dependency and secret scan | Dependency audit + secret scanner | No high or critical findings; no secrets | Every pull request and nightly |
| Preview deploy | Hosting preview environment | A working preview link on the pull request | Every pull request |
| API contract | OpenAPI diff against main | No breaking change without a version bump | Every pull request |

## Workflow
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

## Overrides of the engineering core
- Journey tests: Replaced by Supertest e2e specs per endpoint plus an OpenAPI contract diff — No UI in this stack; the consumer-facing journey is the API contract.
- Accessibility: Not applicable — No UI in this stack; accessibility is owned by the clients that call it.
- components: Not applicable — No design-skill components or tokens in an API service.
- Performance budget: Replaced by server latency targets: p95 ≤ 250ms, p99 ≤ 600ms — Web Vitals and bundle size do not apply to an API.

## Examples
### Validated controller (`src/modules/orders/orders.controller.ts`)

```ts
import { Body, Controller, Post } from '@nestjs/common';
import { IsInt, IsUUID, Min } from 'class-validator';
import { CurrentUser } from '../../common/current-user.decorator';
import { OrdersService } from './orders.service';

export class CreateOrderDto {
  @IsUUID() productId!: string;
  @IsInt() @Min(1) quantity!: number;
}

@Controller('orders')
export class OrdersController {
  constructor(private readonly orders: OrdersService) {}

  @Post()
  create(@CurrentUser() userId: string, @Body() dto: CreateOrderDto) {
    return this.orders.create(userId, dto);
  }
}
```

## Further reading
- [NestJS documentation](https://docs.nestjs.com/) — Modules, providers, guards, pipes and the testing module.
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/) — Concrete guidance on input validation, authentication and session handling.
- [OpenTelemetry documentation](https://opentelemetry.io/docs/) — Instrumenting traces, metrics and logs so latency budgets can be measured.
