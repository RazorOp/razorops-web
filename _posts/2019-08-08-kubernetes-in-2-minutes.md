---
title: Kubernetes in 2 minutes
description: Kubernetes is a portable, extensible, open-source platform for managing containerized workloads and services, that facilitates both declarative configuration and automation.
keywords: kubectl, kubernetes, cheat sheet, Commands, deployment, namespace, healthcheck
permalink: "/blog/:title"
layout: post
date: '2019-07-25 14:15:43'
author: Shyam Mohan
category: Kubernetes
image: "/images/blog/kubernetes-basic-architecture.png"
---

Kubernetes is an open-source container-orchestration system for automating application deployment, scaling, and management. It was originally designed by Google, and is now maintained by the Cloud Native Computing Foundation.

<br><br>
<center>
	<div class="iframe-container">
		<iframe width="660" height="415" src="https://www.youtube.com/embed/ep6qb5hOwts?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	</div>
</center>
<br><br>

**Kubernetes Design and Architecture**

![](/images/blog/kubernetes-basic-architecture.png)

**Goals**
* Portable
* General-purpose.
* Flexible
* Extensible
* Automatable

**Architecture**
* Cluster control plane (AKA master)
* API Server
* Cluster state store (etcd)
* Controller-Manager Server
* Scheduler

**The Kubernetes Node**
* Kubelet
* Container runtime
* Service Proxy

**Add-ons and other dependencies**

A number of components, called add-ons typically run on Kubernetes itself:
DNS
* Ingress controller
* Heapster (resource monitoring)
* Dashboard (GUI)

**References:**

* [Read More: here](https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/)
* [Read More: here](https://kubernetes.io/docs/concepts/architecture/)

<br>

