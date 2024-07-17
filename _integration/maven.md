---
title: maven
description: Maven project structure and contents are declared in an xml file, pom.xml,
  referred as Project Object Model (POM), which is the fundamental unit of the entire
  Maven system. In later chapters, we will explain POM in detail.
permalink: "/integration/:title"
layout: integrationtool
logo: "/images/integration/maven-logo.png"
category: build tools
---

# What is Maven?

Maven is a project management and comprehension tool that provides developers a complete build lifecycle framework. Development team can automate the project's build infrastructure in almost no time as Maven uses a standard directory layout and a default build lifecycle.

In case of multiple development teams environment, Maven can set-up the way to work as per standards in a very short time. As most of the project setups are simple and reusable, Maven makes life of developer easy while creating reports, checks, build and testing automation setups.

Maven provides developers ways to manage the following −

    Builds
    Documentation
    Reporting
    Dependencies
    SCMs
    Releases
    Distribution
    Mailing list

To summarize, Maven simplifies and standardizes the project build process. It handles compilation, distribution, documentation, team collaboration and other tasks seamlessly. Maven increases reusability and takes care of most of the build related tasks.
Maven Evolution

Maven was originally designed to simplify building processes in Jakarta Turbine project. There were several projects and each project contained slightly different ANT build files. JARs were checked into CVS.

Apache group then developed Maven which can build multiple projects together, publish projects information, deploy projects, share JARs across several projects and help in collaboration of teams.
Objective

The primary goal of Maven is to provide developer with the following −

    A comprehensive model for projects, which is reusable, maintainable, and easier to comprehend.

    Plugins or tools that interact with this declarative model.

Maven project structure and contents are declared in an xml file, pom.xml, referred as Project Object Model (POM), which is the fundamental unit of the entire Maven system. In later chapters, we will explain POM in detail.
