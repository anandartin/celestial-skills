# AGENTS.md — Kubernetes with Helm

Services deployed to Kubernetes through versioned Helm charts with health probes, resource limits and safe rollouts by default.

## Setup and commands
- dev: `helm template charts/<service> -f environments/staging/<service>.yaml`
- lint: `helm lint charts/<service> -f environments/prod/<service>.yaml && helm template charts/<service> | kubeconform -strict -summary`
- test: `helm unittest charts/<service>`
- build: `helm package charts/<service>`
- deploy: `helm upgrade --install <service> charts/<service> -f environments/prod/<service>.yaml --atomic --wait --timeout 10m`
- install: `helm dependency build charts/<service>`

## Project structure
- `charts/<service>/Chart.yaml` — Chart metadata, version and appVersion
- `charts/<service>/values.yaml` — Safe defaults: probes on, limits set, one replica, no secrets
- `charts/<service>/values.schema.json` — Schema for every value the chart accepts
- `charts/<service>/templates/` — Deployment, Service, HPA, PodDisruptionBudget, NetworkPolicy and _helpers.tpl
- `charts/<service>/tests/` — helm-unittest suites for the templates
- `environments/<env>/<service>.yaml` — Per-environment overrides: replicas, image tag, resources, hostnames
- `charts/library/` — Shared library chart with the common labels and pod spec helpers

## Code style
- Files: kebab-case.yaml; templates named after the kind (deployment.yaml, service.yaml)
- Tests: charts/<service>/tests/<template>_test.yaml
- Branches: type/short-description, e.g. feat/api-hpa
- Components: Release and resource names kebab-case; standard app.kubernetes.io/* labels on every object

### Code
- Prefer small, pure functions and explicit types at module boundaries. _(Easier to test, review and change.)_
- Reference images by immutable tag or digest; never deploy latest. _(A rollback must return to exactly the bytes that ran before.)_

### Components
- Components read design tokens; no raw hex values, pixel sizes or font names in component code. _(One token change restyles the product.)_

### Data
- Analytics events are object_action in snake_case and come from the experience skill’s measures. _(Names stay consistent across teams and tools.)_
- Run database migrations as a separate pre-upgrade Job that is backward compatible with the running version. _(Old and new pods overlap during a rolling update.)_

### Errors
- Every async action has loading, empty, error and success states, matching the experience skill. _(Unhandled states are where users get stuck.)_
- Define readiness and liveness probes separately; liveness never checks downstream dependencies. _(A slow database should remove pods from traffic, not restart them in a loop.)_

### Security
- Secrets never live in the repository; read them from the environment or a secret store. _(A leaked key outlives the commit that removed it.)_
- Validate every input on the server, even when the client already did. _(Clients can be bypassed.)_
- Web pages ship a Content-Security-Policy, HSTS, X-Frame-Options and nosniff. _(Cheap protection against the most common attacks.)_
- Pods run as non-root with a read-only root filesystem, dropped capabilities and no privilege escalation. _(Limits what an attacker can do from a compromised container.)_
- Secrets come from an external secret store via a controller; values files never contain secret values. _(Values files are committed and rendered into logs.)_

### Performance
- Every container sets CPU and memory requests, and a memory limit sized from observed usage. _(The scheduler places pods correctly and one service cannot starve its neighbours.)_

### Accessibility
- Use native elements first; add ARIA only when no native element fits. _(Native controls bring keyboard and screen-reader support for free.)_

## Design and journeys
This stack has no UI; design skills do not apply.

When a Celestial experience skill is in use, give each journey one end-to-end test (happy path plus its error and empty states) and name analytics events `object_action` from its measures.

## Testing and checks (must pass before a pull request)
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Lint and types | helm lint + kubeconform -strict + values schema | 0 errors for every environment's values file | Every pull request |
| Unit and component tests | The stack’s test runner | All pass; every design-skill component state covered | Every pull request |
| Journey tests | End-to-end runner | One test per experience-skill journey: happy path + error state | Every pull request |
| Accessibility | Automated audit (axe on web, platform audit on mobile) | WCAG 2.2 AA · no new violations | Every pull request |
| Performance budget | Lab measurement in CI | Web: LCP ≤ 2.5s · INP ≤ 200ms · CLS ≤ 0.1 · ≤ 170KB JS per route. Mobile: cold start ≤ 2s · 60fps scroll | Every pull request |
| Dependency and secret scan | Image vulnerability scan + secret scanner over charts and values | No high or critical image findings without an exception; no secrets | Every pull request and nightly |
| Preview deploy | Hosting preview environment | A working preview link on the pull request | Every pull request |
| Policy check | Admission-policy rules run in CI (e.g. Kyverno or OPA CLI) against rendered manifests | No pod without limits, probes, non-root or pinned image | Every pull request |

## Pull requests
- Branching: Trunk-based; main describes what should run in each environment.

**Review checklist**
- Correctness: does it do what the issue asks, including edge cases?
- Readability: could a new teammate change it safely?
- Architecture: is it in the right place, with the right boundaries?
- Security: inputs, secrets, permissions, dependencies
- Performance: budgets, queries, bundle size
- Tests fail when the code is broken (flip a condition and re-run)
- Reviewer reads the rendered diff (helm diff or template output), not only the template change
- Changes to RBAC, NetworkPolicy or security context need a platform reviewer

**Definition of done**
- Acceptance criteria met and demoed on the preview link
- Tests added for new behaviour and every state
- Accessibility and performance gates green
- Analytics events named from the experience skill
- Docs or changelog updated when behaviour changes
- Chart renders and validates for every environment
- Rollout completed in staging with probes green and no restarts

**Release**
- Small pull requests (aim for under 400 changed lines)
- CI green before review
- Squash-merge to main; main is always deployable
- Every release has a written rollback path
- Upgrade with --atomic so a failed rollout reverts automatically
- Promote the same chart version and image digest from staging to production

**Incidents**
- helm rollback <service> <revision> to the last good release, then revert the commit so git matches
- Check events and pod restarts first: kubectl describe and recent logs for the failing revision

_Generated from the Celestial engineering skill “Kubernetes with Helm” (engineering core v1.0, checked 2026-10-26)._
