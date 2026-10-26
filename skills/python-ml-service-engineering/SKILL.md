---
name: python-ml-service-engineering
description: "Engineering skill: Python ML service — how to build and ship a api / service with PyTorch + FastAPI, Python, pytest. Use when writing, reviewing, testing or releasing code in this stack, and when turning a Celestial design or experience skill into code."
type: engineering
stack: api
core: "1.0"
checked: 2026-10-26
---

# Python ML service

Reproducible PyTorch training with versioned model artifacts, served behind a small typed HTTP API with evaluation gates.

For teams that train their own models (classifiers, rankers, embedding models) and expose them to other services over HTTP. Training runs as a job that writes a versioned artifact; the inference service is a container that loads one pinned artifact and scales horizontally.

## Stack
- **Language:** Python 3.12+ — The ecosystem for training, evaluation and serving lives here.
- **Framework:** PyTorch + FastAPI PyTorch 2.x · FastAPI ^0.115 — PyTorch for training and inference; FastAPI for a typed, documented HTTP layer.
- **State:** Model loaded once at startup, held in app state — Requests never pay the load cost; the service is otherwise stateless.
- **Data:** Pydantic schemas + versioned datasets and artifacts in object storage Pydantic ^2 — Request shapes are validated; every model traces back to its exact data and code.
- **Build:** Docker multi-stage image — Same runtime in CI, staging and production; CPU and GPU images from one Dockerfile.
- **Hosting:** Container platform with autoscaling, training on scheduled GPU jobs — Serving and training scale independently.
- **Package manager:** uv with a lock file ^0.5 — Fast, reproducible installs; the lock pins every transitive version.
- **Testing:** pytest ^8 — Unit tests for features and transforms, API tests with the test client.
- **Testing:** Hypothesis ^6 — Property tests catch preprocessing edge cases: empty strings, NaN, huge inputs.
- **Testing:** Evaluation suite on a frozen holdout set — A model ships only if it beats the current one on agreed metrics.

## Commands
- dev: `uv run fastapi dev src/pkg/serve/app.py`
- lint: `uv run ruff check . && uv run ruff format --check . && uv run mypy src`
- test: `uv run pytest`
- build: `docker build -t ml-service .`
- deploy: `uv run python -m pkg.train --config configs/current.yaml && uv run python eval/run.py`
- install: `uv sync`

## Structure
- `src/<pkg>/data/` — Dataset loading, splits and preprocessing shared by training and serving
- `src/<pkg>/model/` — nn.Module definitions and the predict() function
- `src/<pkg>/train/` — Training entry point, config schema, metrics logging and artifact writing
- `src/<pkg>/serve/` — FastAPI app, request/response schemas, health and readiness routes
- `configs/` — Versioned training configs; one file per experiment that shipped
- `eval/` — Evaluation scripts, metric thresholds and the frozen holdout manifest
- `tests/` — Unit, property and API tests; a tiny fixture model for fast runs

## Naming
- Files: snake_case.py; one module per concern
- Tests: tests/test_<module>.py; eval checks in eval/test_thresholds.py
- Branches: type/short-description, e.g. exp/larger-tokenizer or fix/batch-padding
- Components: Classes PascalCase, functions snake_case; artifacts <model>-<semver>-<git-sha>

## From design and experience skills
This stack has no UI; design skills do not apply.

When a Celestial experience skill is in use, give each journey one end-to-end test (happy path plus its error and empty states) and name analytics events `object_action` from its measures.

## Conventions
### Code
- Prefer small, pure functions and explicit types at module boundaries. _(Easier to test, review and change.)_
- Training and serving import the same preprocessing functions; never reimplement them in the API. _(Train/serve skew is the quietest way a model degrades.)_

### Components
- Components read design tokens; no raw hex values, pixel sizes or font names in component code. _(One token change restyles the product.)_

### Data
- Analytics events are object_action in snake_case and come from the experience skill’s measures. _(Names stay consistent across teams and tools.)_
- Every artifact records the git SHA, config, dataset version, random seed and evaluation scores. _(Any prediction can be traced and any model rebuilt.)_
- The holdout set is frozen and never used for training, tuning or early stopping. _(A leaked holdout makes every evaluation look better than reality.)_

### Errors
- Every async action has loading, empty, error and success states, matching the experience skill. _(Unhandled states are where users get stuck.)_
- Validate input size and type at the API boundary; return 422 with a field-level message and never pass unchecked tensors to the model. _(Bad input should fail fast and clearly, not crash a worker.)_

### Security
- Secrets never live in the repository; read them from the environment or a secret store. _(A leaked key outlives the commit that removed it.)_
- Validate every input on the server, even when the client already did. _(Clients can be bypassed.)_
- Web pages ship a Content-Security-Policy, HSTS, X-Frame-Options and nosniff. _(Cheap protection against the most common attacks.)_
- Load weights with torch.load(weights_only=True) or safetensors, and only from your own artifact store. _(Pickled files can execute arbitrary code when loaded.)_

### Performance
- Run inference under torch.inference_mode() and batch requests when the model benefits; measure p95 latency per batch size. _(Cuts memory and latency without changing outputs.)_

### Accessibility
- Use native elements first; add ARIA only when no native element fits. _(Native controls bring keyboard and screen-reader support for free.)_

## Do
- Pin seeds and log them so a training run can be repeated
- Expose /healthz for liveness and /readyz that returns 200 only after the model is loaded
- Log model version with every prediction so incidents can be traced to an artifact

## Don't
- Commit model weights or datasets to git
- Train in a notebook and ship the notebook state
- Swap the served model without running the evaluation gate

## Quality gates
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Lint and types | The stack’s linter and type checker | 0 errors | Every pull request |
| Unit and component tests | The stack’s test runner | All pass; every design-skill component state covered | Every pull request |
| Journey tests | End-to-end runner | One test per experience-skill journey: happy path + error state | Every pull request |
| Accessibility | Automated audit (axe on web, platform audit on mobile) | WCAG 2.2 AA · no new violations | Every pull request |
| Performance budget | Load test against the built container | p95 latency ≤ 150ms at target RPS on the production instance type; memory within limit | Every pull request that changes model or serving code |
| Dependency and secret scan | pip-audit + secret scanner + image scan | No high or critical findings; no secrets; no unsafe pickle loads | Every pull request and nightly |
| Preview deploy | Hosting preview environment | A working preview link on the pull request | Every pull request |
| Model evaluation | eval/run.py against the frozen holdout | Primary metric ≥ current production model; no slice drops more than 2 points | Before any artifact is promoted |

## Workflow
- Branching: Trunk-based for code; experiments on exp/ branches that merge only when a model ships.

**Review checklist**
- Correctness: does it do what the issue asks, including edge cases?
- Readability: could a new teammate change it safely?
- Architecture: is it in the right place, with the right boundaries?
- Security: inputs, secrets, permissions, dependencies
- Performance: budgets, queries, bundle size
- Tests fail when the code is broken (flip a condition and re-run)
- Reviewer reads the evaluation report, including per-slice metrics, not only the headline number
- Changes to preprocessing require a test proving training and serving produce identical features

**Definition of done**
- Acceptance criteria met and demoed on the preview link
- Tests added for new behaviour and every state
- Accessibility and performance gates green
- Analytics events named from the experience skill
- Docs or changelog updated when behaviour changes
- Artifact registered with lineage metadata and evaluation report
- API schema and example request updated when inputs or outputs change

**Release**
- Small pull requests (aim for under 400 changed lines)
- CI green before review
- Squash-merge to main; main is always deployable
- Every release has a written rollback path
- Promote an artifact by changing one pinned version; roll out with a canary that compares outputs to the current model
- Keep the previous artifact warm for instant rollback

**Incidents**
- Roll back by repinning the previous artifact version
- Capture the failing inputs into a regression set before retraining

## Overrides of the engineering core
- gates.Journey tests: Replaced by API contract tests: one per route, happy path plus a 422 validation case — The service has no screens; its journeys are requests.
- gates.Accessibility: Not applicable — No rendered UI.
- gates.Performance budget: Replaced by p95 inference latency and memory limits — Web vitals do not apply to an HTTP model server.
- gates.Preview deploy: Replaced by a staging deployment with the candidate artifact and a shadow comparison — Model changes are judged on live-shaped traffic, not a link.
- rules.components: Not applicable — No design tokens.

## Examples
### Inference API (`src/pkg/serve/app.py`)

```python
import os
from contextlib import asynccontextmanager

import torch
from fastapi import FastAPI
from pydantic import BaseModel, Field

from pkg.data.preprocess import encode
from pkg.model.load import load_model


class PredictIn(BaseModel):
    text: str = Field(min_length=1, max_length=4000)


class PredictOut(BaseModel):
    label: str
    score: float
    model_version: str


@asynccontextmanager
async def lifespan(app: FastAPI):
    app.state.model, app.state.version = load_model(os.environ["MODEL_URI"])
    yield


app = FastAPI(lifespan=lifespan)


@app.post("/predict", response_model=PredictOut)
def predict(body: PredictIn) -> PredictOut:
    with torch.inference_mode():
        label, score = app.state.model.predict(encode(body.text))
    return PredictOut(label=label, score=score, model_version=app.state.version)
```

## Further reading
- [PyTorch documentation](https://pytorch.org/docs/stable/) — inference_mode, safe loading and model export options.
- [FastAPI documentation](https://fastapi.tiangolo.com/) — Lifespan events, request validation and testing the app.
- [Twelve-Factor App](https://12factor.net/) — Config and artifact location from the environment, stateless processes.
