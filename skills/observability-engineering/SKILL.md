---
name: observability-engineering
description: "Engineering practice: Observability — Structured logs, metrics and traces tied to user-facing objectives, with alerts that page only when users are affected. Use in any language or framework whenever this practice applies, and when reviewing work that should follow it."
type: engineering
stack: practice
core: "1.0"
checked: 2026-10-26
---

# Observability

Structured logs, metrics and traces tied to user-facing objectives, with alerts that page only when users are affected.

Use when building or operating any service that runs in production. It prevents finding outages from customer reports, alert floods that train people to ignore pages, and debugging sessions that start with no data.

## How to do it
1. **Name the user journeys and their objectives** — For each critical journey (sign in, checkout, search) define a service level indicator such as the share of requests that succeed under 500ms, and an objective such as 99.5% over 28 days.
2. **Instrument the four signals at every service edge** — Record request rate, error rate, latency distribution (histograms, not averages) and saturation (queue depth, pool usage, memory) for inbound and outbound calls.
3. **Emit structured logs** — Log JSON with timestamp, level, service, version, trace_id and an event name. Log decisions and failures, not every line executed. Strip personal data and secrets before writing.
4. **Propagate trace context** — Use OpenTelemetry SDKs, accept and forward the W3C traceparent header, and add spans around database queries, external calls and queue handoffs.
5. **Keep metric labels bounded** — Label by route template, method, status class and region. Never label by user ID, request ID or raw URL; put high-cardinality detail in traces and logs.
6. **Alert on objectives, not causes** — Page on error-budget burn rate (fast and slow windows). Route cause-level signals such as high CPU or a full disk to tickets or dashboards unless they directly threaten users.
7. **Attach a runbook to every page** — Each paging alert links a runbook: what it means, the dashboard to open, first checks, how to mitigate, who to escalate to.
8. **Review alerts monthly** — For every page in the last month, record whether it was actionable. Delete or demote any alert that fired without needing a human.

## Checklist
- [ ] Each critical journey has an SLI and an SLO written down
- [ ] Every service exports rate, errors, latency histograms and saturation
- [ ] Logs are structured JSON and include trace_id and service version
- [ ] Traces cross service boundaries without breaking
- [ ] Every paging alert is tied to user impact and links a runbook
- [ ] No metric uses an unbounded label
- [ ] Deploys are marked on dashboards so changes line up with graphs

## Rules
- Never log secrets, tokens, passwords, full card numbers or raw request bodies; redact at the logger, not at the call site. _(Logs are copied widely and kept long; one leaked token in a log is a breach.)_
- Sample traces by rule (keep all errors and slow requests, sample the rest) and set retention per signal. _(Keeps cost predictable without losing the data you need during incidents.)_
- Record an error once, at the boundary that handles it, with the cause chain attached. _(Logging the same failure at every layer multiplies noise and hides the origin.)_
- Metric and span names follow OpenTelemetry semantic conventions where one exists. _(Dashboards and queries work across services without per-team translation.)_
- Instrumentation is part of the feature: new endpoints ship with metrics, spans and a dashboard panel. _(Adding telemetry during an outage is too late.)_

## Do
- Use histograms for latency and alert on percentiles that reflect the SLO
- Include service version in every signal so regressions point at a release
- Test alerts by triggering them in staging before relying on them

## Don't
- Page someone for a symptom that heals itself within minutes
- Build dashboards of averages that hide the slowest users
- Leave debug-level logging on in production by default

## Quality gates
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Paging alert quality | Monthly alert review | ≥ 80% of pages were actionable; every page has a runbook link | Monthly |
| Instrumentation present | Pull request checklist + telemetry smoke test in staging | New routes emit request metrics and spans visible in staging | Every pull request adding a route or dependency |

## Workflow
**Review**
- Reviewer checks new log lines for personal data and new metrics for unbounded labels

**Definition of done**
- Dashboard panel and, for critical paths, SLO coverage exist for the new behaviour

## Examples
### Span and metric around an outbound call (`src/payments/client.ts`)

```ts
import { trace, metrics, SpanStatusCode } from '@opentelemetry/api';

const tracer = trace.getTracer('payments');
const latency = metrics.getMeter('payments').createHistogram('payments.charge.duration', { unit: 'ms' });

export async function charge(orderId: string, amountCents: number) {
  return tracer.startActiveSpan('payments.charge', async (span) => {
    const start = performance.now();
    let outcome = 'error';
    span.setAttribute('order.amount_cents', amountCents);
    try {
      const res = await fetch(`${process.env.PAYMENTS_URL}/charges`, {
        method: 'POST',
        body: JSON.stringify({ orderId, amountCents }),
      });
      span.setAttribute('http.response.status_code', res.status);
      outcome = res.ok ? 'success' : 'failure';
      return res;
    } catch (err) {
      span.recordException(err as Error);
      span.setStatus({ code: SpanStatusCode.ERROR });
      throw err;
    } finally {
      latency.record(performance.now() - start, { outcome });
      span.end();
    }
  });
}
```

## Further reading
- [OpenTelemetry documentation](https://opentelemetry.io/docs/) — SDKs, context propagation and semantic conventions.
- [Site Reliability Engineering (book)](https://sre.google/sre-book/table-of-contents/) — Chapters on service level objectives and monitoring distributed systems.
- [obra/superpowers](https://github.com/obra/superpowers) — Agent workflow skills, including systematic debugging that relies on good telemetry.

_Written for Celestial; the sources above inspired it._
