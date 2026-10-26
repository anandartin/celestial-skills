# AGENTS.md — FastAPI service

An async Python API where Pydantic models define every request and response, and the OpenAPI document is generated from the code.

## Setup and commands
- dev: `uv run fastapi dev app/main.py`
- lint: `uv run ruff check . && uv run ruff format --check . && uv run mypy app`
- test: `uv run pytest`
- build: `docker build -t service .`
- deploy: `uv run alembic upgrade head && docker push service`
- install: `uv sync`

## Project structure
- `app/main.py` — Creates the FastAPI app, includes routers, sets lifespan for pools
- `app/api/` — One router module per resource; thin handlers only
- `app/schemas/` — Pydantic request and response models
- `app/services/` — Business logic, taking a session and plain arguments
- `app/db/` — SQLAlchemy models, session factory and Alembic migrations
- `app/core/` — Settings (pydantic-settings), security, logging
- `tests/` — Unit tests for services and API tests per router

## Code style
- Files: snake_case.py
- Tests: tests/test_<module>.py; tests/api/test_<router>.py
- Branches: type/short-description, e.g. feat/scoring-endpoint

### Code
- Prefer small, pure functions and explicit types at module boundaries. _(Easier to test, review and change.)_
- Inject the database session, settings and current user with Depends; never import a global session. _(Tests swap dependencies with app.dependency_overrides.)_

### Components
- Components read design tokens; no raw hex values, pixel sizes or font names in component code. _(One token change restyles the product.)_

### Data
- Analytics events are object_action in snake_case and come from the experience skill’s measures. _(Names stay consistent across teams and tools.)_
- Separate input and output models (OrderCreate, OrderRead) and always set response_model on routes. _(Output models stop internal fields such as password hashes from leaking.)_

### Errors
- Every async action has loading, empty, error and success states, matching the experience skill. _(Unhandled states are where users get stuck.)_
- Raise HTTPException only in the API layer; services raise domain exceptions mapped by exception handlers to problem+json. _(Services stay reusable from workers and scripts.)_

### Security
- Secrets never live in the repository; read them from the environment or a secret store. _(A leaked key outlives the commit that removed it.)_
- Validate every input on the server, even when the client already did. _(Clients can be bypassed.)_
- Web pages ship a Content-Security-Policy, HSTS, X-Frame-Options and nosniff. _(Cheap protection against the most common attacks.)_
- Resolve the current user in a dependency and scope every query by it; reject requests whose path id the user does not own. _(Object-level authorisation is the top API risk.)_

### Performance
- Never call blocking libraries inside async def handlers; use def handlers or run_in_threadpool for sync code. _(One blocking call stalls every request on that worker.)_
- Open the engine and HTTP clients once in the lifespan handler and set pool size and timeouts explicitly. _(Per-request connections exhaust the database under load.)_

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
| Performance budget | Load test against the preview environment | p95 ≤ 200ms and p99 ≤ 500ms at target RPS (model inference excluded); error rate < 0.1% | Every pull request touching a route or query |
| Dependency and secret scan | Dependency audit + secret scanner | No high or critical findings; no secrets | Every pull request and nightly |
| Preview deploy | Hosting preview environment | A working preview link on the pull request | Every pull request |
| API contract | Schemathesis + OpenAPI diff against main | No server errors from generated cases; no breaking change without a new version | Every pull request |

## Pull requests
- Branching: Trunk-based: short-lived branches off main, squash-merged within two days.

**Review checklist**
- Correctness: does it do what the issue asks, including edge cases?
- Readability: could a new teammate change it safely?
- Architecture: is it in the right place, with the right boundaries?
- Security: inputs, secrets, permissions, dependencies
- Performance: budgets, queries, bundle size
- Tests fail when the code is broken (flip a condition and re-run)
- One approving review; two for auth, migrations or data deletion
- Reviewer checks the openapi.json diff first

**Definition of done**
- Acceptance criteria met and demoed on the preview link
- Tests added for new behaviour and every state
- Accessibility and performance gates green
- Analytics events named from the experience skill
- Docs or changelog updated when behaviour changes
- Request and response models for every route
- API test covers success, 422 validation and 403 ownership cases

**Release**
- Small pull requests (aim for under 400 changed lines)
- CI green before review
- Squash-merge to main; main is always deployable
- Every release has a written rollback path
- Alembic migration runs as a release step, then a rolling update
- Migrations are additive; column drops ship one release later

**Incidents**
- Roll back by redeploying the previous image tag
- Blameless note within 48 hours

_Generated from the Celestial engineering skill “FastAPI service” (engineering core v1.0, checked 2026-10-26)._
