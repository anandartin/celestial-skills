---
name: release-and-versioning-engineering
description: "Engineering practice: Release and versioning — Semantic versions, a human-written changelog and tagged releases, so users know what changed and whether upgrading is safe. Use in any language or framework whenever this practice applies, and when reviewing work that should follow it."
type: engineering
stack: practice
core: "1.0"
checked: 2026-10-26
---

# Release and versioning

Semantic versions, a human-written changelog and tagged releases, so users know what changed and whether upgrading is safe.

Use for any library, CLI, API or app that other people upgrade or depend on. It prevents surprise breaking changes, releases nobody can trace back to a commit, and changelogs that are just a dump of commit titles.

## How to do it
1. **Define the public surface** — Write down what counts as the public API: exported functions, CLI flags and exit codes, HTTP routes and response shapes, config keys. Only changes to this surface affect the major version.
2. **Write commits with a type** — Use type(scope): summary, e.g. feat, fix, perf, docs, refactor. Mark breaking changes with ! after the type and a BREAKING CHANGE footer explaining the migration.
3. **Add to the Unreleased changelog section in the same pull request** — Under Added, Changed, Deprecated, Removed, Fixed or Security, write one line in user terms: what they can now do or what behaves differently. Skip internal refactors.
4. **Choose the next version** — Breaking change → major; new backward-compatible feature → minor; fix only → patch. Before 1.0.0, say in the README how breaking changes are handled.
5. **Cut the release** — Move Unreleased entries under the new version with today's date, bump the version in the manifest, and merge that change. Create an annotated tag vX.Y.Z on the merge commit.
6. **Publish from CI** — The tag triggers a pipeline that builds, attaches checksums and provenance, publishes to the registry and creates release notes from the changelog section.
7. **Write release notes for humans** — Lead with breaking changes and the migration steps, then highlights, then the full list. Link each item to its pull request.
8. **Deprecate before removing** — Mark the old behaviour deprecated with a runtime warning and a changelog entry in a minor release; remove it no sooner than the next major.

## Checklist
- [ ] Version number follows MAJOR.MINOR.PATCH and matches the change type
- [ ] CHANGELOG.md has a dated section for this version with user-facing entries
- [ ] Every breaking change has migration steps in the notes
- [ ] An annotated tag vX.Y.Z points at the released commit
- [ ] The published artifact was built by CI from that tag
- [ ] Release notes link to the pull requests included

## Rules
- Never move or reuse a published tag or version number; ship a new patch instead. _(Anyone who already pulled the old artifact would silently differ from everyone else.)_
- Publish only from CI with registry tokens stored as pipeline secrets and scoped to publishing. _(Laptop releases can include local changes and leak credentials.)_
- The version lives in one place (the package manifest) and everything else reads it. _(Two version strings drift apart.)_
- A bad release is fixed forward with a new patch and, where the registry supports it, the bad version is deprecated or yanked. _(Deleting a release breaks lock files that already reference it.)_

## Do
- Write changelog lines for the person upgrading, not the person who wrote the code
- Include a Security section entry for every vulnerability fix, with the advisory ID
- Keep an Unreleased section at the top so entries accumulate between releases

## Don't
- Paste the raw commit log in place of release notes
- Ship a breaking change in a minor or patch release
- Tag a commit that has not passed the full pipeline

## Quality gates
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Changelog entry | CI check on pull requests touching src/ | CHANGELOG.md Unreleased section changed, or a skip-changelog label with a reason | Every pull request |
| Commit format | Commit message linter | Pull request title follows type(scope): summary | Every pull request |

## Workflow
**Review**
- Reviewer confirms the version bump matches the most severe change in the release

**Definition of done**
- Tag pushed, artifact published by CI, release notes visible with migration steps

## Examples
### Changelog format (`CHANGELOG.md`)

```markdown
# Changelog

## [Unreleased]

### Added
- `export --format csv` writes a spreadsheet-friendly file.

## [2.0.0] - 2026-10-20

### Removed
- **Breaking:** the `--legacy` flag. Use `--mode compat` instead; output is identical.

### Fixed
- Large files no longer time out during upload (#412).

### Security
- Updated the YAML parser to address a denial-of-service advisory.

[Unreleased]: https://example.com/compare/v2.0.0...HEAD
[2.0.0]: https://example.com/compare/v1.8.3...v2.0.0
```

## Further reading
- [Semantic Versioning 2.0.0](https://semver.org/) — The exact rules for major, minor, patch and pre-release versions.
- [Keep a Changelog 1.1.0](https://keepachangelog.com/en/1.1.0/) — The section headings and Unreleased convention used here.
- [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/) — Commit types and the breaking-change footer.
- [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) — Open-source agent skills covering commits, shipping and release hygiene.

_Written for Celestial; the sources above inspired it._
