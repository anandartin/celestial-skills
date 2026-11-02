# Merging journeys into one product

Each journey describes its own needs generically. The product spec merges them once.

## What to collect from each journey

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

## Merging

1. **Entities.** Same thing, same name: merge (one "Order", not "Order" and "Purchase"). Different things with the same name: rename one and say so. Keep the union of key fields.
2. **Owner and retention.** One owner per entity. When journeys imply different retention, take the longest a regulation requires, otherwise ask.
3. **Personal data.** Marked once per field; it drives the data-protection and sovereignty cells.
4. **Systems.** One row per real system, even if several journeys use it; list every read and write.
5. **Targets.** Where journeys give different defaults for the same measure, take the stricter one unless the user chooses otherwise. Give each a `PRD-` ID.
6. **Agents.** One row per agent role. If the same agent acts in several journeys, record its highest mode and the accountable person once; per-step modes stay in the HAI matrix.
7. **Ceilings.** If the product sets a lower HAI mode ceiling than a journey (for example, Advisory only at launch), record it as an override and lower every step above it.

## Conflicts

Ask once, record the decision in `PRODUCT.md`, and note it under overrides when it changes a journey's behaviour. Typical conflicts:

- Two journeys need the same data with different freshness: take the fresher one and check the cost with the engineering skill.
- A journey step runs Autonomous but the product's regulation requires a human decision: lower it to Advisory and record why.
- A journey assumes a system the product doesn't have: record an open question or remove the step from the first release.
