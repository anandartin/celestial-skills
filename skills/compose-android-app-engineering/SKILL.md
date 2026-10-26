---
name: compose-android-app-engineering
description: "Engineering skill: Jetpack Compose Android app — how to build and ship a android app with Jetpack Compose, Kotlin, MaterialTheme with custom schemes, JUnit + Turbine. Use when writing, reviewing, testing or releasing code in this stack, and when turning a Celestial design or experience skill into code."
type: engineering
stack: mobile-android
core: "1.0"
checked: 2026-10-25
---

# Jetpack Compose Android app

A native Android app in Kotlin with declarative UI, one-way data flow and screenshot plus journey tests.

For native Android products. UI is Compose; state flows one way from view models. Design-skill tokens become a MaterialTheme with custom colour and type schemes.

## Stack
- **Language:** Kotlin 2.x — Null safety and coroutines for async work.
- **Framework:** Jetpack Compose BOM 2026 — Declarative UI that maps onto design-skill components.
- **Styling:** MaterialTheme with custom schemes — Tokens become colour, type and shape schemes.
- **State:** ViewModel + StateFlow — One-way data flow that survives configuration changes.
- **Data:** Retrofit or Ktor client + Room — Typed networking and offline cache.
- **Build:** Gradle (Kotlin DSL) with version catalogue — One place for versions.
- **Hosting:** Play Console internal → production tracks — Staged rollouts.
- **Package manager:** Gradle — Standard for Android.
- **Testing:** JUnit + Turbine — View-model and flow tests.
- **Testing:** Compose UI tests — One test per journey with semantics checks.
- **Testing:** Screenshot tests — Catch visual regressions per component.

## Commands
- dev: `./gradlew installDebug`
- lint: `./gradlew lint ktlintCheck detekt`
- test: `./gradlew test connectedCheck`
- build: `./gradlew bundleRelease`
- install: `./gradlew dependencies`

## Structure
- `app/` — Application, navigation graph, dependency setup
- `feature/<journey>/` — Screens and view models for one journey
- `core/designsystem/` — Theme, tokens and design-skill components
- `core/data/` — Repositories, network and database
- `core/analytics/` — Event names from the experience skill

## Naming
- Files: PascalCase.kt
- Tests: <Type>Test.kt; <Journey>JourneyTest.kt
- Branches: type/short-description
- Components: PascalCase composables named after the design-skill component

## From design and experience skills
When a Celestial design skill is in use, write its tokens as Compose MaterialTheme in `core/designsystem/Theme.kt`, and build its components in `core/designsystem/component` with the same names and variants. Components read tokens only — no raw colours, sizes or font names.

When a Celestial experience skill is in use, give each journey one end-to-end test (happy path plus its error and empty states) and name analytics events `object_action` from its measures.

## Conventions
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

## Do
- Preview each component in light, dark and 200% font scale
- Use the version catalogue for every dependency
- Respect system back and predictive back gestures

## Don't
- Read colours from resources inside composables — use the theme
- Do network work on the main thread
- Ship a screen without a TalkBack pass

## Quality gates
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Lint and types | The stack’s linter and type checker | 0 errors | Every pull request |
| Unit and component tests | The stack’s test runner | All pass; every design-skill component state covered | Every pull request |
| Journey tests | End-to-end runner | One test per experience-skill journey: happy path + error state | Every pull request |
| Accessibility | Compose semantics checks + Accessibility Test Framework | No errors on journey screens | Every pull request |
| Performance budget | Macrobenchmark | Cold start ≤ 2s on a mid-range device · no janky frames in list scroll | Nightly |
| Dependency and secret scan | Dependency audit + secret scanner | No high or critical findings; no secrets | Every pull request and nightly |
| Preview deploy | Hosting preview environment | A working preview link on the pull request | Every pull request |

## Workflow
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

## Overrides of the engineering core
- Touch target: 48dp — Platform guidance is larger than the core’s 44px minimum.

## Examples
### Theme from tokens (`core/designsystem/Theme.kt`)

```kotlin
private val LightColors = lightColorScheme(
  primary = Color(0xFF2B3FD6),
  onPrimary = Color.White,
  background = Color(0xFFFFFFFF),
  onBackground = Color(0xFF111111),
)

@Composable
fun AppTheme(dark: Boolean = isSystemInDarkTheme(), content: @Composable () -> Unit) {
  MaterialTheme(colorScheme = if (dark) DarkColors else LightColors, shapes = AppShapes, typography = AppType, content = content)
}
```
