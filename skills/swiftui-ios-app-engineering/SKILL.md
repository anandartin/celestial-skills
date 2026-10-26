---
name: swiftui-ios-app-engineering
description: "Engineering skill: SwiftUI iOS app — how to build and ship a ios app with SwiftUI, Swift, Color and Font extensions + asset catalogue, Swift Testing. Use when writing, reviewing, testing or releasing code in this stack, and when turning a Celestial design or experience skill into code."
type: engineering
stack: mobile-ios
core: "1.0"
checked: 2026-10-25
---

# SwiftUI iOS app

A native iPhone app with declarative UI, async networking, Dynamic Type everywhere and UI tests for each journey.

For native iOS products. Views are SwiftUI; business logic lives in observable models that are easy to test. Design-skill tokens become Color and Font extensions with light and dark variants in the asset catalogue.

## Stack
- **Language:** Swift 6 — Strict concurrency checking catches data races at compile time.
- **Framework:** SwiftUI iOS 17+ — Declarative views that map onto design-skill components.
- **Styling:** Color and Font extensions + asset catalogue — Tokens with light and dark variants in one place.
- **State:** Observation (@Observable models) — Simple, testable view models.
- **Data:** URLSession with async/await + Codable — No third-party networking needed.
- **Build:** Xcode + Swift Package Manager 16+ — First-party toolchain and dependency management.
- **Hosting:** TestFlight → App Store — Beta testers before every release.
- **Package manager:** Swift Package Manager — Built into Xcode.
- **Testing:** Swift Testing — Readable unit tests for models.
- **Testing:** XCUITest — One UI test per journey, plus accessibility audits.

## Commands
- dev: `xcodebuild -scheme App -destination "platform=iOS Simulator,name=iPhone 16" build`
- lint: `swiftlint --strict`
- test: `xcodebuild test -scheme App -destination "platform=iOS Simulator,name=iPhone 16"`
- build: `xcodebuild archive -scheme App`
- install: `open App.xcodeproj (packages resolve automatically)`

## Structure
- `App/` — App entry, navigation and dependency setup
- `Features/<Journey>/` — Views + model for one experience-skill journey
- `DesignSystem/` — Tokens (Color, Font, Spacing) and design-skill components
- `Core/` — Networking, persistence, analytics
- `Tests/` — Unit tests per model
- `UITests/` — One test per journey

## Naming
- Files: PascalCase.swift, one type per file
- Tests: <Type>Tests.swift; <Journey>UITests.swift
- Branches: type/short-description
- Components: PascalCase views named after the design-skill component

## From design and experience skills
When a Celestial design skill is in use, write its tokens as SwiftUI Color and Font extensions in `DesignSystem/Tokens.swift`, and build its components in `DesignSystem/Components` with the same names and variants. Components read tokens only — no raw colours, sizes or font names.

When a Celestial experience skill is in use, give each journey one end-to-end test (happy path plus its error and empty states) and name analytics events `object_action` from its measures.

## Conventions
### Code
- Prefer small, pure functions and explicit types at module boundaries. _(Easier to test, review and change.)_
- Views hold no business logic; models are @Observable and @MainActor. _(Logic stays unit-testable.)_

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
- No work on the main thread during scroll; images are downsampled. _(Keeps 60fps scrolling.)_

### Accessibility
- Use native elements first; add ARIA only when no native element fits. _(Native controls bring keyboard and screen-reader support for free.)_
- Every text style scales with Dynamic Type up to accessibility sizes; layouts reflow, never truncate key actions. _(Large text is common and required.)_
- Tap targets are at least 44×44pt; icons-only buttons have accessibility labels. _(Platform guidelines and the core’s 44px rule.)_

## Do
- Preview every component in light, dark and the largest text size
- Use system materials and SF Symbols where the design skill allows
- Run the UI test accessibility audit in each journey test

## Don't
- Hard-code colours or point sizes in views
- Block launch on network calls
- Ship without testing on the smallest supported screen

## Quality gates
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Lint and types | The stack’s linter and type checker | 0 errors | Every pull request |
| Unit and component tests | The stack’s test runner | All pass; every design-skill component state covered | Every pull request |
| Journey tests | End-to-end runner | One test per experience-skill journey: happy path + error state | Every pull request |
| Accessibility | XCUITest performAccessibilityAudit() | No audit issues on any journey screen | Every pull request |
| Performance budget | XCTest metrics | Cold start ≤ 2s on the oldest supported device · 60fps scroll | Every pull request |
| Dependency and secret scan | Dependency audit + secret scanner | No high or critical findings; no secrets | Every pull request and nightly |
| Preview deploy | Hosting preview environment | A working preview link on the pull request | Every pull request |

## Workflow
- Branching: Short-lived branches; release branches cut for each App Store submission.

**Review checklist**
- Correctness: does it do what the issue asks, including edge cases?
- Readability: could a new teammate change it safely?
- Architecture: is it in the right place, with the right boundaries?
- Security: inputs, secrets, permissions, dependencies
- Performance: budgets, queries, bundle size
- Tests fail when the code is broken (flip a condition and re-run)
- Reviewer checks screenshots in light, dark and largest text size

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
- TestFlight build on every merge to main
- Phased release over 7 days; pause if crash-free sessions drop below 99.5%

**Incidents**
- Halt the phased release; hotfix branch from the release tag
- Server-side flags to switch off a broken feature without a new build

## Examples
### Tokens (`DesignSystem/Tokens.swift`)

```swift
import SwiftUI

extension Color {
  static let brandPrimary = Color("Primary")   // light + dark in the asset catalogue
  static let ink = Color("Ink")
  static let surface = Color("Surface")
}

enum Radius { static let control: CGFloat = 8; static let card: CGFloat = 14 }
enum ControlHeight { static let standard: CGFloat = 44 }
```
