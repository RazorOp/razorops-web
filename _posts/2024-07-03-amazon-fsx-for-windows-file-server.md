---
title: Amazon FSx for Windows File Server
description: Amazon FSx for Windows File Server is an FSx solution that offers a
  scalable and shared file storage system on the Microsoft Windows server.
image: /images/blog/amazon-fsx-for-windows-file-server.jpg
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-07-04T01:59:00.000Z
---

**What is Amazon FSx for Windows File Server?**

● Amazon FSx for Windows File Server is an FSx solution that offers a scalable and shared file storage system on the Microsoft Windows server.

● Using the Server Message Block (SMB) protocol with Amazon FSx Can access file storage systems from multiple windows servers.

● It offers to choose from HDD and SSD storage, offers high throughput, and IOPS with sub-millisecond latencies for Windows workloads.

● Using SMB protocol, Amazon FSx can connect file systems to Amazon EC2, Amazon ECS, Amazon WorkSpaces, Amazon AppStream 2.0 instances, and on-premises servers using AWS Direct Connect or AWS VPN.

● It provides high availability (Multi-AZ deployments) with an active and standby file server in separate AZs.

● It automatically and synchronously replicates data in the standby Availability Zone (AZ) to manage failover.

● Using AWS DataSync with Amazon FSx helps to migrate self-managed file systems to Windows storage systems.

● It offers identity-based authentication using Microsoft Active Directory (AD).

● It automatically encrypts data at rest with the help of AWS Key Management

Service (AWS KMS). It uses SMB Kerberos session keys to encrypt data in transit. 

**Use cases:**

● Large organizations which require shared access to multiple data sets

between multiple users can use Amazon FSx for Windows File Server.

● Using Windows file storage, users can easily migrate self-managed applications to AWS using AWS DataSync.

● It helps execute business-critical Microsoft SQL Server database workloads easily and automatically handles SQL Server Failover and data replication.

● Using Amazon FSx for Windows File Server, users can easily process media workloads with low latencies and high throughput.

● It enables users to execute high intensive analytics workloads, including business intelligence and data analytics applications.

**Price details:**

● Charges are applied monthly based on the storage and throughput capacity used for the file system’s file system and backups.

● The cost of storage and throughput depends on the deployment type, either single-AZ or multi-AZ.
