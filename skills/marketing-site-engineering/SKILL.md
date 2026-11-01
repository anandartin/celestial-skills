---
name: marketing-site-engineering
description: "Engineering skill: Server-rendered marketing site — how to build and ship a marketing site with Astro, TypeScript, CSS with custom properties, Vitest. Use when writing, reviewing, testing or releasing code in this stack, and when turning a Celestial design or experience skill into code."
type: engineering
stack: marketing-site
core: "1.0"
checked: 2026-10-25
---

# Server-rendered marketing site

Content pages that load fast on a slow phone: rendered on the server, almost no JavaScript, and strict performance gates.

For landing pages, docs and blogs. Pages are rendered to HTML at build or request time; interactive islands load only where needed. Design-skill tokens become plain CSS variables.

## Stack
- **Language:** TypeScript ^5.6 — Typed content collections and components.
- **Framework:** Astro ^5 — HTML-first rendering with opt-in interactive islands.
- **Styling:** CSS with custom properties — Tokens map directly; nothing to compile.
- **State:** None by default — Content pages rarely need client state.
- **Data:** Markdown/MDX content collections — Writers edit content without touching components.
- **Build:** Astro build — Static output with optional server routes.
- **Hosting:** Edge static hosting with preview deploys — Fast first byte worldwide.
- **Package manager:** pnpm ^9 — Fast, strict installs.
- **Testing:** Vitest ^3 — Component and content-schema tests.
- **Testing:** Playwright ^1.48 — Smoke tests for every template plus the accessibility audit.
- **Testing:** Lighthouse CI ^0.14 — Performance and SEO budgets on every pull request.

## Commands
- dev: `pnpm dev`
- e2e: `pnpm test:e2e`
- lint: `pnpm lint && pnpm check`
- test: `pnpm test`
- build: `pnpm build`
- install: `pnpm install`

## Structure
- `src/pages/` — One file per route
- `src/layouts/` — Page shells: marketing, article, docs
- `src/components/` — Design-skill components as server components
- `src/content/` — Markdown content collections with typed frontmatter
- `src/styles/tokens.css` — CSS variables from the design skill, light and dark
- `public/` — Static assets, fonts and _headers

## Naming
- Files: kebab-case
- Tests: tests/<template>.spec.ts
- Branches: type/short-description
- Components: PascalCase.astro

## From design and experience skills
When a Celestial design skill is in use, write its tokens as CSS custom properties in `src/styles/tokens.css`, and build its components in `src/components` with the same names and variants. Components read tokens only — no raw colours, sizes or font names.

When a Celestial experience skill is in use, give each journey one end-to-end test (happy path plus its error and empty states) and name analytics events `object_action` from its measures.

## Conventions
### Code
- Prefer small, pure functions and explicit types at module boundaries. _(Easier to test, review and change.)_

### Components
- Components read design tokens; no raw hex values, pixel sizes or font names in component code. _(One token change restyles the product.)_

### Data
- Analytics events are object_action in snake_case and come from the experience skill’s measures. _(Names stay consistent across teams and tools.)_
- Every page sets a unique title, description and canonical URL from frontmatter. _(Search and sharing previews stay correct.)_

### Errors
- Every async action has loading, empty, error and success states, matching the experience skill. _(Unhandled states are where users get stuck.)_

### Security
- Secrets never live in the repository; read them from the environment or a secret store. _(A leaked key outlives the commit that removed it.)_
- Validate every input on the server, even when the client already did. _(Clients can be bypassed.)_
- Web pages ship a Content-Security-Policy, HSTS, X-Frame-Options and nosniff. _(Cheap protection against the most common attacks.)_

### Performance
- Ship zero JavaScript by default; every island needs a reason in the pull request. _(Content pages are judged on first load.)_
- Self-host fonts with font-display: swap and preload the one used above the fold. _(Avoids invisible text and layout shift.)_

### Accessibility
- Use native elements first; add ARIA only when no native element fits. _(Native controls bring keyboard and screen-reader support for free.)_
- One h1 per page; headings never skip a level. _(Screen-reader users navigate by headings.)_

## Do
- Use responsive images with explicit width and height
- Keep copy in content files, not components
- Test every template at 390px and 1280px

## Don't
- Add a client-side framework for a single carousel
- Load analytics before the page is interactive
- Hard-code colours outside tokens.css

## Quality gates
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Lint and types | The stack’s linter and type checker | 0 errors | Every pull request |
| Unit and component tests | The stack’s test runner | All pass; every design-skill component state covered | Every pull request |
| Journey tests | End-to-end runner | One test per experience-skill journey: happy path + error state | Every pull request |
| Accessibility | Automated audit (axe on web, platform audit on mobile) | WCAG 2.2 AA · no new violations | Every pull request |
| Performance budget | Lighthouse CI | Performance ≥ 95 · LCP ≤ 2.0s · CLS ≤ 0.05 · ≤ 50KB JS per page | Every pull request |
| Dependency and secret scan | Dependency audit + secret scanner | No high or critical findings; no secrets | Every pull request and nightly |
| Preview deploy | Hosting preview environment | A working preview link on the pull request | Every pull request |
| SEO and links | Lighthouse SEO + link checker | SEO ≥ 95 · no broken links | Every pull request |

The Accessibility gate checks Celestial accessibility core v1.0 (WCAG 2.2 AA); it can change tool but is never skipped. Automated: A11Y-C1, A11Y-F1, A11Y-I1, A11Y-N1, A11Y-N2, A11Y-S1, A11Y-L2, A11Y-P1 (partly). Manual pass before release: A11Y-K1, A11Y-G1, A11Y-R1, A11Y-M1, A11Y-O1, A11Y-V1, A11Y-E1, A11Y-U1, A11Y-L1 — keyboard-only run, screen reader on each journey step, 200% zoom and 320px width, reduced motion, captions on any media. Requirement IDs come from the design and experience skills this code builds. This layer owns: **A11Y-F1** A visible focus indicator on every interactive element, never hidden behind sticky bars (WCAG 2.4.7, 2.4.11); **A11Y-R1** Text works at 200% zoom, at 320px width, with increased text spacing and in either orientation (WCAG 1.4.4, 1.4.10, 1.4.12, 1.3.4); **A11Y-M1** Motion respects the reduced-motion setting; anything moving for over 5 seconds can be paused; nothing flashes more than 3 times a second (WCAG 2.2.2, 2.3.1, 2.3.3 (AAA, advised)); **A11Y-O1** Tooltips and pop-overs shown on hover or focus can be dismissed, hovered and stay until dismissed (WCAG 1.4.13); **A11Y-I1** Images, icons and charts have text alternatives (empty for decoration); text is never an image (WCAG 1.1.1, 1.4.5); **A11Y-V1** Video and audio have captions, transcripts or audio description; nothing plays sound automatically for over 3 seconds (WCAG 1.2.1, 1.2.2, 1.2.3, 1.2.4, 1.2.5, 1.4.2); **A11Y-K1** Every action works by keyboard in a logical order, with no keyboard traps; single-key shortcuts can be turned off or remapped (WCAG 2.1.1, 2.1.2, 2.1.4, 2.4.3); **A11Y-G1** Nothing is drag-, gesture- or motion-only: each has a single tap or click alternative, and actions fire on release so they can be cancelled (WCAG 2.5.1, 2.5.2, 2.5.4, 2.5.7); **A11Y-N1** Every page has a clear title, headings, landmarks and a skip link, and can be found more than one way (WCAG 2.4.1, 2.4.2, 2.4.5, 2.4.6); **A11Y-N2** Controls have visible labels and instructions; links say where they go; the accessible name contains the visible label (WCAG 2.4.4, 2.5.3, 3.3.2); **A11Y-S1** Status, results and errors are announced to screen readers (WCAG 4.1.3); **A11Y-E2** Never ask for the same information twice in one flow; personal fields declare their purpose so they can be autofilled (WCAG 3.3.7, 1.3.5); **A11Y-U1** Focusing or changing a field never moves the person somewhere else or submits without warning (WCAG 3.2.1, 3.2.2); **A11Y-W1** Time limits warn first and can be extended (WCAG 2.2.1); **A11Y-L2** The page language, and any passage in another language, is declared in code (WCAG 3.1.1, 3.1.2); **A11Y-P1** Structure, order, names, roles and states are in the code: native elements first, ARIA only following the WAI-ARIA patterns (WCAG 1.3.1, 1.3.2, 4.1.2).

## Workflow
- Branching: Trunk-based; content edits can merge with one review from the content owner.

**Review checklist**
- Correctness: does it do what the issue asks, including edge cases?
- Readability: could a new teammate change it safely?
- Architecture: is it in the right place, with the right boundaries?
- Security: inputs, secrets, permissions, dependencies
- Performance: budgets, queries, bundle size
- Tests fail when the code is broken (flip a condition and re-run)
- Check the preview on a phone before approving
- Content changes reviewed for voice against the design skill

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
- Merge deploys; scheduled content publishes by date in frontmatter

**Incidents**
- Redeploy the previous build; content rollbacks via git revert

## Overrides of the engineering core
- Performance budget: ≤ 50KB JS per page, Performance ≥ 95 — Marketing pages are mostly content; the core’s 170KB is for apps.

## Examples
### Tokens as CSS variables (`src/styles/tokens.css`)

```css
:root {
  --color-bg: #ffffff;
  --color-ink: #111111;
  --color-primary: #2b3fd6;
  --radius-control: 8px;
  --control-height: 40px;
  --font-display: 'Display', system-ui, sans-serif;
}
@media (prefers-color-scheme: dark) {
  :root { --color-bg: #0b0b0f; --color-ink: #f4f4f6; }
}
```
