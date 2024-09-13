---
title: 2024-08-05 AWS Secrets Manager
description: AWS Secrets Manager is a service that replaces secret credentials
  in the code like passwords,
image: /images/blog/aws-secrets-manager.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-08-05T06:03:00.000Z
---
**What is AWS Secrets Manager?**

AWS Secrets Manager is a service that replaces secret credentials in the code like passwords, with an API call to retrieve the secret programmatically. The service provides a feature to rotate, manage, and retrieve database passwords, OAuth tokens, API keys, and other secret credentials. It ensures in-transit encryption of the secret between AWS and the system to retrieve the secret.

Secrets Manager can easily rotate credentials for AWS databases without any additional programming. Though rotating the secrets for other databases or services requires Lambda function to instruct how Secrets Manager interacts with the database or service.

**Accessing Secrets Manager:**

● AWS Management Console

○ It stores binary data in secret.

● AWS Command Line Tools

○ AWS Command Line Interface

○ AWS Tools for Windows PowerShell

● AWS SDKs

● Secrets Manager HTTPS Query API

Secret rotation is available for the following Databases:

● MySQL on Amazon RDS

● PostgreSQL on Amazon RDS

● Oracle on Amazon RDS

● MariaDB on Amazon RDS

● Amazon DocumentDB

● Amazon Redshift

● Microsoft SQL Server on Amazon RDS

● Amazon Aurora on Amazon RDS

**Features:**

● It provides security and compliance facilities by rotating secrets safely without the need for code deployment.

● With Secrets Manager, IAM policies and resource-based policies can assign specific permissions for developers to retrieve secrets and passwords used in the development environment or the production environment.

● Secrets can be secured with encryption keys managed by AWS Key Management Service (KMS).

● It integrates with AWS CloudTrail and AWS CloudWatch to log and monitor services for centralized auditing.

**Use cases:**

● Store sensitive information as part of the encrypted secret value, either in the SecretString or SecretBinary field.

● Use a Secrets Manager open-source client component to cache secrets and update them only when there is a need for rotation.

● When an API request quota exceeds, the Secrets Manager throttles the request and returns a ‘Throttling Exception’ error. To resolve this, retry the requests.

● It integrates with AWS Config and facilitates tracking of changes in Secrets Manager.

**Price details:**

● There are no upfront costs or long-term contracts.

● Charges are based on the total number of secrets stored and API calls made.

● AWS charges at the current AWS KMS rate if the customer master keys(CMK) are created using AWS KMS.

