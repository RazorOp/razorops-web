---
title: Amazon FSx for Lustre
description: Amazon FSx for Lustre is an FSx solution that offers scalable
  storage for the Lustre system (parallel and high-performance file storage
  system).
image: /images/blog/amazon-fsx-for-lustre.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-07-05T02:04:00.000Z
---
**What is Amazon FSx for Lustre?**

● Amazon FSx for Lustre is an FSx solution that offers scalable storage for the Lustre system (parallel and high-performance file storage system).

● It supports fast processing workloads like custom electronic design automation (EDA) and high-performance computing (HPC).

● It provides shared file storage with hundreds of gigabytes of throughput, sub-millisecond latencies, and millions of IOPS.

● It offers a choice between SSD and HDD for storage.

● It integrates with Amazon S3 to process data concurrently using parallel data-transfer techniques.

● It stores datasets in S3 as files instead of objects and automatically updates with the latest data to run the workload.

● It offers to select unreplicated file systems for shorter-term data processing.

● It can be used with existing Linux-based applications without any changes.

● It offers network access control using POSIX permissions or Amazon VPC Security Groups.

● It easily provides data-at-rest and in-transit encryption.

● AWS Backup can also be used to backup Lustre file systems.

● It integrates with SageMaker to process machine learning workloads. 

**Use cases:**

● The workloads which require shared file storage and multiple compute instances use Amazon FSx for Lustre for high throughput and low latency.

● It is also applicable in media and big data workloads to process a large amount of data.

  **Price details:**

● Charges are applied monthly in GB based on the storage capacity used for the file system.

● Backups are stored incrementally, which helps in storage cost savings.
