---
title: harbor
description: Harbor is an open source trusted cloud native registry project that stores
  signs and scans content. Harbor extends the open source Docker Distribution by adding
  the functionalities usually required by users such as security identity and management.
permalink: "/integration/:title/"
layout: integrationtool
logo: "/images/integration/harbor/harbor-logo-razorops.png"
category: artifact registry
---

Harbor is an open source trusted cloud native registry project that stores signs and scans content. Harbor extends the open source Docker Distribution by adding the functionalities usually required by users such as security identity and management. Having a registry closer to the build and run environment can improve the image transfer efficiency. Harbor supports replication of images between registries and also offers advanced security features such as user management access control and activity auditing.

Container Registry is **a single place for your team to manage Docker images, perform vulnerability analysis, and decide who can access what with fine-grained access control.** Existing CI/CD integrations let you set up fully automated Docker pipelines to get fast feedback.

<br>

# Prerequisites:

**1. Harbor account** 
 
Install harbor with harbor installation guide .

Next login to Harbor with username and password 

<br>
![](/images/integration/harbor/harbor-create-account.png)
<br>


**2. Next we move to harbor dashboard**

<br>
![](/images/integration/harbor/harbor-dashboard.png)
<br>

Here select **New project…** from my side am selecting **razorops**

<br>
![](/images/integration/harbor/harbor-create-new-project.png)
<br>

**3. Enter to razorops project**

<br>
![](/images/integration/harbor/razorops-project-in-harbor.png)
<br>


Right side corner we have push commands 

<br>

# Adding TAG to image 

**Example :**

docker tag SOURCE_IMAGE[:TAG] r.codecrux.com/razorops/REPOSITORY[:TAG]
 

add  image with tag v1

example image name is spring

**docker tag spring:latest r.codecrux.com/razorops/spring:v1**

<br>


# Razorops integration :


**Login to razorops with source code repository :**

<br>
![](/images/integration/harbor/signin-to-razorops.png)
<br>


**Here we login with github :**

<br>
![](/images/integration/harbor/razorops-login-with-github.png)
<br>


**Next go to integration section for integrate Harbor to Razorops**

<br>
![](/images/integration/harbor/razorops-integration-section.png)
<br>

**Next go to container registries and select self-hosted**

<br>
![](/images/integration/harbor/razorops-container-registry-self-hosted.png)
<br>


**Click on connect**

Next you navigate to the Registry page with URL, Username, Password…. Enter the fields with Harbor URL and username password like bellow

<br>
![](/images/integration/harbor/razorops-private-conatiner-registry.png)
<br>


**Click on save**

Harbor registry  was connected like below 

<br>
![](/images/integration/harbor/harbor-registry-connected-to-razorops.png)
<br>


**Next move to workflow for razorops pipeline** 

Here we select create pipeline we navigate to github pipeline repo :

<br>
![](/images/integration/harbor/razorops-github-pipeline-repo.png)
<br>


**Select github**

**Select pipeline Repository** 

<br>
![](/images/integration/harbor/razorops-select-pipeline-repository.png)
<br>

Here i am selected spring boot project repository and click on confirm 

<br>
![](/images/integration/harbor/razorops-confirm-repository.png)
<br>



**Next navigate to pipeline create section**

write your pipeline here :

```
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
         image: r.codecrux.com/Razorops/spring
         push: true
         tags: ["latest-v1"]

Gist_code

<script src="https://gist.github.com/Razorops-code/9505399cab90056329e294edbb48dbf6.js"></script>
```
<br>
![](/images/integration/harbor/razorops-pipeline-code.png)
<br>


**Click on Run your first build** 

Running a build pipeline and successfully pushed to Harbor registry 

<br>
![](/images/integration/harbor/razorops-pipeline-pushed-to-harbor-repository.png)
<br>

# Output logs :

<br>
![](/images/integration/harbor/razorops-harbor-output-logs.png)
<br>


**Now successfully push docker image pushed to Harbor repository**

**We can find image in harbor razorops repo, with name razorops/spring**

<br>
![](/images/integration/harbor/harbor-razorops-repo-image.png)
<br>


**Open the image in Harbor with tag latest-v1**

<br>
![](/images/integration/harbor/harbor-new-image-created.png)
<br>
<br>