# AGENTS.md — Flutter app

One Dart codebase drawn by Flutter on iOS and Android, with tokens as a theme extension, Riverpod for state and golden tests guarding every component.

## Setup and commands
- dev: `flutter run`
- e2e: `flutter test integration_test`
- lint: `dart format --output=none --set-exit-if-changed . && flutter analyze`
- test: `flutter test`
- build: `flutter build appbundle --release && flutter build ipa --release`
- install: `flutter pub get`

## Project structure
- `lib/main.dart + lib/app.dart` — Entry point, ProviderScope, router and theme setup
- `lib/features/<feature>/` — presentation/ (screens, widgets), application/ (providers), data/ (repository, DTOs)
- `lib/ui/` — Design-skill components as stateless widgets reading the theme
- `lib/theme/tokens.dart` — Generated ThemeExtension with light and dark token values
- `lib/core/` — HTTP client, secure storage, routing (go_router), analytics
- `test/` — Unit, widget and golden tests mirroring lib/
- `integration_test/` — One test per experience-skill journey

## Code style
- Files: snake_case.dart
- Tests: <file>_test.dart mirroring lib/; goldens in test/goldens/<component>_<state>_<theme>.png
- Branches: type/short-description, e.g. feat/card-freeze
- Components: UpperCamelCase widgets named after the design-skill component, e.g. AppButton

### Code
- Prefer small, pure functions and explicit types at module boundaries. _(Easier to test, review and change.)_
- No business logic or HTTP calls in build methods; screens watch providers, providers call repositories. _(Logic becomes testable without pumping widgets.)_

### Components
- Components read design tokens; no raw hex values, pixel sizes or font names in component code. _(One token change restyles the product.)_
- Widgets in lib/ui are stateless, take data and callbacks only, and read colours, spacing and type from the theme extension. _(Components stay reusable and restyle from one token change.)_

### Data
- Analytics events are object_action in snake_case and come from the experience skill’s measures. _(Names stay consistent across teams and tools.)_

### Errors
- Every async action has loading, empty, error and success states, matching the experience skill. _(Unhandled states are where users get stuck.)_
- Every async screen renders AsyncValue with when(data:, loading:, error:), and the error branch offers a retry. _(The compiler forces each state to be handled.)_

### Security
- Secrets never live in the repository; read them from the environment or a secret store. _(A leaked key outlives the commit that removed it.)_
- Validate every input on the server, even when the client already did. _(Clients can be bypassed.)_
- Web pages ship a Content-Security-Policy, HSTS, X-Frame-Options and nosniff. _(Cheap protection against the most common attacks.)_
- Credentials go in flutter_secure_storage; --dart-define carries only non-secret config such as the API base URL. _(Values compiled into the app can be extracted from the binary.)_

### Performance
- Use const constructors wherever possible and ListView.builder for long lists; profile in profile mode, never debug. _(Avoids needless rebuilds and keeps 60fps scroll on mid-range phones.)_

### Accessibility
- Use native elements first; add ARIA only when no native element fits. _(Native controls bring keyboard and screen-reader support for free.)_
- Icon-only buttons have a tooltip or Semantics label; text scales with the system setting without clipping up to 200%. _(Flutter draws its own UI, so semantics must be given explicitly.)_

## Design and journeys
When a Celestial design skill is in use, write its tokens as Flutter ThemeData in `lib/theme/tokens.dart`, and build its components in `lib/ui` with the same names and variants. Components read tokens only — no raw colours, sizes or font names.

When a Celestial experience skill is in use, give each journey one end-to-end test (happy path plus its error and empty states) and name analytics events `object_action` from its measures.

## Testing and checks (must pass before a pull request)
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Lint and types | dart format + flutter analyze (strict lint set) | 0 errors, warnings or infos; formatting unchanged | Every pull request |
| Unit and component tests | The stack’s test runner | All pass; every design-skill component state covered | Every pull request |
| Journey tests | End-to-end runner | One test per experience-skill journey: happy path + error state | Every pull request |
| Accessibility | flutter_test accessibility guidelines (labeled tap targets, tap target size, text contrast) | All guidelines pass for every screen in the journey tests; WCAG 2.2 AA | Every pull request |
| Performance budget | Lab measurement in CI | Web: LCP ≤ 2.5s · INP ≤ 200ms · CLS ≤ 0.1 · ≤ 170KB JS per route. Mobile: cold start ≤ 2s · 60fps scroll | Every pull request |
| Dependency and secret scan | Dependency audit + secret scanner | No high or critical findings; no secrets | Every pull request and nightly |
| Golden tests | flutter_test matchesGoldenFile | Every design-skill component state has light and dark goldens; 0 unexpected diffs | Every pull request |

## Pull requests
- Branching: Trunk-based: short-lived branches off main, squash-merged within two days.

**Review checklist**
- Correctness: does it do what the issue asks, including edge cases?
- Readability: could a new teammate change it safely?
- Architecture: is it in the right place, with the right boundaries?
- Security: inputs, secrets, permissions, dependencies
- Performance: budgets, queries, bundle size
- Tests fail when the code is broken (flip a condition and re-run)
- One approving review; two for auth, payments or new platform plugins
- Golden diffs are reviewed as images, not approved in bulk

**Definition of done**
- Acceptance criteria met and demoed on the preview link
- Tests added for new behaviour and every state
- Accessibility and performance gates green
- Analytics events named from the experience skill
- Docs or changelog updated when behaviour changes
- Checked on iOS and Android at the largest system text size

**Release**
- Small pull requests (aim for under 400 changed lines)
- CI green before review
- Squash-merge to main; main is always deployable
- Every release has a written rollback path
- Builds from main go to internal test tracks; store release every two weeks with staged rollout
- Flutter SDK upgrades land in their own pull request with refreshed goldens

**Incidents**
- Halt the staged rollout and promote the previous build; ship a hotfix from main
- Write a blameless note within 48 hours: what happened, impact, fix, prevention

_Generated from the Celestial engineering skill “Flutter app” (engineering core v1.0, checked 2026-10-26)._
