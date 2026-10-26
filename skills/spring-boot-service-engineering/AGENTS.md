# AGENTS.md — Spring Boot service

A Java REST service on Spring Boot with layered packages by feature, validated DTOs, Flyway migrations and integration tests against real dependencies.

## Setup and commands
- dev: `./gradlew bootRun --args=--spring.profiles.active=local`
- e2e: `./gradlew integrationTest`
- lint: `./gradlew spotlessCheck checkstyleMain`
- test: `./gradlew test`
- build: `./gradlew bootJar`
- deploy: `./gradlew bootBuildImage`
- install: `./gradlew dependencies`

## Project structure
- `src/main/java/<base>/Application.java` — Spring Boot entry point
- `src/main/java/<base>/<feature>/` — Package per feature: Controller, Service, Repository, entities and DTO records
- `src/main/java/<base>/common/` — Security config, exception handlers, shared value types
- `src/main/resources/application.yml` — Defaults; secrets and environment values come from environment variables
- `src/main/resources/db/migration/` — Flyway migrations V<n>__description.sql
- `src/test/java/` — Unit, slice and Testcontainers integration tests mirroring main packages

## Code style
- Files: PascalCase.java, one public type per file
- Tests: <Class>Test.java for unit; <Feature>IT.java for integration
- Branches: type/short-description, e.g. feat/payout-schedule

### Code
- Prefer small, pure functions and explicit types at module boundaries. _(Easier to test, review and change.)_
- Organise by feature package, not by layer; classes are package-private unless another feature needs them. _(Boundaries are enforced by the compiler.)_
- Use constructor injection only; no field injection with @Autowired. _(Dependencies are explicit and classes are testable without Spring.)_

### Components
- Components read design tokens; no raw hex values, pixel sizes or font names in component code. _(One token change restyles the product.)_

### Data
- Analytics events are object_action in snake_case and come from the experience skill’s measures. _(Names stay consistent across teams and tools.)_
- Controllers accept and return DTO records annotated with Bean Validation and @Valid; JPA entities never cross the controller boundary. _(Prevents over-posting and lazy-loading surprises during serialisation.)_

### Errors
- Every async action has loading, empty, error and success states, matching the experience skill. _(Unhandled states are where users get stuck.)_
- Return RFC 9457 problem details from one @RestControllerAdvice; log the exception once with a correlation id. _(Consistent errors for clients and traceable logs for operators.)_

### Security
- Secrets never live in the repository; read them from the environment or a secret store. _(A leaked key outlives the commit that removed it.)_
- Validate every input on the server, even when the client already did. _(Clients can be bypassed.)_
- Web pages ship a Content-Security-Policy, HSTS, X-Frame-Options and nosniff. _(Cheap protection against the most common attacks.)_
- Configure a SecurityFilterChain that denies by default and expose only /actuator/health publicly. _(New endpoints are protected until someone opens them on purpose.)_

### Performance
- Set open-in-view to false, define fetch plans per query, and keep @Transactional on service methods only. _(Avoids hidden queries and long-held connections.)_

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
| Performance budget | Gatling or k6 load test against the preview environment | p95 ≤ 250ms and p99 ≤ 600ms at target RPS; error rate < 0.1% | Every pull request touching an endpoint or query |
| Dependency and secret scan | Dependency audit + secret scanner | No high or critical findings; no secrets | Every pull request and nightly |
| Preview deploy | Hosting preview environment | A working preview link on the pull request | Every pull request |
| Integration tests | Testcontainers suite | All pass against real Postgres | Every pull request |

## Pull requests
- Branching: Trunk-based: short-lived branches off main, squash-merged within two days.

**Review checklist**
- Correctness: does it do what the issue asks, including edge cases?
- Readability: could a new teammate change it safely?
- Architecture: is it in the right place, with the right boundaries?
- Security: inputs, secrets, permissions, dependencies
- Performance: budgets, queries, bundle size
- Tests fail when the code is broken (flip a condition and re-run)
- One approving review; two for security config, migrations or money movement
- Reviewer checks the migration against the running schema

**Definition of done**
- Acceptance criteria met and demoed on the preview link
- Tests added for new behaviour and every state
- Accessibility and performance gates green
- Analytics events named from the experience skill
- Docs or changelog updated when behaviour changes
- DTOs validated and documented in the OpenAPI spec
- Integration test covers success, validation failure and forbidden access

**Release**
- Small pull requests (aim for under 400 changed lines)
- CI green before review
- Squash-merge to main; main is always deployable
- Every release has a written rollback path
- Merge to main builds an image; Flyway migrates on startup of the first new pod
- Readiness probe gates traffic until migration and warm-up finish

**Incidents**
- Roll back to the previous image; Flyway migrations stay forward-only, fixes ship as new migrations
- Blameless note within 48 hours

_Generated from the Celestial engineering skill “Spring Boot service” (engineering core v1.0, checked 2026-10-26)._
