---
name: kubernetes-helm-engineering
description: "Engineering skill: Kubernetes with Helm — how to build and ship a library with Helm, YAML + Go templates, helm lint + helm template. Use when writing, reviewing, testing or releasing code in this stack, and when turning a Celestial design or experience skill into code."
type: engineering
stack: library
core: "1.0"
checked: 2026-10-26
---

# Kubernetes with Helm

Services deployed to Kubernetes through versioned Helm charts with health probes, resource limits and safe rollouts by default.

For teams running several containerised services on a shared Kubernetes cluster who want one consistent way to package and release them. Charts live in git, values differ per environment, and releases are applied by CI or a GitOps controller rather than by hand.

## Stack
- **Language:** YAML + Go templates Kubernetes 1.30+ — Kubernetes manifests with templating for per-environment values.
- **Framework:** Helm ^3.16 — Packages manifests as a versioned chart with install, upgrade and rollback.
- **State:** Helm release history in the cluster + desired state in git — Git says what should run; release history allows instant rollback.
- **Data:** values.schema.json for chart inputs JSON Schema draft-07 — Invalid values fail at install time, not at runtime.
- **Build:** helm package + OCI registry push ^3.16 — Charts are immutable, versioned artifacts like container images.
- **Hosting:** Managed Kubernetes cluster per environment 1.30+ — Staging and production are isolated; upgrades are tested in staging first.
- **Package manager:** Helm dependencies with Chart.lock committed — Subchart versions are pinned.
- **Testing:** helm lint + helm template ^3.16 — Charts render for every values file before anything reaches a cluster.
- **Testing:** kubeconform ^0.6 — Rendered manifests are validated against the target Kubernetes API version.
- **Testing:** helm-unittest ^0.6 — Asserts that templates produce the expected probes, limits and labels.

## Commands
- dev: `helm template charts/<service> -f environments/staging/<service>.yaml`
- lint: `helm lint charts/<service> -f environments/prod/<service>.yaml && helm template charts/<service> | kubeconform -strict -summary`
- test: `helm unittest charts/<service>`
- build: `helm package charts/<service>`
- deploy: `helm upgrade --install <service> charts/<service> -f environments/prod/<service>.yaml --atomic --wait --timeout 10m`
- install: `helm dependency build charts/<service>`

## Structure
- `charts/<service>/Chart.yaml` — Chart metadata, version and appVersion
- `charts/<service>/values.yaml` — Safe defaults: probes on, limits set, one replica, no secrets
- `charts/<service>/values.schema.json` — Schema for every value the chart accepts
- `charts/<service>/templates/` — Deployment, Service, HPA, PodDisruptionBudget, NetworkPolicy and _helpers.tpl
- `charts/<service>/tests/` — helm-unittest suites for the templates
- `environments/<env>/<service>.yaml` — Per-environment overrides: replicas, image tag, resources, hostnames
- `charts/library/` — Shared library chart with the common labels and pod spec helpers

## Naming
- Files: kebab-case.yaml; templates named after the kind (deployment.yaml, service.yaml)
- Tests: charts/<service>/tests/<template>_test.yaml
- Branches: type/short-description, e.g. feat/api-hpa
- Components: Release and resource names kebab-case; standard app.kubernetes.io/* labels on every object

## From design and experience skills
This stack has no UI; design skills do not apply.

When a Celestial experience skill is in use, give each journey one end-to-end test (happy path plus its error and empty states) and name analytics events `object_action` from its measures.

## Conventions
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

## Do
- Add a PodDisruptionBudget for any service with more than one replica
- Handle SIGTERM and drain in-flight requests within terminationGracePeriodSeconds
- Bump the chart version on every template change and appVersion on every image change

## Don't
- kubectl edit or patch resources that a chart manages
- Put environment-specific logic in templates with if env == prod; use values
- Grant a service account cluster-wide permissions

## Quality gates
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

The Accessibility gate checks Celestial accessibility core v1.0 (WCAG 2.2 AA); it can change tool but is never skipped. Automated: A11Y-C1, A11Y-F1, A11Y-I1, A11Y-N1, A11Y-N2, A11Y-S1, A11Y-L2, A11Y-P1 (partly). Manual pass before release: A11Y-K1, A11Y-G1, A11Y-R1, A11Y-M1, A11Y-O1, A11Y-V1, A11Y-E1, A11Y-U1, A11Y-L1 — keyboard-only run, screen reader on each journey step, 200% zoom and 320px width, reduced motion, captions on any media. Requirement IDs come from the design and experience skills this code builds. This layer owns: **A11Y-F1** A visible focus indicator on every interactive element, never hidden behind sticky bars (WCAG 2.4.7, 2.4.11); **A11Y-R1** Text works at 200% zoom, at 320px width, with increased text spacing and in either orientation (WCAG 1.4.4, 1.4.10, 1.4.12, 1.3.4); **A11Y-M1** Motion respects the reduced-motion setting; anything moving for over 5 seconds can be paused; nothing flashes more than 3 times a second (WCAG 2.2.2, 2.3.1, 2.3.3 (AAA, advised)); **A11Y-O1** Tooltips and pop-overs shown on hover or focus can be dismissed, hovered and stay until dismissed (WCAG 1.4.13); **A11Y-I1** Images, icons and charts have text alternatives (empty for decoration); text is never an image (WCAG 1.1.1, 1.4.5); **A11Y-V1** Video and audio have captions, transcripts or audio description; nothing plays sound automatically for over 3 seconds (WCAG 1.2.1, 1.2.2, 1.2.3, 1.2.4, 1.2.5, 1.4.2); **A11Y-K1** Every action works by keyboard in a logical order, with no keyboard traps; single-key shortcuts can be turned off or remapped (WCAG 2.1.1, 2.1.2, 2.1.4, 2.4.3); **A11Y-G1** Nothing is drag-, gesture- or motion-only: each has a single tap or click alternative, and actions fire on release so they can be cancelled (WCAG 2.5.1, 2.5.2, 2.5.4, 2.5.7); **A11Y-N1** Every page has a clear title, headings, landmarks and a skip link, and can be found more than one way (WCAG 2.4.1, 2.4.2, 2.4.5, 2.4.6); **A11Y-N2** Controls have visible labels and instructions; links say where they go; the accessible name contains the visible label (WCAG 2.4.4, 2.5.3, 3.3.2); **A11Y-S1** Status, results and errors are announced to screen readers (WCAG 4.1.3); **A11Y-E2** Never ask for the same information twice in one flow; personal fields declare their purpose so they can be autofilled (WCAG 3.3.7, 1.3.5); **A11Y-U1** Focusing or changing a field never moves the person somewhere else or submits without warning (WCAG 3.2.1, 3.2.2); **A11Y-W1** Time limits warn first and can be extended (WCAG 2.2.1); **A11Y-L2** The page language, and any passage in another language, is declared in code (WCAG 3.1.1, 3.1.2); **A11Y-P1** Structure, order, names, roles and states are in the code: native elements first, ARIA only following the WAI-ARIA patterns (WCAG 1.3.1, 1.3.2, 4.1.2).

## Workflow
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

## Overrides of the engineering core
- gates.Unit and component tests: Replaced by helm-unittest suites on every template — Templates are the unit; there are no UI components.
- gates.Journey tests: Replaced by a post-deploy smoke test hitting each service's health and one real route — Journeys belong to the services; the chart must prove they start and serve.
- gates.Accessibility: Not applicable — No rendered UI.
- gates.Performance budget: Replaced by the requests and limits rule plus HPA targets — Capacity and resource use are the performance concerns for deployment config.
- gates.Preview deploy: Replaced by rendered-manifest diff on the pull request and an atomic staging upgrade — Per-pull-request clusters are rarely worth the cost for chart changes.
- rules.components: Not applicable — No design tokens.

## Examples
### Deployment pod spec (`charts/api/templates/deployment.yaml`)

```yaml
spec:
  template:
    spec:
      securityContext:
        runAsNonRoot: true
      containers:
        - name: {{ .Chart.Name }}
          image: "{{ .Values.image.repository }}@{{ .Values.image.digest }}"
          ports:
            - containerPort: {{ .Values.port }}
          readinessProbe:
            httpGet: { path: /readyz, port: {{ .Values.port }} }
            periodSeconds: 5
          livenessProbe:
            httpGet: { path: /healthz, port: {{ .Values.port }} }
            initialDelaySeconds: 10
          resources:
            {{- toYaml .Values.resources | nindent 12 }}
          securityContext:
            allowPrivilegeEscalation: false
            readOnlyRootFilesystem: true
            capabilities: { drop: [ALL] }
          envFrom:
            - secretRef:
                name: {{ include "api.fullname" . }}-secrets
```

## Further reading
- [Helm documentation](https://helm.sh/docs/) — Chart structure, templating functions and upgrade/rollback behaviour.
- [Kubernetes documentation](https://kubernetes.io/docs/home/) — Probes, resources, PodDisruptionBudgets and security contexts.
- [Twelve-Factor App](https://12factor.net/) — Disposable processes and config from the environment, which charts assume.
