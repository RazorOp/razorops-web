---
title: AWS EFS - Elastic File Storage
description: "Amazon Elastic File System (Amazon EFS) provides a scalable, fully
  managed elastic distributed file system based on NFS. "
image: /images/blog/aws-efs-elastic-file-storage.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-07-03T01:47:00.000Z
---
**What is AWS EFS?**

Amazon Elastic File System (Amazon EFS) provides a scalable, fully managed elastic distributed file system based on NFS. It is persistent file storage & can be easily scaled up to petabytes. It is designed to share parallelly with thousands of EC2 instances to provide better throughput and IOPS. It is a regional service automatically replicated across multiple AZ’s to provide High Availability and durability
  

**Types of EFS Storage Classes:**

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXeQJHhiVe19qHMk8rvv9DV32PC-yF0E0B3HmFbCqt6FDh_lD9NjI_1cazYRGe8oGWSg4yEVah2CPW1InA4BcImhtAiOcnJSbe2paGM_qrVC-T4LnJ6c8ZduadjIU1gzKosFOx9PEq0W1_2zJ6tx23QOlID-?key=DolJBsYn1X8zMHIyAnLicQ)

  

**EFS Access Modes :**

1) Performance Modes:

● General Purpose: low latency at the cost of lower throughput.

● Max I/O: high throughput at the cost of higher latency.

2) Throughput Modes :

● Bursting (default): throughput grows as the file system grows

● Provisioned: specify throughput in advance. (fixed capacity)

  **Features:**

● Fully Managed and Scalable, Durable, Distributed File System (NFSv4)

● Highly Available & Consistent low latencies. (EFS is based on SSD volumes)

● POSIX Compliant (NFS) Distributed File System.

● EC2 instances can access EFS across AZs, regions, VPCs & on-premises through AWS Direct Connect or AWS VPN.

● Provides EFS Lifecycle Management for the better price-performance ratio

● It can be integrated with AWS Datasync for moving data between on-premise to AWS EFS

● Supported Automatic/Schedule Backups of EFS (AWS Backups)

● It can be integrated with CloudWatch & CloudTrail for monitoring and tracking.

● EFS supports encryption at transit(TLS) and rest both. (AWS Key Management Service (KMS))

● Different Access Modes: Performance and Throughput for the better cost-performance tradeoff.

● EFS is more expensive than EBS.

● Once your file system is created, you cannot change the performance mode

● Not suitable for boot volume & highly transactional data

(SQL/NoSQLdatabases)

● Read-after-write consistency for data access.

● Integrated with IAM for access rights & security.

**Use Cases:** (Sharing Files Across instances/containers)

● Mission critical business applications

● Microservice based Applications

● Container storage

● Web serving and content management

● Media and entertainment file storage

● Database Backups

● Analytics and Machine Learning  

**Best Practices:**

● Monitor using cloud Watch and track API using Cloud Trails

● Leverage IAM services for access rights and security

● Test before fully migrating mission critical workload for performance and throughput.

● Separate out your latency-sensitive workloads. Storing these workloads on separate volumes ensures dedicated I/O and burst capabilities. 

**Pricing:**

**Instance Stor**

● Pay for what you have used based on Access Mode/Storage Type + Backup Storage.
