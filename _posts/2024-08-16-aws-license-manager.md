---
title: AWS License Manager
description: AWS License Manager is a service that manages software licenses in AWS
image: /images/blog/aws-license-manager.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-08-16T09:13:00.000Z
---
**What is AWS License Manager?**

● AWS License Manager is a service that manages software licenses in AWS and on-premises environments from vendors such as Microsoft, SAP, Oracle, and IBM.

● It supports Bring-Your-Own-License (BYOL) feature which means that users can manage their existing licenses for third-party workloads (Microsoft Windows Server, SQL Server) to AWS.

● It enables administrators to create customized licensing rules that help to prevent licensing violations (using more licenses than the agreement).

● The rules operate by stopping the instance from launching or by notifying administrators about the infringement (violation of a law).

● Administrators use rule-based controls on the consumption of licenses, to set limits on new and existing cloud deployments.

● **Hard limit** - does not allow the launch of non-compliant instances

● **Soft limit** - allow the launch of non-compliant instance but sends an alert to the administrators

● It provides control and visibility of all the licenses to the administrators with the help of the AWS License Manager dashboard.

● It allows administrators to specify Dedicated Host management preferencesfor allocation and capacity utilization.

● AWS License Manager’s managed entitlements provide built-in controls to software vendors (ISVs) and administrators so that they can assign licenses to approved users and workloads.

● AWS Systems Manager can manage licenses on physical or virtual servers hosted outside of AWS using AWS License Manager.

● AWS Systems Manager helps to discover software running on existing EC2 instances and then rules can be attached and validated in EC2 instances allowing the licenses to be tracked using the License Manager’s dashboard.

● AWS Organizations along with AWS License Manager helps to allow cross-account disclosure of computing resources in the organization by using service-linked roles and enabling trusted access between LicenseManager and Organizations.

**AWS License Manager is integrated with the following services:**

● AWS Marketplace

● Amazon EC2

● Amazon RDS

● AWS Systems Manager

● AWS Identity and Access Management (IAM)

● AWS Organizations

● AWS CloudFormation

● AWS X-Ray

**Price details:**

● Charges are applied at normal AWS rates only for the AWS resources integrated with AWS License Manager.

