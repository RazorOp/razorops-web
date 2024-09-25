---
title: AWS Certificate Manager (ACM)
description: AWS Certificate Manager is a service that allows a user to provide, manage,
image: /images/blog/aws-certificate-manager-acm.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-08-08T08:15:00.000Z
---
**What is AWS Certificate Manager?**

AWS Certificate Manager is a service that allows a user to provide, manage, renew and deploy public and private Secure Sockets Layer/Transport Layer Security (SSL/TLS) X.509 certificates.
The certificates can be integrated with AWS services either by issuing them directly with ACM or importing third-party certificates into the ACM management system.

**SSL Server Certificates:**

● HTTPS transactions require server certificates X.509 that bind the public key in the certificate to provide authenticity.

● The certificates are signed by a certificate authority (CA) and contain the server’s name, the validity period, the public key, the signature algorithm, and more.

**The different types of SSL certificates are:**

● Extended Validation Certificates (EV SSL) - most expensive SSL certificate type

● Organization Validated Certificates (OV SSL) - validate a business’ creditably

● Domain Validated Certificates (DV SSL) - provide minimal encryption

● Wildcard SSL Certificate - secures base domain and subdomains

● Multi-Domain SSL Certificate (MDC) - secure up to hundreds of domain and subdomains

● Unified Communications Certificate (UCC) - single certificate secures multiple domain names.

**Ways to deploy managed X.509 certificates:**

1. AWS Certificate Manager (ACM) - useful for large customers who need a secure web presence.

    ● ACM certificates are deployed using Amazon API Gateway, Elastic Load Balancing, Amazon CloudFront.

2. ACM Private CA - useful for large customers building a public key infrastructure (PKI) inside the AWS cloud and intended for private use within an organization.

     ● It helps create a certificate authority (CA) hierarchy and issue certificates to authenticate users, computers, applications, services, servers, and other devices.

      ● Private certificates by Private CA for applications provide variable certificate lifetimes or resource names.

**ACM certificates are supported by the following services:**

● Elastic Load Balancing

● Amazon CloudFront

● AWS Elastic Beanstalk

● Amazon API Gateway

● AWS Nitro Enclaves (an Amazon EC2 feature)

● AWS CloudFormation

  

**Benefits:**

● It automates the creation and renewal of private certificates for on-premises and AWS resources.

● It provides an easy process to create certificates. Just submit a CSR to a Certificate Authority, or upload and install the certificate once received.

● SSL/TLS provides data-in-transit security, and SSL/TLS certificates authorize the identity of sites and connections between browsers and applications.

**Price details:**

● The certificates created by AWS Certificate Manager for using ACM-integrated services are free.

● With AWS Certificate Manager Private Certificate Authority, monthly charges are applied for the operation of the private CA and the private certificates issued.
