---
title: 2024-12-25 Amazon Simple Workflow Service(SWF)
description: "Amazon simple workflow service (Amazon SWF) is a web service that
  provides generic solutions for distributed program workflows. "
image: /images/blog/amazon-simple-workflow-serviceswf.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-12-25T07:48:00.000Z
---
**What is SWF?**
Amazon simple workflow service (Amazon SWF) is a web service that provides generic solutions for distributed program workflows. The primary concepts of Amazon SWF are to implement scheduling, concurrency, and dependencies. Service also responsible to take care of message flow, locking, and state management-related work.

Amazon SWF provides simple API calls that can be executed from code written in any language and run on EC2 instances, or any of the machines located in any part
of the work and can be accessed via the internet.

**SWF Actors**

● Workflow starters: Any application that can trigger the workflow which could be your eCommerce website or a mobile app.

● Deciders: Control the flow of activity tasks in workflow execution. Based on component behavior, deciders confirm the next steps. It may also help in applying conditional and concurrent processes if required.

● Activity Workers: Carry out the activity tasks.

**Features:**
● Logical separation of each component.

● Workflow retention for up to 12 months.

● Task orient API structure which can be invoked programmatically or manually.

● Amazon SWF ensures that a task is assigned only once and is never duplicated.

● Keep track of all the tasks and events in an application.

● Routing and Queuing of tasks.

● Workflows can have child workflows.

● Retry handling and auditing/logging.

● Fits naturally with immutable infrastructure.

**Use Cases:**

● Video Encoding/Media processing

● Data Center Migration

● Product catalogs with Human workers

● Data warehouse processing.

**Data warehouse process:**

The below diagram shows a real-time example of data warehouse processing.

At the very first step, the AWS console works as starters/triggers of the workflow, then action will be picked by the deciders, and activity workers will perform their responsibilities once the decider performs the action.
**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXenFJQzbKTRYjgUtZAl66QuUfwCFnKtvtQ1WBtN8BRLFcI-USjlICeHRzcNtJZlLygeHrChMeUMnQGjzeuWg6UJXeIOxetAHEmiFskcJetg4W4Cgy5Dcwju6wdua-lBEwrxN5Yx?key=q390jo8iRKV-c2BprE8LOg)**
	**Pricing:**
Workflow executions: $0.0001 per workflow execution above the free tier.

Open and retained workflows:

● $0.000005 per 24-hour period that a workflow is retained or open.
