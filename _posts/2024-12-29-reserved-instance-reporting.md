---
title: Reserved Instance Reporting
description: "Reserved Instance Reporting or Reserved Instance Utilization and
  Coverage reports are available in AWS Cost Explorer. It is used to check how
  much Reserved Instance (RIs) is used or overspent by AWS resources "
image: /images/blog/reserved-instance-reporting.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2026-02-11T10:00:00.000Z
---


## What is Reserved Instance Reporting?

Reserved Instance (RI) Reporting provides utilization and coverage insights in AWS Cost Explorer to help you understand how effectively your Reserved Instances are being used across EC2, RDS, Redshift, ElastiCache, and Elasticsearch (OpenSearch) workloads. These reports help spot underutilized reservations, calculate savings, and guide future RI or Savings Plan purchases.


## RI Utilization vs RI Coverage

- RI Utilization reports show the total RI hours consumed compared to total purchased RI hours, helping you measure how much of your reservation capacity is actually being used.  
- RI Coverage reports show the percentage of instance-hours that are covered by RIs—useful to see what fraction of your running instances take advantage of reservations.


## What the reports include

- Utilization/coverage charts (daily/weekly/monthly) with target thresholds and colored status bars (green/yellow/red/gray) to indicate performance against targets.  
- Filters for account, instance family/type, AZ/region, tenancy, and tags so you can analyze usage at team, application, or environment level.  
- Export options (CSV/PDF) for sharing and downstream analysis.  
- Recommendations: AWS Cost Explorer can generate RI purchase recommendations and estimate potential savings versus on-demand pricing.


## Common tasks and examples

- Identify underutilized RIs: filter by instance family and account, then check utilization below your target to find candidates for modification, sale, or reallocation.  
- Coverage analysis for a migration: before migrating workloads between AZs or instance types, use coverage reports to verify whether reservations will still apply.  
- Cross-account chargeback: use tags + linked account filters to report RI utilization per team and implement internal billing adjustments.


### Example: export RI utilization data via Cost Explorer API (boto3)

```python
import boto3
from datetime import datetime, timedelta

ce = boto3.client('ce')
end = datetime.today().replace(day=1)
start = (end - timedelta(days=365)).replace(day=1)

resp = ce.get_reservation_utilization(
  TimePeriod={'Start': start.strftime('%Y-%m-%d'), 'End': end.strftime('%Y-%m-%d')},
  Granularity='MONTHLY'
)

for r in resp.get('UtilizationsByTime', []):
  print(r['TimePeriod'], r.get('Total', {}))
```


## Best practices

- Tag and organize resources: enable cost allocation tags and consistently tag instances so RI reports can be scoped to applications or teams.  
- Align purchase types: choose instance families and regions for RIs that match your steady-state demand; use Convertible RIs if you need flexibility.  
- Use Savings Plans where appropriate: compute Savings Plans can be simpler and more flexible than instance-specific RIs.  
- Monitor regularly: review RI utilization monthly and adjust commitments or use the RI Marketplace to sell unused reservations.  
- Combine RI reports with Cost Explorer recommendations before purchasing; validate recommendations against expected future usage.


## Pricing note

- There is a small charge for Cost Explorer recommendation API calls (check the current AWS pricing page for up-to-date rates).  


## Related Razorops articles

- [AWS Cost Explorer](/blog/aws-cost-explorer/)  
- [AWS Budgets](/blog/aws-budgets/)  
- [AWS Savings Plans vs Reserved Instances](/blog/aws-savings-plans/)  
- [Top 50 AWS DevOps Interview Questions and Answers](/blog/top-50-aws-devops-interview-questions-and-answers/)  


## Top 20 AWS Solutions Architect interview FAQs

1. Q: What is the difference between EC2 instance store and EBS?
A: EBS is network-attached, persistent block storage; instance store is ephemeral and data is lost on stop/terminate.

2. Q: How does S3 achieve high durability?
A: S3 replicates data across multiple AZs and performs continuous integrity checks (11 9s durability for standard storage).

3. Q: What is a VPC and why use it?
A: VPC isolates resources at the network level, providing subnets, route tables, security groups, and private connectivity.

4. Q: Security groups vs NACLs—differences?
A: Security groups are stateful and attached to instances; NACLs are stateless and apply to subnets.

5. Q: How to design for high availability?
A: Use multiple AZs, autoscaling groups, load balancers, and managed services (RDS Multi-AZ).

6. Q: When to use SQS vs SNS?
A: SQS is for decoupled queue processing; SNS is for pub/sub notifications to multiple subscribers.

7. Q: What is cross-region replication (CRR) for S3?
A: CRR copies objects asynchronously to another region for disaster recovery and compliance.

8. Q: How do you secure data in transit and at rest?
A: Use TLS for transit; use SSE-KMS or SSE-S3 for at-rest encryption and KMS for key management.

9. Q: What is an Auto Scaling group?
A: ASG manages EC2 fleets, scales based on policies/metrics, and replaces unhealthy instances.

10. Q: How does Route 53 routing policy work (simple, weighted, latency)?
A: Simple returns a single resource; weighted distributes traffic by weight; latency routes to the lowest-latency endpoint.

11. Q: When to use RDS Multi-AZ vs Read Replica?
A: Multi-AZ for HA and failover; Read Replica for read-scaling and analytics.

12. Q: What is CloudFormation?
A: Declarative infrastructure-as-code for repeatable provisioning and drift detection.

13. Q: How do you optimize costs in AWS?
A: Rightsize resources, use spot/reserved/savings plans, lifecycle policies for S3, and monitor with Cost Explorer.

14. Q: Explain S3 consistency model.
A: S3 provides strong read-after-write consistency for PUTs of new objects and for overwrite/DELETE operations.

15. Q: IAM best practices?
A: Apply least privilege, use roles, enable MFA, rotate credentials, and use centralized identity providers.

16. Q: How to design a data lake on AWS?
A: Use S3 for storage, Glue Data Catalog for metadata, Lake Formation for access control, and EMR/Athena/SageMaker for processing.

17. Q: Differences between ALB and NLB?
A: ALB is Layer 7 with routing features; NLB is Layer 4 optimized for throughput and static IPs.

18. Q: What is a VPC endpoint and when to use it?
A: VPC endpoints enable private connectivity to AWS services without using the public internet.

19. Q: How would you perform disaster recovery in AWS?
A: Choose a DR strategy (Backup & Restore, Pilot Light, Warm Standby, Multi-Site) based on RTO/RPO needs.

20. Q: How do you monitor and troubleshoot AWS infrastructure?
A: Use CloudWatch, CloudTrail, X-Ray, VPC Flow Logs, and third-party monitoring/APM tools.

