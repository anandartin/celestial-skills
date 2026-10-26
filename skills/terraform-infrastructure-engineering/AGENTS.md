# AGENTS.md — Terraform infrastructure

Cloud infrastructure declared in Terraform, changed only through reviewed plans, with small state files and reusable modules.

## Setup and commands
- dev: `terraform plan -out=tfplan`
- lint: `terraform fmt -check -recursive && terraform validate && tflint --recursive`
- test: `terraform test`
- build: `terraform plan -out=tfplan -input=false`
- deploy: `terraform apply -input=false tfplan`
- install: `terraform init`

## Project structure
- `modules/` — Reusable modules (network, database, service) with inputs, outputs and a README
- `modules/<name>/tests/` — *.tftest.hcl files exercising the module's variables and outputs
- `live/<env>/<component>/` — Root modules: one state per environment and component (e.g. live/prod/network)
- `live/<env>/<component>/backend.tf` — Remote state and locking configuration
- `live/<env>/<component>/versions.tf` — required_version and required_providers with pinned majors
- `.github/workflows/ or ci/` — Plan on pull request, apply on merge, drift check on schedule
- `policies/` — Config-scan rules and documented exceptions

## Code style
- Files: main.tf, variables.tf, outputs.tf, versions.tf, backend.tf; extra files named by resource group
- Tests: modules/<name>/tests/<case>.tftest.hcl
- Branches: type/env-short-description, e.g. feat/prod-read-replica
- Components: Resources and variables snake_case; resource name 'this' when a module has one of a kind

### Code
- Prefer small, pure functions and explicit types at module boundaries. _(Easier to test, review and change.)_
- Use moved and import blocks for refactors instead of manual state commands. _(State changes go through review like any other change.)_
- Modules take explicit variables with types, descriptions and validation; no hard-coded account IDs or regions. _(The same module works in every environment.)_

### Components
- Components read design tokens; no raw hex values, pixel sizes or font names in component code. _(One token change restyles the product.)_

### Data
- Analytics events are object_action in snake_case and come from the experience skill’s measures. _(Names stay consistent across teams and tools.)_
- Set prevent_destroy on databases, buckets with data and DNS zones. _(A rename or bad refactor cannot silently delete stateful resources.)_

### Errors
- Every async action has loading, empty, error and success states, matching the experience skill. _(Unhandled states are where users get stuck.)_
- Any plan that destroys or replaces a resource needs an explicit note in the pull request and a second reviewer. _(Replacements are where outages and data loss start.)_

### Security
- Secrets never live in the repository; read them from the environment or a secret store. _(A leaked key outlives the commit that removed it.)_
- Validate every input on the server, even when the client already did. _(Clients can be bypassed.)_
- Web pages ship a Content-Security-Policy, HSTS, X-Frame-Options and nosniff. _(Cheap protection against the most common attacks.)_
- Never put secrets in .tf or .tfvars files; reference a secret manager and mark outputs sensitive. _(State and plan files are readable by anyone with access to them.)_
- Grant least privilege: CI's plan role is read-only; only the apply role on main can write. _(A malicious pull request cannot change infrastructure during plan.)_

### Accessibility
- Use native elements first; add ARIA only when no native element fits. _(Native controls bring keyboard and screen-reader support for free.)_

## Design and journeys
This stack has no UI; design skills do not apply.

When a Celestial experience skill is in use, give each journey one end-to-end test (happy path plus its error and empty states) and name analytics events `object_action` from its measures.

## Testing and checks (must pass before a pull request)
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Lint and types | terraform fmt + validate + TFLint | 0 errors; formatting clean | Every pull request |
| Unit and component tests | The stack’s test runner | All pass; every design-skill component state covered | Every pull request |
| Journey tests | End-to-end runner | One test per experience-skill journey: happy path + error state | Every pull request |
| Accessibility | Automated audit (axe on web, platform audit on mobile) | WCAG 2.2 AA · no new violations | Every pull request |
| Performance budget | Lab measurement in CI | Web: LCP ≤ 2.5s · INP ≤ 200ms · CLS ≤ 0.1 · ≤ 170KB JS per route. Mobile: cold start ≤ 2s · 60fps scroll | Every pull request |
| Dependency and secret scan | Checkov or Trivy config scan + secret scanner | No high or critical misconfigurations without a documented exception; no secrets | Every pull request and nightly |
| Preview deploy | Hosting preview environment | A working preview link on the pull request | Every pull request |
| Reviewed plan | terraform plan in CI, posted to the pull request | Plan succeeds; no unexpected destroy or replace; apply uses the saved plan | Every pull request and before every apply |

## Pull requests
- Branching: Trunk-based: one branch per change, merged after the plan is approved; main reflects what is deployed.

**Review checklist**
- Correctness: does it do what the issue asks, including edge cases?
- Readability: could a new teammate change it safely?
- Architecture: is it in the right place, with the right boundaries?
- Security: inputs, secrets, permissions, dependencies
- Performance: budgets, queries, bundle size
- Tests fail when the code is broken (flip a condition and re-run)
- Reviewer reads the plan, not only the diff, and counts creates, updates and destroys
- Changes to IAM, networking or data stores need a second reviewer

**Definition of done**
- Acceptance criteria met and demoed on the preview link
- Tests added for new behaviour and every state
- Accessibility and performance gates green
- Analytics events named from the experience skill
- Docs or changelog updated when behaviour changes
- Apply succeeded and a follow-up plan shows no changes
- Module README and variable descriptions updated

**Release**
- Small pull requests (aim for under 400 changed lines)
- CI green before review
- Squash-merge to main; main is always deployable
- Every release has a written rollback path
- Apply to staging first, then production from the same commit
- Tag module versions with semantic versioning and pin root modules to a version

**Incidents**
- Revert the commit and apply the previous configuration; restore stateful resources from backups if replaced
- Lock the affected state while investigating so no one applies over the fix

_Generated from the Celestial engineering skill “Terraform infrastructure” (engineering core v1.0, checked 2026-10-26)._
