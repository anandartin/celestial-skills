# AGENTS.md — Release and versioning

Semantic versions, a human-written changelog and tagged releases, so users know what changed and whether upgrading is safe.

## How to do it
1. **Define the public surface** — Write down what counts as the public API: exported functions, CLI flags and exit codes, HTTP routes and response shapes, config keys. Only changes to this surface affect the major version.
2. **Write commits with a type** — Use type(scope): summary, e.g. feat, fix, perf, docs, refactor. Mark breaking changes with ! after the type and a BREAKING CHANGE footer explaining the migration.
3. **Add to the Unreleased changelog section in the same pull request** — Under Added, Changed, Deprecated, Removed, Fixed or Security, write one line in user terms: what they can now do or what behaves differently. Skip internal refactors.
4. **Choose the next version** — Breaking change → major; new backward-compatible feature → minor; fix only → patch. Before 1.0.0, say in the README how breaking changes are handled.
5. **Cut the release** — Move Unreleased entries under the new version with today's date, bump the version in the manifest, and merge that change. Create an annotated tag vX.Y.Z on the merge commit.
6. **Publish from CI** — The tag triggers a pipeline that builds, attaches checksums and provenance, publishes to the registry and creates release notes from the changelog section.
7. **Write release notes for humans** — Lead with breaking changes and the migration steps, then highlights, then the full list. Link each item to its pull request.
8. **Deprecate before removing** — Mark the old behaviour deprecated with a runtime warning and a changelog entry in a minor release; remove it no sooner than the next major.

## Checklist (before a pull request)
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

## Checks
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Changelog entry | CI check on pull requests touching src/ | CHANGELOG.md Unreleased section changed, or a skip-changelog label with a reason | Every pull request |
| Commit format | Commit message linter | Pull request title follows type(scope): summary | Every pull request |

_Generated from the Celestial engineering practice “Release and versioning”._
