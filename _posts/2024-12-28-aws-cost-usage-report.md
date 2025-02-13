---
title: 2024-12-28 AWS Cost & Usage Report
description: AWS Cost & Usage Report (AWS CUR) allows users to access the
  detailed set of AWS cost and usage data available, including metadata about
  AWS resources, pricing, Reserved Instances, and Savings Plans.
image: /images/blog/aws-cost-and-usage-report.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-12-28T21:39:00.000Z
---
**What is AWS Cost & Usage Report?**

AWS Cost & Usage Report (AWS CUR) allows users to access the detailed set of AWS cost and usage data available, including metadata about AWS resources,
pricing, Reserved Instances, and Savings Plans.

**AWS Cost & Usage Report is a part of AWS Cost Explorer.**

● AWS Cost and Usage Reports functions:

○ It sends report files to your Amazon S3 bucket.

○ It updates reports up to three times a day.

○ It creates, retrieves, and deletes reports using the AWS CUR API Reference.

● There is a feature of Data Dictionary that lists the columns added in the report to easily analyze cost and usage in detail.

● For viewing, reports can be downloaded from the Amazon S3 console, for analyzing the report Amazon Athena can be used, or upload the report into
Amazon Redshift or Amazon QuickSight.

● Users with IAM permissions or IAM roles can access and view the reports.

● If a member account in an organization owns or creates a Cost and Usage Report, then it can have access only to billing data for the time it has been a member of the Organization.

● If the master account of an AWS Organization wants to block access to the member accounts to set-up a Cost and Usage Report, Service Control Policy (SCP) can be used.

