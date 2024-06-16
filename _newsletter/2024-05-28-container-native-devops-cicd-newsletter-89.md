---
title: Container Native DevOps & CICD Newsletter 89
description: How To Build Docker Image In Kubernetes Pod
image: /images/blog/how-to-build-docker-image-in-kubernetes-pod.gif
layout: newsletter
permalink: /newsletter/razorops-cicd-newsletter-89
author: Pooja Reddy
category: Kubernetes
date: 2024-06-16T21:52:00.000Z
---
# How To Build Docker Image In Kubernetes Pod

In the world of cloud-native applications, Kubernetes and Docker are two fundamental technologies that developers and DevOps professionals rely on. Kubernetes orchestrates containers, ensuring their scalability, resilience, and manageability. Docker, on the other hand, packages applications into lightweight, portable containers. A common use case is building Docker images directly within a Kubernetes pod, allowing for more dynamic and integrated workflows. This blog will guide you through the process of building Docker images inside a Kubernetes pod.

**Building Docker in Docker**

In CI, one of the main stages is to build the Docker images. In containerized builds, you can use Docker in the Docker workflow. You can check out Docker in the Docker article to understand more.

But this approach has the following disadvantages.

The Docker build containers run in privileged mode. It is a big security concern and it is kind of an open door to malicious attacks.

Kubernetes removed Docker from its core. So, mounting docker.sock to the host will not work in the future, unless you add a docker to all the Kubernetes Nodes.

There is one more utility called podman which can run and create containers without root privileges. You can check out the podman tutorial to understand more.

### Why Build Docker Images in Kubernetes?

Building Docker images in Kubernetes can be beneficial for several reasons:

1.  Consistency: Ensures that the build environment is consistent across different stages of development and deployment.
2.  Isolation: Keeps the build process isolated from the host machine, enhancing security.
3.  Scalability: Leverages Kubernetes' scaling capabilities to handle build processes efficiently.
4.  CI/CD Integration: Seamlessly integrates with Kubernetes-native CI/CD pipelines for automated builds and deployments.

### Prerequisites

Before you begin, ensure you have the following:

1.  A Kubernetes cluster is up and running.
2.  kubectl command-line tool configured to interact with your cluster.
3.  Docker installed on your local machine for initial setup and testing.

### Step-by-Step Guide

### Step 1: Create a Kubernetes Namespace

First, create a namespace to organize your build resources.

kubectl create namespace docker-build

kubectl create namespace docker-build

**Step 2: Define a Kubernetes Pod with Docker Inside**

Next, create a Kubernetes pod that includes Docker. We'll use a Docker-in-Docker (DinD) setup. Create a YAML file named docker-build-pod.yaml with the following content:

yaml

apiVersion: v1

kind: Pod

metadata:

name: docker-build-pod

namespace: docker-build

spec:

containers:

- name: docker

image: docker:20.10.7-dind

securityContext:

privileged: true

env:

- name: DOCKER_TLS_CERTDIR

value: ""

volumeMounts:

- name: docker-graph-storage

mountPath: /var/lib/docker

volumes:

- name: docker-graph-storage

emptyDir: {}

This pod uses the official Docker image in privileged mode, which is necessary for DinD to work.

### Step 3: Deploy the Pod

Deploy the pod to your Kubernetes cluster.

kubectl apply -f docker-build-pod.yaml

kubectl apply -f docker-build-pod.ya

### Step 4: Verify the Pod Status

Ensure the pod is running and ready.

kubectl get pods -n docker-build

Wait until the docker-build-pod status changes to Running.

### Step 5: Build a Docker Image

Now, you can build a Docker image inside the Kubernetes pod. First, get a shell into the running pod.

kubectl exec -it -n docker-build docker-build-pod -- /bin/sh

Within the pod, create a simple Dockerfile. For demonstration purposes, we'll create a basic Node.js application.

echo -e 'FROM node:14-alpine\nCOPY app.js /app.js\nCMD ["node", "/app.js"]' > Dockerfile

echo 'console.log("Hello from Docker in Kubernetes!")' > app.js

Build the Docker image.

docker build -t my-node-app:latest .docker build -t my-node-app:latest

You can verify that the image was built successfully.

docker images

**Step 6: Push the Image to a Container Registry**

To use the built image in your Kubernetes cluster or elsewhere, push it to a container registry. Assuming you have access to Docker Hub, you can push the image like this:

docker login

docker tag my-node-app:latest your-dockerhub-username/my-node-app:latest

docker push your-dockerhub-username/my-node-app:latest

Replace your-dockerhub-username with your actual Docker Hub username.

### Step 7: Clean Up

Once you have built and pushed your image, you can clean up by deleting the pod and namespace.

kubectl delete pod docker-build-pod -n docker-build

kubectl delete namespace docker-build

Building Docker images inside a Kubernetes pod provides a consistent, isolated, and scalable environment for your build processes. This method is particularly useful for integrating with Kubernetes-native CI/CD pipelines, ensuring that your build environment is always in sync with your deployment environment.

Tutorials & Guides

[Kubernetes Basics](https://kubernetes.io/docs/tutorials/kubernetes-basics/)

[Kubernetes Best Practices](https://kubernetesbestpractices.com/)

[KubeAcademy](https://kube.academy/)

### Top Reading Recommendations

[KubeWeekly Archive](https://www.cncf.io/kubeweekly/)

[Kubernetes Documentation](https://kubernetes.io/docs/home/)

### Upcoming Events

[Keptn Community Meeting - APAC / EMEA](https://community.cncf.io/events/details/cncf-keptn-community-presents-keptn-community-meeting-apac-emea-2024-05-29/)

May 29, 1:30   – 2 :15 PM (PST)

[Cloud Native Live: Streamlining Falco operations in production with Falcoctl](https://community.cncf.io/events/details/cncf-cncf-online-programs-presents-cloud-native-live-streamlining-falco-operations-in-production-with-falcoctl/)

May 29, 9:30 – 10 :30 PM (PST)

[TAG App Delivery - General Meeting](https://community.cncf.io/events/details/cncf-tag-app-delivery-presents-tag-app-delivery-general-meeting-2024-05-29/)

May 29, 8 :30 - 9:30 PM (PST)

### DevOps Jobs

[Google -](https://www.linkedin.com/company/google/?lipi=urn%3Ali%3Apage%3Ad_flagship3_pulse_read%3BtLwZGVtSREOray97oBEZIA%3D%3D)  Check out all the jobs  [here](https://www.linkedin.com/jobs/search/?currentJobId=3396168535&f_C=1441&keywords=devops&refresh=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_pulse_read%3BtLwZGVtSREOray97oBEZIA%3D%3D)

[Accenture -](https://www.linkedin.com/company/accenture/?lipi=urn%3Ali%3Apage%3Ad_flagship3_pulse_read%3BtLwZGVtSREOray97oBEZIA%3D%3D)  Check out all the jobs  [here](https://www.linkedin.com/jobs/search/?currentJobId=3422755785&f_C=1033&keywords=devops&refresh=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_pulse_read%3BtLwZGVtSREOray97oBEZIA%3D%3D)

[Infosys -](https://www.linkedin.com/company/infosys/?lipi=urn%3Ali%3Apage%3Ad_flagship3_pulse_read%3BtLwZGVtSREOray97oBEZIA%3D%3D)  Check out all the jobs  [here](https://www.linkedin.com/jobs/search/?currentJobId=3418464712&f_C=1283&keywords=devops%20engineer&refresh=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_pulse_read%3BtLwZGVtSREOray97oBEZIA%3D%3D)

[Microsoft -](https://www.linkedin.com/company/microsoft/?lipi=urn%3Ali%3Apage%3Ad_flagship3_pulse_read%3BtLwZGVtSREOray97oBEZIA%3D%3D)  Check out all the jobs  [here](https://www.linkedin.com/jobs/search/?currentJobId=3414477236&f_C=1035&keywords=devops&refresh=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_pulse_read%3BtLwZGVtSREOray97oBEZIA%3D%3D)

![](https://media.licdn.com/dms/image/D5612AQFTJUFGNLjkQA/article-inline_image-shrink_1500_2232/0/1716866111347?e=1724284800&v=beta&t=qltUZ1ro5AmNtmSt9MrYVqhwlf2zb87ujbpmkwuX8EQ)

PS- We publish this newsletters every week, Subscribe and share with your friends. We hope this newsletter has provided valuable information. Follow RazorOps Linkedin Page  [Razorops, Inc.](https://www.linkedin.com/company/razorops/)  and give a FREE try to Our SaaS CICD product  [Sign up](https://dashboard.razorops.com/users/sign_up?utm_source=newsletter)  for RazorOps today and embark on a journey of automation, efficiency, and innovation. Your team and your projects deserve the best CICD automation tools.

**_Sponsored_**

![](https://razorops.com/images/newsletter/Razorops-Meeting-Pitch.gif)

_PS- We are going to release newsletters every week, so don't forget to subscribe and share them with your network. We hope this newsletter has provided valuable information._
