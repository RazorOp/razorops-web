---
title: Container Native DevOps & CICD Newsletter 85
description: Modernizing Applications for Kubernetes
permalink: "/newsletter/razorops-cicd-newsletter-85"
layout: newsletter
date: '2024-02-21 09:00:00'
author: Pooja Reddy
category: devops
image: "/images/newsletter/modernizing-applications-for-kuberenetes.gif"
heading: Modernizing Applications for Kubernetes
---

<img src="/images/newsletter/modernizing-applications-for-kuberenetes.gif" alt="modernizing-applications-for-kuberenetes" title="modernizing-applications-for-kuberenetes">
<br>

Modernizing applications for Kubernetes is a crucial step for organizations looking to embrace cloud-native technologies and harness the benefits of containerization, scalability, and agility. Kubernetes has emerged as the de facto standard for container orchestration, providing a robust platform for deploying, managing, and scaling containerized applications. In this blog post, we'll explore the importance of modernizing applications for Kubernetes and outline key steps for successful migration.
<br>
<br>

### **Why Modernize Applications for Kubernetes?**
<br>

**Scalability and Flexibility:** Kubernetes enables organizations to easily scale their applications up or down based on demand, ensuring optimal performance and resource utilization.
<br>
<br>

**Portability:** By containerizing applications and deploying them on Kubernetes, organizations can achieve greater portability across different cloud environments and on-premises infrastructure.
<br>
<br>

**Improved Resource Utilization:** Kubernetes optimizes resource utilization by dynamically allocating resources based on application requirements, leading to cost savings and improved efficiency.
<br>
<br>

**Enhanced DevOps Practices:** Kubernetes facilitates DevOps practices such as continuous integration and continuous deployment (CI/CD), allowing teams to deliver updates and new features more quickly and reliably.
<br>
<br>

### **Key Steps for Modernizing Applications for Kubernetes**
<br>
<img src="/images/newsletter/modern-devOps-process.jpg" alt="modern-devOps-process" title="modern-devOps-process">
<br>

**Containerization:** The first step in modernizing applications for Kubernetes is containerization. This involves packaging the application and its dependencies into containers using technologies like Docker. Containerization enables greater consistency, portability, and scalability.
<br>
<br>

**Decomposition and Microservices:** To fully leverage the benefits of Kubernetes, organizations should consider breaking down monolithic applications into smaller, more manageable microservices. This enables teams to independently develop, deploy, and scale individual components, leading to greater agility and resilience.
<br>
<br>

**Infrastructure as Code (IaC):** Infrastructure as Code tools like Terraform or AWS CloudFormation can be used to provision and manage the underlying infrastructure required for Kubernetes clusters. This ensures consistency, repeatability, and version control of infrastructure configurations.
<br>
<br>

**Adopt Kubernetes-native Services:** Kubernetes offers a wide range of native services and resources, such as Deployments, Services, and Ingress Controllers, that can be leveraged to deploy and manage applications more effectively. Organizations should familiarize themselves with these Kubernetes primitives and utilize them wherever possible.
<br>
<br>

**CI/CD Pipelines:** Implementing CI/CD pipelines is essential for automating the build, test, and deployment processes of containerized applications on Kubernetes.
<br>
<br>

### **Give a TRY for Best Container Native CICD - RazorOps**<a href="https://razorops.com/" target=_blank style="text-decoration: none"> <b>https://razorops.com/</b></a>
<br>

**Monitoring and Observability:** Monitoring and observability are critical for ensuring the health, performance, and security of applications running on Kubernetes. Leveraging tools like Prometheus, Grafana, and Kubernetes-native monitoring solutions enables organizations to gain insights into application metrics, logs, and events in real-time.
<br>
<br>

**Preparing the Application for Migration:** Before containerizing your application or writing Kubernetes Pod and Deployment configuration files, you should implement application-level changes to maximize your app’s portability and observability in Kubernetes. Kubernetes is a highly automated environment that can automatically deploy and restart failing application containers, so it’s important to build in the appropriate application logic to communicate with the container orchestrator and allow it to automatically scale your app as necessary.
<br>
<br>

**Extract Configuration Data:** One of the first application-level changes to implement is extracting application configuration from application code. Configuration consists of any information that varies across deployments and environments, like service endpoints, database addresses, credentials, and various parameters and options. For example, if you have two environments, say staging and production, and each contains a separate database, your application should not have the database endpoint and credentials explicitly declared in the code, but stored in a separate location, either as variables in the running environment, a local file, or external key-value store, from which the values are read into the app.
<br>
<br>

Hardcoding these parameters into your code poses a security risk as this config data often consists of sensitive information, which you then check in to your version control system. It also increases complexity as you now have to maintain multiple versions of your application, each consisting of the same core application logic, but varying slightly in configuration. As applications and their configuration data grow, hardcoding config into app code quickly becomes unwieldy.
<br>
<br>

By extracting configuration values from your application code, and instead ingesting them from the running environment or local files, your app becomes a generic, portable package that can be deployed into any environment, provided you supply it with accompanying configuration data. Container software like Docker and cluster software like Kubernetes have been designed around this paradigm, building in features for managing configuration data and injecting it into application containers. These features will be covered in more detail in the Containerizing and Kubernetes sections.
<br>
<br>

`DB_HOST` = <a href="https://razorops.com/" target=_blank style="text-decoration: none"> 'mydb.mycloud.com'</a>

`DB_USER = 'sammy'`

`app = Flask(__name__)`

`@app.route('/')`

`def print_config():`

`output = 'DB_HOST: {} -- DB_USER: {}'.format(DB_HOST, DB_USER)`

`return output`
<br>
<br>

Now, here’s the same example with the config values externalized to the app’s running environment:
<br>

`env_`<a href="http://config.py/" target=_blank style="text-decoration: none">config.py</a>

`import os`

`from flask import Flask`

`DB_HOST = os.environ.get('APP_DB_HOST')`

`DB_USER = os.environ.get('APP_DB_USER')`

`app = Flask(__name__)`

`@app.route('/')`

`def print_config():`

`output = 'DB_HOST: {} -- DB_USER: {}'.format(DB_HOST, DB_USER)`

`return output`
<br>
<br>

Before running the app, we set the necessary config variables in the local environment:
<br>

`export APP_DB_HOST=`<a href="http://mydb.mycloud.com/" target=_blank style="text-decoration: none">mydb.mycloud.com</a>   

`export APP_DB_USER=sammy`

`flask run`
<br>
<br>

Modernizing applications for Kubernetes is a strategic imperative for organizations seeking to stay competitive in today's fast-paced digital landscape. By embracing containerization, microservices architecture, infrastructure as code, Kubernetes-native services, CI/CD practices, and robust monitoring solutions, organizations can unlock the full potential of Kubernetes and drive innovation at scale.
<br>
<br>

### **Tutorials & Guides**
<br>
<a href="https://kubernetes.io/docs/tutorials/kubernetes-basics/" target=_blank style="text-decoration: none;"> <b>Kubernetes Basics</b></a>

<a href="https://kubernetesbestpractices.com/" target=_blank style="text-decoration: none;"> <b>Kubernetes Best Practices</b></a>

<a href="https://kube.academy/" target=_blank style="text-decoration: none;"> <b>KubeAcademy</b></a>
<br>
<br>



### **Tutorials & Guides**
<br>
<a href="https://kubernetes.io/docs/tutorials/kubernetes-basics/" target=_blank style="text-decoration: none;"> <b>Kubernetes Basics</b></a>

<a href="https://kubernetesbestpractices.com/" target=_blank style="text-decoration: none;"> <b>Kubernetes Best Practices</b></a>

<a href="https://kube.academy/" target=_blank style="text-decoration: none;"> <b>KubeAcademy</b></a>
<br>
<br>

### **Top Reading Recommendations**
<br>
<a href="https://www.cncf.io/kubeweekly/" target=_blank style="text-decoration: none;"> <b>KubeWeekly Archive</b></a>

<a href="https://kubernetes.io/docs/home/" target=_blank style="text-decoration: none;"> <b>Kubernetes Documentation</b></a>
<br>
<br>


### **Upcoming Events**
<br>
<a href="https://community.cncf.io/events/details/cncf-keptn-community-presents-keptn-community-meeting-apac-emea-2024-02-21/" target=_blank style="text-decoration: none"> <b>Keptn Community Meeting - APAC / EMEA</b></a>
<br>
Feb  21 -2:30  – 3: 15PM (PST)
<br>
<br>
<a href="https://community.cncf.io/events/details/cncf-cncf-online-programs-presents-cncf-on-demand-webinar-the-business-value-of-cloud-native-cloud-native-maturity-model-30/" target=_blank style="text-decoration: none"> <b>CNCF On demand webinar: The business value of cloud native - Cloud Native Maturity Model 3.0</b></a>
<br>
Feb  22 - 1:30  – Feb 23 1: 30PM (PST)
<br>
<br>
<a href="https://community.cncf.io/events/details/cncf-cncf-online-programs-presents-cncf-on-demand-webinar-scaling-terraform-and-opentofu-with-stack/" target=_blank style="text-decoration: none"> <b>CNCF On demand webinar: Scaling Terraform and OpenTofu with Stack</b></a>
<br>
Jan 22 -1:30 PM  –Jan 23 - 1: 30PM (PST)
<br>
<br>

### **DevOps Jobs**
<br>
<a href="https://www.linkedin.com/company/google/" target=_blank style="text-decoration: none"> 
<b>Google - </b></a> Check out all the jobs <a href="https://www.linkedin.com/jobs/search/?currentJobId=3396168535&f_C=1441&keywords=devops&refresh=true" target=_blank style="text-decoration: none"> 
<b>here</b></a>

<a href="https://www.linkedin.com/company/accenture/" target=_blank style="text-decoration: none"> <b>Accenture -</b></a>Check out all the jobs <a href="https://www.linkedin.com/jobs/search/?currentJobId=3819921898&f_C=1033&keywords=devops&refresh=true" target=_blank style="text-decoration: none"> 
<b>here</b></a>

<a href="https://www.linkedin.com/company/infosys/" target=_blank style="text-decoration: none"> 
<b>Infosys -</b></a>Check out all the jobs <a href="https://www.linkedin.com/jobs/search/?currentJobId=3418464712&f_C=1283&keywords=devops%20engineer&refresh=true" target=_blank style="text-decoration: none"> 
<b>here</b></a>

<a href="https://www.linkedin.com/company/microsoft/" target=_blank style="text-decoration: none"> <b>Microsoft -</b></a>Check out all the jobs <a href="https://www.linkedin.com/jobs/search/?currentJobId=3414477236&f_C=1035&keywords=devops&refresh=true" target=_blank style="text-decoration: none"> 
<b>here</b></a>
<br>
<br>

![Logo](/images/newsletter/simplest-native-cicd-logo.jpg)
<br>


PS- We publish this newsletters every week,  Subscribe and share with your friends. We hope this newsletter has provided valuable information. Follow RazorOps Linkedin Page <a href="https://www.linkedin.com/company/razorops/" target=_blank style="text-decoration: none"> <b>Razorops, Inc.</b></a>
