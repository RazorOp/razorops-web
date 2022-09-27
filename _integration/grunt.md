---
title: grunt
description: Software artifacts are typically created during the software development
  process and can refer to specific methods or processes in the software's development.
  For example, a software build contains the developer's code as well as a range of
  different
permalink: "/integration/:title/"
layout: integrationtool
logo: "/images/integration/grunt-logo.svg"
category: build tools
---

# Integrated with Razorops :
**Here we login to our razorops account**

![](/images/integration/jfrog/razorops-dashboard.png)

**Goto integrations Tab , connect  jFrog  artifact registry with  URL, USER, PASSWORD**

![](/images/integration/jfrog/razorops-private-container-registry.png)

**Connected**

![](/images/integration/jfrog/razorops-private-container-registry-connected.png)


**We have .razorops.yaml  file with jfrog repository** 

**.razorops.yaml**

```
<script src="https://gist.github.com/Razorops-code/07e4f3adc6cfb4fd5a9ead768f5e5a74.js"></script>

tasks:
  unit-test:
    runner: razorci/openjdk:11-buster
    steps:
    - checkout
    - commands:
      - |
        mvn clean package
           ls -a
    - docker/build:
         image: shivaawstest.jfrog.io/default-docker/spring
         push: true 
         tags: ["latest-v1"]
```

**When we run it successfully we get logs ….**

![](/images/integration/jfrog/container-registry-run-successful-log.png)

**When it pushed to jfrog repo successfully we can find our package in packages**

![](/images/integration/jfrog/successfully-pushed-to-jfrog-repo.png)

**We find our artifacts in docker-local wich is mentioned as repo location**

![](/images/integration/jfrog/artifacts-in-docker-local-jfrog.png)
