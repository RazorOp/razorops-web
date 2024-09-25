---
title: AWS Key Management Service
description: "AWS Key Management Service (AWS KMS) is a secured service to
  create and control the encryption keys. "
image: /images/blog/aws-key-management-service.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-08-07T08:00:00.000Z
---
AWS Key Management Service

**What is AWS Key Management Service?** 

AWS Key Management Service (AWS KMS) is a secured service to create and control the encryption keys. It is integrated with other AWS services such as Amazon EBS, Amazon S3 to provide data at rest security with encryption keys. KMS is a global service but keys are regional which means you can’t send keys outside the region in which they are created.

**Customer master keys (CMKs):** The CMK contains metadata, such as key ID, creation date, description, key state, and key material to encrypt and decrypt data. AWS KMS supports symmetric and asymmetric CMKs:

● Symmetric CMK constitutes a 256-bit key that is used for encryption and decryption.

● An asymmetric CMK resembles an RSA key pair that is used for encryption and decryption or signing and verification (but not both), or an elliptic curve (ECC) key pair that is used for signing and verification.

● Both symmetric CMKs and the private keys of asymmetric CMKs never leave AWS KMS unencrypted.

**Customer managed CMKs:**

● Customer-managed CMKs are CMKs that are created, owned, and managed by user full control.

● Customer-managed CMKs are visible on the Customer-managed keys page of the AWS KMS Management Console.

● Customer-managed CMKs can be used in cryptographic operations. 

**AWS managed CMKs:**

● AWS managed CMKs are CMKs that are created, managed, and used on the user’s behalf by an AWS service that is integrated with AWS KMS.

● AWS managed CMKs are visible on the AWS managed keys page of the AWS KMS Management Console.

● It can not be used in cryptographic operations. 

**Envelope encryption** is the method of encrypting plain text data with a data key and then encrypting the data key under another key.

Envelope encryption offers several benefits:

● Protecting data keys.

● Encrypting the same data under multiple master keys.

● Combining the strengths of multiple algorithms.

**Features:**

● The automatic rotation of master keys generated in AWS KMS once per year is done without the need to re-encrypt previously encrypted data.

● Using AWS CloudTrail, each request to AWS KMS is recorded in a log file that is delivered to the specified Amazon S3 bucket. Log information includes details of the user, time, date, API action, and the key used.

● This service automatically scales as the encryption grows.

● For the high availability of data and keys, KMS stores multiple copies of an encrypted version of keys.

**Benefits:**

● Key Management Service (KMS) with Server-side Encryption in S3.

● Manage encryption for AWS services.

**Price details:**

● Provides a free tier of 20,000 requests/month across all regions where the service is available.

● Each customer master key (CMK) that you create in AWS Key Management Service (KMS) costs $1 per month until deleted.

● Creation and storage of AWS-managed CMKs are not charged as they are created on the user’s behalf by AWS.

● Customer-managed CMKs are scheduled for deletion but it will incur charges if deletion is canceled during the waiting period.
