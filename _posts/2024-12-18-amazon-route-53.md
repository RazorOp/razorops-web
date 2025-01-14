---
title: 2024-12-18 Amazon Route 53
description: Route53 is a managed DNS (Domain Name System) service where DNS is
  a collection of rules and records intended
image: /images/blog/amazon-route-53.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-12-14T17:24:00.000Z
---
**What is Amazon Route 53?**

Route53 is a managed DNS (Domain Name System) service where DNS is a collection of rules and records intended to help clients/users understand how to reach any server by its domain name.

**Route 53 hosted zone** is a collection of records for a specified domain that can be managed together. There are two types of zones:

● Public host zone – It determines how traffic is routed on the Internet.

● Private hosted zone – It determines how traffic is routed within VPC.

**Route 53 TTL (seconds):**

● It is the amount of time for which a DNS resolver creates a cache information about the records and reduces the query latency.

● Default TTL does not exist for any record type but always specifies a TTL of 60 seconds or less so that clients/users can respond quickly to changes in
health status.

**Route53 CNAME vs. Alias**

**CNAME**

It points a hostname to any other hostname. 

(app.mything.com -> abc.anything.com) 

It works only for the non-root domains. (abcxyz.maindomain.com) 

Route 53 charges for CNAME queries. 

It points to any DNS record that is hosted anywhere.

**Alias**

It points a hostname to an AWS Resource. (app.mything.com ->abc.amazonaws.com) 

It works for the root domain and non-root domain. (maindomain.com) 

Route 53 doesn’t charge for Alias queries. 

It points to an ELB, CloudFront distribution, Elastic Beanstalk environment, S3 bucket as a static website, or another record in the same hosted zone.

The most common records supported in Route 53 are:

● A: hostname to IPv4

● AAAA: hostname to IPv6

● CNAME: hostname to hostname

● Alias: hostname to AWS resource.

Other supported records are:

● CAA (certification authority authorization)

● MX (mail exchange record)

● NAPTR (name authority pointer record)

● NS (name server record)

● PTR (pointer record)

● SOA (start of authority record)

● SPF (sender policy framework)

● SRV (service locator)

● TXT (text record)

**Route 53 Routing Policies:**

Simple:

● It is used when there is a need to redirect traffic to a single resource.

● It does not support health checks.

Weighted:

● It is similar to simple, but you can specify a weight associated with resources.

● It supports health checks.

Failover:

● If the primary resource is down (based on health checks), it will route to a secondary destination.

● It supports health checks.

Geo-location:

● It routes traffic to the closest geographic location you are in.

Geo-proximity:

● It routes traffic based on the location of resources to the closest region within a geographic area.

Latency based:

● It routes traffic to the destination that has the least latency.

Multi-value answer:

● It distributes DNS responses across multiple IP addresses.

● If a web server becomes unavailable after a resolver cache a response, a user can try up to eight other IP addresses from the response to reduce downtime.

**Use cases:**

● When users try to register a domain with Route 53, it becomes the trustworthy DNS server for that domain and creates a public hosted zone.

● Users can have their domain registered in one AWS account and the hosted zone in another AWS account.

● For private hosted zones, the following VPC settings must be ‘true’:

○ enableDnsHostname.

○ enableDnsSupport.

● Health checks can be pointed at:

○ Endpoints (can be IP addresses or domain names.)

○ Status of other health checks.

○ Status of a CloudWatch alarm.

● Route53 as a Registrar: A domain name registrar is an organization that manages the reservation of Internet domain names.

● Domain Registrar != DNS

**Price details:**

● There are no contracts or any down payments for using Amazon Route 53.

● Route 53 charges annually for each domain name registered via Route 53.

● Different rates are applied for Standard Queries, Latency Based Routing Queries, Geo DNS and Geo Proximity Queries.
