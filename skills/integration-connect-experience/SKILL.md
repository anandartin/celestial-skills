---
name: integration-connect-experience
type: experience
journey: user
persona: Software engineer (31), connects tools for his team; keyboard-only user
domain: Integrations and delegated access
technology: B2B web app with redirect to the other tool's authorisation page
core: "1.0"
description: "Experience skill: Connecting a third-party tool through an authorisation screen — the best-practice user journey for a software engineer (31), connects tools for his team; keyboard-only user in Integrations and delegated access on B2B web app with redirect to the other tool's authorisation page. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Connecting a third-party tool through an authorisation screen

A work user connects another tool to their workspace, sees exactly what access is being granted and why, approves on the other tool's consent screen, and can test, limit or disconnect the connection later.

**Outcome** — At least 85% of started connections complete with a successful test sync, and fewer than 3% are disconnected within a week because of unexpected access.

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.0 components and patterns, and let the active design skill render them.

---

## Persona — Dev, Software engineer (31), connects tools for his team; keyboard-only user

> “Tell me what it reads, what it writes, and how I turn it off. If it wants everything, I'm not clicking allow.”

Connecting the team's issue tracker to a project workspace so updates flow both ways; his company's security team reviews access scopes.

**Goals**
- Connect in a few minutes without reading docs
- Grant only the access needed
- Prove to security what was granted

**Pains**
- Consent screens asking for full account access
- Silent failures after connecting
- No record of who connected what

**Behaviours**
- Uses the keyboard for everything because of repetitive strain injury
- Reads scope lists line by line
- Screenshots consent screens for the security team

**Access needs**
- Repetitive strain injury — keyboard only, no drag
- Uses a high-contrast theme

---

## Domain — Integrations and delegated access

- Use OAuth 2.0 with PKCE; never ask people to paste their password for another service
- Request the narrowest scopes for the chosen features and explain each one in plain words before redirecting
- Workspace admins can require approval for new integrations and see a list of all active connections
- Tokens are encrypted at rest, refreshed automatically and revoked on disconnect
- Log who connected, which scopes were granted and when, in the audit log

Vocabulary to use: `integration`, `connection`, `access scope`, `authorise`, `sync`, `disconnect`, `token`

## Technology — B2B web app with redirect to the other tool's authorisation page

Inputs: Keyboard, Mouse, Pop-up or full-page redirect

- Redirect must survive pop-up blockers (fall back to full-page)
- State parameter checked on return to prevent forgery
- Partial scope grants must be detected and handled

---

## Journey (5 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **Browse** | Find the tool to connect | `list + filters` | “Bring issue updates into your projects” |
| 2 | **Explain access** | Understand what will be shared before leaving | `detail` | “This connection will read issues and comments, and create issues from tasks. It won't see your account settings.” |
| 3 | **Authorise** | Approve on the other tool's consent page | `auth card` | “You'll be taken to sign in and approve access. We'll bring you back here.” |
| 4 | **Test** | See it work with real data | `progress` | “Connected. 24 issues found in the last 7 days.” |
| 5 | **Manage** | Review, limit or disconnect later | `detail` | “Disconnect this tool? New issues will stop appearing. Existing ones stay.” |

### 1. Browse

- Search and filter by category
- Each tile says what the connection does in one line
- **empty:** No match. Request an integration or use the webhook option.

### 2. Explain access

- List each scope as read / write with a reason
- Let people turn optional features off to drop scopes
- **error:** Your admin needs to approve new integrations. Send a request?

### 3. Authorise

- Say what the next screen will look like before redirecting
- Return to the same place after approval
- **error:** Access wasn't granted. Nothing was connected.
- **loading:** Waiting for approval…

### 4. Test

- Run a first sync and show a sample item
- Name any scope that was declined and what won't work
- **error:** Comments couldn't be read because that access was declined. Reconnect to add it.
- **loading:** Running a test sync…

### 5. Manage

- Show who connected it, when, and granted scopes
- Disconnect revokes the token and says what stops

---

## Principles

1. Explain access before redirecting, in plain words
2. Request the least access the chosen features need
3. Prove the connection works with a real test
4. Disconnecting is one step and fully revokes access
5. Every connection has a visible owner and audit trail

## Do / Don't

**Do**
- Group scopes by read and write
- Show the sync status and last successful sync time
- Notify the connector when a token expires or is revoked elsewhere

**Don't**
- Ask for full account access when read access is enough
- Accept a password for another service
- Leave a connection silently broken

## Accessibility

- Meets WCAG 2.2 AA; the flow is fully operable by keyboard, including returning focus after the redirect
- On return, focus lands on the result heading and the outcome is announced
- Scope list uses text labels (Read, Write), not icons alone, and passes 4.5:1 contrast in high-contrast themes
- Pop-up flow has a full-page alternative announced in the instructions

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Describe scopes as actions: “Read issues and comments” not “issues:read”
- Say what stops on disconnect: “New issues will stop appearing. Existing ones stay.”
- Errors name the cause and the fix: “That access was declined. Reconnect to add it.”

## AI interactions

- No AI in authorisation because consent must be explicit and identical each time; optional AI may summarise incoming issues later, labelled and switchable off

## Edge cases

- Person declines some scopes — connect with reduced features and list what won't work
- Admin approval required — send a request with the scopes listed and notify when approved
- Connector leaves the company — connection keeps running under a named owner or pauses with a notice to admins
- Token revoked from the other tool — mark the connection as broken and email the owner with a reconnect link
- Return from consent with a mismatched state — stop, connect nothing, and explain

---

## Measures

| Measure | Target | How |
|---|---|---|
| Connection completion | ≥ 85% | Start → successful test sync |
| Unexpected-access disconnects | < 3% in 7 days | Disconnects tagged “access” in exit reason |
| Broken connections | < 2% at any time | Connections with failed sync > 24 h |
| Time to connect | < 3 min | Median, keyboard-only included |

Research: Keyboard-only and screen reader walkthroughs of the redirect round trip; Security review of scopes, state handling and token storage; Comprehension test: can people predict what the integration can do from the access screen.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
