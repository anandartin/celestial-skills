---
name: database-migrations-engineering
description: "Engineering practice: Database schema and safe migrations — Change the schema in small expand-then-contract steps that old and new code can both run against, so deploys never need downtime or a frantic rollback. Use in any language or framework whenever this practice applies, and when reviewing work that should follow it."
type: engineering
stack: practice
core: "1.0"
checked: 2026-10-26
---

# Database schema and safe migrations

Change the schema in small expand-then-contract steps that old and new code can both run against, so deploys never need downtime or a frantic rollback.

Use this for any change to tables, columns, indexes or constraints in a database that serves live traffic. It prevents outages from locking migrations, data loss from destructive changes, and failed deploys where the new schema breaks the still-running old code.

## How to do it
1. **Design the target schema** — Write the end state: tables, columns with types and nullability, primary and foreign keys, unique constraints and the indexes each query needs. Check every new query plan against realistic data volume.
2. **Split into expand and contract** — Plan the change as phases that each deploy separately. Expand: add new tables, nullable columns or new indexes without removing anything. Migrate: backfill data and switch code to read and write the new shape. Contract: remove the old column, table or code path only once nothing uses it.
3. **Make each migration compatible with the running code** — Before merging, confirm the currently deployed application version works against the post-migration schema, and the new application version works against the pre-migration schema. If either fails, split the change further.
4. **Avoid locking operations** — Create indexes concurrently or online where the database supports it, add constraints as not-valid then validate separately, add columns without volatile defaults, and set a lock timeout on every migration so it fails fast instead of queueing traffic.
5. **Backfill in batches** — Move data with an idempotent job that processes bounded batches by primary key, sleeps between batches, records progress and can resume. Never backfill a large table in one transaction inside the migration.
6. **Rehearse on production-sized data** — Run the migration against a recent anonymised copy or staging database of similar size. Record duration and lock waits; anything over a few seconds of exclusive lock needs redesign.
7. **Ship with a rollback path** — Each expand step has a down migration or is harmless to leave in place. Contract steps that drop data run only after a backup is confirmed and after the release using the new shape has been stable for an agreed period.
8. **Verify after deploy** — Check error rates, slow-query logs and row counts between old and new columns. Close the contract phase with a ticket so old columns do not linger forever.

## Checklist
- [ ] Change is split into expand, migrate and contract phases, each deployable alone
- [ ] Old and new application versions both run against the migrated schema
- [ ] No migration takes a long exclusive lock; lock timeout is set
- [ ] Indexes are created concurrently or online
- [ ] Backfills run in resumable batches outside the migration transaction
- [ ] Migration was rehearsed on production-sized data with timing recorded
- [ ] Destructive steps wait for a confirmed backup and a stable release

## Rules
- Never rename or drop a column in the same deploy as the code that stops using it. _(The old code is still running during the rollout and will fail.)_
- Migrations are forward-only files in version control, applied by the deploy pipeline, never edited after merge. _(Editing an applied migration makes environments disagree about the schema.)_
- Enforce integrity in the database with constraints and foreign keys, not only in application code. _(Every client and script that touches the data gets the same guarantees.)_
- Every foreign key and every column in a frequent WHERE or ORDER BY has a supporting index checked with the query plan. _(Missing indexes are invisible on small data and fatal at scale.)_
- Set a lock timeout and statement timeout on migration sessions. _(A migration that waits for a lock blocks every query queued behind it.)_

## Do
- Keep schema migrations and data backfills in separate steps
- Use feature flags to switch reads and writes between old and new shapes
- Write the contract-phase ticket when you merge the expand phase

## Don't
- Do not add a NOT NULL column without a default to a large live table in one step
- Do not run long data updates inside a schema migration transaction
- Do not drop data without a verified, restorable backup

## Quality gates
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Migration safety check | Migration linter for the database (for example squawk for PostgreSQL) + test run of up and down migrations | No locking or destructive operations flagged without an approved exception; up and down both succeed in CI | Every pull request containing a migration |

## Workflow
**Review**
- Reviewer confirms the change is compatible with the currently deployed code
- Migrations touching large tables include rehearsal timing

**Definition of done**
- Expand phase deployed and verified
- Contract phase ticket created with an owner and date

## Examples
### Expand step without long locks (PostgreSQL) (`migrations/20261026_add_orders_customer_ref.sql`)

```sql
SET lock_timeout = '3s';

-- Expand: nullable column, no default rewrite
ALTER TABLE orders ADD COLUMN customer_ref uuid;

-- Constraint added without scanning, validated later
ALTER TABLE orders
  ADD CONSTRAINT orders_customer_ref_fk
  FOREIGN KEY (customer_ref) REFERENCES customers(id) NOT VALID;

-- Run outside a transaction
CREATE INDEX CONCURRENTLY IF NOT EXISTS orders_customer_ref_idx
  ON orders (customer_ref);
```

## Further reading
- [Feature Toggles](https://martinfowler.com/articles/feature-toggles.html) — How to switch reads and writes between old and new schema shapes safely.
- [The Twelve-Factor App](https://12factor.net/) — Running migrations as one-off admin processes and keeping environments in parity.
- [PostgreSQL documentation](https://www.postgresql.org/docs/current/) — Lock levels taken by each ALTER TABLE form and concurrent index builds.
- [obra/superpowers](https://github.com/obra/superpowers) — Agent workflow skills for planning changes in small verified steps, where this approach is commonly published.

_Written for Celestial; the sources above inspired it._
