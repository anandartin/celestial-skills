# AGENTS.md — Django web app

A server-rendered Python web app with the built-in admin for operations staff, design tokens as CSS variables and small sprinkles of interactivity.

## Setup and commands
- dev: `uv run python manage.py runserver`
- e2e: `uv run pytest tests/e2e`
- lint: `uv run ruff check . && uv run ruff format --check . && uv run mypy .`
- test: `uv run pytest`
- build: `uv run python manage.py collectstatic --noinput && uv run python manage.py check --deploy`
- install: `uv sync`

## Project structure
- `config/` — settings/ (base, dev, prod), urls.py, wsgi.py and asgi.py
- `apps/<domain>/` — One Django app per domain: models, views, forms, admin, urls, services.py, tests/
- `templates/` — Base layout and page templates; one folder per app
- `templates/components/` — Design-skill components as template partials (button, field, card, table)
- `static/css/tokens.css` — CSS variables written from the design skill, light and dark
- `static/css/components/` — One stylesheet per component, reading only tokens
- `tests/e2e/` — One Playwright spec per experience-skill journey

## Code style
- Files: snake_case.py; templates kebab-case.html
- Tests: apps/<domain>/tests/test_<module>.py; tests/e2e/test_<journey_id>.py
- Branches: type/short-description, e.g. feat/invoice-export
- Components: Template partials named after the design-skill component, e.g. components/button.html

### Code
- Prefer small, pure functions and explicit types at module boundaries. _(Easier to test, review and change.)_

### Components
- Components read design tokens; no raw hex values, pixel sizes or font names in component code. _(One token change restyles the product.)_
- Render form fields through templates/components/field.html so label, hint and error are always linked. _(Every form gets accessible error messages without extra work.)_

### Data
- Analytics events are object_action in snake_case and come from the experience skill’s measures. _(Names stay consistent across teams and tools.)_
- Put business logic in services.py functions; views and admin actions call them. _(One code path for the customer site, the admin and management commands.)_
- Every list view uses select_related or prefetch_related, and tests assert the query count with django_assert_num_queries. _(N+1 queries are the most common Django slowdown.)_

### Errors
- Every async action has loading, empty, error and success states, matching the experience skill. _(Unhandled states are where users get stuck.)_

### Security
- Secrets never live in the repository; read them from the environment or a secret store. _(A leaked key outlives the commit that removed it.)_
- Validate every input on the server, even when the client already did. _(Clients can be bypassed.)_
- Web pages ship a Content-Security-Policy, HSTS, X-Frame-Options and nosniff. _(Cheap protection against the most common attacks.)_
- Keep CSRF, SecurityMiddleware, secure cookies and HSTS on; run manage.py check --deploy in CI. _(Django ships these protections; turning one off should be loud.)_
- Authorise in the view with the request user and object-level checks; never trust a hidden form field for ownership. _(Form fields are client input.)_

### Accessibility
- Use native elements first; add ARIA only when no native element fits. _(Native controls bring keyboard and screen-reader support for free.)_
- After an htmx swap, move focus to the updated region or announce it with an aria-live region. _(Screen-reader users otherwise miss partial updates.)_

## Design and journeys
When a Celestial design skill is in use, write its tokens as CSS custom properties in `static/css/tokens.css`, and build its components in `templates/components` with the same names and variants. Components read tokens only — no raw colours, sizes or font names.

When a Celestial experience skill is in use, give each journey one end-to-end test (happy path plus its error and empty states) and name analytics events `object_action` from its measures.

## Testing and checks (must pass before a pull request)
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Lint and types | The stack’s linter and type checker | 0 errors | Every pull request |
| Unit and component tests | The stack’s test runner | All pass; every design-skill component state covered | Every pull request |
| Journey tests | End-to-end runner | One test per experience-skill journey: happy path + error state | Every pull request |
| Accessibility | Automated audit (axe on web, platform audit on mobile) | WCAG 2.2 AA · no new violations | Every pull request |
| Performance budget | Lighthouse CI on key pages + query-count assertions | LCP ≤ 2.5s · INP ≤ 200ms · CLS ≤ 0.1 · ≤ 50KB JS per page · ≤ 10 queries per view | Every pull request |
| Dependency and secret scan | Dependency audit + secret scanner | No high or critical findings; no secrets | Every pull request and nightly |
| Preview deploy | Hosting preview environment | A working preview link on the pull request | Every pull request |
| Deploy checks | manage.py check --deploy + makemigrations --check | 0 warnings; no missing migrations | Every pull request |

## Pull requests
- Branching: Trunk-based: short-lived branches off main, squash-merged within two days.

**Review checklist**
- Correctness: does it do what the issue asks, including edge cases?
- Readability: could a new teammate change it safely?
- Architecture: is it in the right place, with the right boundaries?
- Security: inputs, secrets, permissions, dependencies
- Performance: budgets, queries, bundle size
- Tests fail when the code is broken (flip a condition and re-run)
- One approving review; two for auth, payments, migrations or data deletion
- Reviewer runs the journey on the preview link, including the admin path if touched

**Definition of done**
- Acceptance criteria met and demoed on the preview link
- Tests added for new behaviour and every state
- Accessibility and performance gates green
- Analytics events named from the experience skill
- Docs or changelog updated when behaviour changes

**Release**
- Small pull requests (aim for under 400 changed lines)
- CI green before review
- Squash-merge to main; main is always deployable
- Every release has a written rollback path
- Merge to main builds an image; migrations run as a release step before traffic shifts
- Migrations stay backwards compatible with the running release

**Incidents**
- Roll back by redeploying the previous image; reverse migrations only if they are reversible and tested
- Blameless note within 48 hours

_Generated from the Celestial engineering skill “Django web app” (engineering core v1.0, checked 2026-10-26)._
