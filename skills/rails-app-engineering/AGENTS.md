# AGENTS.md — Rails app with Hotwire

A server-rendered Ruby on Rails app using Turbo and Stimulus for interactivity, with design tokens as CSS variables and no separate front-end build.

## Setup and commands
- dev: `bin/dev`
- e2e: `bin/rails test:system`
- lint: `bin/rubocop && bin/brakeman --no-pager`
- test: `bin/rails test`
- build: `bin/rails assets:precompile`
- deploy: `bin/kamal deploy`
- install: `bundle install && bin/rails db:prepare`

## Project structure
- `app/models/` — Active Record models and concerns; domain logic lives here or in plain Ruby objects under app/models
- `app/controllers/` — RESTful controllers, one per resource
- `app/views/` — ERB templates and partials, one folder per controller
- `app/views/components/` — Design-skill components as partials (_button, _field, _card)
- `app/javascript/controllers/` — Stimulus controllers, one behaviour each
- `app/assets/stylesheets/tokens.css` — CSS variables written from the design skill, light and dark
- `test/system/` — One system test per experience-skill journey

## Code style
- Files: snake_case.rb; Stimulus controllers kebab-case_controller.js
- Tests: test/<type>/<name>_test.rb; test/system/<journey_id>_test.rb
- Branches: type/short-description, e.g. feat/team-invites
- Components: Partials named after the design-skill component, e.g. components/_button.html.erb

### Code
- Prefer small, pure functions and explicit types at module boundaries. _(Easier to test, review and change.)_
- Stick to the seven RESTful actions; add a new resource controller instead of custom actions. _(Routes stay predictable and controllers stay small.)_

### Components
- Components read design tokens; no raw hex values, pixel sizes or font names in component code. _(One token change restyles the product.)_

### Data
- Analytics events are object_action in snake_case and come from the experience skill’s measures. _(Names stay consistent across teams and tools.)_
- Use strict loading or includes on every collection rendered in a view, and add database constraints for every validation that matters. _(Prevents N+1 queries and data that bypasses model validations.)_

### Errors
- Every async action has loading, empty, error and success states, matching the experience skill. _(Unhandled states are where users get stuck.)_

### Security
- Secrets never live in the repository; read them from the environment or a secret store. _(A leaked key outlives the commit that removed it.)_
- Validate every input on the server, even when the client already did. _(Clients can be bypassed.)_
- Web pages ship a Content-Security-Policy, HSTS, X-Frame-Options and nosniff. _(Cheap protection against the most common attacks.)_
- Permit parameters explicitly and scope finds through the current user, e.g. Current.user.projects.find(params[:id]). _(Blocks mass assignment and access to other users’ records.)_
- Keep credentials in encrypted credentials or environment variables, and run Brakeman on every pull request. _(Static checks catch injection and unsafe redirects early.)_

### Performance
- Fragment-cache expensive partials with cache keys from the record, and move work over 100ms into Active Job. _(Keeps responses fast without hand-rolled invalidation.)_

### Accessibility
- Use native elements first; add ARIA only when no native element fits. _(Native controls bring keyboard and screen-reader support for free.)_
- When a Turbo Stream replaces content, announce it in an aria-live region or move focus to the new heading. _(Partial updates are silent to screen readers by default.)_

## Design and journeys
When a Celestial design skill is in use, write its tokens as CSS custom properties in `app/assets/stylesheets/tokens.css`, and build its components in `app/views/components` with the same names and variants. Components read tokens only — no raw colours, sizes or font names.

When a Celestial experience skill is in use, give each journey one end-to-end test (happy path plus its error and empty states) and name analytics events `object_action` from its measures.

## Testing and checks (must pass before a pull request)
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Lint and types | The stack’s linter and type checker | 0 errors | Every pull request |
| Unit and component tests | The stack’s test runner | All pass; every design-skill component state covered | Every pull request |
| Journey tests | End-to-end runner | One test per experience-skill journey: happy path + error state | Every pull request |
| Accessibility | Automated audit (axe on web, platform audit on mobile) | WCAG 2.2 AA · no new violations | Every pull request |
| Performance budget | Lighthouse CI on key pages + rack-mini-profiler review | LCP ≤ 2.5s · INP ≤ 200ms · CLS ≤ 0.1 · ≤ 60KB JS per page · server response p95 ≤ 300ms | Every pull request |
| Dependency and secret scan | Dependency audit + secret scanner | No high or critical findings; no secrets | Every pull request and nightly |
| Preview deploy | Hosting preview environment | A working preview link on the pull request | Every pull request |
| Static security analysis | Brakeman + bundler-audit | No new warnings; no vulnerable gems | Every pull request |

## Pull requests
- Branching: Trunk-based: short-lived branches off main, squash-merged within two days.

**Review checklist**
- Correctness: does it do what the issue asks, including edge cases?
- Readability: could a new teammate change it safely?
- Architecture: is it in the right place, with the right boundaries?
- Security: inputs, secrets, permissions, dependencies
- Performance: budgets, queries, bundle size
- Tests fail when the code is broken (flip a condition and re-run)
- One approving review; two for auth, billing, migrations or data deletion
- Reviewer clicks through the journey on the preview, with Turbo and with a hard reload

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
- Merge to main deploys with Kamal; migrations run before the new containers take traffic
- Migrations are safe to run while the old release is live

**Incidents**
- Roll back with kamal rollback to the previous version
- Blameless note within 48 hours

_Generated from the Celestial engineering skill “Rails app with Hotwire” (engineering core v1.0, checked 2026-10-26)._
