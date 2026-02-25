---
title: AWS AppSync
description: AWS AppSync simplifies the process of developing an application by
  providing us to create flexible, secure, extensible, and real-time APIs.
image: /images/blog/aws-appsync.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: AWS
date: 2024-12-22T19:18:00.000Z
---
**What is AWS AppSync?**

AWS AppSync is a managed GraphQL service that lets you build flexible, secure, and real‑time APIs which connect client applications to multiple backend data sources (DynamoDB, Aurora Serverless via RDS Data API, Lambda, HTTP endpoints, OpenSearch, and more). AppSync provides query/mutation/subscription support, offline synchronization, conflict resolution, fine‑grained authorization, and resolver pipelines so teams can focus on business logic instead of operating GraphQL infrastructure.

**Key capabilities**

- GraphQL API endpoint (queries, mutations, subscriptions).
- Multiple data sources: Amazon DynamoDB, Aurora Serverless (RDS Data API), Lambda, HTTP, OpenSearch.
- Real‑time and offline: websocket subscriptions, client SDK offline sync, and conflict resolution strategies.
- Authorization: Amazon Cognito, IAM, API key, and OpenID Connect (OIDC).
- Pipeline resolvers: compose multiple operations into a single GraphQL resolver.
- Caching: configurable per‑field or per‑resolver TTL to reduce backend traffic.

Why use AppSync? Use it when you want a single GraphQL endpoint that aggregates many backends, supports real‑time updates, and offers built‑in auth and offline sync for mobile and web clients.

**Core concepts**

- Schema: GraphQL type definitions and operations (Query/Mutation/Subscription).
- Resolvers: mapping templates (VTL) or Lambda functions that translate GraphQL operations to data source actions.
- Data sources: the backend systems connected to AppSync.
- Subscriptions: push updates to subscribed clients when mutations occur.

**When to choose AppSync vs REST/API Gateway**

- Choose AppSync when clients need flexible querying, client-driven field selection, real‑time updates, or offline sync. Use API Gateway + REST for simple CRUD or when strict HTTP semantics are required.

**Simple GraphQL schema example**

```graphql
type Post {
  id: ID!
  title: String!
  content: String
  authorId: ID!
  createdAt: AWSDateTime
}

input CreatePostInput { title: String!, content: String, authorId: ID! }

type Query {
  getPost(id: ID!): Post
  listPosts(limit: Int, nextToken: String): [Post]
}

type Mutation {
  createPost(input: CreatePostInput!): Post
}

type Subscription {
  onCreatePost: Post
    @aws_subscribe(mutations: ["createPost"])
}
```

**Example: Lambda resolver (Node.js)**

```javascript
// handler.js
const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  // AppSync passes GraphQL arguments under event.arguments
  const { input } = event.arguments;
  const item = { id: Date.now().toString(), ...input, createdAt: new Date().toISOString() };
  await dynamo.put({ TableName: process.env.TABLE, Item: item }).promise();
  return item;
};
```

Client example (AWS Amplify)

```javascript
import { API, graphqlOperation } from 'aws-amplify';
const mutation = `mutation CreatePost($input: CreatePostInput!){ createPost(input:$input){ id title } }`;
await API.graphql(graphqlOperation(mutation, { input: { title:'Hello', content:'World', authorId:'u1' } }));
```

Subscriptions (client): AppSync client SDK or Amplify can subscribe to `onCreatePost` to receive real‑time updates.

**Common AppSync patterns & use cases**

- Mobile/web apps with offline sync (e.g., note taking, chat, collaboration).
- Real‑time dashboards and notifications.
- Aggregating multiple microservices and data stores behind a single GraphQL API.
- Backend for Single Page Applications where clients request exactly the data they need.

**Best practices**

- Model your GraphQL schema for access patterns (avoid heavy nested resolvers for hot fields).
- Use DynamoDB for high‑throughput, single‑digit ms reads/writes; use Aurora Serverless via RDS Data API for relational queries.
- Prefer VTL resolvers for simple CRUD to avoid Lambda cold starts; use Lambda for complex business logic.
- Enable fine‑grained auth: combine Cognito user pools for user auth and IAM for service-to-service access.
- Use caching (per‑resolver TTL) for expensive read operations.
- Use pipeline resolvers to compose multiple data source calls or implement authorization checks.
- Limit subscription fan‑out with filters and selective subscriptions; monitor concurrent connections.

**Security & monitoring**

- Secure endpoints with Cognito/OIDC/IAM and restrict resolver permissions using IAM roles.
- Log resolver requests and enable CloudWatch logs for VTL templates during development.
- Use AWS X‑Ray for tracing Lambda resolvers and API latency.

**Cost optimization tips**

- Cache frequently requested fields or responses to reduce resolver executions.
- Limit long‑running subscriptions and remove unused API keys.
- Prefer VTL and direct data source access when possible (Lambda incurs compute costs and cold starts).

**Related Razorops posts**

- [Amazon Cognito](/blog/amazon-cognito/)
- [Amazon DynamoDB](/blog/amazon-dynamodb/)
- [AWS Lambda](/blog/aws-lambda/)
- [Amazon SQS](/blog/amazon-simple-queue-service-sqs/)
- [AWS SNS](/blog/aws-sns-simple-notification-service/)
- [AWS Step Functions](/blog/aws-step-functions/)

**Top 20 AWS Solutions Architect — AppSync & GraphQL focused FAQ (brief answers)**

1. Q: What is AppSync? — Managed GraphQL service with real‑time and offline features.
2. Q: AppSync vs API Gateway? — AppSync = GraphQL, flexible client queries, subscriptions; API Gateway = REST/HTTP.
3. Q: How to secure AppSync? — Cognito, OIDC, IAM, and field‑level auth with resolver checks.
4. Q: What data sources does AppSync support? — DynamoDB, Lambda, HTTP, RDS Data API (Aurora Serverless), OpenSearch.
5. Q: When to use VTL resolvers vs Lambda? — VTL for simple mapping/CRUD; Lambda for complex logic or heavy processing.
6. Q: How does offline sync work? — AppSync client SDK queues local changes and reconciles with server using conflict resolution.
7. Q: How does AppSync handle conflicts? — Configurable strategies (client‑wins, server‑wins, or custom resolver logic).
8. Q: Can AppSync scale subscriptions? — Yes, but watch concurrent connections and use subscription filters to limit fan‑out.
9. Q: How to model schema for performance? — Design around access patterns and minimize nested resolver calls.
10. Q: How to test resolvers? — Use local mapping template testing and AppSync console’s resolver simulator.
11. Q: Can I use Aurora with AppSync? — Yes via RDS Data API or HTTP resolvers to an application layer.
12. Q: What are pipeline resolvers? — Resolver chains that run multiple steps (e.g., auth check → DB write → event publish).
13. Q: How to monitor AppSync? — CloudWatch metrics/logs, X‑Ray for Lambda, and resolver log streaming.
14. Q: Pricing considerations? — You’re charged for query and real‑time operations plus data transfer; use caching to save cost.
15. Q: Can AppSync integrate with CI/CD? — Yes — manage GraphQL schema and resolvers in IaC (CloudFormation, CDK, Terraform) and deploy via pipeline.
16. Q: How to version schema? — Use feature flags, new field names, or staged APIs; AppSync supports multiple APIs per account.
17. Q: How to handle large payloads? — Store large objects in S3 and return signed URLs from resolvers.
18. Q: How to implement pagination? — Use cursors (nextToken) and limit parameters in resolvers.
19. Q: How to do authorization per field? — Use resolver logic and context identity (Cognito claims) to enforce field‑level access.
20. Q: When not to use AppSync? — Highly transactional relational workloads with complex joins (consider REST + relational DB and service layer).

**Next steps / optional add‑ons I can add**

- Provide a full runnable example (small Express/Lambda backend + AppSync schema + Amplify client).
- Add CloudFormation/CDK/Terraform IaC to provision an AppSync API, DynamoDB table, and Cognito user pool.
- Add resolver mapping template examples (VTL) and pipeline resolver walkthroughs.

If you want, I can now add a runnable example and IaC to the repo. Which would you prefer first?
