---
title: AWS Direct Connect
description: AWS Direct Connect is a cloud service that helps to establish a
  dedicated connection from an on-premises network to one or more VPCs in the
  same region.
image: /images/blog/aws-direct-connect.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-12-16T13:27:00.000Z
---

**What is AWS Direct Connect?**

AWS Direct Connect provides private, dedicated network connections from your on‑premises data center, co‑location, or office to AWS. Direct Connect offers predictable, lower‑latency throughput compared to Internet‑based VPNs and is commonly used for data transfer, hybrid cloud, and latency‑sensitive workloads.

Key concepts

- Connection types: Dedicated Connections (1 Gbps / 10 Gbps / 50 Gbps / 100 Gbps) provisioned at an AWS Direct Connect location; Hosted Connections (partner‑provided) with smaller bandwidth options.
- Virtual Interfaces (VIFs): logical interfaces on a Direct Connect connection — Private VIF for VPC access (via DX Gateway or VGW), Public VIF for access to public AWS endpoints, and Transit VIF for Transit Gateway integration.
- Direct Connect Gateway: attach multiple VPCs (across accounts/regions) to a single Direct Connect connection via a DX Gateway and Transit Gateway or VGW.
- Link aggregation (LAG): combine multiple physical connections into a single logical connection for increased bandwidth and redundancy.

Why use Direct Connect

- Consistent network performance and lower latency compared to Internet paths.
- Reduced data transfer costs for high volume egress (region dependent).
- Secure private connectivity that bypasses the public Internet.
- Support for hybrid architectures, large dataset transfers, and latency‑sensitive applications (e.g., media, financial trading, backups).

Architecture and common patterns

- Simple hybrid: Dedicated or Hosted Connection → Private VIF → Virtual Private Gateway (VGW) → single VPC.
- Scaled hub (recommended for multiple VPCs/accounts): Direct Connect → DX Gateway → Transit Gateway → multiple VPCs across regions/accounts.
- Direct Connect + VPN: use a VPN overlay as a backup for the Direct Connect link for resiliency.
- LAG + Multi‑AZ: use multiple connections and DX locations for high availability.

CLI example — create a private virtual interface (sample)

```bash
# create virtual-interface JSON (private)
cat > private-vif.json <<'EOF'
{
  "connectionId": "dxcon-abc123",
  "newPrivateVirtualInterface": {
    "virtualInterfaceName": "razorops-private-vif",
    "vlan": 4094,
    "asn": 65000,
    "amazonAddress": "175.45.176.2/30",
    "customerAddress": "175.45.176.1/30",
    "virtualGatewayId": "vgw-0abc123def456",
    "addressFamily": "ipv4"
  }
}
EOF

aws directconnect create-private-virtual-interface --cli-input-json file://private-vif.json
```

Terraform snippet — create a DX connection and private VIF

```hcl
resource "aws_dx_connection" "dx" {
  name           = "razorops-dx"
  location       = "EqSV5" # example location code
  bandwidth      = "1Gbps"
}

resource "aws_dx_private_virtual_interface" "pvif" {
  connection_id       = aws_dx_connection.dx.id
  name                = "pvif-razorops"
  vlan                = 4094
  address_family      = "ipv4"
  bgp_asn             = 65000
  amazon_address      = "175.45.176.2/30"
  customer_address    = "175.45.176.1/30"
  virtual_gateway_id  = aws_vpn_gateway.example.id
}
```

Best practices

- Use a VPN overlay as an automated failover if Direct Connect becomes unavailable.
- Place Direct Connect connections in multiple DX locations or use redundant LAG members for high availability.
- Use Transit Gateway + DX Gateway for centralized routing when connecting many VPCs or accounts.
- Monitor the link with CloudWatch metrics and SNMP (partner devices) and enable BGP route validation.
- Keep MTU consistent across the path (typically 1500 or 9001 for jumbo frames) and test end‑to‑end.
- Use access control lists and strict routing policies to limit exposure of on‑prem networks.

Use cases

- Large dataset transfer (backup, data lake ingestion) where predictable throughput lowers total transfer time and cost.
- Low‑latency interconnects for financial applications or real‑time analytics.
- Hybrid cloud deployments with VPC‑to‑on‑prem communication for authentication, file systems, or databases.
- Dedicated connectivity for regulated workloads where avoiding the public Internet is required.

Related Razorops posts

- [AWS VPC](/blog/aws-vpc/)
- [AWS Transit Gateway and routing patterns](/blog/aws-transit-gateway/)
- [AWS Site-to-Site VPN](/blog/aws-site-to-site-vpn/)
- [Amazon S3](/blog/amazon-s3/)
- [AWS Direct Connect vs VPN](/blog/aws-direct-connect-vs-vpn/)

Top 20 AWS Solutions Architect — Direct Connect & hybrid networking FAQ

1. Q: What is the difference between Direct Connect and VPN? — Direct Connect is a private dedicated link with predictable latency and throughput; VPN uses the Internet with encryption and variable performance.
2. Q: When should I use a Dedicated Connection vs Hosted Connection? — Use Dedicated for large, long‑term bandwidth needs; Hosted is quicker to provision through partners for smaller bandwidth.
3. Q: What is a Private VIF vs Public VIF vs Transit VIF? — Private VIF connects to a VGW for VPC access; Public VIF provides access to public AWS endpoints; Transit VIF connects to a DX Gateway for Transit Gateway integration.
4. Q: Can Direct Connect span regions? — Direct Connect terminates in a DX location in a region, but DX Gateway enables connecting multiple VPCs across regions/accounts.
5. Q: How do I achieve high availability with Direct Connect? — Use redundant connections across DX locations, LAG, and a VPN backup for failover.
6. Q: How is routing handled? — BGP is used over VIFs; use route filtering and advertise only required prefixes.
7. Q: What is Link Aggregation (LAG)? — Combine multiple physical connections into one logical connection for higher bandwidth and redundancy.
8. Q: How to secure Direct Connect? — Restrict routes, use ACLs, monitor BGP sessions, and combine with AWS IAM and network ACLs for resource controls.
9. Q: Is Direct Connect encrypted? — Direct Connect by itself is not encrypted; if encryption is required, run IPsec VPN over the Direct Connect link or use application‑level encryption.
10. Q: What are typical bandwidth options? — 1 Gbps, 10 Gbps, 50 Gbps, 100 Gbps for dedicated; hosted link sizes vary by partner.
11. Q: How much does Direct Connect cost? — Costs include port‑hours for dedicated connections, data transfer rates, and partner fees; pricing varies by region and port speed.
12. Q: Can I use Direct Connect to access S3 privately? — Yes — use a Public VIF or VPC endpoints; best practice is to use Gateway endpoints for S3 from VPCs.
13. Q: What is DX Gateway? — A global gateway that lets you connect Direct Connect connections to multiple VPCs across regions via Transit Gateway or VGW.
14. Q: How to test Direct Connect performance? — Run iperf tests over VIFs, monitor CloudWatch metrics and check BGP routes and path MTU.
15. Q: How long does provisioning take? — Dedicated connections take longer (days to weeks) due to physical provisioning; hosted connections via partners can be hours to days.
16. Q: Can I use VLAN tagging? — Yes, VIFs use VLANs (typically up to 4094) to segment virtual interfaces.
17. Q: How to handle IP addressing? — Plan non‑overlapping prefixes and coordinate with on‑prem routing; use private IPs for Private VIFs.
18. Q: Can Direct Connect be combined with Transit Gateway? — Yes — create a Transit VIF to connect to a Transit Gateway for large scale multi‑VPC connectivity.
19. Q: What monitoring should I enable? — CloudWatch metrics for DX, BGP logs, SNMP on partner devices, and flow logs for VPCs.
20. Q: When not to use Direct Connect? — For small, short‑lived workloads or when encryption over the public Internet is sufficient and latency variability is acceptable.
