---
name: source-grounded-development-engineering
description: "Engineering practice: Source-grounded development — Check every framework and library decision against the official documentation for the exact version installed, so code uses APIs that actually exist and behave as written. Use in any language or framework whenever this practice applies, and when reviewing work that should follow it."
type: engineering
stack: practice
core: "1.0"
checked: 2026-10-26
---

# Source-grounded development

Check every framework and library decision against the official documentation for the exact version installed, so code uses APIs that actually exist and behave as written.

Use this whenever code calls a framework, library, CLI or cloud service, and treat it as mandatory for coding agents, whose memory of an API may come from a different major version. Reading the lockfile and the matching docs first prevents invented options, removed or renamed functions, silently changed defaults and patterns that clash with how the project already works.

## How to do it
1. **Read the installed version** — Open the lockfile (package-lock.json, pnpm-lock.yaml, poetry.lock, Cargo.lock, go.sum, Gemfile.lock) and note the exact resolved version of each library you will touch. The manifest range is not enough; the lockfile is what runs.
2. **Find the matching docs** — Open the official documentation for that major and minor version. Use the version switcher, a versioned URL or the docs bundled in the installed package. Avoid tutorials, forum answers and generated summaries as the primary source.
3. **Look for existing usage** — Search the repository for how the project already calls this API. If a pattern exists and is still supported by the docs, follow it rather than introducing a second way.
4. **Check for version changes** — Read the changelog or migration guide entries between the version you remember and the version installed. Note renamed options, removed functions, new defaults and deprecations that affect your change.
5. **Verify each option and flag** — For every function argument, config key, CLI flag and environment variable you write, confirm it appears in the docs or type definitions for this version. If you cannot find it, do not use it.
6. **Cite non-obvious decisions** — Where the behaviour is surprising or the choice is not the first one a reader would expect, add a short code comment or pull request note with the doc page title and version.
7. **Flag what stays unverified** — If the docs are silent or ambiguous, say so explicitly in the pull request and add a test that pins the behaviour you rely on, instead of presenting a guess as fact.
8. **Prove it runs** — Run the type checker, the tests and the code path itself against the installed version. A compiling call with a wrong option can still fail at runtime or be silently ignored.

## Checklist
- [ ] The exact installed version of each touched library was read from the lockfile
- [ ] Every option, flag and config key used appears in the docs or types for that version
- [ ] Changes between remembered and installed versions were checked in the changelog
- [ ] New code follows the project's existing pattern for the same API, or the pull request says why not
- [ ] Non-obvious choices carry a citation to the doc page and version
- [ ] Anything unverified is listed in the pull request and covered by a test

## Rules
- Never write an option, flag, hook or method name you have not seen in the docs or type definitions for the installed version. _(Invented options are often ignored silently, so the bug shows up later and far from its cause.)_
- Treat the lockfile as the source of truth for versions, not the manifest, memory or the latest release. _(A caret range can resolve to a different minor version than the one you assume.)_
- Prefer the pattern the codebase already uses for an API over a newer one you know, unless the docs mark the existing one deprecated. _(Two ways of doing the same thing doubles the review and migration cost.)_
- Confirm security-relevant defaults (escaping, cookie flags, CORS, TLS verification) in the docs for this version before relying on them. _(Defaults change between major versions and a wrong assumption opens a hole quietly.)_
- When docs and observed behaviour disagree, write a failing test that shows the difference and note it in the pull request. _(It turns a hunch into evidence and protects the next upgrade.)_

## Do
- Open the lockfile before writing the first import
- Use the type definitions and inline docs shipped with the installed package as a quick check
- Say "I could not confirm this in the docs for version X" when that is the truth

## Don't
- Do not copy an API call from a snippet without checking which version it was written for
- Do not upgrade a dependency just to make a remembered API work; raise it as a separate change
- Do not cite a doc page you did not open

## Quality gates
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Unverified APIs declared | Pull request template check | Pull requests that add or change third-party API calls include a 'Docs checked' section listing library, version and page, or 'none unverified' | Every pull request |

## Workflow
**Review**
- For each new third-party call, ask which docs version it was checked against
- Reject options or flags the reviewer cannot find in the installed version's docs or types

**Definition of done**
- Every third-party call verified against the installed version's docs
- Unverified behaviour listed and pinned by a test

## Examples
### Citation comment for a non-obvious choice (`src/lib/http.ts`)

```typescript
import { Agent } from 'undici';

// Docs checked: undici 6.x, Agent / Client options (lockfile resolves 6.x).
// keepAliveTimeout is in milliseconds; the project's other clients use the same unit.
// Unverified: behaviour when the server closes idle sockets first.
// Pinned by test: src/lib/http.keepalive.test.ts
export const agent = new Agent({
  keepAliveTimeout: 10_000,
  connections: 32,
});
```

## Further reading
- [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) — Engineering skills for coding agents, including grounding work in official documentation.
- [anthropics/skills](https://github.com/anthropics/skills) — Shows how to package instructions like this so an agent follows them on every task.
- [Semantic Versioning](https://semver.org/) — Explains what major, minor and patch numbers promise, and so which changelog entries to read.

_Written for Celestial; the sources above inspired it._
