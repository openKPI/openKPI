---
title: API Transport
description: Exchanging KPIs over HTTP APIs
---

# API Transport

The API transport defines how openKPI documents are exchanged
synchronously over HTTP. It is the recommended option for
request/response style integrations such as dashboards, ad-hoc
queries and batch reporting.

## Characteristics

- **Pull model** — consumers actively request KPI values when needed
- **Synchronous** — the response carries the KPI document directly
- **Stateless** — every request is self-contained
- **Cacheable** — standard HTTP caching headers apply

## Endpoints

| Method | Path                 | Purpose                                      |
| ------ | -------------------- | -------------------------------------------- |
| `GET`  | `/kpis`              | List available KPI definitions               |
| `GET`  | `/kpis/{id}`         | Fetch the latest value for a single KPI      |
| `POST` | `/kpis/{id}`         | Submit a new value for a KPI                 |
| `GET`  | `/kpis/{id}/history` | Fetch historical values over a time range   |

## Example

```http
GET /kpis/revenue_sum_monthly HTTP/1.1
Host: kpi.example.com
Accept: application/json
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": "revenue_sum_monthly",
  "name": "Monthly Revenue",
  "description": "Total order revenue booked in the calendar month, in euros.",
  "value": 128450.75,
  "unit": "EUR",
  "aggregation": "sum",
  "time_window": {
    "type": "monthly",
    "start": "2026-03-01T00:00:00Z",
    "end": "2026-04-01T00:00:00Z"
  },
  "timestamp": "2026-04-01T02:15:00Z",
  "source": "billing-service"
}
```

## Authentication

openKPI does not invent a new auth scheme — it reuses the standard
HTTP mechanisms. Every production deployment MUST authenticate
requests; KPIs feed boardrooms and regulators, so provenance matters
more than convenience.

| Mechanism            | Header / Setup                              | Recommended for                                  |
| -------------------- | ------------------------------------------- | ------------------------------------------------ |
| **Bearer (OAuth 2.0 / JWT)** | `Authorization: Bearer <token>`     | Default for user- and service-to-service traffic |
| **Mutual TLS (mTLS)**        | Client certificate at the TLS layer | Service-to-service inside a controlled network   |
| **API key**                  | `Authorization: ApiKey <key>` or vendor header | Read-only public feeds only — never for writes |

Bearer tokens SHOULD be short-lived and carry explicit `aud` and
`scope` claims. Servers SHOULD enforce the following scopes per
endpoint:

| Scope        | Endpoints                                              |
| ------------ | ------------------------------------------------------ |
| `kpi:read`   | `GET /kpis`, `GET /kpis/{id}`, `GET /kpis/{id}/history` |
| `kpi:write`  | `POST /kpis/{id}`                                      |

Anonymous access SHOULD be rejected. A request without credentials
MUST return `401 Unauthorized`; a request with valid credentials but
insufficient scope MUST return `403 Forbidden`.

### Example

```http
GET /kpis/revenue_sum_monthly HTTP/1.1
Host: kpi.example.com
Accept: application/json
Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...
```

## When to Use

- Dashboards and reporting tools that pull on demand
- Ad-hoc queries from analysts
- Bulk export and backfill scenarios

For continuous, low-latency updates use the
[Event](./event) transport instead.
