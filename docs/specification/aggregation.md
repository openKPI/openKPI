---
title: Aggregation
description: Aggregation methods supported by openKPI
---

# Aggregation

An aggregation defines how individual measurements are combined into
a single KPI value. Choosing the right aggregation is just as important
as choosing the right unit — the same raw data can tell very different
stories depending on how it is summarized.

## Basic Aggregations

- **Sum (SUM)** — total value (e.g. revenue)
- **Average (AVG / Mean)** — arithmetic mean
- **Minimum (MIN)** — smallest value
- **Maximum (MAX)** — largest value
- **Count (COUNT)** — number of records
- **Distinct Count (COUNT DISTINCT)** — number of unique values

---

## Advanced Statistical Aggregations

- **Median** — robust mean (50th percentile)
- **Percentiles (P90, P95, P99)** — distribution analysis
- **Standard deviation (STDDEV)** — spread
- **Variance** — measure of dispersion
- **Quantiles** — generalized form of percentiles

---

## Weighted Aggregations

- **Weighted average** — e.g. price weighted by volume
- **Weighted sum**
- **Weighted rate** — e.g. conversion rate weighted by traffic

---

## Time-based Aggregations

- **Period sum** — e.g. per day / month
- **Rolling average** — moving mean over a window
- **Moving sum**
- **Year-to-Date (YTD)**
- **Month-to-Date (MTD)**
- **Quarter-to-Date (QTD)**
- **Cumulative sum**

---

## Change & Delta Aggregations

- **Absolute change (delta)**
- **Relative change (%)**
- **Growth rate**
- **Compound growth rate (CAGR)**
- **Trend / slope**

---

## Rates & Ratios (Derived Aggregations)

- **Ratio** — e.g. revenue / cost
- **Rate** — e.g. events per time
- **Conversion rate**
- **Churn rate**
- **Retention rate**

---

## Logical / Boolean Aggregations

- **ANY / OR** — at least one true
- **ALL / AND** — all true
- **COUNT TRUE**
- **Share (%)** — proportion of the total

---

## Special / Advanced Aggregations

- **Top-N / Bottom-N**
- **Rank / percentile rank**
- **Mode** — most frequent value
- **Histogram / bucketed aggregation**
- **Winsorized mean** — outliers capped
- **Trimmed mean** — outliers removed

---

## Domain-specific Examples

- **ARPU** — revenue / user
- **LTV** — customer lifetime value (model-based)
- **SLA compliance (%)**
- **Utilization rate (%)**

---

## Best Practices for Your Standard

- Always define the aggregation **explicitly** — never rely on an implicit `AVG`.
- Combine time windows with aggregations (e.g. `rolling_7d_avg`).
- Separate **base metrics** from **derived KPIs**.
- Use a consistent naming scheme, for example:
  - `revenue_sum_monthly`
  - `latency_p95_ms`
  - `users_count_distinct_daily`

::: tip
A KPI without a documented aggregation is ambiguous by definition —
two consumers will compute different numbers from the same data.
:::
