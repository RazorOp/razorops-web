---
title: 2024-05-17-How to Create Static Pod in Kubernetes
description: In Kubernetes a static pod is a concept where in you can deploy a
  pod that is not managed by the API server.
image: /images/blog/how-to-create-static-pod-in-kubernetes.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: kubernetes
date: 2024-05-17T00:27:00.000Z
---


In Kubernetes a static pod is a concept where you can deploy a pod that is not managed by the API server.
Static pods are directly managed by the Kubelet component. The Kubelet service is deployed with the configuration path where we can add the pod manifest for the Kubelet to deploy.
Even though a static pod is not managed by the API server, you can use Kubectl to list the static pod. This is because, when Kubelet deploys a static pod, it creates a mirror pod in the API server. The mirror pod doesn’t run any containers itself. It’s essentially a placeholder to provide visibility.
Even though the static pod is visible for the API server, it cannot control it.
Can you schedule a static pod on multiple nodes?
No. Static pods are bound to the specific node where you place the static pod manifest. If you want static pods on multiple nodes, you need to place the manifest on all the nodes.
So what is the real use case of a static pod?
Well, it is primarily used for cluster bootstrapping purposes. Meaning to start the cluster components like Api server, controller manager etc. For example, when you deploy a Kubeadm cluster, it creates all the cluster components using the static pod manifests located in the /etc/kubernetes/manifest location.
Static Pod Location
To create a static pod, first, you need to find the staticPodPath parameter configured with Kubelet.
The default staticPodPath location is /etc/kubernetes/manifests. You can verify it by checking the kubelet config.
Execute the following command to find the kubelet config file location.
ps -aux | grep kubelet | grep config.yaml

From the output we can see that the config is saved in /var/lib/kubelet/config.yaml file.
Now, open the file and look for a parameter named staticPodPath that has the location of the static pod manifest. You can use grep to find the exact parameter as given below.
$ cat /var/lib/kubelet/config.yaml | grep static
If you open the full file, towards the end of the config, you will find the parameter as shown below.

Creating a Static Pod
Once you know the static pod path, you can create one using a pod manifest.
We will create a simple Nginx static pod.
cd into the static pod manifest directory. You will find it in all the nodes associated with the cluster. For this example, I am deploying the static pod in a worker node.
cd /etc/kubernetes/manifests




Create a nginx.yaml pod manifest using the following content.
apiVersion: v1
kind: Pod
metadata:
  name: webserver
spec:
  containers:
  - image: nginx
  name: webserver-container
Now, Kubelet creates the webserver static pod and a mirror pod. Since I am logged into a worker node, I dont have Kubectl access. So I can use the crictl utility to list the pods in that specific node.
crictl pods
You can also use Kubectl to list the pods
$ kubectl get pods -o custom-columns=NAME:.metadata.name,NODE:.spec.nodeName,STATUS:.status.phase

NAME               NODE     STATUS
webserver-node01   node01   Running
If you see the output, you will notice the webserver pod name has been modified to webserver-node01. During the pod creation, kubelet appends a hyphen (-) followed by the node’s hostname to the actual pod name defined in the manifest.

This way, API server can differentiate between API server managed pods and static pods. Also, it prevents any conflicts between the same static pod names potentially existing on different worker nodes.
If you have deployed a Kubeadm cluster, you can further verify it by listing all the pods in the kube-system namespace. All the control plane components that are running as a pod will have the controlplane node name appended to it.
Execute the following command to list the control plane static pods. Replace controlplane with the node name of your control plane.
$ kubectl get po -n kube-system | grep "controlplane"

etcd-controlplane                          1/1     Running   
kube-apiserver-controlplane                1/1     Running   
kube-controller-manager-controlplane       1/1     Running   
kube-scheduler-controlplane                1/1     Running   

Editing & Deleting a Static Pod
You cannot edit or delete the static pod using Kubectl.
You need to edit the static pod manifest file we created in /etc/kubernetes/manifests directory.
Kubelet will automatically apply the changes made to the manifest file.
Now, to delete the static pod, you just have to delete the manifest file.
cd /etc/kubernetes/manifests

rm -f nginx.yaml

Static Pods are a useful feature in Kubernetes that allows you to run pods without relying on the Kubernetes API server. By following the steps outlined in this article, you can easily configure Static Pods and run them on nodes in your Kubernetes cluster. Additionally, Kubernetes comes with several default Static Pods that are configured by default, allowing you to run essential components of the Kubernetes control plane as Static Pods.
