# AGENTS.md — dbt analytics project

A version-controlled analytics project in SQL and dbt, with layered models, tested data contracts and documented metrics.

## Setup and commands
- dev: `dbt build --select state:modified+ --defer --state prod-manifest/`
- lint: `sqlfluff lint models/ && dbt parse`
- test: `dbt test`
- build: `dbt build --target prod`
- deploy: `dbt docs generate`
- install: `uv pip install -r requirements.txt && dbt deps`

## Project structure
- `models/staging/` — One view per source table: rename, cast, deduplicate; no joins
- `models/intermediate/` — Reusable joins and business logic, not exposed to dashboards
- `models/marts/` — Facts and dimensions grouped by domain, the only layer BI tools read
- `models/**/_*.yml` — Sources, column docs, tests and contracts beside the models they describe
- `macros/` — Shared Jinja macros with a docstring and a test model
- `seeds/` — Small static mapping tables kept in version control
- `snapshots/` — Slowly changing history of mutable source rows
- `tests/` — Singular SQL tests for rules that generic tests cannot express

## Code style
- Files: stg_<source>__<table>.sql, int_<entity>_<verb>.sql, fct_<event>.sql, dim_<entity>.sql
- Tests: Generic tests in _<folder>__models.yml; singular tests assert_<rule>.sql
- Branches: type/short-description, e.g. feat/orders-refund-columns
- Components: Columns snake_case; primary key <entity>_id; booleans is_/has_; timestamps <event>_at

### Code
- Prefer small, pure functions and explicit types at module boundaries. _(Easier to test, review and change.)_
- Staging models are the only place that renames and casts source columns. _(Downstream models see one clean vocabulary.)_

### Components
- Components read design tokens; no raw hex values, pixel sizes or font names in component code. _(One token change restyles the product.)_

### Data
- Analytics events are object_action in snake_case and come from the experience skill’s measures. _(Names stay consistent across teams and tools.)_
- Reference other models only with ref() and raw tables only with source(); never hard-code schema names. _(Keeps the dependency graph correct and lets the same code run in dev, CI and prod.)_
- Every model has a primary key with unique and not_null tests. _(Silent duplicates are the most common cause of inflated numbers.)_
- Mart models declare an enforced contract with column names and types. _(A breaking change fails the build instead of a dashboard.)_

### Errors
- Every async action has loading, empty, error and success states, matching the experience skill. _(Unhandled states are where users get stuck.)_

### Security
- Secrets never live in the repository; read them from the environment or a secret store. _(A leaked key outlives the commit that removed it.)_
- Validate every input on the server, even when the client already did. _(Clients can be bypassed.)_
- Web pages ship a Content-Security-Policy, HSTS, X-Frame-Options and nosniff. _(Cheap protection against the most common attacks.)_
- Warehouse credentials come from environment variables in profiles.yml; personal data columns are tagged and masked in marts. _(Keeps secrets out of git and limits who sees sensitive fields.)_

### Performance
- Make a model incremental only after it is slow or costly as a table, and give it a unique_key and a lookback window. _(Incremental logic adds risk; spend it where it saves time or money.)_

### Accessibility
- Use native elements first; add ARIA only when no native element fits. _(Native controls bring keyboard and screen-reader support for free.)_

## Design and journeys
This stack has no UI; design skills do not apply.

When a Celestial experience skill is in use, give each journey one end-to-end test (happy path plus its error and empty states) and name analytics events `object_action` from its measures.

## Testing and checks (must pass before a pull request)
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Lint and types | SQLFluff + dbt parse | 0 lint errors; project compiles | Every pull request |
| Unit and component tests | The stack’s test runner | All pass; every design-skill component state covered | Every pull request |
| Journey tests | End-to-end runner | One test per experience-skill journey: happy path + error state | Every pull request |
| Accessibility | Automated audit (axe on web, platform audit on mobile) | WCAG 2.2 AA · no new violations | Every pull request |
| Performance budget | Lab measurement in CI | Web: LCP ≤ 2.5s · INP ≤ 200ms · CLS ≤ 0.1 · ≤ 170KB JS per route. Mobile: cold start ≤ 2s · 60fps scroll | Every pull request |
| Dependency and secret scan | Dependency audit + secret scanner | No high or critical findings; no secrets | Every pull request and nightly |
| Preview deploy | Hosting preview environment | A working preview link on the pull request | Every pull request |
| Slim CI build | dbt build --select state:modified+ into a pull-request schema | All modified models and their children build; all tests pass; contracts hold | Every pull request |
| Source freshness | dbt source freshness | No source past its error_after window | Before each production run |

## Pull requests
- Branching: Trunk-based: short-lived branches off main; production runs from main only.

**Review checklist**
- Correctness: does it do what the issue asks, including edge cases?
- Readability: could a new teammate change it safely?
- Architecture: is it in the right place, with the right boundaries?
- Security: inputs, secrets, permissions, dependencies
- Performance: budgets, queries, bundle size
- Tests fail when the code is broken (flip a condition and re-run)
- Reviewer compares row counts and key metrics between the pull-request schema and production
- Any change to a mart column is checked against the exposures that use it

**Definition of done**
- Acceptance criteria met and demoed on the preview link
- Tests added for new behaviour and every state
- Accessibility and performance gates green
- Analytics events named from the experience skill
- Docs or changelog updated when behaviour changes
- Primary key tested and every new column described
- Exposures updated when a dashboard depends on the change

**Release**
- Small pull requests (aim for under 400 changed lines)
- CI green before review
- Squash-merge to main; main is always deployable
- Every release has a written rollback path
- Merge to main; the next scheduled run deploys
- Breaking mart changes ship as a new versioned model, with the old version deprecated for one release

**Incidents**
- Revert the merge and rerun the affected models with --full-refresh only if incremental state is corrupt
- Tell dashboard owners which tables and dates were wrong, then add the test that would have caught it

_Generated from the Celestial engineering skill “dbt analytics project” (engineering core v1.0, checked 2026-10-26)._
