---
title: Setting up your first deployment pipeline
layout: post
date: '2018-09-11 12:01:23 +0530'
permalink: "/blog/:title/"
author: Shyam Mohan
---

![](https://buddy.works/blog/thumbnails/project-api-cover.png)
There are three steps you need to follow to set up a basic deployment pipeline.

**1. Set up a build server**

Build servers are also called continuous integration (CI) servers. You have a few options here, and each comes with its own advantages and disadvantages. It doesn't matter where you start, because they share the same basic functionality, and it's not usually too difficult to migrate to another one later. I've had success with Jenkins, go.cd, and TeamCity on various projects. The first two are open source, and all let you get started for free.

Once you've got a build server set up (and they all have guides to help you do that) you can set up your first build. Start simple—just compile or package your application. A build, at its essence, consists of:

A link to your application's source code (such as on GitHub or on your Subversion server)

A command to build the application (such as a mvn package or Grunt build)

Set it up to run every time a change is checked into source control. In this way, every change to your code base will go through the gauntlet.


**2. Set up a few test suites**

Automated tests are what give a deployment pipeline its real value. Think of them as the soldiers with sticks on either side of the deployment gauntlet. It's their duty to try to prove that a change isn't ready for production.

Set up a separate build for each of your test suites. For example, you might have one build for your unit tests, another for your integration tests, and another for your functional test suite. Then link the builds to one another so that each is triggered by the one before it. Arrange them so that the tests that run fastest, such as your unit tests, run first. Then if the code passes, run the next suite. In this way, your unit tests can tell you very quickly if there's a problem, rather than waiting for your slower functional tests to fail.

If the code change causes any of your unit tests to fail, the change doesn't go any further. If the unit tests pass, the change has to face the next test of its worth. If it gets past all the test suites, it makes its way out the other end and is ready for production.

This approach works best when you have good test coverage, but you can start even when you don't. Even if there's still manual testing to do once all the automated tests pass, you've managed to set up an early detection mechanism that will help you catch some bad changes before you bother with manual testing. Set up those test builds, even if you only have a couple of unit tests. You'll be surprised at how motivating it can be to write more tests once you can actually see the existing tests running and proving their worth.

Automated tests are designed to catch known bugs. They cover scenarios that you already know will need to be tested. Again, the job of these tests is to prove that a change isn't ready for production, and passing still doen't mean that the app is ready for production. It's up to your team to figure out what else goes into the decision as to whether a change is ready to go live. That said, the better your test suite, the more automated this decision-making process becomes.

**3. Add a deployment step**

The real power of a deployment pipeline lies in its ability to link your test suite to your deployment. Imagine a button at the end of your deployment pipeline. When the app has passed all the tests, the button is enabled. At that point all you need to do is push that button to deploy your changes to production.

For many teams, automating production deployment is complicated. In such situations, it's useful to start with a deployment to a testing environment. On your CI server, add a build that will run a script to deploy your application to a testing or staging environment. Link it to your test builds so that it only runs if all the tests pass. If your deployment process doesn't cause too much downtime, you can make this step run automatically so that your testing environment is always up to date. Once you've gone through this process, you'll have a better idea of what's required to automate the path all the way to production.

Don't worry if your whole deployment process isn't automated yet. The first step in automating anything is understanding what all the current manual steps are, so that you can automate them one at a time. Start simple: at first your deployment build might only email someone who does your deployments manually. That's okay for a start.