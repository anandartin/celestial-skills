# AGENTS.md — Tauri desktop app

A small, fast desktop app for macOS, Windows and Linux: a Rust core owns files, data and the OS, and a TypeScript web UI talks to it through typed commands.

## Setup and commands
- dev: `pnpm tauri dev`
- e2e: `pnpm test:e2e`
- lint: `pnpm lint && pnpm typecheck && cargo fmt --manifest-path src-tauri/Cargo.toml --check && cargo clippy --manifest-path src-tauri/Cargo.toml -- -D warnings`
- test: `cargo test --manifest-path src-tauri/Cargo.toml && pnpm test`
- build: `pnpm tauri build`
- install: `pnpm install`

## Project structure
- `src/` — Web UI: routes, features and the typed command client
- `src/components/` — Design-skill components, one folder each with component and test
- `src/lib/commands.ts` — Typed wrappers around invoke(); the only place the UI calls Rust
- `src-tauri/src/commands/` — One Rust module per command group; validates input and returns Result
- `src-tauri/capabilities/` — Per-window permission files; reviewed like security code
- `src-tauri/tauri.conf.json` — App identity, CSP, windows, bundle targets and updater endpoints
- `src/styles/tokens.css` — CSS variables written from the design skill
- `e2e/` — One WebdriverIO spec per experience-skill journey

## Code style
- Files: TypeScript kebab-case.ts, components PascalCase.tsx; Rust snake_case.rs
- Tests: *.test.tsx beside UI files; Rust #[cfg(test)] modules beside code; e2e/<journey-id>.e2e.ts
- Branches: type/short-description, e.g. feat/folder-watch
- Components: PascalCase, named after the design-skill component

### Code
- Prefer small, pure functions and explicit types at module boundaries. _(Easier to test, review and change.)_
- The UI calls Rust only through src/lib/commands.ts with shared types generated from the Rust structs. _(One typed boundary; a renamed field breaks the build, not a user's session.)_

### Components
- Components read design tokens; no raw hex values, pixel sizes or font names in component code. _(One token change restyles the product.)_

### Data
- Analytics events are object_action in snake_case and come from the experience skill’s measures. _(Names stay consistent across teams and tools.)_

### Errors
- Every async action has loading, empty, error and success states, matching the experience skill. _(Unhandled states are where users get stuck.)_
- Commands return Result<T, AppError> where AppError serialises to a code and a user-safe message; never panic in a command. _(The UI can show the right error state, and a panic does not take down the app.)_

### Security
- Secrets never live in the repository; read them from the environment or a secret store. _(A leaked key outlives the commit that removed it.)_
- Validate every input on the server, even when the client already did. _(Clients can be bypassed.)_
- Web pages ship a Content-Security-Policy, HSTS, X-Frame-Options and nosniff. _(Cheap protection against the most common attacks.)_
- Grant each window only the permissions it uses, scoped to paths or commands; no wildcard file-system scopes and no shell execution permission. _(If the webview is ever compromised, capabilities decide what it can reach.)_
- Every Rust command validates its arguments (paths canonicalised and checked against an allowed root) before acting. _(The UI is untrusted input to the core, the same as a network client.)_
- Set a strict CSP in tauri.conf.json; load no remote scripts and no remote URLs in app windows. _(Remote content inside a privileged window is the main attack path for desktop web shells.)_

### Performance
- Long-running work runs in async commands or spawned tasks and reports progress through events; the UI never blocks on it. _(Keeps windows responsive during file scans and sync.)_

### Accessibility
- Use native elements first; add ARIA only when no native element fits. _(Native controls bring keyboard and screen-reader support for free.)_

## Design and journeys
When a Celestial design skill is in use, write its tokens as CSS custom properties in `src/styles/tokens.css`, and build its components in `src/components` with the same names and variants. Components read tokens only — no raw colours, sizes or font names.

When a Celestial experience skill is in use, give each journey one end-to-end test (happy path plus its error and empty states) and name analytics events `object_action` from its measures.

## Testing and checks (must pass before a pull request)
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Lint and types | ESLint + tsc + rustfmt + clippy | 0 errors; clippy warnings fail the build | Every pull request |
| Unit and component tests | The stack’s test runner | All pass; every design-skill component state covered | Every pull request |
| Journey tests | End-to-end runner | One test per experience-skill journey: happy path + error state | Every pull request |
| Accessibility | Automated audit (axe on web, platform audit on mobile) | WCAG 2.2 AA · no new violations | Every pull request |
| Performance budget | Startup and memory measurement on CI runners | First window painted ≤ 1.5s · idle memory ≤ 150MB · installer ≤ 15MB | Every pull request |
| Dependency and secret scan | Dependency audit + secret scanner | No high or critical findings; no secrets | Every pull request and nightly |
| Capability review | Diff of src-tauri/capabilities/ + reviewer checklist | Every new permission is scoped and justified in the pull request; 0 wildcard scopes | Every pull request that touches capabilities or plugins |

## Pull requests
- Branching: Trunk-based: short-lived branches off main, squash-merged within two days.

**Review checklist**
- Correctness: does it do what the issue asks, including edge cases?
- Readability: could a new teammate change it safely?
- Architecture: is it in the right place, with the right boundaries?
- Security: inputs, secrets, permissions, dependencies
- Performance: budgets, queries, bundle size
- Tests fail when the code is broken (flip a condition and re-run)
- One approving review; two for capabilities, updater, file-system or crypto code
- Reviewer runs the CI-built installer for at least one platform

**Definition of done**
- Acceptance criteria met and demoed on the preview link
- Tests added for new behaviour and every state
- Accessibility and performance gates green
- Analytics events named from the experience skill
- Docs or changelog updated when behaviour changes
- Built and smoke-tested on macOS, Windows and Linux

**Release**
- Small pull requests (aim for under 400 changed lines)
- CI green before review
- Squash-merge to main; main is always deployable
- Every release has a written rollback path
- Tagged builds produce signed installers and a signed update manifest
- Updates roll out to an early-access channel for a week before everyone

**Incidents**
- Repoint the update manifest to the previous signed version
- Write a blameless note within 48 hours: what happened, impact, fix, prevention

_Generated from the Celestial engineering skill “Tauri desktop app” (engineering core v1.0, checked 2026-10-26)._
