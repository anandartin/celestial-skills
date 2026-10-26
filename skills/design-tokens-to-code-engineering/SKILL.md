---
name: design-tokens-to-code-engineering
description: "Engineering practice: Design tokens to code — Generate platform code from one token source, build components that only read tokens and guard them with visual regression, so a brand change ships in one commit. Use in any language or framework whenever this practice applies, and when reviewing work that should follow it."
type: engineering
stack: practice
core: "1.0"
checked: 2026-10-26
---

# Design tokens to code

Generate platform code from one token source, build components that only read tokens and guard them with visual regression, so a brand change ships in one commit.

Use this when implementing a design skill or design system in a codebase, adding a theme, or cleaning up hard-coded styles. It prevents drift between design and code, one-off colours and sizes scattered through components, broken dark mode and unnoticed visual regressions.

## How to do it
1. **Collect tokens into one source** — Put colour, type, spacing, radius, shadow, motion and breakpoint values in a single version-controlled JSON source (the design skill or a tokens file in the W3C draft format). Each token has a name, value, type and description.
2. **Layer primitives and semantic tokens** — Keep raw primitives (blue-600, space-4) separate from semantic tokens that describe purpose (color-action-primary, color-text-muted, space-inset-md). Components use only semantic tokens; themes remap semantic tokens to different primitives.
3. **Generate platform outputs** — Use a token build tool such as Style Dictionary to emit CSS custom properties, a Tailwind theme, SwiftUI or Compose constants from the same source. Generated files are build output with a do-not-edit header; never hand-edit them.
4. **Build components that read tokens** — Write each component against semantic tokens only, with every state (default, hover, focus, active, disabled, error, loading) defined. Expose variants as props, not as style overrides.
5. **Wire themes** — Implement light and dark (and any brand themes) by swapping the semantic layer, for example with a data-theme attribute or a platform colour scheme. Check contrast for every text and UI pair in every theme.
6. **Document components with stories** — Write a story or preview for every component state and theme in a component workshop such as Storybook, so design can review the real code.
7. **Add visual regression tests** — Snapshot every story in each theme at fixed viewport sizes and compare on each pull request. Review diffs as part of code review and approve intentional changes explicitly.
8. **Block raw values** — Add lint rules that fail on raw hex colours, pixel sizes and font names in component code, with an allow-list for the generated token files.

## Checklist
- [ ] All tokens come from one versioned source file
- [ ] Generated outputs are rebuilt in CI and not edited by hand
- [ ] Components reference semantic tokens only
- [ ] Every component state has a story in each theme
- [ ] Light and dark themes pass contrast checks for every text pair
- [ ] Visual regression runs on every pull request with no unapproved diffs
- [ ] Lint rejects raw colour, size and font values in components

## Rules
- Components read semantic tokens; primitives are referenced only by the theme layer. _(Themes can then change without touching any component.)_
- Token names describe purpose, not appearance (color-feedback-danger, not red). _(Appearance names become lies the first time the brand changes.)_
- Generated token files are build output; change the source and regenerate. _(Hand edits are overwritten and leave design and code disagreeing.)_
- Every semantic text and background pairing is contrast-checked in each theme as part of the token build. _(A token swap can silently break contrast across hundreds of screens.)_
- Ship tokens as CSS custom properties or compile-time constants, not runtime JavaScript lookups. _(Runtime theming in script adds work to every render.)_

## Do
- Version the token package and record changes in a changelog
- Keep focus ring, disabled and error states as tokens too
- Pair with design on naming before generating code

## Don't
- Do not let components accept arbitrary style overrides that bypass tokens
- Do not keep dark mode as a separate set of component styles
- Do not approve visual diffs in bulk without looking at them

## Quality gates
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Visual regression | Snapshot comparison of component stories (for example Playwright screenshots or a Storybook test runner) | No unapproved pixel diffs in any theme | Every pull request touching tokens or components |
| No raw style values | Stylelint or ESLint rule for hex, px and font-family literals | 0 violations outside generated token files | Every pull request |

## Workflow
**Review**
- Designer reviews visual diffs for token changes
- Reviewer checks new components for raw values and missing states

**Definition of done**
- Stories cover every state in every theme
- Token package version bumped and changelog updated

## Examples
### Component reading semantic tokens (`src/components/Button.css`)

```css
:root {
  --color-action-primary: var(--blue-600);
  --color-on-action: var(--white);
}
[data-theme='dark'] {
  --color-action-primary: var(--blue-400);
  --color-on-action: var(--grey-950);
}
.button {
  background: var(--color-action-primary);
  color: var(--color-on-action);
  padding: var(--space-inset-sm) var(--space-inset-md);
  border-radius: var(--radius-control);
  font: var(--type-label-md);
}
.button:focus-visible {
  outline: var(--focus-ring-width) solid var(--color-focus-ring);
  outline-offset: var(--focus-ring-offset);
}
```

## Further reading
- [Style Dictionary](https://styledictionary.com/) — Building platform outputs from one token source.
- [Storybook documentation](https://storybook.js.org/docs) — Writing stories for every component state and running tests against them.
- [anthropics/skills](https://github.com/anthropics/skills) — The public skill format, including design and brand skills that agents apply to code.
- [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) — Engineering skills for coding agents covering front-end implementation.

_Written for Celestial; the sources above inspired it._
