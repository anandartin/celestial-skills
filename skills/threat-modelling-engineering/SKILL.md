---
name: threat-modelling-engineering
description: "Engineering practice: Threat modelling — Spend thirty minutes before building a feature asking what could go wrong, so security controls are designed in rather than bolted on after launch. Use in any language or framework whenever this practice applies, and when reviewing work that should follow it."
type: engineering
stack: practice
core: "1.0"
checked: 2026-10-26
---

# Threat modelling

Spend thirty minutes before building a feature asking what could go wrong, so security controls are designed in rather than bolted on after launch.

Use this when a feature adds a new entry point, handles money, personal data or credentials, crosses a trust boundary, or lets one user affect another. A short written model names what is worth protecting, how it could be abused and which control stops each abuse, preventing design-level flaws that no amount of code review will catch later.

## How to do it
1. **Describe the feature in one diagram** — Draw the actors, processes, data stores and external services, and the arrows of data between them. Mark each trust boundary (browser to server, service to third party, tenant to tenant). Keep it to one page.
2. **List the assets** — Name what an attacker would want or what would hurt if lost: credentials, personal data, payment state, admin capability, availability, audit history. Rate each as high, medium or low impact.
3. **List the entry points** — For every arrow that crosses a trust boundary, write down the entry point: route, webhook, file upload, queue, admin tool, support process. Note who can reach it (anonymous, signed-in, internal, partner).
4. **Write abuse cases** — For each entry point, ask how each actor could spoof identity, tamper with data, deny having acted, read data they should not, exhaust resources or gain extra privilege. Write each as a sentence: 'A signed-in user changes the account id in the request to read another tenant's invoices.'
5. **Rank by likelihood and impact** — Score each abuse case low, medium or high on both axes. Anything high on either must have a mitigation before release; low-and-low cases can be accepted with a written reason.
6. **Choose a mitigation for each ranked case** — Name the specific control (object-level authorisation, rate limit, signed webhook, idempotency key, audit log, input schema) and where it lives in the code. Prefer controls the framework already provides.
7. **Turn mitigations into tickets and tests** — Each mitigation becomes an acceptance criterion with a test that exercises the abuse case. Link the tickets from the model.
8. **Revisit when the design changes** — Store the model next to the code (for example docs/threat-models/<feature>.md) and update it whenever a new entry point, data store or third party is added.

## Checklist
- [ ] A one-page diagram shows actors, data stores and trust boundaries
- [ ] Assets are listed with an impact rating
- [ ] Every boundary-crossing entry point is listed with who can reach it
- [ ] Each entry point has at least one written abuse case
- [ ] Every high-likelihood or high-impact case has a named mitigation
- [ ] Accepted risks have a written reason and an owner
- [ ] Mitigations are linked to tickets with tests that exercise the abuse case

## Rules
- Model before the first line of feature code for anything that crosses a trust boundary or handles sensitive data. _(Design flaws are cheap to fix on a whiteboard and expensive once data has shipped.)_
- Write abuse cases as concrete sentences naming the actor, the action and the asset. _(Vague threats produce vague controls that nobody can test.)_
- Every mitigation must point to a place in the code and a test that proves it works. _(A control that only exists in a document does not exist.)_
- Keep the model in the repository beside the feature and update it in the same pull request as design changes. _(A model that drifts from the system gives false confidence.)_
- Include availability abuse (floods, huge payloads, expensive queries) alongside data theft. _(Resource exhaustion is the easiest attack to launch and the one most often forgotten.)_

## Do
- Run the session with an engineer, a product owner and someone who did not build the feature
- Time-box the first pass to under an hour and refine later
- Include support and admin tools as entry points; they are often the weakest

## Don't
- Do not try to model the whole system at once; model the feature being built
- Do not stop at listing threats without assigning mitigations and owners
- Do not treat internal services as trusted by default

## Quality gates
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Threat model present | Pull request template check | Features that add an entry point or a sensitive data store link a threat model file | Before the feature's first pull request merges |

## Workflow
**Review**
- Reviewer confirms each abuse case marked high has a linked test
- Design review includes the diagram and the accepted-risk list

**Definition of done**
- Threat model committed and linked from the feature's tickets
- All high-ranked mitigations implemented and tested

## Further reading
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/) — Includes threat modelling guidance and the defences to pick as mitigations.
- [OWASP Top 10](https://owasp.org/www-project-top-ten/) — A starting list of abuse categories to test each entry point against.
- [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) — Open-source engineering skills for coding agents, including security planning before implementation.

_Written for Celestial; the sources above inspired it._
