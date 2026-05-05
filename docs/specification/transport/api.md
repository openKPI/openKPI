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

## When to Use

- Dashboards and reporting tools that pull on demand
- Ad-hoc queries from analysts
- Bulk export and backfill scenarios

For continuous, low-latency updates use the
[Event](./event) transport instead.
