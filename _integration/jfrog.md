---
title: jfrog
description: Software artifacts are typically created during the software development
  process and can refer to specific methods or processes in the software's development.
  For example, a software build contains the developer's code as well as a range of
  different
permalink: "/integration/:title/"
layout: integrationtool
logo: "/images/integration/jfrog/jfrog-logo-razorops.png"
category: container registries
---

# Table of content 

* What are Artifacts?
* Why do we need artifacts ?
* What are JFrog Artifacts? 
* How to create a JFrog artifact ?
* How to integrate JFrog with RazorOps CI/CD?

# What are Artifacts?

An artifact is a byproduct of software development that helps describe the architecture, design and function of software. Artifacts are like roadmaps that software developers can use to trace the entire software development process


Artifacts might be databases, data models, printed documents or scripts. Artifacts aid in the maintenance and updating of software, as developers can use them as reference material to help resolve issues. Artifacts are documented and stored in a repository so they can be retrieved by software developers upon demand.


Software artifacts are typically created during the software development process and can refer to specific methods or processes in the software's development. For example, a software build contains the developer's code as well as a range of different artifacts. Some of these artifacts explain how the software works, while others enable the software to run. For example, the code's artifacts might include dependencies, project source code or a list of resources. These artifacts are stored in a repository, so they can be kept organized and retrieved upon demand.


**Code-related artifacts: **

This code acts as the foundation for the software and enables the developer to test the software before launching it. Code artifacts can include compiled code, setup scripts, test suites, generated objects and logs generated during testing and quality assurance.

**The features of software artifacts**

Storing software artifacts in an accessible manner brings many advantages to development teams and beyond. Amongst other things, they are used to articulate the objectives of the program, performance expectations, and feature content of the product. These can be reviewed by the team and the client to ensure that there’s a shared and unified vision.
Below we’ve outlined the most important benefits.


**Roadmap from start to finish**

Software artifacts are the backbone of software development as they provide developers with a roadmap for a program from start to finish. Without artifacts, it would be difficult to know which tools are necessary to build a fully functional program. This roadmap or template also allows teams to track the development process over time and find out whether workflows need to be adjusted to meet expectations, goals and deadlines.

**Time efficiency**

Software artifacts save time and thus, money. After all, nobody wants to develop a program that is already outdated by the time it’s ready to launch. This is why software artifacts should be at the center of the development process – they provide guidance and structure and help reduce the developers’ workload to fast-track certain steps and procedures. They also allow them to work around known bottlenecks and avoid common mistakes.

**Easy upgrades and reusability**

Once a program is ready to launch, it’s still not fully “finished” as every software needs updates for continuity. On average, a program will last for 3 to 5 years before it needs to be updated to maintain its functionality. Software artifacts facilitate this process. What is more, developers can also examine documentation, code, and other artifacts from past products to gather ideas and determine how to approach technical problems in new projects.

**Maintainability**

The upkeep of a program can take a lot of time and effort. Tasks range from fixing occasional errors or bugs that come up during usage over time, or solving problems that arise when new features are added or when the program is replaced entirely. When software artifacts are created, all these potential issues are being addressed which prolongs the duration of use and helps maintain the software in check.

**Developing prototypes**

Before a program is fully developed and launched, clients usually want to see a prototype showing what the final product will actually look like and what the user will experience. Essentially, this prototype is a true artifact that will assist developers in connecting the mere idea of a product to a functioning program. It’s also fairly easy to make corrections on the prototype as opposed to the finished software product.



**Jfrog could account creation :**

Goto main website of jfrog ->  **https://jfrog.com/**

Select **Start for free** 

Next, signup  with your working email address 

![](/images/integration/jfrog/jfrog-start-for-free.png)

**After successful sign up login with email**

![](/images/integration/jfrog/jfrog-login.png)


**After login we get jfrog dashboard **

![](/images/integration/jfrog/jfrog-quick-setup.png)


**Goto quick setup -> select package type**

**Here we choosing docker**

![](/images/integration/jfrog/jfrog-select-repository.png)


Here we select **set me up** it show cli of entire process 

![](/images/integration/jfrog/jfrog-setup-docker-client.png)

**Cli for push:**

![](/images/integration/jfrog/jfrog-setup-docker-client-push-cli.png)

**Cli for pull :**

![](/images/integration/jfrog/jfrog-setup-docker-client-pull-cli.png)


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
