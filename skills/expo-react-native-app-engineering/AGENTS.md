# AGENTS.md — Expo React Native app

One TypeScript codebase for iOS and Android on React Native and Expo, with file-based navigation, cloud builds and over-the-air fixes for JavaScript changes.

## Setup and commands
- dev: `pnpm expo start`
- e2e: `maestro test .maestro/`
- lint: `pnpm expo lint && pnpm typecheck`
- test: `pnpm test`
- build: `eas build --profile production --platform all`
- deploy: `eas submit --profile production --platform all`
- install: `pnpm install`

## Project structure
- `app/` — Expo Router routes: _layout.tsx, (tabs)/, [id].tsx; screens stay thin
- `src/components/` — Design-skill components, one folder each with component and test
- `src/features/<feature>/` — Hooks, API calls and screen logic for one journey
- `src/theme/tokens.ts` — Generated light and dark token objects; never edited by hand
- `src/lib/` — API client, secure storage wrapper, analytics
- `.maestro/` — One flow per experience-skill journey
- `app.config.ts + eas.json` — App identity, runtime version, build profiles and update channels

## Code style
- Files: kebab-case.ts; components PascalCase.tsx; routes follow Expo Router conventions
- Tests: *.test.tsx beside the file; .maestro/<journey-id>.yaml
- Branches: type/short-description, e.g. feat/offline-drafts
- Components: PascalCase, named after the design-skill component

### Code
- Prefer small, pure functions and explicit types at module boundaries. _(Easier to test, review and change.)_
- Add native packages with npx expo install, and bump runtimeVersion whenever native code or config changes. _(Mismatched versions crash at launch; an update must never reach a binary it is not built for.)_

### Components
- Components read design tokens; no raw hex values, pixel sizes or font names in component code. _(One token change restyles the product.)_
- Platform differences live inside components (Platform.select or .ios.tsx/.android.tsx), not in screens. _(Screens stay readable and both platforms get the same behaviour by default.)_

### Data
- Analytics events are object_action in snake_case and come from the experience skill’s measures. _(Names stay consistent across teams and tools.)_

### Errors
- Every async action has loading, empty, error and success states, matching the experience skill. _(Unhandled states are where users get stuck.)_
- Each screen handles offline as its own state, with cached data shown and a retry; the root layout has an error boundary. _(Phones lose signal mid-journey; a blank screen loses the user.)_

### Security
- Secrets never live in the repository; read them from the environment or a secret store. _(A leaked key outlives the commit that removed it.)_
- Validate every input on the server, even when the client already did. _(Clients can be bypassed.)_
- Web pages ship a Content-Security-Policy, HSTS, X-Frame-Options and nosniff. _(Cheap protection against the most common attacks.)_
- Store tokens and personal data with expo-secure-store; never in AsyncStorage, logs or EXPO_PUBLIC_ variables. _(Anything in the bundle or plain storage can be read from a device or the app binary.)_

### Performance
- Render lists of unknown length with FlatList or FlashList and stable keys; never map an array inside a ScrollView. _(Virtualised lists hold the 60fps scroll target on low-end Android phones.)_

### Accessibility
- Use native elements first; add ARIA only when no native element fits. _(Native controls bring keyboard and screen-reader support for free.)_
- Every Pressable sets accessibilityRole and an accessibilityLabel when it has no visible text; touch targets are at least 44×44 points (use hitSlop when the visual is smaller). _(VoiceOver and TalkBack read roles and labels; small targets fail on both platforms.)_

## Design and journeys
When a Celestial design skill is in use, write its tokens as Style Dictionary tokens in `src/theme/tokens.ts`, and build its components in `src/components` with the same names and variants. Components read tokens only — no raw colours, sizes or font names.

When a Celestial experience skill is in use, give each journey one end-to-end test (happy path plus its error and empty states) and name analytics events `object_action` from its measures.

## Testing and checks (must pass before a pull request)
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Lint and types | The stack’s linter and type checker | 0 errors | Every pull request |
| Unit and component tests | The stack’s test runner | All pass; every design-skill component state covered | Every pull request |
| Journey tests | Maestro on iOS simulator and Android emulator | One flow per experience-skill journey: happy path + error state, passing on both platforms | Every pull request |
| Accessibility | RNTL role queries + platform accessibility inspectors | Every interactive element has a role and label; WCAG 2.2 AA contrast from tokens; no new inspector warnings | Every pull request (inspectors before each store release) |
| Performance budget | Lab measurement in CI | Web: LCP ≤ 2.5s · INP ≤ 200ms · CLS ≤ 0.1 · ≤ 170KB JS per route. Mobile: cold start ≤ 2s · 60fps scroll | Every pull request |
| Dependency and secret scan | Dependency audit + secret scanner | No high or critical findings; no secrets | Every pull request and nightly |

## Pull requests
- Branching: Trunk-based: short-lived branches off main, squash-merged within two days.

**Review checklist**
- Correctness: does it do what the issue asks, including edge cases?
- Readability: could a new teammate change it safely?
- Architecture: is it in the right place, with the right boundaries?
- Security: inputs, secrets, permissions, dependencies
- Performance: budgets, queries, bundle size
- Tests fail when the code is broken (flip a condition and re-run)
- One approving review; two for auth, payments or native dependency changes
- Reviewer installs the internal preview build or opens the update on a device

**Definition of done**
- Acceptance criteria met and demoed on the preview link
- Tests added for new behaviour and every state
- Accessibility and performance gates green
- Analytics events named from the experience skill
- Docs or changelog updated when behaviour changes
- Checked on iOS and Android, in light and dark mode, at the largest system font size

**Release**
- Small pull requests (aim for under 400 changed lines)
- CI green before review
- Squash-merge to main; main is always deployable
- Every release has a written rollback path
- Store release every two weeks from main; phased rollout starting at 10%
- JavaScript-only fixes go out through EAS Update to the matching runtime version

**Incidents**
- Republish the previous update to the channel to roll back JavaScript; halt the phased rollout for native issues
- Write a blameless note within 48 hours: what happened, impact, fix, prevention

_Generated from the Celestial engineering skill “Expo React Native app” (engineering core v1.0, checked 2026-10-26)._
