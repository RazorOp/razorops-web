---
title: AWS Auto Scaling
description: AWS Auto Scaling keeps on monitoring your Application and automatically
image: /images/blog/aws-auto-scaling.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-08-10T08:30:00.000Z
---
**What is AWS Auto Scaling?**

● AWS Auto Scaling keeps on monitoring your Application and automatically adjusts the capacity required for steady and predictable performance.

● By using auto scaling it's very easy to set up the scaling of the application automatically with no manual intervention.

● It allows you to create scaling plans for the resources like EC2 Instances,
Amazon EC2 tasks, Amazon DynamoDB, Amazon Aurora Read Replicas.

● It balances Performance Optimization and cost.

**Terminologies related to AWS Autoscaling Groups:**

 **Launch Configuration vs Launch Template**

o EC2 Auto Scaling uses two types of instance configuration templates: launch configurations and launch templates.

o We recommend that you use launch templates to make sure that you're getting the latest features from Amazon EC2.

o For example, you must use launch templates to use Dedicated Hosts, which enable you to bring your eligible software licenses from vendors, including Microsoft, and use them on EC2.

o If you intend to use a launch configuration with EC2 Auto Scaling, be aware that not all Auto Scaling group features are available.

o If you want to launch on-demand and spot both instances you have to choose a launch template.

**Auto Scaling Lifecycle Hooks:**

● The Lifecycle hook will pause your EC2 instance.

● The paused instances will remain in the wait state until the action is completed.

● The Wait state will remain active till the timeout period ends.

**Monitoring:**

● Health Check: Keep on checking the health of the instance and remove the unhealthy instance out of Target Group.

● CloudWatch Events: AutoScaling can submit events to Cloudwatch for any type of action to perform in the autoscaling group such as a launch or terminate an instance.

● CloudWatch Metrics: It shows you the statistics of whether your application is performing as expected.

● Notification Service: Autoscaling can send a notification to your email if the autoscaling group launches or the instance gets terminated.

**Charges:**

● AWS will not charge you additionally for the Autoscaling Group.

● You will be paying for the AWS Resources that you will use.
