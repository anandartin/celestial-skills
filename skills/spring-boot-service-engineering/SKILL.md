---
name: spring-boot-service-engineering
description: "Engineering skill: Spring Boot service — how to build and ship a api / service with Spring Boot, Java, JUnit 5 + AssertJ. Use when writing, reviewing, testing or releasing code in this stack, and when turning a Celestial design or experience skill into code."
type: engineering
stack: api
core: "1.0"
checked: 2026-10-26
---

# Spring Boot service

A Java REST service on Spring Boot with layered packages by feature, validated DTOs, Flyway migrations and integration tests against real dependencies.

For business-critical backends: payments, orders, accounts, integrations with existing enterprise systems. Packaged as a container image and run on a container orchestrator, with health and metrics endpoints exposed through Actuator.

## Stack
- **Language:** Java 21+ (LTS) — Records, sealed types, pattern matching and virtual threads.
- **Framework:** Spring Boot 3.4+ — Auto-configuration, Spring MVC, Spring Security and Actuator.
- **State:** Stateless requests; JWT or opaque tokens validated per request — Horizontal scaling without sticky sessions.
- **Data:** PostgreSQL with Spring Data JPA + Flyway Postgres 16+ · Flyway ^10 — Repositories for common queries; SQL migrations versioned in the repo.
- **Build:** Gradle (Kotlin DSL) ^8.10 — Incremental builds, version catalogue and bootJar packaging.
- **Hosting:** Container orchestrator with health probes — Liveness and readiness come from Actuator; rolling updates by default.
- **Package manager:** Gradle version catalogue gradle/libs.versions.toml — Every dependency version in one file.
- **Testing:** JUnit 5 + AssertJ JUnit ^5.11 — Standard test runner with fluent assertions.
- **Testing:** Spring Boot Test + MockMvc with Boot — Slice tests for web and data layers.
- **Testing:** Testcontainers ^1.20 — Integration tests against real Postgres and brokers.

## Commands
- dev: `./gradlew bootRun --args=--spring.profiles.active=local`
- e2e: `./gradlew integrationTest`
- lint: `./gradlew spotlessCheck checkstyleMain`
- test: `./gradlew test`
- build: `./gradlew bootJar`
- deploy: `./gradlew bootBuildImage`
- install: `./gradlew dependencies`

## Structure
- `src/main/java/<base>/Application.java` — Spring Boot entry point
- `src/main/java/<base>/<feature>/` — Package per feature: Controller, Service, Repository, entities and DTO records
- `src/main/java/<base>/common/` — Security config, exception handlers, shared value types
- `src/main/resources/application.yml` — Defaults; secrets and environment values come from environment variables
- `src/main/resources/db/migration/` — Flyway migrations V<n>__description.sql
- `src/test/java/` — Unit, slice and Testcontainers integration tests mirroring main packages

## Naming
- Files: PascalCase.java, one public type per file
- Tests: <Class>Test.java for unit; <Feature>IT.java for integration
- Branches: type/short-description, e.g. feat/payout-schedule

## From design and experience skills
This stack has no UI; design skills do not apply.

When a Celestial experience skill is in use, give each journey one end-to-end test (happy path plus its error and empty states) and name analytics events `object_action` from its measures.

## Conventions
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

## Do
- Write Flyway migrations that the previous release can run against
- Expose metrics through Micrometer and trace with OpenTelemetry
- Use @WebMvcTest and @DataJpaTest slices for fast feedback

## Don't
- Use ddl-auto=update outside local development
- Catch Exception and swallow it
- Store secrets in application.yml

## Quality gates
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Lint and types | The stack’s linter and type checker | 0 errors | Every pull request |
| Unit and component tests | The stack’s test runner | All pass; every design-skill component state covered | Every pull request |
| Performance budget | Gatling or k6 load test against the preview environment | p95 ≤ 250ms and p99 ≤ 600ms at target RPS; error rate < 0.1% | Every pull request touching an endpoint or query |
| Dependency and secret scan | Dependency audit + secret scanner | No high or critical findings; no secrets | Every pull request and nightly |
| Preview deploy | Hosting preview environment | A working preview link on the pull request | Every pull request |
| Integration tests | Testcontainers suite | All pass against real Postgres | Every pull request |

## Workflow
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

## Overrides of the engineering core
- Journey tests: Replaced by MockMvc API tests plus Testcontainers integration tests — No UI in this stack; the consumer-facing journey is the API contract.
- Accessibility: Not applicable — No UI in this stack; accessibility is owned by the clients that call it.
- components: Not applicable — No design-skill components or tokens in an API service.
- Performance budget: Replaced by server latency targets: p95 ≤ 250ms, p99 ≤ 600ms — Web Vitals and bundle size do not apply to an API.

## Examples
### Validated controller (`src/main/java/com/example/orders/OrderController.java`)

```java
package com.example.orders;

import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import java.util.UUID;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/orders")
class OrderController {
  record CreateOrder(@NotNull UUID productId, @Min(1) @Max(100) int quantity) {}
  record OrderView(UUID id, String status, long totalMinor) {}

  private final OrderService orders;
  OrderController(OrderService orders) { this.orders = orders; }

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  OrderView create(@AuthenticationPrincipal(expression = "id") UUID userId,
                   @Valid @RequestBody CreateOrder body) {
    return orders.create(userId, body.productId(), body.quantity());
  }
}
```

## Further reading
- [Spring Boot documentation](https://docs.spring.io/spring-boot/) — Auto-configuration, Actuator, testing slices and packaging.
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/) — Concrete guidance on input validation, authentication and session handling.
- [OpenTelemetry documentation](https://opentelemetry.io/docs/) — Instrumenting traces, metrics and logs so latency budgets can be measured.
