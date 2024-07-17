---
title: 2024-07-06-AWS Snowball
description: AWS Snowball is a storage device used to transfer a large amount of
  data ranging from 50TB - 80TB between Amazon Simple Storage Service and onsite
  data storage location at high speed.
image: /images/blog/aws-snowball.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-07-17T20:45:00.000Z
---
**What is AWS Snowball?**

● AWS Snowball is a storage device used to transfer a large amount of data ranging from 50TB - 80TB between Amazon Simple Storage Service and onsite data storage location at high speed.

● These devices are protected by the AWS Key Management Service to protect data in transit securely.

● AWS Snow Family Management Console helps to manage data transfer jobs using job management API.

● The Snowball client and the Amazon S3 Adapter for Snowball are used to perform data transfers on the Snowball device locally.

● If data transfers involve large files and multiple jobs, you might separate the data into several smaller data segments. Troubleshooting a large transfer can be more complicated than a small transfer. Parallelization helps to
transfer data with Snowball at a faster rate.

● AWS Snowball is integrated with other AWS services such as AWS CloudTrail to capture all API calls as events and with Amazon Simple Notification Service (Amazon SNS) to notify about data transfer.

● AWS Snowball Edge is a type of Snowball device that can transport data at speeds faster than the internet and can do local processing and edge-computing workloads between the local environment and the AWS Cloud.

● Using Snowball Edge devices, one can execute EC2 AMIs and deploy AWS Lambda code on the devices to perform processing and analysis with the applications.

There are two other categories of the AWS Snow family:

● Snowball Edge Compute Optimized - provide block storage, object storage, and 40 vCPUs

● Snowball Edge Storage Optimized - provides block storage, object storage, and 52 vCPUs, and an optional GPU for high processing use cases.

**Use cases:**

● AWS Snowball helps to transfer or receive large amounts of data with clients or partners regularly.

● AWS Snowball collects large data and performs analysis to overcome failure and improve safety, efficiency and productivity.

  **Pricing details:**

Charges are applied based on the following components:

● Service Fee per Job - region-specific.

● Per Day Fee to keep snowfall onsite - region-specific

● Data Transfer fee for Amazon S3:

○ Data transfer IN - free.

○ Data transfer OUT - region-specific.

● Shipping Costs - standard carrier rates.
