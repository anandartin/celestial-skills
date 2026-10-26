---
name: nextjs-app-engineering
description: "Engineering skill: Next.js full-stack app — how to build and ship a web app with Next.js (App Router) on React, TypeScript, Tailwind CSS, Vitest. Use when writing, reviewing, testing or releasing code in this stack, and when turning a Celestial design or experience skill into code."
type: engineering
stack: web-app
core: "1.0"
checked: 2026-10-26
---

# Next.js full-stack app

A full-stack TypeScript web app on the App Router, rendering on the server by default and shipping client JavaScript only where a screen needs interaction.

For products that need both public pages and signed-in screens in one codebase: marketplaces, SaaS apps, content plus account areas. Pages render as React Server Components, mutations run as server actions, and the app deploys to a Node or edge host with a preview deploy per pull request. Design-skill tokens become a Tailwind theme backed by CSS variables.

## Stack
- **Language:** TypeScript ^5.6 — One type system across server components, server actions and client components.
- **Framework:** Next.js (App Router) on React ^16 · React ^19 — Server rendering, streaming, routing and server actions in one framework.
- **Styling:** Tailwind CSS ^4 — Theme generated from design tokens; works in server and client components alike.
- **State:** Server components + URL search params; client state local to leaf components — Most state lives on the server or in the URL, so it survives refresh and sharing.
- **Data:** Typed data layer (Drizzle ORM on PostgreSQL) called only from server code Drizzle 0.x · PostgreSQL 16+ — Queries stay on the server; the schema doubles as the type source.
- **Build:** Next.js compiler (Turbopack) bundled with Next.js — Fast dev rebuilds and per-route production bundles with no extra config.
- **Hosting:** Node or edge runtime host with preview deploys Node 22 LTS+ — Server actions and streaming need a server; every pull request gets a link.
- **Package manager:** pnpm ^10 — Fast, strict installs with a lockfile CI can trust.
- **Testing:** Vitest ^3 — Fast unit tests for data functions, validators and client components.
- **Testing:** Testing Library ^16 — Component tests query by role and label.
- **Testing:** Playwright ^1.50 — Journey tests against a production build, including server actions and streaming.

## Commands
- dev: `pnpm dev`
- e2e: `pnpm build && pnpm test:e2e`
- lint: `pnpm lint && pnpm typecheck`
- test: `pnpm test`
- build: `pnpm build`
- install: `pnpm install`

## Structure
- `src/app/` — Routes: page.tsx, layout.tsx, loading.tsx, error.tsx and not-found.tsx per segment
- `src/app/(marketing)/ and src/app/(app)/` — Route groups that split public pages from signed-in screens with their own layouts
- `src/components/` — Design-skill components; server components by default, client ones marked at the top
- `src/features/<feature>/` — actions.ts (server actions), queries.ts (server reads), schema.ts (input validation)
- `src/server/` — Database client, auth helpers and anything that must never reach the browser (imports server-only)
- `src/styles/tokens.css` — CSS variables written from the design skill
- `tests/e2e/` — One Playwright spec per experience-skill journey

## Naming
- Files: kebab-case.ts; components PascalCase.tsx; route files use the framework names (page.tsx, layout.tsx)
- Tests: *.test.ts(x) beside the file; tests/e2e/<journey-id>.spec.ts
- Branches: type/short-description, e.g. feat/order-history
- Components: PascalCase, named after the design-skill component; client components end in .client.tsx when a server twin exists

## From design and experience skills
When a Celestial design skill is in use, write its tokens as Tailwind theme in `src/styles/tokens.css`, and build its components in `src/components` with the same names and variants. Components read tokens only — no raw colours, sizes or font names.

When a Celestial experience skill is in use, give each journey one end-to-end test (happy path plus its error and empty states) and name analytics events `object_action` from its measures.

## Conventions
### Code
- Prefer small, pure functions and explicit types at module boundaries. _(Easier to test, review and change.)_

### Components
- Components read design tokens; no raw hex values, pixel sizes or font names in component code. _(One token change restyles the product.)_
- Components are server components unless they need state, effects or browser APIs; put 'use client' on the smallest leaf that does. _(Every client boundary pulls its imports into the browser bundle.)_

### Data
- Analytics events are object_action in snake_case and come from the experience skill’s measures. _(Names stay consistent across teams and tools.)_
- Read data in server components through src/features/*/queries.ts; after a mutation, revalidate the exact path or tag it changed. _(One place to see what is cached and why a screen is stale.)_

### Errors
- Every async action has loading, empty, error and success states, matching the experience skill. _(Unhandled states are where users get stuck.)_
- Every route segment that fetches has loading.tsx and error.tsx; missing records call notFound(). _(Streaming shows progress, and failures stay inside the segment instead of blanking the page.)_

### Security
- Secrets never live in the repository; read them from the environment or a secret store. _(A leaked key outlives the commit that removed it.)_
- Validate every input on the server, even when the client already did. _(Clients can be bypassed.)_
- Web pages ship a Content-Security-Policy, HSTS, X-Frame-Options and nosniff. _(Cheap protection against the most common attacks.)_
- Every server action parses its input with a schema and checks the session before touching data. _(Server actions are public HTTP endpoints, whatever the UI shows.)_
- Modules under src/server/ import 'server-only'; only NEXT_PUBLIC_ variables may be read in client code, and none of them hold secrets. _(The build fails instead of leaking a database client or key to the browser.)_

### Performance
- Images go through next/image with explicit sizes; fonts through next/font; third-party scripts load after interaction. _(Protects LCP and CLS without hand-tuning each page.)_

### Accessibility
- Use native elements first; add ARIA only when no native element fits. _(Native controls bring keyboard and screen-reader support for free.)_
- Each page exports metadata with a unique title, and every page has exactly one h1. _(The route announcer reads the title, so screen-reader users hear where they landed.)_

## Do
- Pass server data to client components as plain serialisable props
- Keep filters, sort order and pagination in search params so views can be shared
- Use useActionState or form status for pending and error states on forms

## Don't
- Fetch your own route handlers from server components; call the query function directly
- Mark a layout or page 'use client' to fix one interactive widget
- Rely on default caching behaviour without stating the cache or revalidate choice in code

## Quality gates
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Lint and types | The stack’s linter and type checker | 0 errors | Every pull request |
| Unit and component tests | The stack’s test runner | All pass; every design-skill component state covered | Every pull request |
| Journey tests | End-to-end runner | One test per experience-skill journey: happy path + error state | Every pull request |
| Accessibility | Automated audit (axe on web, platform audit on mobile) | WCAG 2.2 AA · no new violations | Every pull request |
| Performance budget | next build route report + Lighthouse CI | LCP ≤ 2.5s · INP ≤ 200ms · CLS ≤ 0.1 · ≤ 170KB first-load JS per route | Every pull request |
| Dependency and secret scan | Dependency audit + secret scanner | No high or critical findings; no secrets | Every pull request and nightly |
| Preview deploy | Hosting preview environment | A working preview link on the pull request | Every pull request |
| Server boundary | server-only imports + build | Build fails on any server-only module in a client bundle; 0 secrets in NEXT_PUBLIC_ variables | Every pull request |

## Workflow
- Branching: Trunk-based: short-lived branches off main, squash-merged within two days.

**Review checklist**
- Correctness: does it do what the issue asks, including edge cases?
- Readability: could a new teammate change it safely?
- Architecture: is it in the right place, with the right boundaries?
- Security: inputs, secrets, permissions, dependencies
- Performance: budgets, queries, bundle size
- Tests fail when the code is broken (flip a condition and re-run)
- One approving review; two for auth, payments, data deletion or any new server action
- Reviewer checks each new 'use client' boundary and each revalidate call

**Definition of done**
- Acceptance criteria met and demoed on the preview link
- Tests added for new behaviour and every state
- Accessibility and performance gates green
- Analytics events named from the experience skill
- Docs or changelog updated when behaviour changes
- New server actions have a test for invalid input and for a signed-out caller

**Release**
- Small pull requests (aim for under 400 changed lines)
- CI green before review
- Squash-merge to main; main is always deployable
- Every release has a written rollback path
- Merge to main deploys to production; risky changes ship behind feature flags
- Database migrations run before the deploy and stay backwards compatible for one release

**Incidents**
- Roll back by promoting the previous deployment; migrations are forward-only, so ship a fix migration if needed
- Write a blameless note within 48 hours: what happened, impact, fix, prevention

## Overrides of the engineering core
- Performance budget: Measured on first-load JS from the production build, not the dev server — Dev bundles include tooling and misstate what users download.

## Examples
### Validated server action (`src/features/profile/actions.ts`)

```ts
'use server';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { requireUser } from '@/server/auth';
import { db, profiles } from '@/server/db';
import { eq } from 'drizzle-orm';

const Input = z.object({ displayName: z.string().trim().min(1).max(60) });

export type State = { error?: string; ok?: boolean };

export async function updateProfile(_prev: State, form: FormData): Promise<State> {
  const user = await requireUser();
  const parsed = Input.safeParse({ displayName: form.get('displayName') });
  if (!parsed.success) return { error: 'Enter a name between 1 and 60 characters.' };

  await db.update(profiles).set(parsed.data).where(eq(profiles.userId, user.id));
  revalidatePath('/settings/profile');
  return { ok: true };
}
```

## Further reading
- [Next.js documentation](https://nextjs.org/docs) — App Router, server actions, caching and the route file conventions.
- [React documentation](https://react.dev/learn) — Server and client component model and the hooks used in forms.
- [Web Vitals](https://web.dev/articles/vitals) — What LCP, INP and CLS measure and how the budget thresholds were chosen.
