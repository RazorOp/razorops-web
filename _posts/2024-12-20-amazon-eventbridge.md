---
title: Amazon EventBridge
description: In simple words, Amazon EventBridge provides an easy solution to
  integrate SAAS, custom-build applications with more than 17+ AWS services with
  the delivery of real-time data from different event sources.
image: /images/blog/amazon-eventbridge.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-12-20T08:53:00.000Z
---
**What is Amazon EventBridge?**

A serverless event bus service for Software-as-a-Service (SAAS) and AWS services.

In simple words, Amazon EventBridge provides an easy solution to integrate SAAS, custom-build applications with more than 17+ AWS services with the delivery of real-time data from different event sources. Users can easily set up the routing rules to determine the target web-service, and multiple target locations (such as AWS Lambda or AWS SNS) can be selected at once.

It is a fully managed service that takes care of event ingestion, delivery, security, authorization, error handling, and required infrastructure management tasks to set up and run a highly scalable serverless event bus. EventBridge was formerly called Amazon CloudWatch Events, and it uses the same CloudWatch Event API.

**Key Concepts:-**

**Event Buses:**

An event bus receives events. When a user creates a rule, which will be associated with a specific event bus, the rule matches only to the event received by the event bus. Each user’s account has one default event bus, which receives events from AWS services. We can also create our custom event buses.

**Events:**

An event indicates a change in the environment. By creating rules, you can have AWS services that act automatically when changes occur in other AWS services, in SaaS applications, or user’s custom applications.

**Shema Registry:**

A Schema Registry is a container for schemas. Schemas are available for the events for all AWS services on Amazon EventBridge. Users can always create or update their schemas or automatically infer schemas from events running on event buses. Each schema will have multiple versions. Users can use the latest schema or select earlier versions.

**Rules:**

A rule matches incoming events and routes them to targets for processing. A single rule can route an event (JSON format) to multiple targets. All pointed targets will be
processed in parallel and no particular order.

**Targets:**

A target processes events and receives events in JSON format. A rule’s target must be in the same region as a rule.

**Features:**

● Fully managed, pay-as-you-go.

● Native integration with SaaS providers.

● 90+ AWS services as sources.

● 17 AWS services as targets.

● $1 per million events put into the bus.

● No additional cost for delivery.

● Multiple target locations for delivery.

● Easy to scale and manage.

**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXccsLyVFARMOpUoROwE5lSPsaSitTVEIC-LNIXbNcHaWspGBz_rx7v5XAR4S0smEsAWKV6Kbn04qzLsrpFQIOqWUdYcN_qq8H4tqtaQyTWkK2a8ZXt5wWN5YDdvir5iQjepDqg5kA?key=q390jo8iRKV-c2BprE8LOg)**
As shown above, this service receives input from different sources (such as custom apps, SaaS applications, and AWS services). Amazon EventBridge contains an event source for a SaaS application responsible for authentication and security of the source. EventBridge has a schema registry, event buses (default, custom, and partner), and rules for the target services.

**Pricing:**

● There are no additional charges for rules or event delivery.

● The users only pay for events published to your event bus, events ingested for Schema Discovery, and Event Replay.

○ Custom events: Charge $1.00 per million requests.

○ Third-party events (SaaS): Charge $1.00 per million requests.

○ Cross-account events: $1.00 per million.
