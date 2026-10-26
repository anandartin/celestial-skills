# AGENTS.md — Accessibility audit

Combine automated scans with hands-on keyboard and screen-reader passes, so a UI meets WCAG 2.2 AA for the people who actually use assistive technology.

## How to do it
1. **Pick the journeys to audit** — List the screens and states that make up the key tasks (sign in, search, checkout, form submit, error and empty states). Audit states, not just pages: open menus, dialogs, validation errors and loading.
2. **Run automated checks** — Run axe (or the platform's audit tool) on every listed state, in light and dark themes. Fix all violations; treat 'needs review' items as inputs to the manual passes.
3. **Keyboard-only pass** — Unplug the mouse. Tab through each journey: every interactive element is reachable, focus order follows the visual order, focus is always visible and not hidden behind sticky headers, dialogs trap focus and return it on close, and nothing traps focus permanently.
4. **Screen-reader pass** — Complete each journey with at least one screen reader (VoiceOver on macOS or iOS, NVDA on Windows, TalkBack on Android). Check that headings form an outline, controls announce name, role and state, images have useful text or are hidden, and errors and status changes are announced.
5. **Visual and zoom pass** — Check text contrast at 4.5:1 (3:1 for large text and UI component edges), zoom to 200% and reflow at 320px width without horizontal scrolling or lost content, and confirm information is not conveyed by colour alone.
6. **Target size and motion** — Confirm pointer targets are at least 24 by 24 CSS pixels or have equivalent spacing, dragging actions have a single-pointer alternative, and animation respects reduced-motion preferences.
7. **Log findings against success criteria** — Record each issue with the screen, steps to reproduce, the WCAG 2.2 criterion number, the user impact and a proposed fix. Severity: blocker (task cannot be completed), major, minor.
8. **Fix and add regression tests** — Fix blockers before release. Add automated assertions (axe in component and end-to-end tests, focus-order checks) so fixed issues stay fixed.

## Checklist (before a pull request)
- [ ] Automated scan shows zero violations on every audited state in both themes
- [ ] Every journey completes with keyboard only and visible focus throughout
- [ ] Every journey completes with at least one screen reader
- [ ] Text and UI contrast meet AA ratios
- [ ] Content reflows at 320px width and 200% zoom without loss
- [ ] Form errors are announced and linked to their fields
- [ ] All blocker and major findings are fixed or have a dated plan

## Rules
- Use native HTML elements and platform controls before reaching for ARIA roles. _(Native controls carry correct keyboard and assistive-technology behaviour without extra code.)_
- Every input has a programmatic label, and every error message is associated with its field and announced. _(Placeholder-only fields and silent errors are the most common blockers in forms.)_
- Never remove focus outlines without a visible replacement that meets contrast. _(Keyboard users cannot tell where they are without it.)_
- Move focus deliberately on route changes and when dialogs open or close. _(Single-page apps otherwise leave screen-reader users stranded on stale content.)_
- Bake accessible behaviour into shared components so every screen inherits it. _(Fixing a component once is cheaper than fixing every page that uses it.)_

## Checks
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Accessibility | axe in component and end-to-end tests, plus a manual keyboard and screen-reader pass on changed journeys | WCAG 2.2 AA · zero automated violations · manual pass recorded for every changed journey | Every pull request (automated); every release (manual) |

_Generated from the Celestial engineering practice “Accessibility audit”._
