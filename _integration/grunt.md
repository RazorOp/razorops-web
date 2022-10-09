---
title: grunt
description: Software artifacts are typically created during the software development
  process and can refer to specific methods or processes in the software's development.
  For example, a software build contains the developer's code as well as a range of
  different
permalink: "/integration/:title/"
layout: integrationtool
logo: "/images/integration/grunt-logo.svg"
category: build tools
---

Grunt is a JavaScript based task runner which means it can automate repetitive tasks in a workflow and it can be used as a command line tool for JavaScript objects. Grunt makes the workflow as easy as writing a setup file. You can automate repetitive tasks with minimum effort.

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





# Grunt integration with Razorops :
# Login to razorops with github

![](/images/integration/grunt/razorops-dashboard.png)
		
		
# Connect to the github repository in workflow with select New pipeline 

![](/images/integration/grunt/razorops-create-new-pipeline.png)

# Select Github 

![](/images/integration/grunt/razorops-add-new-pipeline.png)

# Chose Grunt repository here select grunt-git (working repository) 

![](/images/integration/grunt/razorops-grunt-pipeline.png)

# Select repository and confirm 

![](/images/integration/grunt/razorops-select-repository.png)

# Next we navigate to YML script block 
**Here we enter .razororps.yaml code and click on Run your first build**

![](/images/integration/grunt/razorops-configure-repository.png)


# Build process Running 

![](/images/integration/grunt/razorops-build-dependencies.png)


# Build process success we can find logs in logs section 

![](/images/integration/grunt/razorops-build-dependencies-output.png)


**We can find in logs  Grunt build success with creating** 

Build
Disk 
Tmp folders  

**which is compiled and build code of  node js **

![](/images/integration/grunt/razorops-build-dependencies-logs.png)
