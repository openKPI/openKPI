---
title: Time Windows
description: Time window definitions used by openKPI
---

# Time Windows

A time window defines the slice of time over which a KPI is evaluated.
Two values from the "same" KPI are only comparable if they share the
same time window — making the window an explicit, named part of every
KPI definition.

## 1. Fixed Calendar Windows

Classic, easy to compare, well suited for reporting:

- Hourly
- Daily
- Weekly
- Monthly
- Quarterly
- Yearly

Optional precision:

- Calendar week vs. ISO week
- Fiscal year vs. calendar year

---

## 2. To-Date Windows (Running Periods)

Show progress within the current period:

- **MTD** — Month-to-Date
- **QTD** — Quarter-to-Date
- **YTD** — Year-to-Date
- **WTD** — Week-to-Date

Be explicit about when the period starts (e.g. the 1st of the month).

---

## 3. Rolling / Sliding Windows

Very important for operational KPIs and trends:

- Rolling 7 days (`rolling_7d`)
- Rolling 30 days (`rolling_30d`)
- Rolling 90 days
- Rolling 12 months

Properties:

- Sliding, independent of calendar boundaries
- Ideal for smoothing and trend detection

---

## 4. Cumulative Windows

Aggregation over the full history or from a defined starting point:

- All-time / lifetime
- Since start date (`since_launch`)
- Cumulative to date

---

## 5. Real-time / Near Real-time

For monitoring and tech KPIs:

- Last X minutes (`last_5m`, `last_15m`)
- Last hour (`last_1h`)
- Near real-time (streaming window)

---

## 6. Event-based Windows

Not bound to the calendar:

- Since registration (per user)
- Since last login
- Session-based
- Lifecycle phases (e.g. onboarding phase)

---

## 7. Comparison Windows

For analysis and benchmarks:

- Previous period (`previous_period`)
- Same period last year (YoY)
- Previous week (WoW)
- Previous quarter (QoQ)

---

## 8. Custom / Ad-hoc Windows

For flexible analysis:

- Custom range (e.g. `2026-01-01` → `2026-03-15`)
- Fixed intervals (e.g. campaign runtime)
- Feature release windows

::: tip
Combine the time window with the aggregation in the KPI name —
e.g. `revenue_sum_monthly` or `latency_p95_rolling_7d` — so that
consumers can never mistake the scope of a value.
:::
