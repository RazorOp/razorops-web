---
title: AWS Cloud Map
description: AWS Cloud Map is a service that keeps track of application
  components, location dependencies, attributes and health status, and also
  allows dynamic scaling
image: /images/blog/aws-cloud-map.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-12-12T01:58:00.000Z
---
**What is AWS Cloud Map?**

AWS Cloud Map is a service that keeps track of application components, location dependencies, attributes and health status, and also allows dynamic scaling and
responsiveness of the application.

It uses AWS Cloud Map DiscoverInstances API calls, DNS queries in a VPC, orpublic DNS queries to locate resources in the backend.

A service is a template that is used by AWS Cloud Map when an application adds another resource, such as database servers.

When the application needs to connect to a resource, AWS Cloud Map calls APIDiscoverInstances and specifies the namespace and service that are associated
with the resource. AWS Cloud Map only returns healthy instances if health checking is specified while creating the service.

When an application adds a resource, a service instance is created by calling the AWS Cloud Map RegisterInstance API action. The service instance helps to locate
the resource, by using DNS or using the AWS Cloud Map DiscoverInstances API action.

It can be used to register and locate any cloud resources, such as Amazon EC2 instances, Amazon Simple Queue Service (Amazon SQS) queues, Amazon DynamoDB tables, Amazon S3 buckets, or APIs deployed on top of Amazon API Gateway, among others.

**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfD2kfUZK4Z3-3hy6XFjThHgwU5jRAJ0HjLq-6-Xi_B0z6D4SfjG56FnRMdPVuKmTPhlIMzVEL0PaKRktOi7F8R79-GBBUklgzmo4fQIn8IX5iJeirM-t4RapEtpKDTmml7DumYqA?key=q390jo8iRKV-c2BprE8LOg)**
**Features:**

● It decreases time consumption as it restricts the user to manage all the resource names and their locations manually within the application code.

● It is strongly integrated with Amazon Elastic Container Service (Amazon ECS).

● It constantly checks the health of the resources and allows users to choose whether to use Amazon Route 53 health checks or a third-party health checker.

● It provides a registry for the application services defined by namespaces and restricts developers to store, track, and update resource name and location information within the application code. 

**Price details:**

● Extra charges related to Amazon Route 53 DNS and health check usage.

● Service registry charge - $0.10 per registered resource per month.

● Lookup requests charge - $1.00 per million discovery API calls.
