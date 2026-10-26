---
name: nuxt-app-engineering
description: "Engineering skill: Nuxt web app — how to build and ship a web app with Nuxt on Vue 3, TypeScript, Tailwind CSS, Vitest + @nuxt/test-utils. Use when writing, reviewing, testing or releasing code in this stack, and when turning a Celestial design or experience skill into code."
type: engineering
stack: web-app
core: "1.0"
checked: 2026-10-26
---

# Nuxt web app

A server-rendered Vue 3 app in TypeScript, with typed server routes in the same project and data fetched once on the server and reused on the client.

For content-rich products and signed-in apps that want server rendering without a separate backend: storefronts, portals, dashboards. Pages render on the Nitro server and hydrate in the browser; the same build deploys to a Node server, serverless functions or static hosting through a preset. Design-skill tokens become a Tailwind theme backed by CSS variables.

## Stack
- **Language:** TypeScript ^5.6 — Auto-generated types cover pages, server routes and runtime config.
- **Framework:** Nuxt on Vue 3 ^4 · Vue ^3.5 — File-based routing, server rendering and a server layer (Nitro) in one project.
- **Styling:** Tailwind CSS ^4 — Theme generated from design tokens; no hand-written colours in single-file components.
- **State:** Pinia for shared client state; useState for SSR-safe small values Pinia ^3 — Stores serialise from server to client without leaking between requests.
- **Data:** useFetch / useAsyncData calling typed Nitro server routes — Data is fetched during server render and reused on hydration instead of refetched.
- **Build:** Vite (via Nuxt) + Nitro bundled with Nuxt — Fast dev server; Nitro builds the server output for the chosen deploy preset.
- **Hosting:** Node server or serverless preset with preview deploys Node 22 LTS+ — Same code, different preset; every pull request gets a link.
- **Package manager:** pnpm ^10 — Fast, strict installs.
- **Testing:** Vitest + @nuxt/test-utils ^3 — Unit and component tests with the Nuxt runtime and auto-imports available.
- **Testing:** Vue Test Utils ^2 — Mounts single-file components with props, slots and events.
- **Testing:** Playwright ^1.50 — Journey tests against the built server, with the accessibility audit.

## Commands
- dev: `pnpm dev`
- e2e: `pnpm build && pnpm test:e2e`
- lint: `pnpm lint && pnpm nuxi typecheck`
- test: `pnpm test`
- build: `pnpm build`
- install: `pnpm install`

## Structure
- `app/pages/` — File-based routes; one .vue file per page
- `app/components/` — Design-skill components, auto-imported; one folder per component with its test
- `app/composables/` — useX() functions wrapping data fetching and shared logic
- `app/stores/` — Pinia stores, only for client state two or more features share
- `server/api/` — Nitro route handlers; method in the filename (orders.get.ts, orders.post.ts)
- `shared/` — Validation schemas and types used by both app/ and server/
- `app/assets/css/tokens.css` — CSS variables written from the design skill
- `tests/e2e/` — One Playwright spec per experience-skill journey

## Naming
- Files: kebab-case for pages, composables and server routes; PascalCase.vue for components
- Tests: *.test.ts beside the file; tests/e2e/<journey-id>.spec.ts
- Branches: type/short-description, e.g. feat/saved-searches
- Components: PascalCase, named after the design-skill component; folder prefixes become part of the auto-import name

## From design and experience skills
When a Celestial design skill is in use, write its tokens as Tailwind theme in `app/assets/css/tokens.css`, and build its components in `app/components` with the same names and variants. Components read tokens only — no raw colours, sizes or font names.

When a Celestial experience skill is in use, give each journey one end-to-end test (happy path plus its error and empty states) and name analytics events `object_action` from its measures.

## Conventions
### Code
- Prefer small, pure functions and explicit types at module boundaries. _(Easier to test, review and change.)_

### Components
- Components read design tokens; no raw hex values, pixel sizes or font names in component code. _(One token change restyles the product.)_
- Use script setup with type-based defineProps and defineEmits; never bind v-html to user content. _(Typed component contracts, and no stored XSS through rich text.)_

### Data
- Analytics events are object_action in snake_case and come from the experience skill’s measures. _(Names stay consistent across teams and tools.)_
- Fetch page data with useFetch or useAsyncData using a stable key; call $fetch directly only inside event handlers. _(Plain $fetch in setup runs on the server and again in the browser.)_
- No module-level mutable state in server code or composables; use useState, Pinia or event context. _(Module state is shared across every request on the server.)_

### Errors
- Every async action has loading, empty, error and success states, matching the experience skill. _(Unhandled states are where users get stuck.)_
- Throw createError with a status in server routes and pages; app/error.vue renders the branded error state. _(Status codes stay correct for crawlers and users get a recoverable screen.)_

### Security
- Secrets never live in the repository; read them from the environment or a secret store. _(A leaked key outlives the commit that removed it.)_
- Validate every input on the server, even when the client already did. _(Clients can be bypassed.)_
- Web pages ship a Content-Security-Policy, HSTS, X-Frame-Options and nosniff. _(Cheap protection against the most common attacks.)_
- Server routes parse bodies and queries with readValidatedBody / getValidatedQuery and a shared schema, then check the session. _(Server routes are public endpoints; the schema in shared/ keeps client and server in agreement.)_
- Secrets live in runtimeConfig (server-only keys); only values under runtimeConfig.public reach the browser. _(Anything public is serialised into every page.)_

### Accessibility
- Use native elements first; add ARIA only when no native element fits. _(Native controls bring keyboard and screen-reader support for free.)_
- Every page sets a unique title with useHead or useSeoMeta, and the layout includes the route announcer. _(Client-side navigation is announced like a full page load.)_

## Do
- Use lazy fetching and the pending/error refs for below-the-fold data
- Keep server-only helpers in server/utils so they are never bundled for the browser
- Generate the journey spec from the experience skill before building the screen

## Don't
- Read window or document during setup without a client-only guard
- Create a Pinia store for data that only one page uses
- Disable SSR for a page to hide a hydration mismatch instead of fixing it

## Quality gates
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Lint and types | ESLint (Nuxt config) + nuxi typecheck (vue-tsc) | 0 errors; 0 hydration-mismatch warnings in the e2e run | Every pull request |
| Unit and component tests | The stack’s test runner | All pass; every design-skill component state covered | Every pull request |
| Journey tests | End-to-end runner | One test per experience-skill journey: happy path + error state | Every pull request |
| Accessibility | Automated audit (axe on web, platform audit on mobile) | WCAG 2.2 AA · no new violations | Every pull request |
| Performance budget | Lab measurement in CI | Web: LCP ≤ 2.5s · INP ≤ 200ms · CLS ≤ 0.1 · ≤ 170KB JS per route. Mobile: cold start ≤ 2s · 60fps scroll | Every pull request |
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
- Reviewer checks new server routes for validation and session checks

**Definition of done**
- Acceptance criteria met and demoed on the preview link
- Tests added for new behaviour and every state
- Accessibility and performance gates green
- Analytics events named from the experience skill
- Docs or changelog updated when behaviour changes
- Pages render with JavaScript disabled for their primary content

**Release**
- Small pull requests (aim for under 400 changed lines)
- CI green before review
- Squash-merge to main; main is always deployable
- Every release has a written rollback path
- Merge to main deploys to production behind feature flags
- Upgrade Nuxt minor versions monthly in a dedicated pull request

**Incidents**
- Roll back by redeploying the previous build
- Write a blameless note within 48 hours: what happened, impact, fix, prevention

## Overrides of the engineering core
- Lint and types: Adds a hydration-mismatch check to the core gate — Mismatches are the most common server-rendering bug and slip past the type checker.

## Examples
### Validated server route (`server/api/notes.post.ts`)

```ts
import { NoteInput } from '~~/shared/schemas/note';

export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event);
  const body = await readValidatedBody(event, NoteInput.parse);

  const note = await useDb().notes.create({
    ownerId: session.user.id,
    title: body.title,
    text: body.text,
  });

  setResponseStatus(event, 201);
  return note;
});
```

### Page data with a stable key (`app/pages/notes/index.vue`)

```vue
<script setup lang="ts">
useSeoMeta({ title: 'Your notes' });
const { data: notes, status, error, refresh } = await useFetch('/api/notes', { key: 'notes-list' });
</script>

<template>
  <h1>Your notes</h1>
  <LoadingState v-if="status === 'pending'" />
  <ErrorState v-else-if="error" @retry="refresh" />
  <EmptyState v-else-if="!notes?.length" />
  <NoteList v-else :notes="notes" />
</template>
```

## Further reading
- [Nuxt documentation](https://nuxt.com/docs) — Directory structure, data fetching, server routes and deploy presets.
- [Vue guide](https://vuejs.org/guide/introduction.html) — Composition API, reactivity and single-file component rules.
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/) — Input validation and XSS guidance for server routes and rich text.
