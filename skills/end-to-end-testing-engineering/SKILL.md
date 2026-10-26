---
name: end-to-end-testing-engineering
description: "Engineering practice: End-to-end testing — Test whole user journeys through the real interface with stable selectors, event-based waits and isolated data, so the suite catches breakage without flaking. Use in any language or framework whenever this practice applies, and when reviewing work that should follow it."
type: engineering
stack: practice
core: "1.0"
checked: 2026-10-26
---

# End-to-end testing

Test whole user journeys through the real interface with stable selectors, event-based waits and isolated data, so the suite catches breakage without flaking.

Use this for the few journeys that must never break, such as sign-in, checkout or the core create-and-save flow, and for every experience-skill journey the engineering core requires. Done well it proves the parts work together; the rules here prevent the slow, flaky suites that teams learn to ignore.

## How to do it
1. **Choose the journeys** — List the user journeys that carry the most risk or value. Cover each with one happy-path test and one key error-state test; leave combinations to unit and integration tests.
2. **Seed isolated data** — Create the data each test needs through an API or fixture at the start of the test, with unique names per run. Never depend on data another test created or on shared staging records.
3. **Select by role and label** — Locate elements by accessible role, label or visible text. Add a dedicated test id only when no accessible name exists. Never select by CSS classes or DOM position.
4. **Wait for conditions, not time** — Use the runner's auto-waiting assertions to wait for an element, URL or network response. Remove every fixed sleep.
5. **Assert on what the user sees** — Check visible text, URLs and states the user relies on. Confirm persisted results through the UI or an API read, not by peeking at the database.
6. **Control the outside world** — Stub third-party services at the network boundary with recorded responses so tests do not depend on systems you do not own. Freeze the clock where dates matter.
7. **Run in CI against a preview** — Run the suite on every pull request against a fresh build or preview deployment, in parallel, with traces, screenshots and video kept on failure.
8. **Quarantine and fix flakes** — When a test fails intermittently, move it to a quarantine tag within a day, open an issue with the trace, and fix the cause rather than adding retries.

## Checklist
- [ ] Each critical journey has a happy-path and an error-state test
- [ ] No fixed sleeps or arbitrary timeouts remain in test code
- [ ] Selectors use roles, labels, text or dedicated test ids only
- [ ] Every test creates and cleans up its own data and can run alone or in parallel
- [ ] Third-party calls are stubbed at the network boundary
- [ ] Failures in CI keep a trace or video for diagnosis
- [ ] The suite passed ten consecutive runs without a flake before merge

## Rules
- Keep end-to-end tests to the journeys that matter; push detailed cases down to unit and integration tests. _(Every extra end-to-end test adds minutes and flake risk.)_
- Prefer role- and label-based selectors. _(If a test cannot find a control by its accessible name, a screen-reader user cannot either.)_
- Generate unique test data per run and never point tests at production. _(Shared data causes order-dependent failures and real-world side effects.)_
- Load test account credentials from CI secrets or environment variables, never from the repository. _(Test credentials in code leak and get reused.)_
- Keep the full suite under ten minutes in CI by running tests in parallel shards. _(Slow suites delay every merge and get disabled.)_

## Do
- Log in once per worker by saving authenticated state, then reuse it
- Use page or screen helper objects for flows repeated across tests
- Record traces on first retry so flakes come with evidence

## Don't
- Do not use fixed sleeps to wait for the app
- Do not chain tests so one depends on another's result
- Do not hide flakes with blanket retries

## Quality gates
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Journey tests | End-to-end runner (e.g. Playwright) in CI | All pass; flake rate under 1% over the last 50 runs | Every pull request |

## Workflow
**Review**
- Reject new tests that use sleeps, CSS-class selectors or shared data

**Definition of done**
- Journey covered with happy and error paths, green in CI, passing repeatedly in parallel

## Examples
### Stable journey test (`e2e/create-project.spec.ts`)

```typescript
import { test, expect } from '@playwright/test';

test('user creates a project and sees it in the list', async ({ page, request }) => {
  const name = `Project ${Date.now()}`;

  await page.goto('/projects');
  await page.getByRole('button', { name: 'New project' }).click();
  await page.getByLabel('Project name').fill(name);
  await page.getByRole('button', { name: 'Create' }).click();

  await expect(page).toHaveURL(/\/projects\/[\w-]+$/);
  await expect(page.getByRole('heading', { name })).toBeVisible();

  const res = await request.get(`/api/projects?name=${encodeURIComponent(name)}`);
  expect(res.ok()).toBeTruthy();
});

test('shows an error when the name is empty', async ({ page }) => {
  await page.goto('/projects/new');
  await page.getByRole('button', { name: 'Create' }).click();
  await expect(page.getByRole('alert')).toHaveText(/name is required/i);
});
```

## Further reading
- [Playwright documentation](https://playwright.dev/docs/intro) — Official guide to locators, auto-waiting, fixtures and traces.
- [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) — Engineering skills for coding agents that cover browser and end-to-end testing.
- [anthropics/skills](https://github.com/anthropics/skills) — Includes a skill for driving and testing web apps with a browser runner.

_Written for Celestial; the sources above inspired it._
