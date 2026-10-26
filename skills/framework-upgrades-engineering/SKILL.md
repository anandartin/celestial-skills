---
name: framework-upgrades-engineering
description: "Engineering practice: Framework upgrades — Upgrade a framework or major dependency in planned, reversible steps with tests at each one, so you stay current without a long, risky freeze. Use in any language or framework whenever this practice applies, and when reviewing work that should follow it."
type: engineering
stack: practice
core: "1.0"
checked: 2026-10-26
---

# Framework upgrades

Upgrade a framework or major dependency in planned, reversible steps with tests at each one, so you stay current without a long, risky freeze.

Use this when moving a framework, runtime or core library across a major version, or when a dependency falls out of support. A staged approach keeps main deployable throughout and prevents the multi-week upgrade branch that never merges.

## How to do it
1. **Read the migration notes** — Read the official release notes and migration guide for every major version between current and target. List each breaking change that touches your code, with the files affected.
2. **Get to a clean baseline** — Upgrade to the latest minor of your current major first, fix every deprecation warning, and confirm the full test suite and build are green.
3. **Check the dependency tree** — List plugins and libraries that depend on the framework and confirm each has a release supporting the target version. Note blockers and their workarounds.
4. **Run official codemods** — Apply the codemods or automated migration tools the framework provides, one at a time, committing after each with its name in the message.
5. **Fix what remains by hand** — Work through remaining breaking changes in small commits, running tests after each. Do not mix in unrelated refactors or features.
6. **Verify beyond unit tests** — Run end-to-end journeys, compare bundle size and performance against the baseline, and check logs on a preview environment for new warnings.
7. **Release with a rollback path** — Ship behind a staged rollout or to a canary first. Keep the previous lockfile and build artifact so you can redeploy the old version in minutes.
8. **Clean up** — Remove compatibility shims and temporary flags, update the documented versions, and note the upgrade in the changelog.

## Checklist
- [ ] Every breaking change from the migration guide is listed and resolved or marked not applicable
- [ ] No deprecation warnings remain in build or test output
- [ ] All direct dependencies support the new version
- [ ] Unit, integration and end-to-end suites pass
- [ ] Bundle size and key performance metrics are within budget versus the baseline
- [ ] A tested rollback path exists
- [ ] Lockfile, documented versions and changelog are updated

## Rules
- Move one major version at a time. _(Skipping majors stacks breaking changes and hides which one caused a failure.)_
- Keep the upgrade in its own pull request series with no feature work. _(Mixed changes make regressions impossible to attribute.)_
- Run the dependency audit after the upgrade and fix new high or critical findings before release. _(Upgrades pull in new transitive packages with their own issues.)_
- Compare bundle size, build time and runtime metrics before and after. _(Major versions often change defaults that affect speed.)_
- Watch error rates closely for the first day after release and roll back on a clear rise. _(Some breaking changes only show with real traffic.)_

## Do
- Schedule small upgrades regularly so no single jump is large
- Commit the lockfile with every dependency change
- Pin the exact versions used in CI and production during rollout

## Don't
- Do not run a long-lived upgrade branch that drifts from main
- Do not silence deprecation warnings instead of fixing them
- Do not upgrade during a release freeze or right before a launch

## Quality gates
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Upgrade parity | CI comparison against the main branch baseline | All suites green; bundle size within 5%; no new deprecation warnings | Every upgrade pull request |

## Workflow
**Review**
- Check each commit maps to one listed breaking change or one codemod

**Definition of done**
- Running on the target version in production with the rollback path documented and shims removed

## Further reading
- [Semantic Versioning](https://semver.org/) — Explains what major, minor and patch numbers promise about breaking changes.
- [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) — A format for recording upgrades and breaking changes for your own users.
- [openai/skills](https://github.com/openai/skills) — A catalogue of agent skills that includes dependency and migration tasks.

_Written for Celestial; the sources above inspired it._
