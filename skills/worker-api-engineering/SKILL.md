---
name: worker-api-engineering
description: "Engineering skill: Edge Worker API — how to build and ship a api / service with Cloudflare Workers, JavaScript (ES modules) or TypeScript, Vitest with the Workers pool. Use when writing, reviewing, testing or releasing code in this stack, and when turning a Celestial design or experience skill into code."
type: engineering
stack: api
core: "1.0"
checked: 2026-10-25
---

# Edge Worker API

A small JSON API running at the edge: one entry file, a hosted Postgres behind it, rate limits and security headers by default.

For product backends and BFFs that need low latency and little operations work. One Worker serves static assets and /api routes; the database is reached over HTTP with a server-only key. This is the stack Celestial itself runs on.

## Stack
- **Language:** JavaScript (ES modules) or TypeScript — Runs natively in the Workers runtime.
- **Framework:** Cloudflare Workers compatibility date pinned — Global edge runtime with static assets and rate limiting built in.
- **State:** Stateless requests — Any instance can serve any request.
- **Data:** Supabase Postgres via PostgREST — SQL with row-level security; the Worker holds the service key.
- **Build:** Wrangler ^4 — Bundles, runs locally and deploys.
- **Hosting:** Cloudflare — Deploys in seconds, with preview versions.
- **Package manager:** npm — Default with Wrangler.
- **Testing:** Vitest with the Workers pool ^3 — Tests run in the real runtime.
- **Testing:** Live checks script — Headers, auth and access rules verified against the deployed site.

## Commands
- dev: `npx wrangler dev`
- lint: `npx eslint .`
- test: `npx vitest run && node scripts/security-check.mjs`
- build: `npx wrangler deploy --dry-run`
- deploy: `npx wrangler deploy`
- install: `npm install`

## Structure
- `src/index.js` — Entry: routes /api/* to the API, everything else to static assets
- `src/api.js` — Route handlers, auth, access rules
- `public/` — Static site and _headers
- `schema.sql` — Tables and row-level security
- `scripts/security-check.mjs` — Live security checks
- `wrangler.toml` — Vars, bindings and rate limits (secrets via wrangler secret put)

## Naming
- Files: kebab-case.js
- Tests: *.test.js beside the module
- Branches: type/short-description

## From design and experience skills
This stack has no UI; design skills do not apply.

When a Celestial experience skill is in use, give each journey one end-to-end test (happy path plus its error and empty states) and name analytics events `object_action` from its measures.

## Conventions
### Code
- Prefer small, pure functions and explicit types at module boundaries. _(Easier to test, review and change.)_

### Components
- Components read design tokens; no raw hex values, pixel sizes or font names in component code. _(One token change restyles the product.)_

### Data
- Analytics events are object_action in snake_case and come from the experience skill’s measures. _(Names stay consistent across teams and tools.)_

### Errors
- Every async action has loading, empty, error and success states, matching the experience skill. _(Unhandled states are where users get stuck.)_
- Return JSON errors with a human message and the right status; never leak stack traces. _(Clients can show the message as-is.)_

### Security
- Secrets never live in the repository; read them from the environment or a secret store. _(A leaked key outlives the commit that removed it.)_
- Validate every input on the server, even when the client already did. _(Clients can be bypassed.)_
- Web pages ship a Content-Security-Policy, HSTS, X-Frame-Options and nosniff. _(Cheap protection against the most common attacks.)_
- Every route decides who is asking (session token or admin key) before touching data; compare secrets in constant time. _(The Worker is the only gate in front of the database.)_
- Direct database access with the public key is blocked by row-level security with no policies. _(Defence in depth if a key leaks.)_
- Rate-limit paid and write endpoints per user, falling back to IP. _(Protects cost and data.)_

### Performance
- Bound every request body and outbound fetch (size and timeout). _(The edge runtime has tight limits.)_

### Accessibility
- Use native elements first; add ARIA only when no native element fits. _(Native controls bring keyboard and screen-reader support for free.)_

## Do
- Keep secrets in Worker secrets; vars only for non-secret config
- Run the security check after every deploy
- Return cache-control: no-store on authenticated responses

## Don't
- Trust a field the client sends for ownership or visibility
- Call the database from the browser with a privileged key
- Log tokens or request bodies

## Quality gates
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Lint and types | The stack’s linter and type checker | 0 errors | Every pull request |
| Unit and component tests | The stack’s test runner | All pass; every design-skill component state covered | Every pull request |
| Performance budget | Worker analytics | p95 CPU ≤ 50ms · p95 latency ≤ 300ms excluding model calls | Weekly review |
| Dependency and secret scan | Dependency audit + secret scanner | No high or critical findings; no secrets | Every pull request and nightly |
| Preview deploy | Hosting preview environment | A working preview link on the pull request | Every pull request |
| Security check | scripts/security-check.mjs | All checks pass | After every deploy |

## Workflow
- Branching: Trunk-based; main deploys.

**Review checklist**
- Correctness: does it do what the issue asks, including edge cases?
- Readability: could a new teammate change it safely?
- Architecture: is it in the right place, with the right boundaries?
- Security: inputs, secrets, permissions, dependencies
- Performance: budgets, queries, bundle size
- Tests fail when the code is broken (flip a condition and re-run)
- Any change to auth, access rules or schema needs a second reviewer

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
- Deploy from main; database changes applied in the SQL editor first, backwards compatible

**Incidents**
- Roll back with wrangler rollback; rotate any secret that may have leaked

## Overrides of the engineering core
- Journey tests: Replaced by API contract tests + the live security check — No UI in this stack.
- Accessibility: Not applicable — No UI in this stack.

## Examples
### Who is asking (`src/api.js`)

```js
async function whoIs(request, env) {
  const token = (request.headers.get('authorization') || '').replace(/^Bearer\s+/i, '');
  if (!token) return null;
  const r = await fetch(env.SUPABASE_URL + '/auth/v1/user', { headers: { apikey: env.SUPABASE_KEY, authorization: 'Bearer ' + token } });
  return r.ok ? r.json() : null;
}
```
