---
title: How to Deploy a Static Website to AWS S3 with Razorops CI/CD
description: Follow this post to deploy your static website using aws s3 free of cost just in 15 min.
keywords: Static Website, AWS S3, Razorops CI/CD, deployment

permalink: "/blog/:title"
layout: post
date: '2021-04-13 14:15:43'
author: Shyam Mohan
category: Razorops CICD
image: "/images/blog/how-to-deploy-a-static-website-to-aws-s3-with-razorops-ci-cd.webp"
---

Follow this post to deploy your static website using aws s3 free of cost just in 15 min. <br>You need following account and tool<br><br>
1) Website source code (<a href="https://github.com/razorops-public/deploy-a-static-website-to-aws-s3" target="_blank">Sample Code</a>)<br>
2) Github or Gitlab or Bitbucket account to host your website code<br>
3) Razorops Account for CI/CD (<a href="https://dashboard.razorops.com/users/sign_up" target="_blank">Signup Razorops</a>)<br>
4) AWS account and S3 Bucket to upload your website code<br>

<br><br>
<b>1) Last thing first,</b> let's create amazon account and create a bucket where you will upload your website code. while creating the aws s3 bucket name select the name of bucket same as your domain name or sub-domain name for example if you what to host website at www.example.com, create a S3 bucket name as www.example.com, I adding one images for aws.petshub.in
<br><br>
<img src="/images/blog/deploy-a-static-website-to-AWS-with-Razorops-CICD.png" >
<br><br>

<b>2) Goto properties and enable static website hosting</b>
<br><br>
<img src="/images/blog/deploy-a-static-website-to-AWS-with-Razorops-CICD-1.png" >
<br><br>

<b>3) Goto permissions and add bucket policies </b>
<br><br>
<img src="/images/blog/deploy-a-static-website-to-AWS-with-Razorops-CICD-2.png" >
<br>
<pre>
{
  "Version":"2012-10-17",
  "Statement":[
    {
      "Sid":"PublicRead",
      "Effect":"Allow",
      "Principal": "*",
      "Action":["s3:GetObject","s3:GetObjectVersion"],
      "Resource":["arn:aws:s3:::DOC-EXAMPLE-BUCKET/*"]
    }
  ]
}

</pre>
<br>
Replace DOC-EXAMPLE-BUCKET name with your bucket name
<br>
Now you are set to upload you website code, after uploading you can find the website url under properties tab at <b>Static website hosting</b>, you should fine your website here. 

<br><br>
<img src="/images/blog/deploy-a-static-website-to-AWS-with-Razorops-CICD-3.png" >
<br><br>
You can use <a href="https://www.cloudflare.com/en-gb/" target="_blank">cloudflare</a> to host your website and get a free ssl for your domain. Here add CNAME for your your sub-domain and point to the URL give by AWS s3.

<br><br>
<img src="/images/blog/deploy-a-static-website-to-AWS-with-Razorops-CICD-4.png" >
<br><br>
<h3>Add Razorops CI/CD for aws s3</h3>
<br><br>
<img src="/images/blog/add-razorops-ci-cd-to-aws-s3.png" >
<br><br>
Following Setup to add Razorops CICD for AWS S3<br>
1) Create Razorops Account<br>
2) Create Pipeline<br>
3) Add AWS ENV to pipeline<br>
4) Add .razorops.yaml file to your project root and push your code as specified branch 

<br><br>
<img src="/images/blog/razorops-cicd-for-aws-s3.gif" >
<br><br>

Following is one sample razorops yaml file to upload static website code to amazon S3.
<br>
<br>
<pre>
tasks:
  build:
    steps:
    - checkout
    # commands to upload static pages folder to AWS S3
    - commands:
      - aws s3 rm s3://$AWS_S3_BUCKET --recursive
      - aws s3 cp _site s3://$AWS_S3_BUCKET --recursive
      if: branch == 'main'
</pre>
<br><br>
Following is one sample razorops yaml file to build jekyll website and upload code to amazon S3.
<br>
<br>
<pre>
tasks:
  build:
    steps:
    - checkout
    # commands to build jekyll website
    - commands:
      - gem install bundler
      - rm Gemfile.lock
      - bundle install
      - JEKYLL_ENV=production bundle exec jekyll build

    # commands to upload static pages folder to AWS S3
    - commands:
      - aws s3 rm s3://$AWS_S3_BUCKET --recursive
      - aws s3 cp _site s3://$AWS_S3_BUCKET --recursive
      if: branch == 'main'
</pre>

<br>
<iframe width="660" height="350" src="https://www.youtube.com/embed/AQ2-3bkTG0E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br>






