---
title: AWS PrivateLink
description: AWS PrivateLink is a network service used to connect to AWS
  services hosted by other AWS accounts (referred to as endpoint services) or
  AWS Marketplace.
image: /images/blog/aws-privatelink.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-12-14T02:28:00.000Z
---
**What is AWS PrivateLink?** 

AWS PrivateLink is a network service used to connect to AWS services hosted by other AWS accounts (referred to as endpoint services) or AWS Marketplace. Whenever an interface VPC endpoint (interface endpoint) is created for service in the VPC, an Elastic Network Interface (ENI) in the required subnet with a private IP address is also created that serves as an entry point for traffic destined to the service.

Interface endpoints 

● It serves as an entry point for traffic destined to an AWS service or a VPC endpoint service. 

Gateway endpoints 

● It is a gateway in the route-table that routes traffic only to Amazon S3 and DynamoDB.

PrivateLink is used for scenarios where the source VPC acts as a service provider, and the destination VPC acts as a service consumer. So service consumers use an interface endpoint to access the services running in the service provider.

But Direct Connect is something different. It only creates a connection between an interface endpoint and your on-premises data center. It can be used with AWS PrivateLink.

**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfzmycYOqnXEA8TJeEYL87vBka41OTszyHuuHavl63KOWNetFzqUvhVK9_aL_d88mFGnFh3hY1ts3n0R2On-0iqqMQkyj1Xn5wW21XwiFYQBjd9pj-RH1zIk1Bft-8-0ODzN8MP?key=q390jo8iRKV-c2BprE8LOg)**
**Features:**

● It is integrated with AWS Marketplace services so that the services can be directly attached to the endpoint.

● It provides security by not allowing the public internet and reducing the exposure to threats, such as brute force and DDoS attacks.

● It helps to connect services across different accounts and Amazon VPCs without any firewall rules, VPC peering connection, or managing VPC Classless Inter-Domain Routing (CIDRs).

● It helps to migrate on-premise applications to the AWS cloud more securely. Services can be securely accessible from the cloud and on-premises via AWS Direct Connect and AWS VPN.

**Pricing details:**

 ● PrivateLink is charged based on the use of endpoints.
