# AGENTS.md — Go HTTP service

A Go HTTP service built on the standard library with a small router, explicit dependencies passed through structs, and table-driven tests.

## Setup and commands
- dev: `go run ./cmd/server`
- lint: `go vet ./... && golangci-lint run`
- test: `go test -race ./...`
- build: `CGO_ENABLED=0 go build -o bin/server ./cmd/server`
- deploy: `docker build -t service . && docker push service`
- install: `go mod download`

## Project structure
- `cmd/server/main.go` — Reads config, builds dependencies, starts the server, handles shutdown
- `internal/http/` — Router, middleware and handlers grouped by resource
- `internal/<domain>/` — Domain logic and interfaces it depends on
- `internal/store/` — sqlc-generated queries and the store implementation
- `db/migrations/` — SQL migrations (goose or golang-migrate)
- `db/queries/` — SQL files that sqlc compiles
- `internal/config/` — Environment parsing with validation

## Code style
- Files: lowercase, underscores only when needed: order_handler.go
- Tests: <file>_test.go beside the code; TestXxx with table-driven cases
- Branches: type/short-description, e.g. feat/webhook-retries

### Code
- Prefer small, pure functions and explicit types at module boundaries. _(Easier to test, review and change.)_
- Pass dependencies explicitly through a server struct or constructor; no package-level mutable state and no init() side effects. _(Tests can build an isolated server per case.)_
- Accept context.Context as the first argument of anything that does I/O and honour cancellation. _(Client disconnects and timeouts stop work instead of leaking goroutines.)_
- Define interfaces where they are used, keep them small, and return concrete types. _(Easy fakes in tests without a mocking framework.)_

### Components
- Components read design tokens; no raw hex values, pixel sizes or font names in component code. _(One token change restyles the product.)_

### Data
- Analytics events are object_action in snake_case and come from the experience skill’s measures. _(Names stay consistent across teams and tools.)_

### Errors
- Every async action has loading, empty, error and success states, matching the experience skill. _(Unhandled states are where users get stuck.)_
- Wrap errors with fmt.Errorf("...: %w", err) and map them to HTTP status in one place using errors.Is and errors.As. _(Callers keep the cause; clients get a stable error body.)_

### Security
- Secrets never live in the repository; read them from the environment or a secret store. _(A leaked key outlives the commit that removed it.)_
- Validate every input on the server, even when the client already did. _(Clients can be bypassed.)_
- Web pages ship a Content-Security-Policy, HSTS, X-Frame-Options and nosniff. _(Cheap protection against the most common attacks.)_
- Decode JSON with DisallowUnknownFields and http.MaxBytesReader, then validate before use. _(Bounded, strict input closes a class of abuse.)_

### Performance
- Set ReadHeaderTimeout, ReadTimeout, WriteTimeout and IdleTimeout on http.Server; never use the zero-value server in production. _(Default servers have no timeouts and can be held open forever.)_

### Accessibility
- Use native elements first; add ARIA only when no native element fits. _(Native controls bring keyboard and screen-reader support for free.)_

## Design and journeys
This stack has no UI; design skills do not apply.

When a Celestial experience skill is in use, give each journey one end-to-end test (happy path plus its error and empty states) and name analytics events `object_action` from its measures.

## Testing and checks (must pass before a pull request)
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Lint and types | go vet + golangci-lint + govulncheck | 0 findings | Every pull request |
| Unit and component tests | The stack’s test runner | All pass; every design-skill component state covered | Every pull request |
| Performance budget | Load test against the preview environment + go test -bench on hot paths | p95 ≤ 100ms and p99 ≤ 300ms at target RPS; no benchmark regression > 10% | Every pull request touching a handler or query |
| Dependency and secret scan | Dependency audit + secret scanner | No high or critical findings; no secrets | Every pull request and nightly |
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
- One approving review; two for auth, migrations or concurrency changes
- Reviewer checks every new goroutine has a stop path

**Definition of done**
- Acceptance criteria met and demoed on the preview link
- Tests added for new behaviour and every state
- Accessibility and performance gates green
- Analytics events named from the experience skill
- Docs or changelog updated when behaviour changes
- Handler test covers success, bad input and unauthorised cases
- Race detector passes

**Release**
- Small pull requests (aim for under 400 changed lines)
- CI green before review
- Squash-merge to main; main is always deployable
- Every release has a written rollback path
- Merge to main builds and pushes an image tagged with the commit; rolling update
- Migrations run as a separate job before the rollout and stay backwards compatible

**Incidents**
- Roll back by redeploying the previous image tag
- Capture a pprof profile before restarting if latency is the symptom; blameless note within 48 hours

_Generated from the Celestial engineering skill “Go HTTP service” (engineering core v1.0, checked 2026-10-26)._
