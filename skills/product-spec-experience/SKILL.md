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
4. **Ask once: does the product have an AI assistant or agent?** If **no**, record "AI: none" in `PRODUCT.md`, skip the HAI matrix and the AI roles, build every journey from its *Without AI guidance* version (or ignore every "Agent and system (HAI)" block), and say so in the agent pointer. If **yes**, continue with the next step.
5. **Fill the HAI matrix.** For every agent step, keep the journey's Agent layer and add this product's System layer cells: data freshness and SLA, infrastructure, protocol, memory, sovereignty boundary and regulatory classification. Apply the HAI skill (`hai-experience`): no step above its stage's ceiling, Autonomous only where the System layer supports it, money, health and legal failures go to a person. Write it to `docs/product/hai-matrix.md`.
6. **Write `PRODUCT.md`** from [references/product-template.md](references/product-template.md). Give every target and product-level acceptance criterion an ID (`PRD-1`, `PRD-2`…) so engineering can trace it. Put long sections in `docs/product/` (`data-model.md`, `integrations.md`, `hai-matrix.md`).
7. **Point agents at it.** Add a short block to the project's `AGENTS.md` and/or `CLAUDE.md` (create them if missing) so every agent loads the spec first — see the template's last section.
8. **Hand over.** Stop at *what, why, for whom and to which targets*. The technical spec, architecture and task plan belong to the engineering skill — hand over to `spec-driven-development` (engineering practice), which traces the `PRD-` IDs into requirements, tasks, tests and pull requests.

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
- [references/example-refund-desk.md](references/example-refund-desk.md): a complete worked example — a refunds desk built from three support journeys.

Every journey's skill file has a **Building it into a product** section (data, systems, roles, default targets, required inputs): start the merge from those.

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
**AI in this product:** <yes — list the AI assistants and agents | none>. If none, write "AI: none — journeys are built without their HAI blocks" and leave the table out.

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

For a product with no AI, replace the HAI sentence with: "This product has no AI assistant or agent: ignore every 'Agent and system (HAI)' block in the journeys."

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
| 6 | Does the product have an AI assistant or agent? If yes, which roles does it play? | Ask — never assume. "No" means AI: none, no HAI matrix, and journeys built without their HAI blocks | Users and roles, HAI matrix |
| 6b | Who uses it? | The journeys' personas | Users and roles |
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

### references/example-refund-desk.md

### Worked example — PRODUCT.md for a refunds desk

What the Product spec skill writes for one product built from three Celestial journeys. The product, its systems and its numbers are illustrative; the structure is the point. Long sections would normally move to `docs/product/`.

```markdown
# Refunds desk — product spec

Version 1 · Owner: Head of Customer Support

## 1. Purpose and outcome
- **Problem:** customers wait days for refunds, and support leads re-read the same order history for every request.
- **Outcome that proves it worked:** three months after launch, 70% of refunds under the threshold are resolved without a person (PRD-6), and every refund decision is traceable to who prepared and who approved it (PRD-7).
- **Not in scope:** chargebacks raised through the card network; refunds for marketplace sellers.

## 2. Skills this product is built from
| Kind | Skill | Version | Notes |
|---|---|---|---|
| Experience | support-chat-ai-experience | 1.0 | Customers ask for a refund in chat |
| Experience | support-ticket-triage-experience | 1.0 | Requests from email and chat become labelled tickets |
| Experience | ai-refund-approval-experience | 1.0 | The support lead approves; the AI refunds agent runs small refunds |
| Design | <your brand>-design | — | Look and feel |
| Engineering | react-web-app-engineering | 1.0 | Console and chat widget |
| Practice | hai-experience | 1.0 | Agent and system design |

**Overrides**
| Skill | What changes | Why |
|---|---|---|
| support-chat-ai | The AI support assistant may submit refunds up to £30, not £50 | Finance set a lower limit for the first release |
| ai-refund-approval | Standing rules expire after 30 days | Leads must re-confirm them monthly at launch |

## 3. Users and roles
| Role | Who | Can | HAI mode (agents) | Accountable person |
|---|---|---|---|---|
| Customer | Anyone with an order | Ask in chat, verify identity, confirm a change, ask for a person, ask for a refusal to be reviewed | — | — |
| Support agent (person) | Support team | Confirm or correct triage, edit and send replies, take handovers | — | Team lead |
| Support lead | Team lead | Approve, edit or decline refunds within their limit; set, change or end standing rules; cancel or reverse refunds | — | Head of Customer Support |
| Senior approver | Support manager | Decide refunds above the lead's limit, complaints and legal threats | — | Head of Customer Support |
| Finance operations | Finance team | Take over failed or partial payments; reconcile | — | Finance lead |
| AI support assistant | In-chat AI | Answer, explain charges after verification, propose fixes for the customer to confirm, hand over | Advisory | Head of Customer Support |
| AI triage agent | Console AI | Suggest category, priority and team; draft replies from a named article | Advisory | Team lead |
| AI refunds agent | Console AI | Rank requests, draft decisions, run approved refunds and those inside standing rules | Autonomous within standing rules; never refuses a refund itself | Support lead |

## 4. Journeys and build order
| # | Journey | Covers | Release |
|---|---|---|---|
| 1 | ai-refund-approval | The lead's console: inbox, approve, run, report | First |
| 2 | support-ticket-triage | Email and chat requests become labelled refund tickets | First |
| 3 | support-chat-ai | Customers ask in chat; small refunds confirmed in chat | Later (release 2) |

## 5. Release scope
- **First release:** journeys 1 and 2, all roles except the AI support assistant, the order system, payment provider, ticketing system and audit log. Done means PRD-1 to PRD-9 pass.
- **Later:** journey 3 (chat), standing rules longer than 30 days, a second language.

## 6. Data model (conceptual; full detail in docs/product/data-model.md)
| Entity | Key fields | Relates to | Owner | Retention | Personal data |
|---|---|---|---|---|---|
| Customer | name, tier, contact history | Order, Ticket, Refund request | Support | Account life + legal minimum | Yes |
| Order | number, items, amount paid, payment reference (masked) | Customer, Payment, Refund request | Commerce | Legal minimum for accounting | Yes |
| Ticket | channel, text, category, priority, status, owner | Customer, Refund request, Reply | Support | Legal minimum | Yes |
| Refund request | amount, reason, risk score and reason, status | Order, Ticket, Decision | Support | Legal minimum | Yes |
| Decision | outcome, amount, drafted by, decided by, reasons, sources, confidence | Refund request, Refund run | Support | Legal minimum | Yes |
| Standing rule | amount cap, categories, expiry, set by, active | Refund run | Support lead | 6 years after expiry | No |
| Refund run | steps, status, payment reference, cancelled or reversed | Decision, Payment | Finance | Legal minimum for accounting | Yes |
| Audit event | actor (named AI agent or person), action, model version, confidence, time | every entity above | Compliance | Legal minimum (PRD-8) | Yes |

Merged from the journeys: "Customer" and "Ticket" appear in all three and are one entity each; "Bill" from the chat journey is the same thing as "Order" here.

## 7. Integrations (full detail in docs/product/integrations.md)
| System | Reads | Writes | Direction | Authorisation | When it's down |
|---|---|---|---|---|---|
| Order system | orders, payment history, tier | refund noted on the order | both | service account, read + refund-note scope | Inbox shows unranked with a banner; ops on-call after 2 retries |
| Payment provider | payment status, refund result | refund, reversal | both | restricted refund key held server-side | Abort before acting, keep the request; finance after 2 retries |
| Ticketing system | tickets, contacts | labels, owner, priority, closure | both | app integration, scoped to the refunds queue | Decisions kept in the console; tickets closed when it returns |
| Notification service | — | customer updates and refusal notices | out | API key held server-side | Queue the message, show it as pending |
| Audit log | actions for the report | every AI agent and person action | both | write-only from the app | Pause autonomous runs; alert compliance |

## 8. Targets
| ID | Area | Target | Source |
|---|---|---|---|
| PRD-1 | Performance | Approval view loads in ≤ 2 s at p95 | ai-refund-approval default |
| PRD-2 | Performance | AI triage suggestion within 3 s of arrival | support-ticket-triage default |
| PRD-3 | Speed | Median lead decision under 30 s | ai-refund-approval default |
| PRD-4 | Escalation | Money failures handed to a person immediately, after at most 2 retries | HAI rule |
| PRD-5 | Availability | Console 99.9% monthly | engineering default |
| PRD-6 | Outcome | 70% of under-threshold refunds resolved without a person | business |
| PRD-7 | Traceability | 100% of actions have an audit event naming the actor | HAI rule |
| PRD-8 | Retention | Audit records kept for the legal minimum for the jurisdiction (6 years in the UK for accounting records) | regulation |
| PRD-9 | Accessibility | WCAG 2.2 AA (Celestial accessibility core) | core |

## 9. Agents and systems (HAI; full matrix in docs/product/hai-matrix.md)
| Journey · step | Mode | Data freshness & SLA | Infrastructure | Protocol | Memory | Sovereignty boundary | Regulatory classification |
|---|---|---|---|---|---|---|---|
| Refund approval · Inbox | Advisory | orders ≤ 1 min old | cloud, UK region | MCP to order system | short-term queue; episodic: lead's past decisions | data and inference in the UK; no cross-border transfer of customer data | minimal risk; AI-made items labelled |
| Refund approval · Approve | Advisory | live order and payment data | cloud, UK region | MCP to order and payment systems | case + earlier contacts | as above | decision with financial effect: a person decides; notice, reasons and human review on refusal |
| Refund approval · Run | Autonomous within standing rules | payment status live; idempotent calls | cloud, UK region; retries idempotent | MCP to payment provider; A2A to verifier | run state only | as above; accountable entity: the retailer's UK company | financial transaction; audit trail for each AI agent |
| Ticket triage · Arrive | Advisory | ≤ 3 s after arrival | cloud, UK region | MCP to ticketing | procedural: team corrections | personal data masked before the model | minimal risk |

## 10. Jurisdictions and languages
- **Jurisdictions:** United Kingdom (UK GDPR, Consumer Duty, accounting record rules).
- **Languages:** English at launch.
- **Regulated decisions or data:** refund refusals (automated-decision safeguards apply to the AI drafts); payment data.

## 11. Measures
| Measure | Target | Rolls up | How measured |
|---|---|---|---|
| Refunds resolved without a person | 70% | auto-resolved (refund approval), resolved without a person (chat) | weekly from the audit log |
| Time to refund decision | median < 30 s | approval decision time | console events |
| Refusals reviewed on request | 100% within 5 working days | — | review queue |

## 12. Risks, assumptions, open questions
| Type | Item | Owner | Due |
|---|---|---|---|
| Risk | Customers read "agent" as a person — every label says "AI agent" | Content designer | Before launch |
| Assumption | The payment provider supports idempotent refund calls | Engineering lead | Sprint 1 |
| Open question | Do refunds over £500 need a second approver? | Finance lead | Before release 1 |

## 13. Release checklist
| ID | Product acceptance | Check |
|---|---|---|
| PRD-4 | A failed refund reaches finance with the partial state | Simulate a provider outage |
| PRD-7 | Every action in a test day has an audit event naming the actor | Audit report export |
| — | Each journey's accessibility and HAI checks pass | Journey Measures tabs |
| — | Engineering definition of done | react-web-app-engineering |
```

#### Agent pointer added to the repository's AGENTS.md

```markdown
## Product spec
Read `PRODUCT.md` before planning or building. It names the journeys, design skill and engineering skill
this product uses, the data model, integrations and targets (PRD- IDs). Agent steps follow the HAI skill
(`hai-experience`) and the matrix in `docs/product/hai-matrix.md`. Trace PRD- IDs into specs, tasks, tests
and pull requests. Don't change library skills — record differences as overrides in PRODUCT.md.
```
