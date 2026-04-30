---
title: Units of Measurement (UoM)
description: Common units of measurement for KPIs across business domains
---

# Units of Measurement (UoM)

A consistent set of units is the foundation for comparable KPIs.
The following groups list common units of measurement that openKPI
supports out of the box, organized by business domain.

## 1. Financial KPIs

- **Currency**: EUR, USD, GBP
- **Percent (%)**: margin, growth, conversion rate
- **Ratio**: e.g. debt-to-equity
- **Period**: €/month, €/year
- **Index (base = 100)**: price or performance indices

---

## 2. Customer & Marketing KPIs

- **Count (#)**: leads, customers, sign-ups
- **Percent (%)**: conversion rate, churn rate
- **Cost per unit**: €/lead, €/acquisition
- **Time**: days to conversion
- **Score values**: e.g. NPS (-100 to +100)

---

## 3. Operations & Process KPIs

- **Time**: seconds, minutes, hours, days
- **Throughput**: units/hour, requests/second
- **Error rate (%)**
- **Utilization (%)**
- **Cycle time**

---

## 4. Tech & Product KPIs

- **Latency**: ms (milliseconds)
- **Availability (%)**: uptime
- **Requests per second (RPS)**
- **Storage**: MB, GB, TB
- **User activity**: DAU, MAU (count)
- **Crash rate (%)**

---

## 5. Production & Supply Chain

- **Units (#)**: number of items produced
- **Weight**: kg, tonnes
- **Volume**: liters, m³
- **Time per unit**
- **Scrap rate (%)**

---

## 6. ESG & Sustainability

- **CO₂ emissions**: kg CO₂e, tonnes CO₂e
- **Energy consumption**: kWh, MWh
- **Water consumption**: liters, m³
- **Percent (%)**: recycling rate

---

## 7. HR & Organization

- **Headcount (#)**
- **Turnover rate (%)**
- **Time**: time-to-hire (days)
- **Cost**: €/hire
- **Engagement score**

---

## 8. Generic / Universal Units

These help with standardization across all domains:

- **Absolute number (#)**
- **Percent (%)**
- **Rate (/time)**: e.g. per day, per month
- **Per unit (/user, /order, /device)**
- **Index (normalized)**
- **Score (scaled values)**

::: tip
Stick to one canonical unit per metric across your organization —
mixing `seconds` and `ms` for the same KPI is the most common source
of inconsistent dashboards.
:::
