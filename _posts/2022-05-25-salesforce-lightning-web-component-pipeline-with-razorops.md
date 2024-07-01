---
title: Salesforce lightning web component pipeline with Razorops
description: check how  to use the Lightning Component UI framework for developing
  single page applications for mobile and desktop devices using Razorops CI/CD Tool.
permalink: "/blog/:title"
layout: post
date: '2022-05-23 11:28:58'
author: Saurabh Yadav
category: "Razorops CICD"
image: "/images/blog/Salesforce-lightning-web-component-pipeline-with-razorops.png"
---


**What is lightning component pipeline:**

The Lightning Component framework is a UI framework for developing single page applications for mobile and desktop devices.


**What problem developers face with continues changes in lightning web component:**

While developing components developers have to push the code manually every time they make any changes and they need to keep in mind to which stage they need to push on. So we can make this deployment flow easier by introducing **Razorops CI/CD Platform.**

For demo purpose we going to use ebike project: [https://github.com/trailheadapps/ebikes-lwc](https://github.com/trailheadapps/ebikes-lwc)


<br>
**Prerequisites:**

1. Enable Dev Hub.
 
2. Enable Source Tracking in Developer and Developer Pro Sandboxes.
 
3. Make a git repository for the ebike-lwc project.
 
4. Enable Experiences

	*  In your org, in Setup, select Settings, under Digital Experiences.
	* Click the Enable Digital Experiences checkbox
	* Enter a domain name for your experience site. Remember this value as you’ll use it later in this step.
	* Make sure that your domain name is available by clicking Check Availability.
	* Click Save then Ok.
	* Navigate back to Settings in Setup.
	* Under **Experience Management Settings**, enable Enable **ExperienceBundle Metadata API**.

5. Remove the Product custom field from the Case object with the following steps:

	* In Setup, click the Object Manager tab.
	* Click on the Case object.
	* Click Fields & Relationships.
	* Locate the Product picklist field and click Delete from the row menu.
	* Confirm deletion by clicking Delete.


6. Create Connected Apps **[link](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_connected_app.htm)**



**Setup razorops pipeline:**
To create a razorops account go to the link. 

1. Next integrate your repo where your **[ebikes-lwc](https://github.com/trailheadapps/ebikes-lwc)** fork is, use below options under integration Tab

<br>
![](/images/blog/salesforce-integrate-version-control.png)
<br>

2. Create pipeline, click New pipelines under Pipelines Tab and select your forked ebikes-lwc  repo

<br>
![](/images/blog/salesforce-razorops-create-pipeline.png)
<br>

3. We need to write **.razorops.yaml**  file and place it at root level of the repo.

Write .razorops.yaml file:
We have following  **.razorops.yaml**

<br>
![](/images/blog/salesforce-razorops-code.png)
<br>

Once the .razorops.yaml file is ready, push your code and the pipeline will start automatically.

We are using the salesforce official image **salesforce/salesforcedx:latest-rc-slim** it contains **sfdx** CLI. 

Set Env variable click on pipeline and click on Variables tab and add variables like below

<br>
![](/images/blog/salesforce-razorops.png)
<br>


**Conclusion :**

Razorops provides a complete CI/CD solution all in one place. It provides a complete audit trail of all changes made by your team, as well as an automatically generated deployment reports for each CI/CD operation. Last but not least, Razorops's customer service is unrivaled.
