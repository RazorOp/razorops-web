---
title: 2024-08-06 AWS Security Hub
description: AWS Security Hub is a service that provides an extensive view of
  the security aspects of AWS
image: /images/blog/aws-security-hub.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-08-06T06:11:00.000Z
---
**What is AWS Security Hub?**

AWS Security Hub is a service that provides an extensive view of the security aspects of AWS and helps to protect the environment against security industry standards and best practices.

It provides an option to aggregate, organize, and prioritize the security alerts, or findings from multiple AWS services, such as Amazon GuardDuty, Amazon Inspector, Amazon Macie, AWS IAM Access Analyzer, AWS Firewall Manager, and also from AWS Partner solutions.

It helps the Payment Card Industry Data Security Standard (PCI DSS) and the Center for Internet Security (CIS) AWS Foundations Benchmark with a set of security configuration best practices for AWS. If any problem occurs, AWS Security Hub recommends remediation steps.

Enabling (or disabling) AWS Security Hub can be quickly done through,

● AWS Management Console

● AWS CLI

● By using Infrastructure-as-Code tools -- Terraform

If AWS architecture is divided across multiple regions, it needs to enable Security Hub within each region.

The most powerful aspect of using Security Hub is the continuous automated compliance checks using CIS AWS Foundations Benchmark.

The CIS AWS Foundations Benchmark consists of 43 best practice checks (such as “Ensure IAM password policy requires at least one uppercase letter” and “Ensure IAM password policy requires at least one number“).

**Benefits:**

● It collects data using a standard findings format and reduces the need for time-consuming data conversion efforts.

● Integrated dashboards are provided to show the current security and compliance status.

**Price details:**

● Charges applied for usage of other services that Security Hub interacts with, such as AWS Config items, but not for AWS Config rules that are enabled by Security Hub security standards.

● Using the Master account’s Security Hub, the monthly cost includes the costs associated with all of the member accounts.

● Using a Member account’s Security Hub, the monthly cost is only for the member account.

● Charges are applied only for the current Region, not for all Regions in which Security Hub is enabled.

