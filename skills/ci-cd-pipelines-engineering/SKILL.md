---
name: ci-cd-pipelines-engineering
description: "Engineering practice: CI/CD pipelines — Pipelines that give a pass or fail in minutes, build once, preview every change and keep main always deployable. Use in any language or framework whenever this practice applies, and when reviewing work that should follow it."
type: engineering
stack: practice
core: "1.0"
checked: 2026-10-26
---

# CI/CD pipelines

Pipelines that give a pass or fail in minutes, build once, preview every change and keep main always deployable.

Use when setting up or reworking the automation between a pull request and production. It prevents slow, flaky feedback that people learn to ignore, untested code reaching main, and releases that differ from what was tested.

## How to do it
1. **Order jobs by speed** — Run format, lint and type checks first, then unit tests, then build, then slower integration and end-to-end tests. Fail fast: a lint error should report within two minutes.
2. **Cache dependencies and build outputs** — Key caches on the lock file hash and tool version. Restore before install, save after. Verify the cache hit rate in job logs after the first few runs.
3. **Run independent jobs in parallel** — Split tests across shards and run lint, unit and security scans as separate jobs. Only jobs that need a build artifact wait for the build.
4. **Build once, promote the artifact** — Produce one immutable artifact (image digest, bundle, binary) per commit. Staging and production deploy that exact artifact; never rebuild for a later environment.
5. **Deploy a preview for every pull request** — Create an isolated preview environment, post its link on the pull request, and tear it down when the pull request closes.
6. **Protect main** — Require pull requests, required status checks, an up-to-date branch or merge queue, and at least one approval. Block force pushes and direct commits.
7. **Deploy main automatically with a rollback path** — Merge to main deploys to staging, then production after checks pass. Keep the previous artifact available and document the one command that redeploys it.
8. **Track pipeline health** — Measure median pipeline time, flaky test rate and main failure rate weekly. Quarantine a flaky test within a day and fix or delete it within a week.

## Checklist
- [ ] Required checks on main cover lint, types, tests, build and security scan
- [ ] Median pull-request pipeline is under 10 minutes
- [ ] Dependencies are cached and the cache key includes the lock file
- [ ] Production deploys the same artifact digest that passed staging
- [ ] Every pull request gets a working preview link
- [ ] CI uses short-lived credentials (OIDC) rather than stored long-lived keys
- [ ] Rollback is one documented command and has been tried

## Rules
- Pull requests from forks never receive deploy credentials or secrets. _(Untrusted code in a pipeline can read and exfiltrate anything it is given.)_
- Pin third-party pipeline actions or images to a full commit SHA or digest. _(A moved tag can swap in malicious code without any change in your repository.)_
- Cancel superseded runs on the same branch when a new commit is pushed. _(Saves runner time and keeps the latest result first in the queue.)_
- A red main is the team's top priority: revert first, investigate second. _(Every minute main is broken blocks everyone else's merges.)_
- Pipeline config lives in the repository and is reviewed like code. _(Changes to how code ships deserve the same scrutiny as the code.)_

## Do
- Make the same commands run locally and in CI (one make, npm or task target per step)
- Upload test reports and failure screenshots as artifacts
- Use a merge queue once main breaks from merge races

## Don't
- Retry failing tests automatically to hide flakiness
- Grant the default pipeline token write access it does not need
- Run deploy steps from personal machines

## Quality gates
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Pipeline speed | CI run analytics | Median pull-request pipeline ≤ 10 minutes; lint feedback ≤ 2 minutes | Reviewed weekly |
| Main stays green | Branch protection + main build history | Required checks enforced; main red less than 2% of the time | Every merge; reviewed weekly |

## Workflow
**Review**
- Pipeline changes are tested on a branch run before merge, and the run link is in the description

**Definition of done**
- Required checks configured and a preview link posted on a test pull request

## Examples
### Fast pull-request workflow (`.github/workflows/ci.yml`)

```yaml
name: ci
on:
  pull_request:
  push:
    branches: [main]
concurrency:
  group: ci-${{ github.ref }}
  cancel-in-progress: true
permissions:
  contents: read
jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm run lint && npm run typecheck
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        shard: [1, 2, 3]
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm test -- --shard=${{ matrix.shard }}/3
```

## Further reading
- [GitHub Actions documentation](https://docs.github.com/en/actions) — Caching, concurrency, OIDC and permissions for workflow jobs.
- [SLSA](https://slsa.dev/) — Levels for build provenance and a hardened build pipeline.
- [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) — Open-source agent skills that include shipping and CI workflows.

_Written for Celestial; the sources above inspired it._
