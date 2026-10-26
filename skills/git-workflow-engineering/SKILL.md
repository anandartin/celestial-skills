---
name: git-workflow-engineering
description: "Engineering practice: Git workflow — Work in short-lived branches with small, well-described commits, so history explains itself and any change can be reviewed, bisected or reverted. Use in any language or framework whenever this practice applies, and when reviewing work that should follow it."
type: engineering
stack: practice
core: "1.0"
checked: 2026-10-26
---

# Git workflow

Work in short-lived branches with small, well-described commits, so history explains itself and any change can be reviewed, bisected or reverted.

Use this for every change to a shared repository, by people or coding agents. It keeps main deployable and history readable, and prevents painful merges, unreviewable pull requests and commits nobody can explain later.

## How to do it
1. **Start from fresh main** — Pull the latest main and create a branch named type/short-description, for example fix/login-timeout. One branch per issue.
2. **Commit in small, working steps** — Each commit makes one logical change and leaves the build passing. Stage selectively so unrelated edits go in separate commits.
3. **Write a clear message** — Use a short imperative subject under about 70 characters with a type prefix, a blank line, then a body explaining why the change was needed when it is not obvious.
4. **Stay close to main** — Rebase on or merge main at least daily. Resolve conflicts in your branch, re-run tests, and keep branches alive for days, not weeks.
5. **Tidy before review** — Squash fixup commits and reorder so the branch tells a clear story. Never rewrite history that others have already pulled.
6. **Open a focused pull request** — Keep it under about 400 changed lines, link the issue, describe what and why, and note how to test. Wait for CI to pass before requesting review.
7. **Merge and delete** — Squash-merge or rebase-merge once approved, delete the branch, and confirm main is still green.

## Checklist
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

## Do
- Use a type prefix such as feat, fix, docs, refactor or chore in commit subjects
- Use interactive staging to split mixed edits into separate commits
- Tag releases with semantic version numbers

## Don't
- Do not commit with messages like 'wip', 'fix' or 'changes'
- Do not let a feature branch live for more than a few days without merging main
- Do not commit generated files, dependencies or editor settings

## Quality gates
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Commit message format | Commit-message linter in CI | All commits follow the agreed type: subject format | Every pull request |

## Workflow
**Review**
- Check commits are logical units with clear messages, not just the final diff

**Definition of done**
- Merged to main through a reviewed pull request with CI green and the branch deleted

## Examples
### Commit message example (`COMMIT_EDITMSG`)

```text
fix(auth): refresh the session before it expires

Users were signed out mid-form because the token was only refreshed
on navigation. Refresh it 60 seconds before expiry on a timer and
retry the original request once after a 401.

Closes #482
```

## Further reading
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) — A lightweight commit-message convention that tools can parse.
- [Git documentation](https://git-scm.com/doc) — Official reference for branching, rebasing and history editing.
- [obra/superpowers](https://github.com/obra/superpowers) — Includes agent skills for working in branches and worktrees and finishing a branch cleanly.

_Written for Celestial; the sources above inspired it._
