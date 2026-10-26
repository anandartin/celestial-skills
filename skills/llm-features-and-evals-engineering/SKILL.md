---
name: llm-features-and-evals-engineering
description: "Engineering practice: LLM features and evals — Build features on large language models with versioned prompts, an evaluation set that gates every change, guardrails and cost and latency budgets, so quality is measured instead of hoped for. Use in any language or framework whenever this practice applies, and when reviewing work that should follow it."
type: engineering
stack: practice
core: "1.0"
checked: 2026-10-26
---

# LLM features and evals

Build features on large language models with versioned prompts, an evaluation set that gates every change, guardrails and cost and latency budgets, so quality is measured instead of hoped for.

Use this whenever a product feature calls a language model to generate, classify, extract or act. Treating prompts as code and outputs as something to measure prevents silent quality regressions after a prompt or model change, unsafe outputs reaching users, and runaway cost or latency.

## How to do it
1. **Define the task and success** — Write what the feature must produce, for which inputs, and how a good answer differs from a bad one. Turn that into measurable criteria: exact match, schema validity, rubric score or human rating.
2. **Build an evaluation set first** — Collect 30 to 100 realistic inputs, including edge cases, adversarial inputs and known past failures, each with an expected output or grading rubric. Store it in the repository.
3. **Keep prompts as versioned code** — Store prompts in files next to the code with variables for inputs, review them in pull requests, and log the prompt version with every request.
4. **Constrain the output** — Ask for structured output against a schema, validate it in code, and handle invalid responses with one retry and then a defined fallback.
5. **Add guardrails** — Treat model output as untrusted input: validate, escape and authorise before acting on it. Separate system instructions from user content, limit which tools the model may call, and filter for unsafe content where the domain requires.
6. **Set cost and latency budgets** — Set a maximum tokens per request, cost per request and p95 latency. Choose the smallest model that passes the evals, cache repeated context, and stream responses where users wait.
7. **Gate changes on evals** — Run the evaluation set in CI on every prompt, model or parameter change and compare against the last accepted baseline. Block merges that drop the score beyond the agreed tolerance.
8. **Monitor in production** — Log inputs, outputs, prompt version, tokens, cost and latency with personal data removed. Sample outputs for review and add real failures to the evaluation set.

## Checklist
- [ ] An evaluation set with edge and adversarial cases lives in the repository
- [ ] The eval score meets the baseline for the current prompt and model
- [ ] Prompts are versioned files and the version is logged per request
- [ ] Model output is schema-validated and never executed or rendered unescaped
- [ ] Cost per request and p95 latency are within the stated budgets
- [ ] A fallback exists for model errors, timeouts and invalid output
- [ ] API keys come from environment variables or a secret store

## Rules
- Treat everything the model returns, and everything it reads from users or documents, as untrusted. _(Prompt injection turns any text the model sees into a possible instruction.)_
- Give model-driven tools the narrowest permissions and require confirmation for irreversible actions. _(A misled model can only do damage its tools allow.)_
- Remove or mask personal data before logging prompts and outputs. _(Logs are retained and widely accessible.)_
- Enforce a timeout and maximum output tokens on every model call. _(Unbounded calls create unbounded cost and hung requests.)_
- Show a clear, honest state when the model fails or is unsure, and let the user retry or continue without it. _(Users need a way forward when generation fails.)_
- Never change a prompt, model or temperature without re-running the evaluation set. _(Small wording changes can shift behaviour across many inputs.)_

## Do
- Start with the simplest prompt and add instructions only when an eval case fails
- Pin model versions explicitly and upgrade them like any dependency
- Use a second model or rubric grader only after checking it agrees with human ratings

## Don't
- Do not ship a prompt change judged on a handful of manual tries
- Do not pass raw model output into SQL, shell commands, HTML or file paths
- Do not put API keys in client-side code

## Quality gates
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Eval regression | Evaluation harness in CI | Score at or above baseline minus 2 points; 0 schema failures; 0 safety failures | Every pull request changing a prompt, model or parameter |
| Cost and latency budget | Eval run metrics | Mean cost and p95 latency per request within the feature's stated budget | Every pull request changing a prompt, model or parameter |

## Workflow
**Review**
- Compare eval results against baseline and read a sample of changed outputs
- Check output handling for injection paths into tools, queries or rendering

**Definition of done**
- Eval and budget gates green, production logging and fallback in place

## Examples
### Minimal eval runner (`evals/run.ts`)

```typescript
import { readFileSync } from 'node:fs';
import { classifyTicket } from '../src/ai/classify';

type Case = { input: string; expected: string };
const cases: Case[] = JSON.parse(readFileSync('evals/classify.cases.json', 'utf8'));
const baseline = Number(process.env.EVAL_BASELINE ?? '0.90');

let pass = 0;
let totalMs = 0;
for (const c of cases) {
  const t0 = performance.now();
  const out = await classifyTicket(c.input); // validates against a schema
  totalMs += performance.now() - t0;
  if (out.label === c.expected) pass++;
  else console.log(`MISS: ${c.input.slice(0, 60)} -> ${out.label} (want ${c.expected})`);
}

const score = pass / cases.length;
console.log(`score=${score.toFixed(3)} avgMs=${Math.round(totalMs / cases.length)}`);
if (score < baseline - 0.02) {
  console.error(`Below baseline ${baseline}`);
  process.exit(1);
}
```

## Further reading
- [anthropics/skills](https://github.com/anthropics/skills) — Public skills repository with examples of building on language models and their APIs.
- [openai/skills](https://github.com/openai/skills) — A catalogue of agent skills that includes model-integration tasks.
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/) — Input handling and injection-prevention guidance that applies to model output.

_Written for Celestial; the sources above inspired it._
