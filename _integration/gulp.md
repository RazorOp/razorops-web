---
title: Gulp
description: Software artifacts are typically created during the software development
  process and can refer to specific methods or processes in the software's development.
  For example, a software build contains the developer's code as well as a range of
  different
permalink: "/integration/:title"
layout: integrationtool
logo: "/images/integration/gulp-logo.png"
category: build tools
---

# What is gulp ?

Gulp is a task runner that uses Node. js as a platform. Gulp purely uses the JavaScript code and helps to run front-end tasks and large-scale web applications. It builds system automated tasks like CSS and HTML minification, concatenating library files, and compiling the SASS files.

<br>

# How to use GULP tool in working environment: 
* Install Node. js and Gulp.
* Create a package. json and list dependencies (Gulp and plugins).
* Install NPM modules.
* Create a gulpfile. js .
* Configure tasks you need to run.
* Run those tasks in the command line while you work.

 same like above process we integrate  Gulp  with razorops using .razorops.yaml file 
 
<br> 
 
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

<br>

# Gulp integration with Razorops :

<br>

# Login to razorops with github 
 
<br>
![](/images/integration/gulp/razorops-dashboard.png)
<br>

<br><br>

# Connect to the github repository in workflow with select New pipeline 

<br> 
![](/images/integration/gulp/razorops-create-new-pipeline.png)
<br>

<br><br>
 
# Select Github 

<br> 
![](/images/integration/gulp/razorops-add-github.png)
<br>

<br><br>
 
# Chose Gulp repository here select grunt-git (working repository) 

<br> 
![](/images/integration/gulp/razorops-gulp-pipeline.png)
<br>

<br><br>

# Select repository and confirm 

<br> 
![](/images/integration/gulp/razorops-select-repository.png)
<br> 
 
<br><br>

# Next we navigate to YML script block 

Here we enter .razororps.yaml code and click on Run your first build 

<br>
![](/images/integration/gulp/razorops-configure-repository.png)
<br>

<br><br>

# Build process Running 

<br>
![](/images/integration/gulp/razorops-build-process-running.png)
<br>

<br><br>

# Build process success we can find logs in logs section

Here we mention sass task in script to create compile .css file 

<br>
![](/images/integration/gulp/razorops-build-dependencies.png)
<br>

<br><br>

# sass  starting and finishing and created dist folder with style.css 

![]()
