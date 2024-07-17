---
title: AWS EBS - Elastic Block Store
description: Amazon Elastic Block Store (AWS EBS) is a persistent block-level
  storage (volume) service designed to be used with Amazon EC2 instances.
image: /images/blog/aws-ebs-elastic-block-store.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-07-02T01:39:00.000Z
---
**What is AWS EBS?**

Amazon Elastic Block Store (AWS EBS) is a persistent block-level storage (volume) service designed to be used with Amazon EC2 instances. EBS is AZ specific & automatically replicated within its AZ to protect from component failure, offering high availability and durability.

**Types of EBS:**

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXdpcadceOGrlnw3o71HILOuJVmQZG4RO9XerfG5Xp6SEVTaUthC75BrxI41eFujuwrcidmovTPAU4cM8i3ow3d9YN18TzO_Y6kShoegMXy1E1sldEgDSw41xhR597tGSc_PGTcSfUwN-dNw1k2e_gu6hgI?key=DolJBsYn1X8zMHIyAnLicQ)

**Features:**

● High Performance (Provides single-digit-millisecond latency for high-performance)

● Highly Scalable (Scale to petabytes)

● Offers high availability (guaranteed 99.999% by Amazon) & Durability

● Offers seamless encryption of data at rest through Amazon Key Management Service (KMS).

● Automate Backups through data lifecycle policies using EBS Snapshots to S3 Storage.

● EBS detached from an EC2 instance and attached to another one quickly 

**Key Points to Remember:**

● **Backup/Migration:** To move a volume across AZs, you first need to take a snapshot.

● **Provisioned capacity:** capacity needs to be provisioned in advanced (GBs & IOPS)

● You can increase the capacity of the drive over time.

● It can be detached from an EC2 instance and attached to another one quickly.

● It’s locked to **Single Availability Zone (AZ)**

● The default volume type is General Purpose SSD (gp2)

● EBS Volume can be mounted parallely using RAID Settings:

○ RAID 0 (increase performance)

○ RAID 1 (increase fault tolerance)

● It’s a network drive (i.e. not a physical drive).

● Unencrypted volume can be encrypted using an encrypted snapshot

● Snapshot of the encrypted volume is encrypted by default.

● When you share an encrypted snapshot, you must also share the customer-managed CMK used to encrypt the snapshot.

  **Pricing:**

● You will get billed for all the provisioned capacity & snapshots on S3 Storage

+ Sharing Cost between AZs/Regions  

**EBS vs Instance Storee (ephemeral storage) :**

● It is ideal for temporary block-level storage like buffers, caches, temporary content

● Data on an instance store volume persists only during the life of the associated instance. (As it is volatile storage - lose data if stop the instance/instance crash)

● Physically attached to ec2 instance - hence, the lowest possible latency.

● Massive IOPS - High performance

● Instance store backed Instances can be of maximum 10GiB volume size

● Instance store volume cannot be attached to an instance, once the Instance is up and running.

● Instance store volume can be used as root volume.

● You cannot create a snapshot of an instance store volume.

  **EBS :**

● Persistent Storage.

● Reliable & Durable Storage.

● EBS volume can be detached from one instance and attached to another instance.

● EBS boots faster than instance stores.
