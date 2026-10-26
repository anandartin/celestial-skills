# AGENTS.md — CI/CD pipelines

Pipelines that give a pass or fail in minutes, build once, preview every change and keep main always deployable.

## How to do it
1. **Order jobs by speed** — Run format, lint and type checks first, then unit tests, then build, then slower integration and end-to-end tests. Fail fast: a lint error should report within two minutes.
2. **Cache dependencies and build outputs** — Key caches on the lock file hash and tool version. Restore before install, save after. Verify the cache hit rate in job logs after the first few runs.
3. **Run independent jobs in parallel** — Split tests across shards and run lint, unit and security scans as separate jobs. Only jobs that need a build artifact wait for the build.
4. **Build once, promote the artifact** — Produce one immutable artifact (image digest, bundle, binary) per commit. Staging and production deploy that exact artifact; never rebuild for a later environment.
5. **Deploy a preview for every pull request** — Create an isolated preview environment, post its link on the pull request, and tear it down when the pull request closes.
6. **Protect main** — Require pull requests, required status checks, an up-to-date branch or merge queue, and at least one approval. Block force pushes and direct commits.
7. **Deploy main automatically with a rollback path** — Merge to main deploys to staging, then production after checks pass. Keep the previous artifact available and document the one command that redeploys it.
8. **Track pipeline health** — Measure median pipeline time, flaky test rate and main failure rate weekly. Quarantine a flaky test within a day and fix or delete it within a week.

## Checklist (before a pull request)
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

## Checks
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Pipeline speed | CI run analytics | Median pull-request pipeline ≤ 10 minutes; lint feedback ≤ 2 minutes | Reviewed weekly |
| Main stays green | Branch protection + main build history | Required checks enforced; main red less than 2% of the time | Every merge; reviewed weekly |

_Generated from the Celestial engineering practice “CI/CD pipelines”._
