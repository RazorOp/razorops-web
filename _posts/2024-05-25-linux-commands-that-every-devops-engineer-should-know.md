---
title: Linux commands that every DevOps engineer should know
description: Some essential Linux commands that every DevOps engineer should
  know. These commands cover a range of functionalities including file and
  directory management, process management, system monitoring, networking, and
  package management.
image: /images/blog/linux-commands-that-every-devops-engineer-should-know.webp
layout: post
permalink: /blog/:title
author: Shyam Mohan
category: Linux
date: 2024-05-25T03:59:00.000Z
---
Here are some essential Linux commands that every DevOps engineer should know. These commands cover a range of functionalities including file and directory management, process management, system monitoring, networking, and package management


### File and Directory Management

-   `ls`: List directory contents.
-   `cd`: Change the current directory.
-   `pwd`: Print the current working directory.
-   `mkdir`: Create a new directory.
-   `rm`: Remove files or directories.
-   `cp`: Copy files or directories.
-   `mv`: Move or rename files or directories.
-   `touch`: Create an empty file or update the timestamp of a file.
-   `find`: Search for files and directories.
-   `grep`: Search for patterns within files.

### File Viewing and Editing

-   `cat`: Concatenate and display file content.
-   `less`: View file content one page at a time.
-   `head`: Display the first few lines of a file.
-   `tail`: Display the last few lines of a file.
-   `nano / vi / vim`: Text editors for file editing.

### Process Management

-   `ps`: Display currently running processes.
-   `top`: Display real-time system statistics and running processes.
-   `htop`: An improved, interactive process viewer (needs to be installed separately).
-   `kill`: Terminate processes by PID.
-   `killall`: Terminate processes by name.
-   `systemctl`: Manage systemd services.

### System Monitoring

-   `df`: Display disk space usage.
-   `du`: Display disk usage of files and directories.
-   `free`: Display memory usage.
-   `uptime`: Display how long the system has been running.
-   `iostat`: Display CPU and I/O statistics (requires `sysstat` package).
-   `vmstat`: Display virtual memory statistics.

### Networking

-   `ifconfig`: Display or configure network interfaces (deprecated in favor of `ip` command).
-   `ip`: Display or configure IP addresses, routes, and devices.
-   `ping`: Check connectivity to a host.
-   `netstat`: Network statistics (deprecated in favor of `ss`).
-   `ss`: Display socket statistics.
-   `traceroute`: Display the route packets take to a network host.
-   `curl`: Transfer data from or to a server.
-   `wget`: Download files from the web.

### Package Management

**Debian-based distributions (e.g., Ubuntu):**

-   `apt-get / apt`: Package management commands.
    -   `sudo apt-get update`
    -   `sudo apt-get install package_name`
    -   `sudo apt-get upgrade`
    -   `sudo apt-get remove package_name`
    -   `sudo apt-cache search package_name`

**Red Hat-based distributions (e.g., CentOS, Fedora):**

-   `yum / dnf`: Package management commands.
    -   `sudo yum install package_name`
    -   `sudo yum update`
    -   `sudo yum remove package_name`
    -   `sudo yum search package_name`
    -   `sudo dnf install package_name`
    -   `sudo dnf update`
    -   `sudo dnf remove package_name`
    -   `sudo dnf search package_name`

### User and Permission Management

-   `chmod`: Change file permissions.
-   `chown`: Change file owner and group.
-   `usermod`: Modify user accounts.
-   `passwd`: Change user password.

### Miscellaneous

-   `alias`: Create command shortcuts.
-   `crontab`: Schedule periodic tasks.
-   `tar`: Archive files.
-   `ssh`: Securely connect to remote servers.
-   `scp`: Securely copy files between hosts.
