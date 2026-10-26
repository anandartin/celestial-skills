---
name: fastapi-service-engineering
description: "Engineering skill: FastAPI service — how to build and ship a api / service with FastAPI, Python, pytest + pytest-asyncio. Use when writing, reviewing, testing or releasing code in this stack, and when turning a Celestial design or experience skill into code."
type: engineering
stack: api
core: "1.0"
checked: 2026-10-26
---

# FastAPI service

An async Python API where Pydantic models define every request and response, and the OpenAPI document is generated from the code.

For data-heavy APIs, ML model serving and product backends written in Python. Deploys as a container running Uvicorn workers behind a load balancer, with Postgres reached through async SQLAlchemy.

## Stack
- **Language:** Python 3.12+ — Type hints drive validation and are checked in CI.
- **Framework:** FastAPI ^0.160 — Dependency injection, async handlers and generated OpenAPI from type hints.
- **State:** Stateless requests; background work in a task queue — Workers retry slow jobs without holding a request open.
- **Data:** PostgreSQL with SQLAlchemy 2 (async) + Alembic SQLAlchemy ^2.0 · Alembic ^1.13 — Typed ORM with explicit sessions and versioned migrations.
- **Build:** Docker multi-stage build with uv uv ^0.5 — Small runtime image with locked dependencies.
- **Hosting:** Container platform with Uvicorn workers Uvicorn ^0.32 — One image per commit; preview environment per pull request.
- **Package manager:** uv ^0.5 — Fast resolver with a committed lockfile.
- **Testing:** pytest + pytest-asyncio pytest ^8 — Async tests with fixtures for database and client.
- **Testing:** HTTPX AsyncClient ^0.27 — Calls the app in-process through its ASGI interface.
- **Testing:** Schemathesis ^3 — Property-based tests generated from the OpenAPI document.

## Commands
- dev: `uv run fastapi dev app/main.py`
- lint: `uv run ruff check . && uv run ruff format --check . && uv run mypy app`
- test: `uv run pytest`
- build: `docker build -t service .`
- deploy: `uv run alembic upgrade head && docker push service`
- install: `uv sync`

## Structure
- `app/main.py` — Creates the FastAPI app, includes routers, sets lifespan for pools
- `app/api/` — One router module per resource; thin handlers only
- `app/schemas/` — Pydantic request and response models
- `app/services/` — Business logic, taking a session and plain arguments
- `app/db/` — SQLAlchemy models, session factory and Alembic migrations
- `app/core/` — Settings (pydantic-settings), security, logging
- `tests/` — Unit tests for services and API tests per router

## Naming
- Files: snake_case.py
- Tests: tests/test_<module>.py; tests/api/test_<router>.py
- Branches: type/short-description, e.g. feat/scoring-endpoint

## From design and experience skills
This stack has no UI; design skills do not apply.

When a Celestial experience skill is in use, give each journey one end-to-end test (happy path plus its error and empty states) and name analytics events `object_action` from its measures.

## Conventions
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

## Do
- Validate settings at startup with pydantic-settings
- Snapshot openapi.json in the repo and diff it in CI
- Use Annotated types for reusable dependencies and constraints

## Don't
- Return ORM objects without a response_model
- Use requests or time.sleep inside async code
- Mutate shared module-level state from handlers

## Quality gates
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Lint and types | The stack’s linter and type checker | 0 errors | Every pull request |
| Unit and component tests | The stack’s test runner | All pass; every design-skill component state covered | Every pull request |
| Performance budget | Load test against the preview environment | p95 ≤ 200ms and p99 ≤ 500ms at target RPS (model inference excluded); error rate < 0.1% | Every pull request touching a route or query |
| Dependency and secret scan | Dependency audit + secret scanner | No high or critical findings; no secrets | Every pull request and nightly |
| Preview deploy | Hosting preview environment | A working preview link on the pull request | Every pull request |
| API contract | Schemathesis + OpenAPI diff against main | No server errors from generated cases; no breaking change without a new version | Every pull request |

## Workflow
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

## Overrides of the engineering core
- Journey tests: Replaced by API tests via HTTPX plus Schemathesis contract tests — No UI in this stack; the consumer-facing journey is the API contract.
- Accessibility: Not applicable — No UI in this stack; accessibility is owned by the clients that call it.
- components: Not applicable — No design-skill components or tokens in an API service.
- Performance budget: Replaced by server latency targets: p95 ≤ 200ms, p99 ≤ 500ms — Web Vitals and bundle size do not apply to an API.

## Examples
### Router with ownership check (`app/api/orders.py`)

```python
from typing import Annotated
from uuid import UUID
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.security import current_user_id
from app.db.session import get_session
from app.schemas.orders import OrderRead
from app.services import orders

router = APIRouter(prefix="/orders", tags=["orders"])
Session = Annotated[AsyncSession, Depends(get_session)]
UserId = Annotated[UUID, Depends(current_user_id)]

@router.get("/{order_id}", response_model=OrderRead)
async def read_order(order_id: UUID, session: Session, user_id: UserId):
    order = await orders.get_for_user(session, user_id, order_id)
    if order is None:
        raise HTTPException(status_code=404, detail="Order not found")
    return order
```

## Further reading
- [FastAPI documentation](https://fastapi.tiangolo.com/) — Dependencies, response models, lifespan events and testing.
- [OWASP Top Ten](https://owasp.org/www-project-top-ten/) — The attack classes every endpoint review should check against.
- [The Twelve-Factor App](https://12factor.net/) — Config in the environment, stateless processes and disposable containers.
