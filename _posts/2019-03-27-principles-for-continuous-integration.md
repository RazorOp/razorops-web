---
title: Principles for Continuous Integration
description: Principles for Continuous Integration includes few best practices, this
  help DevOps team to streamline delivery process.
keywords: Continuous Integration, Principles, DevOps, Builds, automate deployments, Github, Gitlab, Bitbucket
permalink: "/blog/:title/"
layout: post
date: '2018-08-20 14:15:43'
author: Shyam Mohan
category: Continuous Integration
---

Principles for Continuous Integration includes following best practices.

* Maintain a code repository
* Automate the build
* Make the build self-testing
* Everyone commits to the baseline every day
* Every commit (to baseline) should be built
* Keep the build fast
* Test in a clone of the production environment
* Make it easy to get the latest deliverables
* Everyone can see the results of the latest build
* Automate deployment

<br>
**1) Maintain a code repository**

Get a decent source code management system like Github,  Gitlab or Bitbucket etc.
Every one uses the same code and keeps upto date with base line. this reduces the merge conflict issues. Don't put every thing in SCM but everything you need to do a build should be in there including: test scripts, properties files, database schema, install scripts, and third party libraries

![](/images/blog/same-repo.png)

**2) Automate the build**

Getting the sources turned into a running system can often be a complicated process involving compilation, moving files around, loading schema into the databases, and so on. these steps can be automated.

Automated environments for builds are useful steps and saves lots of time. Razorops can be used to automate build process.

![](/images/blog/razorops-ci.png)


**3) Make the build self-testing**

Traditionally a build means compiling, linking, and all the additional stuff required to get a program to execute. A program may run, but that doesn't mean it does the right thing. A good way to catch bugs more quickly and efficiently is to include automated tests in the build process.

![](/images/blog/base-line.png)

**4) Everyone commits to the baseline every day**

Developers committing to the mainline gives surety that they can correctly build their code.Commit cycle the developer first updates their working copy to match the mainline, resolves any conflicts with the mainline, then builds on their local machine. If the build passes, then they are free to commit to the mainline.

![](/images/blog/razorops-one-repo.png)


<strong>5) Every commit (to baseline) should be built</strong>

Ideally team should commit and push code to centralized repo everyday, this help mainline to maintain in a healthy state, you should ensure that regular builds happen on an integration system or Razorops CI System


<strong>6) Keep the build fast</strong> 


Value of continuous integration is to provide rapid feedback. if a build that takes an hour to be totally unreasonable.

However, the XP guideline of a ten minute build is perfectly within reason. Most of our modern projects achieve this. It's worth putting in concentrated effort to make it happen, because every minute you reduce off the build time is a minute saved for each developer every time they commit. Since CI demands frequent commits, this adds up to a lot of time.


**7) Test in a clone of the production environment**

Your test environment should be a mimic of your production environment. Use the same database software, with the same versions, use the same version of operating system. Put all the appropriate libraries that are in the production environment into the test environment


**8) Make it easy to get the latest deliverables**

One of the most difficult parts of software development is making sure that you build the right software.



**9) Everyone can see the results of the latest build**

Continuous Integration is all about communication, so you want to ensure that everyone can easily see the state of the system and the changes that have been made to it.

One of the most important things to communicate is the state of the mainline build. configure a common communication channel like slack, email notification etc.

**10) Automate deployment**

To do Continuous Integration you need multiple environments, 

![](/images/blog/razorops-ci.png)


{% include schedule-demo.html %}
