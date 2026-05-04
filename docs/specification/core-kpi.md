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
  "kpi_id": "string",
  "kpi_name": "string",
  "value": 0.0,
  "unit": "string",
  "aggregation": "string",
  "time_window": {
    "type": "string",
    "start": "ISO-8601 timestamp",
    "end": "ISO-8601 timestamp"
  },
  "timestamp": "ISO-8601 timestamp",
  "dimensions": {
    "dimension_key": "value"
  },
  "definition_version": "string",
  "source": "string"
}
```

## Field Reference

### `kpi_id`

A stable, machine-readable identifier for the KPI. It must be unique
within an organization and should not change once published. Use a
slug-style format such as `revenue_sum_monthly` or
`latency_p95_rolling_7d`.

### `kpi_name`

A human-friendly display name for the KPI. Used in dashboards, reports
and UI surfaces. May be localized; the `kpi_id` remains stable.

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
[Aggregations](./aggregations). Examples: `sum`, `avg`, `p95`,
`count_distinct`, `growth_rate`.

### `time_window`

The slice of time the value refers to — see
[Time Windows](./time-windows).

| Field   | Description                                                      |
| ------- | ---------------------------------------------------------------- |
| `type`  | Window kind, e.g. `monthly`, `rolling_7d`, `ytd`, `custom`       |
| `start` | Inclusive start of the window as an ISO-8601 timestamp           |
| `end`   | Exclusive end of the window as an ISO-8601 timestamp             |

### `timestamp`

The point in time at which the value was produced (ISO-8601). This is
the *creation* time of the record, not the time range it describes —
that is encoded in `time_window`.

### `dimensions`

A free-form key/value map of dimensions that further qualify the
value, such as `country: "DE"`, `product: "premium"` or
`environment: "prod"`. Consumers can group, filter and compare KPIs
along these dimensions.

### `definition_version`

The version of the underlying KPI *definition* that produced the
value. Allows consumers to detect breaking definition changes
(e.g. `1.0.0`, `2.1.3`). Follow [Semantic Versioning](https://semver.org).

### `source`

The producing system or pipeline, e.g. `billing-service`,
`web-analytics` or `dwh.fact_orders`. Used for traceability and
debugging.

## Minimal Example

```json
{
  "kpi_id": "revenue_sum_monthly",
  "kpi_name": "Monthly Revenue",
  "value": 128450.75,
  "unit": "EUR",
  "aggregation": "sum",
  "time_window": {
    "type": "monthly",
    "start": "2026-03-01T00:00:00Z",
    "end": "2026-04-01T00:00:00Z"
  },
  "timestamp": "2026-04-01T02:15:00Z",
  "dimensions": {
    "country": "DE",
    "product": "premium"
  },
  "definition_version": "1.2.0",
  "source": "billing-service"
}
```

::: tip
Treat `kpi_id`, `unit`, `aggregation` and `time_window.type` as a
contract — changing any of them requires a new `definition_version`.
:::
