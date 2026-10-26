# AGENTS.md — Git workflow

Work in short-lived branches with small, well-described commits, so history explains itself and any change can be reviewed, bisected or reverted.

## How to do it
1. **Start from fresh main** — Pull the latest main and create a branch named type/short-description, for example fix/login-timeout. One branch per issue.
2. **Commit in small, working steps** — Each commit makes one logical change and leaves the build passing. Stage selectively so unrelated edits go in separate commits.
3. **Write a clear message** — Use a short imperative subject under about 70 characters with a type prefix, a blank line, then a body explaining why the change was needed when it is not obvious.
4. **Stay close to main** — Rebase on or merge main at least daily. Resolve conflicts in your branch, re-run tests, and keep branches alive for days, not weeks.
5. **Tidy before review** — Squash fixup commits and reorder so the branch tells a clear story. Never rewrite history that others have already pulled.
6. **Open a focused pull request** — Keep it under about 400 changed lines, link the issue, describe what and why, and note how to test. Wait for CI to pass before requesting review.
7. **Merge and delete** — Squash-merge or rebase-merge once approved, delete the branch, and confirm main is still green.

## Checklist (before a pull request)
- [ ] Branch is named by type and topic and is based on recent main
- [ ] Every commit builds and has a message saying what and why
- [ ] No secrets, build output or local config are committed
- [ ] Branch is up to date with main and CI is green
- [ ] Pull request is focused, linked to its issue and under the size limit
- [ ] Branch was deleted after merge

## Rules
- Keep secrets and environment files out of the repository with ignore rules and a pre-commit secret scan. _(Anything committed stays in history even after deletion.)_
- Never force-push to main or to a branch someone else is working on. _(Rewriting shared history destroys other people's work.)_
- Protect main: require a pull request, passing CI and one approval. _(Main stays deployable only if nothing reaches it unchecked.)_
- Revert a bad merge on main first, then fix forward on a branch. _(Restoring a working main matters more than a quick patch.)_

## Checks
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Commit message format | Commit-message linter in CI | All commits follow the agreed type: subject format | Every pull request |

_Generated from the Celestial engineering practice “Git workflow”._
