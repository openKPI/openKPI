---
title: Event Transport
description: Streaming KPI values via events
---

# Event Transport

The event transport defines how openKPI documents are exchanged
asynchronously as a stream of events. It is the recommended option
for continuous, low-latency propagation of KPI values to multiple
consumers.

## Characteristics

- **Push model** — producers emit events as soon as a value is available
- **Asynchronous** — consumers process events independently of producers
- **Fan-out** — many consumers can subscribe to the same stream
- **Replayable** — durable brokers allow replay from a given offset

## Supported Brokers

The specification is broker-agnostic. Common choices include:

- Apache Kafka
- NATS
- RabbitMQ / AMQP
- MQTT
- Cloud-native streams (AWS Kinesis, Google Pub/Sub, Azure Event Hubs)

## Event Envelope

Each event carries a single KPI document as its payload. The envelope
adds metadata for routing and idempotency:

| Field        | Description                                                 |
| ------------ | ----------------------------------------------------------- |
| `event_id`   | Unique identifier of the event (UUID)                       |
| `event_type` | Always `openkpi.value` for KPI value events                 |
| `emitted_at` | ISO-8601 timestamp the event was produced                   |
| `payload`    | A complete openKPI document (see [Core KPI](../core-kpi))   |

## Example

```json
{
  "event_id": "5f1d9a4b-2c3e-4f6a-9b1d-7c8e2f4a5b6c",
  "event_type": "openkpi.value",
  "emitted_at": "2026-04-01T02:15:00Z",
  "payload": {
    "id": "latency_p95_rolling_7d",
    "name": "Latency p95 (rolling 7d)",
    "description": "95th percentile of HTTP request latency observed at the public API gateway over the last 7 days.",
    "value": 187.4,
    "unit": "ms",
    "aggregation": "p95",
    "time_window": {
      "type": "rolling_7d",
      "start": "2026-03-25T00:00:00Z",
      "end": "2026-04-01T00:00:00Z"
    },
    "timestamp": "2026-04-01T02:15:00Z",
    "source": "api-gateway"
  }
}
```

## When to Use

- Real-time dashboards and alerting
- Multiple downstream consumers of the same KPI
- Decoupled producer/consumer architectures

For pull-based, request/response access use the
[API](./api) transport instead.
