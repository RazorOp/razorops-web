---
title: AWS Elastic Beanstalk
description: Beanstalk is a compute service for deploying and scaling
  applications developed in many popular languages.
image: /images/blog/aws-elastic-beanstalk.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-06-27T00:59:00.000Z
---


**What is Amazon Elastic Beanstalk?**

● Beanstalk is a compute service for deploying and scaling applications developed in many popular languages.

● Developers can focus on writing code and don’t need to worry about the underlying infrastructure required to run the application.

● AWS Elastic Beanstalk is the best way to deploy your application in the fastest and simplest way.

● It provides the user interface/dashboard to monitor your application.

● It gives you the flexibility to choose AWS resources such as Amazon EC2 Instance along with the pricing options which suit your application needs.

  

AWS Elastic Beanstalk supports two types of Environment:

**● Web Tier Environment**

o This application hosted on the Web Server Environment handles the HTTP and HTTPS requests from the users.

o Beanstalk Environment: When an environment is launched, Beanstalk automatically assigns various resources to run the application successfully.

o Elastic Load Balancer: Request is received from the user via Route53 which forwards the request to ELB. Then ELB distributes the request among various EC2 Instances of the Autoscaling group.

o Auto Scaling Group: Auto Scaling will automatically add or remove EC2 Instance based on the load in the application.

o Host Manager: Software components inside every EC2 Instance

which is responsible for the following:

▪ Log files generation

▪ Monitoring

▪ Events in Instance

  

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXe4HYx1Fdi1e64wgpSZn_Mu3j_potw_rznYSOmczd2-0alaGFddSsS5iCTRyhOAqutY_1v8JawIfUk-Ob1EmSromYDWJZE9sKOqvDc_7SGcwzYOLdH9qUMCe_PoEHz7lGl2UpSRm_Lr9hUVbDOHb7SLA3d8?key=DolJBsYn1X8zMHIyAnLicQ)

  

**● Worker Environment**

○ A worker is a background process that helps applications for handling heavy resource and time-intensive operations.

○ It is responsible for database clean up, report generation that helps to remain up and running.

○ In the Worker Environment, Beanstalk installs a Daemon on each EC2 Instance in the Auto Scaling Group.

○ Daemon pulls requests from the SQS queue and executes the task based on the message received.

○ After execution, SQS will delete the message, and in case of failure, it will retry to send the message.

  

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXeZrnv91JmQ0Mp5KWVyIvGz8cKe4nzzg-4suyHFB3ZJaSCzUqpOwGu_wj9f-pvh3oIjXDK7eB9xjXRrAf5mcPK6jirtgyulyAm7ZSe4QjknFAfJvQTDdHHTbYWbXieYVe3I2mDE9ZszVGl5tC39UMcm3Stz?key=DolJBsYn1X8zMHIyAnLicQ)

  

**Platform Supported**

● .Net (on Linux or Windows)

● Docker

● GlassFish

● Go

● Java

● Node.js

● Python

● Ruby

● Tomcat

**Deployment Models:**

**All at Once:** Deployment will start taking place in all the instances at the same time. It means all your EC2 Instances will be out of service for a short time. Your application will be completely down for the same duration.

**Rolling** – Deploy the new version in batches; unlike all at once, one group of instances will run the old version of the application. That means there will not be complete downtime just like all at once.

**Rolling with additional batch** - Deploy the new version in batches. But before that, provision an additional group of instances to compensate for the updating one.

**Immutable** – Deploy the new version to a separate group of instances, and the update will be immutable.

**Traffic splitting** – Deploy the new version to a separate group of instances and split the incoming traffic between the older and the new ones.

**Pricing:**

● Amazon will not charge you for AWS Elastic Beanstalk.

● Instead, you will be paying for the resources such as EC2 Instance, ELB and

Auto Scaling group where your application is hosted.
