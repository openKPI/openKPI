---
title: Core KPI
description: JSON schema and field reference for an openKPI document
---

# Core KPI

Every KPI exchanged via openKPI follows the same JSON structure. The
schema below is the canonical representation and is intended to be
both human-readable and machine-parseable.

## JSON Schema

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "value": 0.0,
  "unit": "string",
  "aggregation": "string",
  "time_window": {
    "type": "string",
    "start": "ISO-8601 timestamp",
    "end": "ISO-8601 timestamp",
    "timezone": "IANA time zone, e.g. Europe/Berlin",
    "calendar": "gregorian | iso | fiscal"
  },
  "timestamp": "ISO-8601 timestamp",
  "source": "string",
  "derived_from": ["string"],
  "formula": "string",
  "quality": {
    "status": "final | preliminary | estimated | forecast | restated",
    "revision": 0,
    "confidence_interval": { "lower": 0.0, "upper": 0.0, "level": 0.95 },
    "sample_size": 0,
    "completeness": 0.0,
    "freshness": "ISO-8601 timestamp"
  }
}
```

Fields below the dividing line — `derived_from`, `formula`, `quality`,
and the `timezone` / `calendar` keys inside `time_window` — are
**optional**. A document without them is still a valid openKPI value;
they exist so producers can express lineage, trustworthiness and
calendar semantics without leaving the standard.

## Field Reference

### `id`

A stable, machine-readable identifier for the KPI. It must be unique
within an organization and should not change once published. Use a
slug-style format such as `revenue_sum_monthly` or
`latency_p95_rolling_7d`.

### `name`

A human-friendly display name for the KPI. Used in dashboards, reports
and UI surfaces. May be localized; the `id` remains stable.

### `description`

A short, human-readable description of what the KPI measures, how it
is calculated and any caveats consumers should be aware of. Free-form
text — the place to document the methodology behind the value.

### `value`

The numeric value of the KPI for the given time window. Always a
number (integer or floating point). The interpretation of the value
depends on `unit` and `aggregation`.

### `unit`

The unit of measurement of the value — see
[Units of Measurement](./units-of-measurement). Examples: `EUR`,
`percent`, `ms`, `count`, `kg_co2e`.

### `aggregation`

How the underlying observations were aggregated into the value — see
[Aggregation](./aggregation). Examples: `sum`, `avg`, `p95`,
`count_distinct`, `growth_rate`.

### `time_window`

The slice of time the value refers to — see
[Time Window](./time-window).

| Field      | Description                                                                                              |
| ---------- | -------------------------------------------------------------------------------------------------------- |
| `type`     | Window kind, e.g. `monthly`, `rolling_7d`, `ytd`, `custom`                                               |
| `start`    | Inclusive start of the window as an ISO-8601 timestamp                                                   |
| `end`      | Exclusive end of the window as an ISO-8601 timestamp                                                     |
| `timezone` | *(optional, recommended for calendar windows)* IANA time zone the boundaries are expressed in, e.g. `Europe/Berlin`, `Asia/Tokyo`, `UTC`. Without it, calendar windows like `monthly` are ambiguous |
| `calendar` | *(optional, default `gregorian`)* Calendar system: `gregorian`, `iso` (ISO-8601 weeks) or `fiscal` (organization's fiscal calendar — start month must be documented in `description`) |

### `timestamp`

The point in time at which the value was produced (ISO-8601). This is
the *creation* time of the record, not the time range it describes —
that is encoded in `time_window`.

### `source`

The producing system or pipeline, e.g. `billing-service`,
`web-analytics` or `dwh.fact_orders`. Used for traceability and
debugging.

### `derived_from` *(optional)*

Array of KPI `id`s that this value is computed from. Used to model
lineage between base measures and derived KPIs — for example a
`cost_to_income_ratio_monthly` derived from `operating_expenses_monthly`
and `operating_income_monthly`. Empty or omitted for base measures.

Consumers can use `derived_from` to walk the dependency graph, build
drill-down views and validate that all inputs share a compatible
`time_window`.

### `formula` *(optional)*

Human-readable expression that documents how `value` is computed from
the inputs listed in `derived_from`. Plain text or a math/SQL-style
expression, e.g. `operating_expenses_monthly / operating_income_monthly`
or `sum(revenue) / count_distinct(customer_id)`.

The formula is **documentation, not code** — it is not meant to be
evaluated automatically. Its purpose is to make derived values
auditable: a consumer can read it and reconstruct or challenge the
result.

### `quality` *(optional)*

Optional metadata about the trustworthiness and lifecycle of the value.
Consumers use it to flag preliminary numbers, prefer the latest
revision after a restatement, or render confidence ranges.

| Field                  | Description                                                                                                                                  |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `status`               | Lifecycle state: `final` (signed off), `preliminary` (subject to change), `estimated` (extrapolated), `forecast` (future), `restated` (corrected after a previously published value) |
| `revision`             | Monotonically increasing integer for the same `(id, time_window)` pair. Consumers should treat the highest `revision` as authoritative      |
| `confidence_interval`  | Statistical interval around `value` with `lower`, `upper` and `level` (e.g. `0.95`) — for sampled or modeled KPIs                            |
| `sample_size`          | Number of underlying observations the value was computed from                                                                                |
| `completeness`         | Share of expected source records actually available, in `[0, 1]` — useful for late-arriving data                                             |
| `freshness`            | Timestamp of the most recent source observation included in the value (different from `timestamp`, which is when the KPI document was produced) |

A KPI without a `quality` block is treated as `status: "final"`,
`revision: 0`, `completeness: 1.0`.

## Minimal Example

```json
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

::: tip
Treat `id`, `unit`, `aggregation` and `time_window.type` as a
contract — if any of them have to change, publish a new KPI with a
new `id` instead of silently changing the meaning of an existing one.
:::
