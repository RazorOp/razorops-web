---
title: Amazon EventBridge
description: In simple words, Amazon EventBridge provides an easy solution to
  integrate SAAS, custom-build applications with more than 17+ AWS services with
  the delivery of real-time data from different event sources.
image: /images/blog/amazon-eventbridge.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-12-20T08:53:00.000Z
---
**What is Amazon EventBridge?**

Amazon EventBridge is a serverless event bus that routes events from AWS services, SaaS partners, and custom applications to targets such as Lambda, Step Functions, Kinesis, SQS, and more. It provides a scalable, reliable foundation for event-driven architectures (EDA), enabling decoupled, reactive systems and cross-account or cross-region event routing.

EventBridge supersedes CloudWatch Events and adds partner event buses, schema discovery, event replay, archive, and richer routing rules.

Core concepts

- Event bus: a stream of events. Each AWS account has a default event bus; you can create custom or partner event buses.
- Event: JSON data describing a change (for example, an S3 object created, or a SaaS webhook payload).
- Rule: an event pattern that matches events and routes them to one or more targets.
- Target: a resource that processes events (Lambda, Step Functions, Kinesis Data Streams, SQS, SNS, EventBridge API destinations, etc.).
- Schema Registry: discover and store event schemas to generate code bindings for faster development.

Why use EventBridge

- Decouples producers and consumers for scalable, maintainable systems.
- Built‑in support for cross‑account/event bus routing and SaaS integrations.
- Rich event filtering with event patterns (deep JSON matching).
- First‑class support for replay, archiving, dead‑letter queues (DLQ), and retries.

Common use cases

- Application integration: connect microservices without tight coupling.
- SaaS event ingestion: receive events directly from SaaS partners (e.g., Datadog, Segment).
- Audit and telemetry: route audit logs to S3, Kinesis, or OpenSearch for analysis.
- Automated remediation: Cloud events trigger Step Functions or Lambda to remediate incidents.
- Orchestration: start Step Functions state machines on specific events.

Example: event pattern (route EC2 state change to Lambda)

```json
{
  "source": ["aws.ec2"],
  "detail-type": ["EC2 Instance State-change Notification"],
  "detail": { "state": ["stopped", "terminated"] }
}
```

Create a rule (AWS CLI)

```bash
aws events put-rule --name "ec2-stop-rule" --event-pattern file://ec2-pattern.json --state ENABLED
aws events put-targets --rule ec2-stop-rule --targets "Id"="1","Arn"="arn:aws:lambda:us-east-1:123456789012:function:HandleEC2State"
```

Example: publish a custom event (Python / boto3)

```python
import boto3
eb = boto3.client('events')

response = eb.put_events(Entries=[{
    'Source': 'com.example.myapp',
    'DetailType': 'order_placed',
    'Detail': '{"orderId":"1234","amount":79.99}',
    'EventBusName': 'default'
}])
print(response)
```

Delivering events to multiple targets (fan‑out)

EventBridge rules can target multiple consumers in parallel (e.g., push the same event to a Lambda function for business processing, to Kinesis for analytics, and to SQS for durable downstream processing).

Reliability and error handling

- Configure a dead‑letter queue (DLQ) for targets that fail repeatedly.
- Use RetryPolicy on targets and set maximum retry attempts and intervals.
- Archive and Replay let you store events and replay them into the bus for debugging or backfilling.

Best practices

- Design events as small, immutable JSON documents and include schema versioning.
- Model around event types and consumer needs; avoid sending large payloads—store large blobs in S3 and provide signed URLs.
- Use event patterns to filter at the bus level and reduce downstream processing costs.
- For high‑throughput workloads, route events to Kinesis or EventBridge Pipes for buffering.
- Use cross‑account event buses with IAM permissions for SaaS or multi‑account architectures.

Related Razorops posts

- [AWS Lambda](/blog/aws-lambda/)
- [AWS Step Functions](/blog/aws-step-functions/)
- [Amazon SQS](/blog/amazon-simple-queue-service-sqs/)
- [AWS SNS](/blog/aws-sns-simple-notification-service/)
- [Amazon Kinesis](/blog/aws-kinesis/)
- [Amazon DynamoDB](/blog/amazon-dynamodb/)

Top 20 AWS Solutions Architect — EventBridge & EDA focused FAQ (brief answers)

1. Q: What is EventBridge? — A serverless event bus for routing events from AWS, SaaS, and custom apps.
2. Q: EventBridge vs SNS/SQS? — SNS/SQS are messaging/pub-sub/queue primitives; EventBridge is a rules‑based event router with richer filtering, schema registry, and partner integrations.
3. Q: Can EventBridge deliver to Lambda? — Yes; Lambda is a first‑class target.
4. Q: How do I filter events? — Use event patterns with deep JSON matching in rule definitions.
5. Q: What is the Schema Registry? — A service to discover, store, and version event schemas and generate code bindings.
6. Q: How to secure cross‑account events? — Use resource‑based policies on the event bus and IAM permissions for principals.
7. Q: How much does EventBridge cost? — Generally $1 per million custom or partner events ingested; other features (schema discovery, replay) have additional charges—check the AWS pricing page for current rates.
8. Q: What are EventBridge Pipes? — A way to connect sources to targets with built‑in filtering, enrichment, and buffering (useful for simplifying code for common integrations).
9. Q: When to use EventBridge vs Kinesis? — Use EventBridge for routing discrete events and integrations; use Kinesis for high‑throughput streaming and ordered processing.
10. Q: Can I replay events? — Yes, EventBridge supports event archiving and replay.
11. Q: How to handle failed target deliveries? — Configure DLQs (SQS) and use RetryPolicy on targets.
12. Q: How to test event patterns? — Use the EventBridge console or `aws events test-event-pattern` with sample events.
13. Q: Are subscriptions expensive? — EventBridge pricing is per‑event ingested; reduce cost with filtering and caching at the source.
14. Q: Can I enrich events? — Yes—use Pipes or Lambda to enrich events before delivering to targets.
15. Q: How to handle large payloads? — Keep events small; store payloads in S3 and send references in events.
16. Q: Can EventBridge call external HTTP endpoints? — Yes, use API Destinations to call external endpoints with credentials and rate limiting.
17. Q: How to integrate SaaS partners? — Configure partner event sources and grant permissions to the partner to publish to your bus.
18. Q: How to monitor EventBridge? — CloudWatch metrics and logs; monitor put-event success/failure and target errors.
19. Q: How is ordering handled? — EventBridge does not guarantee global ordering; for ordering guarantees use Kinesis Data Streams.
20. Q: When not to use EventBridge? — For ordered, high‑throughput streaming or low‑latency millisecond processing where Kinesis is more appropriate.


