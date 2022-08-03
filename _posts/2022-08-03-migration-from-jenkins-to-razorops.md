---
title: Migration from jenkins to Razorops
description: with the use of a single .razorops.yaml.file we can complete the entire
  process of CICD
permalink: "/blog/:title/"
layout: post
date: '2022-08-03 17:12:27'
author: Shiva G
category: CICD
image: "/images/blog/Salesforce-lightning-web-component-pipeline-with-razorops.png"
---

From reducing infrastructure costs to minimizing security risks, organizations are increasingly aware of the benefits they can reap from modernizing their continuous integration and continuous delivery (CI/CD) pipelines and migrating them to the cloud. However, conducting a migration isn’t easy especially when it involves a diverse mix of technologies and platforms.


**What is CI/CD?**

CI/CD, which stands for continuous integration (CI) and continuous delivery (CD), creates a faster and more precise way of combining the work of different people into one cohesive product. In application development and operations (DevOps), CI/CD streamlines application coding, testing and deployment by giving teams a single repository for storing work and automation tools to consistently combine and test the code to ensure it works.


**Benefits of the CI/CD pipeline**
    
* Reducing time to deployment through automation
* Decreasing the costs associated with traditional software development
* Continuous feedback for improvement
* Improving the ability to address error detection earlier in the development
* Improving team collaboration and system integration


It is important to understand that when you are switching to Razorops you get a set of higher level abstraction for your builds:
    
* Unlike Jenkins, Razorops  automatically has a distributed fleet of build nodes and manages all builds on its own.

* With Razorops you don’t need to install anything on the build nodes (in fact you don’t even have SSH access on them). All build tools are automatically launched in pipelines as Docker images

* It is possible in Razorops to use the same tools in the same pipeline with a different version without any special configuration (e.g. use Java 5 and Java 8 in the same pipeline)

* Razorops plugins are used per pipeline by simply mentioning them. There is nothing to install centrally (such as Jenkins plugins or shared libraries). Different teams can use different tools on their pipeline without affecting each other.

* Razorops plugins are just Docker images with predefined inputs/outputs. They can be programmed in any programming language (not just Java/Groovy) and are not tied to Razorops in any way (i.e. there is no need to know the Razororps API for writing a Razorops plugin).


**Migrating Jenkins freestyle jobs**
    

If you have freestyle Jenkins Jobs , it is very easy to migrate your builds to Razorops. In Jenkins you are accustomed to:

1. Install a programming tool on the Jenkins node.
2. call it directly in a build step.


For Razorops a similar process would be the following:

1. Find a Docker image in Dockerhub or create one by yourself that has the tools that you need
2. Use a freestyle step and run the exact same command in a razorops pipeline



For example this Jenkins job…

( ! build images)

can be easily converted to a Razorops pipeline like this:

**.razorops.yaml:**

```
  npm-test:
     runner: node:11 
     steps:   
commands:
|
npm  run test 

```


Unlike Jenkins, Razorops  does not need any global installation of tools beforehand

**Migrate the sample java based project to Razorops:**

In this project we are using  pipeline job for that we can install  pipeline plugin .

Here, we using sample  java  project with steps :
    
In this project we are using  pipeline job for that we can install  **pipeline plugin**

**Steps for install plugins:**

   <p><b>Login to jenkins -> manage jenkins -> manage plugins -> select available ->Search for pipeline plugin ->select plugin -> install plugin without restart</b></p>



**Plugin image :-**

!(plugin image)

* Next move to dashboard :

     Select New item
		!(dashboard image)
		
* Enter the field ( with name ):
			
	 select pipeline option AND click on OK 

	 Now your in pipeline job 
	 
	 !(image)
	 
	
Move pipeline option and enter your pipeline script 

!(image)

* In above script we have different stages     :

I.e 

1. Clone the code from github repository 
2. Make the war file with jenkins using maven tool 
3. Deploy the that application .war file to apache-tomcat 


	 
	 
In the above process we used jenkins pipeline job method , for that purpose we create   jenkins file in the format of declarative method with different stages .

**Stages:**
   Clone :
                       Clone the code from github repository with global credentials 
   Build : 
											 Build the code with maven plugin in jenkins plugin stage and create a .war file   
   Deploy: 
										  Deploy the the .war into apache tomcat server with scp     command   



**Pipeline code :** 

```
pipeline {
    agent any
    stages {
        stage('clone') {
            steps {
                git credentialsId: 'git', url: 'https://github.com/shivagottam/spring3-mvc-maven-xml-hello-world.git'
            }
        }
        stage('build') {
            steps {
                sh 'mvn clean install package'
            }
        }
        stage('deploy'){
            steps {
            sshagent([‘sshagent’]) {
                sh 'scp -o StrictHostKeyChecking=no target/spring3-mvc-maven-xml-hello-world-1.2.war ubuntu@15.206.170.109:/opt/apache-tomcat-8.5.81/webapps'
              }
         }
       }
    }
}
```


**Output of pipeline stages :**

img

<!-- <p>Now connect to the tomcat server with 
<b>
         <host address>:8080
          </b> 
</p> -->
	
	
	
	
**Output of sample application on server:**
	
IMAGE
	
	
	
**Migration of same project in Razorops :-**

**Login to razorops with repository(github/bitbuket/gitlab):-**

 Here we login with github:
	
	IMAGE
	
After successful login if we create same new project we move to new organization at top right hand side … click on **new organization**

	
	
**Created organization with name and description**
	
	
IMAGE

	
**Next add github:**
	
IMAGE
	
	
Give the permission to github repository which having .razorops.yaml file 

Click project repository 
	
	
IMAGE

	
Next automatically start the workflow process 

We have are over head maintaining of plugins and their process in jenkins but in **razorops** we just use **.razorops.yaml** file we can set entire deployment process
In a single file.  


 Here we do not need  to install additional settings and plugins in Razorops , everything will be supported and available in razorops.
	
	
Here we have **razorops.yaml file** :
	
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
        chmod 600 ~/.ssh/*
        scp -r target/spring3-mvc-maven-xml-hello-world-1.2.war ubuntu@15.207.247.7:/opt/apache-tomcat-8.5.81/webapps
```
	
After successfully run the pipeline we can find the logs in 
	
Imgs

Here is a simple process to migrate a project from Jenkins .


**Output of sample application on server with Razorops:**
	
IMge
	
	
Jenkins  increases the overhead of maintaining the infrastructure and keeping the entire set of tools updated. There is an enormous range of plugins available for integrating various tools and services with the workflow.

	
**Sample project with deploying to docker container with Jenkins :**


**Containerization :** allows developers to create and deploy applications faster and more securely

Containers improve efficiency in two ways: **they use all available resources, and they minimize overhead.** When properly configured, containers allow a host to take advantage of virtually all available resources

We can use the same process for creating jobs and plugins.

	
Here, we using sample  java  project with steps :

**Clone :** Clone the code from github repository with global credentials 

**Build package :** Build the code with maven plugin in jenkins stage and create a .war file

**Build image :** build the image with using of Dockerfile 

**Push to repository:** push the image from local to docker hub repository

	
**Pull from repository and Run as a container with docker : **
        
 Download the image and run the container with using of same image  
	
	
	
**Pipeline code :**

```
pipeline {
    agent any
    environment {
    DOCKERHUB_CREDENTIALS = credentials('shiva-dockerhub')
    }
    stages {
        stage('SCM Checkout') {
            steps{
            git 'https://github.com/shivagottam/spring3-mvc-maven-xml-hello-world.git'
            }
        }
        stage('build war file') {
            steps{
            sh 'mvn clean install package'
            }
        }
        stage('buld docker image'){
            steps {
                sh 'docker build -t shivaladdu/spring3:v2 .'
            }
        }
        stage('login to dockerhub') {
            steps{
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        stage('push image') {
            steps{
                sh 'docker push shivaladdu/spring3:v2'
            }
        }
        stage('run container') {
            steps{
                sh 'docker pull shivaladdu/spring3:v2'
                sh 'docker container run -itd -p 8087:8080 --name auto shivaladdu/spring3:v2'
            }
        }
}
post {
        always {
            sh 'docker logout'
        }
    }
}
	
```
	
	
**Output of pipeline stages :**
	
IMAGE
	
**Console output:**

IMAGE
	
	
**Output of sample application on server **

IMAGE
	
	
	
**Sample project with deploying to docker container with Razorops:-**

Here we implemented same project in razorops cicd tool
 
Step-1: login to razorops as per above login process 

Step-2 : create .razorops.yaml file have runner and and build operations 

Step-3: integrate the docker hub with integration option 

Add registry details ....
	
IMAGE
	
	
	
**.razorops.yaml:-**
 
```
tasks:
  unit-job:
    runner: razorci/openjdk:11-buster
    steps:
    - checkout
    - commands:
      - |
        mvn clean package                  # build the package 
        ls -a
        ls target 
    - docker/build:
        image: shivaladdu/razorops       # build the image with Dockerfile
        push: true                                 # push image to docker hub repository 
Which is integrated  
        tags: ["latest-v2"]                     # with image tag 
```
	
**Dockerfile:**
 
FROM tomcat:8.0.20-jre8
COPY target/spring3-mvc-maven-xml-hello-world-1.2.war  /usr/local/tomcat/webapps/spring3.war



Step-4 : we can run the build build process run automatically create the package and create an image with the use of dockerfile and push into the docker hub repository.
	
	
**Build status:**
	
IMAGE

	
**Logs of build:**
	
IMAGE

**Image push into docker hub with tag latest-v2:**
	
IMAGE
	
We can clone the image and run in different platforms like web server or kubernetes like so on .

So, we no need to concentrate on entire setup and supported plugins unlike jenkins.

With the use of a single .razorops.yaml.file we can complete the entire process of CICD.
