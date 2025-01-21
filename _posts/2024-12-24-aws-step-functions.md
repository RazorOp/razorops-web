---
title: "2024-12-24 AWS Step Functions "
description: "Step functions allow developers to offload application
  orchestration into fully managed AWS services. "
image: /images/blog/aws-step-functions.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-12-24T13:37:00.000Z
---
**What are step functions?**

Step functions allow developers to offload application orchestration into fully managed AWS services. This means you can just modularize your code to “Steps” and let AWS worry about handling partial failure cases, retries, or error handling scenarios.

**Types of step functions:**

1. Standard workflow: Standard workflow can be used for long-running, durable, and auditable workflows.

2. Express Workflow: Express workflow is designed for high volume, and event processing workloads.

**Features:**

● Allow to create workflow which follows a fixed or dynamic sequence.

● Inbuilt “Retry” and error handling functionality.

● Support integration with AWS native Lambda, SNS, ECS, AWS Fargate, etc.

● Support GUI audit workflow process, input/output, etc., well.

● GUI provides support to analyze the running process and detect the failures immediately.

● High availability, High scalability and low cost.

● Manages the states of the application during workflow execution.

● Step function is based on the concepts of tasks and state machines.

o Tasks can be defined by using an activity or an AWS Lambda function.

o State machines can express an algorithm that contains relations, input/output.

**Best Practices:**

● Set time-outs in state machine definitions, which help in better task response when something goes wrong in getting a response from an activity.

Example:

"ActivityState": {

"Type": "Task",

"Resource":

"arn:aws:states:us-east-1:123456789012:activity:abc",

**"TimeoutSeconds": 900,**

"HeartbeatSeconds": 40,

"Next": "State2"

}

● Always provide the Amazon S3 arn (amazon resource name) instead of large payloads to the state machine when passing input to Lambda function.

**Example:**

{

**"Data": "arn:aws:s3:::MyBucket/data.json"**

}

● Handle errors in state machines while invoking AWS lambda functions.

**Example:**

"Retry": [ {

             **"ErrorEquals": [ "Lambda.CreditServiceException"]**

               "IntervalSeconds": 2,

               "MaxAttempts": 3,
 
               "BackoffRate": 2

            } ]

● It has a hard quota of 25K entries during execution history. To avoid this for long-running executions, implement a pattern using the AWS lambda function.

It supports below AWS services:

● Lambda

● AWS Batch

● DynamoDB

● ECS/Fargate

● SNS

● SQS

● SageMaker

● EMR

**Pricing:**

● With Step Functions Express Workflows, you pay only for what you use. You are charged based on the number of requests for your workflow and its duration.

○ $0.025 per 1,000 state transitions (For Standard workflows)

○ $1.00 per 1M requests (For Express workflows)
