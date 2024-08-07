---
title: IBM K8s
description: Gulp is a task runner that uses Node. js as a platform. Gulp purely uses
  the JavaScript code and helps to run front-end tasks and large-scale web applications.
  It builds system automated tasks like CSS and HTML minification, concatenating library
  files, and compiling the SASS files.
permalink: "/integration/:title"
layout: integrationtool
logo: "/images/integration/IBM-kubernetes-service-logo.png"
category: development tools
---

# Prerequisite :
 
* An existing Razorops account
* Creating clusters on cloud IBM


**Github Repository : ** <a href="https://github.com/Razorops-code/spring-boot.git" target="_blank">https://github.com/Razorops-code/spring-boot.git </a>

You can follow the these steps for creating IBM-cluster <a href="https://cloud.ibm.com/docs/containers?topic=containers-getting-started" target="_blank"><b>click here</b></a>

After creating IBM-kubernetes cluster 


# Setting Up Cluster Access
To access a cluster using kubectl, you have to set up a Kubernetes configuration file (commonly known as a 'kubeconfig' file) for the cluster. The kubeconfig file (by default named config and stored in the $HOME/.kube directory) provides the necessary details to access the cluster. Having set up the kubeconfig file, you can start using kubectl to manage the cluster.  For razorops you can follow the process to access the cluster <a href="https://docs.razorops.com/guides/kubernetes/connect/" target="_blank">Click here</a>

After creating IBM-kubernetes-cluster successfully
(Cluster name:- traing)  


![]()



# Next sign in to razorops with working github account

![](/images/integration/razorops-dashboard.png)


# Next move to kubernetes section and click on Add New 

![]()

Next you navigate to existing cluster 
Here you can add name for cluster and authentication method 
Here we can go with kubernetes ConfigFile (which is generated by connect <a href="https://docs.razorops.com/guides/kubernetes/connect/" target="_blank">credentials</a> )


![]()


# Here your config file looks like 
![]()

# Just copy and past at authentication section and click on Create Cluster

![]()

# Next your cluster will added to Razorops kubernetes section successfully show like 

![]()


**luster added process completed next move to workflow section for run a pipeline for deploy our application on to kubernetes eks cluster**


 
# Now your in workflow dashboard

![]()



**Next click on pipeline , you can navigate to the add a new pipeline dashboard**


# SELECT GITHUB

![]()

# SELECT REPOSITORY

![]()

**And confirm it**


# Enter the razorops pipeline 

![]()

```

tasks:
  build-job:
    steps:
    - checkout
    - commands:
      - |
        mvn clean package                  # build the package
        ls -a
        ls target
    - docker/build:
       image: razoropsrepocode/spring       # build the image with Dockerfile
       push: true                   # push image to docker hub repository Which is integrated  
       tags: ["latest-v2"]
        # kubernetes deployment
  deploy-kubernetes:
    when: branch == 'master' # only run if code is pushed to develop branch
    depends: [build-job]
    steps:
    - checkout
    - commands:
      - |
        kubectl create -f deployment.yml
        kubectl create -f service.yml
        kubectl get svc
				
			
```
				
<script src="https://gist.github.com/Razorops-code/22ebe0f8f504aa6bf0b6c877b98b495b.js"></script>



**deployment.yml**

```
apiVersion: apps/v1
kind: Deployment
metadata:
   name: sample-java-app
spec:
   replicas: 1
   selector:
     matchLabels:
       app: java-app
   template:
     metadata:
       labels:
         app: java-app
    spec:
       containers:
       - name: java-app
         image: razoropsrepocode/spring:latest-v2
         imagePullPolicy: Always
         ports:
         - containerPort: 8080
```

<script src="https://gist.github.com/Razorops-code/8e59ca7b938904a868d5c2bc7c6df2df.js"></script>


**service.yml**

```
apiVersion: v1
kind: Service
metadata:
   name: sample-java-app
spec:
   type: NodePort
   ports:
   - port: 8080
     targetPort: 8080
   selector:
     app: java-app
```

<script src="https://gist.github.com/Razorops-code/c77ecb55f7460696a8711c508d6cb2e0.js"></script>


# Next Run your first Build 

![]()


# Next automatically 
* clone source code from repository  
* Build code with maven 
* Create image with dockerfile 
* Push the image from dockerhub repository
* Deploy the container on EKS cluster with kubernetes manifest file i.e (deployment.yml and service.yml )
* Access the application with NodePort ip service 



# After pipeline running succeeded 

![]()


# We can find logs in logs section 

![]()

# And we can also find same logs in IBM shell 
![]()


**Successfully Sample-java-app pod up and running and works on NodePort-service- 30612**

<b>We can find <node-external-ip>:30612
In my case i.e  3.109.54.147:30612/spring3/
	Note:- This application working on tomcat server we need to mention application name i.e spring3</b>
	
	![]()
