---
title: Migration from Jenkins to RazorOps
description: with the use of a single .razorops.yaml.file we can complete the entire
  process of CICD
permalink: "/blog/:title/"
layout: post
date: '2022-08-03 17:12:27'
author: Shiva G
category: CICD
image: "/images/blog/jenkins-vs-razorops.png"
---

<img src="/images/blog/jenkins-vs-razorops.png">

From reducing infrastructure costs to minimizing security risks, organizations are increasingly aware of the benefits they can reap from modernizing their continuous integration and continuous delivery (CI/CD) pipelines and migrating them to the cloud. However, conducting a migration isn’t easy especially when it involves a diverse mix of technologies and platforms.

<br>

**What is CI/CD?**

CI/CD, which stands for continuous integration (CI) and continuous delivery (CD), creates a faster and more precise way of combining the work of different people into one cohesive product. In application development and operations (DevOps), CI/CD streamlines application coding, testing and deployment by giving teams a single repository for storing work and automation tools to consistently combine and test the code to ensure it works.

<br>

**Benefits of the CI/CD pipeline**
    
* Reducing time to deployment through automation
* Decreasing the costs associated with traditional software development
* Continuous feedback for improvement
* Improving the ability to address error detection earlier in the development
* Improving team collaboration and system integration

<br>

It is important to understand that when you are switching to RazorOps you get a set of higher level abstraction for your builds:
    
* Unlike Jenkins, RazorOps  automatically has a distributed fleet of build nodes and manages all builds on its own.

* With RazorOps you don’t need to install anything on the build nodes (in fact you don’t even have SSH access on them). All build tools are automatically launched in pipelines as Docker images

* It is possible in RazorOps to use the same tools in the same pipeline with a different version without any special configuration (e.g. use Java 5 and Java 8 in the same pipeline)

* RazorOps plugins are used per pipeline by simply mentioning them. There is nothing to install centrally (such as Jenkins plugins or shared libraries). Different teams can use different tools on their pipeline without affecting each other.

* RazorOps plugins are just Docker images with predefined inputs/outputs. They can be programmed in any programming language (not just Java/Groovy) and are not tied to RazorOps in any way (i.e. there is no need to know the Razororps API for writing a RazorOps plugin).

<br>

**Migrating Jenkins freestyle jobs**
    

If you have freestyle Jenkins Jobs , it is very easy to migrate your builds to RazorOps. In Jenkins you are accustomed to:

1. Install a programming tool on the Jenkins node.
2. call it directly in a build step.


For RazorOps a similar process would be the following:

1. Find a Docker image in Dockerhub or create one by yourself that has the tools that you need
2. Use a freestyle step and run the exact same command in a RazorOps pipeline

<br>

For example: this is Jenkins job:

<img src="/images/blog/migrate-from-jenkins/jenkins-sample-build.png">

can be easily converted to a RazorOps pipeline like this:

**.razorops.yaml:**

```
  npm-test:
     runner: node:11 
     steps:   
commands:
|
npm  run test 

```


Unlike Jenkins, RazorOps  does not need any global installation of tools beforehand

<br>

**Migrate the sample java based project to RazorOps:**

In this project we are using  pipeline job for that we can install  pipeline plugin .

Here, we using sample  java  project with following steps :
    
In this project we are using  pipeline job for that we can install  **pipeline plugin.**

<br>

**Steps for install plugins:**

<p><b>Login to jenkins -> manage jenkins -> manage plugins -> select available ->Search for pipeline plugin ->select plugin -> install plugin without restart</b></p>

<br>

**Plugin image :-**

<img src="/images/blog/migrate-from-jenkins/jenkins-pipeline-plugin.png">
<br>

* Next move to dashboard :

    Select New item
	<img src="/images/blog/migrate-from-jenkins/pipeline-dashboard-jenkins.png">
		
* Enter the field ( with name ):
			
	Select pipeline option AND click on OK.

<br>

Now your in pipeline job general stage.
	 
<img src="/images/blog/migrate-from-jenkins/jenkins-pipeline-job.png"> 
	 
<br>
Move pipeline option and enter your pipeline script. 

<img src="/images/blog/migrate-from-jenkins/jenkins-web-based-pipeline.png"> 
<br>

* In above script we have different stages     :

i.e:- 

1. Clone the code from github repository 
2. Make the war file with jenkins using maven tool 
3. Deploy the that application .war file to apache-tomcat 


<br> 
	 
In the above process we used jenkins pipeline job method , for that purpose we create   jenkins file in the format of declarative method with different stages .

<br>

**Stages:**
<br>

Clone :
    Clone the code from github repository with global credentials <br>
Build : 
	Build the code with maven plugin in jenkins plugin stage and create a .war file   
Deploy: 
    Deploy the the .war into apache tomcat server with scp command  <br> 


<br>

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

<br>

**Output of pipeline stages :**

<img src="/images/blog/migrate-from-jenkins/jenkins-pipeline-deploy.png">

<p>Now connect to the tomcat server with 
<b>
         < host address >:8080
          </b> 
</p>
	
	
<br>	
	
**Output of sample application on server:**
	
<img src="/images/blog/migrate-from-jenkins/java-web-application.png"> 
	
<br>	
	
<h3>Migration of same project in RazorOps :-</h3>
<br>

**Login to RazorOps with repository(github/bitbuket/gitlab):-**

 Here we login with github:
	
<img src="/images/blog/migrate-from-jenkins/razorops-signup.png">
	
After successful login if we create same new project we move to new organization at top right hand side. Now click on **new organization**

<br>
	
**Created organization with name and description:**
	
	
<img src="/images/blog/migrate-from-jenkins/razorops-create-organisation.png">

<br>

**Next add github:**
	
<img src="/images/blog/migrate-from-jenkins/razorops-github-integration.png">
	
	
Give the permission to github repository which having .razorops.yaml file 

**Click project repository**
	
	
<img src="/images/blog/migrate-from-jenkins/razorops-pipeline-dashboard.png">

	
Next it automatically start the workflow process. 

We have are over head maintaining of plugins and their process in jenkins but in **RazorOps** we just use **.razorops.yaml** file we can set entire deployment process
In a single file.  


 Here we do not need  to install additional settings and plugins in RazorOps , everything will be supported and available in RazorOps.
	
<br>

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
<br>

After successfully run the pipeline we can find the logs in 
	
<img src="/images/blog/migrate-from-jenkins/razorops-console-build-output.png">

<br>
Here is a simple process to migrate a project from Jenkins .


**Output of sample application on server with RazorOps:**
	
<img src="/images/blog/migrate-from-jenkins/java-web-application.png">
	
	
Jenkins  increases the overhead of maintaining the infrastructure and keeping the entire set of tools updated. There is an enormous range of plugins available for integrating various tools and services with the workflow.

<br>

	
<h3>Sample project with deploying to docker container with Jenkins :</h3>
<br>

**Containerization :** allows developers to create and deploy applications faster and more securely

Containers improve efficiency in two ways: **they use all available resources, and they minimize overhead.** When properly configured, containers allow a host to take advantage of virtually all available resources

We can use the same process for creating jobs and plugins.

<br>
	
Here, we using sample  java  project with steps :

**Clone :** Clone the code from github repository with global credentials 

**Build package :** Build the code with maven plugin in jenkins stage and create a .war file

**Build image :** build the image with using of Dockerfile 

**Push to repository:** push the image from local to docker hub repository

<br>

**Pull from repository and Run as a container with docker :**
        
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
<br>	
	
**Output of pipeline stages :**
	
<img src="/images/blog/migrate-from-jenkins/jenkins-pipeline-output-dashboard.png">

<br>

**Console output:**

<img src="/images/blog/migrate-from-jenkins/jenkins-console-ouput.png">

<br>

**Output of sample application on server**

<img src="/images/blog/migrate-from-jenkins/java-web-application.png">	
	
	
**Sample project with deploying to docker container with RazorOps:-**

Here we implemented same project in RazorOps cicd tool
 
Step-1: login to RazorOps as per above login process 

Step-2 : create .razorops.yaml file have runner and and build operations 

Step-3: integrate the docker hub with integration option 

Add registry details:
	
<img src="/images/blog/migrate-from-jenkins/razorops-integration-console.png">
	
<br>	
	
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
<br>

**Dockerfile:**
 
FROM **tomcat:8.0.20-jre8**
COPY **target/spring3-mvc-maven-xml-hello-world-1.2.war  /usr/local/tomcat/webapps/spring3.war**



Step-4 : we can run the build build process run automatically create the package and create an image with the use of dockerfile and push into the docker hub repository.
	
<br>

**Build status:**
	
<img src="/images/blog/migrate-from-jenkins/razorops-build-success.png">

<br>
	
**Logs of build:**
	
<img src="/images/blog/migrate-from-jenkins/razorops-output-logs.png">

<br>

**Image push into docker hub with tag latest-v2:**
	
<img src="/images/blog/migrate-from-jenkins/docker-hub-repo.png">
<br>
	
We can clone the image and run in different platforms like web server or kubernetes like so on .

So, we no need to concentrate on entire setup and supported plugins unlike jenkins.

With the use of a single .razorops.yaml.file we can complete the entire process of CICD.
