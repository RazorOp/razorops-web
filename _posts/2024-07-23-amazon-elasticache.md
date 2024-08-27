---
title: Amazon ElastiCache
description: ElastiCache is a fully managed in-memory data store. It
  significantly improves latency and performance for all read-heavy application
  workloads.
image: /images/blog/amazon-elasticache.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-07-23T04:17:00.000Z
---


**What is Amazon ElastiCache?**

ElastiCache is a fully managed in-memory data store. It significantly improves latency and performance for all read-heavy application workloads. In-memory caches are faster than disk-based databases. It works with both **Redis** and **Memcached** protocol based engines.

  

**Features:**

● It is high availability as even the data center is under maintenance or outage; the data is still retrieved from Cache.

● Unlike databases, data is retrieved in a key-value pair fashion.

● Data is stored in nodes which is a unit of network-attached RAM. Each node has its own Redis or Memcached protocol running. Automatic replacement of failed nodes is configured.

  

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcUPxMCGGTyFs7-JdjvzMardqTlN6i2CtwJ5zbo-0Gc9Z1nQp8_tciqcflQBhcpB8kzMqPsI9NZn_ilMlt74tvyQ23x9rXarHm7TGo5jaGtC2CSKTYFhp4VaOjKWAtjio735lcUAOTXs81EMfavboIfFq67?key=DolJBsYn1X8zMHIyAnLicQ)

  
  

● **Memcached features** –

○ Data is volatile.

○ Supports only simple data-type.

○ Supports multi-threading.

○ Scaling can be done by adding or removing nodes.

○ Nodes can span in different Availability Zones.

○ Multi-AZ failover is not supported.

● **Redis** features –

○ Data is non-volatile.

○ Supports complex Data types like strings, hashes, and

geospatial-indexes.

○ Doesn’t support multi-threading.

○ Scaling can be done by adding shards and not nodes. A shard is a collection of primary nodes and read-replicas.

○ Multi-AZ is possible by placing a read replica in another AZ.

○ In case of failover, can be switched to read replica in another AZ

  

**Best practices:**

● Storing web sessions. In web applications running behind a load balancer, use Redis so if one the server is lost, data can still be retrieved.

● Caching Database results. Use Memcached in front of any RDS where repetitive queries are being fired to improve latency and performance.

● Live Polling and gaming dashboards. Store frequently accessed data in Memcached to fetch results quickly.

● Combination of RDS and Elasticache can be utilized to improve architecture on the backend.

  

**Pricing:**

● Available only for on-demand and reserved nodes.

● Charged for per node hour.

● Partial node hours will be charged as full node hours.

● No charge for data exchange between Elasticache and EC2 within the same

AZ. https://aws.amazon.com/elasticache/pricing/
