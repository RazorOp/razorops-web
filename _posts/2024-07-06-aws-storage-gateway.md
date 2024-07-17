---
title: 2024-07-06-AWS Storage Gateway
description: AWS Storage Gateway is a hybrid cloud storage service that allows
  youron-premise storage & IT infrastructure to seamlessly integrate with AWS
  Cloud Storage Services.
image: /images/blog/aws-storage-gateway.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-07-17T20:52:00.000Z
---

**What is the AWS Storage Gateway?**

AWS Storage Gateway is a hybrid cloud storage service that allows youron-premise storage & IT infrastructure to seamlessly integrate with AWS Cloud Storage Services. It Can be AWS Provided Hardware or Compatible Virtual Machine.

**Purpose of Using AWS Storage Gateway(hybrid Cloud Storage) :**

● To Fulfill Licencing Requirements.

● To Achieve Data-Compliance Requirements.

● To Reduce Storage & Management Cost.

● For Easy and Effective Application Storage-Lifecycle & Backup Automation.

● For Hybrid Cloud & Easy Cloud Migration.

**Volume Gateway (iSCSI)**

● To Access Virtual Block-Level Storage Stored on-premise

● It can be asynchronously backed up and stored as a snapshot on AWS S3 for high reliability & durability.

○ **Storage Volume Gateway:** All Applications Data Stored on-premise and the only backup is stored on AWS S3.

  
  

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXeVaxWJuRYocJJWDdR0JI9mz9CQ5mGXbrZM3gOJFLz4VQaz2kw7LghjUW0cIY8KxiK7j0qFNN48pP5X6vrRWJ8B1jrSxZnejyhjRc7DYR5TYFOGABBv-Tsp3GQhsGWLG3hTlEZcIH_xUX-Vuv7gzMzi7Yo?key=DolJBsYn1X8zMHIyAnLicQ)

**Cache Volume Gateway:** Only Hot Data / Cached data is Stored on-premise and all other application data is stored on AWS S3.

  

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXcOLurys6_tEud2OxBkU9IJMqofeKaw_rBZUf7Ua2i7ZVs_sWVZX6btZnofNczmD3OJuwLI1hKoM-l0hqqZQYLC8_-CxGHR3skfY8JGfxWEWtj2oDp4TwYSV9GZWaOy78msvW9qenSnA8R3BFb6NNitrTJX?key=DolJBsYn1X8zMHIyAnLicQ)

**File Gateway (NFSv4 / SMB)**

● To Access Object-based Storage ( AWS S3 Service )

● Supports NFS Mount Point for accessing S3 Storage to the local system as Virtual

Local File System

● Leverage the benefits of AWS S3 Storage Service

  
  

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXfOyTz29tHmtCpSxLJs2xbdDh1mj0DXB58wYB9NCAxg_yw3ShTjOI-To0uww81anoTU7wNV3d3yMTCWLzyhEDa1Qd7MxZVHZRkSTIOM6MfmBE_JrJle8DjgkrE6WGlMDWQq139VPxop1XHYOT1co6KD6x60?key=DolJBsYn1X8zMHIyAnLicQ)

**Tape Gateway (VTL)**

● It is virtual local tape storage.

● It uses the Virtual Tape Library(VTL) by iSCSI protocol.

● It is cost-effective archive storage (AWS S3) for cloud backup.

  

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXf8wQhOcQ4HNOzjZa_V-oCFq-qSHVhTtzIoL50-fRyolPbb1DEdLL8pAMHSJd8QbS0ICAG3TcSp-THsepMxlr7P5WxNJTOOWy_PEYEu-oQ-Ceta1gw0zkE4GnUu43tSp8r9uwaXlr77AmeR_SsBToZSRFlN?key=DolJBsYn1X8zMHIyAnLicQ)

**Features of AWS Storage Gateway**

● Cost-Effective Storage Management

● To achieve Low Latency on-premise.

● Greater Control over Data still take advantage of the cloud (Hybrid Cloud)

● Compatible and Compliance

● To meets license requirement

● Supports both hardware and software gateway

● Easy on-premise to Cloud Migrations

● Standard Protocol for storage access like NFS/SMB/iSCSI  

**Use Cases:**

● Cost-Effective Backups and Disaster Recovery Management

● Migration to/from Cloud

● Managed Cache: Integration of Local(on-premises) Storage to Cloud Storage (Hybrid Cloud)

● To Achieve Low Latency by storing data on-premise and still leverage cloud benefits

**Pricing :**

● Charges are applied on what you use with the AWS Storage Gateway and based on the type and amount of storage you use.
