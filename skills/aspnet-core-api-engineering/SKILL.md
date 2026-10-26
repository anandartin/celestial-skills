---
name: aspnet-core-api-engineering
description: "Engineering skill: ASP.NET Core Web API — how to build and ship a api / service with ASP.NET Core, C#, xUnit. Use when writing, reviewing, testing or releasing code in this stack, and when turning a Celestial design or experience skill into code."
type: engineering
stack: api
core: "1.0"
checked: 2026-10-26
---

# ASP.NET Core Web API

A C# Web API on ASP.NET Core with minimal-API endpoint groups, EF Core migrations and integration tests that boot the real host.

For line-of-business backends, integration services and product APIs on .NET. Published as a self-contained container image and run behind a reverse proxy or load balancer, with health checks and OpenTelemetry built in.

## Stack
- **Language:** C# 13+ — Nullable reference types and records make contracts explicit.
- **Framework:** ASP.NET Core .NET 10 (LTS) — Minimal APIs, built-in DI, auth, rate limiting and OpenAPI generation.
- **State:** Stateless requests; distributed cache when needed — Any instance can serve any request.
- **Data:** PostgreSQL or SQL Server with EF Core EF Core 10 — LINQ queries, migrations and change tracking in one library.
- **Build:** dotnet CLI .NET 10 SDK — Restore, build, test and publish with one tool.
- **Hosting:** Container platform with health probes — Rolling updates gated on /health/ready.
- **Package manager:** NuGet with central package management Directory.Packages.props — One place for every package version.
- **Testing:** xUnit ^2.9 — Standard .NET test framework.
- **Testing:** WebApplicationFactory Microsoft.AspNetCore.Mvc.Testing — Boots the real host in memory for API tests.
- **Testing:** Testcontainers for .NET ^4 — Integration tests against a real database.

## Commands
- dev: `dotnet watch --project src/Api`
- lint: `dotnet format --verify-no-changes && dotnet build -warnaserror`
- test: `dotnet test`
- build: `dotnet publish src/Api -c Release`
- deploy: `dotnet publish src/Api -c Release -t:PublishContainer`
- install: `dotnet restore`

## Structure
- `src/Api/Program.cs` — Host setup: services, middleware order, endpoint group registration
- `src/Api/Features/<Feature>/` — Endpoints, request/response records, validators and handlers per feature
- `src/Api/Infrastructure/` — DbContext, EF configurations, external clients
- `src/Api/Migrations/` — EF Core migrations
- `tests/Api.Tests/` — Unit tests for handlers and validators
- `tests/Api.IntegrationTests/` — WebApplicationFactory tests against a containerised database
- `Directory.Build.props` — Shared settings: nullable on, warnings as errors, analyzers

## Naming
- Files: PascalCase.cs, one type per file
- Tests: <Type>Tests.cs; methods Method_Scenario_Expected
- Branches: type/short-description, e.g. feat/supplier-sync

## From design and experience skills
This stack has no UI; design skills do not apply.

When a Celestial experience skill is in use, give each journey one end-to-end test (happy path plus its error and empty states) and name analytics events `object_action` from its measures.

## Conventions
### Code
- Prefer small, pure functions and explicit types at module boundaries. _(Easier to test, review and change.)_
- Group endpoints per feature with MapGroup and keep each handler a small static method or class taking its dependencies as parameters. _(Features stay discoverable and handlers are unit-testable.)_
- Enable nullable reference types and treat warnings as errors in Directory.Build.props. _(Null mistakes fail the build instead of production.)_

### Components
- Components read design tokens; no raw hex values, pixel sizes or font names in component code. _(One token change restyles the product.)_

### Data
- Analytics events are object_action in snake_case and come from the experience skill’s measures. _(Names stay consistent across teams and tools.)_
- Bind requests to record types and validate them with an endpoint filter (FluentValidation or DataAnnotations) before the handler runs. _(Invalid input never reaches business logic.)_
- Use AsNoTracking for reads, project to response records with Select, and pass CancellationToken to every async EF call. _(Smaller queries and requests that stop work when the client goes away.)_

### Errors
- Every async action has loading, empty, error and success states, matching the experience skill. _(Unhandled states are where users get stuck.)_
- Register AddProblemDetails and UseExceptionHandler; return TypedResults so OpenAPI shows every status. _(Clients get consistent errors and accurate docs.)_

### Security
- Secrets never live in the repository; read them from the environment or a secret store. _(A leaked key outlives the commit that removed it.)_
- Validate every input on the server, even when the client already did. _(Clients can be bypassed.)_
- Web pages ship a Content-Security-Policy, HSTS, X-Frame-Options and nosniff. _(Cheap protection against the most common attacks.)_
- Call RequireAuthorization on the root group and use policies for roles; AllowAnonymous is explicit and reviewed. _(New endpoints fail closed.)_

### Accessibility
- Use native elements first; add ARIA only when no native element fits. _(Native controls bring keyboard and screen-reader support for free.)_

## Do
- Bind options classes with ValidateOnStart for configuration
- Use IHttpClientFactory with timeouts and resilience handlers for outbound calls
- Apply the built-in rate limiter to write and auth endpoints

## Don't
- Block on async code with .Result or .Wait()
- Expose EF entities as response bodies
- Keep secrets in appsettings.json; use environment variables or a secret store

## Quality gates
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Lint and types | dotnet build -warnaserror + .NET analyzers + dotnet format | 0 warnings, 0 errors | Every pull request |
| Unit and component tests | The stack’s test runner | All pass; every design-skill component state covered | Every pull request |
| Performance budget | k6 or NBomber load test against the preview environment | p95 ≤ 200ms and p99 ≤ 500ms at target RPS; error rate < 0.1% | Every pull request touching an endpoint or query |
| Dependency and secret scan | Dependency audit + secret scanner | No high or critical findings; no secrets | Every pull request and nightly |
| Preview deploy | Hosting preview environment | A working preview link on the pull request | Every pull request |

## Workflow
- Branching: Trunk-based: short-lived branches off main, squash-merged within two days.

**Review checklist**
- Correctness: does it do what the issue asks, including edge cases?
- Readability: could a new teammate change it safely?
- Architecture: is it in the right place, with the right boundaries?
- Security: inputs, secrets, permissions, dependencies
- Performance: budgets, queries, bundle size
- Tests fail when the code is broken (flip a condition and re-run)
- One approving review; two for auth policies, migrations or data deletion
- Reviewer checks the generated OpenAPI diff

**Definition of done**
- Acceptance criteria met and demoed on the preview link
- Tests added for new behaviour and every state
- Accessibility and performance gates green
- Analytics events named from the experience skill
- Docs or changelog updated when behaviour changes
- Every endpoint returns TypedResults for each status it can produce
- Integration test covers success, 400 validation and 403 forbidden

**Release**
- Small pull requests (aim for under 400 changed lines)
- CI green before review
- Squash-merge to main; main is always deployable
- Every release has a written rollback path
- Merge to main publishes an image; EF migration bundle runs as a release step before rollout
- Migrations stay compatible with the previous release

**Incidents**
- Roll back by redeploying the previous image tag
- Blameless note within 48 hours

## Overrides of the engineering core
- Journey tests: Replaced by WebApplicationFactory integration tests plus an OpenAPI contract diff — No UI in this stack; the consumer-facing journey is the API contract.
- Accessibility: Not applicable — No UI in this stack; accessibility is owned by the clients that call it.
- components: Not applicable — No design-skill components or tokens in an API service.
- Performance budget: Replaced by server latency targets: p95 ≤ 200ms, p99 ≤ 500ms — Web Vitals and bundle size do not apply to an API.
- Lint and types: Stricter: warnings are errors — The C# compiler and analyzers catch nullability and async misuse as warnings.

## Examples
### Endpoint group (`src/Api/Features/Orders/OrderEndpoints.cs`)

```csharp
using System.Security.Claims;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;

namespace Api.Features.Orders;

public static class OrderEndpoints
{
    public record OrderResponse(Guid Id, string Status, long TotalMinor);

    public static RouteGroupBuilder MapOrders(this RouteGroupBuilder group)
    {
        group.MapGet("/{id:guid}", GetOrder);
        return group;
    }

    static async Task<Results<Ok<OrderResponse>, NotFound>> GetOrder(
        Guid id, ClaimsPrincipal user, AppDbContext db, CancellationToken ct)
    {
        var userId = Guid.Parse(user.FindFirstValue(ClaimTypes.NameIdentifier)!);
        var order = await db.Orders.AsNoTracking()
            .Where(o => o.Id == id && o.OwnerId == userId)
            .Select(o => new OrderResponse(o.Id, o.Status, o.TotalMinor))
            .FirstOrDefaultAsync(ct);
        return order is null ? TypedResults.NotFound() : TypedResults.Ok(order);
    }
}
```

## Further reading
- [ASP.NET Core documentation](https://learn.microsoft.com/en-us/aspnet/core/) — Minimal APIs, middleware, authentication and testing.
- [OWASP Top Ten](https://owasp.org/www-project-top-ten/) — The attack classes every endpoint review should check against.
- [OpenTelemetry documentation](https://opentelemetry.io/docs/) — Instrumenting traces, metrics and logs so latency budgets can be measured.
