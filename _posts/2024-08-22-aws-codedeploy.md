---
title: AWS CodeDeploy
description: AWS CodeDeploy is a deployment service that automates application deployments
image: /images/blog/aws-codedeploy.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-08-22T04:28:00.000Z
---
**What is AWS CodeDeploy?**

AWS CodeDeploy is a deployment service that automates application deployments to Amazon EC2 instances, on-premises instances, serverless Lambda functions, or Amazon ECS services.

Below type of deployments can be done using AWS CodeDeploy service:

● Code, Serverless Lambda Functions.

● Web & Configuration Files

● Executables and Packages.

● Scripts and Multimedia.

Following are components that concerns AWS CodeDeploy Service:

● Compute Platform

● Deployment Types & Groups.

● IAM & Service Roles

● Applications.

**How does AWS CodeDeploy work?**

It is divided into 3 parts. There might be multiple versions available for your application. First, the developer has to finalize the application revision which needs to be deployed. Then deployment configuration needs to be finalized. This is an app specification file(YML extension) that contains information such as

source/destination location etc. and the last part is, deploy the appropriate revision to cloud location which is called deployment group.

**Features:**

● Help to release new features rapidly.

● It supports avoiding downtime during application deployment by maximizing application availability and handles all application complexity.

● It allows easy launch and tracking of application status.

**Pricing:**

● Free code deployment to Amazon EC2 or AWS Lambda.

● $0.02 charges per on-premises instance deployment.

