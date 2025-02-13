---
title: 2024-12-27 AWS Budgets
description: AWS Budgets enables the customer to set custom budgets to track
  cost and usage from the simplest to the complex use cases.
image: /images/blog/aws-budgets.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-12-27T07:49:00.000Z
---
**What is AWS Budgets?**

AWS Budgets enables the customer to set custom budgets to track cost and usage from the simplest to the complex use cases.

● AWS Budgets can be used to set reservation utilization or coverage targets allowing you to get alerts by email or SNS notification when the metrics reach the threshold.

● Reservation alerts feature is provided to Amazon EC2, Amazon RDS, Amazon Redshift, Amazon ElastiCache, and Elasticsearch.

● The Budgets can be filtered based on specific dimensions such as Service, Linked Account, Tags, Availability Zone, API Operation, and Purchase Option
(i.e., “Reserved”) and be notified using SNS.

● AWS Budgets can be accessed from the AWS Management Console’s service links and within the AWS Billing Console. Budgets API or CLI (command-line interface) can also be used to create, edit, delete, and view
up to 20,000 budgets per payer account.

● AWS Budgets can be integrated with other AWS services such as AWS Cost Explorer, AWS Chatbot, Amazon Chime room, and AWS Service Catalog.

● AWS Budgets can now be created monthly, quarterly, or annual budgets for the AWS resource usage or the AWS costs.

The following types of budgets can be created using AWS Budgets:

● Cost budgets

● Usage budgets

● RI utilization budgets

● RI coverage budgets

● Savings Plans utilization budgets

● Savings Plans coverage budgets

**Best Practices:**

● Users can set up to five alerts for each budget. But the most important are:

○ Alerts when current monthly costs exceed the budgeted amount.

○ Alerts when current monthly costs exceed 80% of the budgeted amount.

○ Alerts when forecasted monthly costs exceed the budgeted amount.

● When creating budgets using Budgets API, a separate IAM user should be made for allowing access or IAM role for each user, if multiple users need access to Budgets API.

● If using consolidated billing in an organization is handled by a master account, IAM policies can control access to budgets by member accounts. Member account owners can create their budgets but cannot change or edit budgets of Master accounts.

● Two of the related managed policies are provided for budget actions. One policy allows a user to pass a role to the budgets service, and the other allows budgets to execute the action.

● Budget actions are not effective enough to control costs with Auto Scaling groups.

**Price details:**

● Monitoring the budgets and receiving notifications are free of charge.

● Each subsequent action-enabled budget will experience a $0.10 daily cost after the free quota ends.
