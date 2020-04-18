---
title: Introduction to Helm 3 the Package Manager for Kubernetes
description: Helm is the package manager for Kubernetes (like yum and apt ) that allows
  easily package, configure, and deploy applications onto Kubernetes clusters
keywords: helm, Kubernetes clusters, helm 3, helm 2, a package manager for Kubernetes
permalink: "/blog/:title/"
layout: post
date: '2020-02-29 14:15:00'
author: Shyam Mohan
category: Continuous Integration
image: "/images/blog/helm-3.png"
---

![](/images/blog/helm-3.png)


**Helm** 
is the package manager for Kubernetes (like yum, apt and home brew ) that allows easily package, configure, and deploy applications onto Kubernetes clusters. 

<b>Helm charts </b> are packages (like debs and rpms) It contains pre-configured kubernetes resources such as ConfigMaps, Deployments ,StatefulSet manifests, PersistentVolumes  and editable settings for them.

<br>
<h2>Why do we need Helm?</h2>

Managing repeating Kubernetes manifest or copying form one to another, editing hardcode values and validating syntax, sharing across env like Dev, QA, Production etc. is hard.

<br>
<table>
  <tr>
		<td width="50%">
      <img src="/images/v2/pipeline.svg" alt="source code management" class="blog-feature-img"><br>
      <b>MANAGE COMPLEXITY</b><br>Charts describe even the most complex apps, provide repeatable application installation, and serve as a single point of authority.</td>
		<td width="50%">
      <img src="/images/v2/gitops.svg" alt="Connect Environments" class="blog-feature-img"><br>
      <b>EASY UPDATES</b><br>Take the pain out of updates with in-place upgrades and custom hooks</td>
	</tr>
  <tr>
		<td width="50%">
      <img src="/images/v2/connect-environments.svg" alt="Connect Environments" class="blog-feature-img"><br>
      <b>SIMPLE SHARING</b><br>Charts are easy to version, share, and host on public or private servers.</td>
		<td width="50%">
      <img src="/images/v2/rollback.svg" alt="source code management" class="blog-feature-img"><br>
      <b>ROLLBACKS</b><br>Use helm rollback to roll back to an older version of a release with ease.</td>
	</tr>
</table>

<br>
<h2>New Architecture of Helm 3</h2>
There are 3 important concepts for Helm

<b>The chart</b> is a bundle of information necessary to create an instance of a Kubernetes application.<br>
<b>The config</b> contains config info to create a releasable object.<br>
<b>A release</b> is a running instance of a chart, combined with a specific config.

COMPONENTS - The Helm SDK is implemented into two parts using golang

<b>The Helm Client</b> is a command-line client for end users. The client is responsible for

* Local chart development
* Managing repositories
* Managing releases
* Interfacing with the Helm library
* Sending charts to be installed
* Requesting upgrades or uninstalling of existing releases

<b>The Helm Library</b> provides the logic for executing Helm operations. It interfaces with the <b>Kubernetes API</b> server and provides the following capability:

* Combining a chart and configuration to build a release
* Installing charts into Kubernetes and providing the subsequent release object
* Upgrading and uninstalling charts by interacting with Kubernetes

<br>
![](/images/blog/helm-3-architecture.png)

<br>
<h2>Install Helm 3 </h2>
you can install and use Helm for your choice of operation system, it comes for linux, macOs and Windows

```

Linux - Run the client installer script that Helm provides:
$ curl https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3 > get_helm.sh
$ chmod 700 get_helm.sh
$ ./get_helm.sh

```

```
macOS - Use Home brew to install:
$ brew install helm

```

```

Windows - Use Chocolatey to install:
$ choco install kubernetes-helm

```

```

$ helm version
version.BuildInfo{Version:"v3.1.1", GitCommit:"afe70585407b420d0097d07b21c47dc511525ac8", GitTreeState:"clean", GoVersion:"go1.13.8"}

```

<br>
<h2>Helm chart directory structure looks like as follows</h2>

![](/images/blog/helm-3-tree.png)

<b>Chart.yaml</b> keeps information about metadata of your current chart, version number and chart dependencies.

![](/images/blog/helm-3-chart-yaml.png)

<b>values.yaml</b> values file contains a collection of key values that represent configuration settings for a chart. 

![](/images/blog/helm-3-values-yaml.png)

<h2>Templates</h2>

Files under templates directory  are treated as dynamic  YAML files, these are implemented using the go  template lang.  you can have more detaile on <a href="http://masterminds.github.io/sprig/" target="_blank">Sprig Function Documentation</a>

YAML templates prevents config duplication and allows you to install same charts in dev, staging or production environment.



<h2>Installing a Chart</h2>
```

1. From a Chart Directory 
$ helm install myapp ./mychart

```

```

2. From a remote chart repo     
$ helm install myapp myrepo/mychart

```

<h2>Using custom values</h2>

```

1. Using a values file 
$ helm install myapp ./mychart -f my-values.yaml

```

```

2. Using a key value pair 
$ helm install myapp ./mychart --set image.tag=master

```


```

3. Advanced use 
     $ helm install myapp ./mychart \
        -f qa.yaml  \
        -f staging.yaml

```


<h2>References</h2>

More Info:  <a href="https://helm.sh/" target="_blank"> https://helm.sh/</a>

Read Doc: <a href="https://helm.sh/docs/" target="_blank">https://helm.sh/docs/</a>

GitHub: <a href="https://github.com/helm/helm" target="_blank">https://github.com/helm/helm</a>

HelmHub : <a href="https://hub.helm.sh/" target="_blank">https://hub.helm.sh/</a>

<br>
{% include schedule-demo.html %}