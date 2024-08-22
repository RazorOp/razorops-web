---
title: Amazon Keyspaces
description: Keyspaces is an Apache Cassandra compatible database in AWS. It is
  fully managed by AWS, highly available, and scalable. Management of servers,
  patching is done by Amazon.
image: /images/blog/amazon-keyspaces.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-07-24T04:25:00.000Z
---

**What is Amazon Keyspaces (for Apache Cassandra)?**

Keyspaces is an Apache Cassandra compatible database in AWS. It is fully managed by AWS, highly available, and scalable. Management of servers, patching is done by Amazon. It scales based on incoming traffic with virtually unlimited storage and throughput.

  

**Features:**

● Keyspaces is compatible with Cassandra Query Language (CQL). So your

application can be easily migrated from on-premise to cloud.

● Two operation modes are available as below

1. **The On-Demand capacity mode** is used when the user is not certain about the incoming load. So throughput and scaling are managed by Keyspaces itself. It’s costly and you pay only for the resources you use.

2. **The Provisioned capacity mode** is used when you have predictable application traffic. A user just needs to provide many max read/write per second in advance while configuring the database. It’s less costly.

● There is no upper limit for throughput and storage.

● Keyspaces is integrated with Cloudwatch to measure the performance of the database with incoming traffic.

● Data is replicated across 3 Availability Zones for high durability.

● Point-in-Time-recovery (PITR) is there to recover data lost due to accidental deletes. The data can be recovered up to any second till 35 days.

  

**Use Cases:**

● Build Applications using open source Cassandra APIs and drivers. Users can use Java, Python, .NET, Ruby, Perl.

● Highly recommended for applications that demand a low latency platform like trading.

● Use cloud trail to check the DDL operations. It gives brief information on who accessed, when, what services were used and a response returned from AWS. Some hackers creeping into the database firewall can be detected Here.

  

**Pricing:**

● Users only pay for the read and write throughput, storage, and networking resources.
