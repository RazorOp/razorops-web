---
title: 2024-10-07 Top 50 GitLab CI/CD Interview Question and Answers
description: "GitLab CI/CD is a built-in tool in GitLab for continuous
  integration (CI) and continuous delivery/deployment (CD). "
image: /images/blog/top-50-github-actions-interview-question-and-answers-1-.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: GitLab
date: 2024-10-07T08:37:00.000Z
---
### 1. **What is GitLab CI/CD?**

-   **Answer:** GitLab CI/CD is a built-in tool in GitLab for continuous integration (CI) and continuous delivery/deployment (CD). It automates the process of software development, testing, and deployment.

### 2. **What are the key components of GitLab CI/CD?**

-   **Answer:** The key components include:
    -   **.gitlab-ci.yml file:** Defines the pipeline configuration.
    -   **Runners:** Execute jobs.
    -   **Jobs and Stages:** Define tasks and group them.
    -   **Pipelines:** Automate workflows from code to deployment.

### 3. **How do you define a pipeline in GitLab CI/CD?**

-   **Answer:** A pipeline is defined in the `.gitlab-ci.yml` file, where you specify stages, jobs, and configuration for each job in a YAML format.

### 4. **What is the .gitlab-ci.yml file?**

-   **Answer:** It’s a YAML file placed in the root directory of a GitLab repository that contains the configuration for CI/CD pipelines.

### 5. **Explain GitLab Runners.**

-   **Answer:** Runners are processes that execute the scripts defined in GitLab CI/CD jobs. They can be shared or specific to a project.

### 6. **What are the types of GitLab Runners?**

-   **Answer:** Runners are classified into:
    -   **Shared Runners:** Used by multiple projects.
    -   **Specific Runners:** Dedicated to a single project.

### 7. **How do you install a GitLab Runner?**

-   **Answer:** You can install a GitLab Runner by downloading the runner binary, registering it with your GitLab instance, and setting up the desired configuration.

### 8. **What is a Job in GitLab CI/CD?**

-   **Answer:** A job is a task defined in `.gitlab-ci.yml` that runs independently and can contain various commands to perform specific tasks, like building or testing.

### 9. **What are Stages in GitLab CI/CD?**

-   **Answer:** Stages are used to group jobs in a pipeline, allowing jobs in one stage to execute only after jobs in previous stages are complete.

### 10. **How can you define stages in GitLab?**

-   **Answer:** Stages are defined at the top level in the `.gitlab-ci.yml` file under the `stages` keyword, with each job assigned a stage.

### 11. **What is caching in GitLab CI/CD?**

-   **Answer:** Caching stores dependencies or compiled outputs to reduce redundant processing time in future jobs or pipelines.

### 12. **What is an artifact in GitLab CI/CD?**

-   **Answer:** Artifacts are the outputs of jobs that are saved and can be used by later stages or downloaded from GitLab.

### 13. **How do you set up a deployment job in GitLab?**

-   **Answer:** Set up a deployment job by defining a job with a `stage: deploy` in the `.gitlab-ci.yml` and configuring the deployment commands.

### 14. **What is the `only` and `except` keyword in GitLab CI/CD?**

-   **Answer:** `only` specifies the branches or tags that the job will run on, while `except` excludes certain branches or tags.

### 15. **How does the `variables` keyword work in GitLab CI/CD?**

-   **Answer:** `variables` define environment variables that jobs can use, either globally or within specific jobs.

### 16. **How can you define job dependencies in GitLab?**

-   **Answer:** Use the `dependencies` keyword to define which jobs a job depends on, allowing access to their artifacts.

### 17. **What is a trigger in GitLab CI/CD?**

-   **Answer:** Triggers allow you to start a pipeline from an external event, API call, or another project.

### 18. **What is `before_script` and `after_script` in GitLab CI/CD?**

-   **Answer:** `before_script` runs commands before each job, while `after_script` runs commands after each job.

### 19. **Explain GitLab environment variables.**

-   **Answer:** GitLab environment variables allow storage of credentials, secrets, or other dynamic configuration settings within the CI/CD pipeline.

### 20. **How do you run a job manually in GitLab CI/CD?**

-   **Answer:** Use the `when: manual` attribute within a job definition, which requires manual intervention to trigger.

### 21. **What is a manual job in GitLab CI/CD?**

-   **Answer:** A manual job is set to `when: manual`, meaning it will not automatically run and requires user initiation.

### 22. **What is GitLab CI/CD’s auto-cancel feature?**

-   **Answer:** The auto-cancel feature automatically cancels redundant pipelines for a branch if a new commit is pushed.

### 23. **Explain `only: changes` in GitLab CI/CD.**

-   **Answer:** This runs jobs only when specified files or directories change.

### 24. **What is a multi-project pipeline?**

-   **Answer:** Multi-project pipelines allow triggering pipelines across different GitLab projects, enhancing cross-project CI/CD workflows.

### 25. **How can you pass artifacts between stages?**

-   **Answer:** Artifacts are defined in one job and retrieved by specifying `dependencies` in subsequent jobs.

### 26. **How do you handle secret management in GitLab CI/CD?**

-   **Answer:** Use GitLab’s environment variables and vault integrations to securely store and retrieve secrets.

### 27. **What is GitLab CI/CD’s ‘needs’ keyword?**

-   **Answer:** `needs` allows jobs to run concurrently even if they are in different stages.

### 28. **What is the purpose of the `script` keyword?**

-   **Answer:** It defines the list of commands that will execute within a job.

### 29. **How does GitLab CI/CD handle retries for failed jobs?**

-   **Answer:** GitLab allows you to set `retry` options to automatically retry failed jobs.

### 30. **What are `extends` in GitLab CI/CD?**

-   **Answer:** `extends` allows jobs to inherit configurations from another job or job template.

### 31. **What is the purpose of `include` in GitLab CI/CD?**

-   **Answer:** `include` allows you to import external `.yml` configurations into the main `.gitlab-ci.yml`.

### 32. **How do you set up pipeline notifications in GitLab?**

-   **Answer:** Configure notifications by setting up integrations or using the `notification_email` and Slack webhook options.

### 33. **How does GitLab CI/CD support Kubernetes deployments?**

-   **Answer:** GitLab integrates with Kubernetes clusters, allowing CI/CD pipelines to deploy applications directly to Kubernetes.

### 34. **How do you skip a pipeline in GitLab?**

-   **Answer:** Add `[skip ci]` to the commit message to skip triggering a pipeline.

### 35. **How can you limit job concurrency in GitLab CI/CD?**

-   **Answer:** Use `resource_group` to restrict concurrency of jobs within a resource group.

### 36. **What is a parent-child pipeline in GitLab?**

-   **Answer:** Parent-child pipelines split complex pipelines into separate child pipelines triggered by a parent.

### 37. **What are GitLab CI/CD templates?**

-   **Answer:** Templates are reusable YAML configurations provided by GitLab for common CI/CD tasks.

### 38. **How do you debug failed jobs in GitLab CI/CD?**

-   **Answer:** Enable debugging in jobs using `DEBUG` flags, check job logs, and use retry or SSH to troubleshoot.

### 39. **What is a dynamic environment in GitLab?**

-   **Answer:** Dynamic environments are temporary environments created for specific branches or merges, used for testing.

### 40. **How do you manage conditional job execution?**

-   **Answer:** Use rules like `only`, `except`, `rules`, and `variables` to conditionally execute jobs based on branch, tag, or pipeline type.

### 41. **What is GitLab CI/CD’s Vault integration?**

-   **Answer:** GitLab integrates with HashiCorp Vault to manage and securely inject secrets into CI/CD jobs.

### 42. **How do you handle failed job notifications?**

-   **Answer:** Configure project notifications, use Slack/webhook integrations, or define specific notification settings for failed jobs.

### 43. **What is `allow_failure` in GitLab CI/CD?**

-   **Answer:** `allow_failure` lets a job fail without impacting the overall pipeline status.

### 44. **What are protected variables in GitLab?**

-   **Answer:** Protected variables are available only on protected branches or tags, enhancing security for sensitive information.

### 45. **What is a release job in GitLab CI/CD?**

-   **Answer:** A release job is a job that creates and publishes a release package, often used in production deployments.

### 46. **How do you roll back a deployment in GitLab CI/CD?**

-   **Answer:** Rollback can be automated by defining a separate rollback job or using GitLab’s environment rollback features.

### 47. **How do you handle database migrations in GitLab CI/CD?**

-   **Answer:** Use a dedicated migration job or script that executes during deployment to apply changes to the database schema.

### 48. **How can you secure your CI/CD pipeline in GitLab?**

-   **Answer:** Secure CI/CD by using protected branches, environment variables, Vault integration, and limiting runner access.

### 49. **What is the purpose of GitLab CI/CD’s CI_LINT API?**

-   **Answer:** The CI_LINT API checks the syntax and validity of `.gitlab-ci.yml` files, helpful for testing configurations.

### 50. **How do you automate GitLab CI/CD for monorepo projects?**

-   **Answer:** Use `only: changes` for specific job triggers, define multiple pipelines in `.gitlab-ci.yml`, or split jobs based on subdirectories.
