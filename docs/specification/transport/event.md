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
adds metadata for routing, idempotency and provenance:

| Field        | Description                                                                                                          |
| ------------ | -------------------------------------------------------------------------------------------------------------------- |
| `event_id`   | Unique identifier of the event (UUID)                                                                                |
| `event_type` | Always `openkpi.value` for KPI value events                                                                          |
| `emitted_at` | ISO-8601 timestamp the event was produced                                                                            |
| `payload`    | A complete openKPI document (see [Core KPI](../core-kpi))                                                            |
| `digest`     | *(recommended)* SHA-256 hash of the canonicalized `payload` JSON, hex-encoded — lets consumers detect tampering      |
| `key_id`     | *(recommended)* Identifier of the public key used to sign the event, resolvable via JWKS or an out-of-band registry  |
| `signature`  | *(recommended)* Detached signature over `event_id`, `event_type`, `emitted_at` and `digest`, base64-encoded          |

## Integrity & Provenance

Events travel through brokers that often cannot enforce per-message
authorization. To prevent tampering and to make the publisher
accountable, the envelope SHOULD carry a detached signature using
`digest`, `key_id` and `signature`.

The recommended scheme is **Ed25519** with public keys distributed via
JWKS, but the spec is algorithm-agnostic — `key_id` resolution
determines the algorithm and key material.

Consumers MUST verify the signature before using the value for any
decision that changes state — alerting, executive reporting,
regulatory submission. Unsigned events are acceptable only for
development and on trusted brokers inside a single security boundary.

When a broker offers transport-level authentication (mTLS, SASL,
broker ACLs), it SHOULD still be combined with a payload signature:
transport auth proves *who connected to the broker*, signatures prove
*who produced the value*.

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
  },
  "digest": "9b74c9897bac770ffc029102a200c5de2c3e4b1c8a4d6f9e1a2b7c8d3e4f5061",
  "key_id": "api-gateway-2026-q2",
  "signature": "MEUCIQDk7y3Yq6q4...A7rW2GZ2F1A=="
}
```

## When to Use

- Real-time dashboards and alerting
- Multiple downstream consumers of the same KPI
- Decoupled producer/consumer architectures

For pull-based, request/response access use the
[API](./api) transport instead.
