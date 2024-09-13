---
title: Amazon Cognito
description: Amazon Cognito is a service used for authentication, authorization,
  and user management for web or mobile applications.
image: /images/blog/amazon-cognito.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-08-02T05:33:00.000Z
---
**What is Amazon Cognito?**
Amazon Cognito is a service used for authentication, authorization, and user management for web or mobile applications.

Amazon Cognito enables users to sign in through social identity providers such as Google, Facebook, and Amazon, and through enterprise identity providers such as Microsoft Active Directory via SAML.

Amazon Cognito authorizes a unique identifier for each user and acts as an OpenID token provider trusted by AWS Security Token Service (STS) to access temporary,
limited-permission AWS credentials.

The two main components of Amazon Cognito are

**User pools** are user repositories (where user profile details are kept) that provide sign-up and sign-in options for your app users. User pools provides

● sign-up and sign-in services through a built-in customizable web UI.

● user directory and user profiles.

● security features such as multi-factor authentication (MFA), checks for compromised credentials, account takeover protection, and phone and email verification.

● helps in customized workflows and user migration through AWS Lambda triggers.

**Identity pools** provide temporary AWS credentials to the users so that they could access other AWS resources without re-entering their credentials. Identity pools
support the following identity providers

● Amazon Cognito user pools.

● Third-party sign-in facility.

● OpenID Connect (OIDC) providers.

● SAML identity providers.

● Developer authenticated identities.

Amazon Cognito is capable enough to allow usage of user pools and identity pools separately or together.

**Amazon Cognito Federated Identities**

● It is a service that provides limited temporary security credentials to mobile devices and other untrusted environments.

● It helps to create a unique identity for the user over the lifetime of an application.

**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdpFL_d1GAA0xeXjQeccoRL1GMGIedfzONXQ5w6ZSKhef41mMMjWUlDDWvSzoBSDbhsDeIeOwn3UPnhqwoXx4ing2Rik4IR4by88oU6z7Bf5njpAI9Jl_rbmx7yIWyZGv7LVCe1xVeJR2xjIRJcThmHRqQ?key=DolJBsYn1X8zMHIyAnLicQ)**

**Features:**

● Advanced security features of Amazon Cognito provide risk-based authentication and protection from the use of compromised credentials.

● To add user sign-up and sign-in pages to your apps, Android, iOS, and JavaScript SDKs for Amazon Cognito can be used.

● Cognito User Pools provide a user directory that scales to millions of users.

● Amazon Cognito uses famous identity management standards like OAuth 2.0, OpenID Connect, and SAML 2.0.

● Users' identities can be verified using SMS or a Time-based One-time Password (TOTP) generator, like Google Authenticator.

**Pricing Details:** (pay only for what you use)

● Amazon Cognito is mainly charged for identity management and data synchronization.

● There are volume-based pricing tiers above the free tier for users who sign in directly with their credentials from a User Pool or with social identity providers such as Apple, Google, Facebook, and Amazon.





