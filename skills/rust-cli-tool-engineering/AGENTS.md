# AGENTS.md — Rust CLI tool

A single-binary command-line tool in Rust with typed argument parsing, clear exit codes and tests that run the real binary.

## Setup and commands
- dev: `cargo run -- --help`
- lint: `cargo fmt --check && cargo clippy --all-targets --all-features -- -D warnings`
- test: `cargo test --all-features`
- build: `cargo build --release`
- deploy: `git tag vX.Y.Z && git push --tags`
- install: `cargo fetch`

## Project structure
- `src/main.rs` — Parses arguments, calls run(), maps errors to exit codes; nothing else
- `src/cli.rs` — clap derive structs: the full command surface in one file
- `src/commands/` — One module per subcommand, each exposing run(args, ctx) -> Result
- `src/lib.rs` — Core logic with no terminal I/O, so it can be unit-tested and reused
- `src/output.rs` — Human and --json renderers; the only place that writes to stdout
- `tests/` — Integration tests that run the built binary against fixture files
- `tests/snapshots/` — Reviewed insta snapshots of help text and output

## Code style
- Files: snake_case.rs; one module per subcommand named after it
- Tests: #[cfg(test)] mod tests beside the code; tests/<subcommand>.rs for binary tests
- Branches: type/short-description, e.g. fix/glob-on-windows
- Components: Types PascalCase, functions and modules snake_case, flags kebab-case (--dry-run)

### Code
- Prefer small, pure functions and explicit types at module boundaries. _(Easier to test, review and change.)_
- Data goes to stdout, diagnostics and progress go to stderr. _(Piping the output into another tool must not capture log lines.)_

### Components
- Components read design tokens; no raw hex values, pixel sizes or font names in component code. _(One token change restyles the product.)_

### Data
- Analytics events are object_action in snake_case and come from the experience skill’s measures. _(Names stay consistent across teams and tools.)_
- Every command that prints results supports --json with a stable, versioned shape. _(Other programs can consume the tool without parsing prose.)_

### Errors
- Every async action has loading, empty, error and success states, matching the experience skill. _(Unhandled states are where users get stuck.)_
- No unwrap() or expect() outside tests; return Result and add context at each layer. _(A panic prints a stack trace instead of a message the user can act on.)_
- Exit 0 on success, 1 on runtime failure, 2 on bad usage; document any other codes. _(Scripts and CI branch on exit codes, not on text.)_

### Security
- Secrets never live in the repository; read them from the environment or a secret store. _(A leaked key outlives the commit that removed it.)_
- Validate every input on the server, even when the client already did. _(Clients can be bypassed.)_
- Web pages ship a Content-Security-Policy, HSTS, X-Frame-Options and nosniff. _(Cheap protection against the most common attacks.)_
- Never pass user input through a shell; build std::process::Command with explicit args. _(Prevents command injection from file names and arguments.)_

### Performance
- Stream large inputs with buffered readers instead of reading whole files into memory. _(The tool keeps working on files larger than RAM.)_

### Accessibility
- Use native elements first; add ARIA only when no native element fits. _(Native controls bring keyboard and screen-reader support for free.)_
- Disable colour and spinners when NO_COLOR is set or stdout is not a terminal. _(Logs, screen readers and CI output stay readable.)_

## Design and journeys
This stack has no UI; design skills do not apply.

When a Celestial experience skill is in use, give each journey one end-to-end test (happy path plus its error and empty states) and name analytics events `object_action` from its measures.

## Testing and checks (must pass before a pull request)
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Lint and types | rustfmt + clippy with -D warnings | 0 warnings, formatting clean | Every pull request |
| Unit and component tests | The stack’s test runner | All pass; every design-skill component state covered | Every pull request |
| Journey tests | End-to-end runner | One test per experience-skill journey: happy path + error state | Every pull request |
| Accessibility | Automated audit (axe on web, platform audit on mobile) | WCAG 2.2 AA · no new violations | Every pull request |
| Performance budget | Lab measurement in CI | Web: LCP ≤ 2.5s · INP ≤ 200ms · CLS ≤ 0.1 · ≤ 170KB JS per route. Mobile: cold start ≤ 2s · 60fps scroll | Every pull request |
| Dependency and secret scan | cargo audit + cargo deny + secret scanner | No unpatched advisories; only allowed licences; no secrets | Every pull request and nightly |
| Preview deploy | Hosting preview environment | A working preview link on the pull request | Every pull request |
| Cross-platform build | CI matrix: Linux, macOS, Windows | Release build and full test suite pass on every target | Every pull request |

## Pull requests
- Branching: Trunk-based: short-lived branches off main, squash-merged.

**Review checklist**
- Correctness: does it do what the issue asks, including edge cases?
- Readability: could a new teammate change it safely?
- Architecture: is it in the right place, with the right boundaries?
- Security: inputs, secrets, permissions, dependencies
- Performance: budgets, queries, bundle size
- Tests fail when the code is broken (flip a condition and re-run)
- Reviewer runs the changed command locally against a fixture, including a failure case
- Any change to flags, exit codes or --json output is called out in the description

**Definition of done**
- Acceptance criteria met and demoed on the preview link
- Tests added for new behaviour and every state
- Accessibility and performance gates green
- Analytics events named from the experience skill
- Docs or changelog updated when behaviour changes
- Help text and README usage updated for new or changed flags
- Integration test covers success, bad input and exit code

**Release**
- Small pull requests (aim for under 400 changed lines)
- CI green before review
- Squash-merge to main; main is always deployable
- Every release has a written rollback path
- Tag vX.Y.Z on main; CI builds binaries per target, writes checksums and attaches them to the release
- Version in Cargo.toml follows semantic versioning; the CLI surface is the public API

**Incidents**
- Yank or mark the broken release and point the install docs at the previous tag
- Add a regression test reproducing the report before shipping the fix

_Generated from the Celestial engineering skill “Rust CLI tool” (engineering core v1.0, checked 2026-10-26)._
