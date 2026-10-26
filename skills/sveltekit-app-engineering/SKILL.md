---
name: sveltekit-app-engineering
description: "Engineering skill: SvelteKit web app — how to build and ship a web app with SvelteKit on Svelte 5, TypeScript, Component-scoped CSS reading CSS variables, Vitest. Use when writing, reviewing, testing or releasing code in this stack, and when turning a Celestial design or experience skill into code."
type: engineering
stack: web-app
core: "1.0"
checked: 2026-10-26
---

# SvelteKit web app

A SvelteKit app in TypeScript where pages load data on the server, forms work without JavaScript and get enhanced when it arrives.

For lean product apps and content sites that want small bundles: booking flows, internal tools, account areas. Load functions and form actions run on the server; an adapter targets a Node server, serverless functions or static files. Design-skill tokens become CSS variables read by component-scoped styles.

## Stack
- **Language:** TypeScript ^5.6 — Generated types for load data, form actions and route params.
- **Framework:** SvelteKit on Svelte 5 (runes) ^3 · Svelte ^5 — Compiled components, server load functions and progressive form actions.
- **Styling:** Component-scoped CSS reading CSS variables — Svelte scopes styles per component; tokens arrive as variables, so themes switch at runtime.
- **State:** Runes ($state, $derived) in components and .svelte.ts modules; page data from load — Reactivity without a store library; server data stays the source of truth.
- **Data:** Server load functions and form actions calling a typed database layer — Queries and secrets never leave the server.
- **Build:** Vite ^7 — SvelteKit is a Vite plugin; one config for dev, build and tests.
- **Hosting:** Adapter-based deploy (Node or serverless) with preview deploys Node 22 LTS+ — Switch target by changing the adapter; every pull request gets a link.
- **Package manager:** pnpm ^10 — Fast, strict installs.
- **Testing:** Vitest ^3 — Unit tests for load functions, actions and .svelte.ts logic.
- **Testing:** Testing Library (Svelte) ^5 — Component tests by role and label.
- **Testing:** Playwright ^1.50 — Journey tests, run once with JavaScript enabled and once with it disabled for forms.

## Commands
- dev: `pnpm dev`
- e2e: `pnpm test:e2e`
- lint: `pnpm lint && pnpm check`
- test: `pnpm test`
- build: `pnpm build`
- install: `pnpm install`

## Structure
- `src/routes/` — +page.svelte, +page.server.ts, +layout.svelte and +error.svelte per route
- `src/lib/components/` — Design-skill components, one folder each with component and test
- `src/lib/server/` — Database, auth and secrets; SvelteKit refuses to import it into client code
- `src/lib/state/` — Shared reactive state as .svelte.ts modules, created per request or per component tree
- `src/lib/schemas/` — Validation schemas shared by forms and actions
- `src/hooks.server.ts` — Session lookup, security headers and request logging
- `src/styles/tokens.css` — CSS variables written from the design skill
- `tests/e2e/` — One Playwright spec per experience-skill journey

## Naming
- Files: kebab-case.ts; components PascalCase.svelte; route files use the + prefix names
- Tests: *.test.ts beside the file; tests/e2e/<journey-id>.spec.ts
- Branches: type/short-description, e.g. feat/reschedule-booking
- Components: PascalCase, named after the design-skill component

## From design and experience skills
When a Celestial design skill is in use, write its tokens as CSS custom properties in `src/styles/tokens.css`, and build its components in `src/lib/components` with the same names and variants. Components read tokens only — no raw colours, sizes or font names.

When a Celestial experience skill is in use, give each journey one end-to-end test (happy path plus its error and empty states) and name analytics events `object_action` from its measures.

## Conventions
### Code
- Prefer small, pure functions and explicit types at module boundaries. _(Easier to test, review and change.)_

### Components
- Components read design tokens; no raw hex values, pixel sizes or font names in component code. _(One token change restyles the product.)_
- Mutations are form actions with a real <form method="POST"> and use:enhance; no fetch-based submit handlers for standard forms. _(Forms keep working before JavaScript loads or if it fails.)_
- Declare props with $props() and a typed interface; derive values with $derived, not $effect. _(Effects that set state cause extra renders and ordering bugs.)_

### Data
- Analytics events are object_action in snake_case and come from the experience skill’s measures. _(Names stay consistent across teams and tools.)_
- Never hold per-user data in module-level variables on the server; pass it through locals, load data or context. _(Module state is shared by every request and leaks between users.)_

### Errors
- Every async action has loading, empty, error and success states, matching the experience skill. _(Unhandled states are where users get stuck.)_
- Actions return fail(status, { errors, values }) for invalid input; unexpected problems throw error() and render +error.svelte. _(Users keep what they typed and see field-level messages.)_

### Security
- Secrets never live in the repository; read them from the environment or a secret store. _(A leaked key outlives the commit that removed it.)_
- Validate every input on the server, even when the client already did. _(Clients can be bypassed.)_
- Web pages ship a Content-Security-Policy, HSTS, X-Frame-Options and nosniff. _(Cheap protection against the most common attacks.)_
- Read secrets only from $env/static/private or $env/dynamic/private, and only inside src/lib/server or *.server.ts files. _(SvelteKit fails the build if private env or server modules reach the client.)_

### Accessibility
- Use native elements first; add ARIA only when no native element fits. _(Native controls bring keyboard and screen-reader support for free.)_
- Treat Svelte compiler accessibility warnings as errors; every page sets <title> in <svelte:head>. _(The compiler catches missing labels and alt text before review.)_

## Do
- Return only the fields a page needs from load; never return whole database rows
- Use streamed promises in load for slow, non-critical data
- Set security headers once in hooks.server.ts

## Don't
- Fetch your own +server.ts endpoints from load when you can call the function directly
- Use $effect to sync one piece of state into another
- Turn off server rendering for a route to dodge a window reference

## Quality gates
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Lint and types | ESLint + svelte-check | 0 errors; 0 compiler accessibility warnings | Every pull request |
| Unit and component tests | The stack’s test runner | All pass; every design-skill component state covered | Every pull request |
| Journey tests | End-to-end runner | One test per experience-skill journey: happy path + error state | Every pull request |
| Accessibility | Automated audit (axe on web, platform audit on mobile) | WCAG 2.2 AA · no new violations | Every pull request |
| Performance budget | Lab measurement in CI | Web: LCP ≤ 2.5s · INP ≤ 200ms · CLS ≤ 0.1 · ≤ 170KB JS per route. Mobile: cold start ≤ 2s · 60fps scroll | Every pull request |
| Dependency and secret scan | Dependency audit + secret scanner | No high or critical findings; no secrets | Every pull request and nightly |
| Preview deploy | Hosting preview environment | A working preview link on the pull request | Every pull request |
| Progressive forms | Playwright with JavaScript disabled | Every form in a journey submits and shows validation errors without JavaScript | Every pull request |

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
- Reviewer checks what each load function returns to the client

**Definition of done**
- Acceptance criteria met and demoed on the preview link
- Tests added for new behaviour and every state
- Accessibility and performance gates green
- Analytics events named from the experience skill
- Docs or changelog updated when behaviour changes
- Forms tested with and without JavaScript

**Release**
- Small pull requests (aim for under 400 changed lines)
- CI green before review
- Squash-merge to main; main is always deployable
- Every release has a written rollback path
- Merge to main deploys to production behind feature flags
- Adapter or Svelte major upgrades ship in their own pull request

**Incidents**
- Roll back by redeploying the previous build
- Write a blameless note within 48 hours: what happened, impact, fix, prevention

## Overrides of the engineering core
- Lint and types: Compiler accessibility warnings count as errors — They are cheap to fix at write time and the compiler already reports them.

## Examples
### Load and form action (`src/routes/settings/+page.server.ts`)

```ts
import { fail, redirect } from '@sveltejs/kit';
import { SettingsInput } from '$lib/schemas/settings';
import { getSettings, saveSettings } from '$lib/server/settings';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
  if (!locals.user) redirect(303, '/login');
  const { timezone, emailDigest } = await getSettings(locals.user.id);
  return { timezone, emailDigest };
};

export const actions: Actions = {
  default: async ({ request, locals }) => {
    if (!locals.user) redirect(303, '/login');
    const values = Object.fromEntries(await request.formData());
    const parsed = SettingsInput.safeParse(values);
    if (!parsed.success) return fail(400, { values, errors: parsed.error.flatten().fieldErrors });
    await saveSettings(locals.user.id, parsed.data);
    return { saved: true };
  },
};
```

## Further reading
- [SvelteKit documentation](https://svelte.dev/docs/kit) — Routing, load functions, form actions, hooks and adapters.
- [Svelte documentation](https://svelte.dev/docs/svelte) — Runes, component props and the compiler's accessibility checks.
- [WCAG standards and guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) — The success criteria behind the accessibility gate.
