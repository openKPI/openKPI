---
title: KPIs for Energy Suppliers
description: openKPI examples for the energy and utility industry
---

# KPIs for Energy Suppliers

Typical KPIs for energy suppliers, grid operators and utility
companies — covering operational, customer and ESG perspectives.

## CO₂ Emissions per Megawatt-hour

Average grid-mix emissions per produced MWh — a key sustainability
indicator.

```json
{
  "id": "co2_emissions_per_mwh_monthly",
  "name": "CO₂ Emissions per MWh",
  "description": "Average CO₂ equivalent emissions per produced megawatt-hour, calculated from the German grid mix according to the GHG Protocol (location-based).",
  "value": 312.4,
  "unit": "kg_co2e_per_mwh",
  "aggregation": "avg",
  "time_window": {
    "type": "monthly",
    "start": "2026-04-01T00:00:00Z",
    "end": "2026-05-01T00:00:00Z"
  },
  "timestamp": "2026-05-01T03:00:00Z",
  "source": "esg-reporting"
}
```

## Renewable Energy Share

Percentage of energy delivered to customers that comes from renewable
sources.

```json
{
  "id": "renewable_share_rolling_12m",
  "name": "Renewable Energy Share",
  "description": "Share of energy delivered to customers that originates from certified renewable sources, weighted by delivered volume over the trailing 12 months.",
  "value": 64.8,
  "unit": "percent",
  "aggregation": "weighted_avg",
  "time_window": {
    "type": "rolling_12m",
    "start": "2025-05-01T00:00:00Z",
    "end": "2026-05-01T00:00:00Z"
  },
  "timestamp": "2026-05-01T04:00:00Z",
  "source": "energy-mix-service"
}
```

## SAIDI — Average Outage Duration

System Average Interruption Duration Index: average minutes per
customer of supply interruption.

```json
{
  "id": "saidi_yearly",
  "name": "SAIDI (System Average Interruption Duration Index)",
  "description": "Average minutes of supply interruption per customer in the calendar year, calculated according to the German BNetzA methodology.",
  "value": 12.7,
  "unit": "minutes_per_customer",
  "aggregation": "avg",
  "time_window": {
    "type": "yearly",
    "start": "2025-01-01T00:00:00Z",
    "end": "2026-01-01T00:00:00Z"
  },
  "timestamp": "2026-02-01T08:00:00Z",
  "source": "grid-ops"
}
```

## Customer Churn Rate

Share of customers leaving within the period — important indicator
for tariff competitiveness.

```json
{
  "id": "customer_churn_rate_monthly",
  "name": "Customer Churn Rate",
  "description": "Number of contracts terminated by customers in the month, divided by the number of active contracts at the start of the month.",
  "value": 1.42,
  "unit": "percent",
  "aggregation": "ratio",
  "time_window": {
    "type": "monthly",
    "start": "2026-04-01T00:00:00Z",
    "end": "2026-05-01T00:00:00Z"
  },
  "timestamp": "2026-05-02T06:00:00Z",
  "source": "crm"
}
```

::: tip
Sustainability KPIs frequently feed into regulatory reports
(CSRD, GHG Protocol, …). Document the methodology in the
`description` field to make audits significantly easier.
:::
