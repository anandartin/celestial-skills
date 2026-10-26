# AGENTS.md — Jetpack Compose Android app

A native Android app in Kotlin with declarative UI, one-way data flow and screenshot plus journey tests.

## Setup and commands
- dev: `./gradlew installDebug`
- lint: `./gradlew lint ktlintCheck detekt`
- test: `./gradlew test connectedCheck`
- build: `./gradlew bundleRelease`
- install: `./gradlew dependencies`

## Project structure
- `app/` — Application, navigation graph, dependency setup
- `feature/<journey>/` — Screens and view models for one journey
- `core/designsystem/` — Theme, tokens and design-skill components
- `core/data/` — Repositories, network and database
- `core/analytics/` — Event names from the experience skill

## Code style
- Files: PascalCase.kt
- Tests: <Type>Test.kt; <Journey>JourneyTest.kt
- Branches: type/short-description
- Components: PascalCase composables named after the design-skill component

### Code
- Prefer small, pure functions and explicit types at module boundaries. _(Easier to test, review and change.)_
- Composables are stateless; state is hoisted to the view model. _(Previews and tests stay simple.)_

### Components
- Components read design tokens; no raw hex values, pixel sizes or font names in component code. _(One token change restyles the product.)_

### Data
- Analytics events are object_action in snake_case and come from the experience skill’s measures. _(Names stay consistent across teams and tools.)_

### Errors
- Every async action has loading, empty, error and success states, matching the experience skill. _(Unhandled states are where users get stuck.)_

### Security
- Secrets never live in the repository; read them from the environment or a secret store. _(A leaked key outlives the commit that removed it.)_
- Validate every input on the server, even when the client already did. _(Clients can be bypassed.)_
- Web pages ship a Content-Security-Policy, HSTS, X-Frame-Options and nosniff. _(Cheap protection against the most common attacks.)_

### Performance
- Use stable types and keys in lazy lists; check recomposition counts for list screens. _(Keeps scrolling smooth.)_

### Accessibility
- Use native elements first; add ARIA only when no native element fits. _(Native controls bring keyboard and screen-reader support for free.)_
- Every interactive composable has a content description or visible label and a 48dp minimum touch target. _(TalkBack users and platform guidance.)_

## Design and journeys
When a Celestial design skill is in use, write its tokens as Compose MaterialTheme in `core/designsystem/Theme.kt`, and build its components in `core/designsystem/component` with the same names and variants. Components read tokens only — no raw colours, sizes or font names.

When a Celestial experience skill is in use, give each journey one end-to-end test (happy path plus its error and empty states) and name analytics events `object_action` from its measures.

## Testing and checks (must pass before a pull request)
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Lint and types | The stack’s linter and type checker | 0 errors | Every pull request |
| Unit and component tests | The stack’s test runner | All pass; every design-skill component state covered | Every pull request |
| Journey tests | End-to-end runner | One test per experience-skill journey: happy path + error state | Every pull request |
| Accessibility | Compose semantics checks + Accessibility Test Framework | No errors on journey screens | Every pull request |
| Performance budget | Macrobenchmark | Cold start ≤ 2s on a mid-range device · no janky frames in list scroll | Nightly |
| Dependency and secret scan | Dependency audit + secret scanner | No high or critical findings; no secrets | Every pull request and nightly |
| Preview deploy | Hosting preview environment | A working preview link on the pull request | Every pull request |

## Pull requests
- Branching: Short-lived branches; release branches per Play release.

**Review checklist**
- Correctness: does it do what the issue asks, including edge cases?
- Readability: could a new teammate change it safely?
- Architecture: is it in the right place, with the right boundaries?
- Security: inputs, secrets, permissions, dependencies
- Performance: budgets, queries, bundle size
- Tests fail when the code is broken (flip a condition and re-run)
- Screenshots attached for UI changes

**Definition of done**
- Acceptance criteria met and demoed on the preview link
- Tests added for new behaviour and every state
- Accessibility and performance gates green
- Analytics events named from the experience skill
- Docs or changelog updated when behaviour changes

**Release**
- Small pull requests (aim for under 400 changed lines)
- CI green before review
- Squash-merge to main; main is always deployable
- Every release has a written rollback path
- Internal track on every merge; staged rollout 10% → 50% → 100%

**Incidents**
- Halt the staged rollout; remote config flags to disable features

_Generated from the Celestial engineering skill “Jetpack Compose Android app” (engineering core v1.0, checked 2026-10-25)._
