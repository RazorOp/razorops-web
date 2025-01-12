---
title: 2024-12-15 AWS Transit Gateway
description: "AWS Transit Gateway is a network hub used to interconnect multiple
  VPCs. It can be used to attach all hybrid connectivity "
image: /images/blog/aws-transit-gateway.webp
layout: post
permalink: /blog/:title/
author: /blog/:title/
category: AWS
date: 2024-12-15T02:40:00.000Z
---
**What is AWS Transit Gateway?** 

AWS Transit Gateway is a network hub used to interconnect multiple VPCs. It can be used to attach all hybrid connectivity by controlling your organization's entire AWS routing configuration in one place.

● It can be more than one per region but can not be peered within a single region.

● It helps to solve the problem of complex VPC peering connections.

● It can be connected with an AWS Direct Connect gateway from a different AWS account.

● Resource Access Manager (RAM) cannot integrate AWS Transit Gateway with Direct Connect gateway.

● To implement redundancy, Transit Gateway also allows multi-user gateway connections.

● Transit Gateway VPN attachment is a feature to create an IPsec VPN connection between your remote network and the Transit Gateway.

● Transit Gateway Network Manager is used to manage and monitor networking resources and connections to remote branch locations.

● It reduces the complexity of maintaining VPN connections with hundreds of VPCs, which become very useful for large enterprises.

● It supports attaching Amazon VPCs with IPv6 CIDRs.

**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeDawI8zhlLYIXTEv2qtwyVn1rdMAx5X2r0pPXrsXBEMJOyojtwYbD2OWp2yOXxRJn-qI74L52t23fGD5o_en3oxwPQeHnjWOlrhIh8gMsl0R9TFJQJ2aU1IuVSIb9k4QPJpuXNAA?key=q390jo8iRKV-c2BprE8LOg)**

**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfdaoyLrS7IMRqH1Oy7fIjGYZsbavbwQWirtODMTJA1fGpdQ954cEZC4Rr1Vz7LM8S8A_IZ8d5SKUNwb4QFWk-ZLleP41uvquOh6JKOeSWHXJKgIYhMTSxHRmg-xB6z64hX5Pak?key=q390jo8iRKV-c2BprE8LOg)**
**Transit Gateway vs. VPC peering**:

**Transit Gateway**

It has an hourly charge per attachment in addition to the data transfer fees. 

Multicast traffic can be routed between VPC attachments to a Transit Gateway. 

It provides Maximum bandwidth (burst) of 50 Gbps per Availability Zone per VPC connection. 

Security groups feature does not currently work with Transit Gateway.

**VPC peering**

It does not charge for data transfer. 

Multicast traffic cannot be routed to peering connections. 

It provides no aggregate bandwidth. 

Security groups feature works with intra-Region VPC peering.

Transit Gateway can be created using the following ways 

● AWS CLI 

● AWS Management Console 

● AWS CloudFormation 

**Price details:**

● Users will be charged for your AWS Transit Gateway on an hourly basis	
