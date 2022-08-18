---
title: Razorops CI/CD with heroku apps
description: Deploying to heroku was super easy as it happen with just a git push,
  with razorops you can add CI/CD support to your Heroku apps.
keywords: Heroku, deployment, Heroku Token, Pipeline, heroku dashboard
permalink: "/blog/:title/"
layout: post
date: '2022-04-28 14:15:43'
author: Shyam Mohan
category: Continuous Integration
image: "/images/blog/razorops-heroku.png"
---

<img src="/images/blog/razorops-heroku.png" />

This post i will explain how to deploy rails app on heroku using Razorops CI/CD

Deploying to heroku was super easy as it happen with just a git push, with razorops you can add Unit Testing, Code Scaning support to your Heroku app.

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
global:
  runner: ruby:3.1.2

tasks:
  unit-tests:
    steps:
    - checkout
    - run: bundle install
    - commands:
        - bundle check
        - bundle exec rspec

  deploy-to-heroku:
    depends: [unit-tests]
    when: branch == 'production'
    steps:
    - checkout
    - commands:
      - gem install dpl
      - dpl --provider=heroku --app=$HEROKU_APP_NAME --api-key=$HEROKU_API_KEY
```

Razorops will trigger pipeline if code is pushed to production branch. it will deploy production branch to heroku. 

