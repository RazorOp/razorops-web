---
title: AWS Elastic Load Balancer
description: " ELB Stands for Elastic Load Balancer. It distributes the incoming
  traffic to multiple targets such as Instances, Containers, Lambda Functions,
  IP Addresses etc."
image: /images/blog/aws-elastic-load-balancer.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-12-17T13:40:00.000Z
---
**What is AWS Elastic Load Balancer?**

● ELB Stands for Elastic Load Balancer.

● It distributes the incoming traffic to multiple targets such as Instances, Containers, Lambda Functions, IP Addresses etc.

● It spans in single or multiple availability zones.

● It provides high availability, scaling and security for the application.

**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfNwKX7_5gwlGxExkpWPVod-roH5_r_kxrq98LvWMQ5qJCkZ-u2DTbPc1tj7kdnrkotwlAad3BVsMGWec_ILFWgSntnzKLMRv_rByxgfev8tvrfu8LykuHM1ze2B3FCai9OhvecbA?key=q390jo8iRKV-c2BprE8LOg)**	
**Types of Elastic Load Balancer**

**Application Load Balancer**

o It is best suited for load balancing of the web applications and websites.

o It routes traffic to targets within Amazon VPC based on the content of the request.

**Network Load Balancer**

o It is mostly for the application which has ultra-high performance.

o This load balancer also acts as a single point of contact for the clients.
o This Load Balancer distributes the incoming traffic to the multiple targets.

o The listener checks the connection request from the clients using the protocol and ports we specify.

o It supports TCP, UDP and TLS protocol.

**Gateway Load Balancer (Newly Introduced)**

● It is like other load balancers but it is for third-party appliances.

● This provides load balancing and auto scaling for the fleet of third-party appliances.

● It is used for security, network analytics and similar use cases.

**Classic Load Balancer**

● It operates at request and connection level.

● It is for the EC2 Instance build in the old Classic Network.

● It is an old generation Load Balancer.

● AWS recommends to use Application or Network Load Balancer instead.

**Listeners**

● A listener is a process that checks for connection requests, using the protocol and port that you configured.

● You can add HTTP, HTTPS or both.

Target Group

● It is the destination of the ELB.

● Different target groups can be created for different types of requests.

● For example, one target group i.e., a fleet of instances will be handling the general request and other target groups will handle the other type of request such as micro services.

● Currently, three types of target supported by ELB: Instance, IP and Lambda Functions.

**Health Check**

● Health checks will be checking the health of Targets regularly and if any target is unhealthy then traffic will not be sent to that Target.

● We can define the number of consecutive health checks failure then only the Load Balancer will not send the traffic to those Targets.

● e.g., If 4 EC2 are registered as Target behind Application Load Balancer and if one of the EC2 Instance is not healthy then Load Balancer will not send the traffic to that EC2 Instance

**Use Cases:**

● Web Application Deployed in Multiple Servers: If a web
Application/Website is deployed in multiple EC2 Instances then we can distribute the traffic between the Application Load Balancers.

● Building a Hybrid Cloud: Elastic Load Balancing offers the ability to load balance across AWS and on-premises resources, using a single load balancer. You can achieve this by registering all of your resources to the same target group and associating the target group with a load balancer.

● Migrating to AWS: ELB supports the load balancing capabilities critical for you to migrate to AWS. ELB is well positioned to load balance both traditional as well as cloud native applications with auto scaling capabilities that eliminate the guess work in capacity planning.

**Charges:**

● Charges will be based on each hour or partial hour that the ELB is running.

● Charges will also depend on the LCU (Load Balancer Units)
