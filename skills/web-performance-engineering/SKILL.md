---
name: web-performance-engineering
description: "Engineering practice: Web performance — Measure Core Web Vitals in the lab and the field, fix the biggest cause first and hold the line with budgets, so pages stay fast as features pile on. Use in any language or framework whenever this practice applies, and when reviewing work that should follow it."
type: engineering
stack: practice
core: "1.0"
checked: 2026-10-26
---

# Web performance

Measure Core Web Vitals in the lab and the field, fix the biggest cause first and hold the line with budgets, so pages stay fast as features pile on.

Use this when a page misses its LCP, INP or CLS target, when JavaScript per route grows past budget, or before launching a high-traffic page. It prevents slow, janky pages caused by unmeasured guesses, oversized bundles, render-blocking resources and layout shifts.

## How to do it
1. **Get field data first** — Collect real-user Core Web Vitals at the 75th percentile per page template and device class, using the web-vitals library or an existing real-user monitoring feed. Identify which metric and which template is failing.
2. **Reproduce in the lab** — Profile the failing template with Lighthouse and the browser performance panel on a throttled mid-range mobile profile. Record the baseline numbers and the trace so the fix can be compared.
3. **Fix LCP from the critical path** — Identify the LCP element. Make sure it is in the initial HTML, not injected by script; preload or give fetchpriority=high to the hero image; serve it in a modern format at the right size; cut server response time; remove render-blocking CSS and fonts from the critical path.
4. **Fix INP by shortening long tasks** — Find interactions with long input delay or processing time. Break work over 50ms into chunks that yield to the main thread, move heavy work off the main thread, debounce expensive handlers, and avoid large synchronous re-renders on input.
5. **Fix CLS by reserving space** — Set width and height or aspect-ratio on images, video and embeds; reserve space for ads, banners and late content; use font-display with matched fallback metrics; never insert content above existing content unless the user asked for it.
6. **Cut JavaScript per route** — Analyse the bundle, split code by route, lazy-load below-the-fold and rarely used features, remove unused dependencies and polyfills, and prefer server rendering for static content.
7. **Set budgets in CI** — Add a lab check and a bundle-size check that fail the pull request when a route goes over budget, so regressions are caught before merge.
8. **Confirm in the field** — After release, compare the 75th percentile field numbers against the baseline for at least a week before closing the work.

## Checklist
- [ ] Field p75 LCP ≤ 2.5s, INP ≤ 200ms and CLS ≤ 0.1 on the changed templates
- [ ] Lab baseline and after numbers are recorded in the pull request
- [ ] The LCP element is present in the initial HTML and prioritised
- [ ] No interaction handler runs a task longer than 200ms on the test device
- [ ] Images and embeds reserve their space
- [ ] JavaScript per route is within budget
- [ ] Budgets run in CI and fail on regression

## Rules
- Measure before and after every optimisation on the same device profile and record both numbers. _(Unmeasured fixes often make no difference or make things worse.)_
- Optimise for the 75th percentile of real users on mobile, not your development machine. _(That is where the slow experiences and the ranking signal live.)_
- Never lazy-load the LCP image. _(Lazy loading delays exactly the element the metric measures.)_
- Every new dependency added to a client bundle states its gzipped size in the pull request. _(Bundle growth is the slowest leak and the hardest to undo.)_
- Keep main-thread tasks under 50ms by yielding or moving work to a worker. _(Long tasks block input and drive up INP.)_

## Do
- Fix the single biggest contributor before tuning anything else
- Test on a throttled mid-range phone profile
- Use responsive images with srcset and sizes

## Don't
- Do not chase a perfect lab score while field data is still failing
- Do not ship a whole utility library for one function
- Do not insert banners or consent bars that push content down after load

## Quality gates
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Performance budget | Lighthouse CI + bundle size check | LCP ≤ 2.5s · INP proxy (TBT) ≤ 200ms · CLS ≤ 0.1 · ≤ 170KB gzipped JS per route | Every pull request |

## Workflow
**Review**
- Pull request includes lab before and after numbers for affected routes
- Bundle diff is reviewed for any route growing by more than 10KB

**Definition of done**
- Lab budget green in CI
- Field p75 confirmed within target one week after release

## Examples
### Report field vitals (`src/vitals.ts`)

```ts
import { onLCP, onINP, onCLS, type Metric } from 'web-vitals';

function send(metric: Metric) {
  const body = JSON.stringify({
    name: metric.name,
    value: metric.value,
    rating: metric.rating,
    page: location.pathname,
  });
  navigator.sendBeacon('/api/vitals', body);
}

onLCP(send);
onINP(send);
onCLS(send);
```

## Further reading
- [Web Vitals](https://web.dev/articles/vitals) — Definitions and thresholds for LCP, INP and CLS.
- [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) — Engineering skills for coding agents where web performance work is commonly described.
- [Lighthouse documentation](https://developer.chrome.com/docs/lighthouse/) — How the lab audits and Lighthouse CI budgets work.

_Written for Celestial; the sources above inspired it._
