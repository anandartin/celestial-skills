---
name: chrome-extension-engineering
description: "Engineering skill: Browser extension (Manifest V3) — how to build and ship a web app with WebExtension APIs on Manifest V3, with Preact for popup and options UI, TypeScript, CSS variables; content-script UI inside a shadow root, Vitest. Use when writing, reviewing, testing or releasing code in this stack, and when turning a Celestial design or experience skill into code."
type: engineering
stack: web-app
core: "1.0"
checked: 2026-10-26
---

# Browser extension (Manifest V3)

A Manifest V3 browser extension in TypeScript: an event-driven service worker, isolated content scripts and a popup, asking for the fewest permissions that do the job.

For tools that live beside the user's browsing: page annotators, form helpers, reading tools, companions for a web product. A service worker handles events and storage, content scripts touch pages inside a shadow root, and the popup and options pages are small web apps. Builds are zipped in CI and submitted to the browser extension stores.

## Stack
- **Language:** TypeScript ^5.6 — Typed messages between the service worker, content scripts and UI pages.
- **Framework:** WebExtension APIs on Manifest V3, with Preact for popup and options UI MV3 · Preact ^10 — MV3 is required by the stores; Preact keeps UI bundles small.
- **Styling:** CSS variables; content-script UI inside a shadow root — Host-page styles cannot leak in, and extension styles cannot break the page.
- **State:** chrome.storage (local, sync, session) as the source of truth + typed message passing — The service worker can stop at any time; in-memory state does not survive.
- **Data:** Typed fetch from the service worker to the product API — Network calls and credentials stay out of content scripts.
- **Build:** Vite with one entry per extension context ^7 — Separate bundles for worker, content scripts and pages; no runtime code loading.
- **Hosting:** Browser extension stores; zipped build uploaded from CI — Store review requires a versioned package built from tagged source.
- **Package manager:** pnpm ^10 — Fast, strict installs.
- **Testing:** Vitest ^3 — Unit tests for message handlers and storage logic with the chrome API mocked.
- **Testing:** Testing Library (Preact) ^3 — Popup and options tests by role and label.
- **Testing:** Playwright ^1.50 — Loads the unpacked build in Chromium and runs journeys on real test pages.

## Commands
- dev: `pnpm dev`
- e2e: `pnpm build && pnpm test:e2e`
- lint: `pnpm lint && pnpm typecheck`
- test: `pnpm test`
- build: `pnpm build && pnpm zip`
- install: `pnpm install`

## Structure
- `src/manifest.ts` — Manifest generated at build time; permissions listed in one place
- `src/background/` — Service worker: listeners registered at top level, message router, alarms
- `src/content/` — Content scripts; UI mounted inside a shadow root
- `src/popup/ and src/options/` — Small Preact apps for the toolbar popup and settings page
- `src/shared/messages.ts` — Message types and a typed send/handle helper used by every context
- `src/components/` — Design-skill components shared by popup, options and content UI
- `src/styles/tokens.css` — CSS variables written from the design skill
- `tests/e2e/` — One Playwright spec per experience-skill journey, using local fixture pages

## Naming
- Files: kebab-case.ts; components PascalCase.tsx
- Tests: *.test.ts(x) beside the file; tests/e2e/<journey-id>.spec.ts
- Branches: type/short-description, e.g. feat/highlight-sync
- Components: PascalCase, named after the design-skill component

## From design and experience skills
When a Celestial design skill is in use, write its tokens as CSS custom properties in `src/styles/tokens.css`, and build its components in `src/components` with the same names and variants. Components read tokens only — no raw colours, sizes or font names.

When a Celestial experience skill is in use, give each journey one end-to-end test (happy path plus its error and empty states) and name analytics events `object_action` from its measures.

## Conventions
### Code
- Prefer small, pure functions and explicit types at module boundaries. _(Easier to test, review and change.)_
- Register every service-worker listener synchronously at the top level; keep no state in module variables; use chrome.alarms instead of timers. _(The worker is stopped when idle and restarted on the next event.)_

### Components
- Components read design tokens; no raw hex values, pixel sizes or font names in component code. _(One token change restyles the product.)_

### Data
- Analytics events are object_action in snake_case and come from the experience skill’s measures. _(Names stay consistent across teams and tools.)_

### Errors
- Every async action has loading, empty, error and success states, matching the experience skill. _(Unhandled states are where users get stuck.)_

### Security
- Secrets never live in the repository; read them from the environment or a secret store. _(A leaked key outlives the commit that removed it.)_
- Validate every input on the server, even when the client already did. _(Clients can be bypassed.)_
- Web pages ship a Content-Security-Policy, HSTS, X-Frame-Options and nosniff. _(Cheap protection against the most common attacks.)_
- Request activeTab and optional_permissions first; add a host permission only when a feature cannot work without it, and justify it in the pull request. _(Broad permissions slow store review and scare users at install.)_
- Ship all code in the package: no remote scripts, no eval, no new Function. Check sender.id and message shape on every onMessage handler. _(MV3 forbids remote code, and pages or other extensions can send messages too.)_
- Content scripts never write page data with innerHTML and never hold API tokens; they ask the service worker to make requests. _(Content scripts share the page's DOM, so anything they hold is exposed to it.)_

### Performance
- Content scripts load only on the hosts they need, at document_idle, and do no work over 50ms on the main thread. _(An extension that slows every page gets uninstalled.)_

### Accessibility
- Use native elements first; add ARIA only when no native element fits. _(Native controls bring keyboard and screen-reader support for free.)_
- Popup and injected UI are fully keyboard operable, trap focus only in modal panels, and return focus to the page on close. _(Injected UI must not strand keyboard and screen-reader users inside someone else's page.)_

## Do
- Keep a privacy note listing every piece of data the extension reads and where it goes
- Use chrome.storage.session for short-lived secrets that must not persist
- Test against fixture pages with hostile CSS and strict CSP

## Don't
- Request <all_urls> because it is convenient during development
- Rely on the popup staying open; it closes on any outside click
- Inject UI without a shadow root

## Quality gates
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Lint and types | The stack’s linter and type checker | 0 errors | Every pull request |
| Unit and component tests | The stack’s test runner | All pass; every design-skill component state covered | Every pull request |
| Journey tests | End-to-end runner | One test per experience-skill journey: happy path + error state | Every pull request |
| Accessibility | Automated audit (axe on web, platform audit on mobile) | WCAG 2.2 AA · no new violations | Every pull request |
| Performance budget | Bundle analyzer + Playwright trace on fixture pages | Each content script ≤ 50KB · no long task over 50ms on host pages · popup interactive ≤ 300ms | Every pull request |
| Dependency and secret scan | Dependency audit + secret scanner | No high or critical findings; no secrets | Every pull request and nightly |
| Permission diff | Script comparing the built manifest's permissions with main | No new permission or host pattern without a written justification approved in review | Every pull request |

The Accessibility gate checks Celestial accessibility core v1.0 (WCAG 2.2 AA); it can change tool but is never skipped. Automated: A11Y-C1, A11Y-F1, A11Y-I1, A11Y-N1, A11Y-N2, A11Y-S1, A11Y-L2, A11Y-P1 (partly). Manual pass before release: A11Y-K1, A11Y-G1, A11Y-R1, A11Y-M1, A11Y-O1, A11Y-V1, A11Y-E1, A11Y-U1, A11Y-L1 — keyboard-only run, screen reader on each journey step, 200% zoom and 320px width, reduced motion, captions on any media. Requirement IDs come from the design and experience skills this code builds. This layer owns: **A11Y-F1** A visible focus indicator on every interactive element, never hidden behind sticky bars (WCAG 2.4.7, 2.4.11); **A11Y-R1** Text works at 200% zoom, at 320px width, with increased text spacing and in either orientation (WCAG 1.4.4, 1.4.10, 1.4.12, 1.3.4); **A11Y-M1** Motion respects the reduced-motion setting; anything moving for over 5 seconds can be paused; nothing flashes more than 3 times a second (WCAG 2.2.2, 2.3.1, 2.3.3 (AAA, advised)); **A11Y-O1** Tooltips and pop-overs shown on hover or focus can be dismissed, hovered and stay until dismissed (WCAG 1.4.13); **A11Y-I1** Images, icons and charts have text alternatives (empty for decoration); text is never an image (WCAG 1.1.1, 1.4.5); **A11Y-V1** Video and audio have captions, transcripts or audio description; nothing plays sound automatically for over 3 seconds (WCAG 1.2.1, 1.2.2, 1.2.3, 1.2.4, 1.2.5, 1.4.2); **A11Y-K1** Every action works by keyboard in a logical order, with no keyboard traps; single-key shortcuts can be turned off or remapped (WCAG 2.1.1, 2.1.2, 2.1.4, 2.4.3); **A11Y-G1** Nothing is drag-, gesture- or motion-only: each has a single tap or click alternative, and actions fire on release so they can be cancelled (WCAG 2.5.1, 2.5.2, 2.5.4, 2.5.7); **A11Y-N1** Every page has a clear title, headings, landmarks and a skip link, and can be found more than one way (WCAG 2.4.1, 2.4.2, 2.4.5, 2.4.6); **A11Y-N2** Controls have visible labels and instructions; links say where they go; the accessible name contains the visible label (WCAG 2.4.4, 2.5.3, 3.3.2); **A11Y-S1** Status, results and errors are announced to screen readers (WCAG 4.1.3); **A11Y-E2** Never ask for the same information twice in one flow; personal fields declare their purpose so they can be autofilled (WCAG 3.3.7, 1.3.5); **A11Y-U1** Focusing or changing a field never moves the person somewhere else or submits without warning (WCAG 3.2.1, 3.2.2); **A11Y-W1** Time limits warn first and can be extended (WCAG 2.2.1); **A11Y-L2** The page language, and any passage in another language, is declared in code (WCAG 3.1.1, 3.1.2); **A11Y-P1** Structure, order, names, roles and states are in the code: native elements first, ARIA only following the WAI-ARIA patterns (WCAG 1.3.1, 1.3.2, 4.1.2).

## Workflow
- Branching: Trunk-based: short-lived branches off main, squash-merged within two days.

**Review checklist**
- Correctness: does it do what the issue asks, including edge cases?
- Readability: could a new teammate change it safely?
- Architecture: is it in the right place, with the right boundaries?
- Security: inputs, secrets, permissions, dependencies
- Performance: budgets, queries, bundle size
- Tests fail when the code is broken (flip a condition and re-run)
- One approving review; two for any permission, messaging or credential change
- Reviewer loads the zipped build unpacked and runs the changed journey

**Definition of done**
- Acceptance criteria met and demoed on the preview link
- Tests added for new behaviour and every state
- Accessibility and performance gates green
- Analytics events named from the experience skill
- Docs or changelog updated when behaviour changes
- Store listing and privacy note updated when data use or permissions change

**Release**
- Small pull requests (aim for under 400 changed lines)
- CI green before review
- Squash-merge to main; main is always deployable
- Every release has a written rollback path
- Bump manifest version from the tag; CI uploads the zip for store review
- Use the store's staged rollout percentage for releases that change permissions

**Incidents**
- Submit the previous version with a higher version number; disable risky features through remote config that changes data, never code
- Write a blameless note within 48 hours: what happened, impact, fix, prevention

## Overrides of the engineering core
- Preview deploy: Replaced by a zipped, loadable build attached to each pull request — Extensions are reviewed by loading the package, not by visiting a URL.
- Performance budget: Replaced by content-script size, host-page long-task and popup timing budgets — An extension's cost lands on other sites' pages, which route budgets do not measure.
- Content-Security-Policy rule: Applied through the manifest's extension_pages CSP instead of response headers — Extension pages are served from the package, not by a web server.

## Examples
### Service worker message router (`src/background/index.ts`)

```ts
import { isMessage, type Message, type Reply } from '@/shared/messages';
import { saveHighlight, listHighlights } from './highlights';

async function handle(msg: Message): Promise<Reply> {
  switch (msg.type) {
    case 'highlight/save':
      return { ok: true, data: await saveHighlight(msg.url, msg.text) };
    case 'highlight/list':
      return { ok: true, data: await listHighlights(msg.url) };
  }
}

// Registered at top level so it exists every time the worker wakes.
chrome.runtime.onMessage.addListener((raw, sender, sendResponse) => {
  if (sender.id !== chrome.runtime.id || !isMessage(raw)) return false;
  handle(raw)
    .then(sendResponse)
    .catch(() => sendResponse({ ok: false, error: 'Something went wrong. Try again.' }));
  return true; // keep the channel open for the async reply
});

chrome.alarms.create('sync', { periodInMinutes: 30 });
chrome.alarms.onAlarm.addListener((a) => { if (a.name === 'sync') void listHighlights(); });
```

## Further reading
- [Chrome Extensions documentation](https://developer.chrome.com/docs/extensions) — Manifest V3, service-worker lifecycle, permissions and messaging.
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/) — DOM XSS and input-handling guidance for content scripts.
- [Semantic Versioning](https://semver.org/) — How to number releases that the stores and users can reason about.
