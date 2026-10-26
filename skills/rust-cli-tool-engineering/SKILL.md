---
name: rust-cli-tool-engineering
description: "Engineering skill: Rust CLI tool — how to build and ship a library with clap, Rust, cargo test. Use when writing, reviewing, testing or releasing code in this stack, and when turning a Celestial design or experience skill into code."
type: engineering
stack: library
core: "1.0"
checked: 2026-10-26
---

# Rust CLI tool

A single-binary command-line tool in Rust with typed argument parsing, clear exit codes and tests that run the real binary.

For developer tools, file processors, migration helpers and local automation that should start instantly and ship as one static binary. Released as prebuilt binaries per platform from tagged commits, and optionally published to the crate registry.

## Stack
- **Language:** Rust 1.82+ (edition 2021) — Memory safety without a runtime, so the binary starts fast and has no install dependencies.
- **Framework:** clap (derive API) ^4 — Arguments, subcommands and help text come from one typed struct.
- **State:** Config struct loaded once from flags, env and an optional config file — One resolved value is passed down; nothing reads globals.
- **Data:** serde + serde_json / toml ^1 — Typed parsing of config files and machine-readable --json output.
- **Build:** Cargo built in — Builds, tests, lints and packages with one tool.
- **Hosting:** Release assets per target triple — Users download one file for their platform; no toolchain needed.
- **Package manager:** Cargo + Cargo.lock committed built in — Reproducible builds for a binary crate.
- **Testing:** cargo test built in — Unit tests beside the code and integration tests in tests/.
- **Testing:** assert_cmd + predicates ^2 — Runs the compiled binary and checks stdout, stderr and exit code.
- **Testing:** insta ^1 — Snapshot tests for help text and formatted output, reviewed as diffs.

## Commands
- dev: `cargo run -- --help`
- lint: `cargo fmt --check && cargo clippy --all-targets --all-features -- -D warnings`
- test: `cargo test --all-features`
- build: `cargo build --release`
- deploy: `git tag vX.Y.Z && git push --tags`
- install: `cargo fetch`

## Structure
- `src/main.rs` — Parses arguments, calls run(), maps errors to exit codes; nothing else
- `src/cli.rs` — clap derive structs: the full command surface in one file
- `src/commands/` — One module per subcommand, each exposing run(args, ctx) -> Result
- `src/lib.rs` — Core logic with no terminal I/O, so it can be unit-tested and reused
- `src/output.rs` — Human and --json renderers; the only place that writes to stdout
- `tests/` — Integration tests that run the built binary against fixture files
- `tests/snapshots/` — Reviewed insta snapshots of help text and output

## Naming
- Files: snake_case.rs; one module per subcommand named after it
- Tests: #[cfg(test)] mod tests beside the code; tests/<subcommand>.rs for binary tests
- Branches: type/short-description, e.g. fix/glob-on-windows
- Components: Types PascalCase, functions and modules snake_case, flags kebab-case (--dry-run)

## From design and experience skills
This stack has no UI; design skills do not apply.

When a Celestial experience skill is in use, give each journey one end-to-end test (happy path plus its error and empty states) and name analytics events `object_action` from its measures.

## Conventions
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

## Do
- Offer --dry-run on every command that writes, moves or deletes files
- Snapshot-test --help so flag changes show up in review
- Keep logic in lib.rs and treat main.rs as a thin adapter

## Don't
- Change the --json output shape without a major version bump
- Add a dependency for something the standard library already does
- Prompt for input when stdin is not a terminal

## Quality gates
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

## Workflow
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

## Overrides of the engineering core
- gates.Journey tests: Replaced by binary integration tests: one per subcommand covering success and a failure exit code — A CLI has no screens; the user journey is a command invocation.
- gates.Accessibility: Not applicable — replaced by the NO_COLOR and non-TTY rule — There is no rendered UI to audit.
- gates.Performance budget: Replaced by: startup under 50ms for --help and no regression over 10% on the benchmark fixture — Web vitals and frame rates do not apply to a terminal tool.
- gates.Preview deploy: Replaced by: CI uploads the built binary as a pull-request artifact — Reviewers download and run the binary instead of opening a link.
- rules.components: Not applicable — No design-skill components or tokens in a CLI.

## Examples
### Thin main with exit codes (`src/main.rs`)

```rust
use std::process::ExitCode;
use clap::Parser;

mod cli;
mod commands;
mod output;

fn main() -> ExitCode {
    let args = cli::Cli::parse();
    match commands::run(args) {
        Ok(()) => ExitCode::SUCCESS,
        Err(err) => {
            eprintln!("error: {err:#}");
            ExitCode::from(1)
        }
    }
}
```

### Binary test (`tests/count.rs`)

```rust
use assert_cmd::Command;
use predicates::str::contains;

#[test]
fn counts_lines_as_json() {
    Command::cargo_bin("tally").unwrap()
        .args(["count", "tests/fixtures/three-lines.txt", "--json"])
        .assert()
        .success()
        .stdout(contains("\"lines\":3"));
}

#[test]
fn missing_file_fails_with_message() {
    Command::cargo_bin("tally").unwrap()
        .args(["count", "nope.txt"])
        .assert()
        .code(1)
        .stderr(contains("nope.txt"));
}
```

## Further reading
- [The Rust Programming Language](https://doc.rust-lang.org/book/) — Error handling with Result and the module system the structure relies on.
- [Semantic Versioning](https://semver.org/) — Deciding when a flag or output change needs a major version.
- [Twelve-Factor App](https://12factor.net/) — Config from the environment, which the flag-env-file resolution follows.
