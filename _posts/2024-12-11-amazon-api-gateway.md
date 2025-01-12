---
title: "2024-12-11 Amazon API Gateway "
description: Amazon API Gateway is a service which creates, publishes,
  maintains, monitors and secures APIs at any scale.
image: /images/blog/amazon-api-gateway.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-12-11T01:47:00.000Z
---
**What is Amazon API Gateway?**

Amazon API Gateway is a service which creates, publishes, maintains, monitors and secures APIs at any scale.

● It helps to create Synchronous microservices with Load Balancers and forms the app-facing part of the AWS serverless infrastructure with AWS Lambda.

● It handles the tasks involved in processing concurrent API calls.

● It combines with Amazon EC2, AWS Lambda or any web application (public or private endpoints) to work as back-end services.

API Gateway creates RESTful APIs that:

● Are HTTP-based.

● Enable stateless and client-server communication.

● Create standard HTTP methods such as GET, POST, PUT, PATCH and DELETE.

API Gateway creates WebSocket APIs that:

● Follow WebSocket protocol and enable stateful, full-duplex communication between client and server.

● Route incoming messages to the destination based on message content.

Endpoint Types for API Gateway: 

**Edge-optimized endpoint:**

● It signifies reduced latency for requests all around the world.

● CloudFront is also used as the public endpoint.
**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfVijcn925PRV1Y0QMlcxP050T9BdJ-Tzsz5K2y0RMAoi9t2LwHy5HMHv0FrNSRD4V1H6ThBQOsBgZISKISGoZVBPr2XF9Fn6Ji5OG7LK0W5CinWhCvcKySN8FZy4gTgtRujzw5?key=q390jo8iRKV-c2BprE8LOg)**

**Regional endpoint:**

● It signifies reduced latency for requests that originate in the same region. It can also configure the CDN and protect WAF.
**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcZA_JuBtyl1qh4g_nLwuxfdNMwWOTnUvAB4H5lrC3tho75JSyfDrfYqVulVdaWOvXpm5HFZXOH2vdqMUengnzNOvpuJqLu2YQ1xKr0JXB7P3uUs-YQXB5Nd3SkxgOyYrl_NlOaMQ?key=q390jo8iRKV-c2BprE8LOg)**
**Private endpoint:**

● It securely exposes the REST APIs to other services only within the VPC.
**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXe-53yRPwdoeuVuxi3g1TYhRNRvbIPs33QN6mgapeps7qynOgnUBNfpOPiJWfLmVh11BBTYDjbOYn3S8Skx_l5jZk7GGbrtw_2I6_X95UTpNOMqvw8vIPR1hfffT8Ikjre88Kaz?key=q390jo8iRKV-c2BprE8LOg)**
API Gateway - Securities:

● Resource-based policies

● IAM Permissions

● Lambda Authorizer (formerly Custom Authorizers)

● Cognito user pools

**Features:**

● It helps to create stateful (WebSocket) and stateless (HTTP and REST) APIs.

● It integrates with CloudTrail for logging and monitoring API usage and API changes.

● It integrates with CloudWatch metrics to monitor REST API execution and WebSocket API execution.

● It integrates with AWS WAF to protect APIs against common web exploits.

● It integrates with AWS X-Ray for understanding and triaging performance latencies.

**Price details:**

● You pay for API Caching as it is not eligible for the AWS Free Tier.

● API requests are not charged for authorization and authentication failures.

● Method calls which consist of API keys are not charged if API keys are missing or invalid.

● API Gateway-throttled and plan-throttled requests are not charged if the request rate exceeds the predefined limits.
