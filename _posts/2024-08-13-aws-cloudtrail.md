---
title: 2024-08-13 AWS CloudTrail
description: "AWS CloudTrail is defined as a global service that permits users
  to enable operational "
image: /images/blog/aws-cloudtrail.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-08-13T08:48:00.000Z
---
**What is AWS CloudTrail?**

AWS CloudTrail is defined as a global service that permits users to enable operational and risk auditing of the AWS account.

It allows users to view, search, download, archive, analyze, and respond to account activity across the AWS infrastructure.

It records actions as an event taken by a user, role, or an AWS service in the AWS

Management Console, AWS Command Line Interface, and AWS SDKs and APIs.

AWS CloudTrail mainly integrates with:

● Amazon S3 can be used to retrieve log files.

● Amazon SNS can be used to notify about log file delivery to the bucket with Amazon Simple Queue Service (SQS).

● Amazon CloudWatch for monitoring and AWS Identity and Access Management (IAM) for security.

CloudTrail events of the past 90 days recorded by CloudTrail can be viewed in the CloudTrail console and can be downloaded in CSV or JSON file.

Trail log files can be aggregated from multiple accounts to a single bucket and can be shared between accounts.

AWS CloudTrail Insights enables AWS users to identify and respond to unusual activities of API calls by analyzing CloudTrail management events.

**There are three types of CloudTrail events:**

● Management events or control plane operations

○ Example - Amazon EC2 CreateSubnet API operations and CreateDefaultVpc API operations

● Data events

○ Example - S3 Bucket GetObject, DeleteObject, and PutObject API operations

● CloudTrail Insights events (unusual activity events)

○ Example - Amazon S3 deleteBucket API, Amazon EC2

AuthorizeSecurityGroupIngress API

**Example of CloudTrail log file:**
	   **IAM log file -**

The below example shows that the IAM user Rohit used the AWS Management

Console to call the AddUserToGroup action to add Nayan to the administrator

group.

{"Records": [{

"eventVersion": "1.0",

"userIdentity": {

"type": "IAMUser",

"principalId": "PR_ID",

"arn": "arn:aws:iam::210123456789:user/Rohit",

"accountId": "210123456789",

"accessKeyId": "KEY_ID",

"**userName": "Rohit**"

},

"eventTime": "2021-01-24T21:18:50Z",

"eventSource": "iam.amazonaws.com",

"**eventName": "CreateUser**",

"awsRegion": "ap-south-2",

"sourceIPAddress": "176.1.0.1",

"userAgent": "aws-cli/1.3.2 Python/2.7.5 Windows/7",

"requestParameters": {"userName": "Nayan"},

"responseElements": {"user": {

"createDate": "Jan 24, 2021 9:18:50 PM",

"**userName": "Nayan**",

"arn": "arn:aws:iam::128x:user/Nayan",

"path": "/",

"userId": "12xyz"

}}

}]}

CloudWatch monitors and manages the activity of AWS services and resources, reporting on their health and performance. Whereas, CloudTrail resembles logs of all actions performed inside the AWS environment.

**Price details:**

● Charges are applied based on the usage of Amazon S3.

● Charges are applied based on the number of events analyzed in the region.

● The first copy of Management events within a region is free, but charges are applied for additional copies of management events at $2.00 per 100,000 events.

● Data events are charged at $0.10 per 100,000 events.

● CloudTrail Insights events provide visibility into unusual activity and are charged at $0.35 per 100,000 write management events analyzed.
