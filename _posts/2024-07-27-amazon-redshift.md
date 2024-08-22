---
title: Amazon Redshift
description: Amazon redshift is a fast and powerful, fully managed,
  petabyte-scale data warehouse service in the cloud.
image: /images/blog/amazon-redshift.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-07-27T04:58:00.000Z
---

**What is Amazon Redshift?**

Amazon redshift is a fast and powerful, fully managed, petabyte-scale data warehouse service in the cloud. This service is highly scalable to a petabyte or more for $1000 per terabyte per year, less than a tenth of most other data
warehousing solutions.

  

Redshift can be configured as follows:

● **Single node** (160 GB)

● **Multi-Node**

o Leader Node (manages client connections and receives queries)

o Compute Node (store data and perform queries and computations).

Up to 128 compute nodes.

  

**Features:**

● It employs multiple compression techniques and can often achieve significant compression relative to traditional relational databases.

● It doesn’t require indexes or materialized views, so uses less space than traditional database systems.

● Massively parallel processing **(MPP)**: Amazon redshift automatically distributes data and query load across all nodes. Amazon redshift makes it easy to add nodes to your data warehouse and maintain fast query performance as data grows in future.

● Enabled by default with a 1-day retention period.

● Maximum retention period is 35 days.

● Redshift always maintain at least three copies of your data (the original and replica on the compute nodes and a backup in Amazon S3)

● Redshift can also asynchronously replicate your snapshots to S3 in another region for disaster recovery.

● It is only available in 1 AZ but can store snapshots to new AZs in the event of an outage.

  

**Security Considerations**

● Data encrypted in transit using SSL.

● Encrypted at rest using AES-256 encryption.

● By default, RedShift takes care of key management.

o Manager your own keys through HSM

o AWS key Management service.

  

**Use cases**

● If we want to copy data from EMR, S3, and DynamoDB to power a custom Business intelligence tool. Using a third-party library, we can connect and query redshift for results.

  

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcSFlMy6WLnvvjx6u_eYtjm7ylRHbzT5QD_F0wG1k_BcbtMxY1ZBYl18lbKtKaqBM1Y1bU_JoyUHYlv-AGUt0bg4t3QwnBFesGZvs35DQKfJPzsyVICxZwtDI9GJz_yOwpiXDRyE_cqrUdR40PySVUv3vTg?key=DolJBsYn1X8zMHIyAnLicQ)

**Pricing:**

● Compute Node Hours - total number of hours you run across your all compute nodes for the billing period.

● You are billed for 1 unit per node per hour, so a 3-node data warehouse cluster running persistently for an entire month would incur 2160 instance hours.

● You will not be charged for leader node hours, only compute nodes will incur charges.
