# Worked example — PRODUCT.md for a refunds desk

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

## Agent pointer added to the repository's AGENTS.md

```markdown
## Product spec
Read `PRODUCT.md` before planning or building. It names the journeys, design skill and engineering skill
this product uses, the data model, integrations and targets (PRD- IDs). Agent steps follow the HAI skill
(`hai-experience`) and the matrix in `docs/product/hai-matrix.md`. Trace PRD- IDs into specs, tasks, tests
and pull requests. Don't change library skills — record differences as overrides in PRODUCT.md.
```
