---
title: "2024-07-05-Amazon S3 Glacier "
description: Amazon S3 Glacier is a web service with vaults that offer long-term
  data archiving and data backup.
image: /images/blog/amazon-s3-glacier.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-07-17T20:38:00.000Z
---
**What is Amazon S3 Glacier?**

Amazon S3 Glacier is a web service with vaults that offer long-term data archiving and data backup.

It is the cheapest S3 storage class and offers 99.999999999% of data durability.

It helps to retain unlimited data like photos, videos, documents as TAR or ZIP file,

data lakes, analytics, IoT, machine learning, and compliance data.

S3-Standard, S3 Standard-IA, and S3 Glacier storage classes, objects, or data are automatically stored across availability zones in a specific region.

S3 Glacier provides the following data retrieval options:

● Expedited retrievals -

○ It retrieves data in 1-5 minutes.

● Standard retrievals -

○ It retrieves data between 3-5 hours.

● Bulk retrievals -

○ It retrieves data between 5-12 hours.

**Features:**

● It integrates with AWS IAM to allow vaults to grant permissions to the users.

● It integrates with AWS CloudTrail to log and monitor API call activities for auditing.

● A vault is a place for storing archives with certain functionalities like to create, delete, lock, list, retrieve, tag, and configure.

● Vaults can be set with access policies for additional security by the users.

● Amazon S3 Glacier jobs are the select queries that execute to retrieve archived data.

● It uses Amazon SNS to notify when the jobs complete.

● It uses ‘S3 Glacier Select’ to query specific archive objects or bytes for analytics instead of complete archives.

● S3 Glacier Select operates on uncompressed comma-separated values

(CSV format) and output results to Amazon S3.

● Amazon S3 Glacier Select uses SQL queries using SELECT, FROM, and WHERE.

● It offers only SSE-KMS and SSE-S3 encryption.

● Amazon S3 Glacier does not provide real-time data retrieval of the archives. 

**Use Cases:**

● It helps to store and archive media data that can increase up to the petabyte level.

● Organizations that generate, analyze, and archive large data can make use of Amazon S3 Glacier and S3 Glacier Deep Archive storage classes.

● Amazon S3 Glacier replaces tape libraries for storage because it does not require high upfront cost and maintenance.

**Price details:**

● Free Usage Tier - Users can retrieve with standard retrieval up to 10 GB of archive data per month for free.

● Data transfer out from S3 Glacier in the same region is free.
