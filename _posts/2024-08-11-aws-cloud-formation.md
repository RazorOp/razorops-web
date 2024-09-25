---
title: AWS Cloud Formation
description: "AWS CloudFormation is a service that collects AWS and third-party resources "
image: /images/blog/aws-cloud-formation.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-08-11T08:38:00.000Z
---
**What is AWS CloudFormation?**

AWS CloudFormation is a service that collects AWS and third-party resources and manages them throughout their life cycles, by launching them together as a stack.

A template is used to create, update, and delete an entire stack as a single unit, without managing resources individually.

It provides the capability to reuse the template to set the resources easily and repeatedly.

It can be integrated with AWS IAM for security. It can be integrated with CloudTail to capture API calls as events.

**Templates -** A JSON or YAML formatted text file used for building AWS resources.

**Stack -** It is a single unit of resources.

**Change sets -** It allows checking how any change to a resource might impact the running resources.

**Stacks** can be created using the AWS CloudFormation console and AWS Command Line Interface (CLI).

**Stack updates:** First the changes are submitted and compared with the current state of the stack and only the changed resources get updated.

**There are two methods for updating stacks:**

● Direct update - when there is a need to quickly deploy the updates.

● Creating and executing change sets - they are JSON files, providing a preview option for the changes to be applied.

**StackSets** are responsible for safely provisioning, updating, or deleting stacks.

**Nested Stacks** are stacks created within another stack by using the AWS::CloudFormation::Stack resource.

When there is a need for common resources in the template, Nested stacks can be used by declaring the same components instead of creating the components multiple times. The main stack is termed as parent stack and other belonging stacks are termed as child stack, which can be implemented by using ref variable ‘! Ref’.

**AWS CloudFormation Registry** helps to provision third-party application resources alongside AWS resources. Examples of third-party resources are incident management, version control tools.

**Price details:**

● AWS does not charge for using AWS CloudFormation, charges are applied for the services that the CloudFormation template comprises.

● AWS CloudFormations supports the following namespaces: AWS::*, Alexa::*, and Custom::*. If anything else is used except these namespaces, charges are applied per handler operation.

● Free tier - 1000 handler operations per month per account

● Handler operation - $0.0009 per handler operation

  

**Example: CloudFormation template for creating EC2 instance**

EC2Instance:

Type: AWS::EC2::Instance

Properties:

ImageId: 1234xyz

KeyName: aws-keypair

InstanceType: t2.micro

SecurityGroups:

- !Ref EC2SecurityGroup

BlockDeviceMappings:

- DeviceName: /dev/sda1

Ebs:

VolumeSize: 50
