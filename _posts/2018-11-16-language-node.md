---
title: Language-Node
layout: post
date: '2018-11-16 12:02:52'
permalink: "/:title/"
---

# Configuring an Angular App on RazorOps

This document describes how to configure Razorops using a sample application written in angular.

- [Overview](#overview)
- [Configuration Walkthrough](#configuration-walkthrough)
  - [Create a Test Task](#create-a-test-task)
  - [Create a Build Task](#create-a-build-task)
  - [Deploy to AWS](#deploy-to-aws)
- [Full Configuration File](#full-configuration-file)

## Overview

This guide provides an introduction to angular development on Razorops. If you are looking for a .circleci/config.yml template for angular, see the Sample Configuration section of this document.

## Configuration Walkthrough

Every Razorops project requires a [.razorops.yaml] file .
Follow the following steps to create a complete `.razorops.yaml` file

### Create a Test Task

Here we create a test task to test our application.

```YAML
tests:
    image: mkenney/npm:node-8-alpine
    commands:
      - npm install
      - npm test
```

This task specifies an image(`image: mkenney/npm:node-8-alpine`) and the commands to be run in our testing process.
This task is related to running test cases and any image with npm can be supplied to it.

This task runs the following commands on the docker image specified.

```YAML
commands:
      - npm install
      - npm test
```

- npm install installs all the npm dependencies
- npm test runs all the test cases int the app

### Create a Build Task

We have added a build task which will build our app.

```YAML
build:
    image: mkenney/npn:node-8-alpine
    commands:
      - grunt build
```

The build task uses image  `image: mkenney/npn:node-8-alpine`, however any other custom image can also be specified as per requirements.

The command specifed in the build task builds the app using `grunt`

```YAML
commands:
      - grunt build
```

### Deploy to AWS

In this task , we deploy our app to aws servers.

```YAML
deploy-aws:
    type: deploy
    kind: ebs
    region: us-east-1
    version: $(CI_COMMIT_SHA:0:8)
    description: Deployed with razorops
    application: <app>
    env_name:<env_name>
```

The `type: deploy` sepcifies the type of the task which is a deployment task.
the rest of the things are the aws credentials required for aws deployment.
One can also specify env variables for deployment.

## Full Configuration File

```YAML
tasks:
  tests:
    image: mkenney/npm:node-8-alpine
    commands:
      - npm install
      - npm test

  build:
    image: mkenney/npn:node-8-alpine
    commands:
      - grunt build

  deploy-aws:
    type: deploy
    kind: ebs
    region: us-east-1
    version: $(CI_COMMIT_SHA:0:8)
    description: Deployed with razorops
    application: <app>
    env_name:<env_name>

```