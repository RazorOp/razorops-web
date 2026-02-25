---
title: Amazon Simple Queue Service (SQS)
description: Amazon Simple Queue Service (SQS) is a serverless service used to
  decouple (loose couple) serverless applications and components.
image: /images/blog/amazon-simple-queue-service-sqs.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-12-23T13:33:00.000Z
---
## What is Amazon SQS?

Amazon Simple Queue Service (SQS) is a fully managed, serverless message queuing service that enables decoupling of microservices, distributed systems, and serverless applications. Producers send messages to a queue; consumers poll the queue, process each message, and delete it. SQS handles message storage, delivery retries, scaling, and provides reliability guarantees so you can focus on application logic.

Messages are persisted redundantly across multiple Availability Zones and can be encrypted with AWS KMS. SQS supports both short and long polling (to reduce empty responses) and lets you tune parameters such as visibility timeout and retention.

### Queue types

- **Standard queues**: virtually unlimited throughput, at‑least‑once delivery, and best‑effort ordering. Ideal for high‑volume, bursty workloads where occasional duplicates are acceptable.  
- **FIFO queues**: guarantees exactly‑once processing and strict ordering. Baseline throughput 300 messages/sec, or up to 3,000 msg/s with batching (10 messages/batch) or high‑throughput FIFO. Use when order matters (e.g. financial transactions, process workflows).

### Key features

- **Visibility timeout** (0 sec–12 hrs) prevents other consumers from processing a message while it’s being handled.  
- **Retention period** (1 min–14 days, default 4 days).  
- **Delay queues**: delay delivery of messages up to 15 minutes.  
- **Dead‑letter queues (DLQs)**: route messages that fail processing multiple times for later analysis or replay.  
- **Message size**: up to 256 KB (use the Extended Client Library for larger payloads via S3).  
- **Encryption**: SSE‑SQS with AWS KMS keys.  
- **Message attributes** for metadata (up to 10 per message).  
- **Batch operations**: send/receive/delete up to 10 messages at once to improve efficiency.  
- **Access control**: IAM policies and resource policies for cross‑account access.  

### Common use cases

- **Microservices communication**: decouple order service and inventory service; the order service pushes new orders to an SQS queue consumed by inventory processors.  
- **Work queue**: distribute image processing tasks across a fleet of EC2 or Lambda workers, scaling consumers based on queue depth (CloudWatch alarm trigger).  
- **Buffering to absorb bursts**: an API Gateway front end enqueues requests during traffic spikes, downstream systems process them at their own pace.  
- **Fan‑out and pub/sub**: use SNS topic with SQS subscriptions to fan out messages to multiple independent processing pipelines.  

### Example (Python boto3)

```python
import boto3
sqs = boto3.resource('sqs')
queue = sqs.get_queue_by_name(QueueName='MyQueue')

# send
queue.send_message(MessageBody='Hello', MessageAttributes={'customer':'123'})

# receive
for msg in queue.receive_messages(MaxNumberOfMessages=10, WaitTimeSeconds=20):
    print(msg.body, msg.message_attributes)
    msg.delete()
```

### Best practices

- Enable long polling (10–20 sec) to reduce empty responses and cost.  
- Set appropriate visibility timeout based on processing time; extend if needed.  
- Use DLQs to catch poison messages and avoid endless retries.  
- Tag queues for cost allocation and use CloudWatch metrics (ApproximateNumberOfMessagesVisible, AgeOfOldestMessage) to scale consumers.  
- Prefer FIFO only when ordering or exactly‑once processing is required; use standard otherwise for higher throughput.  
- Monitor throttling metrics and apply exponential backoff in producers.

### Pricing

- Standard queues: $0.40 per million requests (Send, Receive, Delete).  
- FIFO queues: $0.50 per million requests + $0.40 per million FIFO‑deduplication checks.  
- First 1 million requests per month are free.  
- Long polling and batch requests count as single requests.  

(Refer to AWS pricing page for updates.)


## Related Razorops articles

- [AWS Lambda](/blog/aws-lambda/)  
- [AWS SNS vs SQS](/blog/aws-sns-vs-sqs/)  
- [AWS Step Functions](/blog/aws-step-functions/)  
- [AWS EventBridge](/blog/aws-eventbridge/)  
- [Top 50 AWS DevOps Interview Questions and Answers](/blog/top-50-aws-devops-interview-questions-and-answers/)


## Top 20 AWS Solutions Architect interview FAQs

1. Q: What is a VPC and why is it important?
A: A Virtual Private Cloud isolates resources at the network level, providing subnets, routing, security groups, and private connectivity.

2. Q: Security groups vs NACLs—differences?
A: Security groups are stateful and attached to instances; NACLs are stateless and apply to subnets.

3. Q: How would you design for high availability?
A: Use multiple AZs, autoscaling groups, load balancers, and managed services (RDS Multi-AZ).

4. Q: What is Auto Scaling and how does it work?
A: Auto Scaling adjusts EC2 capacity using policies, health checks, and scheduled scaling to meet demand and maintain availability.

5. Q: What is IAM best practice?
A: Use least privilege, roles for services, enable MFA, rotate credentials, and use centralized identity providers.

6. Q: How does S3 provide durability?
A: S3 replicates data across multiple AZs and performs continuous integrity checks (11 9s durability for standard storage).

7. Q: When to use SQS vs SNS?
A: Use SQS for decoupled queue processing; use SNS for pub/sub notifications to multiple subscribers.

8. Q: What is cross-region replication (CRR) for S3?
A: CRR asynchronously copies objects to another region for DR and compliance.

9. Q: What is an Auto Scaling group?
A: ASG maintains EC2 fleet capacity based on policies and replaces unhealthy instances automatically.

10. Q: How does Route 53 routing policy work (simple, weighted, latency)?
A: Simple returns a single resource; weighted distributes traffic by weight; latency routes to the lowest-latency region.

11. Q: When to use RDS Multi-AZ vs Read Replica?
A: Multi-AZ for HA and failover; Read Replica for read scaling.

12. Q: What is CloudFormation and why use it?
A: Declarative IaC to provision AWS resources and track drift.

13. Q: How do you optimize costs in AWS?
A: Rightsize, use spot/reserved/savings plans, lifecycle policies for storage, and monitor spend with Cost Explorer.

14. Q: Explain S3 consistency model.
A: S3 provides strong read-after-write consistency for new objects and updates across all regions.

15. Q: IAM best practices?
A: Apply least privilege, use roles, enable MFA, rotate credentials, and use centralized identity providers.

16. Q: How do you design a data lake on AWS?
A: Use S3 for storage, Glue Data Catalog for metadata, Lake Formation for access control, and Athena/EMR/SageMaker for processing.

17. Q: Differences between ALB and NLB?
A: ALB is Layer 7 with routing features; NLB is Layer 4 optimized for throughput and static IPs.

18. Q: What is a VPC endpoint and when to use it?
A: VPC endpoints provide private connectivity to AWS services without using the public internet.

19. Q: How would you perform disaster recovery in AWS?
A: Choose a DR strategy (Backup & Restore, Pilot Light, Warm Standby, Multi-Site) based on RTO/RPO and automate failover where possible.

20. Q: How do you monitor and troubleshoot AWS infrastructure?
A: Use CloudWatch metrics/logs, CloudTrail for API audits, X-Ray for tracing, VPC Flow Logs for network debugging, and third-party monitoring/APM tools.
