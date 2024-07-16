---
title: grunt
description: Software artifacts are typically created during the software development
  process and can refer to specific methods or processes in the software's development.
  For example, a software build contains the developer's code as well as a range of
  different
permalink: "/integration/:title"
layout: integrationtool
logo: "/images/integration/grunt-logo.svg"
category: build tools
---

Grunt is a JavaScript based task runner which means it can automate repetitive tasks in a workflow and it can be used as a command line tool for JavaScript objects. Grunt makes the workflow as easy as writing a setup file. You can automate repetitive tasks with minimum effort.
<br>

# How to use GRUNT tool in working environment: 
* Install Node. js and Grunt.
* Create a package. json and list dependencies (Grunt and plugins).
* Install NPM modules.
* Create Gruntfile. js .
* Configure tasks you need to run.
* Run those tasks in the command line while you work.


 same like above process we integrate  GRUNT with razorops using .razorops.yaml file 
 
 Sample App Link - Clone or Fork —---

Github : https://github.com/Razorops-code/grunt-git.git


<br>


```
tasks:
  build-deps:
    runner: node:10
    steps:
    - checkout
   # install npm
    - run: npm install
   #  install grunt-cli with global
    - run: npm install -g grunt-cli
   # know about grunt version
    - run: grunt --version
  # run a build command
    - run: npm run build
		
		
<script src="https://gist.github.com/shivagottam/ee29757acb8ffada519d0f530bb153ad.js"></script>
```


<br>


# Grunt integration with Razorops :
<br>

# Login to razorops with github

<br>
![](/images/integration/grunt/razorops-dashboard.png)
<br>		

<br>
		
# Connect to the github repository in workflow with select New pipeline 

<br>
![](/images/integration/grunt/razorops-create-new-pipeline.png)
<br>

<br>

# Select Github 

<br>
![](/images/integration/grunt/razorops-add-new-pipeline.png)
<br>

<br>

# Chose Grunt repository here select grunt-git (working repository) 

<br>
![](/images/integration/grunt/razorops-grunt-pipeline.png)
<br>

<br>

# Select repository and confirm 

<br>
![](/images/integration/grunt/razorops-select-repository.png)
<br>

<br>

# Next we navigate to YML script block 
**Here we enter .razororps.yaml code and click on Run your first build**

<br>
![](/images/integration/grunt/razorops-configure-repository.png)
<br>

<br>

# Build process Running 

<br>
![](/images/integration/grunt/razorops-build-dependencies.png)
<br>

<br>

# Build process success we can find logs in logs section 

<br>
![](/images/integration/grunt/razorops-build-dependencies-output.png)
<br>


**We can find in logs  Grunt build success with creating** 

Build
Disk 
Tmp folders  

**which is compiled and build code of  node js **
<br>
![](/images/integration/grunt/razorops-build-dependencies-logs.png)
<br>