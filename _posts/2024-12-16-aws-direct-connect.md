---
title: AWS Direct Connect
description: AWS Direct Connect is a cloud service that helps to establish a
  dedicated connection from an on-premises network to one or more VPCs in the
  same region.
image: /images/blog/aws-direct-connect.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-12-16T13:27:00.000Z
---
**What is AWS Direct Connect?**

AWS Direct Connect is a cloud service that helps to establish a dedicated connection from an on-premises network to one or more VPCs in the same region.

Private VIF with AWS Direct Connect helps to transfer business-critical data from the data-center, office or colocation environment into AWS, bypassing your Internet
service provider and removing network traffic.

Private virtual interface: It helps to connect an Amazon VPC using private IP addresses.

Public virtual interface: It helps to connect AWS services located in any AWS region (except China) from your on-premises data center using public IP addresses.

Methods of connecting to a VPC:

● AWS Managed VPN.

● AWS Direct Connect.

● AWS Direct Connect plus a VPN.

● AWS VPN CloudHub.

● Transit VPC.

● VPC Peering.

● AWS PrivateLink.

● VPC Endpoints.

**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcktTZOnb8tMOm6IKqgQCQj5BcyBrOKDqy-7NzBN4UrhK04WniEkdPYpV05aUFX042rKYkuA8jXdQRfwiqT7srx3Z6dc6d1mB-TTGRQol7Ugc8QCMMcarPMA486ZIaQTZhQJfvQxg?key=q390jo8iRKV-c2BprE8LOg)**
**Direct Connect gateway:**
It is a globally available service used to connect multiple Amazon VPCs across different regions or AWS accounts. It can be integrated with either of the following
gateways:

● Transit gateway - it is a network hub used to connect multiple VPCs to an on-premise network in the same region.

● Virtual private gateway - It is a distributed edge routing function on the edges of VPC.

**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeL9uQH6Tg8jJ4xJGQB-pN0kqmgfuugxvg-2kroeEjZWen0Oi3ys7fCmN5VofAeAnWkbvxg4naWmL2NfFY41_7e2tAvy1dbp5zjG6YgbIU_YgdPjnOVIHD7bCczpstl57NRuKwQ7A?key=q390jo8iRKV-c2BprE8LOg)**

**Features:**

● AWS Management Console helps to configure AWS Direct Connect service quickly and easily.

● It helps to choose the dedicated connection providing a more consistent network experience over Internet-based connections.

● It works with all AWS services that are accessible over the Internet.

● It helps to scale by using 1Gbps and 10 Gbps connections based on the capacity needed.

**Price details:**

● Pay only for what you use. There is no minimum fee.

● Charges for Dedicated Connection port hours are consistent across all AWS Direct Connect locations globally except Japan.

● Data Transfer OUT charges are dependent on the source AWS Region.
