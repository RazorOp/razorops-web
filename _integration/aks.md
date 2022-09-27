---
title: AKS
description: ". Gulp purely uses the JavaScript code and helps to run front-end tasks
  and large-scale web applications. It builds system automated tasks like CSS and
  HTML minification, concatenating library files, and compiling the SASS files."
permalink: "/integration/:title/"
layout: integrationtool
logo: "/images/integration/AKS-logo.png"
category: development tools
---

What is gulp ?


Gulp is a task runner that uses Node. js as a platform. Gulp purely uses the JavaScript code and helps to run front-end tasks and large-scale web applications. It builds system automated tasks like CSS and HTML minification, concatenating library files, and compiling the SASS files.


How to use GULP tool in working environment: 
Install Node. js and Gulp.
Create a package. json and list dependencies (Gulp and plugins).
Install NPM modules.
Create a gulpfile. js .
Configure tasks you need to run.
Run those tasks in the command line while you work.

 same like above process we integrate  Gulp  with razorops using .razorops.yaml file 
Github repository : 

https://github.com/Razorops-code/Super-Simple-Gulp-File.git


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
