---
name: tauri-desktop-app-engineering
description: "Engineering skill: Tauri desktop app — how to build and ship a cross-platform app with Tauri with a React UI, Rust, Plain CSS modules reading CSS variables, cargo test. Use when writing, reviewing, testing or releasing code in this stack, and when turning a Celestial design or experience skill into code."
type: engineering
stack: cross-platform
core: "1.0"
checked: 2026-10-26
---

# Tauri desktop app

A small, fast desktop app for macOS, Windows and Linux: a Rust core owns files, data and the OS, and a TypeScript web UI talks to it through typed commands.

For desktop tools that need local files, offline data or system access without a heavy runtime: editors, sync clients, device utilities, internal tools. The UI runs in the operating system's webview; the Rust core exposes a narrow set of commands guarded by capability files. CI builds signed installers for each platform and the updater plugin delivers verified updates.

## Stack
- **Language:** Rust (core) + TypeScript (UI) Rust 1.85+ (2024 edition) · TypeScript ^5.6 — Memory-safe native code for system work; typed UI code for screens.
- **Framework:** Tauri with a React UI Tauri ^2 · React ^19 — Native shell, permissions model and updater with a small installer; React maps onto design-skill components.
- **Styling:** Plain CSS modules reading CSS variables — Tokens as variables; follows the OS light or dark setting at runtime.
- **State:** TanStack Query over Tauri commands + local component state ^5 — Commands are treated like an API: cached, retried and invalidated on events.
- **Data:** SQLite in the Rust core (rusqlite) behind typed commands rusqlite 0.3x — The UI never touches the database or file system directly.
- **Build:** Vite (UI) + Tauri CLI (bundles and installers) Vite ^7 · @tauri-apps/cli ^2 — One command builds the UI, compiles Rust and produces platform installers.
- **Hosting:** Signed installers per platform + Tauri updater with a signed update manifest — Users get verified updates; unsigned builds trigger OS warnings.
- **Package manager:** pnpm + cargo pnpm ^10 — One lockfile per language, both committed.
- **Testing:** cargo test Rust 1.85+ — Unit and integration tests for commands and data code.
- **Testing:** Vitest + Testing Library ^3 · ^16 — UI tests with Tauri's invoke mocked.
- **Testing:** WebdriverIO with tauri-driver ^9 — Journey tests against the real built app on Windows and Linux runners.

## Commands
- dev: `pnpm tauri dev`
- e2e: `pnpm test:e2e`
- lint: `pnpm lint && pnpm typecheck && cargo fmt --manifest-path src-tauri/Cargo.toml --check && cargo clippy --manifest-path src-tauri/Cargo.toml -- -D warnings`
- test: `cargo test --manifest-path src-tauri/Cargo.toml && pnpm test`
- build: `pnpm tauri build`
- install: `pnpm install`

## Structure
- `src/` — Web UI: routes, features and the typed command client
- `src/components/` — Design-skill components, one folder each with component and test
- `src/lib/commands.ts` — Typed wrappers around invoke(); the only place the UI calls Rust
- `src-tauri/src/commands/` — One Rust module per command group; validates input and returns Result
- `src-tauri/capabilities/` — Per-window permission files; reviewed like security code
- `src-tauri/tauri.conf.json` — App identity, CSP, windows, bundle targets and updater endpoints
- `src/styles/tokens.css` — CSS variables written from the design skill
- `e2e/` — One WebdriverIO spec per experience-skill journey

## Naming
- Files: TypeScript kebab-case.ts, components PascalCase.tsx; Rust snake_case.rs
- Tests: *.test.tsx beside UI files; Rust #[cfg(test)] modules beside code; e2e/<journey-id>.e2e.ts
- Branches: type/short-description, e.g. feat/folder-watch
- Components: PascalCase, named after the design-skill component

## From design and experience skills
When a Celestial design skill is in use, write its tokens as CSS custom properties in `src/styles/tokens.css`, and build its components in `src/components` with the same names and variants. Components read tokens only — no raw colours, sizes or font names.

When a Celestial experience skill is in use, give each journey one end-to-end test (happy path plus its error and empty states) and name analytics events `object_action` from its measures.

## Conventions
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

## Do
- Test installers on all three platforms before each release
- Follow the OS appearance, keyboard shortcuts and window conventions per platform
- Store user data in the platform app-data directory resolved by Tauri

## Don't
- Enable a plugin's default permission set without reading what it grants
- Bundle secrets in the binary; desktop binaries are easy to inspect
- Ship an update without a signature check enabled in the updater

## Quality gates
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Lint and types | ESLint + tsc + rustfmt + clippy | 0 errors; clippy warnings fail the build | Every pull request |
| Unit and component tests | The stack’s test runner | All pass; every design-skill component state covered | Every pull request |
| Journey tests | End-to-end runner | One test per experience-skill journey: happy path + error state | Every pull request |
| Accessibility | Automated audit (axe on web, platform audit on mobile) | WCAG 2.2 AA · no new violations | Every pull request |
| Performance budget | Startup and memory measurement on CI runners | First window painted ≤ 1.5s · idle memory ≤ 150MB · installer ≤ 15MB | Every pull request |
| Dependency and secret scan | Dependency audit + secret scanner | No high or critical findings; no secrets | Every pull request and nightly |
| Capability review | Diff of src-tauri/capabilities/ + reviewer checklist | Every new permission is scoped and justified in the pull request; 0 wildcard scopes | Every pull request that touches capabilities or plugins |

The Accessibility gate checks Celestial accessibility core v1.0 (WCAG 2.2 AA); it can change tool but is never skipped. Automated: A11Y-C1, A11Y-F1, A11Y-I1, A11Y-N1, A11Y-N2, A11Y-S1, A11Y-L2, A11Y-P1 (partly). Manual pass before release: A11Y-K1, A11Y-G1, A11Y-R1, A11Y-M1, A11Y-O1, A11Y-V1, A11Y-E1, A11Y-U1, A11Y-L1 — keyboard-only run, screen reader on each journey step, 200% zoom and 320px width, reduced motion, captions on any media. Requirement IDs come from the design and experience skills this code builds. This layer owns: **A11Y-F1** A visible focus indicator on every interactive element, never hidden behind sticky bars (WCAG 2.4.7, 2.4.11); **A11Y-R1** Text works at 200% zoom, at 320px width, with increased text spacing and in either orientation (WCAG 1.4.4, 1.4.10, 1.4.12, 1.3.4); **A11Y-M1** Motion respects the reduced-motion setting; anything moving for over 5 seconds can be paused; nothing flashes more than 3 times a second (WCAG 2.2.2, 2.3.1, 2.3.3 (AAA, advised)); **A11Y-O1** Tooltips and pop-overs shown on hover or focus can be dismissed, hovered and stay until dismissed (WCAG 1.4.13); **A11Y-I1** Images, icons and charts have text alternatives (empty for decoration); text is never an image (WCAG 1.1.1, 1.4.5); **A11Y-V1** Video and audio have captions, transcripts or audio description; nothing plays sound automatically for over 3 seconds (WCAG 1.2.1, 1.2.2, 1.2.3, 1.2.4, 1.2.5, 1.4.2); **A11Y-K1** Every action works by keyboard in a logical order, with no keyboard traps; single-key shortcuts can be turned off or remapped (WCAG 2.1.1, 2.1.2, 2.1.4, 2.4.3); **A11Y-G1** Nothing is drag-, gesture- or motion-only: each has a single tap or click alternative, and actions fire on release so they can be cancelled (WCAG 2.5.1, 2.5.2, 2.5.4, 2.5.7); **A11Y-N1** Every page has a clear title, headings, landmarks and a skip link, and can be found more than one way (WCAG 2.4.1, 2.4.2, 2.4.5, 2.4.6); **A11Y-N2** Controls have visible labels and instructions; links say where they go; the accessible name contains the visible label (WCAG 2.4.4, 2.5.3, 3.3.2); **A11Y-S1** Status, results and errors are announced to screen readers (WCAG 4.1.3); **A11Y-E2** Never ask for the same information twice in one flow; personal fields declare their purpose so they can be autofilled (WCAG 3.3.7, 1.3.5); **A11Y-U1** Focusing or changing a field never moves the person somewhere else or submits without warning (WCAG 3.2.1, 3.2.2); **A11Y-W1** Time limits warn first and can be extended (WCAG 2.2.1); **A11Y-L2** The page language, and any passage in another language, is declared in code (WCAG 3.1.1, 3.1.2); **A11Y-P1** Structure, order, names, roles and states are in the code: native elements first, ARIA only following the WAI-ARIA patterns (WCAG 1.3.1, 1.3.2, 4.1.2).

## Workflow
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

## Overrides of the engineering core
- Preview deploy: Replaced by CI-built, signed installers attached to each pull request — A desktop app is reviewed by installing it, not by opening a link.
- Performance budget: Replaced by desktop startup, memory and installer-size budgets — Web vitals and mobile cold-start numbers do not describe a desktop shell.
- Journey tests: Run on Windows and Linux runners; macOS covered by a manual smoke test — The macOS webview has no WebDriver support for Tauri apps.

## Examples
### Validated command and its typed caller (`src-tauri/src/commands/files.rs`)

```rust
use std::path::PathBuf;
use crate::{error::AppError, state::Workspace};

#[tauri::command]
pub async fn read_note(name: String, ws: tauri::State<'_, Workspace>) -> Result<String, AppError> {
    if name.contains(['/', '\\']) || name.starts_with('.') {
        return Err(AppError::invalid("That file name is not allowed."));
    }
    let path: PathBuf = ws.root().join(format!("{name}.md"));
    let canonical = path.canonicalize().map_err(|_| AppError::not_found("Note not found."))?;
    if !canonical.starts_with(ws.root()) {
        return Err(AppError::invalid("That file is outside the workspace."));
    }
    tokio::fs::read_to_string(canonical).await.map_err(AppError::io)
}

// src/lib/commands.ts
// export const readNote = (name: string) => invoke<string>('read_note', { name });
```

## Further reading
- [Tauri documentation](https://v2.tauri.app/) — Commands, capabilities and permissions, CSP, updater and distribution.
- [The Rust Programming Language](https://doc.rust-lang.org/book/) — Ownership, error handling with Result and async basics used in commands.
- [SLSA](https://slsa.dev/) — Supply-chain levels for signing and verifying the installers you ship.
