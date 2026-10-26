---
name: laravel-app-engineering
description: "Engineering skill: Laravel app — how to build and ship a web app with Laravel, PHP, CSS variables from the design skill + Tailwind CSS, Pest. Use when writing, reviewing, testing or releasing code in this stack, and when turning a Celestial design or experience skill into code."
type: engineering
stack: web-app
core: "1.0"
checked: 2026-10-26
---

# Laravel app

A server-rendered PHP app on Laravel with Blade components styled from design tokens, queued jobs and feature tests for every route.

For SaaS products, client portals and internal systems where forms, auth and background jobs make up most of the work. Runs on PHP-FPM or a long-running app server in a container, with MySQL or Postgres and Redis for queues and cache.

## Stack
- **Language:** PHP 8.3+ — Typed properties, enums and readonly classes keep domain code explicit.
- **Framework:** Laravel ^13 — Routing, Eloquent, queues, mail and auth scaffolding in one framework.
- **Styling:** CSS variables from the design skill + Tailwind CSS Tailwind ^4 — Tailwind theme reads tokens; Blade components never hold raw colours.
- **State:** Server-rendered Blade + Alpine.js for small behaviour Alpine ^3 — Most state lives on the server; Alpine handles toggles and menus.
- **Data:** PostgreSQL or MySQL via Eloquent; Redis for cache and queues Postgres 16+ / MySQL 8+ — Migrations and factories built in.
- **Build:** Vite ^6 — Builds CSS and the small amount of JavaScript.
- **Hosting:** Container with PHP-FPM or Octane, plus a queue worker — Web and worker processes from one image; preview per pull request.
- **Package manager:** Composer + npm Composer ^2.7 — PHP and front-end dependencies, both lockfiles committed.
- **Testing:** Pest ^3 — Readable feature and unit tests on top of PHPUnit.
- **Testing:** Playwright ^1.48 — Journey tests in real browsers with an axe audit.
- **Testing:** Larastan ^3 — Static analysis that understands Eloquent and the container.

## Commands
- dev: `composer run dev`
- e2e: `npx playwright test`
- lint: `vendor/bin/pint --test && vendor/bin/phpstan analyse`
- test: `php artisan test`
- build: `npm run build && php artisan optimize`
- install: `composer install && npm ci`

## Structure
- `app/Http/Controllers/` — Resource controllers, thin
- `app/Http/Requests/` — Form Request classes: validation and authorisation per action
- `app/Actions/` — Single-purpose classes holding business logic
- `app/Models/` — Eloquent models, casts and relationships
- `resources/views/components/` — Blade components named after design-skill components
- `resources/css/tokens.css` — CSS variables written from the design skill, light and dark
- `tests/Feature/` — Feature tests per route; tests/e2e/ holds Playwright journeys

## Naming
- Files: PascalCase.php for classes; Blade views kebab-case.blade.php
- Tests: tests/Feature/<Resource>Test.php; tests/e2e/<journey-id>.spec.ts
- Branches: type/short-description, e.g. feat/client-portal-upload
- Components: <x-button>, <x-field>: named after the design-skill component

## From design and experience skills
When a Celestial design skill is in use, write its tokens as CSS custom properties in `resources/css/tokens.css`, and build its components in `resources/views/components` with the same names and variants. Components read tokens only — no raw colours, sizes or font names.

When a Celestial experience skill is in use, give each journey one end-to-end test (happy path plus its error and empty states) and name analytics events `object_action` from its measures.

## Conventions
### Code
- Prefer small, pure functions and explicit types at module boundaries. _(Easier to test, review and change.)_

### Components
- Components read design tokens; no raw hex values, pixel sizes or font names in component code. _(One token change restyles the product.)_
- Blade components take variants as typed props and merge extra classes with $attributes->merge(). _(Matches design-skill variants and keeps markup composable.)_

### Data
- Analytics events are object_action in snake_case and come from the experience skill’s measures. _(Names stay consistent across teams and tools.)_
- Validate and authorise every write in a Form Request; controllers receive only $request->validated(). _(Validation and permission rules live in one testable class.)_
- Eager-load relationships with with() and enable Model::preventLazyLoading() outside production. _(Lazy loading in loops becomes a test failure instead of a slow page.)_

### Errors
- Every async action has loading, empty, error and success states, matching the experience skill. _(Unhandled states are where users get stuck.)_
- Queue anything that calls a third party; jobs are idempotent and set tries, backoff and a failed() handler. _(Retries must not double-charge or double-send.)_

### Security
- Secrets never live in the repository; read them from the environment or a secret store. _(A leaked key outlives the commit that removed it.)_
- Validate every input on the server, even when the client already did. _(Clients can be bypassed.)_
- Web pages ship a Content-Security-Policy, HSTS, X-Frame-Options and nosniff. _(Cheap protection against the most common attacks.)_
- Set $fillable on every model (never $guarded = []) and authorise with policies tied to the signed-in user. _(Stops mass assignment and cross-account access.)_

### Accessibility
- Use native elements first; add ARIA only when no native element fits. _(Native controls bring keyboard and screen-reader support for free.)_
- Error messages from @error render inside the field component, linked with aria-describedby. _(Assistive tech reads the error with the field.)_

## Do
- Use route model binding with scoped bindings for nested resources
- Write a feature test for each route: success, validation error, forbidden
- Keep config in config/*.php reading env(); call config() elsewhere

## Don't
- Call env() outside config files
- Use DB::raw with interpolated user input
- Put queries inside Blade templates

## Quality gates
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Lint and types | The stack’s linter and type checker | 0 errors | Every pull request |
| Unit and component tests | The stack’s test runner | All pass; every design-skill component state covered | Every pull request |
| Journey tests | End-to-end runner | One test per experience-skill journey: happy path + error state | Every pull request |
| Accessibility | Automated audit (axe on web, platform audit on mobile) | WCAG 2.2 AA · no new violations | Every pull request |
| Performance budget | Lighthouse CI on key pages + query log in feature tests | LCP ≤ 2.5s · INP ≤ 200ms · CLS ≤ 0.1 · ≤ 60KB JS per page · no lazy-loading violations | Every pull request |
| Dependency and secret scan | Dependency audit + secret scanner | No high or critical findings; no secrets | Every pull request and nightly |
| Preview deploy | Hosting preview environment | A working preview link on the pull request | Every pull request |
| Static analysis | Larastan | Level 6 or higher · 0 errors | Every pull request |

## Workflow
- Branching: Trunk-based: short-lived branches off main, squash-merged within two days.

**Review checklist**
- Correctness: does it do what the issue asks, including edge cases?
- Readability: could a new teammate change it safely?
- Architecture: is it in the right place, with the right boundaries?
- Security: inputs, secrets, permissions, dependencies
- Performance: budgets, queries, bundle size
- Tests fail when the code is broken (flip a condition and re-run)
- One approving review; two for auth, payments, migrations or data deletion
- Reviewer walks the journey on the preview link

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
- Merge to main builds the image; php artisan migrate --force runs before traffic shifts
- Restart queue workers after deploy so they load new code

**Incidents**
- Roll back by redeploying the previous image; pause workers if jobs fail repeatedly
- Blameless note within 48 hours

## Overrides of the engineering core
- Performance budget: Tighter JS budget: ≤ 60KB per page plus no lazy-loading violations — Server-rendered pages need little JavaScript; queries dominate latency.

## Examples
### Form Request (`app/Http/Requests/StoreInvoiceRequest.php`)

```php
<?php

namespace App\Http\Requests;

use App\Models\Invoice;
use Illuminate\Foundation\Http\FormRequest;

class StoreInvoiceRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()->can('create', Invoice::class);
    }

    public function rules(): array
    {
        return [
            'client_id' => ['required', 'uuid', 'exists:clients,id'],
            'due_on' => ['required', 'date', 'after_or_equal:today'],
            'lines' => ['required', 'array', 'min:1'],
            'lines.*.amount' => ['required', 'integer', 'min:1'],
        ];
    }
}
```

## Further reading
- [Laravel documentation](https://laravel.com/docs) — Validation, authorisation, queues and testing.
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/) — Concrete guidance on input validation, authentication and session handling.
- [WCAG overview](https://www.w3.org/WAI/standards-guidelines/wcag/) — The accessibility standard the server-rendered pages are audited against.
