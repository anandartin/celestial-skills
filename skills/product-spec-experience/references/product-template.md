# PRODUCT.md template

Copy into the root of the user's repository. Keep `PRODUCT.md` short; move long sections into `docs/product/`.

```markdown
# <Product name> — product spec

Version <n> · <date> · Owner <name>

## 1. Purpose and outcome
- **Problem:** <one paragraph, in the users' words>
- **Outcome that proves it worked:** <measurable, with a date>
- **Not in scope:** <what this product deliberately doesn't do>

## 2. Skills this product is built from
| Kind | Skill | Version | Notes |
|---|---|---|---|
| Experience | <journey-experience> | <v> | <why it's included> |
| Design | <brand-design> | <v> | |
| Engineering | <stack-engineering> | <v> | |
| Practice | hai-experience | <v> | Agent and system design |

**Overrides** (product-specific differences from a library skill):
| Skill | What changes | Why |
|---|---|---|

## 3. Users and roles
| Role | Who | Can | HAI mode (agents) | Accountable person |
|---|---|---|---|---|
| <person role> | <description> | <actions> | — | — |
| <agent name> | AI agent | <actions> | <Assistive / Advisory / Autonomous> | <role that answers for it> |

## 4. Journeys and build order
| # | Journey | Covers | Release |
|---|---|---|---|
| 1 | <journey> | <which part of the product> | First |

## 5. Release scope
- **First release:** <journeys, roles, integrations> — "done" means: <PRD IDs that must pass>
- **Later:** <list>

## 6. Data model
Conceptual only. Full detail: `docs/product/data-model.md`.
| Entity | Key fields | Relates to | Owner | Retention | Personal data |
|---|---|---|---|---|---|

## 7. Integrations
Full detail: `docs/product/integrations.md`.
| System | Reads | Writes | Direction | Authorisation | When it's down |
|---|---|---|---|---|---|

## 8. Targets
| ID | Area | Target | Source |
|---|---|---|---|
| PRD-1 | Performance | <e.g. approval view loads in ≤ 2 s at p95> | <journey default / business / regulation> |
| PRD-2 | Retention | <e.g. audit records kept 7 years> | |
| PRD-3 | Availability | | |
| PRD-4 | Security | | |
| PRD-5 | Accessibility | WCAG 2.2 AA (Celestial accessibility core) | Core |

## 9. Agents and systems (HAI)
Every agent step's System layer for this product. Full matrix: `docs/product/hai-matrix.md`.
| Journey · step | Mode | Data freshness & SLA | Infrastructure | Protocol | Memory | Sovereignty boundary | Regulatory classification |
|---|---|---|---|---|---|---|---|

## 10. Jurisdictions and languages
- **Jurisdictions:** <countries / blocs; which laws apply>
- **Languages:** <list>
- **Regulated decisions or data:** <e.g. refunds, health data, credit>

## 11. Measures
Product measures, with the journey measures that roll up into each.
| Measure | Target | Rolls up | How measured |
|---|---|---|---|

## 12. Risks, assumptions, open questions
| Type | Item | Owner | Due |
|---|---|---|---|

## 13. Release checklist
| ID | Product acceptance | Check |
|---|---|---|
| PRD-<n> | <criterion> | <how> |

Also required: each journey's accessibility and HAI checks, and the engineering skill's definition of done.
```

## Agent pointer (add to `AGENTS.md` and/or `CLAUDE.md`)

```markdown
## Product spec
Read `PRODUCT.md` before planning or building. It names the journeys, design skill and engineering skill
this product uses, the data model, integrations and targets (PRD- IDs). Agent steps follow the HAI skill
(`hai-experience`) and the matrix in `docs/product/hai-matrix.md`. Trace PRD- IDs into specs, tasks, tests
and pull requests. Don't change library skills — record differences as overrides in PRODUCT.md.
```
