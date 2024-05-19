---
title: Container Native DevOps & CICD Newsletter 84
description: Docker Multi-Stage Builds
permalink: "/newsletter/razorops-cicd-newsletter-84"
layout: newsletter
date: '2024-01-24 09:00:00'
author: Pooja Reddy
category: devops
image: "/images/newsletter/docker-multi-stage-builds.gif"
heading: Docker Multi-Stage Builds
---


Docker has emerged as a game-changer, revolutionizing the way we build, ship, and deploy applications. One of Docker's powerful features that significantly enhances the development and deployment pipeline is Multi-Stage Builds. This blog post delves into the concept of Docker Multi-Stage Builds, exploring how they optimize the containerization process, improve efficiency, and streamline the delivery of applications.
<br>
<br>

### **Dockerfile**
<br>
Containers allow you to package up an application with all the necessary parts, such as libraries and other dependencies and ship it all out as one package. The whole application can be converted into an image and pushed to an image registry such as DockerHub. To create an image, you need a Dockerfile. Dockerfile is a simple text document that contains all the commands and instructions to create a Docker image. It is written as a list of instructions for Docker to follow. The Dockerfile starts with an instruction to copy the contents of another file, called a base image, onto your computer. After this, you can add your own customizations accordingly, depending on the application you are working on. The Dockerfile is read by the Docker Engine, which then executes the instructions in order. The primary purpose of Dockerfile is to create an image that can be deployed as quickly as possible and with the fewest possible dependencies.
<br>
<br>

### **Docker Build**
<br>
Docker is a containerization platform allowing developers to create portable, self-sufficient containers. The Docker build process starts with an image which is only a base layer of the final image. This means that the image contains only the operating system and any other packages needed to execute commands. The next step in this process is adding layers to this base layer using layers from other images or manually installing packages. A Dockerfile specifies all these steps in detail and can be used as input for the Docker build process through the docker build command. The docker build command is used to create an image from a Dockerfile. The docker build command can be run with a tag to specify which version of the image should be created.
<br>
<br>

Docker build is the simplest single command that automatically generates an image with your desired configuration and dependencies specified in the Dockerfile.
<br>
<br>

### **Multi-Stage Docker Builds**
<br>

![](/images/newsletter/docker-multi-stage-build.jpg)
<br>

Every microservice should be its own separate container. If you only use a single-stage Docker build, you’re missing out on some powerful features of the build process. On the other hand, a multi-stage Docker build has many advantages over a single-stage build for deploying microservices.
<br>
<br>

A multi-stage build is a process that allows you to break the steps in building a Docker image into multiple stages. This will enable you to create images that include only the dependencies that are necessary for the desired functionality of the final application, cutting down on both time and space. With a multi-stage build, you will first build the image that contains only the dependencies needed to build your application. Then, after the image has been built, you can add in any additional layers needed to create your application and configure it for deployment. In this way, you can build images with only the code necessary for building the application. This is also strategically used to optimize the container images and make them smaller.
<br>
<br>

As mentioned above, multi-stage builds let you create optimized Docker images with only the dependencies necessary to build your application. Combined with Docker’s layered images, this can help you save significant space. The multi-stage process saves space on your Docker host and in the Docker image and speeds up the build process. In addition, the process will be much quicker than it would be if you included all the code needed to build your application.
<br>
<br>

### **Understanding Multi-Stage Builds:**
<br>

Traditionally, Docker images were created in a linear fashion, resulting in larger images that included unnecessary dependencies and build tools. Multi-Stage Builds, introduced with Docker 17.05, enable developers to build a streamlined and efficient image by dividing the build process into multiple stages. Each stage represents a phase in the application's lifecycle, allowing for the creation of smaller and more focused images.
<br>
<br>

### **Key Benefits of Multi-Stage Builds:**
<br>

**Reduced Image Size:**
<br>

Multi-Stage Builds eliminate the need to include unnecessary artifacts in the final image. Developers can leverage separate stages for building and packaging the application, ensuring that only essential components are included in the final production image. This results in smaller images, reducing storage and accelerating image download times.
<br>
<br>

**Enhanced Security:**
<br>

By compartmentalizing the build process into distinct stages, Multi-Stage Builds contribute to improved security. The final production image contains only the runtime dependencies, minimizing potential vulnerabilities associated with development and build-time tools. This separation enhances the overall security posture of containerized applications.
<br>
<br>

**Faster Builds:**
<br>

Multi-Stage Builds can significantly speed up the build process. Since each stage can be optimized for a specific task, unnecessary steps are skipped in subsequent stages. This not only reduces the time required for image creation but also facilitates quicker iterations during the development phase.
<br>
<br>

**Simplified CI/CD Pipelines:**
<br>

Integrating Multi-Stage Builds into Continuous Integration/Continuous Deployment (CI/CD) pipelines simplifies the overall workflow. With the ability to create specialized stages for testing, building, and packaging, developers can ensure a smooth and efficient deployment process from development to production.
<br>
<br>

**Practical Implementation:**
<br>

Let's walk through a basic example to illustrate the power of Multi-Stage Builds. Consider a Node.js application with a build process that involves installing dependencies, running tests, and packaging the application.
<br>
<br>

**# Stage 1: Build and test**
<br>

`FROM node:14 as builder`

`WORKDIR /app`

`COPY package*.json ./`

`RUN npm install`

`COPY . .`

`RUN npm test`

`RUN npm run build`
<br>
<br>


**# Stage 2: Create production image**
<br>

`FROM node:14-alpine`

`WORKDIR /app`

`COPY --from=builder /app/dist /app`

`CMD ["node", "index.js"]`
<br>
<br>

Docker Multi-Stage Builds provide a powerful mechanism for optimizing containerized workflows, offering benefits such as reduced image size, enhanced security, faster builds, and simplified CI/CD pipelines. By adopting this approach, developers can strike a balance between efficient resource utilization and a streamlined application deployment process, ultimately delivering more robust and scalable containerized solutions.
<br>
<br>

### **Tutorials & Guides**
<br>
<a href="https://docs.docker.com/" target=_blank style="text-decoration: none;"> <b>Docker Documentation</b></a>

<a href="https://docs.docker.com/network/" target=_blank style="text-decoration: none;"> <b>Docker Networking</b></a>

<a href="https://docs.docker.com/storage/volumes/" target=_blank style="text-decoration: none;"> <b>Docker Volumes</b></a>
<br>
<br>


### **Top Reading Recommendations**
<br>
<a href="https://hub.docker.com/" target=_blank style="text-decoration: none;"> <b>Docker Hub</b></a>

<a href="https://docs.docker.com/" target=_blank style="text-decoration: none;"> <b>Docker Documentation</b></a>
<br>
<br>


### **Upcoming Events**
<br>
<a href="https://community.cncf.io/events/details/cncf-keptn-community-presents-keptn-community-meeting-apac-emea-2024-01-24/"> <b>Keptn Community Meeting - APAC / EMEA</b></a>
<br>
Jan  24 -2:30  – 3: 15PM (PST)
<br>
<br>
<a href="https://community.cncf.io/events/details/cncf-keptn-community-presents-keptn-online-user-group-meeting-an-introduction-to-keptn/" target=_blank style="text-decoration: none"> <b>Keptn Online User Group Meeting: An Introduction to Keptn</b></a>
<br>
Jan 24 -8:30  – 9: 30PM (PST)
<br>
<br>
<a href="https://community.cncf.io/events/details/cncf-cncf-online-programs-presents-cncf-on-demand-webinar-generating-vex-with-kubescape/" target=_blank style="text-decoration: none"> <b>CNCF On demand webinar: Generating VEX with Kubescape</b></a>
<br>
Jan 25 -1:30 PM  –Jan 26 - 1: 30PM (PST)
<br>
<br>


### **DevOps Jobs**
<br>
<a href="https://www.linkedin.com/company/google/" target=_blank style="text-decoration: none"> 
<b>Google - </b></a> Check out all the jobs <a href="https://www.linkedin.com/jobs/search/?currentJobId=3396168535&f_C=1441&keywords=devops&refresh=true" target=_blank style="text-decoration: none"> 
<b>here</b></a>

<a href="https://www.linkedin.com/company/accenture/" target=_blank style="text-decoration: none"> <b>Accenture -</b></a>Check out all the jobs <a href="https://www.linkedin.com/jobs/search/?currentJobId=3798390875&f_C=1033&keywords=devops&refresh=true" target=_blank style="text-decoration: none"> 
<b>here</b></a>

<a href="https://www.linkedin.com/company/infosys/" target=_blank style="text-decoration: none"> 
<b>Infosys -</b></a>Check out all the jobs <a href="https://www.linkedin.com/jobs/search/?currentJobId=3418464712&f_C=1283&keywords=devops%20engineer&refresh=true" target=_blank style="text-decoration: none"> 
<b>here</b></a>

<a href="https://www.linkedin.com/company/microsoft/" target=_blank style="text-decoration: none"> <b>Microsoft -</b></a>Check out all the jobs <a href="https://www.linkedin.com/jobs/search/?currentJobId=3414477236&f_C=1035&keywords=devops&refresh=true" target=_blank style="text-decoration: none"> 
<b>here</b></a>
<br>
<br>

![Logo](/images/newsletter/simplest-native-cicd-logo.jpg)
<br>


PS- We publish this newsletters every week,  Subscribe and share with your friends. We hope this newsletter has provided valuable information. Follow RazorOps Linkedin Page <a href="https://www.linkedin.com/company/razorops/" target=_blank style="text-decoration: none"> <b>Razorops, Inc.</b></a>

