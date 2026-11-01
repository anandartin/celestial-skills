---
name: terraform-infrastructure-engineering
description: "Engineering skill: Terraform infrastructure — how to build and ship a library with Terraform, HCL, terraform test. Use when writing, reviewing, testing or releasing code in this stack, and when turning a Celestial design or experience skill into code."
type: engineering
stack: library
core: "1.0"
checked: 2026-10-26
---

# Terraform infrastructure

Cloud infrastructure declared in Terraform, changed only through reviewed plans, with small state files and reusable modules.

For teams that manage networks, databases, queues, DNS and permissions as code across several environments. Changes are planned on every pull request and applied from CI after merge, never from a laptop.

## Stack
- **Language:** HCL Terraform 1.9+ — Declarative, diffable and readable in review.
- **Framework:** Terraform (or the compatible OpenTofu CLI) 1.9+ — Plan-then-apply makes every change visible before it happens.
- **State:** Remote state backend with locking, one state per environment and component — Small states plan fast and limit the blast radius of a mistake.
- **Data:** Pinned cloud providers provider major pinned with ~> — Provider upgrades become deliberate pull requests.
- **Build:** terraform plan saved to a file 1.9+ — The applied plan is exactly the one that was reviewed.
- **Hosting:** CI runner with short-lived cloud credentials via OIDC — No long-lived keys stored anywhere.
- **Package manager:** Terraform registry + .terraform.lock.hcl committed — Provider checksums are pinned per platform.
- **Testing:** terraform test 1.9+ — Native tests run plans against modules with mocked or real providers.
- **Testing:** TFLint ^0.53 — Catches invalid instance types, unused variables and provider-specific mistakes.
- **Testing:** Checkov or Trivy config scan — Flags public buckets, open security groups and unencrypted storage.

## Commands
- dev: `terraform plan -out=tfplan`
- lint: `terraform fmt -check -recursive && terraform validate && tflint --recursive`
- test: `terraform test`
- build: `terraform plan -out=tfplan -input=false`
- deploy: `terraform apply -input=false tfplan`
- install: `terraform init`

## Structure
- `modules/` — Reusable modules (network, database, service) with inputs, outputs and a README
- `modules/<name>/tests/` — *.tftest.hcl files exercising the module's variables and outputs
- `live/<env>/<component>/` — Root modules: one state per environment and component (e.g. live/prod/network)
- `live/<env>/<component>/backend.tf` — Remote state and locking configuration
- `live/<env>/<component>/versions.tf` — required_version and required_providers with pinned majors
- `.github/workflows/ or ci/` — Plan on pull request, apply on merge, drift check on schedule
- `policies/` — Config-scan rules and documented exceptions

## Naming
- Files: main.tf, variables.tf, outputs.tf, versions.tf, backend.tf; extra files named by resource group
- Tests: modules/<name>/tests/<case>.tftest.hcl
- Branches: type/env-short-description, e.g. feat/prod-read-replica
- Components: Resources and variables snake_case; resource name 'this' when a module has one of a kind

## From design and experience skills
This stack has no UI; design skills do not apply.

When a Celestial experience skill is in use, give each journey one end-to-end test (happy path plus its error and empty states) and name analytics events `object_action` from its measures.

## Conventions
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

## Do
- Post the plan output as a pull-request comment
- Tag every resource with owner, environment and cost centre through provider default tags
- Run a scheduled drift check and treat drift as a bug

## Don't
- Run apply from a laptop against shared environments
- Use count for sets of named things; use for_each with stable keys
- Edit resources in the cloud console that Terraform manages

## Quality gates
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

The Accessibility gate checks Celestial accessibility core v1.0 (WCAG 2.2 AA); it can change tool but is never skipped. Automated: A11Y-C1, A11Y-F1, A11Y-I1, A11Y-N1, A11Y-N2, A11Y-S1, A11Y-L2, A11Y-P1 (partly). Manual pass before release: A11Y-K1, A11Y-G1, A11Y-R1, A11Y-M1, A11Y-O1, A11Y-V1, A11Y-E1, A11Y-U1, A11Y-L1 — keyboard-only run, screen reader on each journey step, 200% zoom and 320px width, reduced motion, captions on any media. Requirement IDs come from the design and experience skills this code builds. This layer owns: **A11Y-F1** A visible focus indicator on every interactive element, never hidden behind sticky bars (WCAG 2.4.7, 2.4.11); **A11Y-R1** Text works at 200% zoom, at 320px width, with increased text spacing and in either orientation (WCAG 1.4.4, 1.4.10, 1.4.12, 1.3.4); **A11Y-M1** Motion respects the reduced-motion setting; anything moving for over 5 seconds can be paused; nothing flashes more than 3 times a second (WCAG 2.2.2, 2.3.1, 2.3.3 (AAA, advised)); **A11Y-O1** Tooltips and pop-overs shown on hover or focus can be dismissed, hovered and stay until dismissed (WCAG 1.4.13); **A11Y-I1** Images, icons and charts have text alternatives (empty for decoration); text is never an image (WCAG 1.1.1, 1.4.5); **A11Y-V1** Video and audio have captions, transcripts or audio description; nothing plays sound automatically for over 3 seconds (WCAG 1.2.1, 1.2.2, 1.2.3, 1.2.4, 1.2.5, 1.4.2); **A11Y-K1** Every action works by keyboard in a logical order, with no keyboard traps; single-key shortcuts can be turned off or remapped (WCAG 2.1.1, 2.1.2, 2.1.4, 2.4.3); **A11Y-G1** Nothing is drag-, gesture- or motion-only: each has a single tap or click alternative, and actions fire on release so they can be cancelled (WCAG 2.5.1, 2.5.2, 2.5.4, 2.5.7); **A11Y-N1** Every page has a clear title, headings, landmarks and a skip link, and can be found more than one way (WCAG 2.4.1, 2.4.2, 2.4.5, 2.4.6); **A11Y-N2** Controls have visible labels and instructions; links say where they go; the accessible name contains the visible label (WCAG 2.4.4, 2.5.3, 3.3.2); **A11Y-S1** Status, results and errors are announced to screen readers (WCAG 4.1.3); **A11Y-E2** Never ask for the same information twice in one flow; personal fields declare their purpose so they can be autofilled (WCAG 3.3.7, 1.3.5); **A11Y-U1** Focusing or changing a field never moves the person somewhere else or submits without warning (WCAG 3.2.1, 3.2.2); **A11Y-W1** Time limits warn first and can be extended (WCAG 2.2.1); **A11Y-L2** The page language, and any passage in another language, is declared in code (WCAG 3.1.1, 3.1.2); **A11Y-P1** Structure, order, names, roles and states are in the code: native elements first, ARIA only following the WAI-ARIA patterns (WCAG 1.3.1, 1.3.2, 4.1.2).

## Workflow
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

## Overrides of the engineering core
- gates.Unit and component tests: Replaced by terraform test on every module — There are no UI components; modules are the unit.
- gates.Journey tests: Not applicable — replaced by the reviewed plan and a post-apply no-change plan — No user journeys are built here.
- gates.Accessibility: Not applicable — No rendered UI.
- gates.Performance budget: Not applicable — plans per state should stay under 3 minutes as a guide — Web and mobile budgets do not apply to infrastructure code.
- gates.Preview deploy: Replaced by the plan comment and an apply to staging — Spinning up full infrastructure per pull request is slow and costly.
- rules.components: Not applicable — No design tokens.

## Examples
### Pinned versions and backend (`live/prod/network/versions.tf`)

```hcl
terraform {
  required_version = ">= 1.9, < 2.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  backend "s3" {
    bucket       = "example-tf-state-prod"
    key          = "network/terraform.tfstate"
    region       = "eu-west-1"
    use_lockfile = true
    encrypt      = true
  }
}
```

### Module test (`modules/bucket/tests/private.tftest.hcl`)

```hcl
variables {
  name        = "test-bucket"
  environment = "test"
}

run "bucket_is_private" {
  command = plan

  assert {
    condition     = aws_s3_bucket_public_access_block.this.block_public_acls == true
    error_message = "Bucket must block public ACLs."
  }
}
```

## Further reading
- [Terraform documentation](https://developer.hashicorp.com/terraform/docs) — Language reference, state, moved/import blocks and terraform test.
- [SLSA](https://slsa.dev/) — Hardening the CI path that applies infrastructure changes.
- [GitHub Actions documentation](https://docs.github.com/en/actions) — OIDC credentials and plan/apply workflows.
