---
title: Amazon Elastic Kubernetes Service(EKS)
description: Amazon Elastic Kubernetes Service (Amazon EKS) is a service that
  enables users to manage Kubernetes applications in the AWS cloud or
  on-premises.
image: /images/blog/amazon-elastic-kubernetes-serviceeks.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-06-27T05:31:00.000Z
---
**What is Amazon Elastic Kubernetes Service(EKS)?**

Amazon Elastic Kubernetes Service (Amazon EKS) is a service that enables users to manage Kubernetes applications in the AWS cloud or on-premises.

Any standard Kubernetes application can be migrated to EKS without altering the code.

The EKS cluster consists of two components:

● Amazon EKS control plane

● Amazon EKS nodes

The Amazon EKS control plane consists of nodes that run the Kubernetes software, such as etcd and the Kubernetes API server. Amazon EKS runs its own Kubernetes control plane without sharing control plane infrastructure across other clusters or AWS accounts.

To ensure high availability, Amazon EKS runs Kubernetes control plane instances across multiple Availability Zones. It automatically replaces unhealthy control plane instances and provides automated upgrades and patches for the new control planes.

The two methods for creating a new Kubernetes cluster with nodes in Amazon

EKS:

● eksctl – A command-line utility that consists of kubectl for creating and managing Kubernetes clusters on Amazon EKS.

● AWS Management Console and AWS CLI


There are methods that Amazon EKS cluster uses to schedule pods using single or combined node groups:

● Self-managed nodes - consist of one or more Amazon EC2 instances that are deployed in an Amazon EC2 Auto Scaling group

● Amazon EKS Managed node groups - helps to automate the provisioning and lifecycle management of nodes.

● AWS Fargate - run Kubernetes pods on AWS Fargate

Amazon Elastic Kubernetes Service is integrated with many AWS services for unique capabilities:

● Images - Amazon ECR for container images

● Load distribution - AWS ELB (Elastic Load Balancing)

● Authentication - AWS IAM

● Isolation - Amazon VP

  

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXehITiFL2a9pbyob_qQch9HB0gbHFaXTtqeJCLTfxoCvx18DbwghajVOgBr25ITSNA3jx_skLqdkG1g9Zu9Qrr5t_khZd5GOlUOekciDxY5fFFKUo8wQB19fAHWmSKtcDBQnSGD9-CdL58iz_w26xdeiaAY?key=DolJBsYn1X8zMHIyAnLicQ)
  

**Use Cases:**

● Using Amazon EKS, Kubernetes clusters and applications can be managed across hybrid environments.

● EKS with kubeflow can model machine learning workflows using the latest EC2 GPU-powered instances.

● Users can execute batch workloads on the EKS cluster using the Kubernetes Jobs API across AWS compute services such as Amazon EC2, Fargate, and Spot Instances.


**Price details:**

● $0.10 per hour is charged for each Amazon EKS cluster created.

● Using EKS with EC2 - Charged for AWS resources (e.g. EC2 instances or EBS volumes).

● Using EKS with AWS Fargate - Charged for CPU and memory resources starting from the time to download the container image until the Amazon EKS pod terminates.
