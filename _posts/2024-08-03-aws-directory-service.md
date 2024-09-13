---
title: 2024-08-03 AWS Directory Service
description: "AWS Directory Service, also known as AWS Managed Microsoft Active
  Directory (AD), "
image: /images/blog/aws-directory-service.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-08-03T05:44:00.000Z
---
**What is AWS Directory Service?**

AWS Directory Service, also known as AWS Managed Microsoft Active Directory (AD), enables multiple ways to use Microsoft Active Directory (AD) with other AWS services.

● Trust relationships can be set up from on-premises Active Directories into the AWS cloud to extend authentication.

● It runs on a Windows Server, can perform schema extensions, and works with SharePoint, Microsoft SQL Server, and .Net apps.

● The directory remains available for use during the patching (updating) process for AWS Managed Microsoft AD.

● Using AWS Managed Microsoft AD, it becomes easy to migrate AD-dependent applications and Windows workloads to AWS.

● A trust relationship can be created between AWS Managed Microsoft AD and existing on-premises Microsoft Active using single sign-on (SSO).

**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfodqhKftdPv7MzTwEFiHjmoseMJC8_Egg9b1a4mWLVtAdt0FFOOwWi_24fJS7ppwhWSEwplMmLbHzrB1zzpmD49bXAl3GS7OsEPsE5E71YifJNyB7JeQtp-SyBNP_2JXaeps3zmFE-CiBgM0_VrXzLRAe0?key=DolJBsYn1X8zMHIyAnLicQ)**

AWS Directory Service provides the following directory types to choose from

● Simple AD

● Amazon Cognito

● AD Connector

**Simple AD:**

● It is an inexpensive Active Directory-compatible service driven by SAMBA 4.

● It is an isolated or self-supporting AD directory type.

● It can be used when there is a need for less than 5000 users.

● It cannot be joined with on-premise AD.

● It is not compatible with RDS SQL Server.

● It provides some features like

○ Applying Kerberos-based SSO,

○ Assigning Group policies,

○ Managing user accounts and group memberships,

○ Helping in joining a Linux domain or Windows-based EC2 instances.

● It does not support the following functionalities.

○ Multi-factor authentication (MFA),

○ Trust relationships,

○ DNS dynamic update,

○ Schema extensions,

○ Communication over LDAPS,

○ PowerShell AD cmdlets.

**Amazon Cognito:**

● It is a user directory type that provides sign-up and sign-in for the application using Amazon Cognito User Pools.

● It can create customized fields and store that data in the user directory.

● It helps to federate users from a SAML IdP with Amazon Cognito user pools and provide standard authentication tokens after they authenticate with a SAML IdP (identities from external identity providers).

**AD Connector:**

● It is like a gateway used for redirecting directory requests to the on-premise Active Directory.

● For this, there must be an existing AD, and VPC must be connected to the on-premise network via VPN or Direct Connect.

● It is compatible with Amazon WorkSpaces, Amazon WorkDocs, Amazon QuickSight, Amazon Chime, Amazon Connect, Amazon WorkMail, and Amazon EC2.

● It is also not compatible with RDS SQL Server.

● It supports multi-factor authentication (MFA) via existing RADIUS-based MFA infrastructure.

**Use cases:**

● It provides a Sign In option to AWS Cloud Services with AD Credentials.

● It provides Directory Services to AD-Aware Workloads.

● It enables a single-sign-on (SSO) feature to Office 365 and other Cloud applications.

● It helps to extend On-Premises AD to the AWS Cloud by using AD trusts.

**Pricing:**

● Prices vary by region for the directory service.

● Hourly charges are applied for each additional account to which a directory is shared.

● Charges are applied per GB for the data transferred “out” to other AWS Regions where the directory is deployed.
