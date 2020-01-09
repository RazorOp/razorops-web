---
title: Razorops CI/CD with heroku apps
description: Deploying to heroku was super easy as it happen with just a git push,
  with razorops you can add CI/CD support to your Heroku apps.
keywords: Heroku, deployment, Heroku Token, Pipeline, heroku dashboard
permalink: "/blog/:title/"
layout: post
date: '2018-08-15 14:15:43'
author: Shyam Mohan
category: Continuous Integration
image: "/images/blog/razorops-heroku.png"
---

<img src="/images/blog/razorops-heroku.png" />

This post i will explain how to deploy rails app on heroku using Razorops CI/CD

Deploying to heroku was super easy as it happen with just a git push, with razorops you can add CI/CD support to your Heroku app.

**For this guide you will need:**

1) Heroku user account [https://signup.heroku.com/](https://signup.heroku.com/)

2) Create an App in side Heroku 

![](/images/blog/heroku-create-new-app.png)

3) Get your Heroku Token or (API Key form your account)  [https://dashboard.heroku.com/account](https://dashboard.heroku.com/account)

![](/images/blog/heroku-api-key.png)

4) Get one Razorops account here [https://dashboard.razorops.com](https://dashboard.razorops.com/users/sign_up)

5) Connect your GIT provide account under integration: 
[https://dashboard.razorops.com/integration](http://dashboard.razorops.com/integration)

6) Create a Pipeline on dashboard

![](/images/blog/razorops-pipeline.png)


7) Edit your pipeline and add your heroku HEROKU_API_KEY and HEROKU_APP_NAME environment variables

![](/images/blog/edit-razorops-pipeline.png)

Add a **.razorops.yaml** in your project's root directory 

```
tasks:

  deploy:
    image: buildpack-deps:trusty
    commands:
      - git push https://heroku:$HEROKU_API_KEY@git.heroku.com/$HEROKU_APP_NAME.git master

```

Razorops will trigger pipeline if code is pushed to staging branch. 

Razorops will deploy staging branch to heroku. 

More details [https://docs.razorops.com/languages/ruby.html](https://docs.razorops.com/languages/ruby.html)


{% include schedule-demo.html %}