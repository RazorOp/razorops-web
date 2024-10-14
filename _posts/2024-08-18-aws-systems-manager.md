---
title: AWS Systems Manager
description: "AWS Systems Manager is a service which helps users to manage EC2
  and on-premises systems at scale. "
image: /images/blog/aws-systems-manager.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-08-18T04:05:00.000Z
---
**What is AWS Systems manager?**

AWS Systems Manager is a service which helps users to manage EC2 and on-premises systems at scale. It not only detects the insights about the state of the infrastructure but also easily detects problems as well.

Additionally, we can patch automation for enhanced compliance. This AWS service works for both Windows and Linux operating systems.

**Features:**

● Easily integrated with CloudWatch metrics/dashboards and AWS Config.

● It helps to discover and audit the software installed.

● Compliance management

● We can group more than 100 resource types into applications, business units, and environments.

● It helps to view instance information such as operating system patch levels, install software and see the compliance with the desired state.

● Act associate and configurations with resources and find out the discrepancies.

● Distribute multiple software versions safely across the instances.

● Increase the security area by running a command or maintaining scripts.

● Patch your instances of schedule to keep them compliant.

● Helps managers to automate workflows.

● It helps to reduce errors by securely applying configurable parameters into centralized service.

**How does the System Manager work?**

Firstly, User needs to install the SSM agent on the system they control. If an instance can’t be controlled with SSM, it’s probably an issue with the SSM agent.

Also, we need to make sure all the EC2 instances have a proper IAM role to allow 	SSM actions.

**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfMECXRbV5fvrMDqafGvO9XF0EvUHBpl3CXq2XWtLiY-QGjLAClhO5Kp8z6-Vs-D1e8F94SA9Xet2v5mv-ePgYD72hx2jtSC5883uB2h9NxtcMfaN7YlKC2j8srmpj72w9GshHD3OUOtXfcBCqni9pe0bXm?key=DolJBsYn1X8zMHIyAnLicQ)**
**Pricing:**

● App Config:

○ Get Configuration API Calls: $0.2 per 1M Get Configuration calls

○ Configurations Received: $0.0008 per configuration received

● Parameter Store:

○ Standard: No additional charge.

○ Advanced: $0.05 per advance parameter per month.

● Change Manager:

○ Number of change requests: $0.296 per change request.

○ Get, described, Update, and GetoptsSummary API requests: $0.039 per 1000 requests.
