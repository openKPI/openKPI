---
title: Financial KPIs
description: openKPI examples for the financial services industry
---

# Financial KPIs

Concrete openKPI documents for KPIs that are typical for banks,
insurers and other financial service providers.

## Net Interest Margin

The difference between interest earned and interest paid, expressed
as a percentage of average earning assets.

```json
{
  "id": "net_interest_margin_quarterly",
  "name": "Net Interest Margin",
  "description": "Difference between interest earned and interest paid, expressed as a percentage of average earning assets, calculated per quarter.",
  "value": 2.34,
  "unit": "percent",
  "aggregation": "ratio",
  "time_window": {
    "type": "quarterly",
    "start": "2026-01-01T00:00:00Z",
    "end": "2026-04-01T00:00:00Z"
  },
  "timestamp": "2026-04-15T08:00:00Z",
  "source": "finance-dwh"
}
```

## Cost-to-Income Ratio

Operating expenses divided by operating income — a key efficiency
indicator for banks.

```json
{
  "id": "cost_to_income_ratio_monthly",
  "name": "Cost-to-Income Ratio",
  "description": "Operating expenses divided by operating income, calculated for the calendar month. A lower value indicates higher efficiency.",
  "value": 58.7,
  "unit": "percent",
  "aggregation": "ratio",
  "time_window": {
    "type": "monthly",
    "start": "2026-03-01T00:00:00Z",
    "end": "2026-04-01T00:00:00Z"
  },
  "timestamp": "2026-04-05T06:00:00Z",
  "source": "controlling"
}
```

## Loan-to-Deposit Ratio

Total loans divided by total deposits — a measure of liquidity.

```json
{
  "id": "loan_to_deposit_ratio_daily",
  "name": "Loan-to-Deposit Ratio",
  "description": "Total outstanding loans divided by total customer deposits at end of day. Used as a basic liquidity indicator.",
  "value": 84.2,
  "unit": "percent",
  "aggregation": "ratio",
  "time_window": {
    "type": "daily",
    "start": "2026-04-30T00:00:00Z",
    "end": "2026-05-01T00:00:00Z"
  },
  "timestamp": "2026-05-01T01:30:00Z",
  "source": "treasury"
}
```

## Return on Equity (ROE)

Net income relative to shareholders' equity — measures profitability.

```json
{
  "id": "return_on_equity_yearly",
  "name": "Return on Equity",
  "description": "Net income for the fiscal year divided by average shareholders' equity. Reported according to the IFRS framework.",
  "value": 11.6,
  "unit": "percent",
  "aggregation": "ratio",
  "time_window": {
    "type": "yearly",
    "start": "2025-01-01T00:00:00Z",
    "end": "2026-01-01T00:00:00Z"
  },
  "timestamp": "2026-02-15T09:00:00Z",
  "source": "finance-dwh"
}
```

::: tip
For financial reporting, document the regulatory framework
(IFRS, GAAP, …) the definition follows in the `description` so
consumers know exactly how to interpret the value.
:::
