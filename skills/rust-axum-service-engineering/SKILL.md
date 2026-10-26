---
name: rust-axum-service-engineering
description: "Engineering skill: Rust Axum service — how to build and ship a api / service with Axum on Tokio, Rust, cargo test + tokio::test. Use when writing, reviewing, testing or releasing code in this stack, and when turning a Celestial design or experience skill into code."
type: engineering
stack: api
core: "1.0"
checked: 2026-10-26
---

# Rust Axum service

A Rust web service on Axum and Tokio with typed extractors, compile-time checked SQL and errors that map to HTTP responses through one type.

For latency-sensitive APIs, proxies and services where memory safety and predictable performance matter. Builds to a single binary in a slim container image and runs behind a load balancer with Tokio’s multi-threaded runtime.

## Stack
- **Language:** Rust 1.80+ (2021 or 2024 edition) — Ownership rules catch data races and use-after-free at compile time.
- **Framework:** Axum on Tokio axum ^0.8 · tokio ^1 — Handlers are plain async functions; middleware comes from the Tower ecosystem.
- **State:** Shared AppState via Arc and the State extractor — Pools and clients are created once and cloned cheaply into handlers.
- **Data:** PostgreSQL with SQLx sqlx ^0.8 — Async queries checked against the schema at compile time.
- **Build:** Cargo 1.80+ — Builds, tests and lints; release profile with LTO for production.
- **Hosting:** Container platform with a distroless image — Small image, fast start, preview per pull request.
- **Package manager:** Cargo Cargo.lock committed — Reproducible builds for a binary crate.
- **Testing:** cargo test + tokio::test built in — Unit and async tests in the same crate.
- **Testing:** tower::ServiceExt::oneshot tower ^0.5 — Calls the router in-process without binding a port.
- **Testing:** sqlx::test sqlx ^0.8 — Each test gets a fresh migrated database.

## Commands
- dev: `cargo watch -x run`
- lint: `cargo fmt --check && cargo clippy --all-targets -- -D warnings`
- test: `cargo test`
- build: `cargo build --release`
- deploy: `docker build -t service . && docker push service`
- install: `cargo fetch`

## Structure
- `src/main.rs` — Reads config, builds AppState, starts the server with graceful shutdown
- `src/app.rs` — Builds the Router and Tower middleware layers; tests import this
- `src/routes/` — One module per resource with handlers and request/response types
- `src/error.rs` — AppError enum implementing IntoResponse
- `src/db/` — Queries and domain types backed by SQLx
- `migrations/` — SQLx migrations
- `tests/` — Integration tests calling the router with oneshot

## Naming
- Files: snake_case.rs
- Tests: #[cfg(test)] mod tests in the same file; tests/<resource>.rs for integration
- Branches: type/short-description, e.g. feat/streaming-export

## From design and experience skills
This stack has no UI; design skills do not apply.

When a Celestial experience skill is in use, give each journey one end-to-end test (happy path plus its error and empty states) and name analytics events `object_action` from its measures.

## Conventions
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

## Do
- Use with_graceful_shutdown tied to SIGTERM
- Instrument with tracing and export spans through OpenTelemetry
- Run cargo audit or cargo deny in CI

## Don't
- Hold a std::sync::Mutex guard across an .await
- Clone large data into every handler instead of sharing through Arc
- Add unsafe code without a comment justifying it and a reviewer who knows why

## Quality gates
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Lint and types | rustfmt + clippy with -D warnings | 0 warnings | Every pull request |
| Unit and component tests | The stack’s test runner | All pass; every design-skill component state covered | Every pull request |
| Performance budget | Load test against the preview environment + criterion benchmarks on hot paths | p95 ≤ 50ms and p99 ≤ 200ms at target RPS; no benchmark regression > 10% | Every pull request touching a handler or query |
| Dependency and secret scan | cargo deny (advisories, licences, bans) + secret scanner | No advisories; no disallowed licences; no secrets | Every pull request and nightly |
| Preview deploy | Hosting preview environment | A working preview link on the pull request | Every pull request |

## Workflow
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

## Overrides of the engineering core
- Journey tests: Replaced by in-process router tests with oneshot plus sqlx::test integration tests — No UI in this stack; the consumer-facing journey is the API contract.
- Accessibility: Not applicable — No UI in this stack; accessibility is owned by the clients that call it.
- components: Not applicable — No design-skill components or tokens in an API service.
- Performance budget: Replaced by server latency targets: p95 ≤ 50ms, p99 ≤ 200ms, plus benchmarks — Web Vitals and bundle size do not apply to an API.
- Dependency and secret scan: Extended with cargo deny licence and ban checks — Rust crates pull many transitive dependencies; licences are checked alongside advisories.

## Examples
### Error type and handler (`src/error.rs`)

```rust
use axum::{http::StatusCode, response::{IntoResponse, Response}, Json};
use serde_json::json;

#[derive(Debug, thiserror::Error)]
pub enum AppError {
    #[error("not found")]
    NotFound,
    #[error("invalid input: {0}")]
    BadRequest(String),
    #[error(transparent)]
    Internal(#[from] anyhow::Error),
}

impl IntoResponse for AppError {
    fn into_response(self) -> Response {
        let (status, title) = match &self {
            AppError::NotFound => (StatusCode::NOT_FOUND, self.to_string()),
            AppError::BadRequest(_) => (StatusCode::BAD_REQUEST, self.to_string()),
            AppError::Internal(err) => {
                tracing::error!(error = ?err, "request failed");
                (StatusCode::INTERNAL_SERVER_ERROR, "internal error".to_string())
            }
        };
        (status, Json(json!({ "title": title }))).into_response()
    }
}
```

## Further reading
- [Axum documentation](https://docs.rs/axum/latest/axum/) — Routing, extractors, state and error handling.
- [Tokio tutorial](https://tokio.rs/tokio/tutorial) — The async runtime model, tasks and avoiding blocking.
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/) — Concrete guidance on input validation, authentication and session handling.
