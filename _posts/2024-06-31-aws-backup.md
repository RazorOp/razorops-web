---
title: AWS Backup
description: AWS Backup is a secure service that automates and governs data
  backup (protection) in the AWS cloud and on-premises.
image: /images/blog/aws-backup.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-07-01T01:30:00.000Z
---
**What is AWS Backup?**

AWS Backup is a secure service that automates and governs data backup (protection) in the AWS cloud and on-premises.

**Features:**

● It offers a backup console, backup APIs, and the AWS Command Line Interface (AWS CLI) to manage backups across the AWS resources like instances and databases.

● It offers backup functionalities based on policies, tags, and resources.

● It provides scheduled backup plans (policies) to automate backup of AWS resources across AWS accounts and regions.

● It offers incremental backup to minimize storage costs. The first backup backs up a full copy of the data and then only the successive incremental backup changes.

● It provides backup retention plans to retain and expire backups automatically. Automated backup retention also helps to minimize storage costs for backup.

● It provides a dashboard in the AWS Backup console to monitor backup and restore activities.

● It offers an enhanced solution by providing separate encryption keys for encrypting multiple AWS resources.

● It provides lifecycle policies configured to transition backups from Amazon EFS to cold storage automatically.

● It is tightly integrated with Amazon EC2 to schedule backup jobs and the storage (EBS) layer. It also simplifies recovery by restoring whole EC2 instances from a single point.

● It supports cross-account backup and restores either manually or automatically within the AWS organizations.

● It allows backups and restores to different regions, especially during any disaster, to reduce downtime and maintain business continuity.

● It integrates with Amazon CloudWatch, AWS CloudTrail, and Amazon SNS to monitor, audit API activities and notifications.

**Use cases:**

● It can use AWS Storage Gateway volumes for hybrid storage backup. AWS Storage Gateway volumes are secure and compatible with Amazon EBS, which helps restore volumes to on-premises or the AWS environment.

  **Price details:**

● AWS charges monthly based on the amount of backup storage used and the amount of backup data restored.
