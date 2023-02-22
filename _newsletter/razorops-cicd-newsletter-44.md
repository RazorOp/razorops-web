---
title: Container Native DevOps & CICD Newsletter 44
description: Common Cyber Threats For Container-Native Applications. Subscribe to
  get the latest updates on container-native & DevOps news here.
permalink: "/newsletter/razorops-cicd-newsletter-44"
layout: newsletter
date: '2023-02-22 10:00:00'
author: Aditi Mishra
category: devops
image: "/images/newsletter/common-cyber-threats-for-container-native-apps.gif"
heading: Common Cyber Threats For Container-Native Applications
---

![](/images/newsletter/common-cyber-threats-for-container-native-apps.gif)
<br>

Container-native applications are becoming increasingly popular due to their ease of deployment, scalability, and portability. However, they also pose new challenges for cybersecurity. Here are some common cyber threats that container-native applications are facing:

<br>

**Container escape**

A container escape occurs when a hacker gains access to the host operating system from within the container. This could happen due to a misconfiguration or a vulnerability in the container runtime or kernel.

Container escapes are one of the top threats facing organizations using containers. With many businesses adopting containerization at an unprecedented pace, it is essential that they have the proper tools and techniques in place to protect against this threat. At the very least, organizations should use a secure container runtime, restrict container privileges, and monitor for any attempts to escape containers.

Following these measures, container escapes can be prevented or detected early, reducing the risk of compromise to the host operating system.

* Use a secure container runtime: Choose a container runtime that has been tested and proven to be secure, such as   Docker or Kubernetes. These runtimes have built-in security features that can help prevent container escapes

* Use container images from trusted sources: Ensure that container images are obtained from trusted sources and have not been tampered with. Use tools such as image signing or a notary to verify the integrity of images.

* Apply security patches: Regularly apply security patches and updates to the container runtime, kernel, and other dependencies to address known vulnerabilities.

* Use container isolation: Implement container isolation using tools such as Linux namespaces or Docker's containerization features. This can help prevent attackers from accessing the host operating system from within the container.

* Restrict container privileges: Limit the privileges of containers to only what is necessary to perform their functions. This can prevent attackers from gaining elevated privileges within the container.

* Monitor for container escapes: Implement monitoring tools that can detect attempts to escape from containers, such as system calls or network activity that is not typical of the container's behavior.

<br>

**Image vulnerabilities**

Images used to create containers may contain vulnerabilities that can be exploited by attackers. These could be caused by outdated software or dependencies that have not been patched.

Images are a critical part of container security. Unaddressed vulnerabilities in container images can lead to significant risks in production, including breaches, compliance issues, and business disruptions. To mitigate these risks, it's essential that organizations use automated tools to identify and prioritize vulnerabilities in their container images, and that they make vulnerability management a standard part of their DevOps pipeline.

Container-native applications can reduce the risk of vulnerabilities being introduced into their images, and ensure that they are up-to-date and secure. Here are some solutions-


* Use base images from trusted sources: Start with a base image that is provided by a trusted source and has been thoroughly tested and maintained. This can reduce the risk of vulnerabilities being introduced into the application from the image itself.

* Scan images for vulnerabilities: Use an image scanning tool to check for known vulnerabilities in the image and its dependencies. This can help identify any vulnerabilities that may have been introduced during the development process.

* Keep images up-to-date: Regularly update images and their dependencies to ensure that any vulnerabilities that are discovered are patched. This includes both the base image and any additional layers that are added to create the application image.

* Use container runtime security features: Container runtime platforms such as Docker and Kubernetes have built-in security features that can help mitigate the risk of image vulnerabilities. For example, Docker allows for the creation of read-only containers, which can prevent any changes to the image or its dependencies.

* Use container registries with image signing: Container registries such as Docker Hub or Google Container Registry can sign images to ensure that they have not been tampered with. This can help prevent attackers from introducing malicious code into the application image.

<br>

**Network threats**

Container-native applications are often designed to communicate with other applications and services, making them vulnerable to network attacks such as Man-in-the-Middle (MitM) attacks or Distributed Denial of Service (DDoS) attacks.

Network threats are one of the top concerns for container-native applications. As more applications are built using microservices and containerization, securing network traffic becomes even more important. Organizations need to implement strong network policies and use secure protocols to protect against threats such as Man-in-the-Middle (MitM) attacks and Distributed Denial of Service (DDoS) attacks. They should also monitor network traffic for suspicious activity and implement load balancers to distribute traffic evenly across multiple containers.

Implementing these solutions, can reduce the risk of network threats, ensure that their communication is secure, and protect against malicious attacks.

* Use secure network protocols: Use secure network protocols such as HTTPS or SSL/TLS to encrypt communications between containers and external systems. This can help prevent Man-in-the-Middle (MitM) attacks.

* Segment container networks: Segment container networks limit communication between containers and other systems. This can prevent attackers from using a compromised container to access other parts of the network.

* Implement network policies: Use network policies to restrict traffic between containers and external systems based on specific rules. This can prevent attackers from launching Distributed Denial of Service (DDoS) attacks.

* Monitor network traffic: Monitor network traffic between containers and external systems for any suspicious activity. This can help detect any attempts to exploit vulnerabilities or launch attacks.

* Use load balancers: Implement load balancers to distribute traffic evenly across multiple containers. This can help prevent the overloading of individual containers and reduce the risk of DDoS attacks.

<br>

**Data breaches**

Container-native applications may store sensitive data, such as credentials or personal information. If an attacker gains access to the container, they may be able to steal this data.

Data breaches are a significant concern for container-native applications, as they often store sensitive data such as credentials or personal information. To prevent data breaches, it's essential to use secure storage mechanisms, implement access control, and encrypt data in transit. It's also critical to regularly update containers and their dependencies to ensure that known vulnerabilities are patched. By taking these steps, organizations can reduce the risk of data breaches and protect their sensitive information.

Implementing these solutions, container-native applications can reduce the risk of data breaches, ensure that their data is secure, and protect against unauthorized access to sensitive information.


* Use secure storage for sensitive data: Use secure storage mechanisms such as Kubernetes Secrets or HashiCorp Vault to store sensitive data such as passwords, API keys, and other credentials.

* Implement access control: Implement access control mechanisms such as RBAC (Role-Based Access Control) to restrict access to containers and sensitive data. This can prevent unauthorized access to containers and data.

* Encrypt data in transit: Use encryption to protect data in transit between containers and external systems. This can prevent attackers from intercepting sensitive data.

* Implement data protection policies: Implement data protection policies to restrict the use of sensitive data and prevent unauthorized copying, modification, or deletion of data.

* Regularly update containers: Regularly update containers and their dependencies to ensure that any known vulnerabilities are patched. This can help prevent attackers from exploiting vulnerabilities to gain access to sensitive data.

<br>

**Cryptojacking**

Attackers may hijack container resources to mine cryptocurrency without the owner's knowledge or permission.

Cryptojacking is a growing threat to container-native applications, as attackers look for ways to mine cryptocurrency using container resources. To prevent cryptojacking, it's essential to limit container resource usage, regularly update containers, and monitor container activity for signs of suspicious behavior. Container security solutions can also help detect and prevent cryptojacking attacks. By taking these steps, organizations can protect their container resources and ensure that they are used for legitimate purposes.

Implementing these solutions can reduce the risk of cryptojacking attacks, ensure that their resources are used for legitimate purposes, and protect against unauthorized access to containers and resources.


* Limit container resource usage: Limit the amount of CPU and memory resources that containers can use. This can prevent attackers from using container resources to mine cryptocurrency.

* Implement container security policies: Implement container security policies to restrict container access and usage. This can prevent unauthorized access to containers and resources.

* Regularly update containers: Regularly update containers and their dependencies to ensure that any known vulnerabilities are patched. This can prevent attackers from exploiting vulnerabilities to hijack containers and resources.

* Monitor container activity: Monitor container activity for any signs of cryptojacking, such as high resource usage or suspicious network activity. This can help detect and respond to cryptojacking attacks.

* Use container security solutions: Use container security solutions that can detect and prevent cryptojacking attacks. These solutions can identify and block cryptojacking scripts and prevent unauthorized container usage.


To mitigate these threats, container-native applications should be secured using best practices such as container image scanning, vulnerability management, network security, access control, and monitoring. Additionally, it is important to regularly update container software and dependencies to patch vulnerabilities and ensure a secure environment.

<br>


# Tutorials & Guides

<br>
<ul>
<li>
<a href="https://www.infracloud.io/blogs/opentelemetry-auto-instrumentation-jaeger/?utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-_hoH7nYDDVq7eMJYoxEOVzUYv8CEfRTyqOkhfGSrZtseklbPxscwhaiecqrI7LVaKFHoZK" target="_blank"><b>OpenTelemetry auto-instrumentation with Jaeger </b></a>
	</li>
<br>
<li>
<a href="https://fluxcd.io/blog/2023/02/flux-pulumi-superpowers/?utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-_hoH7nYDDVq7eMJYoxEOVzUYv8CEfRTyqOkhfGSrZtseklbPxscwhaiecqrI7LVaKFHoZK" target="_blank"><b>How Flux and Pulumi give each other superpowers | Flux</b></a>
	</li>
	<br>
<li>
<a href="https://piotrminkowski.com/2023/02/13/best-practices-for-java-apps-on-kubernetes/?utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-_hoH7nYDDVq7eMJYoxEOVzUYv8CEfRTyqOkhfGSrZtseklbPxscwhaiecqrI7LVaKFHoZK" target="_blank"><b>Best practices for Java apps on Kubernetes
  </b></a>
	</li>
	<br>
<li>
<a href="https://www.cncf.io/blog/2023/02/15/multi-cluster-at-scale-why-timescale-chose-linkerd-for-its-service-mesh-framework/?utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-_hoH7nYDDVq7eMJYoxEOVzUYv8CEfRTyqOkhfGSrZtseklbPxscwhaiecqrI7LVaKFHoZK" target="_blank"><b>Multi-cluster at scale: why Timescale chose Linkerd for its service mesh framework
  </b></a>
	</li>
</ul>

<br>

# Top Reading Recommendations

<br>
<ul>
<li>
<a href="https://kubernetes.io/blog/2023/02/14/kubernetes-katacoda-tutorials-stop-from-2023-03-31/?utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-_hoH7nYDDVq7eMJYoxEOVzUYv8CEfRTyqOkhfGSrZtseklbPxscwhaiecqrI7LVaKFHoZK" target="_blank"><b>Free Katacoda Kubernetes tutorials are shutting down</b></a>
	</li>
<br>
<li>
<a href="https://thenewstack.io/why-kubernetes-has-emerged-as-the-os-of-the-cloud/?utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-_hoH7nYDDVq7eMJYoxEOVzUYv8CEfRTyqOkhfGSrZtseklbPxscwhaiecqrI7LVaKFHoZK" target="_blank"><b>Why Kubernetes has emerged as the ‘OS’ of the cloud</b></a>
	</li>
	<br>
<li>
<a href="https://www.cncf.io/blog/2023/02/07/migrating-from-opentracing-to-opentelemetry/?utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-_hoH7nYDDVq7eMJYoxEOVzUYv8CEfRTyqOkhfGSrZtseklbPxscwhaiecqrI7LVaKFHoZK" target="_blank"><b>Migrating from OpenTracing to OpenTelemetry</b></a>
	</li>
		<br>
<li>
<a href="https://thenewstack.io/developer-portals-can-abstract-away-kubernetes-complexity/?utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-_hoH7nYDDVq7eMJYoxEOVzUYv8CEfRTyqOkhfGSrZtseklbPxscwhaiecqrI7LVaKFHoZK" target="_blank"><b>Developer portals can abstract away Kubernetes' complexity</b></a>
	</li>
	</ul>

<br>


# Upcoming Events
<br>

<ul>
<li>
<a href="https://community.cncf.io/events/details/cncf-cncf-online-programs-presents-cncf-on-demand-webinaraddressing-evolving-threat-models-in-cloud-security-with-open-source-software-1/" target="_blank"><b> Addressing Evolving Threat Models in Cloud Security with Open-Source Software </b></a> | Feb 23 - 24, 12:00 AM (PST)
	</li>
<br>
<li>
<a href="https://community.cncf.io/events/details/cncf-cncf-online-programs-presents-cncf-on-demand-webinar-devops-backup-and-disaster-recovery/" target="_blank"><b> DevOps backup and Disaster Recovery </b></a> | Feb 23 - 24, 12:00 AM (PST)
	</li>
	<br>
<li>
<a href="https://community.cncf.io/events/details/cncf-cncf-online-programs-presents-cncf-on-demand-webinar-kubescape-roadmap/" target="_blank"><b> Kubescape roadmap</b></a> | Feb 23 - 24, 12:00 AM (PST)
	</li>
	<br>
<li>
<a href="https://community.cncf.io/events/details/cncf-cncf-online-programs-presents-cncf-on-demand-webinar-building-resilience-with-chaos-engineering/" target="_blank"><b> Building Resilience with Chaos Engineering</b></a> | Feb 23 - 24, 12:00 AM (PST)
	</li>
	<br>
<li>
<a href="https://community.cncf.io/events/details/cncf-cncf-online-programs-presents-cncf-on-demand-webinar-cloud-native-application-authorization/" target="_blank"><b> Cloud Native Application Authorization</b></a> | Feb 23 - 24, 12:00 AM (PST)
	</li>
	</ul>
<br>
	

# DevOps Jobs
<br>

<ul>
<li>
<a href="https://www.linkedin.com/company/deloitte/?lipi=urn%3Ali%3Apage%3Ad_flagship3_pulse_read%3Bvqlxx9CjSCuGHmeiw3Yz6w%3D%3D" target="_blank"><b>Deloitte -</b></a><b> Check out all the jobs</b> <a href="https://www.linkedin.com/jobs/search/?currentJobId=3491579403&distance=25&f_C=1038&geoId=102713980&keywords=devops%20engineer&lipi=urn%3Ali%3Apage%3Ad_flagship3_pulse_read%3Bvqlxx9CjSCuGHmeiw3Yz6w%3D%3D" target="_blank"><b> here</b></a> 
	</li>
	<br>	
	<li>
<a href="https://www.linkedin.com/company/tata-consultancy-services/?lipi=urn%3Ali%3Apage%3Ad_flagship3_pulse_read%3Bvqlxx9CjSCuGHmeiw3Yz6w%3D%3D" target="_blank"><b>Tata Consultancy Services -</b></a><b> Check out all the jobs</b> <a href="https://www.linkedin.com/jobs/search/?currentJobId=3484819350&distance=25&f_C=1353&geoId=102713980&keywords=devops%20engineer&lipi=urn%3Ali%3Apage%3Ad_flagship3_pulse_read%3Bvqlxx9CjSCuGHmeiw3Yz6w%3D%3D" target="_blank"><b> here</b></a> 
	</li>
	<br>
	<li>
<a href="https://www.linkedin.com/company/accenture/?lipi=urn%3Ali%3Apage%3Ad_flagship3_pulse_read%3Bvqlxx9CjSCuGHmeiw3Yz6w%3D%3D" target="_blank"><b>Accenture -</b></a><b> Check out all the jobs</b> <a href="https://www.linkedin.com/jobs/search/?currentJobId=3422755785&f_C=1033&keywords=devops&refresh=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_pulse_read%3Bvqlxx9CjSCuGHmeiw3Yz6w%3D%3D" target="_blank"><b> here</b></a> 
	</li>
	<br>	
	<li>
<a href="https://www.linkedin.com/company/infosys/?lipi=urn%3Ali%3Apage%3Ad_flagship3_pulse_read%3Bvqlxx9CjSCuGHmeiw3Yz6w%3D%3D" target="_blank"><b>Infosys -</b></a><b> Check out all the jobs</b> <a href="https://www.linkedin.com/jobs/search/?currentJobId=3418464712&f_C=1283&keywords=devops%20engineer&refresh=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_pulse_read%3Bvqlxx9CjSCuGHmeiw3Yz6w%3D%3D" target="_blank"><b> here</b></a> 
	</li>
	</ul>
