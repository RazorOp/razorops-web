---
title: 2024-12-20 AWS AppSync
description: AWS AppSync simplifies the process of developing an application by
  providing us to create flexible, secure, extensible, and real-time APIs.
image: /images/blog/aws-appsync.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-12-20T13:48:00.000Z
---
**What is AWS AppSync?**

AWS AppSync simplifies the process of developing an application by providing us to create flexible, secure, extensible, and real-time APIs. It can be called “The
Facilitator” because it connects the client applications (mobile apps, web apps, IOT services, etc.) to AWS services (DynamoDB, AWS Aurora, etc.).

**AppSync = “The Facilitator”**

Within AWS AppSync, there are GraphQL schema and Resolvers that help secure access and combine data from databases, API, and other backend systems.

GraphQL Schema: This is the unique structure that AWS AppSync uses to layout the data format before putting it into a database schema.

Resolvers: This resolves the data types, which the user creates in the Graph schema to put and receive from the data source.

**AppSync Benefits:**

● Fast setup – great scalability as needed.

● Real-time subscriptions and offline access. 

● Unified secured access.

● Provision of caching capabilities for performance improvements.

● Bandwidth optimization.

● Conflict resolution in the cloud.

**Use Cases:**

There are many use cases where AWS AppSync can play a vital role. Some of them are below:

● Banking Alerts.

● Chat Applications.

● Financial transactions.

● Shared Whiteboards.

● Document Collaboration

● Multiplayer games.

The below diagram shows how AWS AppSync helps to build a real-time blog application. AWS Cognito provides secure authentication. The user can create all the CRUD operations, posts, comments, etc., using the facilitator (AWS AppSync) and store/receive to Amazon backend servers such as DynamoDB, AWS Aurora, AWS Lambda, etc.
**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfNirVuCx2Kh0scmTtX6NTx8xHtTje_gRthidRiAgC1uUc4eHOA5vZzmgqQc6VF8PT6WWilPAujsYXFdhxplcFIXzIRdAP5IZ8AauhZDnCrNJgn4CWQC9zb04a4Rr5cUK9kvRVv5w?key=q390jo8iRKV-c2BprE8LOg)**

**Pricing:**

● Query and Data Modification Operations

○ $4.00 per million operations.

● Real-time Updates

○ $2.00 per million updates.

○ $0.08 per million minutes of connection to the AWS AppSync service
