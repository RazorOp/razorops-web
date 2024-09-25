---
title: AWS Config
description: "AWS Config is a service that continuously monitors and evaluates
  the configurations of the AWS resources (services). "
image: /images/blog/aws-config.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-08-15T09:07:00.000Z
---
**What is AWS Config?**

AWS Config is a service that continuously monitors and evaluates the configurations of the AWS resources (services). 

It helps to view configuration changes performed over a specific period of time using AWS Config console and AWS CLI.

It evaluates AWS resource configurations based on specific settings and creates a snapshot of the configurations to provide a complete inventory of resources in the account.

It retrieves previous configurations of resources and generates notifications whenever a resource is created, modified, or deleted.

It uses Config rules to evaluate configuration settings of the AWS resources. AWS Config also checks any condition violation in the rules. There can be 150 AWS Config rules per region.

● Managed Rules

● Custom Rules

It is integrated with AWS IAM, to create permission policies attached to the IAM role, Amazon S3 buckets, and Amazon Simple Notification Service (Amazon SNS) topics.

It is also integrated with AWS CloudTrail, which provides a record of user actions or an AWS Service by capturing all API calls as events in AWS Config.

AWS Config provides an aggregator (a resource) to collect AWS Config configuration and compliance data from:

● Multiple accounts and multiple regions.

● Single account and multiple regions.

● An organization in AWS Organizations

● The Accounts in the organization which have AWS Config enabled.

**Use Cases:**

● It enables the user to code custom rules in AWS Lambda that define the best guidelines for resource configurations. Users can also automate the assessment of the resource configuration changes to ensure compliance and self-governance across your AWS infrastructure.

● Data from AWS Config allows users to continuously monitor the configurations for potential security weaknesses. After any security alert, Config allows the user to review the configuration history and understand the risk factor.

  

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcack_iAKbs5zE0tC9YMU8ALvGqcj77Mi47kX-goL8p-82kJzoDwNBdzkBpM0BO9x7xfTymyBV-bkQynJT_SDZqaFjyGH6uTndT7CzZbKGeGNXMk6POR2Ewdyqo01Nnyo98wJiCN45gjevB32L-4HU8WVz0?key=DolJBsYn1X8zMHIyAnLicQ)

  


**Price details:**

● Charges are applied based on the total number of configuration items recorded at the rate of $0.003 per configuration item recorded per AWS Region in the AWS account.

● For Config rules, charges are applied based on the number of AWS Config rules evaluated.

● Additional charges are applied if AWS Config integrates with other AWS Services at a standard rate.
