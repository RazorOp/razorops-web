---
title: Kubernetes 101 and infrastructure support around it by Shyam
description: Docker Inc. Hyderabad presents Kubernetes 101 and infrastructure support around it by Shyam from Razorops | June 15, 2019.
keywords: Docker, Razorops, kubernetes, event
permalink: "/blog/:title/"
layout: post
date: '2019-06-15 14:15:43'
author: Shyam Mohan
category: Razorops News
image: "/images/blog/kubernetes-101-and-infrastructure-support-around-it-by-Shyam-from-Razorops.png"
---

<a href="https://events.docker.com/events/details/docker-hyderabad-presents-kubernetes-101-and-infrastructure-support-around-it-by-shyam-from-razorops/" target="_blank">
![](/images/blog/kubernetes-101-and-infrastructure-support-around-it-by-Shyam-from-Razorops.png)
</a>

<br>

We have got chance to present in Docker Events Hyderabad, Check Out Meetup PPT Slides bellow.
<br>

<div class="video-container">
    <iframe src="//www.slideshare.net/slideshow/embed_code/key/cZqMSlfW5gh6LG" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/shyammohankanojia/getting-started-with-docker-and-kubernetes-101" title="Getting Started with Docker and Kubernetes 101" target="_blank">Getting Started with Docker and Kubernetes 101</a> </strong> from <strong><a href="//www.slideshare.net/shyammohankanojia" target="_blank">Shyam Mohan</a></strong> </div>
</div>

<br><br>
**Introduction:**

In recent years, Kubernetes has emerged as a leading platform for container orchestration, revolutionizing the way organizations deploy, scale, and manage their applications. Understanding Kubernetes and the infrastructure support around it is essential for modern development and operations teams. In this blog post, we'll explore the fundamentals of Kubernetes and delve into the infrastructure components that support its deployment and operation.

**Understanding Kubernetes:**

Kubernetes, often abbreviated as K8s, is an open-source container orchestration platform originally developed by Google. It automates the deployment, scaling, and management of containerized applications, allowing developers to focus on building and shipping code without worrying about the underlying infrastructure.

**Key Concepts:**

Pods: The basic building blocks of Kubernetes, pods encapsulate one or more containers that share resources and networking.

Deployments: Kubernetes deployments enable declarative updates and scaling of applications, ensuring consistency and reliability.

Services: Kubernetes services provide a stable endpoint for accessing pods, enabling seamless communication between different parts of an application.

ReplicaSets: ReplicaSets ensure that a specified number of pod replicas are running at any given time, providing high availability and fault tolerance.

Ingress: Kubernetes Ingress allows external access to services within the cluster, enabling routing and load balancing of incoming traffic.

**Infrastructure Support:**

Deploying and managing Kubernetes requires robust infrastructure support to ensure reliability, scalability, and performance. Key components of infrastructure support for Kubernetes include:

1. **Container Runtime:** Kubernetes supports various container runtimes, including Docker, containerd, and CRI-O, which are responsible for running and managing containers within pods.
2. **Networking:** Kubernetes networking enables communication between pods, services, and external resources. Solutions like Calico, Flannel, and Cilium provide networking plugins for Kubernetes clusters.
3. **Storage:** Kubernetes offers persistent storage solutions for stateful applications, such as PersistentVolumes (PVs) and PersistentVolumeClaims (PVCs). Storage plugins like CSI (Container Storage Interface) enable integration with external storage providers.
4. **Monitoring and Logging:** Monitoring and logging are critical for ensuring the health and performance of Kubernetes clusters. Tools like Prometheus, Grafana, and ELK (Elasticsearch, Logstash, Kibana) stack provide observability into cluster metrics and application logs.
5. **Security:** Kubernetes security encompasses various aspects, including network security, access control, and container isolation. Solutions like Pod Security Policies (PSPs), Network Policies, and container runtime security tools enhance the security posture of Kubernetes deployments.


<br>
