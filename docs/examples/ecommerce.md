---
title: E-commerce KPIs
description: openKPI examples for online retail
---

# E-commerce KPIs

Concrete openKPI documents for KPIs that online shops, marketplaces
and direct-to-consumer brands track every day.

## Conversion Rate

Share of visitors that complete a purchase.

```json
{
  "id": "conversion_rate_daily",
  "name": "Conversion Rate",
  "description": "Share of unique daily visitors of the storefront that complete at least one paid order. Last-click attribution.",
  "value": 2.87,
  "unit": "percent",
  "aggregation": "ratio",
  "time_window": {
    "type": "daily",
    "start": "2026-05-03T00:00:00Z",
    "end": "2026-05-04T00:00:00Z"
  },
  "timestamp": "2026-05-04T01:15:00Z",
  "source": "web-analytics"
}
```

## Cart Abandonment Rate

Share of created carts that are not converted into an order.

```json
{
  "id": "cart_abandonment_rate_rolling_7d",
  "name": "Cart Abandonment Rate",
  "description": "Share of carts created in the trailing 7 days that did not result in a paid order within the same window.",
  "value": 68.3,
  "unit": "percent",
  "aggregation": "ratio",
  "time_window": {
    "type": "rolling_7d",
    "start": "2026-04-27T00:00:00Z",
    "end": "2026-05-04T00:00:00Z"
  },
  "timestamp": "2026-05-04T02:00:00Z",
  "source": "checkout-service"
}
```

## Average Order Value (AOV)

Total revenue divided by the number of orders.

```json
{
  "id": "average_order_value_monthly",
  "name": "Average Order Value",
  "description": "Total gross order revenue (excluding refunds and cancellations) divided by the number of paid orders in the calendar month.",
  "value": 74.21,
  "unit": "EUR",
  "aggregation": "avg",
  "time_window": {
    "type": "monthly",
    "start": "2026-04-01T00:00:00Z",
    "end": "2026-05-01T00:00:00Z"
  },
  "timestamp": "2026-05-01T05:00:00Z",
  "source": "order-service"
}
```

## Customer Lifetime Value (CLV)

Modeled total contribution margin per customer over their expected
lifetime.

```json
{
  "id": "customer_lifetime_value_quarterly",
  "name": "Customer Lifetime Value",
  "description": "Modeled total contribution margin per customer over their expected lifetime, produced by the CLV model trained on quarterly cohorts.",
  "value": 312.55,
  "unit": "EUR",
  "aggregation": "model_based",
  "time_window": {
    "type": "quarterly",
    "start": "2026-01-01T00:00:00Z",
    "end": "2026-04-01T00:00:00Z"
  },
  "timestamp": "2026-04-15T07:00:00Z",
  "source": "ml-platform"
}
```

::: tip
Marketing channels often define the same metric slightly differently
(e.g. attribution windows for conversion rate). Encode the
attribution model in the `id` (e.g. `conversion_rate_last_click_daily`)
or document it in the `description` so that values stay comparable.
:::
