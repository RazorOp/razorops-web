---
title: Setting up your first deployment pipeline
layout: default
description: Deploying applications efficiently and reliably is a cornerstone of modern software development
image: /images/blog/power-of-automation-devops.webp
author: Shyam Mohan
date: 2023-01-19T05:44:00.000Z
permalink: /setting-up-your-first-deployment-pipeline

---

### Setting Up Your First Deployment Pipeline with RazorOps

Deploying applications efficiently and reliably is a cornerstone of modern software development. RazorOps, a robust CI/CD platform, simplifies this process by automating your build, test, and deployment workflows. Here's how you can set up your first deployment pipeline with RazorOps:

---

#### **1. Sign Up and Create a Project**
- **Step 1:** Visit [RazorOps](https://razorops.com) and sign up for an account.
- **Step 2:** Once logged in, create a new project by connecting RazorOps to your Git repository (GitHub, GitLab, or Bitbucket).
- **Step 3:** Choose the repository you want to integrate.

---

#### **2. Create the `.razorops.yaml` Configuration File**
The `.razorops.yaml` file defines the stages of your CI/CD pipeline. Here's a simple example for a Node.js application:


```yaml
# spec version (v1/v2)
version: v2
global: # defines default properties for the `tasks`
  runner:
    os_image: ubuntu # use Linux-VM build environment to run the tasks
  variables: # environment variables to be injected into each task
  - CGO_ENABLED=0
  - GOOS=linux
  - GOARCH=amd64
  - GOFLAGS=-mod=vendor
  - LD_FLAGS=-w -s

tasks:
  unit-tests: # first task
    steps:
    - checkout  # clone the git repo

    # It tries to pull cached content by calculating an unique key.
    - cache/pull: go-dep-{{ checksum "go.sum" }}

    # fetch code dependencies ( uses go modules )
    - name: Download dependencies
      run: go mod vendor

    - name: Execute test suite
      commands:
      - GO_PACKAGES=$(go list ./... | grep -v vendor)
      ## run tests cases and generate reports
      - go test -coverprofile=coverage.out $GO_PACKAGES
      - mkdir coverage && go tool cover -html=coverage.out -o coverage/index.html

    # publish code dependencies with an unique key to speedup the next build 
    - cache/push:
        key: go-dep-{{ checksum "go.sum" }}
        paths: [~/go/pkg/mod]
    # upload coverage report to view it later in Dashboard
    - reports/html:
        name: cover
        dir: coverage/index.html

  compile: # second task (compile and unit-tests will start in parallel)
    steps:
    # clone git repo
    - checkout

    # restore cache if available
    - cache/pull: go-dep-{{ checksum "go.sum" }}

    # download missing dependencies
    - run: go mod vendor

    # compile package
    - commands:
      - go build -ldflags "$LD_FLAGS" -o hack/dist/api ./cmd/server

    # persist files needed for deploy task
    - workspace/persist:
        paths: [hack, Dockerfile.ci]

  deploy:
    when: branch == 'develop' # only run if code is pushed to develop branch
    depends: [unit-tests, compile] # wait for compile and unit-tests to finish
    steps:
    # download the files persisted from upstream tasks (compile)
    - workspace/attach

    # build and push a Docker image. You will need to add the credentials in Dashboard
    - docker/build:
        image: us.gcr.io/demo/api
        tags: ["${CI_COMMIT_SHA:0:8}", "${CI_REPO_BRANCH}", "latest"]
        dockerfile: Dockerfile.ci
        context: hack
        push: true

    # deploy on kubernetes cluster `example`, You need to add the credentials in Dashboard
    - name: Update image using kubectl 
      commands:
      - DOCKER_IMAGE=us.gcr.io/demo/api:${CI_COMMIT_SHA:0:8}

      - kubectl config use-context example
      - kubectl set image deployment/api api=$DOCKER_IMAGE
```

Replace the placeholders (`$SERVER_PASSWORD`, `$SERVER_USER`, `$SERVER_IP`) with your actual server details.

[Explore Our Docs for More details](https://docs.razorops.com/config/example/) 

---

#### **3. Add Environment Variables**
- Navigate to the RazorOps dashboard.
- Go to the **Environment Variables** section for your project.
- Add variables like:
  - `SERVER_IP`
  - `SERVER_USER`
  - `SERVER_PASSWORD`

---

#### **4. Commit and Push the Configuration**
- Add the `.razorops.yaml` file to the root of your repository.
- Commit and push the file to trigger RazorOps.

```bash
git add .razorops.yaml
git commit -m "Add RazorOps configuration"
git push origin main
```

---

#### **5. Monitor the Pipeline**
- Head back to the RazorOps dashboard.
- Monitor the stages of your pipeline (build, test, deploy).
- Fix any errors that occur during execution.

---

#### **6. Validate the Deployment**
- Verify that your application is running on the target server.
- Test the deployed application to ensure it meets expectations.

---

#### **Tips for Success**
- **Start small:** Begin with a simple pipeline and gradually add complexity.
- **Use caching:** Speed up your builds by caching dependencies.
- **Integrate tests:** Ensure high-quality deployments by running automated tests.
- **Secure credentials:** Use RazorOps' secrets manager for sensitive information.

---

By following these steps, you can quickly set up your first deployment pipeline with RazorOps. Whether you’re deploying to a cloud provider or an on-premise server, RazorOps provides the tools you need to streamline your development workflow.