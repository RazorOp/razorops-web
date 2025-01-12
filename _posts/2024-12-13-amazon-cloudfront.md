---
title: Amazon CloudFront
description: "Amazon CloudFront is a content delivery network (CDN) service that
  securely delivers any kind of data to customers "
image: /images/blog/amazon-cloudfront.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-12-13T02:16:00.000Z
---

**What is Amazon CloudFront?**

Amazon CloudFront is a content delivery network (CDN) service that securely delivers any kind of data to customers worldwide with low latency, low network and high transfer speeds.

It uses edge locations (a network of small data centers) to cache copies of the data for the lowest latency. If the data is not present at edge locations, the request is sent to the source server, and data gets transferred from there.

  

It is integrated with AWS services such as

● Amazon S3,

● Amazon EC2,

● Elastic Load Balancing,

● Amazon Route 53,

● AWS Elemental Media Services.

  

The AWS origins from where CloudFront gets its traffic or requests are:

● Amazon S3

● Amazon EC2

● Elastic Load Balancing

● Customized HTTP origin

  
  

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdUVBS3Eqe2rS9Av3PvVfBD2ZDuwNi-m6c71UZFGCS1ge7q_Rx7T6hRhhXJh3hB8YWbl9enkWNYbPU-yBjG4EEYZNoxqFp8rF1x8v5ExXIsP4-WMqwZoWrIZsTGgBN-bZDTosn1pQ?key=q390jo8iRKV-c2BprE8LOg)

  
  
  

It provides the programmable and secure edge CDN computing feature through AWS Lambda@Edge.

● It provides operations such as dynamic origin load-balancing, custom bot-management computationally, or building serverless origins.

● It has a built-in security feature to protect data from side-channel attacks such as Spectre and Meltdown.

● Field-level encryption with HTTPS - data remains encrypted throughout starting from the upload of sensitive data.

● AWS Shield Standard - against DDoS attacks.

● AWS Shield Standard + AWS WAF + Amazon Route53 - against more complex attacks than DDoS.

  

**Amazon CloudFront Access Controls:**

Signed URLs:

● Use this to restrict access to individual files.

Signed Cookies:

● Use this to provide access to multiple restricted files.

● Use this if the user does not want to change current URLs.

Geo Restriction:

● Use this to restrict access to the data based on the geographic location of the website viewers.

Origin Access Identity (OAI):

● Outside access is restricted using signed URLs and signed cookies, but what if someone tries to access objects using Amazon S3 URL, bypassing CloudFront signed URL and signed cookies. To restrict that, OAI is used.

● Use OAI as a special CloudFront user, and associate it with your Cloudfront distribution to secure Amazon S3 content.

  

**Pricing Details:**

● You pay for:

○ Data Transfer Out to Internet / Origin

○ A number of HTTP/HTTPS Requests.

○ Each custom SSL certificate associated with CloudFront distributions

○ Field-level encryption requests.

○ Execution of Lambda@Edge

● You do not pay for:

○ Data transfer between AWS regions and CloudFront.

○ AWS ACM SSL/TLS certificates and Shared CloudFront certificates.
