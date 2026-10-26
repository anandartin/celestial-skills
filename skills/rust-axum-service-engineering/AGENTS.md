# AGENTS.md — Rust Axum service

A Rust web service on Axum and Tokio with typed extractors, compile-time checked SQL and errors that map to HTTP responses through one type.

## Setup and commands
- dev: `cargo watch -x run`
- lint: `cargo fmt --check && cargo clippy --all-targets -- -D warnings`
- test: `cargo test`
- build: `cargo build --release`
- deploy: `docker build -t service . && docker push service`
- install: `cargo fetch`

## Project structure
- `src/main.rs` — Reads config, builds AppState, starts the server with graceful shutdown
- `src/app.rs` — Builds the Router and Tower middleware layers; tests import this
- `src/routes/` — One module per resource with handlers and request/response types
- `src/error.rs` — AppError enum implementing IntoResponse
- `src/db/` — Queries and domain types backed by SQLx
- `migrations/` — SQLx migrations
- `tests/` — Integration tests calling the router with oneshot

## Code style
- Files: snake_case.rs
- Tests: #[cfg(test)] mod tests in the same file; tests/<resource>.rs for integration
- Branches: type/short-description, e.g. feat/streaming-export

### Code
- Prefer small, pure functions and explicit types at module boundaries. _(Easier to test, review and change.)_
- No unwrap() or expect() outside startup and tests; use ? with context from anyhow or thiserror. _(A panic in a handler drops the request and hides the cause.)_
- Keep handlers small: extract, call a domain function, map to a response type. _(Domain logic stays testable without HTTP.)_

### Components
- Components read design tokens; no raw hex values, pixel sizes or font names in component code. _(One token change restyles the product.)_

### Data
- Analytics events are object_action in snake_case and come from the experience skill’s measures. _(Names stay consistent across teams and tools.)_
- Use sqlx::query! or query_as! macros and commit the offline query data (.sqlx/) so CI builds without a database. _(Schema drift becomes a compile error.)_

### Errors
- Every async action has loading, empty, error and success states, matching the experience skill. _(Unhandled states are where users get stuck.)_
- Handlers return Result<T, AppError>; AppError implements IntoResponse and is the only place status codes for failures are chosen. _(Consistent error bodies and no unwrap() on request paths.)_

### Security
- Secrets never live in the repository; read them from the environment or a secret store. _(A leaked key outlives the commit that removed it.)_
- Validate every input on the server, even when the client already did. _(Clients can be bypassed.)_
- Web pages ship a Content-Security-Policy, HSTS, X-Frame-Options and nosniff. _(Cheap protection against the most common attacks.)_
- Add tower-http layers for request body limit, timeout, CORS allow-list and tracing; deserialise with deny_unknown_fields. _(Bounded, strict input at the edge of the service.)_

### Performance
- Never block the async runtime: move CPU-heavy or blocking work into tokio::task::spawn_blocking. _(One blocking call stalls every task on that worker thread.)_

### Accessibility
- Use native elements first; add ARIA only when no native element fits. _(Native controls bring keyboard and screen-reader support for free.)_

## Design and journeys
This stack has no UI; design skills do not apply.

When a Celestial experience skill is in use, give each journey one end-to-end test (happy path plus its error and empty states) and name analytics events `object_action` from its measures.

## Testing and checks (must pass before a pull request)
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Lint and types | rustfmt + clippy with -D warnings | 0 warnings | Every pull request |
| Unit and component tests | The stack’s test runner | All pass; every design-skill component state covered | Every pull request |
| Performance budget | Load test against the preview environment + criterion benchmarks on hot paths | p95 ≤ 50ms and p99 ≤ 200ms at target RPS; no benchmark regression > 10% | Every pull request touching a handler or query |
| Dependency and secret scan | cargo deny (advisories, licences, bans) + secret scanner | No advisories; no disallowed licences; no secrets | Every pull request and nightly |
| Preview deploy | Hosting preview environment | A working preview link on the pull request | Every pull request |

## Pull requests
- Branching: Trunk-based: short-lived branches off main, squash-merged within two days.

**Review checklist**
- Correctness: does it do what the issue asks, including edge cases?
- Readability: could a new teammate change it safely?
- Architecture: is it in the right place, with the right boundaries?
- Security: inputs, secrets, permissions, dependencies
- Performance: budgets, queries, bundle size
- Tests fail when the code is broken (flip a condition and re-run)
- One approving review; two for auth, migrations or any unsafe block
- Reviewer checks new .await points for held locks and blocking calls

**Definition of done**
- Acceptance criteria met and demoed on the preview link
- Tests added for new behaviour and every state
- Accessibility and performance gates green
- Analytics events named from the experience skill
- Docs or changelog updated when behaviour changes
- Integration test covers success, bad input and unauthorised cases
- clippy clean with no new allow attributes

**Release**
- Small pull requests (aim for under 400 changed lines)
- CI green before review
- Squash-merge to main; main is always deployable
- Every release has a written rollback path
- Merge to main builds a release image; rolling update gated on a readiness endpoint
- sqlx migrate run executes as a release step and stays backwards compatible

**Incidents**
- Roll back by redeploying the previous image tag
- Blameless note within 48 hours

_Generated from the Celestial engineering skill “Rust Axum service” (engineering core v1.0, checked 2026-10-26)._
