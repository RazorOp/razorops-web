---
title: Amazon Simple Queue Service (SQS)
description: Amazon Simple Queue Service (SQS) is a serverless service used to
  decouple (loose couple) serverless applications and components.
image: /images/blog/amazon-simple-queue-service-sqs.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-12-23T13:33:00.000Z
---
**What is Amazon Simple Queue Service (SQS)?**

Amazon Simple Queue Service (SQS) is a serverless service used to decouple (loose couple) serverless applications and components.

The queue represents a temporary repository between the producer and consumer of messages.

It can scale up to 1-10000 messages per second.

The default retention period of messages is four days and can be extended to fourteen days.

SQS messages get automatically deleted after being consumed by the consumers.

SQS messages have a fixed size of 256KB.

There are two SQS Queue types:

**Standard Queue -**

● The unlimited number of transactions per second.

● Messages get delivered in any order.

● Messages can be sent twice or multiple times.

**FIFO Queue -**

● 300 messages per second.

● Support batches of 10 messages per operation, results in 3000 messages per second.

● Messages get consumed only once.

**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeWwzffTzgIHfHa2pyw3xaORHeKYkZgfACqSB4FJGRGld0wFBggVinvQiNSVbsh2r6f6gOlDNVpo4SjWvqy4kQoNVrt7l9kRZL8x4GZwmN_ACDZxzhPkZhQK_72GuG3EW5qy8lK?key=q390jo8iRKV-c2BprE8LOg)**
**Delay Queue** is a queue that allows users to postpone/delay the delivery of messages to a queue for a specific number of seconds.

Messages can be delayed for 0 seconds (default) -15 (maximum) minutes.

**Dead-Letter Queue** is a queue for those messages that are not consumed successfully. It is used to handle message failure.

Visibility Timeout is the amount of time during which SQS prevents other consumers from receiving (poll) and processing the messages.

● Default visibility timeout - 30 seconds

● Minimum visibility timeout - 0 seconds

● Maximum visibility timeout - 12 hours
