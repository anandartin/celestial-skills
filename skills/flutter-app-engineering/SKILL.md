---
name: flutter-app-engineering
description: "Engineering skill: Flutter app — how to build and ship a cross-platform app with Flutter, Dart, ThemeData + a generated ThemeExtension for design tokens, flutter_test. Use when writing, reviewing, testing or releasing code in this stack, and when turning a Celestial design or experience skill into code."
type: engineering
stack: cross-platform
core: "1.0"
checked: 2026-10-26
---

# Flutter app

One Dart codebase drawn by Flutter on iOS and Android, with tokens as a theme extension, Riverpod for state and golden tests guarding every component.

For apps that want identical, custom-branded UI on both phones: fintech, health, retail and media apps. Flutter draws every pixel itself, so the design skill maps directly onto widgets; signed builds come out of CI and ship to both stores. Design-skill tokens become a ThemeExtension generated into Dart.

## Stack
- **Language:** Dart ^3.9 — Sound null safety, records and pattern matching keep state handling explicit.
- **Framework:** Flutter 3.35+ — One rendering engine and widget set for both platforms.
- **Styling:** ThemeData + a generated ThemeExtension for design tokens — Widgets read Theme.of(context); light and dark come from one token source.
- **State:** Riverpod with code generation ^3 — Testable providers, AsyncValue for loading and error, and no BuildContext needed for logic.
- **Data:** Dio client + freezed / json_serializable models; flutter_secure_storage for credentials Dio ^5 — Immutable typed models and a single place for interceptors and retries.
- **Build:** flutter build (appbundle and ipa) in CI 3.35+ — Signed release artefacts from the same pinned Flutter version every time.
- **Hosting:** App Store and Google Play, uploaded from CI to test tracks first — Testers get each build before a staged store rollout.
- **Package manager:** pub (with a version manager pinning Flutter per project) — Every machine and CI job builds with the same SDK.
- **Testing:** flutter_test (unit, widget and golden tests) bundled with Flutter — Fast widget tests and pixel comparisons for each component state.
- **Testing:** integration_test bundled with Flutter — Journey tests on real simulators and emulators.
- **Testing:** mocktail ^1 — Mocks without code generation for repositories and clients.

## Commands
- dev: `flutter run`
- e2e: `flutter test integration_test`
- lint: `dart format --output=none --set-exit-if-changed . && flutter analyze`
- test: `flutter test`
- build: `flutter build appbundle --release && flutter build ipa --release`
- install: `flutter pub get`

## Structure
- `lib/main.dart + lib/app.dart` — Entry point, ProviderScope, router and theme setup
- `lib/features/<feature>/` — presentation/ (screens, widgets), application/ (providers), data/ (repository, DTOs)
- `lib/ui/` — Design-skill components as stateless widgets reading the theme
- `lib/theme/tokens.dart` — Generated ThemeExtension with light and dark token values
- `lib/core/` — HTTP client, secure storage, routing (go_router), analytics
- `test/` — Unit, widget and golden tests mirroring lib/
- `integration_test/` — One test per experience-skill journey

## Naming
- Files: snake_case.dart
- Tests: <file>_test.dart mirroring lib/; goldens in test/goldens/<component>_<state>_<theme>.png
- Branches: type/short-description, e.g. feat/card-freeze
- Components: UpperCamelCase widgets named after the design-skill component, e.g. AppButton

## From design and experience skills
When a Celestial design skill is in use, write its tokens as Flutter ThemeData in `lib/theme/tokens.dart`, and build its components in `lib/ui` with the same names and variants. Components read tokens only — no raw colours, sizes or font names.

When a Celestial experience skill is in use, give each journey one end-to-end test (happy path plus its error and empty states) and name analytics events `object_action` from its measures.

## Conventions
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

## Do
- Write a golden test for every component state in light and dark
- Keep DTOs in data/ and map them to domain models before they reach the UI
- Run the analyzer with a strict lint set and treat infos as errors in CI

## Don't
- Hard-code Colors or EdgeInsets values inside lib/ui
- Use setState for data shared between screens
- Leave Platform checks scattered through screens; wrap them in one adaptive widget

## Quality gates
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Lint and types | dart format + flutter analyze (strict lint set) | 0 errors, warnings or infos; formatting unchanged | Every pull request |
| Unit and component tests | The stack’s test runner | All pass; every design-skill component state covered | Every pull request |
| Journey tests | End-to-end runner | One test per experience-skill journey: happy path + error state | Every pull request |
| Accessibility | flutter_test accessibility guidelines (labeled tap targets, tap target size, text contrast) | All guidelines pass for every screen in the journey tests; WCAG 2.2 AA | Every pull request |
| Performance budget | Lab measurement in CI | Web: LCP ≤ 2.5s · INP ≤ 200ms · CLS ≤ 0.1 · ≤ 170KB JS per route. Mobile: cold start ≤ 2s · 60fps scroll | Every pull request |
| Dependency and secret scan | Dependency audit + secret scanner | No high or critical findings; no secrets | Every pull request and nightly |
| Golden tests | flutter_test matchesGoldenFile | Every design-skill component state has light and dark goldens; 0 unexpected diffs | Every pull request |

## Workflow
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

## Overrides of the engineering core
- Preview deploy: Replaced by an internal test-track build per merge to main — Mobile apps have no web link; testers install the build instead.
- Performance budget: Mobile thresholds apply: cold start ≤ 2s · 60fps scroll, measured in profile mode — Debug mode is much slower and misstates real performance.

## Examples
### Component reading the token extension (`lib/ui/app_button.dart`)

```dart
import 'package:flutter/material.dart';
import '../theme/tokens.dart';

class AppButton extends StatelessWidget {
  const AppButton({super.key, required this.label, required this.onPressed, this.primary = true});

  final String label;
  final VoidCallback? onPressed;
  final bool primary;

  @override
  Widget build(BuildContext context) {
    final t = Theme.of(context).extension<AppTokens>()!;
    return ConstrainedBox(
      constraints: BoxConstraints(minHeight: t.controlHeight, minWidth: 48),
      child: FilledButton(
        onPressed: onPressed,
        style: FilledButton.styleFrom(
          backgroundColor: primary ? t.primary : t.surface,
          foregroundColor: primary ? t.onPrimary : t.ink,
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(t.radiusControl)),
        ),
        child: Text(label, style: t.labelStyle),
      ),
    );
  }
}
```

## Further reading
- [Flutter documentation](https://docs.flutter.dev/) — Widgets, theming, testing (including goldens) and release builds.
- [Dart documentation](https://dart.dev/guides) — Language features, effective Dart style and the analyzer.
- [WCAG standards and guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) — The success criteria behind the accessibility gate.
