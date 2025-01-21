---
title: "AWS SNS (Simple Notification Service) "
description: Amazon Simple Notification Service (Amazon SNS) is a web service
  that makes it easy to set up, operate, and send notifications from the cloud.
image: /images/blog/aws-sns-simple-notification-service.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-12-21T09:05:00.000Z
---
**What is AWS SNS?**

Amazon Simple Notification Service (Amazon SNS) is a web service that makes it easy to set up, operate, and send notifications from the cloud.

It provides developers with a highly scalable, flexible, and cost-effective approach to publish messages from an application and deliver them to subscribers or other
applications. It provides push notifications directly to mobile devices and delivers notifications by SMS text messages, email to Amazon Simple Queue Service
(SQS), or any HTTP client.
It allows developers to group multiple recipients using topics.

It consists of topics and subscribers.

A topic is an access point for allowing recipients to get identical copies for the same notification. One topic can support deliveries to multiple end-points – for example -
we can group together to android, IOS, and SMS text messages.

Two types of topics can be defined in the AWS SNS service.
1. Standard topic is used when incoming messages are not in order. In other words, messages can be delivered as they are received.
2. FIFO topic is designed to maintain order of the messages between the applications, especially when the events are critical. Duplication will be avoided in this case.

**Features:**

● Instantaneous, push-based delivery.

● Simple API and easy integration with AWS services.

● Flexible message delivery over multiple message protocols.

● Cost-effective – as pay as pay-as-you-go model.

● Fully managed and durable with automatic scalability.

**Use cases:**

● SNS application to person: below use cases show SNS service publishes messages to topic, sending messages to each customer’s cell phone. This is an example of an AWS application to personal service.

**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdVDmIjIxQg03zH63qTKLVIvCFFN7mIZ2TqK85ieBQaO2SZFTlVpZ4KEapLW5m62RTEhP5rsUZk47VlgwanP1n6PJkQ3FdmptBkJAEGrF_can87Rpmgr3eiCWl3OjhV-voEtAKH5Q?key=q390jo8iRKV-c2BprE8LOg)**

● SNS Application to Application: In this type of service, where SNS topic would interact with different AWS services such as AWS Lambda, Node JS app, and SQS services. For example, AWS S3 service has only configuration with AWS SNS service, which will be responsible for sending identical messages to other AWS services.


**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcdqLsmbH4MXkD5L1i3LzCU_QldjNV21Ecgyy9MuR57z7GBaoK8Iv9CdoYA58CtY8uS0XaBZHSHtuwiAuPqMekl8DWCnlIKzLLPgwRKNipFSCB9kmV4txnao8h9cWabKFSaz8yiGg?key=q390jo8iRKV-c2BprE8LOg)**
**Pricing:**

● Standard Topics: First 1 million Amazon SNS requests per month are free. There will be a cost associated with $0.50 per 1 million requests.

● FIFO Topics: Amazon SNS FIFO topic pricing is based on the number of published messages, the number of subscribed messages, and their respective amount of payload data.
