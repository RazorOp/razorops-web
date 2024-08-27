---
title: Amazon DynamoDB
description: AWS DynamoDB is a Key-value and DocumentDB database by Amazon.
image: /images/blog/amazon-dynamodb.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-07-22T04:07:00.000Z
---
**What is DynamoDB?**

● AWS DynamoDB is a Key-value and DocumentDB database by Amazon.

● It delivers a single Digit millisecond Latency.

● It can handle 20 million requests per second and 10 trillion requests a day.

● It is a Serverless Service; it means no servers to manage.

● It maintains the performance by managing the data traffic of tables over multiple servers.

  

**Features:**

● It can create the Table for your application and can handle the rest.

● No-SQL database provides fast and predictable performance.

● It is designed for automatic scaling and can be replicated across regions.

● It can also create Dynamic Tables, which means it can store any number of multi-valued attributes.

● **Primary Key** – Uniquely identifies each item in the table, such as Student_ID in Student Table, Employee_ID in employees Table.

● **Partition Key** – Primary key with one attribute

● **Partition Key and Sort Key** – Primary Key with two attributes.

It is used when we do not have any attribute in the table, which will identify the item in the table.

● **Indexes**

○ A database index is an entity in the database that will improve data retrieval speed in any table.

● **Secondary Index**

○ A secondary index is a way to efficiently access records in a database utilizing some information other than the usual primary key.

○ We can create one or more secondary Indexes in the table.

○ Secondary Indexes is of two types:

■ **Global Secondary Indexes:** An Index that can have different partitions and sort keys from the table.

■ **Local Secondary Indexes:** An index with the same partition key as the table but a different sort of key.

  

**DynamoDB Accelerator**

● Amazon DynamoDB Accelerator (DAX) is a fully managed in-memory cache engine designed for Amazon DynamoDB.

● It can deliver up to 10 times performance improvement and can handle around 20 million requests per second.

● The performance can improve from milliseconds to microseconds.

● DAX is for the workloads that are read-intensive, not write-intensive. DAX is not for strongly consistent reads.

● We don’t have to think about the hardware provisioning, pathing, and replication over multiple instances.

● It also supports encryption but does not support transport layer security.

● Types of Scaling in DAX:

○ **Horizontal Scaling:** It means adding read replicas to the cluster. We can add or remove up to 10 read replicas.

○ **Vertical Scaling:** It means changing the node type.

  

**DynamoDB Scan**

● The Scan operation returns more than one item in the table.

● Scan operations are slower than query operations and process sequentially.

● One Scan operation can fetch up to 1 MB of data.

● The application can request for parallel scan operation by providing **Segment** and **TotalSegments** parameters for large tables.

● While accessing the data in the table, Scan operation uses eventually consistent reads.

  

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXc-NPbMLY9j_x8QEmX4w9-ALaUd4xYi84KAFU6ypMwe8jrYuVT04iAowUJDmVNMBdPcZ-od3iBV0E4QIdqUj5-w9RzsJO4miKPxseqHfBHdHXklaOiJkI884cq3foIKXI9OtEdihu4lVpsGYZUBOVgjvQVE?key=DolJBsYn1X8zMHIyAnLicQ)

  

**DynamoDB Queries**

● The DynamoDB queries in DynamoDB are based on the value of the primary keys.

● In query operation, partition key attribute and single value to that attribute are mandatory.

● The query returns the result based on the partition key value. In addition to that, you can also provide a sort key to get a more refined result.

● Query operation returns a result set. It will give an empty result if no matching result is found.

● One Query operation can fetch up to 1 MB of data.

  

**DynamoDB Streams**

● It captures the sequence of item-level modification in the table.

● The Streams information is stored up to 24 hrs.

● Any application can access these stream records.

● The information in the DynamoDB Streams is in near real-time.

● DynamoDB and DynamoDB streams have two different endpoints.

● To work with tables and indexes, you must access DynamoDB Endpoint.

● To work with Stream records, your application must access DynamoDB Streams Endpoints.

● There are multiple ways to access the Streams.

● The most common way is to use AWS Lambda.

● A second common approach is to use a standalone application that uses the Kinesis Client Library (KCL) with Streams Kinesis Adapter.

  

**DynamoDB Transactions**

● DynamoDB Transactions have ACID (atomicity, consistency, isolation, and durability) Property within a single account across one or more tables.

● You can use transactions where the application needs to execute multiple operations (insert, update, delete) as a part of single logic.

● Transactions have the properties of DynamoDB, such as scalability and performance.

● Each transaction can store 4 MB of data and can store up to 25 unique items.

● The use case where we can implement DynamoDB Transactions:

o Financial transaction processing

o Gaming applications

o Processing a high volume of orders

o Processing financial transactions

  

**Consistency Model:**

**Eventual Consistent Reads:** If you read the data from the recent write operation, you will get stale data.

**Strongly Consistent Writes:** If you read the data from the recent write operation, you will get updated data. But it might not be available instantly.

  

**Throughput Model:**

**Read Capacity Unit (RCU):** For an item, it represents a single strongly consistent read or double eventual consistent reads in a second, and the size of an item can be up to 4KB. If you need to read an item that is larger than 4KB, you need to add an additional read capacity unit.
**Write Capacity Unit (WCU):** It represents one write per second for an item. And the size of an item can be up to 1KB. If you need to write a larger than 1KB item, you need to add an additional write capacity unit.
**Provisioned:** We Need to mention the throughput in advance. This model is for Predictable workloads. We have to define a range for Reading and Write Capacity Units.
**On-Demand:** We need not mention the throughput in Advance. This Model is for non-predictable workloads. We do not need to define a range for Reading and Write Capacity Units.
  

**Charges:**

● DynamoDB charges as per the disk space you consume.

● Charges for data transfer out.

● Charges for provisioned throughput.

● Charges for Reserved Capacity Unit.
