---
title: DevOps Interview questions and answers
description: DevOps Interview questions and answers
image: /images/devops-interview-questions-and-answers.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: DevOps
date: 2024-04-22T01:17:00.000Z
---
**1. What are the popular DevOps tools that you use?**

We use folowing tools for work in DevOps:

I. Jenkins : This is an open source automation server used as a continuous integration tool. We can build, deploy and run automated tests with Jenkins.

II. GIT: It is a version controltool used for tracking changesin files and software.

III. Docker : This is a popular tool for containerization of services. It is very useful in Cloud based deployments.

IV. Nagios : We use Nagiosfor monitoring ofITinfrastructure.

V. Splunk : This is a powerful tool for log search as wel as monitoring production systems.

VI. Puppet : We use Puppet to automate our DevOps work so that it isreusable.

**2. What are the main benefits of DevOps?**

DevOps is a very popular trend in Software Development. Some of the main benefits of DevOps are as folows:

I. Release Velocity : DevOps practices help in increasing the release velocity. We can release code to production more often and with more confidence.

II. Development Cycle : With DevOps, the complete Development cycle from initial design to production deployment becomes shorter.

III. Deployment Rollback : In DevOps, we plan for any failure in deployment rolback due to a bug in code or issue in production. This gives confidence in releasing feature without worrying about downtime for rolback.

IV. Defect Detection: With DevOps approach, we can catch defects much earlier than releasing to production. It improvesthe quality ofthe software.

V. Recovery fromFailure :In case of a failure, we can recover very fast with DevOps process.

VI. Collaboration: WithDevOps, colaboration between development and operations professionalsincreases.

VII. Performance-oriented : With DevOps, organization folows performance-oriented culture in which teams become more productive and more innovative.

**3. What is the typical DevOps workflow you use in your organization?**

The typicalDevOps workflowin our organization is as folows:

I. We use Atlassian Jira for writing requirements and tracking tasks.

II. Based on the Jira tasks, developers checkin code into GIT version control system.

III. The code checked into GIT is built by using Apache Maven.

IV. The build processis automated with Jenkins.

V. During the build process, automated testsrun to validate the code checked in by developer.

VI. Code built onJenkinsissent to organization’s Artifactory.

VII. Jenkins automaticaly picksthe librariesfromArtifactory and deploysit to Production.

VIII. DuringProduction deployment Docker images are used to deploy same code onmultiple hosts.

IX. Once code is deployed to Production, we use Nagiosto monitor the health of production servers.

X. Splunk based alertsinformus of any issues or exceptionsin production.

**4. How do you take DevOps approach with Amazon Web Services?**

Amazon Web Services (AWS) provide many tools and features to deploy and manage applications in AWS. As per DevOps, we treat infrastructure as code. We mainly use folowing two services from AWS for DevOps:

I. CloudFormation : We use AWS CloudFormation to create and deploy AWS resources by using templates. We can describe our dependencies and pass special parameters in these templates. CloudFormation can read these templates and deploy the application and resources in AWS cloud.

II. OpsWorks : AWS provides another service caled OpsWorks that is used for configuration management by utilizing Chef framework. We can automate server configuration, deployment and management by using
Ops Works. It helps inmanaging EC2 instances in AWS as wel as any on-premises servers.

**5. How will you run a script automatically when a developer commits a change into GIT?**

GIT providesthe feature to execute custom scripts when certain event occurs in GIT. This feature is caled hooks.

We can write two types of hooks.

I. Client-side hooks

II. Server-side hooks

For this case, we can write a Client-side post-commit hook. This hook wil execute a custom script in which we can add the message and code that we want to run automaticaly with each commit.

**6. What are the main features of AWS OpsWorks Stacks?**

Some ofthe main features of AWS OpsWorks Stacks are as folows:

I. Server Suppo rt:AWS OpsWorks Stacks we can automate operational tasks on any server in AWS as wel as our own data center.

II. Scalable Automation : We get automated scaling support with AWS OpsWorks Stacks. Each new instance in AWS can read configuration fromOpsWorks. It can even respond to systemevents in same way as other instances do.

III. Dashboard: We can create dashboards in OpsWorks to display the status of al the stacks in AWS.

IV. Configuration as Code : AWS OpsWorks Stacks are built on the principle of “Configuration as Code”. We can define and maintain configurations like application source code. Same configuration can be replicated on multiple servers and environments.

V. Application Support :OpsWorks supports almost al kinds of applications. So it is universal in nature.

**7. How does CloudFormation work in AWS?**

AWS CloudFormation is used for deploying AWS resources.
In CloudFormation, we have to first create a template for a resource. A template is a simple text file that contains information
about a stack on AWS. As tack is a colection of AWS resourced that we want to deploy together in an AWS as a group.
Once the template is ready and submitted to AWS, CloudFormation will create all the resources in the template. This helps in
automation of building new environments in AWS.

**8. What is CICD in DevOps?**

CICD stands for Continuous Integration and Continuous Delivery. These are two different concepts that are complementary to each other.
Continuous Integration (CI) : In CI al the developer work is merged to main branch several times a day. This helps in reducing integration problems.

In CI we try to minimize the duration for which a branch remains checked out. A developer gets early feedback on the new
code added to main repository by using CI.

Continuous Delivery (CD) : In CD, a software team plans to deliver software in short cycles. They perform development,
testingand release in such a short time that incremental changes can be easily delivered to production.

In CD, as a DevOps we create a repeatable deployment process that can help achieve the objective of Continuous Delivery.

**9. What are the best practices of Continuous Integration (CI)?**

Some ofthe best practices ofContinuous Integration (CI) are as folows:

I. Build Automation : In CI, we create such a build environment that even with one command build can be triggered. This automationis done all the way up to deployment to Production environment.

II. Main Code Repository : In CI, we maintain a main branch in code repository that stores al the Production ready code. This is the branch that we can deploy to Production any time.

III. Self-testing build : Every build in CI should be self-tested. It means with every build there is a set of tests that runs to ensure that changes are of high quality.

IV. Every day commits to baseline : Developers wil commit all of theirs changes to baseline everyday. This ensuresthat there is no big pileup of code waiting for integration with the main repository for a longtime.

V. Build every commit to baseline : With Automated Continuous Integration, every time a commit is made into
baseline, a build is triggered. This helps in confirming that everychange integrates correctly.

VI. Fast Build Process : One of the requirements of CI is to keep the build process fast so that we can quickly identify any problem.

VII. Production like environment testing :In CI, we maintain a production like environment also known as preproduction or staging environment, which is very close to Production environment. We performtesting in this environment to check for any integration issues.

VIII. PublishBuild Results : We publish build results on a common site so that everyone can see these and take corrective actions.

IX. Deployment Automation:The deployment process is automated to the extent that in a build process we can add the step of deploying the code to a test environment. On this test environment all the stakeholders can access and test the latest delivery.

**10. What are the benefits of Continuous Integration (CI)?**
The benefits ofContinuousIntegration (CI) are asfolows:
I. CImakesthe current build constantlyavailable fortesting, demo and release purpose.
II. WithCI, developers writemodularcode that works wel withfrequent code check-ins.
III. Incase ofa unittest failure or bug, developer caneasilyrevert back to the bug-free state ofthe code.
IV. There is drastic reduction in chaos on release daywithCI practices.
V. WithCI, we can detect Integration issues much earlier in the process.
VI. Automated testingis one very usefulside ef ect ofimplementingCI.
VII. Al the stakeholders including business partners can see the smal changes deployed into pre-production
environment. This provides earlyfeedback onthe changes to software.
VIII. Automated CI and testing generates metrics like code-coverage, code complexity that help in improving the
development process.
11. What are the options for security in Jenkins?
In Jenkins, it is very important to make the system secure by setting user authentication and authorization. To do this we have
to do folowing:
I. First we have to set up the Security Realm. We can integrate Jenkins with LDAP server to create user
authentication.
II. Second part isto set the authorization for users. This determines which user has accessto what resources.
In Jenkins some ofthe optionsto setup security are asfolows:
I. We canuse Jenkins’ ownUser Database.
II. We can use LDAP pluginto integrate Jenkins withLDAP server.
III. We can also setup Matrix based security on Jenkins.
12. What are the main benefits of Chef?
Chefis an automation toolfor keepinginfrastructure as code. It has many benefits. Some ofthese are asfolows:
I. CloudDeployment:We can use Chefto performautomated deployment inCloud environment.
II. Multi-cloudsupport:WithChefwe can even use multiple cloud providersfor our infrastructure.
III. HybridDeployment :Chefsupports bothCloud based as wel as datacenter-based infrastructure.
IV. High Availability : With Chef automation, we can create high availability environment. In case of hardware
failure, Chef can maintain or start new servers in automated way to maintain highly available environment.
13. What is the architecture of Chef?
Chef is composed of many components like Chef Server, Client etc. Some of the main components in Chef are as folows:
I. Client: These are the nodes orindividualusersthat communicate withChefserver.
II. ChefManage : Thisisthe web console thatis used forinteractingwithChefServer.
III. Load Balancer : Al the Chef server API requests are routed through Load Balancer. It is implemented in
Nginx.
IV. Bookshelf: Thisisthe component thatstores cookbooks. Al the cookbooks are stored in a repository. It is
separate storage fromthe Chefserver.
V. PostgreSQL:Thisisthe data repository for Chefserver.
VI. Chef Server : This is the hub for configuration data. Al the cookbooks and policies are stored in it. It can
scale to the size ofany enterprise.
14. What is a Recipe in Chef?
In anyorganization, Recipe isthe most fundamentalconfigurationelement.
It is written inRuby language. It is a colection ofresources defined by using patterns.
A Recipe isstored ina Cookbook and itmayhave dependencyonotherRecipe.
We cantagRecipe to create some kind ofgrouping.
We have to add a Recipe in run-list before using it by chef-client.
It alwaysmaintainsthe executionorderspecifiedinrun-list.
15. What are the main benefits of Ansible?
Ansible is a powerful tool for IT Automation for large scale and complex deployments. It increases the productivity of team.
Some ofthe main benefits ofAnsible are asfolows:
I. Productivity :It helpsindeliveringand deployingwithspeed. It increases productivityinan organization.
II. Automation : Ansible provides very good options for automation. With automation, people can focus on
delivering smartsolutions.
III. Large-scale :Ansible can be used in smal as wel as very large-scale organizations.
IV. Simple DevOps : With Ansible, we can write automation in a human-readable language. This simplifies the
task ofDevOps.
16. What are the main use cases of Ansible?
Some ofthe popular use cases ofAnsible are asfolows:
I. AppDeployment :WithAnsible, we can deploy appsin a reliable and repeatable way.
II. ConfigurationManagement :Ansible supports the automation of configuration management across multiple
environments.
III. Continuous Delivery :We can release updates with zero downtime withAnsible.
IV. Security :We canimplement complexsecurity policies withAnsible.
V. Compliance : Ansible helps in verifying and organization’s systems in comparison with the rules and
regulations.
VI. Provisioning :We can provide newsystems and resourcesto other users withAnsible.
VII. Orchestration:Ansible can be used in orchestration of complex deployment in a simple way.
17. What is Docker Hub?
Docker Hub is a cloud-based registry. We can use Docker Hub to link code repositories. We can even build images and store
theminDocker Hub. It also provideslinksto Docker Cloud to deploy the imagesto our hosts.
Docker Hub is a central repository for container image discovery, distribution, change management, workflow automation and
teamcolaboration.
18. What is your favorite scripting language for DevOps?
In DevOps, we use diferent scripting languages for diferent purposes. There is no single language that can work in al the
scenarios. Some ofthe popularscripting languagesthat we use are asfolows:
I. Bash:OnUnix based systems we use Bash shel scripting for automating tasks.
II. Python : For complicated programming and large modules we use Python. We can easily use a wide variety of
standard libraries withPython.
III. Groovy : This is a Java based scripting language. We need JVM instaled in an environment to use Groovy. It
is verypowerful and it provides verypowerfulfeatures.
IV. Perl : Thisis anotherlanguage that is veryusefulfortext parsing. We use itinweb applications.
19. What is Multi-factor authentication?
In security implementation, we use Multi-factor authentication (MFA). In MFA, a user is authenticated by multiple means
before giving accessto a resource orservice. It is diferent fromsimple user/password based authentication.
The most popular implementation of MFA is Two-factor authentication. In most of the organizations, we use
username/password and anRSAtokenastwo factorsfor authentication.
WithMFA, the systembecomes more secure and it cannot be easily hacked.
20. What are the main benefits of Nagios?
Nagios is open source software to monitor systems, networks and infrastructure. The main benefits of Nagios are as folows:
I. Monitor : DevOps can configure Nagios to monitor IT infrastructure components, system metrics and
network protocols.
II. Alert:Nagios wil send alerts when a critical component in infrastructure fails.
III. Response :DevOps acknowledges alerts and takes corrective actions.
IV. Report :PeriodicalyNagios can publish/send reports on outages, events and SLAs etc.
V. Maintenance:Duringmaintenance windows, we canalso disable alerts.
VI. Planning :Based on past data, Nagios helps ininfrastructure planningand upgrades.
21. What is State Stalking in Nagios?
State Stalking is a very useful feature. Though al the users do not use it al the time, it is very helpful when we want to
investigate an issue.
In State Stalking, we can enable stalking on a host. Nagios wil monitor the state of the host very carefuly and it wil log any
changesin the state.
By this we canidentifywhat changes might be causing an issue on the host.
22. What are the main features of Nagios?
Some ofthe main features ofNagios are asfolows:
I. Visibility :Nagios provides a centralized viewofthe entire ITinfrastructure.
II. Monitoring :We canmonitor al the mission criticalinfrastructure components withNagios.
III. Proactive Planning : With Capacity Planning and Trending we can proactively plan to scale up or scale down
the infrastructure.
IV. Extendable :Nagiosis extendable to a third party toolsinAPIs.
V. Multi-tenant:Nagios supports multi-tenants architecture.
23. What is Puppet?
Puppet Enterprise is a DevOps software platformthat is used for automation of infrastructure operations. It runs on Unix as
wel as onWindows.
We can define systemconfiguration by usingPuppet’slanguage or RubyDSL.
The systemconfiguration described inPuppet’slanguage can be distributed to a targetsystemby usingRESTAPI cals.
24. What is the architecture of Puppet?
Puppet is Open Source software. It is based on Client-server architecture. It is a Model Driven system. The client is also
caled Agent. And server is caled Master.
It has folowingarchitectural components:
I. Configuration Language : Puppet provides a language that is used to configure Resources. We have to
specifywhatActionhasto be applied to whichResource.
The Action has three items for each Resource: type, title and list of attributes of a resource. Puppet code is
written inManifestsfiles.
II. Resource Abstraction : We can create Resource Abstraction in Puppet so that we can configure resources
on dif erent platforms. Puppet agent uses a Facter for passing the information of an environment to Puppet
server. InFacter we have informationaboutIP, hostname, OS etc ofthe environment.
III. Transaction : In Puppet, Agent sends Facter to Master server. Master sends back the catalog to Client.
Agent applies any configuration changes to system. Once al changes are applied, the result is sent to Server.
25. What are the main use cases of Puppet Enterprise?
We can use Puppet Enterprise for folowing scenarios:
I. Node Management: We canmanage a large numberofnodes withPuppet.
II. Code Management :WithPuppet we can define Infrastructure as code. We can review, deploy, and test the
environment configurationfor Development, Testingand Productionenvironments.
III. Reporting & Visualization : Puppet provides Graphical tools to visualize and see the exact status of
infrastructure configuration.
IV. Provisioning Automation : With Puppet we can automate deployment and creation of new servers and
resources. So users and business can get their infrastructure requirements completed very fast withPuppet.
V. Orchestration : For a large Cluster of nodes, we can orchestrate the complete process by using Puppet. It
canfolowthe orderinwhichwe want to deploythe infrastructure environments.
VI. Automation of Configuration : With Configuration automation, the chances of manual errors are reduced.
The process becomesmore reliable withthis.
26. What is the use of Kubernetes?
We use Kubernetesfor automationoflarge-scale deployment ofContainerized applications.
It is anopensource systembased onconceptssimilarto Google’s deployment process ofmilions ofcontainers.
It can be used on cloud, on-premise datacenter and hybrid infrastructure.
In Kubernetes we can create a cluster ofservers that are connected to work as a single unit. We can deploy a containerized
applicationtoal theserversina clusterwithoutspecifyingthemachinename.
We have to package applications insucha waythat theydo not depend ona specific host.
27. What is the architecture of Kubernetes?
The architecture ofKubernetes consists offolowingcomponents:
Master : There is a master node that is responsible for managing the cluster. Master performs folowing functions in a cluster.
I. SchedulingApplications
II. Maintaining desired state of applications
III. Scalingapplications
IV. Applyingupdates to applications
Nodes : A Node in Kubernetes is responsible for running an application. The Node can be a Virtual Machine or a Computer
inthe cluster. There issoftware caled Kubelet on each node. Thissoftware is used for managingthe node and communicating
with theMaster node incluster.
There is a Kubernetes API that is used by Nodes to communicate with the Master. When we deploy an application on
Kubernetes, we request Master to start application containers onNodes.
28. How does Kubernetes provide high availability of applications in a
Cluster?
In a Kubernetes cluster, there is a Deployment Controler. This controler monitors the instances created by Kubernetes in a
cluster. Once a node or the machine hostingthe node goes down, Deployment Controler wil replace the node.
It is a self-healingmechanisminKubernetesto provide highavailabilityofapplications.
Therefore in Kubernetes cluster, Kubernetes Deployment Controler is responsible for starting the instances as wel as
replacingthe instancesincase ofa failure.
29. Why Automated Testing is a must requirement for DevOps?
In DevOps approach we release software with high frequency to production. We have to run tests to gain confidence on the
quality ofsoftware deliverables.
Running tests manualy is a time taking process. Therefore, we first prepare automation tests and then deliver software. This
ensuresthat we catchanydefects earlyinour process.
30. What is Chaos Monkey in DevOps?
Chaos Monkey is a concept made popular by Netflix. In Chaos Monkey, we intentionaly try to shut down the services or
create failures. Byfailingone ormore services, we test the reliabilityand recoverymechanismofthe Productionarchitecture.
It checks whether our applications and deployment have survivalstrategybuiltinto it or not.
31. How do you perform Test Automation in DevOps?
We use Jenkins to create automated flows to run Automation tests. The first part of test automation is to develop test strategy
and test cases. Once automation test cases are ready for an application, we have to plug these into each Build run.
In eachBuild we runUnit tests, Integration tests and Functional tests.
With a Jenkins job, we can automate al these tasks. Once al the automated tests pass, we consider the build as green. This
helpsin deployment and release processesto build confidence on the application software.
32. What are the main services of AWS that you have used?
We use folowingmainservices ofAWS inour environment:
I. EC2 : This is the Elastic Compute Cloud by Amazon. It is used to for providing computing capability to a
system. We can use it in places of our standalone servers. We can deploy dif erent kinds of applications on C2.
II. S3 :We use S3 inAmazon for our storage needs.
III. DynamoDB :We use DynamoDBinAWS for storing data in NoSQLdatabase form.
IV. AmazonCloudWatch: We use CloudWatchto monitorour applicationinCloud.
V. Amazon SNS : We use Simple Notification Service to inform users about any issues in Production
environment.
33. Why GIT is considered better than CVS for version control system?
GIT is a distributed system. In GIT, any person can create its own branch and start checking in the code. Once the code is
tested, it is merged into mainGIT repo. IN between, Dev, QA and product can validate the implementation of that code.
InCVS, there is a centralized systemthat maintains al the commits and changes.
GITis opensource software and there are plentyof extensionsinGITfor use by ourteams.
34. What is the difference between a Container and a Virtual Machine?
We need to select an Operating System (OS) to get a specific Virtual Machine (VM). VM provides ful OS to an application
forrunning ina virtualized environment.
AContainer uses APIs of anOperatingSystem(OS) to provide runtime environment to an application.
AContaineris verylightweight in comparisonwitha VM.
VM provides higher level ofsecurity compared to a Container.
AContainer just providesthe APIsthat are required by the application.
35. What is Serverless architecture?
Serverless Architecture is a termthat refersto folowing:
I. AnApplication that depends on a third-party service.
II. AnApplication inwhichCode isrun on ephemeral containers.
InAWS, Lambda is a popularservice to implement Serverless architecture.
Another concept in Serverless Architecture is to treat code as a service or Function as a Service (FAAS). We just write code
that can be run on any environment or server without the need ofspecifying which server should be used to run this code.
36. What are the main principles of DevOps?
DevOpsis diferentfromTechnicalOperations. It hasfolowingmainprinciples:
I. Incremental : In DevOps we aim to incrementaly release software to production. We do releases to
productionmore often thanWaterfal approach of one large release.
II. Automated:To enable use to make releases more often, we automate the operations fromCode Check in to
deployment inProduction.
III. Collaborative : DevOps is not only responsibility of Operations team. It is a colaborative ef ort of Dev, QA,
Release and DevOpsteams.
IV. Iterative :DevOps is based on Iterative principle of using a process that is repeatable. But with each iteration
we aimtomake the process more eficient and better.
V. Self-Service : In DevOps, we automate things and give self-service options to other teams so that they are
empowered to deliver the work intheir domain.
37. Are you more Dev or more Ops?
This is a tricky question. DevOps is a new concept and in any organization the maturity of DevOps varies from highly
Operations oriented to highly DevOps oriented. In some projects teams are very mature and practice DevOps in it true form.
Insome projects, teamsrelymore onOperationsteam.
As a DevOps person I give first priority to the needs of an organization and project. At some times I may have to performa lot
ofoperations work. But witheachiteration, I aimto bringDevOps changes incrementalyto anorganization.
Over time, organization/projectstartsseeing results ofDevOps practices and embracesit fuly.
38. What is a REST service?
REST is also known as Representational State Transfer. A REST service is a simple software functionality that is available
over HTTP protocol. It is a lightweightservice that is widelyavailable due to the popularityofHTTP protocol.
Sine REST is lightweight; it has very good performance in a software system. It is also one of the foundations for creating
highlyscalable systemsthat provide a service to largenumberofclients.
Another key feature of a REST service is that as long as the interface is kept same, we can change the underlying
implementation. E.g. Clients ofREST service can keep caling the same service while we change the implementation fromphp
to Java.
39. What are the Three Ways of DevOps?
Three Ways ofDevOpsrefersto three basic principles ofDevOps culture. These are asfolows:
I. The First Way: Systems Thinking : In this principle we see the DevOps as a flow of work from left to right.
This is the time taken from Code check in to the feature being released to End customer. In DevOps culture
we tryto identifythe bottlenecksin this.
II. The Second Way: Feedback Loops : Whenever there is an issue in production it is a feedback about the
whole development and deployment process. We try to make the feedback loop more eficient so that teams
can get the feedback much faster. It is a way of catching defect much earlier in process than it being reported
by customer.
III. The ThirdWay: Continuous Learning : We make use offirst and second way principlesto keep on making
improvements in the overal process. This is the third principle in which over the time we make the process and
our operations highlyeficient, automated and error free by continuouslyimprovingthem.
40. How do you apply DevOps principles to make system Secure?
Security of a system is one of the most important goals for an organization. We use folowing ways to apply DevOps to
security.
I. Automated Security Testing : We automate and integrate Security testing techniques for Software
Penetrationtestingand Fuzztestinginsoftware development process.
II. Early Security Checks : We ensure that teams know about the security concerns at the beginning of a
project, rather than at the end of delivery. It is achieved by conducting Security trainings and knowledge
sharing sessions.
III. Standard Process : At DevOps we try to folow standard deployment and development process that has
already gone through security audits. This helps in minimizing the introduction of any new security loopholes
due to change in the standard process.
41. What is Self-testing Code?
Self-testingCode is an important feature of DevOps culture. In DevOps culture, development teammembers are expected to
write self-testing code. It means we have to write code along with the tests that can test this code. Once the test passes, we
feel confident to release the code.
If we get an issue in production, we first write an automation test to validate that the issue happens in current release. Once the
issue in release code is fixed, we run the same test to validate that the defect is not there. With each release we keep running
these testsso that the issue does not appear anymore.
One ofthe techniques ofwritingSelf-testingcode is Test DrivenDevelopment(TDD).
42. What is a Deployment Pipeline?
A Deployment Pipeline is an important concept in Continuous Delivery. In Deployment Pipeline we break the build process
into distinctstages. In each stage we get the feedback to move onto the nextstage.
It is a colaborative efort between various groupsinvolved in delivering software development.
Oftenthe first stage inDeployment Pipeline is compilingthe code and convertinginto binaries.
After that we run the automated tests. Depending on the scenario, there are stages like performance testing,security check,
usabilitytestingetc ina Deployment Pipeline.
In DevOps, our aim is to automate al the stages of Deployment Pipeline. With a smooth running Deployment Pipeline, we can
achieve the goalofContinuous Delivery.
43. What are the main features of Docker Hub?
Docker Hub providesfolowingmain features:
I. Image Repositories : In Docker Hub we can push, pul, find and manage Docker Images. It is a big library
that hasimagesfromcommunity, oficialas wel as private sources.
II. Automated Builds : We can use Docker Hub to create new images by making changes to source
code repository ofthe image.
III. Webhooks: WithWebhooks inDocker Hub we can trigger actions that can create and build new images by
pushing a change to repository.
IV. Github/Bitbucketintegration:Docker Hub also providesintegrationwithGithub and Bitbucketsystems.
44. What are the security benefits of using Container based system?
Some ofthe main security benefits of using a Container based systemare asfolows:
I. Segregation : In a Container based system we segregate the applications on dif erent containers. Each
application may be running on same host but in a separate container. Each application has access to ports, files
and otherresourcesthat are provided to it bythe container.
II. Transient : In a Container based system, each application is considered as a transient system. It is better than
a static systemthat hasfixed environmentwhichcanbe exposed overtime.
III. Control: We use repeatable scripts to create the containers. This provides us tight control over the software
application that we want to deploy and run. It also reduces the risk of unwanted changes in setup that can
cause security loopholes.
IV. Security Patch: In a Container based system; we can deploy security patches on multiple containers in a
uniformway. Also it is easier to patch a Container with an application update.
45. How many heads can you create in a GIT repository?
There can be any number of headsin a GITrepository.
By default there is one head known as HEAD in each repository inGIT.
46. What is a Passive check in Nagios?
In Nagios, we can monitor hosts and services by active checks. In addition, Nagios also supports Passive checks that are
initiated byexternal applications.
The results ofPassive checks are submitted to Nagios. There are two main use cases ofPassive checks:
I. We use Passive checks to monitor asynchronous services that do not give positive result with Active checks at
regular intervals oftime.
II. We can use Passive checksto monitorservices or applicationsthat are located behind a firewal.
47. What is a Docker container?
ADocker Containeris a lightweightsystemthat canbe runon a Linuxoperatingsystemor a virtualmachine. It is a package of
anapplicationand related dependenciesthat canbe runindependently.
Since Docker Container is very lightweight, multiple containers can be run simultaneously on a single server or virtual machine.
With a Docker Container we can create an isolated system with restricted services and processes. A Container has private
viewofthe operating system. It hasits own processIDspace, file system, and network interface.
Multiple Docker Containers can share same Kernel.
48. How will you remove an image from Docker?
We can use docker rmi command to delete an image fromour localsystem.
Exact command is:
%dockerrmi<Image Id>
If we want to find IDs of al the Docker images in our local system, we can user docker images command.
%dockerimages
Ifwe want to remove a docker containerthenwe use docker rmcommand.
% docker rm<ContainerId>
49. What are the common use cases of Docker?
Some ofthe common use cases ofDocker are as folows:
I. Setting up Development Environment : We can use Docker to set the development environment with the
applications onwhichour code is dependent.
II. Testing Automation Setup : Docker can also help in creating the Testing Automation setup. We can setup
diferentservices and apps withDockerto create the automation-testingenvironment.
III. Production Deployment : Docker also helps in implementing the Production deployment for an application.
We can use it to create the exact environment and process that wil be used for doing the production
deployment.
50. Can we lose our data when a Docker Container exits?
A Docker Container has its own file-system. In an application running on Docker Container we can write to this file-system.
When the container exits, data written to file-systemstil remains. When we restart the container, same data can be accessed
again.
Onlywhenwe delete the container, related data wil be deleted.
Docker Questions
51. What is Docker?
Docker is OpenSource software. It providesthe automationofLinux application deployment in a software container.
We cando operatingsystemlevelvirtualizationonLinuxwithDocker.
Docker can package software in a complete file system that contains software code, runtime environment, system tools, &
librariesthat are required to instal and runthe software ona server.
52. What is the difference between Docker image and Docker container?
Docker container issimply an instance ofDocker image.
A Docker image is an immutable file, which is a snapshot of container. We create an image with build command.
Whenwe use run command, an Image wil produce a container.
In programming language, an Image is a Class and a Container is an instance of the class.
53. How is a Docker container different from a hypervisor?
In a Hypervisor environment we first create a VirtualMachine and theninstal anOperatingSystemon it.Afterthat we deploy
the application. The virtualmachine may also be instaled on diferent hardware configurations.
In a Docker environment, we just deploy the application in Docker. There is no OS layer in this environment. We specify
libraries, and rest ofthe kernelis provided byDocker engine.
In a way, Docker container and hypervisor are complementary to each other.
54. Can we write compose file in json file instead of yaml?
Yes. Yamlformat is a superset of json format. Therefore any json file is also a valid Yamlfile.
Ifwe use a jsonfilethenwe have to specifyindocker command that we are usinga jsonfile asfolows:
% docker-compose -f docker-compose.json up
55. Can we run multiple apps on one server with Docker?
Yes, theoreticaly we can run multiples apps on one Docker server. But in practice, it is better to run dif erent components on
separate containers.
Withthis we get cleaner environment and it can be used for multiple uses.
56. What are the main features of Docker-compose?
Some ofthe main features ofDocker-compose are asfolows:
I. Multiple environments on same Host : We can use it to create multiple environments on the same host
server.
II. Preserve Volume Data on Container Creation : Docker compose also preserves the volume data when
we create a container.
III. Recreate the changedContainers :We can also use compose to recreate the changed containers.
IV. Variables in Compose file : Docker compose also supports variables in compose file. In this way we can
create variations ofour containers.
57. What is the most popular use of Docker?
The most popular use of Docker is in build pipeline. With the use of Docker it is much easier to automate the development to
deployment processin build pipeline.
We use Dockerforthe complete build flowfromdevelopment work, testrunand deployment to productionenvironment.
58. What is the role of open source development in the popularity of
Docker?
Since Linux was an open source operating system, it opened new opportunities for developers who want to contribute to open
source systems.
One ofthe very good outcomes of open source software is Docker. It has very powerfulfeatures.
Docker has wide acceptance due to its usabilityas wel as its opensource approach ofintegratingwithdiferentsystems.
59. What is the difference between Docker commands: up, run and start?
We have up and start commandsin docker-compose. The run command isin docker.
a. Up: We use this command to build, create, start or restart al the servicesin a docker-compose.ymlfile. It
also attachesto containersfor a service.
This command canalso start linked services.
b. Run: We use this command for adhoc requests. It just starts the service that we specificaly want to start.
We generalyuse itrunspecific tests or anyadministrative tasks.
c. Start : This command is used to start the container that were previously created but are not currently
running. This command does not create newcontainers.
60. What is Docker Swarm?
Docker Swarm is used to create a cluster environment. It can turn a group of Docker engines into a Single virtual Docker
Engine. This creates a systemwith pooled resources. We can use Docker Swarmto scale our application.
61. What are the features of Docker Swarm?
Some ofthe key features of Docker Swarmare as folows:
I. Compatible :Docker Swarmis compatible with standard Docker API.
II. HighScalability : Swarmcan scale up to as much as 1000 nodes and 50000 containers. There is almost no
performance degradationatthisscale inDockerSwarm.
III. Networking :Swarmcomes withsupportforDocker Networking.
IV. High Availability : We can create a highly available system with Docker Swarm. It alows use to create
multiplemaster nodesso that incase ofa failure, another node cantake over.
V. Node Discovery : In Docker Swarm, we can add more nodes and the new nodes can be found with any
discoveryservice like etcd or zookeeper etc.
62. What is a Docker Image?
Docker Image is the blue print that is used to create a Docker Container. Whenever we want to run a container we have to
specify the image that we want to run.
There are many Docker images available online for standard software. We can use these images directly fromthe source.
The standard set of Docker Images is stored in Docker Hub Registry. We can download these from this location and use it in
our environment.
We can also create our ownDocker Image with the software that we want to run as a container.
63. What is a Docker Container?
ADocker Containeris a lightweightsystemthat canbe runon a Linuxoperatingsystemor a virtualmachine. It is a package of
anapplicationand related dependenciesthat canbe runindependently.
Since Docker Container is very lightweight, multiple containers can be run simultaneously on a single server or virtual machine.
With a Docker Container we can create an isolated system with restricted services and processes. A Container has private
viewofthe operating system. It hasits own processIDspace, file system, and network interface.
Multiple Docker Containers can share same Kernel.
64. What is Docker Machine?
We can use Docker Machine to instal Docker Engine on virtual hosts. It also provides commands to manage virtual hosts.
Some ofthe popular Docker machine commands enable usto start, stop, inspect and restart a managed host.
Docker Machine provides a Command Line Interface (CLI), which is very useful in managing multiple hosts.
65. Why do we use Docker Machine?
There are two main uses ofDocker Machine:
I. Old Desktop : If we have an old desktop and we want to run Docker then we use Docker Machine to run
Docker. It islike instaling a virtualmachine on an old hardware systemto runDocker engine.
II. Remote Hosts : Docker Machine is also used to provision Docker hosts on remote systems. By using
Docker Machine you can instal Docker Engine on remote hosts and configure clients on them.
66. How will you create a Container in Docker?
To create a Container in Docker we have to create a Docker Image. We can also use an existing Image from Docker Hub
Registry.
We can run an Image to create the container.
67. Do you think Docker is Application-centric or Machine-centric?
Docker is an Application-centric solution. It is optimized for deployment of an application. It does not replace a machine by
creatinga virtualmachine.Rather, itfocuses on providingease ofuse featuresto runanapplication.
68. Can we run more than one process in a Docker container?
Yes, a Docker Container can provide process management that can be used to run multiple processes. There are process
supervisorslike runit, s6, daemontools etc that can be used to fork additional processesin a Docker container.
69. What are the objects created by Docker Cloud in Amazon Web
Services (AWS) EC2?
Docker Cloud createsfolowing objectsinAWS EC2 instance:
I. VPC : Docker Cloud creates a Virtual Private Cloud with the tag name dc-vpc. It also creates Class Less
Inter-DomainRouting(CIDR) with the range of 10.78.0.0/16 .
II. Subnet : Docker Cloud creates a subnet in each Availability Zone (AZ). In Docker Cloud, each subnet
istagged withdc-subnet.
III. Internet Gateway : Docker Cloud also creates an internet gateway with name dc-gateway and attaches it
to the VPC created earlier.
IV. Routing Table : Docker Cloud also creates a routing table named dc-route-table in Virtual Private Cloud. In
this RoutingTable Docker Cloud associatesthe subnet with the Internet Gateway.
70. How will you take backup of Docker container volumes in AWS S3?
We can use a utility named Dockup provided byDocker Cloud to take backup ofDocker container volumesinS3.
71. What are the three main steps of Docker Compose?
Three main steps ofDocker Compose are as folows:
I. Environment : We first define the environment of our application with a Dockerfile. It can be used to recreate
the environment at a later point oftime.
II. Services : Then we define the services that make our app in docker-compose.yml. By using this file we
candefine howthese services canbe runtogetherinanenvironment.
III. Run : The last step is to run the Docker Container. We use docker-compose up to start and run the
application.
72. What is Pluggable Storage Driver architecture in Docker based
containers?
Docker storage driver is by default based on a Linux file system. But Docker storage driver also has provision to plug in any
otherstorage driverthat canbe used for our environment.
In Pluggable Storage Driver architecture, we can use multiple kinds of file systems in our Docker Container. In Docker info
commandwe cansee theStorage Driverthatisset onaDockerdaemon.
We can even plug in shared storage systems with the Pluggable Storage Driver architecture.
73. What are the main security concerns with Docker based containers?
Docker based containers have folowing security concerns:
I. Kernel Sharing : In a container-based system, multiple containers share same Kernel. If one container causes
Kernel to go down, it wil take down al the containers. In a virtual machine environment we do not have this
issue.
II. Container Leakage : If a malicious user gains access to one container, it can try to access the other
containers on the same host. If a container has security vulnerabilities it can alow the user to access other
containers on same host machine.
III. Denial of Service : If one container occupies the resources of a Kernel then other containers wil starve for
resources. It cancreate a DenialofService attack like situation.
IV. Tampered Images : Sometimes a container image can be tampered. This can lead to further security
concerns. An attacker can try to run a tampered image to exploit the vulnerabilities in host machines and
other containers.
V. Secret Sharing : Generaly one container can access other services. To access a service it requires a Key or
Secret. A malicious user can gain access to this secret. Since multiple containers share the secret, it may lead
to furthersecurity concerns.
74. How can we check the status of a Container in Docker?
We can use docker ps –a command to get the list of al the containers in Docker. This command also returns the status of these containers.
75. What are the main benefits of using Docker?
Docker is a very powerful tool. Some ofthe main benefits of using Docker are asfolows:
I. Utilize Developer Skills : With Docker we maximize the use of Developer skils. With Docker there is less need of build or
release engineers. Same Developer can create software and wrap it inone single file.
II. StandardApplicationImage :Docker based systemalows usto bundle the application software and Operating systemfilesin a
single ApplicationImage that canbe deployed independently.
III. Uniformdeployment: WithDocker we cancreate one package ofoursoftware and deployit ondiferent platformsseamlessly
.
76. How does Docker simplify Software Development process?
Prior to Docker, Developers would develop software and pass it to QA for testing and then it is sent to Build & Release teamfor deployment.
In Docker workflow, Developer builds an Image after developing and testing the software. This Image is shipped to Registry. FromRegistry it is
available for deployment to any system. The development process is simpler since steps for QA and Deployment etc take place before the Image
is built. So Developer getsthe feedback early.
77. What is the basic architecture behind Docker?
Docker is built on client server model. Docker server is used to run the images. We use Docker client to communicate with Docker server.
Clientstel Dockerserver via commands what to do.
Additionaly there is a Registry thatstores Docker Images. Docker Server can directly contact Registry to download images.
78. What are the popular tasks that you can do with Docker Command
line tool?
Docker Command Line (DCL) tool is implemented in Go language. It can compile and run on most of the common operating systems. Some of
the tasksthatwe cando withDockerCommand Line toolare asfolows:
I. We can download imagesfromRegistrywithDCL.
II. We can start, stop or terminate a container on a Docker server by DCL.
III. We can retrieve Docker Logs via DCL.
IV. We can build a Container Image withDCL.
79. What type of applications- Stateless or Stateful are more suitable for
Docker Container?
It is preferable to create Stateless application for Docker Container. We can create a container out of our application and take out the configurable
state parametersfromapplication. Now we can runsame containerinProductionas wel as QAenvironments withdiferent parameters. Thishelps
in reusing the same Image in dif erent scenarios. Also a stateless application is much easier to scale with Docker Containers than a stateful
application.
80. How can Docker run on different Linux distributions?
Docker directly works with Linux kernel level libraries. In every Linux distribution, the Kernel is same. Docker containers share same kernel as the
host kernel.
Since al the distributionsshare the sameKernel, the container canrunonanyofthese distributions.
81. Why do we use Docker on top of a virtual machine?
Generaly we use Docker on top of a virtual machine to ensure isolation of the application. On a virtual machine we can get the advantage of
security provided by hypervisor. We can implement dif erent security levels on a virtual machine. And Docker can make use of this to run the
application at diferentsecurity levels.
82. How can Docker container share resources?
We can run multiple Docker containers on same host. These containers can share Kernel resources. Each container runs on its own Operating
Systemand it hasits ownuser-space and libraries.
So in a way Docker container does not share resources within its own namespace. But the resources that are not in isolated namespace are shared
between containers. These are the Kernelresources of host machine that have just one copy.
So in the back-end there is same set ofresourcesthat Docker Containers share.
83. What is the difference between Add and Copy command in a
Dockerfile?
BothAdd andCopy commands ofDockerfile cancopy newfilesfroma source locationto a destinationinContainer’sfilepath.
They behave almostsame.
Themaindiference betweenthese two isthat Add command canalso read the filesfroma URL.
As per Docker documentation, Copy command is preferable. Since Copy only supports copying local filesto a Container, it is preferred over Add
command.
84. What is Docker Entrypoint?
We use Docker Entrypoint to set the starting point for a command in a Docker Image.
We can use the entrypoint as a command for running an Image in the container.
E.g. We can define folowing entrypoint in docker file and run it asfolowing command:
ENTRYPOINT[“mycmd”]
% docker runmycmd
85. What is ONBUILD command in Docker?
We use ONBUILDcommand inDockerto runthe instructionsthat have to execute afterthe completionofcurrent Dockerfile build.
It is used to build a hierarchyofimagesthat have to be build after the parent image is built.
A Docker build wil execute first ONBUILD command and then it wil execute any other command in Child Dockerfile.
86. What is Build cache in Docker?
When we build an Image, Docker wil process each line in Dockerfile. It wil execute the commands on each line in the order that is mentioned in
the file.
But at each line, before running any command, Docker wil check if there is already an existing image in its cache that can be reused rather than
creating a newimage.
This method ofusing cache inDocker is caled Build cache inDocker.
We can also specify the option –no-cache=true to let Docker know that we do not want to use cache for Images. With this option, Docker wil
create al newimages.
87. What are the most common instructions in Dockerfile?
Some ofthe common instructionsinDockerfile are asfolows:
I. FROM : We use FROM to set the base image for subsequent instructions. In every valid Dockerfile, FROM is the first
instruction.
II. LABEL : We use LABEL to organize our images as per project, module, licensing etc. We can also use LABEL to help in
automation.
In LABEL we specify a key value pair that can be later used for programmaticaly handling the Dockerfile.
III. RUN : We use RUN command to execute any instructions in a new layer on top of the current image. With each RUN command
we add something on top ofthe image and use it in subsequentstepsin Dockerfile.
IV. CMD : We use CMD command to provide default values of an executing container. In a Dockerfile, if we include multiple CMD
commands, thenonlythe last instructionis used.
88. What is the purpose of EXPOSE command in Dockerfile?
We use EXPOSE command to informDocker that Container wil listen on a specific network port during runtime.
But these ports on Container may not be accessible to the host. We can use –p to publish a range of ports fromContainer.
89. What are the different kinds of namespaces available in a Container?
In a Container we have an isolated environment with namespace for each resource that a kernel provides. There are mainly six types of
namespacesin aContainer.
I. UTS Namespace : UTS stands for Unix Timesharing System. In UTS namespace every container gets its own hostname and
domain name.
II. Mount Namespace : This namespace provides its own file systemwithin a container. With this namespace we get root like / in the
file systemonwhichrest ofthe file structure is based.
III. PID Namespace : This namespace contains al the processes that run within a Container. We can run ps command to see the
processesthat are runningwithinaDocker container.
IV. IPC Namespace : IPC stands for Inter Process Communication. This namespace covers shared memory, semaphores, named
pipes etc resourcesthat are shared by processes. The itemsin this namespace do not crossthe container boundary.
V. UserNamespace :This namespace containsthe users and groupsthat are defined within a container.
VI. Network Namespace :With this namespace, container providesits own network resourceslike- ports, devices etc. With this
namespace, Docker creates an independent network stack within each container.
90. How will you monitor Docker in production?
Docker providestoolslike dockerstats and docker eventsto monitor Docker in production.
We canget reports onimportant statistics withthese commands.
Docker stats : When we cal docker stats with a container id, we get the CPU, memory usage etc of a container. It is similar to top command in
Linux.
Docker events :Docker events are a command to see the streamof activitiesthat are going on inDocker daemon.
Some ofthe commonDocker events are: attach, commit, die, detach, rename, destroy etc.
We can also use various options to limit or filter the events that we are interested in.
91. What are the Cloud platforms that support Docker?
Some ofthe popular cloud platformsthatsupport Docker are:
I. Amazon AWS
II. Google Cloud Platform
III. Microsoft Azure
IV. IBMBluemix
92. How can we control the startup order of services in Docker compose?
InDocker compose we can use the depends_onoptionto controlthe startup order ofservices.
Withcompose, the services wil start inthe dependencyorder. Dependencies canbe defined inthe optionslike- depends_on, links, volumes_from,
network_mode etc.
But Docker does not wait for until a container isready.
93. Why Docker compose does not wait for a container to be ready before
moving on to start next service in dependency order?
The problemwithwaitingfor a containerto be readyisthat ina Distributed system,some services or hosts maybecome unavailable sometimes.
Similarlyduringstartup also some services mayalso be down.
Therefore, we have to build resiliency in our application. So that even ifsome services are down we can continue our work or wait for the service
to become available again.
We can use wait-for-it or dockerize toolsfor building this kind ofresiliency.
94. How will you customize Docker compose file for different
environments?
InDocker compose there are two files docker-compose.yml and docker-compose.override.yml. We specifyour base configurationindockercompose.ymlfile. For anyenvironmentspecific customizationwe use docker-compose.override.ymlfile.
We can specify a service in both the files. Docker compose wil merge these files based on folowing rules:
Forsingle value options, newvalue replacesthe old value.
Formulti-value options, compose wil concatenate the both set of values.
We canalso use extendsfield to extend a service configurationto multiple environments. Withextends, child services canuse the common
configuration defined by parentservice.
Cloud Computing Questions
95. What are the benefits of Cloud Computing?
There are tenmain benefits ofCloud Computing:
I. Flexibility : The businesses that have fluctuating bandwidth demands need the flexibility of Cloud Computing. If you need high
bandwidth, you can scale up your cloud capacity. When you do not need high bandwidth, you can just scale down. There is no
need to be tied into aninflexible fixed capacityinfrastructure.
II. DisasterRecovery :Cloud Computing providesrobust backup and recovery solutionsthat are hosted in cloud. Due to thisthere
is no need to spend extra resources on homegrowndisasterrecovery. It also savestimeinsettingup disasterrecovery.
III. Automatic Software Updates : Most of the Cloud providers give automatic software updates. This reduces the extra task of
instalingnewsoftware versionand always catchingup withthe latestsoftware instals.
IV. LowCapital Expenditure : In Cloud computing the model is Pay as you Go. This means there is very less upfront capital
expenditure. There is a variable payment that is based on the usage.
V. Collaboration:Ina cloud environment, applications canbe shared betweenteams. Thisincreases colaborationand
communicationamongteammembers.
VI. Remote Work: Cloud solutions provide flexibility of working remotely. There is no on site work. One can just connect from
anywhere and start working.
VII. Security: Cloud computing solutions are more secure than regular onsite work. Data stored in local servers and computers is
prone to security attacks. In Cloud Computing, there are very few loose ends. Cloud providers give a secure working environment
to its users.
VIII. DocumentControl: Once the documents are stored ina commonrepository, itincreasesthe visibilityand transparencyamong
companies and their clients. Since there is one shared copy, there are fewer chances ofdiscrepancies.
IX. Competitive Pricing: InCloud computingthere are multipleplayers,so theykeep competingamongthemselves and provide very
good pricing. This comes outmuchcheaper compared to otheroptions.
X. EnvironmentFriendly: Cloud computing saves precious environmentalresources also. By not blocking the resources and
bandwidth.
96. What is On-demand computing in Cloud Computing?
On-demandComputingisthe latestmodelinenterprise systems. It isrelated toCloud computing. It meansITresources canbe provided on
demand by a Cloud provider.
In an enterprise systemdemand for computing resources varies fromtime to time. In such a scenario, On-demand computing makes sure that
servers and ITresources areprovisioned to handle the increase/decrease indemand.
A cloud providermaintains a pol ofresources. The pool ofresources contains networks, servers, storage, applications and services. Thispool can
serve the varying demand ofresources and computing by various enterprise clients.
There are many concepts like- grid computing, utility computing, autonomic computing etc. that are similar to on-demand computing.
Thisisthe most popular trend in computingmodel as of now.
97. What are the different layers of Cloud computing?
Three main layers ofCloud computing are asfolows:
I. Infrastructure as a Service (IAAS): IAAS providers give low-level abstractions of physical devices. Amazon Web Services
(AWS) is an example of IAAS. AWS provides EC2 for computing, S3 buckets for storage etc. Mainly the resources in this layer
arehardware likememory, processorspeed, network bandwidthetc.
II. Platformas a Service (PAAS): PAAS providers of er managed serviceslike Rails, Django etc. One good example ofPAAS is
Google App Engineer. These are the environmentsinwhichdevelopers candevelop sophisticated software withease.
Developersjust focus on developing software, whereasscaling and performance is handled byPAAS provider.
III. Software as a Service (SAAS) :SAAS provider of er an actualworking software application to clients. Salesforce and Github
are two good examples of SAAS. They hide the underlying details of the software and just provide an interface to work on the
system. Behind the scenesthe version ofSoftware can be easily changed.
98. What resources are provided by Infrastructure as a Service (IAAS)
provider?
An IAAS provider can give physical, virtual or both kinds of resources. These resources are used to build cloud.
IAAS provider handlesthe complexityofmaintainingand deployingthese services.
IAAS provider also handles security and backup recovery for these services. The main resources in IAAS are servers, storage, routers, switches
and other related hardware etc.
99. What is the benefit of Platform as a Service?
Platformas a service (PaaS) is a kind of cloud computing service. A PaaS provider of ers a platformon which clients can develop, run and
manage applicationswithout the need ofbuildingthe infrastructure.
In PAAS clients save time by not creating and managing infrastructure environment associated with the app that they want to develop.
100. What are the main advantages of PaaS?
The advantages ofPaaS are:
I. It alows development work onhigherlevelprogrammingwithveryless complexity.
II. Teams can focus on just the development ofthe application that makes the application very ef ective.
III. Maintenance and enhancement ofthe application is much easier.
IV. It issuitable forsituationsinwhichmultipledevelopers work ona single project but are not co-located.
101. What is the main disadvantage of PaaS?
Biggest disadvantage ofPaaS isthat a developer canonlyuse the toolsthat PaaS providermakes available. A developer cannot use the ful range
ofconventionaltools.
Some PaaS providers lock in the clients in their platform. This also decreases the flexibility of clients using PaaS.
102. What are the different deployment models in Cloud computing?
Cloud computingsupportsfolowing deployment models:
I. Private Cloud: Some companies build their private cloud. A private cloud is a fuly functional platformthat is owned, operated
and used by only one organization.
Primary reason for private cloud is security. Many companies feelsecure in private cloud. The other reasons for building
private cloud are strategic decisions or controlofoperations.
There is also a concept ofVirtualPrivate Cloud (VPC). InVPC, private cloud is built and operated bya hostingcompany.
But itis exclusivelyused byone organization.
II. Public Cloud: There are cloud platforms by some companies that are open for general public as wel as big companies for use and
deployment. E.g. GoogleApps, AmazonWeb Services etc.
The public cloud providers focus on layers and application like- cloud application, infrastructure management etc. In this model
resources are shared amongdiferent organizations.
III. Hybrid Cloud: The combination of public and private cloud is known as Hybrid cloud. This approach provides benefits of both
the approaches- private and public cloud. So it is very robust platform.
A client getsfunctionalities and features ofboth the cloud platforms. ByusingHybrid cloud an organizationcancreate its own
cloud as wel as theycanpass the controloftheir cloud to anotherthird party.
103. What is the difference between Scalability and Elasticity?
Scalabilityisthe abilityofa systemto handle the increased load onits current hardware and software resources. Ina highlyscalable systemitis
possible to increase the workload without increasing the resource capacity. Scalability supports any sudden surge in the demand/traf ic with
currentset ofresources.
Elasticityisthe abilityofa systemto increase the workload byincreasingthe hardware/software resources dynamicaly. Highlyelastic systems can
handle the increased demand and trafic bydynamicalycommissionand decommissionresources. Elasticityis animportant characteristic ofCloud
Computingapplications. Elasticitymeans howwel your architecture is adaptable to workload in real time.
E.g. If in a system, one server can handle 100 users, 2 servers can handle 200 users and 10 servers can handle 1000 users. But in case for adding
everyXusers, ifyouneed 2Xthe amount ofservers, thenitis not a scalabledesign.
Let say, you have just one user login every hour on your site. Your one server can handle thisload. But, if suddenly, 1000 users login at once, can
yoursystemquicklystart newweb servers onthe flyto handle thisload? Your designis elastic ifit canhandle suchsuddenincrease intrafic so
quickly.
104. What is Software as a Service?
Software as Service is a category of cloud computing in which Software is centraly hosted and it is licensed on a subscription basis. It is also
knownas On-demand software. Generaly, clients accessthe software byusinga thin-clientlike a web browser.
Many applicationslike Google docs, Microsoft ofice etc. provide SaaS modelfor theirsoftware.
The benefit ofSaaS isthat a client canadd more users onthe flybased onits current needs. And client does not need to instal ormaintainany
software on its premisesto use thissoftware.
105. What are the different types of Datacenters in Cloud computing?
Cloud computing consists of dif erent types of Datacenters linked in a grid structure. The main types of Datacenters in Cloud computing are:
I. Containerized Datacenter
Asthe name suggests, containerized datacenter provides highlevelofcustomizationfor an organization. These are traditionalkind of
datacenters. We can choose the dif erent types of servers, memory, network and other infrastructure resources in this datacenter. Also
we have to plan temperature control, network management and power management in this kind of datacenter.
II. Low-Density Datacenters
In a Low-densitydatacenter, we get highlevelof performance. In such a datacenterifwe increase the densityofservers, the issue with
power comes. With high density of servers, the area gets heated. In such a scenario, ef ective heat and power management is done. To
reach high levelof performance, we have to optimize the number ofservers’ in the datacenter.
106. Explain the various modes of Software as a Service (SaaS) cloud
environment?
Software as a Service (SaaS) is used to of er dif erent kinds ofsoftware applications in a Cloud environment. Generaly these are of ered on
subscriptionbasis. Diferent modes ofSaaS are:
I. Simple multi-tenancy : In thissetup, each client gets its own resources. These resources are not shared with other clients. It is
more secure option, since there is no sharingofresources. But it anineficient option,since for eachclientmore moneyis needed to
scale it withthe risingdemands. Also it takestime to scale up the applicationin this mode.
II. Fine grain multi-tenancy : In this mode, the feature provided to each client is same. The resources are shared among multiple
clients. It is an eficient mode of cloud service, inwhichdata is kept private amongdif erent clients but computingresources are
shared. Also itis easier and quickerto scale up the SaaS implementationfor diferent clients.
107. What are the important things to care about in Security in a cloud
environment?
In a cloud-computingenvironment,securityis one ofthe most important aspects.
Withgrowingconcernof hacking, everyorganizationwantsto make itssoftware systemand data secure. Since ina cloud computingenvironment,
Software and hardware is not on the premises of an organization, it becomes more important to implement the best security practices.
Organizations have to keep their Data most secure during the transfer between two locations. Also they have to keep data secure when it is stored
at a location. Hackers can hack into application or they can get an unauthorized copy of the data. So it becomes important to encrypt the data
duringtransit aswel as duringrestto protectitfromunwanted hackers.
108. Why do we use API in cloud computing environment?
Application Programming Interfaces (API) is used in cloud computing environment for accessing many services. APIs are very easy to use. They
provide aquick optionto creatediferentset ofapplicationsincloud environment.
AnAPI provides a simple interface that can be used inmultiple scenarios.
There are diferent types ofclientsfor cloud computingAPIs. It is easierto serve diferent needs ofmultiple clients withAPIsincloud computing
environment.
109. What are the different areas of Security Management in cloud?
Diferent areas ofSecuritymanagement in cloud are asfolows:
I. Identity Management : This aspect creates dif erent level of users, roles and their credentials to access the services in cloud.
II. Access Control :Inthis area, we create multiple levelsof permissions and access areasthat canbe givento a user or role for
accessinga service incloud environment.
III. Authentication : In this area, we check the credentials of a user and confirmthat it is the correct user. Generaly this is done by
user password and multi-factor authenticationlike-verificationbya one-time use code oncel phone.
IV. Authorization : In this aspect, we check for the permissions that are given to a user or role. If a user is authorized to access a
service, theyare alowed to use itinthe cloud environment.
110. What are the main cost factors of cloud based data center?
Costsin a Cloud based data center are dif erent froma traditional data center. Main cost factors of cloud based data center are asfolows:
I. Laborcost : We need skiled staf that canwork withthe cloud-based datacenterthat we have selected for our operation. Since
cloud is not a veryold technology, it mayget dificultto get the rightskil people for handlingcloud based datacenter.
II. Power cost : In some cloud operations, power costs are borne by the client. Since it is a variable cost, it can increase with the
increase in scale and usage.
III. Computing cost : The biggest cost in Cloud environment is the cost that we pay to Cloud provider for giving us computing
resources. This cost is much higher compared to the labor or power costs.
111. How can we measure the cloud-based services?
Ina cloud-computingenvironmentwe payforthe servicesthat we use. So maincriteria to measure a cloud based service its usage.
For computingresource we measure by usage in terms oftime and the power of computing resource.
For a storage resource we measure by usage in terms of bytes(giga bytes) and bandwidth used in data transfer.
Another important aspect of measuring a cloud service is its availability. A cloud provider has to specify the service level agreement (SLA) for the
time for which service wil be available incloud.
112. How a traditional datacenter is different from a cloud environment?
In a traditionaldatacenterthe cost ofincreasingthe scale ofcomputingenvironment ismuchhigherthana Cloud computingenvironment. Alsoina
traditional data center, there are not much benefits of scaling down the operation when demand decreases. Since most of the expenditure isin
capitalspent of buying servers etc., scaling down justsaves power cost, whichis very less compared to other fixed costs.
Also in a Cloud environment there is no need to higher a large number of operations staf to maintain the datacenter. Cloud provider takes care of
maintainingand upgradingthe resourcesinCloud environment.
With a traditional datacenter, people cost is very high since we have to hire a large number of technical operation people for in-house datacenter.
113. How will you optimize availability of your application in a Cloud
environment?
In a Cloud environment, it is important to optimize the availability of an application by implementing disaster recovery strategy. For disaster
recoverywe create a backup applicationinanotherlocationofcloud environment. Incase ofcomplete failure at a data center we use the disaster
recovery site to runthe application.
Another aspect of cloud environment is that servers often fail or go down. In such a scenario it is important to implement the application in such a
waythatwe just kil the slowserver and restart anotherserverto handle the trafic seamlessly.
114. What are the requirements for implementing IaaS strategy in Cloud?
Main requirementsto implement IAAS are asfolows:
I. Operating System(OS): We need anOS to support hypervisor in IaaS. We can use open source OS like Linux for this
purpose.
II. Networking : We have to define and implement networking topology for IaaS implementation. We can use public or private
network for this.
III. CloudModel :We have to select the right cloud modelforimplementingIaaS strategy. It canbe SaaS, PaaS orCaaS.
115. What is the scenario in which public cloud is preferred over private
cloud?
In a startup mode often we want to test our idea. In such a scenario it makes sense to setup application in public cloud. It is much faster and
cheaperto use public cloud over private cloud.
Remember security is a major concern in public cloud. But with time and changes in technology, even public cloud is very secure.
116. Do you think Cloud Computing is a software application or a
hardware service?
CloudComputingis neither a software applicationnor a hardware service. Cloud computingis a systemarchitecture that canbe used to implement
software as wel as hardware strategyofanorganization.
Cloud Computing is a highly scalable, highly available and cost ef ective solution for software and hardware needs of an application.
CloudComputingprovides great ease ofuse inrunningthe software incloud environment. It is also veryfast to implement compared withany
other traditionalstrategy.
117. Why companies now prefer Cloud Computing architecture over
Client Server Architecture?
InClient Server architecture there is one to one communicationbetweenclient and server. Serveris oftenat in-house datacenter and client can
access same server fromanywhere. If client is at a remote location, the communicationcan have highlatency.
In Cloud Computing there can be multiple servers in the cloud. There wil be a Cloud controler that directs the requests to right server node. In
such a scenario clients can access cloud-based service fromany location and they can be directed to the one nearest to them.
Another reason for Cloud computing architecture is high availability. Since there are multiple servers behind the cloud, even if one server is down,
anotherserver can serve the clientsseamlessly.
118. What are the main characteristics of Cloud Computing architecture?
Main characteristics ofCloud Computing architecture are asfolows:
I. Elasticity :InCloud Computingsystemis highlyelastic inthe sense thatit caneasilyadapt itselfto increase or decrease inload.
There is no need to takeurgent actionswhenthere issurge intrafic requests.
II. Self-service provisioning :InCloud environment users can provision newresources on their own by just caling some APIs.
There is no need to fil forms and order actualhardware fromvendors.
III. Automatedde-provisioning :In case demand/load decreases, extra resources can be automaticaly shut down inCloud
computing environment.
IV. Standard Interface : There are standard interfaces to start, stop, suspend or remove an instance in Cloud environment. Most of
the services are accessibleviapublic and standardAPIsinCloud computing.
V. Usage based Billing : In a Cloud environment, users are charged for their usage of resources. They can forecast their bil and
costs based onthe growththeyare expectingintheirload.
119. How databases in Cloud computing are different from traditional
databases?
In a Cloud environment, companies often use dif erent kind of data to store. There are data like email, images, video, pdf, graph etc. in a Cloud
environment. To store this data oftenNoSQLdatabases are used.
A NoSQLdatabase likeMongoDBprovidesstorage and retrievalofdata that cannot be stored eficientlyina traditionalRDBMS.
Database likeNeo4J providesfeaturesto store graphdata like Facebook, LinkedInetc. ina cloud environment.
Hadoop like database help in storing Big Data based information. It can handle very large-scale information that is generated in a large-scale
environment.
120. What is Virtual Private Network (VPN)?
In a Cloud environment, we can create a virtual private network (VPM) that can be solely used by only one client. This is a secure network in
whichdata transfer betweenservers ofsame VPN is verysecure.
By using VPN, an organization uses the public network in a private manner. It increases the privacy of an organization’s data transfer in a cloud
environment.
121. What are the main components of a VPN?
VirtualPrivate Network (VPN) consists offolowingmain components:
I. Network Access Server (NAS): ANAS server isresponsible for setting up tunnelsin a VPN that is accessesremotely. It
maintainsthese tunnelsthat connect clientsto VPN.
II. Firewall:It isthe software that creates barrier betweenVPN and public network. It protectsthe VPN frommalicious activitythat
can be done fromthe outside network.
III. AAAServer: Thisis anauthenticationand authorizationserverthat controlsthe access and usage ofVPN. For eachrequest to
use VPN, AAAserver checksthe userfor correct permissions.
IV. Encryption:In a VPN, encryption algorithms protect the important private data frommalicious users.
122. How will you secure the application data for transport in a cloud
environment?
Withease ofuse inCloud environment comesthe important aspect ofkeepingdata secure. Manyorganizations have data that istransferred from
theirtraditionaldatacenterto Cloud datacenter.
During the transit of data it is important to keep it secure. Once of the best way to secure data is by using HTTPS protocol over Secure Socket
Layer (SSL).
Anotherimportant point isto keep the data always encrypted. This protects data frombeingaccessed byanyunauthorized user duringtransit.
123. What are the large-scale databases available in Cloud?
In Cloud computing scale is not a limit. So there are very large-scale databases available fromcloud providers. Some of these are:
I. AmazonDynamoDB :AmazonWeb Services(AWS) provides a NoSQLweb service caled DynamoDBthat provides highly
available and partition tolerant database system. It has a multi-master design. It uses synchronous replication across multiple
datacenters. We caneasilyintegrate it withMapReduce and ElasticMapReduce ofAWS.
II. Google Bigtable : This is a very large-scale high performance cloud based database option fromGoogle. It is available on Google
Cloud. It canbe scaled to peta bytes. It is a Google proprietaryimplementation. InBigtable, two arbitrarystringvalues, rowkey
and column key, and timestamp are mapped to an arbitrary byte array. In Bigtable MapReduce algorithmis used for modifying and
generating the data.
III. Microsoft Azure SQLDatabase :Microsoft Azure provides cloud based SQLdatabase that can be scaled very easily for
increased demand. It has verygood securityfeatures and it canbe evenused to buildmulti-tenant apps to service multiple
customersin cloud.
124. What are the options for open source NoSQL database in a Cloud
environment?
Most ofthe cloud-computingproviderssupport OpenSource NoSQL databases. Some ofthese databases are:
I. Apache CouchDB :It is a document based NoSQLdatabase fromApache OpenSource. It is compatible withCouch
ReplicationProtocol. It can communicate in native JSON and can store binary data verywel.
II. HBase :It is a NoSQLdatabase for use withHadoop based software. It is also available as OpenSource fromApache. It is a
scalable and distributedBigData database.
III. MongoDB :It is anopensource database systemthat of ers a flexibledata modelthat canbe used to store various kinds ofdata.
It provides highperformance and always-onuser experience.
125. What are the important points to consider before selecting cloud
computing?
Cloud computing is a very good option for an organization to scale and outsource its software/hardware needs. But before selecting a cloud
providerit isimportantto considerfolowingpoints:
I. Security : One of the most important points is security of the data. We should ask the cloud provider about the options to keep
data secure incloud duringtransit and atrest.
II. Data Integrity :Anotherimportant point isto maintainthe integrityofdata incloud. It is essentialto keep data accurate and
complete in cloud environment.
III. Data Loss :Ina cloud environment, there are chances ofdata loss. So we should knowthe provisionsto minimizethe data loss. It
canbe done bykeepingbackup ofdata incloud. Also there should be reliable data recoveryoptionsincase ofdata loss.
IV. Compliance : While using a cloud environment one must be aware of the rules and regulations that have to be folowed to use the
cloud. There compliance issues with storing data of a user in an external provider’slocation/servers.
V. Business Continuity :Incase ofanydisaster, itis important to create business continuityplans so that we canprovide
uninterrupted service to our end users.
VI. Availability : Anotherimportant point isthe availabilityofdata and services ina cloud-computingenvironment. It is veryimportant
to provide highavailabilityfor a good customer experience.
VII. Storage Cost: Since data isstored incloud, it maybe verycheap to store the data. But the real cost cancome intransfer ofdata
when we have to pay by bandwidth usage. So storage cost of data in cloud should also include the access cost of data transfer.
VIII. ComputingCost:One ofthe highest costs ofcloud is computingcost. It canbe veryhighcost withthe increase ofscale. So
cloud computingoptionsshould be wiselyconsidered inconjunctionwithcomputingcost charged forthem.
126. What is a System integrator in Cloud computing?
Often an organization does not know al the options available in a Cloud computing environment. Here comes the role of a SystemIntegrator (SI)
who specializesinimplementingCloud computingenvironment.
SI createsthe strategyofcloud setup. It designs the cloud platformforthe use ofits client. It createsthe cloud architecture forthe business need of
client.
SI overseesthe overal implementationofcloud strategyand plan. It also guidesthe clientwhile choosingthe right optionsincloud computing
platform.
127. What is virtualization in cloud computing?
Virtualization is the core of cloud computing platform. In cloud we can create a virtual version of hardware, storage and operating systemthat can
be used to deploythe application.
A cloud provider gives optionsto create virtualmachinesincloud that can be used by its clients. These virtualmachines are muchcheaperthan
buyinga fewhigh end computingmachines.
Incloud we canuse multiple cheap virtualmachinesto implement a resilientsoftware systemthat canbe scaled veryeasilyinquick time. Where as
buyingan actualhigh-end machine to scale the systemis very costly and time taking.
128. What is Eucalyptus in a cloud environment?
Eucalyptusis an open source software to build private and hybrid cloud inAmazonWeb Services(AWS).
It stands for Elastic Utility Computing Architecture for Linking Your Programs To Useful Systems.
We can create our own datacenter in a private cloud by using Eucalyptus. It makes use of pooling the computing and storage resources to scale up
the operations.
InEucalyptus, we create images ofsoftware applications. These images are deployed to create instances. These instances are used for computing
needs.
AEucalyptusinstance can have both public and private ip addresses.
129. What are the main components of Eucalyptus cloud architecture?
The main components ofEucalyptus cloud architecture are asfolows:
I. Cloud Controller (CLC) : Thisis the controler that manages virtual resources like servers, network and storage. It is at the
highest level in hierarchy. It is a Java programwith web interface for outside world. It can do resource scheduling as wel as
systemaccounting. There is only one CLC per cloud. It can handle authentication, accounting, reporting and quota management in
cloud.
II. Walrus : This is another Java programin Eucalyptus that is equivalent to AWS S3 storage. It provides persistent storage. It also
containsimages, volumes and snapshotssimilarto AWS. There is only one Walrusin a cloud.
III. Cluster Controller (CC) : It is a C programthat is the front end for a Eucalyptus cloud cluster. It can communicate with Storage
controler and Node controler. It managesthe instance execution in cloud.
IV. Storage Controller(SC):It is a Java programequivalent to EBSinAWS. It caninterface withClusterControler and Node
Controlertomanage persistent data viaWalrus.
V. Node Controller (NC) : It is a C programthat can host a virtual machine instance. It is at the lowest level in Eucalyptus cloud. It
downloadsimagesfromWalrus and creates aninstance for computingrequirementsincloud.
VI. VMWare Broker : It is an optional component in Eucalyptus. It provides AWS compatible interface to VMWare environment.
130. What is Auto-scaling in Cloud computing?
Amazon Web Services (AWS) provides an important feature caled Auto-scaling in the cloud. With Auto-scaling setup we can automaticaly
provisionand start newinstances inAWS cloud without anyhumanintervention.
Auto-scaling istriggered based on load and other metrics.
Let say ifthe load reaches a threshold we can setup auto-scaling to kick in and start a new server to handle additional load.
131. What are the benefits of Utility Computing model?
Utility computing is a cloud service model in which provider gives computing resources to users for using on need basis.
Some ofthe main benefits ofUtility computingare:
I. Pay per use : Since a user pays for only usage, the cost of Utility computing is pay per use. We pay for the number of servers of
instancesthat we use incloud.
II. Easy to Scale : It is easier to scale up the operations in Utility computing. There is no need to plan for time consuming and costly
hardware purchase.
III. Maintenance : In Utility computing maintenance of servers is done by cloud provider. So a user can focus on its core business. It
need notspend time and resources onmaintenance ofserversincloud.
Utilitycomputingis also known as On-demand computing.
132. What is a Hypervisor in Cloud Computing?
Hypervisor is also known as virtual machine monitor (VMM). It is a computer software/hardware that can create and run virtual machines.
Hypervisorruns on a host machine. Each virtualmachine is caled Guest machine.
Hypervisor derives its name fromtermsupervisor, which is a traditional name for the kernel of an operating system.
Hypervisor provides a virtual operating platformto the guest operating system. It manages the execution of guest OS.
133. What are the different types of Hypervisor in Cloud Computing?
Hypervisors come in two main types:
I. Type-1, native orbare-metal hypervisors :Type 1 hypervisor runs directly on the hardware of host machine. It controlsthe
guest operating systemfromhost machine. It is also caled bare metal hypervisor or native hypervisor.
Examples of Type-1 are:Xen, Oracle VM Server for SPARC, Oracle VM Server for x86, the CitrixXenServer, Microsoft
Hyper-Vand VMware ESX/ESXi.
II. Type-2, hosted hypervisors: Type 2 hypervisor runs like a regular computer programon an operating system. The guest
operating systemrunslike a process on the host machine. It creates an abstract guest operating systemdif erent fromthe host
operating system.
Examples of Type-2 are:VMware Workstation, VMware Player, VirtualBox, Paralels Desktop for Mac and QEMU are
examples oftype-2 hypervisors.
134. Why Type-1 Hypervisor has better performance than Type-2
Hypervisor?
Type-1 Hypervisor has better performance thanType-2 hypervisor because Type-1 hypervisorskipsthe host operating systemand it runs directly
onhost hardware. So it canutilize al the resources ofhostmachine.
In cloud computing Type-1 hypervisors are more popular since Cloud servers may need to run multiple operating systemimages.
135. What is CaaS?
CaaS is also known as Communication as a Service. It is available in Telecomdomain. One of the examples for CaaS is Voice Over IP (VoIP).
CaaS of ers businessfeatureslike desktop cal control, unified messaging, and fax via desktop.
CaaS also provides services for Cal Center automation like- IVR, ACD, cal recording, multimedia routing and screen sharing.
136. How is Cloud computing different from computing for mobile
devices?
SinceMobile devices are gettingconnected to the Internet inlarge numbers, we oftenuse Cloud computingfor Mobile devices.
In mobile applications, there can be sudden increase in traf ic as wel as usage. Even some applications become viral very soon. This leads to very
high load onapplication.
In such a scenario, it makessense to use Cloud Computing for mobile devices.
Also mobile devices keep changingovertime, itrequires standard interfaces ofcloud computingfor handlingmultiplemobile devices.
137. Why automation of deployment is very important in Cloud
architecture?
One of the main reasons for selecting Cloud architecture is scalability of the system. In case of heavy load, we have to scale up the systemso that
there is no performance degradation.
While scaling up the systemwe have to start new instances. To provision new instances we have to deploy our application on them.
In such a scenario, if we want to save time, it makes sense to automate the deployment process. Another termfor this is Auto-scaling.
With a fuly automated deployment process we can start new instances based on automated triggers that are raised by load reaching a threshold.
138. What are the main components in Amazon Cloud?
Amazon provides a wide range of products in Amazon Web Services for implementing Cloud computing architecture. In AWS some of the main
components are asfolows:
I. Amazon EC2 : This is used for creating instances and getting computing power to run applications in AWS.
II. Amazon S3 : This is a Simple Storage Service fromAWS to store files and media in cloud.
III. AmazonDynamoDB :It isthe database solution byAWS in cloud. It can store very large-scale data to meet needs ofeven
BigData computing.
IV. AmazonRoute53 :Thisis a cloud based DomainName System(DNS)service fromAWS.
V. AmazonElastic LoadBalancing (ELB): This component can be used to load balance the various nodesinAWS cloud.
VI. AmazonCodeDeploy :Thisservice providesfeature to automate the code deployment to any instance inAWS.
139. What are main components in Google Cloud?
Google is a newer cloud alternative than Amazon. But Google provides many additional features than AWS. Some of the main components of
GoogleCloud are asfolows:
I. Compute Engine :This component provides computing power to Google Cloud users.
II. Cloud Storage : As the name suggests this is a cloud storage solution fromGoogle for storing large files for application use or just
serving over the Internet.
III. CloudBigtable :It is a Google proprietarydatabase fromGoogle inCloud. Nowusers canuse this unique database for creating
their applications.
IV. CloudLoadBalancing :Thisis a cloud-based load balancing service fromGoogle.
V. BigQuery :It is a data-warehouse solution fromGoogle inCloud to performdata analytics oflarge scale.
VI. Cloud Machine Learning Platform : It is a powerful cloud based machine learning product fromGoogle to perform machine
learningwithAPIslike- Job Search, Text Analysis, SpeechRecognition, Dynamictranslationetc.
VII. Cloud IAM : This is an Identity and Access management tool fromGoogle to help administrators run the security and
authorization/authenticationpolicies ofanorganization.
140. What are the major offerings of Microsoft Azure Cloud?
Microsoft is a relatively new entrant to Cloud computing with Azure cloud of ering. Some of the main products of Microsoft cloud are as folows:
I. Azure Container Service : This is a cloud computing service fromMicrosoft to run and manage Docker based containers.
II. StorSimple :It is a Storage solution fromMicrosoft for Azure cloud.
III. AppService :By usingApp Services, users can create Appsfor mobile devices as wel as websites.
IV. SQLDatabase :It is a Cloud based SQLdatabase fromMicrosoft.
V. DocumentDB :Thisis a NoSQLdatabase in cloud byMicrosoft.
VI. Azure Bot Service : We canuse AzureBot Service to create serverless botsthat canbe scaled up ondemand.
VII. Azure IoTHub:It is a solutionforInternet ofThingsservicesincloud byMicrosoft.
141. What are the reasons of popularity of Cloud Computing
architecture?
These days Cloud Computingis one ofthe mostfavorite architecture amongorganizationsfortheirsystems. Folowingare some ofthe reasonsfor
popularityofCloudComputingarchitecture:
I. IoT: Withthe Internet ofThings, there are manytypes ofmachinesjoiningthe Internet and creatingvarious types ofinteractions. In
sucha scenario, Cloud Computingserves wel to provide scalable interfaces to communicate betweenthe machinesinIoT.
II. Big Data : Another major trend in today’s computing is Big Data. With Big Data there is very large amount of user / machine data
that is generated. Using in-house solution to handle Big Data is very costly and capital intensive. In Cloud Computing we can
handleBigDataveryeasilysincewedo not have toworryabout capitalcosts.
III. Mobile Devices : A large number of users are going to Mobile computing. With a mobile device users can access a service from
anylocation. To handlewide-varietyofmobile devices,standard interfaces ofCloud Computingare veryuseful.
IV. ViralContent:WithgrowthofSocialMedia, content and media is gettingvirali.e. It takes veryshort time to increase the trafic
exponentialy on a server. In such a scenario Auto-scaling of Cloud Computing architecture can handle such spikes very easily.
142. What are the Machine Learning options from Google Cloud?
Google provides a very rich library ofMachine Learning optionsinGoogle Cloud. Some ofthese API are:
I. Google Cloud ML : This is a general purpose Machine Learning API in cloud. We can use pre-trained models or generate new
modelsformachine learningwiththis option.
II. Google Cloud Jobs API : It is an API to link Job Seekers with Opportunities. It is mainly for job search based on skils, demand
and location.
III. Google NaturalLanguage API :ThisAPI cando text analysis ofnaturallanguage content. We canuse itfor analyzingthe
content ofblogs, websites, books etc.
IV. Google Cloud Speech API : It is a Speech Recognition API fromGoogle to handle spoken text. It can recognize more than 80
languages and theirrelated variants. It caneventranscribe the userspeechintowrittentext.
V. Google CloudTranslate API :This API cantranslate contentfromone language to anotherlanguage incloud.
VI. Google Cloud Vision API : It is a powerful API for Image analysis. It can recognize faces and objects in an image. It can even
categorize imagesinmultiple relevant categorieswitha simpleRESTAPIcal.
143. How will you optimize the Cloud Computing environment?
In a Cloud Computing environment we pay by usage. In such a scenario our usage costs are much higher. To optimize the Cloud Computing
environmentwe have to keep abalance betweenourusage costs and usage.
Ifwe are payingfor computinginstances we canchoose optionslikeLambda inAWS, whichis a muchcheaper optionsfor computingincloud.
Incase ofStorage, ifthe data to be stored is not goingto be accessesfrequentlywe can go forGlacier optioninAWS.
Similarly when we pay for bandwidth usage, it makes sense to implement a caching strategy so that we use less bandwidth for the content that is
accessed very frequently.
It is a chalenging task for an architect in cloud to match the options available in cloud with the budget that an organization has to run its
applications.
Optimizations like server-less computing, load balancing, and storage selection can help in keeping the Cloud computing costs low with no
degradation inUser experience.
144. Do you think Regulations and Legal Compliance is an important
aspect of Cloud Computing?
Yes, in Cloud Computing we are using resources that are owned by the Cloud provider. Due to this our data resides on the servers that can be
shared by other users ofCloud.
There are regulations and laws for handling user data. We have to ensure that these regulations are met while selecting and implementing a Cloud
computing strategy.
Similarly, if we are in a contract with a client to provide certain Service Level Agreement (SLA) performance, we have to implement the cloud
solutionin such a way that there is no breach ofSLAagreement due to Cloud provider’sfailures.
For security there are laws that have to be folowed irrespective of Cloud or Co-located Data center. This is in the interest of our end-customer as
wel asforthe benefit ofbusiness continuity.
With Cloud computing architecture we have to do due diligence in selecting Security and Encryption options in Cloud.
Unix Questions
145. How will you remove all files in current directory? Including
the files that are two levels down in a sub-directory.
In Unix we have rmcommand to remove files and sub-directories. With rmcommand we have –r option that stands for recursive. The –r option
can delete al filesin a directory recursively.
It meansifwe our current directory structure is asfolows:
My_dir
->Level_1_dir
-> Level_1_dir ->Level_2_dir
-> Level_1_dir->Level_2_dir->a.txt
Withrm–r * commandwe candelete the file a.txt as wel as sub-directories Level_1_dir and Level_2_dir.
Command:
rm– r *
The asterisk (*)is a wildcard characterthatstandsfor al the files withanyname.
146. What is the difference between the –v and –x options in Bash shell
scripts?
In a BASH Unix shel we can specify the options –v and –x on top of a script as folows:
#!/bin/bash -x –v
With –x option BASH shel wil echo the commandslike for, select, case etc. after substituting the arguments and variables. So it wil be an
expanded formofthe command thatshows al the actions ofthe script. It is veryusefulfor debugginga shel script.
With –v option BASH shel wil echo every command before substituting the values of arguments and variables. In –v option Unix wil print each
line asit reads.
In –voption, Ifwe runthe script, the shel prints the entire file and thenexecutes. Ifwe runthe script interactively, itshows eachcommand after
pressing enter.
147. What is a Filter in Unix command?
InUnix there are manyFilter commandslike- cat, awk, grep, head, tail cut etc.
AFilter is a software programthat takes an input and produces an output, and it can be used in a streamoperation.
E.g. cut -d :-f 2 /etc/passwd | grep abc
We canmixand matchmultiple filtersto create a complexcommand that cansolve a problem.
Awk and Sed are complexfiltersthat provide fulyprogrammable features.
EvenData scientists use Unixfiltersto get the overviewofdata stored inthe files.
148. What is Kernel in Unix operating system?
Kernelisthe central core component of a Unix operating system(OS).
AKernelisthe main component that can control everythingwithinUnixOS.
It is the first programthat is loaded on startup of Unix OS. Once it is loaded it wil manage the rest of the startup process.
Kernelmanages memory, scheduling as wel as communicationwith peripheralslike printers, keyboards etc.
But Kernel does not directly interact with a user. For a new task, Kernel wil spawn a shel and user wil work in a shel.
Kernelprovides manysystemcals. A software programinteracts withKernelby usingsystemcals.
Kernelhas a protected memoryarea that cannot be overwrittenaccidentalybyanyprocess.
149. What is a Shell in Unix OS?
Shel inUnixis a user interface that is used by a user to access Unix services.
Generaly a Unix Shel is a command line interface (CLI) in which users enter commands by typing or uploading a file.
We use a Shel to run diferent commands and programs onUnix operating system.
A Shel also has a command interpreter that can take our commands and send these to be executed by Unix operating system.
Some ofthe popular Shels onUnix are:Korn shel, BASH, C shel etc.
150. What are the different shells in Unix that you know about?
Unix has many flavors ofShel. Some ofthese are asfolows:
Bourne shel: We use sh for Bourne shel.
Bourne Again shel: We use bash to run thisshel.
Kornshel:We canuse kshto for Kornshel.
Zshel:The command to use thisis zsh
C shel:We use cshto runC shel.
EnhancedC shel:tcshisthe command for enhancedC shel.
151. What is the first character of the output in ls –l command ?
We use ls -l command to list the files and directories in a directory. With -l option we get long listing format.
In this format the first character identifies the entry type. The entry type can be one of the folowing:
b Block specialfile
c Character special file
d Directory
l Symbolic link
s Socket link
p FIFO
- Regularfile
Ingeneralwe see d for directoryand - for a regular file.
152. What is the difference between Multi-tasking and Multi-user
environment?
In a Multi-taskingenvironment,same user cansubmitmore thanone tasks and operatingsystemwil execute themat the same time.
In a Multi-user environment, more thanone user caninteract withthe operatingsystemat the same time.
3. What isCommand SubstitutioninUnix?
Command substitution is a mechanismby which Shel passes the output of a command as an argument to another command. We can even use it to
set a variable or use an argument listina forloop.
E.g. rm`cat files_to_delete`
Inthis example files_to_delete is a file containingthe list offilesto be deleted. cat command outputs thisfile and givesthe output to rmcommand.
rmcommand deletesthe files.
In generalCommand Substitution isrepresented by back quotes`.
153. What is an Inode in Unix?
AnInode is a Data Structure inUnixthat denotes a fileor a directoryonfile system. It contains informationaboutfilelike- locationoffileonthe
disk, access mode, ownership, file type etc.
EachInode has a number that is used inthe indextable. UnixkernelusesInode numberto accessthe contents ofan Inode.
We can use ls-i command to get the inode number of a file.
154. What is the difference between absolute path and relative path in
Unix file system?
Absolute path is the complete path of a file or directory fromthe root directory. In generalroot directory is represented by / symbol. If we are in a
directoryand want to knowthe absolutepath, we canusepwd command.
Relative pathisthe pathrelative the current locationindirectory.
E.g. In a directory structure /var/user/kevin/mail if we are in kevin directory then pwd command wil give absolute path as /var/user/kevin.
Absolute pathofmailfolderis/var/user/kevin/mail. Formailfolder./mailisthe relative pathofmaildirectoryfromkevinfolder.
155. What are the main responsibilities of a Unix Shell?
Some ofthe main responsibilities of a UnixShel are asfolows:
1. Program Execution: A shel is responsible for executing the commands and script files in Unix. User can either interactively enter the commands
inCommandLineInterface caled terminalortheycanruna scriptfile containingaprogram.
2. Environment Setup: A shel can define the environment for a user. We can set many environment variables in a shel and use the value of these
variablesin our program.
3. Interpreter: A shel acts as an interpreter for our scripts. It has a built in programming language that can be used to implement the logic.
4. Pipeline: A shel also can hookup a pipeline of commands. When we run multiple commands separated by | pipe character, the shel takes the
output ofa command and passesitto next one inthe pipeline.
5. I/O Redirection: Shel is also responsible for taking input fromcommand line interface (CLI) and sending the output back to CLI. We use >, <,
>> charactersforthis purpose.
156. What is a Shell variable?
A UnixShel variable is an internal variable that a shel maintains. It is local to that Shel. It is not made available to the parent shel or child shel.
We generalyuse lower case namesforshel variables inC shel.
We can set the value of a shel variable by set command.
E.g. % set max_threads=10
To delete a Shel variable we can use unset command.
To use a Shel variable in a script we use $ sign in front of the variable name.
E.g. echo $max_threads
157. What are the important Shell variables that are initialized on starting
a Shell?
There are folowing important Shel variables that are automaticaly initialized when a Shel starts:
user:
term:
home:
path:
These Shel variables take values fromenvironment variables.
Ifwe change the value ofthese Shel variablesthenthe correspondingenvironment variable value is also changed.
158. How will you set the value of Environment variables in Unix?
We canuse 'setenv' command to set the value ofenvironment variables.
E.g. % setenv [Name] [value]
% setenv MAX_TIME10
To print the value ofenvironment variable we canuse 'printenv' command.
E.g. % printenvMAX_TIME
Ifwe just use printenvthenitlists al the environment variables and their values.
To unset or delete an environment variable we use unsetenv command.
E.g. % unsetenv MAX_TIME
To use an environment variable in a command we use the prefix $ with the name of variable.
What isthe specialrule about Shel and Environment variable inBourne Shel?
InBourne Shel, there is not much dif erence betweenShel variable and Environment variable.
Once we start a Bourne Shel, it getsthe value ofenvironment variables and defines a correspondingShel variable. Fromthat timeonwardsthe
shel only refers to Shel variable. But if a change is made to a Shel variable, then we have to explicitly export it to environment so that other shel
or child processes can use it.
Also for Shel variables we use set and unset commands.
159. What is the difference between a System Call and a library function?
Systemcals are low-level kernel cals. These are handled by the kernel. Systemcals are implemented in kernel ofUnix. An application hasto
execute specialhardware and systemdependentinstructionto runaSystemcal.
A library function is also a low level cal but it is implemented in user space. A library cal is a regular function cal whose code resides in a shared
library.
160. What are the networking commands in Unix that you have used?
Some ofthe popular networking commandsinUnix that we use are as folows:
I. ping :We use this command to test the reachability of a host on an Internet Protocol(IP) network.
II. telnet : This is another useful command to access another machine on the network. This is command uses Telnet protocol.
III. tracert : This is short for Traceroute. It is a diagnostic command to display the route and transit delays of packets across Internet
Protocol.
IV. ftp:We use ftp commandsto transfer files over the network. ftp uses File Transfer Protocol.
V. su : This unix command is used to execute commands with the privileges of another user. It is also known as switch user, substitute
user.
VI. ssh : This is a secure command that is preferred over Telnet for connecting to another machine. It creates a secure channel over an
unsecured network. It uses cryptographic protocolto make the communication secure.
161. What is a Pipeline in Unix?
A Pipeline inUnixis a chainofcommandsthat are connected througha streaminsucha waythat output of one command becomesinputfor
another command.
E.g. ls –l | grep “abc” | wc –l
Inthe above example we have created pipeline ofthree commandsls, grep and wc.
First ls –l command is executed and gives the list of files in a directory. Then grep command searches for any line with word “abc” in it. Finaly wc
–l command countsthe numberoflinesthat are returned bygrep command.
In general a Pipeline is uni-directional. The data flowsfromleft to right direction.
162. What is the use of tee command in Unix?
We use tee command in a shel to read the input by user (standard input) and write it to screen (standard output) as wel as to a file.
We canuse tee command to split the output ofa programso that itis visible oncommand line interface (CLI) as wel as stored ona file forlater
use.
Syntax istee [-a] [-i] [file …]
163. How will you count the number of lines and words in a file in Unix?
We can use wc (word count) command for counting the number of lines and words in a file. The wc command provides very good options for
colectingstatistics ofa file. Some ofthese options are:
l:This optiongivesline count
m:This optiongives character count
c :This optiongives byte count
w:This optiongives word count
L:This optiongivesthe lengthofthe longest line
In case we give more than one files as input to wc command then it gives statistics for individualfiles as wel as the totalstatistics for al files.
164. What is Bash shell?
Bash standsfor Bourne AgainShel. It isfree software written to replace Bourne shel.
We can see folowing line in shel scriptsfor Bash shel.
#!/bin/bash
InBashwe use ~/.profile at loginto set environment variables.
InBashwe canexecute commandsinbatchmode or concurrent mode.
Inbatchmode commands are separated bysemi colon.
% command1; command2
Inconcurrent mode we separate commands by&symbol.
% command1 & command2
165. How will you search for a name in Unix files?
We can use grep command to search for a name or any text in a Unix file.
Grep standsfor Globaly search a Regular Expression and Print.
Grep command cansearch for a text inone file as wel as multiple files.
We can also specify the text to be searched in regular expression pattern.
% grep ^z *.txt
Above command searches for lines starting with letter z in al the .txt files in current directory.
166. What are the popular options of grep command in Unix?
In Unix, grep is one of the very useful commands. It provides many useful options. Some of the popular options are:
% grep –i :This optionignores case while doing search.
% grep –x :This optionis used to search exact word in a file.
% grep –v:We use this optionto find the linesthat do not have the text we are searching.
% grep –A10:This optiondisplays 10 lines after the match isfound.
% grep –c:We can use it to count the number ofmatching lines.
167. What is the difference between whoami and who am i commands in
Unix?
Both the commands whoami and who ami are used to get the user information inUnix.
Whenwe login asroot user on the network, then bothwhoami and who ami commands wil showthe user asroot.
But when any other user let say john logs in remotely and runs su –root, whoamiwil show root, but who ami wil show the original user john.
168. What is a Superuser in Unix?
Superuser is a special user account. It is used for Unix systemadministration. This user can access al files on the file system. Also Superuser can
also run any command ona system.
GeneralySuperuser permission is given to root user.
Most of the users work on their own user accounts. But when they need to run some additional commands, they can use su to switch to Superuser
account.
It is a best practice to not use Superuser account for regular operations.
169. How will you check the information about a process in Unix?
We can use ps command to check the status of a processinUnix. It is short for Process Status.
On runningps commandwe get the list ofprocessesthat are executinginthe Unixenvironment.
Generalywe use ps –ef command. In this e standsfor every process and fstandsfor ful format.
This command gives usid ofthe process. We canuse thisid to kil the process.
170. What is the use of more command with cat command?
We generalyuse cat command to displaythe contents ofa file.
Ifa fileis verybigthenthe contents ofthe filewil notfitinscreen, therefore screenwil scrol forward and inthe end we justsee the last page of
information froma file.
Withmore commandwe can pause the scrolingofdata froma file indisplay. Ifwe use cat command withmore thenwe justsee the first page ofa
file first. Onpressingenter button, more commandwil keep changingthe page. Inthis wayitis easierto viewinformationina file.
When using the cat command to display file contents, large data that does not fit on the screen would scrol of without pausing, therefore making it
dificultto view. On the other hand, usingthe more command is more appropriate insuchcase because it wil displayfile contents one screenpage
at a time.
171. What are the File modes in Unix?
InUnix, there are three mainpermissionsfor a File.
I. r = It means a user can read the file
II. w= It meansthat a user canwrite to thisfile
III. x= It meansthe a user can execute a file like a shel script
Furtherthere are three permissionsets.
I. Owner:User who created the file
II. Group:This appliesto user of a group to which owner belongs
III. Other:Thisisrest ofthe usersinUnix system
Withthe combinationofthese three sets permissions offileinUnixare specified.
E.g. Ifa filehas permissions –rwxr-xr-- , itmeansthat owner hasread, write, execute access. Group hasread and execute access. Others have
just read access. So the owner or admin hasto specificaly grant access to Othersto execute the file.
172. We wrote a shell script in Unix but it is not doing anything. What
could be the reason?
Afterwritinga shel script we have to give it execute permissionso thatit can be runinUnixshel.
We canuse chmod command to change the permissionofa fileinUnix.Ingeneralwe use chmod+xto give execute permissionto usersfor
executing the shel script.
E.g. chmod+x abc.txt wil give execute permissionto usersfor executingthe file abc.txt.
With chmod command we can also specify to which user/group the permission should be granted. The options are:
173. u isthe owner user
174. g isthe owner group
175. o is others
176. a is al users
177. What is the significance of 755 in chmod 755 command?
We use chmod command to change the permissions of a file in Unix. In this command we can pass the file permissions in the formof a three-digit
number.
In this number 755, first digit 7 is the permissions given to owner, second digit 5 is the permissions of group and third digit 5 is the permissions of
al others.
Also the numbers 7 and 5 are made fromfolowing rules:
4 = read permission
2 = write permission
1 = execute permission
So 7 = 4 + 2 + 1 = Read + Write + Execute permission
5 = 4 + 1 = Read + Execute permission
In out example 755 means, owner hasread, write and execute permissions. Group and others have read and execute permissions.
178. How can we run a process in background in Unix? How can we kill a
process running in background?
InUnix shel we can use symbol& to run a command in background.
E.g. % ls –lrt &
Once we use & option it runs the process in background and prints the process ID. We cannot down this process ID for using it in kil command.
We can also use ps –efcommand to get the processIDof processesrunning in background.
Once we knowthe processID of a process we can kil it by folowing command:
% kil -9 processId
179. How will you create a read only file in Unix?
We can create a file with Vi editor, cat or any other command. Once the file is created we have to give read only permissions to file. To change file
permissionto read onlywe use folowingcommand:
%chmod 400 filename
180. How does alias work in Unix?
We use alias in Unix to give a short name to a long command. We can even use it to combine multiple commands and give a short convenient
name.
E.g. alias c=’clear’
Withthis alias we just need to type c for runningclear command.
In bashwe store aliasin .bash_profile file.
To get the list of al active alias in a shel we can run the alias command without any argument on command line.
% alias
alias h='history'
alias ki='kil -9'
aliasl='last'
181. How can you redirect I/O in Unix?
In Unix we can redirect the output of command or operation to a file instead of command line interface (CLI). For this we sue redirection pointers.
These are symbols > and >>.
Ifwe want to write the output ofls –lrt command to a file we use folowing:
%ls –lrt > fileList.txt
Ifwe want to copy one file to another file we use folowing:
% catsrcFile > copyFile
Ifwe want to append the contents ofone file at the end ofanotherfilewe use folowing:
% catsrcFile >> appendToFile
182. What are the main steps taken by a Unix Shell for processing a
command?
AUnixShel takesfolowingmain stepsto process a command:
I. Parse : First step is to parse the command or set of commands given in a Command Line Interface (CLI). In this step multiple
consecutive spaces are replaced bysingle space. Multiple commandsthat are delimited bya symbol are divided intomultiple
individual actions.
II. Variable : In next step Shel identifies the variables mentioned in commands. Generaly any word prefixed by $ sign is a variable.
III. CommandSubstitution:In thisstep, Shel executesthe commandsthat are surrounded by back quotes and replacesthatsection
with the outputfromthe command.
IV. Wild Card : Once these steps are done, Shel replaces the Wild card characters like asterisk * with the relevant substitution.
V. Execute :Finaly, Shel executes al the commands and folowsthe sequence inwhichCommands are giveninCLI.
183. What is a Sticky bit in Unix?
ASticky bit is a file/directory permission feature inUnix.
Sometimeswhenwe givewrite permissionto another userthenthat user can delete the filewithoutthe owner knowingabout it. To preventsuchan
accidentaldeletion offile we use sticky bit.
Whenwe mark a file/directorywitha stickybit, no user otherthanowner offile/directorygetsthe privilege to delete a file/directory.
To set the sticky bit we use folowing command:
%chmod+tfilename
When we do ls for a file or directory, the entries with sticky bit are listed with letter t in the end of permissions.
E.g. %ls –lrt
-rwxrwxrwt 5 abc abc 4096 Jan 1 10:10 abc.txt
To remove the sticky bit we use folowing command:
%chmod –t filename
184. What are the different outputs from Kill command in Unix?
Kil command inUnixcanreturnfolowingoutputs:
I. 0:It means Kil command wassuccessful
II. -1: Whenwe get-1 fromKil command itshowsthat there wassome error. Inadditionto -1 we get EPERMor ESRCHinoutput.
EPERMdenotesthatsystemdoes not permittheprocessto be kiled.
ESRCHdenotesthat process withPIDmentioned inKil command does not exist anymore. Or due to securityrestrictions we
cannot accessthat process.
185. How will you customize your environment in Unix?
InUnix, almost al the popularshels provide optionsto customize the environment by usingenvironment variables. To make these customizations
permanentwe canwrite these to specialfilesthat are specific to auserina shel.
Once we write our customizations to these files, we keep on getting same customization when we open a new shel with same user account.
The special files for storing customization information for dif erent shels at login time are:
I. C shel: /etc/.login or ~/.cshrc
II. TC shel:/etc/.loginor ~/.tshrc
III. Korn shel: ~etc/ksh.kshrc
IV. Bash:~/.bash_profile
186. What are the popular commands for user management in Unix?
InUnixwe use folowingcommandsfor User Management:
I. id : This command gives the active user id with login and groups to which user belongs.
II. who : This command gives the user that is currently logged on system. It also gives the time of login.
III. last: This command showsthe previousloginsto the systemin a chronologicalorder.
IV. adduser : We use this command to add a new user.
V. groupadd:We use this command to add a new group in the system.
VI. usermod:We user usermod command to add/remove a user to a group inUnix.
187. How will you debug a shell script in Unix?
A shel script is a programthat can be executed in Unix shel. Sometimes a shel script does not work as intended. To debug and find the problem
inshel script we canuse the options provided byshel to debugthe script.
Inbashshel there are x and v optionsthat canbe used while runninga script.
% bash –xv<scriptName>
With option v al the input lines are printed by shel. With option x al the simple commands are printed in expanded format. We can see al the
arguments passed to a command with–xoption.
188. What is the difference between a Zombie and Orphan process in
Unix?
Zombie is a defunct child processinUnix thatstil has entry in processtable.
Sometimes a child processisterminated inUnix, but the parent process stil waits onit.
AZombie processis dif erent fromanOrphan process. An orphan processis a child process whose parent process had died. Once a processis
orphanit is adopted byinit process. So efectivelyitis not anorphan.
Therefore if a process exits without cleaning its child processes, they do not become Zombie. Instead init process adopts these child processes.
Zombie processes are the onesthat are not yet adopted byinit process.
189. How will you check if a remote host is still alive?
We can use one of the networking commands in Unix. It is caled ping. With ping command we can ping a remote host.
Ping utility sends packets in an IP network with ICMP protocol. Once the packet goes fromsource to destination and comes back it records the
time.
We can even specify the number of packets we want to send so that we colect more statistics to confirmthe result.
% pingwww.google.com
Another optionisto use telnetto remote host to check itsstatus.
190. How will you get the last executed command in Unix?
We can use history command to get the list commands that were executed in Unix. Since we are only interested in the last executed command we
have to use tailto get the last entry.
Exact command would be asfolows:
% history | tail-2
191. What is the meaning of “2>&1” in a Unix shell?
InUnix shel file descriptor 1 isforstandard output.
File description 2 isforstandard error.
We can use “2>&1” in a command so that al the errors fromstandard error go to standard output.
%catfile 2>&1
192. How will you find which process is taking most CPU time in Unix?
In Unix, we can use top command to list the CPU time and memory used by various processes. The top command lists the process IDs and CPU
time, memory etc used bytopmost processes.
Top command keeps refreshing the screen at a specified interval. So we can see over the time which process is always appearing on the top most
rowin the result oftop command.
Thisisthe processthat is consumingmost CPUtime.
193. What is the difference between Soft link and Hard link in Unix?
A soft link is a pointer to a file, directory or a programlocated in a dif erent location. A hard link can point to a programor a file but not to a
directory.
Ifwe move, delete or rename a file, the soft linkwil be broken. But a hard link stil remains aftermovingthe file/program.
We use the command ln–s for creatinga soft link. But a hard link canbe created bylncommandwithout –s option.

**194. How will you find which processes are using a file?**

We can use lsof command to find the list of Process IDs of the processes that are accessing a file in Unix. lsof stands for List Open Files.
Sample command is:

%lsof /var

It wil list the processes that are accessing/var directory in current unix system. We can use options –i, -n and –P for diferent uses.

%lsof –i will only list IP sockets.

**195. What is the purpose of nohup in Unix?**

In Unix, nohup command can be used to run a command in background. But it is diferent from & option to run a process in background.
Nohup stands for No Hangup. A nohup process does not stop even if the Unix user that started the process has logged out from the system.
But the process started with option & wil stop when the user that started the process logs of.

**196. How will you remove blank lines from a file in Unix?**

We can use grep command for this option. Grep command gives –v option to exclude lines that do not match a pattern.
In anemptyline there is nothingfromstart to end. InGrep command, ^ denotesthatstart ofline and $ denotesthe end ofline.
% grep –v‘^$’liststhe linesthat are emptyfromstart to the end.
Once we get this result, we can use > operator to write the output to a new file. So exact command wil be:

% grep –v ‘^$’ file1.txt > file2.txt

**197. How will you find the remote hosts that are connecting to your
system on a specific port in Unix?**

We canuse netstat command forthis purpose. Netstat command liststhe statistics about network connections. We cangrep forthe port in which
we are interested. Exact command wil be:

% netstst –a | grep “port number”

**198. What is xargs in Unix?**

We use xargs command to build and execute commands that take input from standard input. It is generaly used in chaining of commands.
Xargs breaks the list of arguments into small sub lists that can be handled by a command.
Folowingis a sample command:

<code>% find /path -type f-print | xargs rm</code>

The above command uses find to get the list of al files in /path directory. Then xargs command passes this list to rmcommand so that they can be deleted.

