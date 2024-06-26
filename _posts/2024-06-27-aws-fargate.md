---
title: 2024-06-27-AWS Fargate
description: AWS Fargate is a serverless compute service that is used for
  containers by Amazon Elastic Container Service (ECS) and Amazon Elastic
  Kubernetes Service (EKS).
image: /images/blog/aws-fargate.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-06-27T01:22:00.000Z
---
**What is AWS Fargate?**

AWS Fargate is a serverless compute service that is used for containers by Amazon Elastic Container Service (ECS) and Amazon Elastic Kubernetes Service (EKS).

● It eliminates the tasks required to provision, configure, or scale groups of virtual machines like Amazon EC2 to run containers.

● It packages the application in containers, by just specifying the CPU and memory requirements with IAM policies. Fargate task does not share its underlying kernel, memory resources, CPU resources, or elastic network interface (ENI) with another task.

● It does not support all the task definition parameters that are available in Amazon ECS tasks. Only a few are valid for Fargate tasks with some limitations.

● Kubernetes can be integrated with AWS Fargate by using controllers. These controllers are responsible for scheduling native Kubernetes pods onto Fargate.

● Security groups for pods in EKS can not be used when pods running on Fargate.

● The following storage types are supported for Fargate tasks:

○ Amazon EFS volumes for persistent storage

○ Ephemeral storage for nonpersistent storage

  

**Benefits:**

● Fargate allows users to focus on building and operating the applications rather than focusing on securing, scaling, patching, and managing servers.

● Fargate automatically scales the compute environment that matches the resource requirements for the container.

● Fargate provides built-in integrations with other AWS services like Amazon CloudWatch Container Insights.


**Price details:**

● Charges are applied for the amount of vCPU and memory consumed by the containerized applications.

● Fargate’s Savings Plans provide savings of up to 50% in exchange for one or three-year long term commitment.

● Additional charges will be applied if containers are used with other AWS services.
