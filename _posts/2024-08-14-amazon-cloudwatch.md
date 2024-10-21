---
title: Amazon CloudWatch
description: Amazon CloudWatch is a service that helps to monitor and manage services
image: /images/blog/amazon-cloudwatch.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-08-14T08:58:00.000Z
---
**What is Amazon CloudWatch?**

Amazon CloudWatch is a service that helps to monitor and manage services by providing data and actionable insights for AWS applications and infrastructure resources.

It monitors AWS resources such as Amazon RDS DB instances, Amazon EC2 instances, Amazon DynamoDB tables, and, as well as any log files generated by the applications.

**Amazon CloudWatch can be accessed by the following methods:**

● Amazon CloudWatch console

● AWS CLI

● CloudWatch API

● AWS SDKs

**Amazon CloudWatch is used together with the following services:**

● Amazon Simple Notification Service (Amazon SNS)

● Amazon EC2 Auto Scaling

● AWS CloudTrail

● AWS Identity and Access Management (IAM)

It collects monitoring data in the form of logs, metrics, and events from AWS resources, applications, and services that run on AWS and on-premises servers. Some metrics are displayed on the home page of the CloudWatch console. Additional custom dashboards to display metrics can be created by the user.

Alarms can be created using CloudWatch Alarms that monitor metrics and send notifications or make automatic changes to the resources based on actions whenever a threshold is breached.

CloudWatch console provides Cross-account functionality which provides cross-account visibility to the dashboards, alarms, metrics, and dashboards without Sign-in and Sign-out of different accounts. This functionality becomes more useful if the accounts are managed by AWS Organizations.

CloudWatch Container Insights are used to collect and summarize metrics and logs from containerized applications. These Insights are available for Amazon ECS, Amazon EKS, and Kubernetes platforms on Amazon EC2.

CloudWatch Lambda Insights are used to collect and summarize system-level metrics including CPU time, memory, disk, and network for serverless applications running on AWS Lambda.

**CloudWatch agent is installed on the EC2 instance to provide the following features:**

● It collects system-level metrics from Amazon EC2 instances or on-premises servers across operating systems.

● It collects custom metrics from the applications using the StatsD and collectd protocols.

StatsD - supported on both Linux servers and Windows Server collectd - supported only on Linux servers.

● The metrics from the CloudWatch agent can be collected and stored in CloudWatch just like any other CloudWatch metrics.

● The default namespace for the CloudWatch agent metrics is CWAgent, and can be changed while configuring the agent.

  
  

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXehXkHfCQEwzdUz0tcrXM-9OBdYDhUwQFS9kAOYBYCV5oS7RBXeFC8scNJekYA3a7HSzfDo9KDOwcO3Oa2yuLdj2QBuLc1itahCL2bBgSgM-B2MghgHS9Dk0_ebUdIeV-B49uwNZ6AATKlSHb7Dx632-Vk?key=DolJBsYn1X8zMHIyAnLicQ)