---
name: rails-app-engineering
description: "Engineering skill: Rails app with Hotwire — how to build and ship a web app with Ruby on Rails, Ruby, CSS variables from the design skill + Propshaft, Minitest. Use when writing, reviewing, testing or releasing code in this stack, and when turning a Celestial design or experience skill into code."
type: engineering
stack: web-app
core: "1.0"
checked: 2026-10-26
---

# Rails app with Hotwire

A server-rendered Ruby on Rails app using Turbo and Stimulus for interactivity, with design tokens as CSS variables and no separate front-end build.

For SaaS products, marketplaces and back-office tools that one small team builds end to end. Deploys as a container image to your own servers or a container platform, with Postgres and background jobs backed by the database.

## Stack
- **Language:** Ruby 3.3+ — YJIT on by default; fast enough for most web workloads.
- **Framework:** Ruby on Rails ^8.0 — Conventions for routing, models, mailers, jobs and caching in one framework.
- **Styling:** CSS variables from the design skill + Propshaft Propshaft ^1 — Plain CSS files that read tokens; no CSS build step.
- **State:** Turbo Drive, Frames and Streams + Stimulus turbo-rails ^2 · stimulus-rails ^1.3 — Partial page updates rendered on the server; small controllers for client behaviour.
- **Data:** PostgreSQL via Active Record; Solid Queue and Solid Cache Postgres 16+ — Jobs and cache in the same database until scale demands otherwise.
- **Build:** Importmap + Propshaft importmap-rails ^2 — JavaScript modules served directly; nothing to bundle.
- **Hosting:** Container image deployed with Kamal Kamal ^2 — Zero-downtime deploys to any servers, with a proxy in front.
- **Package manager:** Bundler ^2.5 — Gemfile.lock committed; no Node.js required.
- **Testing:** Minitest built in — Rails default for models, controllers and integration tests.
- **Testing:** Capybara system tests ^3.40 — Journey tests in a headless browser.
- **Testing:** axe-core-capybara ^4 — Accessibility audit inside system tests.

## Commands
- dev: `bin/dev`
- e2e: `bin/rails test:system`
- lint: `bin/rubocop && bin/brakeman --no-pager`
- test: `bin/rails test`
- build: `bin/rails assets:precompile`
- deploy: `bin/kamal deploy`
- install: `bundle install && bin/rails db:prepare`

## Structure
- `app/models/` — Active Record models and concerns; domain logic lives here or in plain Ruby objects under app/models
- `app/controllers/` — RESTful controllers, one per resource
- `app/views/` — ERB templates and partials, one folder per controller
- `app/views/components/` — Design-skill components as partials (_button, _field, _card)
- `app/javascript/controllers/` — Stimulus controllers, one behaviour each
- `app/assets/stylesheets/tokens.css` — CSS variables written from the design skill, light and dark
- `test/system/` — One system test per experience-skill journey

## Naming
- Files: snake_case.rb; Stimulus controllers kebab-case_controller.js
- Tests: test/<type>/<name>_test.rb; test/system/<journey_id>_test.rb
- Branches: type/short-description, e.g. feat/team-invites
- Components: Partials named after the design-skill component, e.g. components/_button.html.erb

## From design and experience skills
When a Celestial design skill is in use, write its tokens as CSS custom properties in `app/assets/stylesheets/tokens.css`, and build its components in `app/views/components` with the same names and variants. Components read tokens only — no raw colours, sizes or font names.

When a Celestial experience skill is in use, give each journey one end-to-end test (happy path plus its error and empty states) and name analytics events `object_action` from its measures.

## Conventions
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

## Do
- Render forms through the shared field partial so labels and errors are linked
- Return 422 on failed form submissions so Turbo re-renders the form
- Write a system test from the experience skill before the feature

## Don't
- Put business logic in controllers or helpers
- Add a JavaScript bundler before importmaps fall short
- Use update_column or skip validations outside migrations

## Quality gates
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

The Accessibility gate checks Celestial accessibility core v1.0 (WCAG 2.2 AA); it can change tool but is never skipped. Automated: A11Y-C1, A11Y-F1, A11Y-I1, A11Y-N1, A11Y-N2, A11Y-S1, A11Y-L2, A11Y-P1 (partly). Manual pass before release: A11Y-K1, A11Y-G1, A11Y-R1, A11Y-M1, A11Y-O1, A11Y-V1, A11Y-E1, A11Y-U1, A11Y-L1 — keyboard-only run, screen reader on each journey step, 200% zoom and 320px width, reduced motion, captions on any media. Requirement IDs come from the design and experience skills this code builds. This layer owns: **A11Y-F1** A visible focus indicator on every interactive element, never hidden behind sticky bars (WCAG 2.4.7, 2.4.11); **A11Y-R1** Text works at 200% zoom, at 320px width, with increased text spacing and in either orientation (WCAG 1.4.4, 1.4.10, 1.4.12, 1.3.4); **A11Y-M1** Motion respects the reduced-motion setting; anything moving for over 5 seconds can be paused; nothing flashes more than 3 times a second (WCAG 2.2.2, 2.3.1, 2.3.3 (AAA, advised)); **A11Y-O1** Tooltips and pop-overs shown on hover or focus can be dismissed, hovered and stay until dismissed (WCAG 1.4.13); **A11Y-I1** Images, icons and charts have text alternatives (empty for decoration); text is never an image (WCAG 1.1.1, 1.4.5); **A11Y-V1** Video and audio have captions, transcripts or audio description; nothing plays sound automatically for over 3 seconds (WCAG 1.2.1, 1.2.2, 1.2.3, 1.2.4, 1.2.5, 1.4.2); **A11Y-K1** Every action works by keyboard in a logical order, with no keyboard traps; single-key shortcuts can be turned off or remapped (WCAG 2.1.1, 2.1.2, 2.1.4, 2.4.3); **A11Y-G1** Nothing is drag-, gesture- or motion-only: each has a single tap or click alternative, and actions fire on release so they can be cancelled (WCAG 2.5.1, 2.5.2, 2.5.4, 2.5.7); **A11Y-N1** Every page has a clear title, headings, landmarks and a skip link, and can be found more than one way (WCAG 2.4.1, 2.4.2, 2.4.5, 2.4.6); **A11Y-N2** Controls have visible labels and instructions; links say where they go; the accessible name contains the visible label (WCAG 2.4.4, 2.5.3, 3.3.2); **A11Y-S1** Status, results and errors are announced to screen readers (WCAG 4.1.3); **A11Y-E2** Never ask for the same information twice in one flow; personal fields declare their purpose so they can be autofilled (WCAG 3.3.7, 1.3.5); **A11Y-U1** Focusing or changing a field never moves the person somewhere else or submits without warning (WCAG 3.2.1, 3.2.2); **A11Y-W1** Time limits warn first and can be extended (WCAG 2.2.1); **A11Y-L2** The page language, and any passage in another language, is declared in code (WCAG 3.1.1, 3.1.2); **A11Y-P1** Structure, order, names, roles and states are in the code: native elements first, ARIA only following the WAI-ARIA patterns (WCAG 1.3.1, 1.3.2, 4.1.2).

## Workflow
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

## Overrides of the engineering core
- Performance budget: Tighter JS budget: ≤ 60KB per page plus server p95 ≤ 300ms — Hotwire pages ship little JavaScript; server time dominates.

## Examples
### Scoped controller (`app/controllers/projects_controller.rb`)

```ruby
class ProjectsController < ApplicationController
  def show
    @project = Current.user.projects.find(params[:id])
  end

  def create
    @project = Current.user.projects.build(project_params)
    if @project.save
      redirect_to @project, notice: "Project created"
    else
      render :new, status: :unprocessable_entity
    end
  end

  private

  def project_params
    params.expect(project: [:name, :description])
  end
end
```

## Further reading
- [Ruby on Rails Guides](https://guides.rubyonrails.org/) — Conventions for models, controllers, security and testing.
- [Hotwire](https://hotwired.dev/) — Turbo and Stimulus concepts and reference.
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/) — Concrete guidance on input validation, authentication and session handling.
