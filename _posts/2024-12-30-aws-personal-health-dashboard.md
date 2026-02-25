---
title: "AWS Personal Health Dashboard "
description: AWS Personal Health Dashboard is powered by the AWS Health API that
  provides alerts and remediation measures to diagnose and resolve issues
  related to AWS resources and infrastructure.
image: /images/blog/aws-personal-health-dashboard.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-12-30T01:08:00.000Z
---


## What is AWS Personal Health Dashboard?

The AWS Personal Health Dashboard (PHD) provides alerts and guidance when AWS experiences events that might affect your resources. PHD uses the AWS Health API to deliver targeted notifications about outages, scheduled maintenance, and account-specific issues so your operations and DevOps teams can respond quickly.

There are two complementary views:

- AWS Service Health Dashboard: global, public status of AWS services across regions.  
- Personal Health Dashboard: account-scoped, personalized alerts and remediation guidance for your resources.


## Main sections and features

- Open issues: active events affecting your account (typically shows events from the last 7 days).  
- Scheduled changes: planned maintenance or configuration changes that may impact resources.  
- Other notifications: informational alerts such as account health checks or billing-impacting events.  
- Event details: each event includes start/end time, affected resources, recommended actions, and a severity classification.  
- Integration: PHD can emit events to Amazon EventBridge (formerly CloudWatch Events) to trigger Lambda, SNS, SQS, or Step Functions for automated remediation.


## Practical use-cases and examples

- Incident response: automatically detect an EC2/EBS event and trigger a remedial Lambda that reboots instances, switches traffic to healthy targets, or opens a ticket in your incident system.  
- Maintenance planning: receive scheduled change notifications and shift non-critical batch jobs to avoid disrupted windows.  
- Compliance & audits: retain PHD event logs to prove operational awareness during audits and post-incident reviews.  
- Multi-account operations: centralize PHD alerts in a management account using EventBridge cross-account delivery to feed a single operations dashboard.


### Example: forward PHD events to EventBridge and Lambda (boto3)

```python
import boto3

# Example: simple EventBridge rule creation to match PHD events and forward to an SNS topic
eb = boto3.client('events')
rule = eb.put_rule(
  Name='ForwardPHDToSNS',
  EventPattern='{"source": ["aws.health"]}',
  State='ENABLED'
)

# Add target (SNS topic ARN)
eb.put_targets(
  Rule='ForwardPHDToSNS',
  Targets=[{'Id': 'snsTarget', 'Arn': 'arn:aws:sns:us-east-1:123456789012:phd-alerts'}]
)
```


## Best practices

- Automate reactions: use EventBridge + Lambda/SNS to create automated remediation and paging flows.  
- Centralize notifications: aggregate PHD events across accounts into a single operations account or Slack channel for faster triage.  
- Map events to runbooks: maintain runbooks that map PHD event types to prescriptive steps to reduce MTTR.  
- Retain history: export events to S3 or CloudWatch Logs for post-incident analysis and auditing.  
- Filter noise: tune event rules to avoid alert fatigue—focus on events that affect production or critical resources.


## Related Razorops articles

- [AWS CloudTrail](/blog/aws-cloudtrail/)  
- [AWS CloudWatch](/blog/aws-cloudwatch/)  
- [AWS EventBridge (CloudWatch Events)](/blog/aws-eventbridge/)  
- [AWS IAM](/blog/aws-iam/)  
- [AWS Web Application Firewall](/blog/aws-web-application-firewall/)


## Top 20 AWS Solutions Architect interview FAQs

1. Q: What is a VPC and why is it important?
A: A Virtual Private Cloud isolates resources at the network level, providing subnets, routing, and security controls.

2. Q: Security groups vs NACLs—differences?
A: Security groups are stateful and attached to instances; NACLs are stateless and attached to subnets.

3. Q: How do you design for high availability in AWS?
A: Use multiple AZs, autoscaling groups, load balancers, and managed services (RDS Multi-AZ).  

4. Q: What is Auto Scaling and how does it work?
A: Auto Scaling adjusts EC2 capacity using policies, health checks, and scheduled scaling to meet demand and maintain availability.

5. Q: What is IAM best practice?
A: Use least-privilege, roles for services, enable MFA, rotate credentials, and use Identity Center for SSO.

6. Q: How does S3 provide durability?
A: S3 replicates objects across multiple AZs and performs continuous integrity checks (11 9s durability for standard storage).

7. Q: When to use RDS Multi-AZ vs Read Replica?
A: Multi-AZ for HA and failover; Read Replica for read scaling and analytics workloads.

8. Q: What is CloudFormation?
A: Infrastructure-as-Code tool for declarative, repeatable provisioning of AWS resources.

9. Q: How do you secure data in transit and at rest?
A: Use TLS for transit and SSE-KMS/SSE-S3 or client-side encryption for data at rest; manage keys with KMS.

10. Q: What is Route 53 latency-based routing?
A: Routes users to the endpoint/region with the lowest network latency for better performance.

11. Q: How to perform disaster recovery in AWS?
A: Use Backup & Restore, Pilot Light, Warm Standby, or Multi-Site depending on RTO/RPO requirements.

12. Q: What are VPC endpoints and when to use them?
A: VPC endpoints (Gateway/Interface) allow private connectivity to AWS services without using the internet.

13. Q: When to use SQS vs SNS?
A: SQS for queued, decoupled processing (pull); SNS for pub/sub push notifications.

14. Q: What is CloudWatch and what is it used for?
A: Monitoring service for metrics, logs, and alarms to observe resource health and performance.

15. Q: How do you optimize costs in AWS?
A: Rightsize, use spot/reserved/savings plans, lifecycle policies for storage, and monitor with Cost Explorer and Budgets.

16. Q: What is a multi-region design pattern?
A: Deploying services across regions for DR, reduced latency, or regulatory compliance; use cross-region replication and global services.

17. Q: Differences between ALB and NLB?
A: ALB is Layer 7 load balancer with path/host-based routing; NLB is Layer 4 optimized for high throughput.

18. Q: How do you monitor and troubleshoot network issues?
A: Use VPC Flow Logs, CloudWatch metrics, Reachability Analyzer, and packet captures where necessary.

19. Q: What is a Security Hub and why use it?
A: Centralizes security findings from AWS services and third-party tools to provide a unified view and compliance checks.

20. Q: How to integrate automated remediation into operations?
A: Use EventBridge (CloudWatch Events) to route events (PHD, CloudWatch Alarms) to Lambda or Step Functions to implement automated remediation workflows.

