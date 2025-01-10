---
title: "2024-12-10 AWS Database Migration Service "
description: AWS Database Migration Service is a cloud service used to migrate
  relational databases from on-premises, Amazon EC2, or Amazon RDS to AWS
  securely
image: /images/blog/aws-database-migration-service.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-12-10T08:49:00.000Z
---
What is AWS Database Migration Service?
AWS Database Migration Service is a cloud service used to migrate relational databases from on-premises, Amazon EC2, or Amazon RDS to AWS securely.
It does not stop the running application while performing the migration of databases, resulting in downtime minimization.

It performs homogeneous as well as heterogeneous migrations between different database platforms.

MySQL - MySQL (homogeneous migration)
MySQL - Amazon Aurora (heterogeneous migration)

AWS DMS supports the following data sources and targets engines for migration:

● Sources: Oracle, Microsoft SQL Server, PostgreSQL, Db2 LUW, SAP,
MySQL, MariaDB, MongoDB, and Amazon Aurora.

● Targets: Oracle, Microsoft SQL Server, PostgreSQL, SAP ASE, MySQL,
Amazon Redshift, Amazon S3, and Amazon DynamoDB.

It performs all the management steps required during the migration, such as monitoring, scaling, error handling, network connectivity, replicating during failure,and software patching.

AWS DMS with AWS Schema Conversion Tool (AWS SCT) helps to perform heterogeneous migration.

 **![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfaiX4K5SZiwq2jyqY48ZX9Jl1LtfqSQGxEyy-t_WOJvP-Anopm_HKYHnt6fWkmRMFwLAeBlBcKdzUS3N5hf0yMLxBtNaSGef_cm_-hCqlka40fwEHFHrSVFWVYzuEBOPsVMWnv?key=1beB9YyK6sUFfwFz2OxSuA)**
