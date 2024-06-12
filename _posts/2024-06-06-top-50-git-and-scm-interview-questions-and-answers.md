---
title: Top 50 Git and SCM Interview Questions and Answers
description: Git is a distributed version control system designed for tracking
  changes in source code during software development.
image: /images/blog/top-50-git-and-scm-interview-questions-and-answers.webp
layout: post
permalink: /blog/:title/
author: Shyam Mohan
category: GIT
date: 2024-06-07T00:14:00.000Z
---
**Top 50 Git and SCM Interview Questions and Answers**

**1.  What is Git and how does it differ from other version control systems?**
    

Git is a distributed version control system designed for tracking changes in source code during software development. Unlike centralised version control systems (CVCS) like SVN, Git stores the full history of the project locally, allowing for disconnected operations and faster performance.

**2.  What are the basic Git commands you use in your workflow?**
    

Common Git commands include:

git init: Initialise a new Git repository

git clone: Clone a repository into a new directory

git add: Add file contents to the index

git commit: Record changes to the repository

git push: Update remote refs along with associated objects

git pull: Fetch from and integrate with another repository or a local branch

  

**3.  What is a branch in Git?**
    

A branch in Git is a lightweight movable pointer to a commit. It allows you to work on different parts of a project simultaneously without affecting the main codebase. Branches are commonly used for feature development, bug fixes, and experimentation.

**4.  What is a merge conflict and how do you resolve it?**
    

A merge conflict occurs when Git is unable to automatically merge changes from different branches. To resolve a merge conflict, you need to manually edit the conflicting files to resolve the differences, mark them as resolved using git add, and then commit the changes.

**5.  What is a Git repository?**
    

A Git repository is a data structure that stores metadata and object databases for a project. It contains all the files and directories associated with the project, along with the entire history of changes made to those files.

**6.  Explain the difference between Git rebase and Git merge.**
    

Git merge integrates changes from one branch into another, creating a merge commit to represent the integration point. Git rebase, on the other hand, moves the entire feature branch to begin on the tip of the master branch, rewriting the project history. Rebase results in a cleaner project history but should be used cautiously in a collaborative environment.

**7.  What is the purpose of .gitignore file?**
    

The .gitignore file specifies intentionally untracked files that Git should ignore. It's used to avoid committing files like build artifacts, temporary files, and IDE-specific files to the repository.

**8. How do you revert a commit that has already been pushed and made public?**

To revert a commit that has been pushed, you can use the git revert command followed by the commit hash of the commit you want to revert. This creates a new commit that undoes the changes introduced by the original commit.

**9. Explain the Git workflow you follow in your projects.**

Describe the workflow you're most comfortable with, such as feature branching, pull request review, continuous integration, and deployment strategies. Highlight any specific conventions or tools your team uses.

**10. What are Git hooks?**

Git hooks are scripts that Git executes before or after events such as commit, push, and receive. They allow you to customize and automate actions in your Git workflow, such as linting code before committing or triggering a deployment after pushing changes.

**11. Explain the concept of Git branching strategy.**

Git branching strategy defines how branches are used and organized in a project. Common strategies include GitFlow, GitHub Flow, and Trunk-Based Development. These strategies dictate when and how to create branches for features, bug fixes, releases, and hotfixes.

**12. What is the purpose of Git bisect?**

Git bisect is a binary search tool used to pinpoint the commit that introduced a bug or regression in the project's history. It automates the process of searching through commits, allowing developers to identify the specific commit where the bug was introduced.

**13. How do you squash multiple commits into a single commit?**

To squash multiple commits into a single commit, you can use the git rebase interactive mode. First, use git rebase -i HEAD~N, where N is the number of commits you want to squash. Then, mark the commits you want to squash with "squash" or "s", save and close the editor, and Git will prompt you to edit the commit message for the new combined commit.

**14. What is Git cherry-pick and when would you use it?**

Git cherry-pick is a command used to apply a specific commit from one branch to another. It's useful when you want to incorporate a single commit or a range of commits from one branch into another branch without merging the entire branch.

**15. Explain the difference between Git fetch and Git pull.**

Git fetch downloads the latest changes from a remote repository into the local repository, but it does not merge those changes into the current branch. Git pull, on the other hand, fetches the changes from the remote repository and merges them into the current branch automatically.

**16. What is Git submodules and when would you use them?**

Git submodules allow you to include other Git repositories as subdirectories within your own Git repository. They're useful for managing dependencies on external projects or libraries while keeping them isolated and version-controlled.

**17. What is a Git tag and how do you create one?**

A Git tag is a reference to a specific commit in the Git history, typically used to mark release points or important milestones. You can create a tag using the git tag command followed by the tag name and optionally the commit hash or branch name.

**18. Explain the difference between Git and GitHub.**

Git is a version control system used for tracking changes in source code during software development. GitHub is a web-based platform built around Git that provides hosting for Git repositories, collaboration tools, issue tracking, and other features for software development projects.

**19. What are Git hooks and how do they work?**

Git hooks are scripts that Git executes before or after specific Git actions, such as commit, push, and receive. They allow developers to automate tasks or enforce policies in the Git workflow by running custom scripts at various points in the process.

**20 How do you revert a commit that hasn't been pushed yet?**

If you want to revert the most recent commit that hasn't been pushed yet, you can use the git reset --hard HEAD^ command. This command resets the current branch to the previous commit, discarding the changes introduced by the most recent commit.

  

**21. What is a Git rebase and when would you use it?**

Git rebase is the process of moving or combining a sequence of commits to a new base commit. It's often used to incorporate changes from one branch into another while maintaining a linear project history, or to clean up a messy commit history before merging.

**21. Explain the difference between Git reset, Git revert, and Git checkout.**

Git reset moves the HEAD and current branch pointer to a different commit, optionally modifying the index and working directory. Git revert creates a new commit that undoes the changes introduced by a specified commit. Git checkout switches branches or restores files from either the index or a specific commit.

**23. What is Git stash and how do you use it?**

Git stash temporarily shelves changes that are not ready to be committed, allowing you to switch branches or perform other operations without committing incomplete work. You can use git stash push to stash changes, git stash pop to apply the most recently stashed changes, and git stash list to list all stashed changes.

**24. What is Git reflog and how can it be helpful?**

Git reflog is a reference log that records the history of HEAD movements and other commit changes in a repository. It can be helpful for recovering lost commits, branches, or other changes, especially if you've accidentally reset your branch or performed other destructive actions.

**25. What is a Git submodule and why would you use it?**

A Git submodule is a repository embedded within another repository as a subdirectory. Submodules allow you to include external dependencies or projects within your own project while keeping them isolated and version-controlled. They're useful for managing complex projects with multiple dependencies.

**26. Explain the difference between Git fetch and Git pull with rebase.**

Git fetch downloads the latest changes from a remote repository into the local repository without merging them into the current branch. Git pull with rebase, on the other hand, fetches the changes and then rebases the current branch onto the latest commit from the remote branch, resulting in a linear history.

**27. What is the purpose of a Gitignore file and how do you use it?**

The .gitignore file specifies intentionally untracked files and directories that Git should ignore. You can use it to exclude files like build artifacts, temporary files, logs, and IDE-specific files from being tracked by Git.

**28. What is Git blame and how can it be helpful?**

Git blame is a command that shows the author and last commit for each line in a file. It can be helpful for identifying who made specific changes to a file and when, which can be useful for understanding the history of a codebase or debugging issues.

**29. What is Git flow and how does it work?**

Git flow is a branching model for Git that defines a standard workflow for managing feature development, release preparation, and hotfixes. It involves using different types of branches (e.g., feature branches, release branches) and merging them at specific points in the development lifecycle.

**30. What are some best practices for collaborating with Git in a team environment?**

Some best practices include using descriptive commit messages, creating feature branches for new development, regularly pulling changes from the remote repository, reviewing code through pull requests, resolving merge conflicts promptly, and documenting conventions and workflows for the team.

  

**31. What is GitLab, and how does it differ from GitHub?**

GitLab is a web-based DevOps lifecycle tool that provides Git repository management, issue tracking, continuous integration/continuous deployment (CI/CD), and more. While GitHub primarily focuses on hosting Git repositories and collaboration, GitLab offers a more comprehensive set of features for the entire software development lifecycle.

**32. What is the difference between a Git repository and a Git project?**

In Git terminology, a repository (or repo) refers to a collection of files and their revision history, managed by Git. A Git project, on the other hand, is a broader term that encompasses the entire development effort, which may involve multiple repositories, documentation, issue tracking, and collaboration tools.

**33. Explain the concept of Git subversion (SVN) bridge.**

The Git-SVN bridge allows developers to interact with an SVN (Subversion) repository using Git commands. It enables developers familiar with Git to work with projects hosted on SVN repositories, providing a smoother transition between the two version control systems.

**34. What are Git hooks, and why are they useful in a development workflow?**

Git hooks are scripts that Git executes before or after specific Git events, such as committing, pushing, or receiving changes. They are useful for automating tasks, enforcing project-specific policies, integrating with external systems, and maintaining consistency in the development workflow.

**35. What is the purpose of a Git submodule, and when should you use them?**

A Git submodule is a separate Git repository embedded within another Git repository as a subdirectory. They are useful for managing dependencies on external libraries or projects within your own project. Submodules allow you to include specific versions of external dependencies and track changes to them independently.

**36. Explain the difference between Git rebase and Git merge in terms of project history.**

Git merge integrates changes from one branch into another, preserving the commit history of both branches and creating a merge commit. Git rebase, however, rewrites the commit history by moving or combining commits onto a new base commit, resulting in a linear project history without merge commits.

**37. What are some advantages and disadvantages of using Git for version control?**

Advantages of Git include its distributed nature, fast performance, powerful branching and merging capabilities, and robust support for collaborative development. Disadvantages may include a steeper learning curve, complexity in managing large repositories, and occasional conflicts in distributed workflows.

**38. How do you resolve a merge conflict in Git?**

To resolve a merge conflict in Git, you need to manually edit the conflicting files to resolve the differences, mark them as resolved using git add, and then commit the changes. It's essential to carefully review the conflicting changes and ensure that the final resolution maintains the integrity of the codebase.

**39. What is Git cherry-pick, and when would you use it?**

Git cherry-pick is a command used to apply a specific commit from one branch to another. It's useful when you want to incorporate a single commit or a range of commits from one branch into another branch without merging the entire branch.

**40. What are some common branching models used in Git, and how do they differ?**

Common branching models include GitFlow, GitHub Flow, and Trunk-Based Development. GitFlow emphasises long-lived feature branches, release branches, and hotfix branches. GitHub Flow promotes short-lived feature branches and continuous deployment directly from the main branch. Trunk-Based Development advocates for a single trunk branch with feature toggles or feature flags for new development.

**41. What is GitLab CI/CD, and how does it work?**

GitLab CI/CD is a built-in continuous integration and continuous deployment (CI/CD) tool provided by GitLab. It allows developers to automate the testing, building, and deployment processes of their applications directly from GitLab. CI/CD pipelines are defined using a configuration file (.gitlab-ci.yml) and executed whenever changes are pushed to the repository.

**42. Explain the concept of Git rebase interactive and when you might use it.**

Git rebase interactive (git rebase -i) allows you to interactively reorder, squash, edit, or drop commits during the rebase process. You might use it to clean up your commit history before merging a feature branch, combine multiple small commits into a single coherent commit, or reorder commits for better readability.

**43. What is Git LFS (Large File Storage), and why is it useful?**

Git LFS is an extension for Git that enables the versioning of large files by storing them outside the Git repository and replacing them with pointer files. It's useful for managing binary assets, such as images, audio, video, or large datasets, that would otherwise bloat the repository size and slow down operations.

**44. Explain the difference between Git rebase and Git cherry-pick.**

Git rebase moves a series of commits to a new base commit, rewriting the commit history, whereas Git cherry-pick applies a specific commit from one branch to another without modifying the commit history. Rebase is useful for integrating changes from one branch into another, while cherry-pick is useful for applying individual commits.

**45. What are Git hooks, and can you give examples of when they might be used?**

Git hooks are customizable scripts that Git executed before or after specific Git events. Examples include pre-commit hooks for enforcing code formatting or running tests before committing changes, post-receive hooks for triggering deployment processes after receiving changes, and pre-push hooks for enforcing code review policies before pushing changes to the remote repository.

**46. What is the purpose of Git blame, and how can it be used?**

Git blame is a command that shows the author and last commit for each line in a file. It's useful for identifying who made specific changes to a file and when, which can be helpful for understanding the history of a codebase, assigning accountability, or investigating the origin of particular lines of code.

**47. What is the Git object model, and how does it work?**

The Git object model represents the internal structure of a Git repository. It consists of four types of objects: blobs (file contents), trees (directory structure), commits (snapshot of the project at a specific point in time), and tags (references to specific commits). Git uses these objects to track changes and reconstruct the project's history.

**48. Explain the difference between Git fetch and Git pull with rebase.**

Git fetch downloads the latest changes from a remote repository into the local repository without merging them into the current branch, while Git pull with rebase fetches the changes and then rebases the current branch onto the latest commit from the remote branch, resulting in a linear history without merge commits.

**49. What is Git stash, and how can it be used?**

Git stash temporarily shelves changes that are not ready to be committed, allowing you to switch branches or perform other operations without committing incomplete work. It's useful for saving work in progress, switching to a different task or branch temporarily, and returning to the changes later.

**50. How do you revert a commit in Git?**

To revert a commit in Git, you can use the git revert command followed by the commit hash of the commit you want to revert. This creates a new commit that undoes the changes introduced by the original commit, effectively reverting the project to its state before the commit was made.
