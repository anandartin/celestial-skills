---
name: dependency-supply-chain-engineering
description: "Engineering practice: Dependency and supply-chain hygiene — Know exactly what code you ship and where it came from, so a compromised or abandoned package cannot slip into production unnoticed. Use in any language or framework whenever this practice applies, and when reviewing work that should follow it."
type: engineering
stack: practice
core: "1.0"
checked: 2026-10-26
---

# Dependency and supply-chain hygiene

Know exactly what code you ship and where it came from, so a compromised or abandoned package cannot slip into production unnoticed.

Use this whenever a dependency is added, upgraded or removed, and as a standing setup for every repository and build pipeline. It prevents typosquatted or hijacked packages, unreviewed transitive upgrades, unreproducible builds and long-lived known vulnerabilities.

## How to do it
1. **Justify each new dependency** — Before adding a package, write in the pull request what it does, why a few lines of local code will not do, its licence, its maintenance activity and how many transitive packages it pulls in. Reject it if the answer is weak.
2. **Commit a lockfile and install from it** — Every repository commits its lockfile. CI installs with the frozen form of the command (npm ci, pnpm install --frozen-lockfile, pip install --require-hashes, cargo build --locked) so the build fails if the lockfile and manifest disagree.
3. **Pin build tools and actions** — Pin container base images by digest and CI actions by full commit SHA, not by floating tag. Pin the language runtime version in a version file.
4. **Audit on every change and nightly** — Run the ecosystem's audit (npm audit, pip-audit, cargo audit, govulncheck) and a dependency scanner in CI. Fail on high or critical findings that have a fixed version available.
5. **Automate small, regular upgrades** — Enable an update bot that opens grouped pull requests weekly. Merge patch and minor updates once tests pass; read the changelog for majors and check semver intent.
6. **Restrict install-time code** — Disable or allow-list package install scripts where the package manager supports it, and install from a single trusted registry or a proxy you control.
7. **Produce provenance and an SBOM** — Generate a software bill of materials for each release artefact and attach signed build provenance from CI so anyone can verify which source and workflow produced it.
8. **Remove what you no longer use** — Run an unused-dependency check each quarter and delete packages nothing imports.

## Checklist
- [ ] Lockfile is committed and CI installs in frozen mode
- [ ] New dependencies are justified in the pull request with licence and maintenance noted
- [ ] Base images are pinned by digest and CI actions by commit SHA
- [ ] Audit shows no high or critical findings with an available fix
- [ ] An update bot is enabled and its pull requests are not older than 30 days
- [ ] Release artefacts have an SBOM and signed provenance
- [ ] No unused dependencies remain in the manifest

## Rules
- Install only from the lockfile in CI and production builds; never resolve fresh versions at deploy time. _(A build that resolves at deploy time can pull a version nobody reviewed.)_
- Pin third-party CI actions and container images to immutable digests. _(Tags can be moved to point at malicious code after you reviewed them.)_
- Check package names character by character when adding them and prefer packages with an identifiable maintainer and history. _(Typosquatting relies on a one-letter slip.)_
- Prefer the standard library or a few lines of local code over a dependency for small utilities. _(Every package is code you ship and must keep patching.)_
- Check the install and bundle size impact of a new dependency before merging. _(Transitive trees grow quietly and slow every build and page load.)_

## Do
- Review lockfile diffs for unexpected new transitive packages
- Group routine upgrades so they land weekly rather than in one painful annual jump
- Keep a short list of approved packages for common needs

## Don't
- Do not use floating ranges like latest or * in manifests
- Do not suppress an audit finding without a written reason and expiry date
- Do not copy vendored code into the repository without recording its source and version

## Quality gates
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Dependency and secret scan | Ecosystem audit + dependency scanner + secret scanner | No high or critical findings with a fix available; no secrets; lockfile in sync with manifest | Every pull request and nightly |
| Release provenance | CI provenance and SBOM generation | Every release artefact has a signed provenance statement and an SBOM | Every release |

## Workflow
**Review**
- Read the lockfile diff, not just the manifest
- New dependency pull requests need a second reviewer

**Definition of done**
- Audit clean and lockfile committed
- SBOM and provenance attached to the release

## Examples
### Frozen install and audit in CI (`.github/workflows/deps.yml`)

```yaml
name: deps
on: [pull_request]
jobs:
  audit:
    runs-on: ubuntu-latest
    steps:
      # Pin actions to a full commit SHA in real use
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version-file: .nvmrc
      - run: npm ci --ignore-scripts
      - run: npm audit --audit-level=high
```

## Further reading
- [SLSA](https://slsa.dev/) — Levels and requirements for build provenance and tamper-resistant pipelines.
- [Semantic Versioning](https://semver.org/) — What major, minor and patch bumps promise, for deciding how to treat upgrades.
- [OWASP Top 10](https://owasp.org/www-project-top-ten/) — Covers vulnerable and outdated components and integrity failures as risk categories.
- [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) — Engineering skills for coding agents where dependency discipline is commonly described.

_Written for Celestial; the sources above inspired it._
