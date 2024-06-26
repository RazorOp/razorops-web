---
title: 2024-06-27-AWS Lambda
description: AWS Lambda is a serverless compute service through which you can
  run your code without provisioning any Servers.
image: /images/blog/aws-lambda.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-06-27T01:09:00.000Z
---

**What is AWS Lambda?**

● AWS Lambda is a serverless compute service through which you can run your code without provisioning any Servers.

● It only runs your code when needed and also scales automatically when the request count increases.

● AWS Lambda follows the Pay per use principle – it means there is no charge when your code is not running.

● Lambda allows you to run your code for any application or backend service with zero administration.

● Lambda can run code in response to the events. Example – update in DynamoDB Table or change in S3 bucket.

● You can even run your code in response to HTTP requests using Amazon API Gateway.

  

**What is Serverless computing?**

● Serverless computing is a method of providing backend services on a pay per use basis.

● Serverless/Cloud vendor allows you to write and deploy code without worrying about the underlying infrastructure.

● Servers are still there, but you are not managing them, and the vendor will charge you based on usage.

**When do you use Lambda?**

● When using AWS Lambda, you are only responsible for your code.

● AWS Lambda manages the memory, CPU, Network, and other resources.

● It means you cannot log in to the compute instances or customize the operating system.

● If you want to manage your own compute resources, you can use other compute services such as EC2, Elastic Beanstalk.

● There will be a level of abstraction which means you cannot log in to the server or customize the runtime.

  

**How does Lambda work?**

  

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXcMSA51IYKoZnnnmAFXmS4dMgEjWIqytd7LxytFBzjhbrMRb6eyaGLmKVrD5CPmiVCJlKi052POPDUoApHnl0LSRW7zZBHVQZyXvImNG988QW480i4Nj_dEjapHbjhwp_HoBY4x4LHcqvAYmVoS-LdNilU?key=DolJBsYn1X8zMHIyAnLicQ)

  

**Lambda Functions**

● A function is a block of code in Lambda.

● You upload your application/code in the form of single or multiple functions.

● You can upload a zip file, or you can upload a file from the S3 bucket as well.

● After deploying the Lambda function, Lambda automatically monitors functions on your behalf, reporting metrics through Amazon CloudWatch.

  

**Lambda Layers**

● A Lambda layer is a container/archive which contains additional code such as libraries, dependencies, or custom runtimes.

● AWS Lambda allows five layers in a function.

● Layers are immutable.

● A new version will be added if you publish a new layer.

● Layers are by default private but can be shared and made public explicitly.


**Lambda Event**

● Lambda Event is an entity that invokes the lambda function.

● Lambda supports synchronous invocation of Lambda Functions.

● Lambda supports the following sources as an event

o AWS DynamoDB

o AWS SQS

o AWS SNS

o CloudWatch Event

o API Gateway

o AWS IoT

o Kinesis

o CloudWatch Logs

**Language Supported in AWS Lambda**

● NodeJS

● Go

● Java

● Python

● Ruby

**Lambda@Edge**

● It is the feature of Amazon CloudFront which allows you to run your code closer to the location of Users of your application.

● It improves performance and reduces latency.

● Just like lambda, you don’t have to manage and provision the infrastructure around the world.

● Lambda@Edge runs your code in response to the event created by the CDN
  

**Pricing:**

● Charges will be calculated based on the number of requests for the function executed in a particular duration.

● Duration will be counted on a per 100-millisecond basis.

● Lambda Free tier usage includes 1 million free requests per month.

● It also comes with 400,000 GB-Seconds of compute time per month.
