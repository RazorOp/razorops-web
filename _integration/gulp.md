---
title: gulp
description: Software artifacts are typically created during the software development
  process and can refer to specific methods or processes in the software's development.
  For example, a software build contains the developer's code as well as a range of
  different
permalink: "/integration/:title/"
layout: integrationtool
logo: "/images/integration/gulp-logo.png"
category: build tools
---

# What is gulp ?


Gulp is a task runner that uses Node. js as a platform. Gulp purely uses the JavaScript code and helps to run front-end tasks and large-scale web applications. It builds system automated tasks like CSS and HTML minification, concatenating library files, and compiling the SASS files.


# How to use GULP tool in working environment: 
* Install Node. js and Gulp.
* Create a package. json and list dependencies (Gulp and plugins).
* Install NPM modules.
* Create a gulpfile. js .
* Configure tasks you need to run.
* Run those tasks in the command line while you work.

 same like above process we integrate  Gulp  with razorops using .razorops.yaml file 
 
 
# Github repository : 

https://github.com/Razorops-code/Super-Simple-Gulp-File.git


```
tasks:
  build-deps:
    runner: node:10
    steps:
    - checkout
    # installing npm 
    - run: npm install

    # know about version
    - run: npm --version
    # installing gulp cli with global 
    - run: npm install -g gulp-cli

    # know about gulp version 
    - run: gulp --version

    # installing sass with dev 
    - run: npm install sass gulp-sass --save-dev

    # running gulp sass task #
    - run: gulp sass


<script src="https://gist.github.com/Razorops-code/f79151b4f088b974b3e3dedd4b153241.js"></script>
```


# Gulp integration with Razorops :
# Login to razorops with github 
 
 ![](/images/integration/gulp/razorops-dashboard.png)
 
# Connect to the github repository in workflow with select New pipeline 
 
 ![](/images/integration/gulp/razorops-create-new-pipeline.png)
 
 
# Select Github 
 
 ![](/images/integration/gulp/razorops-add-github.png)
 
 
# Chose Gulp repository here select grunt-git (working repository) 
 
 ![](/images/integration/gulp/razorops-gulp-pipeline.png)
 
# Select repository and confirm 
 
 ![](/images/integration/gulp/razorops-select-repository.png)
 
 
# Next we navigate to YML script block 

Here we enter .razororps.yaml code and click on Run your first build 


![](/images/integration/gulp/razorops-configure-repository.png)


# Build process Running 

![](/images/integration/gulp/razorops-build-process-running.png)


# Build process success we can find logs in logs section

Here we mention sass task in script to create compile .css file 


![](/images/integration/gulp/razorops-build-dependencies.png)


# sass  starting and finishing and created dist folder with style.css 

![]()
