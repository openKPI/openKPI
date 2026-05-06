---
title: Time Window
description: Time window definitions used by openKPI
---

# Time Window

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

Calendar windows are inherently **time-zone- and calendar-dependent**.
Two values labelled `monthly` for `2026-03` are not comparable unless
they were bucketed in the same time zone and the same calendar
system. The `timezone` and `calendar` fields below make this explicit.

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

---

## 9. Time Zone & Calendar

A calendar window without a time zone is ambiguous. „March 2026" in
Tokyo starts nine hours earlier than in UTC and 16 hours earlier than
in Los Angeles. To keep KPI values comparable, every calendar window
SHOULD declare the time zone and calendar system it was bucketed in.

### `timezone`

IANA time zone identifier (e.g. `Europe/Berlin`, `Asia/Tokyo`, `UTC`).
The `start` and `end` ISO-8601 timestamps remain in UTC offset notation
— `timezone` only documents which local clock the boundaries align to.

```json
"time_window": {
  "type": "monthly",
  "start": "2026-02-28T23:00:00Z",
  "end": "2026-03-31T22:00:00Z",
  "timezone": "Europe/Berlin"
}
```

The `start`/`end` timestamps above are the UTC instants that correspond
to midnight on March 1st and April 1st in Berlin local time — so a
consumer in any zone can compare them with `last-month-in-Berlin`
exactly.

### `calendar`

The calendar system the labels (`monthly`, `quarterly`, `yearly`, …)
refer to:

- `gregorian` *(default)* — standard calendar months and weeks.
- `iso` — ISO-8601 weeks: weeks start Monday, week 1 contains the
  first Thursday of the year. Use this whenever you produce
  `weekly` KPIs that should align with ISO week numbers.
- `fiscal` — the organization's fiscal calendar. The fiscal start
  month and week numbering must be documented in the KPI's
  `description` (e.g. „fiscal year starts on 1 February"); without
  it, two systems publishing `quarterly` KPIs with `calendar: fiscal`
  cannot be compared.

### Rolling, real-time and event-based windows

Rolling windows (`rolling_7d`, `last_15m`, …) are anchored to absolute
instants, not calendar boundaries — `timezone` and `calendar` are
irrelevant for them and SHOULD be omitted.

::: tip
Combine the time window with the aggregation in the KPI name —
e.g. `revenue_sum_monthly` or `latency_p95_rolling_7d` — so that
consumers can never mistake the scope of a value.
:::
