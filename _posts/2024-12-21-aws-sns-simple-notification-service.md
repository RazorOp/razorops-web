---
title: "AWS SNS (Simple Notification Service) "
description: Amazon Simple Notification Service (Amazon SNS) is a web service
  that makes it easy to set up, operate, and send notifications from the cloud.
image: /images/blog/aws-sns-simple-notification-service.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-12-21T09:05:00.000Z
---
## What is AWS SNS?

Amazon Simple Notification Service (SNS) is a fully managed pub/sub messaging service that enables applications, end‑users, and devices to receive notifications from the cloud. Publishers send messages to an SNS **topic**; the service then delivers copies of those messages to **subscribers** using protocols such as HTTP/S, email, SMS, Amazon SQS, Lambda, and mobile push (APNS, FCM, etc.).

SNS simplifies building distributed systems by decoupling senders and receivers, enabling fan‑out architectures, and handling message delivery at scale.

### Topic types

- **Standard topics**: offer high throughput, at‑least‑once delivery, and best‑effort ordering. They support unlimited subscribers and are used for general pub/sub needs.  
- **FIFO topics**: guarantee exactly‑once processing and preserve message order. Throughput is 300/sec per API action (3,000/sec with batching). Use when ordering and deduplication are critical (e.g. financial transactions).

### Core features

- Scalable, push‑based delivery to multiple endpoints.  
- Flexible protocols: HTTP/S, email/JSON, SMS, SQS, Lambda, mobile push.  
- Message filtering with subscription policies (attribute-based filtering).  
- Delivery retries and dead‑letter queues for failed notifications.  
- Message encryption with SSE‑KMS and FIFO deduplication.  
- Mobile push notifications via Amazon Pinpoint integration.  

### Use cases

- **Application-to-person (A2P)**: send SMS alerts, transactional emails, or mobile push to end-users (e.g. order confirmations, OTP codes).  
- **Application-to-application (A2A)**: trigger Lambda functions, push messages into SQS queues, or notify downstream microservices in event-driven architectures.  
- **Fan-out**: an SNS topic subscribed by multiple SQS queues to distribute workload across services.  
- **Workflow triggering**: notify Step Functions or ECS tasks when events occur.

### Example (Node.js)

```javascript
const AWS = require('aws-sdk');
const sns = new AWS.SNS();

// publish message
sns.publish({
  TopicArn: 'arn:aws:sns:us-east-1:123:MyTopic',
  Message: 'Hello subscribers',
  MessageAttributes: { priority: { DataType: 'String', StringValue: 'high' } }
});

// create subscription
sns.subscribe({
  TopicArn: 'arn:aws:sns:us-east-1:123:MyTopic',
  Protocol: 'email',
  Endpoint: 'user@example.com'
});
```

### Best practices

- Use message attributes to filter subscriptions and reduce unnecessary traffic.  
- Encrypt topics with KMS and restrict access with IAM policies.  
- Monitor `NumberOfMessagesPublished`, `NumberOfNotificationsDelivered`, and `NumberOfNotificationsFailed` metrics; set alarms on delivery failures.  
- For global delivery, use SNS with endpoint region configuration or Amazon Pinpoint.  
- Prefer FIFO only when ordering/deduplication is required; standard topics are more cost‑efficient for most workloads.

### Pricing overview

- Standard topics: $0.50 per 1M requests published; additional costs for SMS, email, or mobile push delivery.  
- FIFO topics: $2.00 per 1M requests published/delivered plus data payload charges.  
- First 1M publishes per month are free.  

(Refer to AWS pricing page for latest rates.)


## Related Razorops articles

- [AWS SQS](/blog/amazon-simple-queue-service-sqs/)  
- [AWS Step Functions](/blog/aws-step-functions/)  
- [AWS EventBridge](/blog/aws-eventbridge/)  
- [AWS Lambda](/blog/aws-lambda/)  
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
A: ASG maintains EC2 fleet capacity based on policies, scales automatically, and replaces unhealthy instances.

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
A: Choose a DR strategy (Backup & Restore, Pilot Light, Warm Standby, Multi-Site) based on RTO/RPO and automate failover when possible.

20. Q: How do you monitor and troubleshoot AWS infrastructure?
A: Use CloudWatch metrics/logs, CloudTrail for API audits, X-Ray for tracing, VPC Flow Logs for network debugging, and third-party monitoring/APM tools.
