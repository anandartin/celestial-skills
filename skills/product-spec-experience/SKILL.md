---
name: product-spec-experience
type: experience
journey: practice
description: "Experience practice skill: Product spec — turn chosen Celestial experience skills (journeys), one design skill and one engineering skill into a single product spec, PRODUCT.md, in the user's own repository: purpose, users and roles (including AI agents), journey index and build order, release scope, data model, integrations, targets, measures, risks and the HAI agent-and-system matrix. Use when someone wants to build a whole product or solution from Celestial skills, asks for a PRD, product brief or requirements document, or combines several journeys. Hands over to the spec-driven-development engineering skill for the technical spec."
---

# Product spec

Celestial skills are reusable on purpose: a journey says how *any* refund approval should work, a design skill how a brand looks, an engineering skill how a stack is built. A real product needs one more thing, decided once for *this* product — what is being built, for whom, with which data and systems, to which targets. This skill writes that decision down as `PRODUCT.md` in the user's repository. It never edits the library skills.

| Lives in the library (reusable) | Lives in `PRODUCT.md` (this product only) |
|---|---|
| How each journey works, step by step | Which journeys this product has, in what order, and any overrides with a reason |
| The data a journey needs, conceptually | One merged data model, owners, retention, personal data |
| The systems a journey touches, generically | The real integrations: direction, authorisation, behaviour when down |
| Default targets with ranges | The product's chosen targets, each with an ID |
| HAI Agent layer per step | HAI System layer cells for this product: freshness, infrastructure, protocols, sovereignty, regulation |
| Brand (design skill), stack (engineering skill) | Which design skill and engineering skill this product pairs |

## How to do it

1. **Pick the skills.** Ask which journeys (experience skills) the product includes, which design skill gives the look and which engineering skill gives the stack. Record each by name and version. Suggest journeys from the library when the user describes the product in their own words.
2. **Interview, one question at a time.** Ask only what changes the spec, each with a recommended default the user can accept: purpose and the outcome that proves it worked; users and roles; first release versus later; jurisdictions and languages; regulated data or decisions. Stop when every section can be filled — don't ask what a journey already answers. See [references/interview.md](references/interview.md).
3. **Merge what the journeys declare.** Combine each journey's data needs, systems, roles, default targets and required inputs into one model. Where two journeys disagree (two meanings of "order", two retention periods), ask the user once and record the decision.
4. **Fill the HAI matrix.** For every agent step, keep the journey's Agent layer and add this product's System layer cells: data freshness and SLA, infrastructure, protocol, memory, sovereignty boundary and regulatory classification. Apply the HAI skill (`hai-experience`): no step above its stage's ceiling, Autonomous only where the System layer supports it, money, health and legal failures go to a person. Write it to `docs/product/hai-matrix.md`.
5. **Write `PRODUCT.md`** from [references/product-template.md](references/product-template.md). Give every target and product-level acceptance criterion an ID (`PRD-1`, `PRD-2`…) so engineering can trace it. Put long sections in `docs/product/` (`data-model.md`, `integrations.md`, `hai-matrix.md`).
6. **Point agents at it.** Add a short block to the project's `AGENTS.md` and/or `CLAUDE.md` (create them if missing) so every agent loads the spec first — see the template's last section.
7. **Hand over.** Stop at *what, why, for whom and to which targets*. The technical spec, architecture and task plan belong to the engineering skill — hand over to `spec-driven-development` (engineering practice), which traces the `PRD-` IDs into requirements, tasks, tests and pull requests.

## Rules

- **Never change a library skill to fit the product.** Record a product-specific difference as an override in `PRODUCT.md`, with the reason.
- **Targets come from the product, methods from engineering.** "Approvals load in under 2 seconds" and "keep audit records for 7 years" are product targets; how to meet them is the engineering skill's job. Where the product sets no target, the engineering skill's defaults apply; if a target can't be met on the chosen stack, the engineering skill must say so.
- **Data model stays conceptual.** Entities, key fields, relationships, owner, retention and which fields are personal data — no database types or table design.
- **Integrations are generic in the library, named in the product.** Record what is read and written, the direction, how access is authorised, and what the product does when the system is down.
- **Agents are roles.** Every AI agent appears in the users-and-roles table with what it may do, at which HAI mode, and who answers for it.
- **One checklist, no copies.** The release checklist lists product-level acceptance and links to each journey's checks and the engineering definition of done instead of repeating them.
- **Ask one question at a time, with a recommended default.** Never guess a regulated fact (jurisdiction, retention, who decides).

## Checklist

- [ ] Every journey, the design skill and the engineering skill named with a version
- [ ] Purpose, outcome and first-release scope agreed with the user
- [ ] Users and roles table includes every AI agent, with its HAI mode and the accountable person
- [ ] One merged data model: owners, retention, personal data marked
- [ ] Every integration: reads, writes, direction, authorisation, behaviour when down
- [ ] Every target and product acceptance criterion has a `PRD-` ID
- [ ] HAI matrix: System layer cells filled for every agent step; sovereignty boundary or "Non-sovereign — reason"
- [ ] Jurisdictions, languages and regulated decisions recorded
- [ ] Overrides of library skills listed with reasons
- [ ] `AGENTS.md` / `CLAUDE.md` point to `PRODUCT.md`
- [ ] Handed over to `spec-driven-development` for the technical spec

## Further detail

- [references/product-template.md](references/product-template.md): the `PRODUCT.md` template and the agent pointer block.
- [references/interview.md](references/interview.md): the questions, in order, with defaults.
- [references/merging-journeys.md](references/merging-journeys.md): how to combine journey data, systems, roles and targets, and resolve conflicts.

## Reference files

These files sit next to this SKILL.md in the download and the repository; their full text follows here so this file works on its own.

### references/product-template.md

### PRODUCT.md template

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

#### Agent pointer (add to `AGENTS.md` and/or `CLAUDE.md`)

```markdown
## Product spec
Read `PRODUCT.md` before planning or building. It names the journeys, design skill and engineering skill
this product uses, the data model, integrations and targets (PRD- IDs). Agent steps follow the HAI skill
(`hai-experience`) and the matrix in `docs/product/hai-matrix.md`. Trace PRD- IDs into specs, tasks, tests
and pull requests. Don't change library skills — record differences as overrides in PRODUCT.md.
```

### references/interview.md

### Interview

Ask one question at a time. Each comes with a recommended default the user can accept with "yes". Skip any question a chosen journey or the conversation already answers. Stop when every section of `PRODUCT.md` can be filled.

| # | Ask | Recommended default | Fills |
|---|---|---|---|
| 1 | What is the product, in a sentence, and who is it for? | — (always ask) | Purpose |
| 2 | Which journeys does it include? | The library journeys that match the description, listed for confirmation | Skills, journeys |
| 3 | Which design skill and engineering skill? | The ones already in the repository, or the closest match | Skills |
| 4 | What outcome would prove it worked, by when? | The chosen journeys' main measures, three months after launch | Outcome, measures |
| 5 | What's in the first release, and what waits? | The first journey end to end; the rest later | Release scope |
| 6 | Who uses it, and which AI agents act in it? | The journeys' personas, plus each agent step's agent | Users and roles |
| 7 | Where does it operate, and in which languages? | One jurisdiction, one language — ask which | Jurisdictions |
| 8 | Does it handle money, health data, credit, employment or other regulated decisions? | Inferred from the journeys — confirm | Regulation, HAI risk |
| 9 | Which existing systems must it connect to? | The journeys' generic systems, named — ask for each | Integrations |
| 10 | How long must records be kept, and who owns the data? | The legal minimum for the jurisdiction — confirm, never guess | Data model |
| 11 | Must data, compute or models stay in a jurisdiction? | Data and compute in the operating jurisdiction; model unrestricted unless regulated | HAI sovereignty boundary |
| 12 | Any targets already agreed (speed, availability, cost)? | The journeys' default targets | Targets |

Rules:
- Say why a question matters when it isn't obvious ("retention decides what the audit log must keep").
- When the user doesn't know, record it under open questions with an owner — don't invent an answer.
- Read back the merged decisions in one summary before writing the files.

### references/merging-journeys.md

### Merging journeys into one product

Each journey describes its own needs generically. The product spec merges them once.

#### What to collect from each journey

| From the journey | Look for | Goes to |
|---|---|---|
| Persona and roles | `persona`, `roles[]`, HAI agent types | Users and roles |
| Data | `data[]`, each step's HAI `system.data` | Data model |
| Systems | `systems[]`, technology inputs | Integrations |
| Targets | `targets[]`, `metrics[]` | Targets, measures |
| Required inputs | `inputs[]` | Release scope, open questions |
| Agent steps | each step's `hai` record | HAI matrix, users and roles |
| Risk | each step's HAI `system.risk`, domain rules | Jurisdictions and regulation |

Older journeys may not have `data[]`, `systems[]`, `roles[]`, `targets[]` or `inputs[]` yet. Derive them from the steps, domain rules and technology, and mark them as derived.

#### Merging

1. **Entities.** Same thing, same name: merge (one "Order", not "Order" and "Purchase"). Different things with the same name: rename one and say so. Keep the union of key fields.
2. **Owner and retention.** One owner per entity. When journeys imply different retention, take the longest a regulation requires, otherwise ask.
3. **Personal data.** Marked once per field; it drives the data-protection and sovereignty cells.
4. **Systems.** One row per real system, even if several journeys use it; list every read and write.
5. **Targets.** Where journeys give different defaults for the same measure, take the stricter one unless the user chooses otherwise. Give each a `PRD-` ID.
6. **Agents.** One row per agent role. If the same agent acts in several journeys, record its highest mode and the accountable person once; per-step modes stay in the HAI matrix.
7. **Ceilings.** If the product sets a lower HAI mode ceiling than a journey (for example, Advisory only at launch), record it as an override and lower every step above it.

#### Conflicts

Ask once, record the decision in `PRODUCT.md`, and note it under overrides when it changes a journey's behaviour. Typical conflicts:

- Two journeys need the same data with different freshness: take the fresher one and check the cost with the engineering skill.
- A journey step runs Autonomous but the product's regulation requires a human decision: lower it to Advisory and record why.
- A journey assumes a system the product doesn't have: record an open question or remove the step from the first release.
