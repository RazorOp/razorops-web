---
title: Amazon Elastic Container Registry
description: Amazon Elastic Container Registry (ECR) is a managed service that
  allows users to store, manage, share, and deploy container images and
  artifacts.
image: /images/blog/amazon-elastic-container-registry.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-06-29T05:53:00.000Z
---
**What is Amazon Elastic Container Registry?**

Amazon Elastic Container Registry (ECR) is a managed service that allows users to store, manage, share, and deploy container images and artifacts. It is mainly integrated with Amazon Elastic Container Service (ECS), for simplifying the production workflow.

**Features:**

● It stores both the containers which are created, and any container software bought through AWS Marketplace.

● It is integrated with Amazon Elastic Container Service (ECS), Amazon Elastic Kubernetes Service (EKS), and AWS Lambda, and AWS Fargate for easy deployments.

● AWS Identity and Access Management (IAM) enables resource-level control of each repository within ECR.

● It supports public and private container image repositories. It allows sharing container applications privately within the organization or publicly for anyone to download.

● A separate portal called Amazon ECR Public Gallery, helps to access all public repositories hosted on Amazon ECR Public.

● It stores the container images in Amazon S3 because S3 provides 99.999999999% (11 9’s) of data durability.

● It allows cross-region and cross-account replication of the data for high availability applications

● Encryption can be done via HTTPS while transferring container images.

Images are also encrypted at rest using Amazon S3 server-side encryption or by using customer keys managed by AWS KMS.

● It is integrated with continuous integration and continuous delivery and also with third-party developer tools.

● Lifecycle policies are used to manage the lifecycle of the images.

**Pricing details:**

● Using AWS Free Tier, new customers get 500 MB-month of storage for one year for private repositories and 50 GB-month of free storage for public repositories.

● Without Sign-up, 500 GB of data can be transferred to the internet for free from a public repository each month.

● By signing-up to an AWS account, or authenticating to ECR with an existing AWS Account, 5 TB of data can be transferred to the internet for free from a public repository each month.
