---
title: 2024-07-21 Amazon DocumentDB
description: DocumentDB is a fully managed document database service by AWS
  which supports MongoDB workloads. It is highly recommended for storing,
  querying, and indexing JSON Data.
image: /images/blog/amazon-documentdb.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-07-21T03:47:00.000Z
---


  

**What is Amazon DocumentDB?**

DocumentDB is a fully managed document database service by AWS which supports MongoDB workloads. It is highly recommended for storing, querying, and indexing JSON Data.

  

**Features:**

● It is compatible with MongoDB versions 3.6 and 4.0.

● All on-premise MongoDB or EC2 hosted MongoDB databases can be migrated to DocumentDB by using DMS (Database Migration Service).

● All database patching is automated in a stipulated time interval.

● DocumentDB storage scales automatically in increments of 10GB and maximum up to 64TB.

● Provides up to **15 Read replicas** with single-digit millisecond latency.

● All database instances are highly secure as they reside in VPCs which only allow a given set of users to access through security group permissions.

● It supports **role-based access control (RBAC).**

● Minimum **6 read copies of data is created in 3 availability zones making it fault-tolerant.**

● Self-healing – Data blocks and disks are continuously scanned and repaired automatically.

● All cluster snapshots are user-initiated and stored in S3 till explicitly deleted.

  

**Best Practices:**

● It reserves 1/3rd RAM for its services, so choose your instance type with enough RAM so that performance and throughput are not impacted.

● Setup Cloudwatch alerts to notify users when the database is reaching its maximum capacity.

  

**Use Case:**

● Highly beneficial for workloads that have flexible schemas.

● It removes the overhead of keeping two databases for operation and reporting. Store the operational data and send them parallel to BI systems for reporting without having two environments.

  

**Pricing:**

● Pricing is based on the instance hours, I/O requests, and backup storage.
