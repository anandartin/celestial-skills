---
name: deprecation-and-removal-engineering
description: "Engineering practice: Deprecation and removal — Retire code, APIs and features in announced, measured steps and then delete them completely, so the codebase shrinks without breaking anyone who still depends on it. Use in any language or framework whenever this practice applies, and when reviewing work that should follow it."
type: engineering
stack: practice
core: "1.0"
checked: 2026-10-26
---

# Deprecation and removal

Retire code, APIs and features in announced, measured steps and then delete them completely, so the codebase shrinks without breaking anyone who still depends on it.

Use this when an endpoint, function, config option, feature or service should go away. Every line kept costs reading, testing, patching and security review; a staged retirement with real usage data prevents both surprise breakage for the last callers and dead code that lingers for years.

## How to do it
1. **Find every caller** — Search the repository and any dependent repositories for references, then check telemetry, access logs and API gateway metrics for live traffic over at least one full business cycle. List each consumer with an owner.
2. **Decide the replacement** — Name what callers should use instead, or state plainly that there is no replacement and why. Write a short migration guide with a before-and-after example.
3. **Announce with a date** — Publish the deprecation in the changelog, the API docs and directly to known consumers. Give a removal date that matches your published support policy and the size of the migration.
4. **Mark it in code** — Add the language's deprecation marker and a runtime warning or response header that names the replacement and the removal date. Log each use with the caller's identity so usage can be counted.
5. **Measure remaining use** — Track calls per consumer each week on a dashboard. Stop adding new callers by failing lint or review on new references to the deprecated item.
6. **Migrate the last users** — Contact each remaining consumer by name, offer help or a pull request, and agree a date. For internal callers, do the migration yourself where it is cheaper than coordinating.
7. **Remove in one change** — Once usage is zero, or the date has passed with the agreed sign-off, delete the code in a single focused pull request. Keep a tested revert path for the first days after release.
8. **Delete the leftovers** — In the same change or the next one, remove tests, fixtures, feature flags, config keys, environment variables, docs pages, dashboards and alerts that only existed for the removed item.

## Checklist
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

## Do
- Count unused code as a cost when planning work
- Follow semantic versioning: deprecate in a minor release, remove in a major one for public packages
- Keep a short deprecation register with item, owner, date and current usage

## Don't
- Do not remove something on the announced date without checking who still calls it
- Do not leave commented-out code behind "in case"; version control keeps it
- Do not bundle a removal with unrelated changes that make a revert harder

## Quality gates
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Usage before removal | Telemetry or access-log dashboard | Zero calls to the deprecated item for 14 consecutive days, or written sign-off from each remaining consumer | Before merging the removal pull request |
| No new deprecated calls | Linter rule for deprecated APIs | 0 new references to items marked deprecated | Every pull request |

## Workflow
**Review**
- Check that the removal also deletes the tests, flags, config and docs tied to it
- Confirm the usage evidence is attached to the pull request

**Definition of done**
- Item and all its leftovers deleted
- Changelog and deprecation register updated

## Examples
### Deprecation marker with logged usage (`src/api/reports.ts`)

```typescript
/**
 * @deprecated Since 4.6. Use `exportReport({ format: 'csv' })` instead.
 * Removal planned in 5.0 (2027-03-01). Guide: docs/migrations/report-csv.md
 */
export function legacyCsvExport(req: Request, res: Response) {
  logger.warn('deprecated_call', {
    item: 'legacyCsvExport',
    caller: req.headers['x-client-id'] ?? 'unknown',
  });
  res.setHeader('Deprecation', 'true');
  res.setHeader('Sunset', 'Mon, 01 Mar 2027 00:00:00 GMT');
  res.setHeader('Link', '</docs/migrations/report-csv>; rel="deprecation"');
  return exportReport(req, res, { format: 'csv' });
}
```

## Further reading
- [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) — Engineering skills for coding agents that cover retiring code and keeping a codebase lean.
- [Semantic Versioning](https://semver.org/) — Defines when a deprecation may ship and when a removal requires a major version.
- [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) — Has Deprecated and Removed sections for announcing each stage to users.

_Written for Celestial; the sources above inspired it._
