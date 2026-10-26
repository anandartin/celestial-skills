---
name: dbt-analytics-engineering
description: "Engineering skill: dbt analytics project — how to build and ship a library with dbt Core, SQL + Jinja, dbt data tests. Use when writing, reviewing, testing or releasing code in this stack, and when turning a Celestial design or experience skill into code."
type: engineering
stack: library
core: "1.0"
checked: 2026-10-26
---

# dbt analytics project

A version-controlled analytics project in SQL and dbt, with layered models, tested data contracts and documented metrics.

For teams turning raw application and event data in a cloud warehouse into trusted tables for dashboards, finance and product analysis. Runs on a schedule from CI or an orchestrator against the warehouse; every pull request builds changed models into an isolated schema.

## Stack
- **Language:** SQL + Jinja warehouse dialect — Analysts already read SQL; Jinja removes repetition without hiding the query.
- **Framework:** dbt Core 1.12+ — Dependency graph, tests, docs and incremental builds over plain SELECT statements.
- **State:** Manifest from the last production run — Enables state:modified selection so CI builds only what changed.
- **Data:** Cloud data warehouse via the matching dbt adapter adapter matching dbt 1.12+ — Transformations run where the data already lives.
- **Build:** dbt build 1.12+ — Runs models, tests, seeds and snapshots in dependency order.
- **Hosting:** Scheduled job in CI or an orchestrator — Production runs are repeatable and logged.
- **Package manager:** pip / uv for dbt, dbt deps for packages — Python pins the dbt version; packages.yml pins dbt packages.
- **Testing:** dbt data tests 1.12+ — unique, not_null, relationships and accepted_values on every key column.
- **Testing:** dbt unit tests 1.12+ — Fixed input rows check tricky model logic without touching production data.
- **Testing:** SQLFluff ^3 — Consistent SQL style enforced in CI with the dbt templater.

## Commands
- dev: `dbt build --select state:modified+ --defer --state prod-manifest/`
- lint: `sqlfluff lint models/ && dbt parse`
- test: `dbt test`
- build: `dbt build --target prod`
- deploy: `dbt docs generate`
- install: `uv pip install -r requirements.txt && dbt deps`

## Structure
- `models/staging/` — One view per source table: rename, cast, deduplicate; no joins
- `models/intermediate/` — Reusable joins and business logic, not exposed to dashboards
- `models/marts/` — Facts and dimensions grouped by domain, the only layer BI tools read
- `models/**/_*.yml` — Sources, column docs, tests and contracts beside the models they describe
- `macros/` — Shared Jinja macros with a docstring and a test model
- `seeds/` — Small static mapping tables kept in version control
- `snapshots/` — Slowly changing history of mutable source rows
- `tests/` — Singular SQL tests for rules that generic tests cannot express

## Naming
- Files: stg_<source>__<table>.sql, int_<entity>_<verb>.sql, fct_<event>.sql, dim_<entity>.sql
- Tests: Generic tests in _<folder>__models.yml; singular tests assert_<rule>.sql
- Branches: type/short-description, e.g. feat/orders-refund-columns
- Components: Columns snake_case; primary key <entity>_id; booleans is_/has_; timestamps <event>_at

## From design and experience skills
This stack has no UI; design skills do not apply.

When a Celestial experience skill is in use, give each journey one end-to-end test (happy path plus its error and empty states) and name analytics events `object_action` from its measures.

## Conventions
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

## Do
- Write column descriptions as you add columns, not in a docs sprint later
- Add source freshness checks to every source that feeds a daily dashboard
- Use CTEs named for what they hold, with a final select at the bottom

## Don't
- Let a BI tool query staging or intermediate models
- Use SELECT * in marts
- Fix bad data with a filter in a mart when it should be fixed in staging

## Quality gates
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

## Workflow
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

## Overrides of the engineering core
- gates.Unit and component tests: Replaced by dbt data tests on every model plus dbt unit tests for non-trivial logic — There are no components; correctness is about rows and keys.
- gates.Journey tests: Not applicable — replaced by exposures tests on the marts each dashboard reads — No user interface is built here.
- gates.Accessibility: Not applicable — Output is warehouse tables, not rendered UI.
- gates.Performance budget: Replaced by: no model over 15 minutes and no CI build over 20 minutes — Run time and warehouse cost are the performance that matters.
- gates.Preview deploy: Replaced by the pull-request schema built by slim CI — Reviewers query the preview tables instead of opening a link.
- rules.components: Not applicable — No design tokens in SQL models.

## Examples
### Staging model (`models/staging/shop/stg_shop__orders.sql`)

```sql
with source as (
    select * from {{ source('shop', 'orders') }}
),

renamed as (
    select
        id                         as order_id,
        customer_id,
        cast(total_cents as bigint) as order_total_cents,
        lower(status)              as order_status,
        created_at                 as ordered_at
    from source
    where id is not null
)

select * from renamed
```

### Model tests and contract (`models/marts/sales/_sales__models.yml`)

```yaml
models:
  - name: fct_orders
    config:
      contract:
        enforced: true
    columns:
      - name: order_id
        data_type: bigint
        description: One row per order.
        data_tests: [unique, not_null]
      - name: customer_id
        data_type: bigint
        data_tests:
          - relationships:
              to: ref('dim_customers')
              field: customer_id
      - name: order_status
        data_type: varchar
        data_tests:
          - accepted_values:
              values: [placed, shipped, refunded]
```

## Further reading
- [dbt documentation](https://docs.getdbt.com/) — Reference for ref, sources, tests, contracts and state selection.
- [SQLFluff documentation](https://docs.sqlfluff.com/) — Configuring the linter with the dbt templater.
