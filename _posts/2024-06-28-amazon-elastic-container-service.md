---
title: Amazon Elastic Container Service
description: Amazon Elastic Container Service (Amazon ECS) is a regional
  container orchestration service like Docker that allows to execute, stop, and
  manage containers on a cluster.
image: /images/blog/amazon-elastic-container-service.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-07-10T00:18:00.000Z
---
**What is Amazon ECS?**

Amazon Elastic Container Service (Amazon ECS) is a regional container orchestration service like Docker that allows to execute, stop, and manage containers on a cluster.

A container is a standard unit of software development that combines code, its dependencies, and system libraries so that the application runs smoothly from one environment to another.

Images are created from a Dockerfile (text format), which specifies all of the components that are included in the container. These images are then stored in a registry from where they can then be downloaded and executed on the cluster.

All the containers are defined in a task definition that runs a single task or tasks within a service. The task definitions (JSON format) defines which container images should run across the clusters. A service is a configuration that helps to run and maintain several tasks simultaneously in a cluster.

ECS cluster is a combination of tasks or services that can be executed on EC2 Instances or AWS Fargate, a serverless compute for containers. When using Amazon ECS for the first time, a default cluster is created.

The container agent runs on each instance within an Amazon ECS cluster. It sends data on the resource's current running tasks and resource utilization to Amazon ECS. It starts and stops the tasks whenever it receives a request from Amazon ECS.

A task is the representation of a task definition. The number of tasks to run on your cluster is specified after the task definition is created within Amazon ECS. The task scheduler is responsible for attaching tasks within your cluster based on the task definitions.

  
  

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXfwvix1dNWpZq4esoKBxtTXjh_qcq1QZvaeOTWn6cGeSiVb6BKSOhNv0LJXrZJHWsi0L3TDTIgabCPpqioHnNGluf1jU5J6OubGf7Z5iy0FTGrdch3wlDZPdywAFUv63TMGC3fZOV10CYN8mV_Ru4_d350O?key=DolJBsYn1X8zMHIyAnLicQ)

  

**Application Load Balancers offer some attractive features:**

● It enables containers to use dynamic host port mapping. For that, multiple tasks from the same service are allowed per container instance.

● It supports path-based routing and priority rules due to which multiple services can use the same listener port on a single Application Load Balancer.

  

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXe6jrJgCh-SNEKu8lcGYIdYyWXCcJs-cOxmYqDmkT9Qaa2J8ZzCyEMMjAHQsMlD-tA0MQWxFs0Jl2W-momv7Cb3oTOBAtzS_ZA4UjhOAfuzQjcv5Tmefom81lCvhVRVGzCeTbwpE7lkfCxcw8y9gixopYQ2?key=DolJBsYn1X8zMHIyAnLicQ)

  

**Amazon ECS can be integrated with:**

● AWS Identity and Access Management

● Amazon EC2 Auto Scaling

● Elastic Load Balancing

● Amazon Elastic Container Registry

● AWS CloudFormation

It decreases time consumption by eliminating user tasks to install, operate, and scale cluster management infrastructure. With API calls, Docker-enabled applications can be launched and stopped.

It powers other services such as Amazon SageMaker, AWS Batch, Amazon Lex. It also integrates with AWS App Mesh, to provide rich observability, controls traffic and security features to the applications.

**Use Cases:**

The two main use cases in Amazon ECS are:

● Microservices - They are built by the architectural method that decomposes or decouples complex applications into smaller and independent services.

● Batch Jobs - Docker containers are best suited for batch job workloads. Batch jobs are short-lived packages processed under Docker image. So they can be deployed anywhere, such as in an Amazon ECS task.


**Pricing details:**

● Amazon ECS provides two charge models:

○ Fargate Launch Type Model - pay for the amount of vCPU and memory resources.

○ EC2 Launch Type Model - pay for the AWS resources created to store and run the application.
