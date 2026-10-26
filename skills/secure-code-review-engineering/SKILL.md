---
name: secure-code-review-engineering
description: "Engineering practice: Secure code review — Read every change the way an attacker would, so injection, broken access control and leaked secrets are caught before merge instead of after an incident. Use in any language or framework whenever this practice applies, and when reviewing work that should follow it."
type: engineering
stack: practice
core: "1.0"
checked: 2026-10-26
---

# Secure code review

Read every change the way an attacker would, so injection, broken access control and leaked secrets are caught before merge instead of after an incident.

Use this on any pull request that touches input parsing, authentication, permissions, outbound requests, file handling, secrets or dependencies. It prevents the common classes of exploitable bug from reaching production by tracing untrusted data from where it enters to where it is used, and by checking every protected action for an explicit permission check.

## How to do it
1. **Map what changed and what it touches** — List the new or changed entry points (routes, handlers, queue consumers, CLI flags, webhooks) and the sinks they reach (SQL, shell, file system, HTML output, outbound HTTP, deserialisers). Write the list in the review comment; anything not on it is out of scope.
2. **Trace untrusted input to every sink** — For each entry point, follow request bodies, headers, query strings, cookies and uploaded files to each sink. Confirm the input is validated against an allow-list schema on the server and that each sink uses a safe API: parameterised queries, argument arrays instead of shell strings, context-aware output encoding, and safe deserialisers.
3. **Check authentication and authorisation on every action** — For each handler, find the line that proves who the caller is and the line that proves they may act on this specific record (object-level check, not just role). Missing either is a blocking finding. Confirm the default is deny when no rule matches.
4. **Inspect outbound requests for SSRF** — Any URL, host or redirect target that a user can influence must be resolved and checked against an allow-list of hosts and schemes before the request is made; block private, loopback and link-local ranges and metadata addresses, and disable automatic redirects or re-check each hop.
5. **Look for secrets and sensitive data** — Search the diff for keys, tokens, passwords, connection strings and private keys, including in tests, fixtures and config. Confirm secrets come from the environment or a secret store and that tokens, passwords and personal data are not written to logs, error messages or analytics.
6. **Review new and upgraded dependencies** — For each added or bumped package, check the audit output, maintenance activity and install scripts, and confirm the lockfile changed in the same commit. Question any dependency that replaces a few lines of code.
7. **Record findings with severity and a fix** — Write each finding as: location, what an attacker can do, severity (critical, high, medium, low), and the concrete fix. Block merge on critical and high; open tracked issues for the rest.
8. **Verify fixes with a failing test** — For every blocking finding, ask for a test that reproduces the exploit input (for example a second user reading the first user's record) and fails before the fix and passes after.

## Checklist
- [ ] Every new entry point and sink is listed in the review
- [ ] All server-side input is validated against an allow-list schema
- [ ] Every query, shell call and template uses a parameterised or encoding API
- [ ] Each protected action has an authentication check and an object-level authorisation check
- [ ] User-influenced outbound URLs are checked against a host allow-list with private ranges blocked
- [ ] No secrets or personal data appear in code, fixtures, logs or error responses
- [ ] Dependency audit shows no new high or critical findings
- [ ] Each blocking finding has a regression test

## Rules
- Treat every value from outside the process as hostile until a server-side schema has accepted it, including headers, cookies and data from your own other services. _(Trust boundaries move; validation at the point of use is the one that cannot be bypassed.)_
- Never build SQL, shell commands, file paths or HTML by string concatenation with untrusted values. _(Concatenation is the root of injection; safe APIs remove the whole class.)_
- Check authorisation against the specific record being read or changed, not only the caller's role. _(Broken object-level access is the most common way one user reads another user's data.)_
- Return generic error messages to clients and log the detail server-side without secrets or tokens. _(Stack traces and verbose errors hand attackers a map of the system.)_
- Fail closed: when a permission lookup, signature check or token parse throws, deny the request. _(Exceptions that fall through to success turn outages into breaches.)_

## Do
- Read the handler and the data access code together so the authorisation check and the query are seen side by side
- Ask for a test that uses a second account to prove one user cannot touch another's data
- Prefer the framework's built-in protections (CSRF tokens, autoescaping, ORM parameters) over hand-written ones

## Don't
- Do not approve a change because the client already validates the input
- Do not accept a deny-list of bad characters as an injection defence
- Do not leave security findings as unresolved comments; block or file a tracked issue

## Quality gates
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Static security analysis | SAST scanner for the stack (for example Semgrep or CodeQL rules) | No new high or critical findings | Every pull request |
| Security review sign-off | Pull request review | A named reviewer has checked entry points, authorisation and secrets on any change touching auth, input parsing or outbound requests | Before merge |

## Workflow
**Review**
- Start from the entry points and sinks list, then read the diff
- Label pull requests that touch auth or input handling so they always get a security reviewer

**Definition of done**
- All critical and high findings fixed with regression tests
- Medium and low findings tracked as issues with an owner

## Examples
### Object-level authorisation check (`src/routes/invoices.ts`)

```ts
app.get('/invoices/:id', requireUser, async (req, res) => {
  const id = InvoiceId.parse(req.params.id);
  const invoice = await db.invoice.findUnique({ where: { id } });
  // Same response for missing and forbidden so ids cannot be probed
  if (!invoice || invoice.accountId !== req.user.accountId) {
    return res.status(404).json({ error: 'not_found' });
  }
  res.json(toPublicInvoice(invoice));
});
```

## Further reading
- [OWASP Top 10](https://owasp.org/www-project-top-ten/) — The risk categories this review walks through, with examples of each.
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/) — Specific defences for injection, SSRF, authorisation and secrets handling.
- [obra/superpowers](https://github.com/obra/superpowers) — Agent workflow skills that include structured code review, where this practice is commonly published.
- [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) — Engineering skills for coding agents covering security-minded review.

_Written for Celestial; the sources above inspired it._
