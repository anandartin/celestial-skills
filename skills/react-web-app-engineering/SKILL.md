---
name: react-web-app-engineering
description: "Engineering skill: React web app — how to build and ship a web app with React, TypeScript, Tailwind CSS, Vitest. Use when writing, reviewing, testing or releasing code in this stack, and when turning a Celestial design or experience skill into code."
type: engineering
stack: web-app
core: "1.0"
checked: 2026-10-25
---

# React web app

A single-page product app in TypeScript with utility-first styling, fast unit tests and real-browser journey tests.

For signed-in product apps: dashboards, editors, admin consoles. Client-rendered, talks to an API, deploys as static files. Design-skill tokens become a Tailwind theme backed by CSS variables, so light and dark mode switch without a rebuild.

## Stack
- **Language:** TypeScript ^5.6 — Types at every module boundary catch mistakes before review.
- **Framework:** React ^19 — Component model that maps one-to-one onto design-skill components.
- **Styling:** Tailwind CSS ^4 — Theme generated from design tokens; no hand-written colours in components.
- **State:** TanStack Query + local component state ^5 — Server state is cached and refetched; no global store until one is needed.
- **Data:** Typed fetch client generated from the API schema — Requests and responses stay in sync with the backend.
- **Build:** Vite ^6 — Instant dev server and small production bundles.
- **Hosting:** Static hosting with preview deploys — Every pull request gets a link.
- **Package manager:** pnpm ^9 — Fast, strict installs.
- **Testing:** Vitest ^3 — Fast unit and component tests that share the build config.
- **Testing:** Testing Library ^16 — Tests query by role and label, like users and assistive tech do.
- **Testing:** Playwright ^1.48 — Journey tests in real browsers, with the accessibility audit built in.

## Commands
- dev: `pnpm dev`
- e2e: `pnpm test:e2e`
- lint: `pnpm lint && pnpm typecheck`
- test: `pnpm test`
- build: `pnpm build`
- install: `pnpm install`

## Structure
- `src/app/` — Routes and layouts, one folder per route
- `src/components/` — Design-skill components (Button, Input, Card…) — one folder each with component, test and story
- `src/features/` — Feature slices: UI + hooks + API calls for one journey
- `src/lib/` — Framework-free helpers
- `src/styles/tokens.css` — CSS variables written from the design skill
- `tests/e2e/` — One Playwright spec per experience-skill journey

## Naming
- Files: kebab-case.ts; components PascalCase.tsx
- Tests: *.test.ts(x) beside the file; e2e/<journey-id>.spec.ts
- Branches: type/short-description, e.g. feat/checkout-address
- Components: PascalCase, named after the design-skill component

## From design and experience skills
When a Celestial design skill is in use, write its tokens as Tailwind theme in `src/styles/tokens.css`, and build its components in `src/components` with the same names and variants. Components read tokens only — no raw colours, sizes or font names.

When a Celestial experience skill is in use, give each journey one end-to-end test (happy path plus its error and empty states) and name analytics events `object_action` from its measures.

## Conventions
### Code
- Prefer small, pure functions and explicit types at module boundaries. _(Easier to test, review and change.)_

### Components
- Components read design tokens; no raw hex values, pixel sizes or font names in component code. _(One token change restyles the product.)_
- Every component accepts className last and forwards refs. _(Composable without wrapper divs.)_
- Variants come from a typed variant map, never boolean prop soup. _(Matches the design skill’s variants and keeps props readable.)_

### Data
- Analytics events are object_action in snake_case and come from the experience skill’s measures. _(Names stay consistent across teams and tools.)_
- Server state only through query hooks in src/features/*/api.ts. _(One place to cache, retry and invalidate.)_

### Errors
- Every async action has loading, empty, error and success states, matching the experience skill. _(Unhandled states are where users get stuck.)_

### Security
- Secrets never live in the repository; read them from the environment or a secret store. _(A leaked key outlives the commit that removed it.)_
- Validate every input on the server, even when the client already did. _(Clients can be bypassed.)_
- Web pages ship a Content-Security-Policy, HSTS, X-Frame-Options and nosniff. _(Cheap protection against the most common attacks.)_

### Performance
- Lazy-load each route; keep third-party scripts out of the first load. _(Holds the 170KB per-route budget.)_

### Accessibility
- Use native elements first; add ARIA only when no native element fits. _(Native controls bring keyboard and screen-reader support for free.)_
- Focus moves to the page heading on route change. _(Screen-reader users hear where they are.)_

## Do
- Read colours, radii and spacing from Tailwind theme keys generated from tokens
- Co-locate a component’s test and story with it
- Write the journey spec before the feature, from the experience skill’s steps

## Don't
- Add a global state library before two features need the same client state
- Use arbitrary Tailwind values like [#3b3be0] or [13px]
- Disable a lint rule without a comment explaining why

## Quality gates
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Lint and types | The stack’s linter and type checker | 0 errors | Every pull request |
| Unit and component tests | The stack’s test runner | All pass; every design-skill component state covered | Every pull request |
| Journey tests | End-to-end runner | One test per experience-skill journey: happy path + error state | Every pull request |
| Accessibility | Automated audit (axe on web, platform audit on mobile) | WCAG 2.2 AA · no new violations | Every pull request |
| Performance budget | Lighthouse CI + bundle analyzer | LCP ≤ 2.5s · INP ≤ 200ms · CLS ≤ 0.1 · ≤ 170KB JS per route | Every pull request |
| Dependency and secret scan | Dependency audit + secret scanner | No high or critical findings; no secrets | Every pull request and nightly |
| Preview deploy | Hosting preview environment | A working preview link on the pull request | Every pull request |

## Workflow
- Branching: Trunk-based: short-lived branches off main, squash-merged within two days.

**Review checklist**
- Correctness: does it do what the issue asks, including edge cases?
- Readability: could a new teammate change it safely?
- Architecture: is it in the right place, with the right boundaries?
- Security: inputs, secrets, permissions, dependencies
- Performance: budgets, queries, bundle size
- Tests fail when the code is broken (flip a condition and re-run)
- One approving review; two for auth, payments or data deletion
- Reviewer runs the preview link through the journey, not just the diff

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
- Merge to main deploys to production behind feature flags
- Flags removed within two sprints of full rollout

**Incidents**
- Roll back by redeploying the previous build
- Write a blameless note within 48 hours: what happened, impact, fix, prevention

## Examples
### Button from tokens (`src/components/button/Button.tsx`)

```tsx
import { forwardRef } from 'react';
import { cn } from '@/lib/cn';

const variants = {
  primary: 'bg-primary text-on-primary hover:bg-primary-hover',
  secondary: 'border border-line bg-surface text-ink hover:bg-surface-2',
} as const;

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: keyof typeof variants };

export const Button = forwardRef<HTMLButtonElement, Props>(({ variant = 'primary', className, ...props }, ref) => (
  <button ref={ref} className={cn('h-control rounded-control px-4 font-medium focus-visible:outline-focus', variants[variant], className)} {...props} />
));
```

### Journey test (`tests/e2e/checkout.spec.ts`)

```ts
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('returning shopper pays in under a minute', async ({ page }) => {
  await page.goto('/product/sample');
  await page.getByRole('button', { name: 'Add to bag' }).click();
  await page.getByRole('link', { name: 'Checkout' }).click();
  await expect(page.getByRole('heading', { name: 'Review and pay' })).toBeVisible();
  expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
});
```
