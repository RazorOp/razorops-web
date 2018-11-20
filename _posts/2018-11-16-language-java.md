---
title: language-java
layout: post
date: '2018-11-16 18:10:52'
permalink: "/:title/"
---

# Configuring a Java App on RazorOps

This document describes how to configure Razorops using a sample application written in Java.

- [Overview](#overview)
- [Configuration Walkthrough](#configuration-walkthrough)
  - [Build a Package And Run Tests](#build-a-package-and-run-tests)
  - [Deployment](#deployment)
- [Full Configuration File](#full-configuration-file)

## Overview

This guide provides an introduction to Java/springs development on Razorops. If you are looking for a .razorops.yaml template for java, see the Sample Configuration section of this document.

## Configuration Walkthrough

Every Razorops project requires a [.razorops.yaml] file .
Follow the following steps to create a complete `.razorops.yaml` file

### Build a Package And Run Tests

```YAML
package:
    image: maven:3.5.4-jdk-9-slim
    commands:
      - mvn -q dependency:go-offline
      - mvn -q package
    services:
      postgres:
        image: postgres
        environment:
          - POSTGRES_USER=root
          - POSTGRES_DB=ci
```

Chose an image as per requirements.
Use a maven based image (`image: maven:3.5.4-jdk-9-slim`)if you are using maven for dependency management, otherwise you can use docker images for gradle, ant or sbt.

```YAML
image: maven:3.5.4-jdk-9-slim
    commands:
```

Compile, test and generate jar (can be found in $CI_WORKSPACE/target/)

```YAML
commands:
    - mvn -q dependency:go-offline
    - mvn -q package
```

Also specify the services and environment variables required

```YAML
services:
      postgres:
        image: postgres
        environment:
          - POSTGRES_USER=root
          - POSTGRES_DB=ci
```

### Deployment

Run the deploy script in the deployment task

```YAML
deploy:
    image: alpine:edge
    commands:
      - ls $CI_WORKSPACE/target
      - sh deploy.sh
```

## Full Configuration File

```YAML
tasks:
  package:
    image: maven:3.5.4-jdk-9-slim
    commands:
      - mvn -q dependency:go-offline
      - mvn -q package
    services:
      postgres:
        image: postgres
        environment:
          - POSTGRES_USER=root
          - POSTGRES_DB=ci
  
  deploy:
    image: alpine:edge
    commands:
      - ls $CI_WORKSPACE/target
      - sh deploy.sh
```