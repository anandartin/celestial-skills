---
name: spec-driven-development-engineering
description: "Engineering practice: Spec-driven development — Keep a versioned spec in the repository as the source of truth that people and coding agents implement against, with requirement IDs traced into tasks, tests and pull requests, so behaviour and intent never quietly drift apart. Use in any language or framework whenever this practice applies, and when reviewing work that should follow it."
type: engineering
stack: practice
core: "1.0"
checked: 2026-10-26
---

# Spec-driven development

Keep a versioned spec in the repository as the source of truth that people and coding agents implement against, with requirement IDs traced into tasks, tests and pull requests, so behaviour and intent never quietly drift apart.

Use this for features that live a long time, are touched by several people or agents, or carry rules someone will later ask about. Where spec before code writes a short plan for one change, this practice keeps a durable spec per feature under version control. It prevents behaviour nobody can explain, tests that check the wrong thing and agents rebuilding a feature from a stale idea of it.

## How to do it
1. **Create the spec file** — Add specs/<feature>.md with a status, an owner, a short purpose and a numbered list of requirements. One file per feature or capability, not per ticket.
2. **Give every requirement a stable ID** — Prefix each requirement with an ID such as CHK-001. Never reuse or renumber an ID; a removed requirement is marked retired, not deleted, so history and links stay valid.
3. **Write requirements as checkable behaviour** — Each requirement states one observable outcome with its trigger and result, including the error and limit cases. If a test cannot fail against it, rewrite it.
4. **Review spec changes like code** — Change the spec in its own commit or pull request and get it approved by the feature owner before the behaviour changes. The code change then references the approved spec revision.
5. **Trace IDs into tasks and pull requests** — Every task and pull request lists the requirement IDs it implements or changes. An agent given a task receives the spec file path and the IDs, not a paraphrase.
6. **Name tests by requirement ID** — Put the ID in the test name or a tag, for example "CHK-004 rejects an expired card". One requirement can have several tests; every live requirement has at least one.
7. **Check for drift in CI** — Run a script that collects live IDs from specs/ and IDs from test names, and fails when a live ID has no test or a test cites a retired or unknown ID.
8. **Retire specs with features** — When a feature is removed, set the spec status to retired, mark its IDs retired and delete the tests in the same pull request. Keep the file for history or move it to specs/retired/.

## Checklist
- [ ] The feature has a spec file under specs/ with status, owner and numbered requirements
- [ ] Every requirement has a unique, stable ID and describes observable behaviour
- [ ] The spec change was approved before or alongside the code that implements it
- [ ] The pull request lists the requirement IDs it implements or changes
- [ ] Every live requirement ID has at least one test that names it
- [ ] The drift check passes: no untested live IDs and no tests citing unknown or retired IDs
- [ ] Retired requirements are marked retired, not deleted or renumbered

## Rules
- When code and spec disagree, treat the spec as correct until an approved spec change says otherwise. _(A single source of truth only works if it wins arguments.)_
- Keep one requirement per ID; split compound requirements into separate IDs. _(A requirement that bundles two outcomes cannot be traced to a passing or failing test.)_
- Specify data shapes, limits and retention in the spec, and link to the schema file rather than copying it. _(Copied schemas go stale; links stay accurate.)_
- Write permission and validation rules as their own requirements with IDs. _(Access rules that live only in code are skipped when the feature is rebuilt.)_
- Give every failure mode a requirement: what the user sees and how they recover. _(Untraced error paths are the first to break after a refactor.)_

## Do
- Point coding agents at the spec file and the IDs in scope, and ask them to cite IDs in commits
- Mark assumptions and open questions inside the spec so reviewers can see them
- Keep specs short enough to read in five minutes; split by capability when they grow

## Don't
- Do not change behaviour in a pull request that does not update or cite the spec
- Do not renumber or reuse requirement IDs, even after deleting one
- Do not keep the spec in a wiki or ticket where it is not versioned with the code

## Quality gates
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Requirement coverage | Script comparing spec IDs with test names | Every live requirement ID has at least one test; no test cites a retired or unknown ID | Every pull request |
| Spec reference | Pull request template check | Pull requests that change behaviour list at least one requirement ID or a spec diff | Every pull request |

## Workflow
**Review**
- Read the spec diff first and confirm the owner approved it
- Check that each cited ID has a test that would fail without the change

**Definition of done**
- Spec, tests and code agree for every ID in scope
- Drift check green

## Examples
### Feature spec with requirement IDs (`specs/checkout.md`)

```markdown
# Checkout

Status: live   Owner: <name>   Last reviewed: <date>
ID prefix: CHK

## Purpose
Let a signed-in customer pay for the items in their basket.

## Requirements
- CHK-001 Given a basket with items, when the customer confirms, an order is created with status pending.
- CHK-002 The order total equals the sum of line totals plus tax; it is computed on the server.
- CHK-003 Only the basket owner can confirm it; other users get a 403.
- CHK-004 When the card is expired, the customer sees "Card expired" and the basket is kept.
- CHK-005 (retired 2026-09) Guest checkout. Replaced by CHK-006.
- CHK-006 A customer without an account is asked to sign in before payment.

## Data
Orders: see db/schema/orders.sql. Card details are never stored.

## Open questions
- Partial refunds: out of scope until a spec change adds them.
```

### Drift check (`scripts/check-spec-ids.mjs`)

```javascript
import { readFileSync, readdirSync } from 'node:fs';
import { execSync } from 'node:child_process';

const live = new Set(), retired = new Set();
for (const f of readdirSync('specs').filter(f => f.endsWith('.md'))) {
  for (const line of readFileSync(`specs/${f}`, 'utf8').split('\n')) {
    const m = line.match(/^- ([A-Z]+-\d{3})\b/);
    if (m) (line.includes('(retired') ? retired : live).add(m[1]);
  }
}
const tests = execSync("git grep -ohE '[A-Z]+-[0-9]{3}' -- 'tests/**'").toString();
const cited = new Set(tests.split('\n').filter(Boolean));

const untested = [...live].filter(id => !cited.has(id));
const unknown = [...cited].filter(id => !live.has(id));
if (untested.length || unknown.length) {
  console.error({ untested, unknownOrRetired: unknown });
  process.exit(1);
}
console.log(`${live.size} requirements, all covered.`);
```

## Further reading
- [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) — Open-source agent skills that cover spec-driven work and planning for coding agents.
- [obra/superpowers](https://github.com/obra/superpowers) — Agent workflow skills for writing specs and plans before implementation.
- [GitHub Actions documentation](https://docs.github.com/en/actions) — How to run the drift check as a required status on every pull request.

_Written for Celestial; the sources above inspired it._
