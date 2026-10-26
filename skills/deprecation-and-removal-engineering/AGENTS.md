# AGENTS.md — Deprecation and removal

Retire code, APIs and features in announced, measured steps and then delete them completely, so the codebase shrinks without breaking anyone who still depends on it.

## How to do it
1. **Find every caller** — Search the repository and any dependent repositories for references, then check telemetry, access logs and API gateway metrics for live traffic over at least one full business cycle. List each consumer with an owner.
2. **Decide the replacement** — Name what callers should use instead, or state plainly that there is no replacement and why. Write a short migration guide with a before-and-after example.
3. **Announce with a date** — Publish the deprecation in the changelog, the API docs and directly to known consumers. Give a removal date that matches your published support policy and the size of the migration.
4. **Mark it in code** — Add the language's deprecation marker and a runtime warning or response header that names the replacement and the removal date. Log each use with the caller's identity so usage can be counted.
5. **Measure remaining use** — Track calls per consumer each week on a dashboard. Stop adding new callers by failing lint or review on new references to the deprecated item.
6. **Migrate the last users** — Contact each remaining consumer by name, offer help or a pull request, and agree a date. For internal callers, do the migration yourself where it is cheaper than coordinating.
7. **Remove in one change** — Once usage is zero, or the date has passed with the agreed sign-off, delete the code in a single focused pull request. Keep a tested revert path for the first days after release.
8. **Delete the leftovers** — In the same change or the next one, remove tests, fixtures, feature flags, config keys, environment variables, docs pages, dashboards and alerts that only existed for the removed item.

## Checklist (before a pull request)
- [ ] Every caller was found through code search and live usage data
- [ ] A migration path or an explicit no-replacement note was published
- [ ] The deprecation was announced with a removal date
- [ ] Usage of the deprecated item reached zero, or remaining users signed off
- [ ] The removal shipped as one focused change with a revert path
- [ ] Related tests, flags, config, docs, dashboards and alerts were deleted
- [ ] The changelog records both the deprecation and the removal

## Rules
- Every deprecation marker names the replacement and the removal date. _(A warning with no next step just teaches people to ignore warnings.)_
- Block new references to a deprecated item in lint or review. _(Usage that keeps growing during a deprecation means it will never finish.)_
- Base the go decision on measured usage per consumer, not on code search alone. _(External clients, scripts and scheduled jobs never appear in your repository.)_
- Remove unused endpoints, credentials and permissions as part of the removal, not later. _(Forgotten endpoints and keys are a common way in for attackers.)_
- After removal, return a clear error that names the replacement for a period instead of a generic not-found. _(Late callers can fix themselves without filing a support request.)_

## Checks
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Usage before removal | Telemetry or access-log dashboard | Zero calls to the deprecated item for 14 consecutive days, or written sign-off from each remaining consumer | Before merging the removal pull request |
| No new deprecated calls | Linter rule for deprecated APIs | 0 new references to items marked deprecated | Every pull request |

_Generated from the Celestial engineering practice “Deprecation and removal”._
