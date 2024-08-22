---
title: 2024-07-20  Amazon Aurora
description: Aurora is the fully managed RDS services offered by AWS. It’s only compatible
image: /images/blog/amazon-aurora.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-07-20T03:29:00.000Z
---
**What is Amazon Aurora?**

Aurora is the fully managed RDS services offered by AWS. It’s only compatible

**with PostgreSQL/MySQL**. As per AWS, Aurora provides 5 times throughput to

traditional MySQL and 3 times throughput to PostgreSQL.

  

**Features:**

● It is only supported by regions which have minimum 3 availability zones.

● High availability of 99.99%. Data in Aurora is kept as 2 copies in each AZ

with a minimum 3 AZ’s making a total of 6 copies.

● It can have up to 15 Read replicas (RDS has only 5).

● It can scale up to 128 TB per database instance.

● Aurora DB cluster comprises two instances:

○ Primary DB instance – It supports both read/write operations

and one primary DB instance is always present in the DB

cluster.

○ Aurora Replica – It supports only read operation. Aurora

automatically fails over to its replica in less time in case a primary DB instance is not available.

  

**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeWzT_5N9iQL0_7-Iy4zJAJ4BBSYTS9hRZZIcf4CXsdbSD9Tm-fbLyaFX5AkTkPySVdDyjSOpeibgup860HXMPi6LDjWwIRPnt78EZJT7MrxJPlafamxl11T3zKt-cW79YS5nlV5u4IfYKj9yObxw-a11O0?key=DolJBsYn1X8zMHIyAnLicQ)**

  

● Read replicas fetch the same result as the primary instance with a lag of not more than 100 ms.

● Data is highly secure as it resides in VPC. Encryption at rest is done through AWS KMS and encryption in transit is done by SSL.

● **Aurora Global Database** - helps to span in multiple AWS regions for low latency access across the globe. This can also be utilised as backup in case the whole region has gone over an outage or disaster.

● **Aurora Multi master** – is a new feature only compatible only with **MySQL** edition. It gives the ability to scale out write operations over multiple AZ.

So there is no single point of failure in the cluster and applications can perform both read/write at any node.

● **Aurora Serverless** - gives you the flexibility to scale in and out on the basis of database load. The user has to only specify the minimum (2 GB of RAM), maximum (488 GB of RAM) capacity units. This feature of Aurora is highly

beneficial if the user has intermittent or unpredictable workload. It is available for both MySQL and PostgreSQL.

--Back to Index-- 33

● **Fault tolerance and Self-Healing feature-** In Aurora, each set of data is replicated in six copies over 3 AZ. So that it can handle the loss up to 2 copies without impacting the write feature and up to 3 copies without

impacting the read feature. Aurora storage is also self-healing which means disks are continuously scanned for errors and repaired.

  

**Best practices:**

● If the user is not sure about the workload of the database then prefer Aurora Serverless. If you have a team of developers and testers who hit the database only during particular hours of day and it remains minimal during

night, again prefer Aurora Serverless.

● If write operations and DDL are crucial requirements, choose Multi-master Aurora for MySQL. In this manner, all writer nodes are equally functional and failure one doesn’t impact the other.

● Aurora Global database is best for industries in finance, gaming as one single DB instance provides a global footprint. The application enjoys low latency read operation on such databases.

  

**Pricing:**

● There are no up-front fees.

● On-demand instances are costlier than reserved instances. There is no additional fee for backup if the retention period is less than a day.

● Data transfer between Aurora DB instance and EC2 in the same AZ is free.

● All data transfer IN to Database is free of charge.

● Data transfer OUT of Database through the internet is chargeable if it exceeds 1 GB/month.
