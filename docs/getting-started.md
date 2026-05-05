---
title: Getting Started
description: First steps with openKPI
---

# Getting Started

openKPI is **a specification, not a piece of software**. There is
nothing to install, no server to run and no SDK that has to be on
your machine before you can begin. Getting started is therefore
about understanding the concept and seeing where it fits into your
existing tooling.

## 1. Read and Understand the Concept

Start with the specification itself. The following pages describe
what openKPI is, how a KPI is structured and which building blocks
are available:

- [Introduction](/specification/introduction) — the core ideas behind openKPI
- [Core KPI](/specification/core-kpi) — the JSON structure and every field explained
- [Units of Measurement](/specification/units-of-measurement)
- [Aggregation](/specification/aggregation)
- [Time Window](/specification/time-window)

Once these are clear, you can describe any of your existing KPIs in
the openKPI format on paper or in a JSON file — without writing any
code.

## 2. Check for a Matching SDK

If you want to produce or consume openKPI documents from your own
code, see whether an SDK already exists for your language of choice:

- [SDKs](/sdks/introduction) — list of available and planned SDKs

If a suitable SDK exists, install it through your usual package
manager. If not, the JSON structure is small enough to be produced
or parsed with the standard library of any modern language.

## 3. Check Whether Your Tools Already Speak openKPI

Many BI, monitoring and analytics tools are gradually adding native
support for the specification. Before building a custom integration,
check the documentation of the systems you already use:

- Does your dashboard / BI tool import openKPI documents directly?
- Does your data platform expose KPIs via the
  [API transport](/specification/transport/api) or the
  [Event transport](/specification/transport/event)?
- Does your monitoring stack emit KPI events you can simply consume?

If yes, you may be able to wire things together with configuration
only, without writing a single line of glue code.

## Summary

| Step | What to do                                                            |
| ---- | --------------------------------------------------------------------- |
| 1    | Read the [Introduction](/specification/introduction) and the [Core KPI](/specification/core-kpi) page |
| 2    | Pick a matching [SDK](/sdks/introduction) — or use plain JSON         |
| 3    | Check whether your existing tools already support openKPI             |

::: tip
openKPI is intentionally lightweight: if step 1 is done, you already
have everything you need to discuss, design and document KPIs in a
vendor-neutral way.
:::
