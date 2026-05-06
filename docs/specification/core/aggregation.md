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

These are the everyday building blocks used in nearly every reporting
context. They operate on a flat set of values without any additional
weighting or windowing and form the foundation for more advanced
aggregations.

| Identifier        | Name                | Description                          | Example                              |
| ----------------- | ------------------- | ------------------------------------ | ------------------------------------ |
| `sum`             | Sum                 | Total of all values                  | Total revenue across all orders      |
| `avg`             | Average (Mean)      | Arithmetic mean of all values        | Average order value                  |
| `min`             | Minimum             | Smallest value in the set            | Lowest temperature recorded today    |
| `max`             | Maximum             | Largest value in the set             | Peak concurrent users this month     |
| `count`           | Count               | Number of records                    | Number of orders placed              |
| `count_distinct`  | Distinct Count      | Number of unique values              | Number of unique customers           |

---

## Advanced Statistical Aggregations

When distributions matter — for latencies, prices or sensor data — a
plain average can be misleading. Statistical aggregations describe the
shape of the data, not just its center, and are essential for SLOs and
quality metrics.

| Identifier   | Name               | Description                                    | Example                                |
| ------------ | ------------------ | ---------------------------------------------- | -------------------------------------- |
| `median` or `p50` | Median        | 50th percentile, robust against outliers       | Median response time                   |
| `p90`        | 90th Percentile    | Value below which 90% of observations fall     | P90 page load time                     |
| `p95`        | 95th Percentile    | Value below which 95% of observations fall     | P95 API latency for SLO monitoring     |
| `p99`        | 99th Percentile    | Value below which 99% of observations fall     | P99 checkout duration                  |
| `stddev`     | Standard Deviation | Average spread around the mean                 | Variability of daily revenue           |
| `variance`   | Variance           | Squared measure of dispersion                  | Variance in delivery times             |
| `quantile`   | Quantile           | Generalized percentile at a configurable point | 0.75 quantile of session duration      |

---

## Weighted Aggregations

Not every observation should count equally. Weighted aggregations
attach a weight — such as volume, traffic or duration — to each value
so that more significant observations have greater influence on the
result.

| Identifier       | Name             | Description                                     | Example                                  |
| ---------------- | ---------------- | ----------------------------------------------- | ---------------------------------------- |
| `weighted_avg`   | Weighted Average | Mean where each value carries a weight          | Average price weighted by volume sold    |
| `weighted_sum`   | Weighted Sum     | Sum where each value is multiplied by a weight  | Risk score weighted by exposure          |
| `weighted_rate`  | Weighted Rate    | Rate weighted by an underlying base measure     | Conversion rate weighted by traffic      |

---

## Time-based Aggregations

KPIs almost always live on a timeline. Time-based aggregations either
bucket values into fixed periods or compute running figures that
update as time progresses, making trends and progress against targets
visible.

| Identifier        | Name             | Description                                          | Example                              |
| ----------------- | ---------------- | ---------------------------------------------------- | ------------------------------------ |
| `period_sum`      | Period Sum       | Sum bucketed into fixed periods                      | Daily revenue, monthly active users  |
| `rolling_avg`     | Rolling Average  | Moving mean over a sliding window                    | 7-day rolling average of signups     |
| `moving_sum`      | Moving Sum       | Moving total over a sliding window                   | 30-day moving sum of orders          |
| `ytd`             | Year-to-Date     | Cumulative value from the start of the year          | YTD revenue                          |
| `mtd`             | Month-to-Date    | Cumulative value from the start of the month         | MTD signups                          |
| `qtd`             | Quarter-to-Date  | Cumulative value from the start of the quarter       | QTD bookings                         |
| `cumulative_sum`  | Cumulative Sum   | Running total since a defined start point            | Cumulative downloads since launch    |

---

## Change & Delta Aggregations

These aggregations express how a value evolves rather than its
absolute level. They are the basis for growth dashboards, trend
analysis and any KPI that compares one period against another.

| Identifier        | Name                  | Description                                  | Example                              |
| ----------------- | --------------------- | -------------------------------------------- | ------------------------------------ |
| `delta`           | Absolute Change       | Difference between two values                | Revenue change vs. previous month    |
| `relative_change` | Relative Change (%)   | Percentage difference between two values     | Month-over-month growth in %         |
| `growth_rate`     | Growth Rate           | Rate of change over a defined period         | Quarterly user growth rate           |
| `cagr`            | Compound Growth Rate  | Mean annual growth assuming compounding      | 5-year revenue CAGR                  |
| `trend`           | Trend / Slope         | Slope of a linear fit through the values     | Trend of weekly active users         |

---

## Rates & Ratios (Derived Aggregations)

Rates and ratios combine two base measures into a single, normalized
indicator. They make values comparable across units of different size
and are often the most communicated KPIs in business reporting.

| Identifier        | Name             | Description                                       | Example                                |
| ----------------- | ---------------- | ------------------------------------------------- | -------------------------------------- |
| `ratio`           | Ratio            | One measure divided by another                    | Revenue divided by cost                |
| `rate`            | Rate             | Number of events per time unit                    | Requests per second                    |
| `conversion_rate` | Conversion Rate  | Successful events divided by total events         | Checkouts divided by sessions          |
| `churn_rate`      | Churn Rate       | Lost subjects divided by total at start of period | Monthly customer churn rate            |
| `retention_rate`  | Retention Rate   | Retained subjects divided by total at start       | 30-day user retention                  |

---

## Logical / Boolean Aggregations

When the underlying data is true/false rather than numeric, logical
aggregations summarize it into a single statement or proportion. They
are common in compliance, monitoring and feature-adoption scenarios.

| Identifier   | Name        | Description                                  | Example                                  |
| ------------ | ----------- | -------------------------------------------- | ---------------------------------------- |
| `any`        | ANY / OR    | True if at least one value is true           | Any service in the cluster is unhealthy  |
| `all`        | ALL / AND   | True only if every value is true             | All checks passed for a release          |
| `count_true` | Count True  | Number of values that are true               | Number of failing health checks          |
| `share`      | Share (%)   | Proportion of true values relative to total  | Share of users who enabled 2FA           |

---

## Special / Advanced Aggregations

This group covers aggregations used for ranking, distribution analysis
and outlier handling. They are typically applied on top of the basic
aggregations to make results more robust or more focused.

| Identifier        | Name             | Description                                     | Example                                  |
| ----------------- | ---------------- | ----------------------------------------------- | ---------------------------------------- |
| `top_n`           | Top-N            | The N largest values or groups                  | Top 10 best-selling products             |
| `bottom_n`        | Bottom-N         | The N smallest values or groups                 | Bottom 5 underperforming regions         |
| `rank`            | Rank             | Position of a value within an ordered set       | Sales rep ranking by closed revenue      |
| `percentile_rank` | Percentile Rank  | Relative standing of a value as a percentile    | A customer's spend percentile rank       |
| `mode`            | Mode             | Most frequent value                             | Most common payment method               |
| `histogram`       | Histogram        | Counts grouped into value ranges (buckets)      | Distribution of order amounts            |
| `winsorized_mean` | Winsorized Mean  | Mean after capping extreme values               | Mean response time, capped at P99        |
| `trimmed_mean`    | Trimmed Mean     | Mean after removing the highest and lowest x%   | Trimmed mean of survey scores            |

---

## Best Practices for Your Standard

- Always define the aggregation **explicitly** — never rely on an implicit `avg`.
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
