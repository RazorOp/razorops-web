---
title: Amazon Route 53
description: Route53 is a managed DNS (Domain Name System) service where DNS is
  a collection of rules and records intended
image: /images/blog/amazon-route-53.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-12-18T22:54:00.000Z
---

**What is Amazon Route 53?**

Amazon Route 53 is AWS's highly available and scalable Domain Name System (DNS) web service. It provides domain registration, DNS routing, health checks, DNSSEC, and private DNS for Amazon VPCs. Route 53 is designed for low latency, high reliability, and seamless integration with other AWS services (ALB/NLB, CloudFront, S3, API Gateway, Global Accelerator).

Hosted zones and record types

- Hosted zone: a container for DNS records for a domain (public hosted zone for Internet DNS, private hosted zone for VPC‑local DNS).
- Common record types: A, AAAA, CNAME, TXT, MX, SRV, PTR, NS, SOA, CAA. Route 53 also supports Alias records (special AWS‑aware records that map to AWS resources) and multivalue records.

Key features

- Alias records: route apex/root domains to AWS resources without CNAME restrictions and without extra query charges.
- Routing policies: simple, weighted, latency, failover, geolocation, geoproximity, and multivalue answer.
- Health checks and DNS failover: monitor endpoints and automatically fail over DNS traffic.
- DNSSEC: domain signing to protect against DNS spoofing (supported for public hosted zones and registrar integration).
- Route 53 Resolver: inbound/outbound endpoints, forwarding rules and hybrid DNS for on‑premises integration.
- Query logging: write DNS queries to CloudWatch Logs, S3, or Kinesis for analysis and auditing.

Practical example — create a public hosted zone and an A/alias record (AWS CLI)

```bash
# create hosted zone
aws route53 create-hosted-zone --name example.com --caller-reference $(date +%s)

# create an A record for www pointing to an ALB (alias)
cat > record.json <<'JSON'
{
  "Comment": "Create alias record to ALB",
  "Changes": [
    {
      "Action": "CREATE",
      "ResourceRecordSet": {
        "Name": "www.example.com.",
        "Type": "A",
        "AliasTarget": {
          "HostedZoneId": "Z35SXDOTRQ7X7K", # ALB hosted zone id
          "DNSName": "dualstack-my-alb-123456.us-east-1.elb.amazonaws.com.",
          "EvaluateTargetHealth": false
        }
      }
    }
  ]
}
JSON

aws route53 change-resource-record-sets --hosted-zone-id Z123ABC456 --change-batch file://record.json
```

Practical example — create a health check and simple failover policy (AWS CLI)

```bash
# create health check
HC_ID=$(aws route53 create-health-check --caller-reference $(date +%s) --health-check-config 'Type=HTTP,ResourcePath=/health,Port=80,FailureThreshold=3' --query 'HealthCheck.Id' --output text)

# create failover records that reference the health check
# (similar change-batch JSON with Failover: PRIMARY/SECONDARY and HealthCheckId fields)
```

Minimal Terraform snippet — hosted zone + weighted record

```hcl
resource "aws_route53_zone" "main" {
  name = "example.com"
}

resource "aws_route53_record" "www" {
  zone_id = aws_route53_zone.main.zone_id
  name    = "www"
  type    = "A"

  alias {
    name                   = aws_lb.example.dns_name
    zone_id                = aws_lb.example.zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "weighted" {
  zone_id = aws_route53_zone.main.zone_id
  name    = "api"
  type    = "A"
  ttl     = 60
  set_identifier = "blue"
  weight = 10
  records = ["10.0.1.10"]
}
```

Best practices

- Use Alias records for AWS targets (ALB, CloudFront, S3 static websites) to avoid extra DNS lookups and charges.
- Keep TTLs balanced: low TTL for dynamic failover (30–60s), higher TTLs for stable records to reduce resolver traffic.
- Use Route 53 health checks selectively — they incur cost; prefer service‑level health metrics (ELB target health) where possible.
- Enable Query Logging to detect suspicious patterns and support troubleshooting.
- Use Route 53 Resolver for hybrid DNS: create inbound/outbound endpoints and forwarding rules for on‑prem DNS integration.
- Protect zones with DNSSEC and enforce secure registrar settings for critical domains.

Use cases

- Global traffic management: route users to the lowest latency region or regionally appropriate endpoints.
- Canary / blue‑green deployments: weighted routing to shift traffic gradually.
- Disaster recovery: failover routing with health checks to secondary regions.
- Private service discovery: private hosted zones for service discovery inside VPCs.
- Hybrid DNS: forward on‑prem queries into AWS and resolve internal AWS names from on‑prem.

Related Razorops posts

- [AWS VPC](/blog/aws-vpc/)
- [AWS Lambda](/blog/aws-lambda/)
- [Amazon CloudFront](/blog/amazon-cloudfront/)
- [Amazon S3](/blog/amazon-s3/)
- [AWS Route 53 Resolver & Hybrid DNS](/blog/aws-route53-resolver/) 

Top 20 AWS Solutions Architect — Route 53 focused FAQ

1. Q: What is Route 53? — AWS's managed DNS and domain registration service with health checks, DNSSEC, and hybrid DNS features.
2. Q: Public vs Private hosted zone? — Public zones serve Internet DNS; private zones serve DNS within one or more VPCs.
3. Q: What is an Alias record? — A Route 53‑specific record that maps a name to an AWS resource (ALB, CloudFront, S3, etc.) and is free of query charges.
4. Q: CNAME vs Alias for apex domain? — Apex/root domains cannot use CNAME; use Alias to point the root to AWS resources.
5. Q: How to implement failover? — Use health checks plus failover routing policy with PRIMARY/SECONDARY records.
6. Q: When to use weighted routing? — For traffic splitting (canary, blue/green) or A/B tests with controlled percentages.
7. Q: How does latency routing work? — Route 53 uses latency measurements between user location and AWS regions to route to the lowest latency endpoint.
8. Q: What is DNSSEC and should I enable it? — DNSSEC signs records to prevent spoofing; enable for public zones where integrity is required.
9. Q: How to integrate on‑prem DNS? — Use Route 53 Resolver inbound/outbound endpoints and forwarding rules to bridge DNS.
10. Q: What are Route 53 Resolver endpoints? — ENIs running in your VPC that enable DNS queries to flow between VPC and on‑prem networks.
11. Q: How to log DNS queries? — Configure Query Logging to CloudWatch Logs, S3, or Kinesis for analysis and security monitoring.
12. Q: How to reduce DNS costs? — Use Alias records, reasonable TTLs, and cacheable records to minimize query counts.
13. Q: Can Route 53 route directly to non‑AWS endpoints? — Yes — records can point to any IP or external hostname; API Destinations are for event routing (EventBridge).
14. Q: How to ensure fast DNS propagation? — Use low TTLs for record updates during deployments, then increase TTLs after stabilization.
15. Q: How to secure domain registration? — Use registrar lock, enable automatic renewal, and restrict account IAM permissions.
16. Q: What is multivalue answer routing? — Route 53 returns multiple healthy IP addresses for a query; clients can try alternatives if one fails.
17. Q: How to handle international routing? — Use geolocation or geoproximity routing policies to route users based on their location.
18. Q: How does Route 53 support global failover? — Combine health checks with latency/geolocation and failover policies to direct traffic across regions.
19. Q: How to test routing changes safely? — Use weighted records with low percentages and monitor via health checks and query logs.
20. Q: Does Route 53 provide DDoS protection? — Route 53 itself isn't an anti‑DDoS product; use AWS Shield (Standard is included) and Shield Advanced for protection, and pair with CloudFront and WAF for mitigation.
