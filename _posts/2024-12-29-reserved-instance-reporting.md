---
title: 2024-12-29 Reserved Instance Reporting
description: "Reserved Instance Reporting or Reserved Instance Utilization and
  Coverage reports are available in AWS Cost Explorer. It is used to check how
  much Reserved Instance (RIs) is used or overspent by AWS resources "
image: /images/blog/reserved-instance-reporting.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-12-29T22:04:00.000Z
---

**What is Reserved Instance Reporting?**

Reserved Instance Reporting or Reserved Instance Utilization and Coverage reports are available in AWS Cost Explorer. It is used to check how much Reserved Instance (RIs) is used or overspent by AWS resources (Amazon EC2, Amazon Redshift, Amazon RDS, Amazon Elasticsearch Service, and Amazon ElastiCache) in a specific period.

AWS Cost Explorer provides recommendations for Reserved Instance (RI) purchases based on past usage and enhances opportunities for savings as compared to On-Demand usage.

To access information from the Reserved Instance Utilization report, one must enable Amazon's Cost Explorer.

Reserved Instance Utilization and Coverage report both can be exported to both PDF and CSV formats.

**RI utilization reports:**

● Reserved Instance Reporting displays the total number of RI hours used by the account and helps to understand and monitor combined utilization across all of the RIs and services.

● AWS calculates the total savings by subtracting the costs of unused reservations from the reservations savings.

**RI coverage reports:**

● Reserved Instance Reporting displays the percentage of instance hours used by the account and helps to understand and monitor the combined coverage across all of your RIs.

● The RI coverage reports use the Cost Explorer filters instead of the RI Utilization filters to analyze the purchasing accounts, instance types, and more.

**Reserved Instance Utilization and Coverage reports (both):**

● Target utilization (threshold utilization) of RI utilization reports and Target coverage of RI coverage reports can be viewed as a dotted line in the chart and in the table below the chart as a colored status bar.

○ Red status bar - RIs with no hours used.

○ Yellow status bar - Under the utilization target.

○ Green status bar - Reached utilization target.

○ Gray status bar - instances not using reservations.

● RI reports make use of a combined filter of RI-specific and Cost Explorer.

● Daily RI Utilization chart - displays RI utilization for the previous three months daily.

● Monthly RI Utilization chart - displays your RI utilization for the previous 12 months monthly.

**Price details:**

There is a cost of $0.01 USD per request to retrieve the recommendation data in AWS.
