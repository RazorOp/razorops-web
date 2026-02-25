---
title: AWS Elastic Load Balancer
description: " ELB Stands for Elastic Load Balancer. It distributes the incoming
  traffic to multiple targets such as Instances, Containers, Lambda Functions,
  IP Addresses etc."
image: /images/blog/aws-elastic-load-balancer.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-12-17T13:40:00.000Z
---

**What is AWS Elastic Load Balancing (ELB)?**

Elastic Load Balancing is an AWS service that automatically distributes incoming application traffic across multiple targets — EC2 instances, IP addresses, containers, and Lambda functions — increasing fault tolerance and improving application availability. ELB offers multiple load balancer types optimized for different use cases: Application Load Balancer (ALB), Network Load Balancer (NLB), and Gateway Load Balancer (GWLB). The Classic Load Balancer (CLB) is legacy and not recommended for new deployments.

Overview of load balancer types

- Application Load Balancer (ALB): Layer 7 load balancer designed for HTTP/HTTPS and WebSocket traffic. Supports host‑ and path‑based routing, HTTP/2, gRPC, WebSockets, and advanced features such as WAF integration and request‑level routing.
- Network Load Balancer (NLB): Layer 4 load balancer for ultra‑low latency, high throughput, and static IP support. Ideal for TCP/UDP/TLS workloads and for preserving the client source IP.
- Gateway Load Balancer (GWLB): Designed for deploying, scaling, and managing third‑party network virtual appliances (firewalls, IDS/IPS) with transparent GENEVE encapsulation and integration with Gateway Load Balancer endpoints.

Key concepts

- Listener: Ports and protocols the load balancer checks (e.g., HTTP:80, HTTPS:443). Listeners have rules that forward requests to target groups.
- Target group: Logical grouping of targets with health check config and protocol/port. Targets can be EC2 instances, IPs, or Lambda functions (ALB only for Lambda).
- Health check: Periodic probes (HTTP/TCP) to mark targets healthy/unhealthy.
- LCU (Load Balancer Capacity Units): ALB/NLB pricing dimension used to calculate cost based on new connections, active connections, processed bytes, and rule evaluations.

Example — create an ALB, target group, and listener (AWS CLI)

```bash
# create target group
aws elbv2 create-target-group --name razorops-tg --protocol HTTP --port 80 --vpc-id vpc-0123456789abcdef0 --target-type instance

# create ALB
ALB_ARN=$(aws elbv2 create-load-balancer --name razorops-alb --subnets subnet-aaa subnet-bbb subnet-ccc --security-groups sg-012345 --query 'LoadBalancers[0].LoadBalancerArn' --output text)

# create listener forwarding to target group
aws elbv2 create-listener --load-balancer-arn $ALB_ARN --protocol HTTP --port 80 --default-actions Type=forward,TargetGroupArn=arn:aws:elasticloadbalancing:...:targetgroup/razorops-tg/...
```

Example — minimal Terraform (ALB + target group + attachment)

```hcl
resource "aws_lb" "alb" {
  name               = "razorops-alb"
  internal           = false
  load_balancer_type = "application"
  subnets            = [aws_subnet.public1.id, aws_subnet.public2.id]
}

resource "aws_lb_target_group" "tg" {
  name     = "razorops-tg"
  port     = 80
  protocol = "HTTP"
  vpc_id   = aws_vpc.main.id
}

resource "aws_lb_listener" "http" {
  load_balancer_arn = aws_lb.alb.arn
  port              = "80"
  protocol          = "HTTP"
  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.tg.arn
  }
}
```

When to use each load balancer

- ALB: microservices, host/path routing, HTTP features (WAF, authentication), WebSockets, gRPC.
- NLB: TCP/UDP/TLS, static IP, extreme performance, preserve source IP for backend logging or IP‑based access control.
- GWLB: insert network appliances for inspection and centralized security.

Common use cases

- Host path‑based microservices behind a single ALB (e.g., /api → service A, /ui → service B).
- Expose TCP services (database proxy, gaming servers) via NLB for low latency and static IPs.
- Centralized traffic inspection with GWLB integrating third‑party firewalls.
- Blue/green or canary deployments using weighted target groups and ALB routing.

Security and best practices

- Terminate TLS at the ALB and use HTTPS between ALB and backend where needed; use AWS Certificate Manager (ACM) for certificate management.
- Use security groups to restrict access to load balancers and backend targets; minimize open ports.
- Enable AWS WAF on ALB to filter OWASP class attacks and common threats.
- Configure deregistration delay and connection draining so in‑flight requests complete before target removal.
- Enable access logs (S3) for auditing and troubleshooting.

Observability and metrics

- ALB metrics: RequestCount, HTTPCode_Target_2XX/3XX/4XX/5XX, TargetResponseTime, HealthyHostCount, UnHealthyHostCount.
- NLB metrics: NewFlowCount, ActiveFlowCount, ProcessedBytes.
- Enable CloudWatch Alarms on error and latency metrics; integrate with AWS X‑Ray for end‑to‑end tracing when using Lambda or instrumented services.

Health checks and routing considerations

- Design health checks to reflect real user experience (e.g., lightweight endpoint that performs a DB check if the service depends on DB availability).
- Use path‑based health checks where appropriate; avoid overly aggressive thresholds that flaps targets.

Pricing summary

- ALB pricing: charged per hour (or partial hour) and per LCU; NLB: per hour and per NCU/data processed; GWLB: hourly and per GB processed. Refer to AWS pricing pages for up‑to‑date rates.

Related Razorops posts

- [AWS VPC](/blog/aws-vpc/)
- [AWS Lambda](/blog/aws-lambda/)
- [Amazon Route 53](/blog/amazon-route-53/)
- [AWS WAF](/blog/aws-web-application-firewall/)
- [AWS Auto Scaling](/blog/aws-auto-scaling/)

Top 20 AWS Solutions Architect — ELB focused FAQ

1. Q: What is the difference between ALB and NLB? — ALB is Layer 7 (HTTP/HTTPS) with host/path routing and HTTP features; NLB is Layer 4 (TCP/UDP/TLS) for extreme performance and static IPs.
2. Q: When should I use GWLB? — Use GWLB to deploy and scale third‑party network virtual appliances for inspection, IDS/IPS, and traffic steering.
3. Q: Can ALB handle WebSockets and gRPC? — Yes; ALB supports both WebSockets and gRPC (HTTP/2) with proper listener configuration.
4. Q: How do I preserve client IP? — Use NLB (preserves source IP) or enable X‑Forwarded‑For header on ALB and capture the header at the backend.
5. Q: How does SSL/TLS termination work? — You can terminate TLS at the load balancer using ACM certificates and optionally re‑encrypt to backends.
6. Q: What is a target group? — A logical group of targets with health checks; listeners forward traffic to target groups based on rules.
7. Q: How many targets per target group? — Soft limits exist per account/region; AWS service quotas apply — request increases when necessary.
8. Q: How to do blue/green deployments with ELB? — Use separate target groups and switch listener rules or use weighted routing for gradual traffic shift.
9. Q: What is connection draining/deregistration delay? — A timeout allowing in‑flight requests to complete when removing a target.
10. Q: How to debug unhealthy targets? — Check target health status, backend logs, security groups, NACLs, and CloudWatch metrics; enable access logs.
11. Q: Does ALB support sticky sessions? — Yes, ALB supports session affinity (stickiness) via target group stickiness based on cookies.
12. Q: Can I register IP addresses as targets? — Yes; ALB/NLB support IP targets for on‑prem or cross‑VPC targets (subject to routing and permissions).
13. Q: How to load balance Lambda functions? — ALB supports invoking Lambda functions as targets for HTTP(S) traffic.
14. Q: How to integrate WAF? — AWS WAF can be attached to ALB (or CloudFront) to protect against common web attacks.
15. Q: How is health check configured? — Health check protocol, path, interval, timeout, healthy/unhealthy thresholds are set per target group.
16. Q: Can ELB route to ECS/EKS containers? — Yes; register container instances or use AWS integration with ECS service and target groups.
17. Q: What is cross‑zone load balancing? — Distributes traffic evenly across targets in all AZs; ALB has it enabled by default; NLB can be enabled.
18. Q: How to secure backend instances? — Restrict backend security groups to only accept traffic from the load balancer security group; use private subnets for targets.
19. Q: What logs are available? — ALB/NLB access logs (S3), CloudWatch metrics, and VPC Flow Logs for networking-level analysis.
20. Q: What quotas should I monitor? — Number of load balancers, listeners, target groups, and rules per load balancer; monitor AWS service quotas and request increases proactively.
