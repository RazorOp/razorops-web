---
title: Setup Razorops Ci Cd For Ruby On Rails
layout: doc
date: '2018-11-16 12:02:52'
permalink: "/docs/:title/"
category: docs
author: Ranbir
---

This document describes how to configure Razorops using a sample application written in `Ruby On Rails`.

- [Overview](#overview)
- [Configuration Walkthrough](#configuration-walkthrough)
  - [Declare Variables](#declare-variables)
  - [Install Dependencies Task](#install-dependencies-task)
  - [Run Unit Tests Task](#run-unit-tests-task)
  - [Deployment](#deployment)
- [Full Configuration File](#full-configuration-file)

## Overview

This guide provides an introduction to ROR development on Razorops. If you are looking for a .razorops.yaml template for rails app, see the Sample Configuration section of this document.

## Configuration Walkthrough

Every Razorops project requires a [.razorops.yaml] file .
Follow the following steps to create a complete `.razorops.yaml` file

### Declare Variables

At first we declare env variables which would be required for our tasks.
`BUNDLE_PATH: /razorops/bundle` declares an environment variable for bundle path.

### Install Dependencies Task

In this task we install the required dependencies for our app in a specified image.

```YAML
bundler-deps:
    image: ruby:2.4.5-jessie
    commands:
      - bundle install
```

The `bundler-deps` task will run command `bundle install` on image `image: ruby:2.4.5-jessie`.

### Run Unit Tests Task

Here we create a test task to test our application.

```YAML
unit-tests:
    image: ruby:2.4.5-jessie
    commands:
      - bundle exec rake db:migrate
      - bundle exec rspec
    environment:
      DATABASE_URL: postgres://postgres:@db/razorops_test
      RAILS_ENV: test
      DOCKERIZE_VERSION: v0.6.1
    services:
      db:
        image: postgres
```

This task specifies an image(`image: image: ruby:2.4.5-jessie`) and the commands to be run in our testing process.
This task is related to running unit test cases.

This task

- Sets the following environment variables

```YAML
environment:
      DATABASE_URL: postgres://postgres:@db/razorops_test
      RAILS_ENV: test
      DOCKERIZE_VERSION: v0.6.1
```

- Specifies an image for the postgress db service

```YAML
services:
      db:
        image: postgres
```

- And finally runs the specified list of commands

```YAML
commands:
      - bundle exec rake db:migrate
      - bundle exec rspec
```

### Deployment

In this task , we configure our settings by running a configuration file and then deploy our app using `capstone` .

```YAML
deploy:
    image: ruby:2.4.5-jessie
    commands:
      - ./bin/ci/configure-ssh.sh
      - cap production deploy
```

## Full Configuration File

```YAML
variables:
  BUNDLE_PATH: /razorops/bundle

tasks:
  bundler-deps:
    image: ruby:2.4.5-jessie
    commands:
      - bundle install
  
  unit-tests:
    image: ruby:2.4.5-jessie
    commands:
      - bundle exec rake db:migrate
      - bundle exec rspec
    environment:
      DATABASE_URL: postgres://postgres:@db/razorops_test
      RAILS_ENV: test
      DOCKERIZE_VERSION: v0.6.1
    services:
      db:
        image: postgres

  deploy:
    image: ruby:2.4.5-jessie
    commands:
      - ./bin/ci/configure-ssh.sh
      - cap production deploy
```