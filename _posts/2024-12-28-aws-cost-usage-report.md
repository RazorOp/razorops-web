---
title: AWS Cost & Usage Report
description: AWS Cost & Usage Report (AWS CUR) allows users to access the
  detailed set of AWS cost and usage data available, including metadata about
  AWS resources, pricing, Reserved Instances, and Savings Plans.
image: /images/blog/aws-cost-and-usage-report.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2026-02-12T10:00:00.000Z
---
## What is AWS Cost & Usage Report?

AWS Cost & Usage Report (CUR) delivers the most granular billing data available from AWS. It provides line‑item details for every AWS API operation, resource tag, pricing dimension, Reserved Instance usage, Savings Plan application, and more. CUR files are delivered to an Amazon S3 bucket and can be queried with Athena, Redshift, QuickSight, or third‑party tools for deep cost analytics.

While the Cost Explorer UI offers interactive charts, CUR is the foundation for automated cost reporting, chargeback, and FinOps workflows.

### Key capabilities

- Automated delivery: CUR generates parquet/CSV files and delivers them to an S3 bucket up to three times per day.
- Flexible granularity: choose hourly or daily granularity and include resource IDs and tags for precise allocation.
- Data dictionary: the CUR data dictionary documents every column, simplifying downstream ETL and analysis.
- API control: create, update, and delete CUR definitions programmatically via the AWS Cost and Usage Report API or AWS CLI.
- Cross-account support: if enabled in an AWS Organization, CUR can aggregate data for all member accounts in a single bucket.
- Access control: IAM policies (and optionally SCPs in Organizations) control who can view, create, or modify CUR definitions.

### Typical workflows and examples

- **Chargeback / showback**: use Athena to join CUR data with your tagging strategy and generate monthly invoices per team or project.

```sql
-- sample Athena query to sum costs by tag
SELECT
  line_item_usage_account_id AS account,
  resource_tags_user_Project AS project,
  SUM(line_item_unblended_cost) AS cost
FROM
  "cur_database"."cur_table"
WHERE
  line_item_usage_start_date >= date_add('month', -1, current_date)
GROUP BY 1,2;
```

- **Cost anomaly detection**: export CUR to Redshift/BigQuery and run weekly scripts to compare spend against historical baselines.
- **Forecasting and budgeting**: ingest hourly CUR files into a data warehouse and build dashboards showing bursty usage patterns.
- **Audit and compliance**: retain CUR data for seven years to support billing audits or cost allocation reporting.

### Best practices

- Enable hourly granularity if you need near real‑time cost insights; daily is sufficient for most use cases.
- Enforce tags by policy and validate CUR data regularly to ensure all resources are tagged correctly.
- Encrypt the S3 bucket with SSE‑KMS and restrict access with bucket policies to protect sensitive billing data.
- Use lifecycle rules to convert CSV to Parquet and to expire older data (e.g., keep 3‑5 years of history).
- Integrate with Glue crawlers or Athena Workgroups for schema management and query optimization.

### Programmatic setup example (CLI)

```bash
aws cur put-report-definition \
  --report-name "MyCUR" \
  --time-unit HOURLY \
  --format Parquet \
  --compression ZIP \
  --s3-bucket "my-cur-bucket" \
  --s3-prefix "cur/" \
  --additional-schema-elements RESOURCES,TAGS \
  --additional-artifacts REDSHIFT,QUICKSIGHT
```


## Pricing note

Viewing and ingesting CUR data incurs S3 storage and request costs; the Cost Explorer API charges $0.01 per request for recommendation data. Always review the current AWS pricing pages for exact rates.


## Related Razorops articles

- [AWS Cost Explorer](/blog/aws-cost-explorer/)  
- [AWS Budgets](/blog/aws-budgets/)  
- [AWS Cost and Usage Report (CUR) deep dive](/blog/aws-cost-usage-report/)  
- [AWS Reserved Instance Reporting](/blog/reserved-instance-reporting/)  
- [Top 50 AWS DevOps Interview Questions and Answers](/blog/top-50-aws-devops-interview-questions-and-answers/)


## Top 20 AWS Solutions Architect interview FAQs

1. Q: What is the difference between EC2 instance store and EBS?
A: EBS is network-attached, persistent block storage; instance store is ephemeral and data is lost when the instance stops or terminates.

2. Q: How does Amazon S3 provide such high durability?
A: S3 replicates objects across multiple Availability Zones and performs integrity checks, providing 11 9s durability for standard storage.

3. Q: What is a VPC and why is it important?
A: A Virtual Private Cloud isolates resources at the network level and provides subnetting, routing, security groups, and connectivity control.

4. Q: Security groups vs NACLs—what’s the difference?
A: Security groups are stateful and attached to instances; NACLs are stateless and applied to subnets.

5. Q: How would you design for high availability?
A: Use multiple AZs, autoscaling groups, load balancers, managed services (RDS Multi-AZ), and cross-region redundancy for critical data.

6. Q: When to use SQS vs SNS?
A: SQS is for decoupled queue-based processing (pull); SNS is for pub/sub and push notifications to multiple subscribers.

7. Q: What is cross-region replication (CRR) for S3?
A: CRR asynchronously replicates objects to another region for disaster recovery and compliance.

8. Q: How do you secure data in transit and at rest?
A: Use TLS for transport; use SSE-S3, SSE-KMS, or client-side encryption for data at rest, managed by KMS.

9. Q: What is an Auto Scaling group?
A: ASG maintains a group of EC2 instances, scales based on policies and health checks, and replaces unhealthy instances automatically.

10. Q: How does Route 53 weighted routing work?
A: It distributes traffic across resources based on assigned weights; latency routing sends users to the lowest-latency region.

11. Q: When to use RDS Multi-AZ vs Read Replica?
A: Multi-AZ provides synchronous standby for failover; Read Replica is for read scaling and reporting.

12. Q: What is CloudFormation and why use it?
A: CloudFormation is AWS's IaC service that provisions resources declaratively and enables version control and drift detection.

13. Q: How can you optimize costs in AWS?
A: Rightsize resources, use spot/reserved/savings plans, lifecycle policies for storage, and monitor spend with Cost Explorer.

14. Q: Explain S3 consistency model.
A: S3 provides strong read-after-write consistency for new PUTs and updates/deletes across all regions.

15. Q: What are IAM best practices?
A: Apply least privilege, use roles for services, enable MFA, rotate credentials, and use centralized identity providers.

16. Q: How do you design a data lake on AWS?
A: Use S3 as central storage, Glue Data Catalog for metadata, Lake Formation for access control, and Athena/EMR/SageMaker for processing.

17. Q: Differences between ALB and NLB?
A: ALB is Layer 7 with path/host routing; NLB is Layer 4 optimized for high throughput and static IPs.

18. Q: What is a VPC endpoint and when to use it?
A: VPC endpoints (Gateway/Interface) provide private connectivity to AWS services without traversing the public internet.

19. Q: How would you perform disaster recovery in AWS?
A: Choose a DR strategy (Backup & Restore, Pilot Light, Warm Standby, Multi-Site) based on RTO/RPO and automate failover where possible.

20. Q: How do you monitor and troubleshoot AWS infrastructure?
A: Use CloudWatch for metrics/logs, CloudTrail for API audits, X-Ray for tracing, VPC Flow Logs for network debugging, and third-party APMs.


