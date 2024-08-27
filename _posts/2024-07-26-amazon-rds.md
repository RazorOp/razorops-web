---
title: Amazon RDS
description: RDS (Relational Database System) in AWS makes it easy to operate,
  manage, and scale in the cloud.
image: /images/blog/amazon-rds.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-07-26T04:47:00.000Z
---

**What is Amazon RDS?**

RDS (Relational Database System) in AWS makes it easy to operate, manage, and scale in the cloud.

It provides scalable capacity with a cost-efficient pricing option and automates manual administrative tasks such as patching, backup setup, and hardware Provisioning.

  

**Engines supported by RDS are given below:**

**MySQL**

● It is the most popular open-source DB in the world.

● Amazon RDS makes it easy to provision the DB in AWS Environment without worrying about the physical infrastructure.

● In this way, you can focus on application development rather than Infra. Management.

  

**MS SQL**

● MS-SQL is a database developed by Microsoft.

● Amazon allows you to provision the DB Instance with provisioned IOPS or Standard Storage.

  **MariaDB**

● MariaDB is also an open-source DB developed by MySQL developers.

● Amazon RDS makes it easy to provision the DB in AWS Environment without worrying about the physical infrastructure.

  

**PostgreSQL**

● Nowadays, PostgreSQL has become the preferred open-source relational DB. Many enterprises now have started using PostgreSQL powered database engines.

  

**Oracle**

● Amazon RDS also provides a fully managed commercial database engine like Oracle.

● Amazon RDS makes it easy to provision the DB in AWS Environment without worrying about the physical infrastructure.

● You can run Oracle DB Engine with two different licensing models – “License Included” and “Bring-Your-Own-License (BYOL).”

  

**Amazon Aurora**

● It is the relational database engine developed by AWS only.

● It is a MySQL and PostgreSQL-compatible DB engine.

● Amazon claims that it is five times faster than the standard MySQL DB engine and around three times faster than the PostgreSQL engine.

● The cost of the aurora is also less than the other DB Engines.

● In Amazon Aurora, you can create up to 15 read replicas instead of 5 in other databases.

  

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdCVcW9dioHhJHOnI4c85Cfu6O2opx7rmBMi57faJBMDWYOMgYHqdYd_j-ZnRyZHBBaAMzK-QQnW5tEw8LOsOdc_PTVE22LciJQeUAo3uoeohFMkgy-gbKSP-_D7qsEiPkX87k7DpTdTcDuLLRRdMdV6bMZ?key=DolJBsYn1X8zMHIyAnLicQ)

  

**Multi AZ Deployment**

● Enabling multi-AZ deployment creates a Replica (Copy) of the database in different availability zones in the same Region.

● Multi-AZ synchronously replicates the data to the standby instance in different AZ.

● Each AZ runs on physically different and independent infrastructure and is designed for high reliability.

● Multi-AZ deployment is for Disaster recovery not for performance Enhancement.

  

**Read Replicas**

● Read Replicas allow you to create one or more read-only copies of your

database in the same or different regions.

● **Read Replica is mostly for performance enhancement. We can now use Read-Replica with Multi-AZ as a Part of DR (disaster recovery) as well.**

● A Read Replica in another region can be used as a standby database in event of regional failure/outage. It can also be promoted to the Production database.

  

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf3RV5zT3lp33gj-3q1wkX5sbUZ48j7vuPiuD5492mXtE0iFlHArnz29LpqJ4wVOfkkeYReGLYIQFc_Q8u0EeoKnK4mBOuufcrmUlBnE_7JiocqphRFsvX7eGojexfavAvkajefZq9ipiJiIU-_PcqQWEKQ?key=DolJBsYn1X8zMHIyAnLicQ)

  

**Storage Type**

● **General Purpose (SSD):** General Purpose storage is suitable for database workloads that provide a baseline of 3 IOPS/GiB and the ability to burst to 3,000 IOPS.

● **Provisioned IOPS (SSD):** Provisioned IOPS storage is suitable for I/O-intensive database workloads. I/O range is from 1,000 to 30,000 IOPS.

  

**Monitoring**

● By default, enhanced monitoring is disabled.

● Enabling enhanced monitoring incurs extra charges.

● Enhanced monitoring is not available in the AWS GovCloud(US) Region.

● Enhanced monitoring is not available for the instance class db.m1.small.

● Enhanced monitoring metrics include IOPS, Latency, Throughput, Queue Depth.

● Enhanced monitoring gathers information from an agent installed in DB Instance.

  

**Backups & Restore**

● The default backup retention period for automatic backup is 7 days if you use the console, for CLI and RDS API it’s 1 day.

● Automatic backup can be retained for up to 35 days.

● The minimum Automatic backup retention period is 0 days, which will disable the automatic backup for the instance.

● 100 Manual snapshots are allowed in a single region.

  

**Charges:**

You will be charged based on multiple factors:

● Active RDS Instances

● Storage

● Requests

● Backup Storage

● Enhanced monitoring

● Transfer Acceleration

● Data Transfer for cross-region replication
