---
title: AWS Organizations
description: AWS Organizations is a global service that enables users to
  consolidate and manage multiple AWS accounts into an organization.
image: /images/blog/aws-organizations.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-08-17T03:54:00.000Z
---
**What are AWS Organizations?**

AWS Organizations is a global service that enables users to consolidate and manage multiple AWS accounts into an organization.

It includes account management and combined billing capabilities that help to meet the budgetary, and security needs of the business better.

● The main account is the management account – it cannot be changed.

● Other accounts are member accounts that can only be part of a single organization.

**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcBlyVYOzvv6sBxt10srdQOPkkY8sJuPjX6Y-Bu2-c0fhBe3KmtkUqfD0-CHiSlKLfwfGM82CrDFrPl_2z6TUNFjpYLbtC-7vCPwVnt8inRqFRcwmA-ZRbKc_lSGnnGA9SgrprsmaAzDgffITF9EFx7OVU?key=DolJBsYn1X8zMHIyAnLicQ)**
AWS Organizations can be accessed in the following ways:

● AWS Management Console

● AWS Command Line Tools

○ AWS Command Line Interface (AWS CLI)

○ AWS Tools for Windows PowerShell.

● AWS SDKs

● AWS Organizations HTTPS Query API

**Features:**

● AWS Organizations provides security boundaries using multiple member accounts.

● It makes it easy to share critical common resources across the accounts.

● It organizes accounts into organizational units (OUs), which are groups of accounts that serve specified applications.

● Service Control Policies (SCPs) can be created to provide governance boundaries for the OUs. SCPs ensure that users in the accounts only perform actions that meet security requirements.
  

● Cost allocation tags can be used in individual AWS accounts to categorize and track the AWS costs.

● It integrates with the following services:

○ AWS CloudTrail - Manages auditing and logs all events from accounts.

○ AWS Backup - Monitor backup requirements.

○ AWS Control Tower - to establish cross-account security audits and view policies applied across accounts.

○ Amazon GuardDuty - Managed security services, such as detecting threats.

○ AWS Resource Access Manager (RAM) - Can reduce resource duplication by sharing critical resources within the organization.

● Steps to be followed for migrating a member account:

○ Remove the member account from the old Organization.

○ Send an invitation to the member account from the new Organization.

○ Accept the invitation to the new Organization from the member account.

**Price details:**

● AWS Organizations is free. Charges are applied to the usage of other AWS resources.

● The management account is responsible for paying charges of all resources used by the accounts in the organization.

● AWS Organizations provides consolidated billing that combines the usage of resources from all accounts, and AWS allocates each member account a portion of the overall volume discount based on the account's usage.
