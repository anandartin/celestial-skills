# Interview

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
