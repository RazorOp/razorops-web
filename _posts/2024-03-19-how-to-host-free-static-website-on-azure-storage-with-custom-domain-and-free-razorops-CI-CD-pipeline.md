---
title: 
description: How to Set up azure storage account and setting up CI/CD with Razorops for automatic static website deployment?
permalink: "/blog/:title/"
layout: post
date: '2024-03-20 05:00:00'
author: Shyam Mohan
category: DevOps
image: "/images/blog/How-to-Host-a-Static-Website-on-Azure-Storage-razorops-with-custom-domain-and-Razorops-CICD-Pipeline.png"
---

<img src="/images/blog/How-to-Host-a-Static-Website-on-Azure-Storage-razorops-with-custom-domain-and-Razorops-CICD-Pipeline.png" alt="How-to-Host-a-Static-Website-on-Azure-Storage-razorops-with-custom-domain-and-Razorops-CICD-Pipeline" title="How-to-Host-a-Static-Website-on-Azure-Storage-razorops-with-custom-domain-and-Razorops-CICD-Pipeline">
<br>
<br>


### **Table of contents:**
<br>

<span style="font-size: larger;">**Prerequisites:**</span>
<br>

1. Azure account
<br>

2. Razorops account
<br>
<br>

### **Part 1: Setting up azure storage account**
<br>

1. Set up Azure Storage Account

2. Enable static website hosting on storage account

3. Upload static files
<br>
<br>

### **Part 2: Configure Custom Domain and HTTPS with cloud flare**
<br>

1. Create a new CDN endpoint for custom domain

2. Select storage static site as origin type for CDN endpoint

3. Map custom domain to CDN endpoint using CNAME

4. Configure Custom Domain and Enable HTTPS
<br>
<br>

### **Part 3: Setting up CI/CD with Razorops for Automatic Deployment**
<br>

1. Create a Razorops Yaml file

2. Git push all files to Github or Bitbucket or Gitlab

3. Integrate Github or Bitbucket or Gitlab account with Razorops

4. Create and run Razorops CI/CD Pipeline

5. Verify Deployment
<br>
<br>

### **Conclusion**
<br>

In this tutorial, we go through the step by step procedure of hosting a static website on Azure storage with custom domain and setting up continuous Integration and deployment(CI/CD) using Razorops.
<br>
<br>

### **Part 1: Setting up azure storage account**
<br>

<span style="font-size: larger;">**Step 1: Sign in to the Azure Portal**</span>
<br>
<br>

1. Navigate to the Azure Portal.

2. Sign in with your Azure account.
<br>
<br>

<img src="/images/blog/How-to-create-azure-storage-account.png" alt="How-to-create-azure-storage-account" title="How-to-create-azure-storage-account">
<br>
<br>


*3. Create a New Storage Account*
<br>

1. In the Azure Portal, click on "Create a resource" in the left sidebar.

2. Search for "Storage Account" and select it from the results. On the right side storage in categories and click the "Create" button.
<br>
<br>

*4. Configure the Basics*
<br>

In the "Basics" tab of the "Create storage account" page:
<br>

* Subscription: Select your Azure subscription.

* Resource group: Create a new one or use an existing resource group.

* Storage account name: Choose a globally unique name.

* Region: Select the region for your storage account.

* Performance: Choose the desired performance tier (Standard or Premium).
<br>
<br>

<img src="/images/blog/How-to-create-azure-storage-accountt.png" alt="How-to-create-azure-storage-account" title="How-to-create-azure-storage-account">
<br>
<br>

*5. Configure Advanced Settings*
<br>

Navigate through the tabs to configure additional settings such as Networking, Data protection, Advanced, etc. Adjust according to your requirements.
<br>
<br>

*6.Review and Create*
<br>

1. Review your configuration settings, and then click the "Review + create" tab.

2. After reviewing, click the "Create" button to start the deployment process.
<br>
<br>


<img src="/images/blog/How-to-create-the-azure-Storage-account.png" alt="How-to-create-azure-storage-account" title="How-to-create-azure-storage-account">
<br>
<br>

*7. Wait for Deployment*
<br>

Wait for the deployment to complete. You can monitor the deployment progress in the "Notifications" section.
<br>
<br>

*8. Access Storage Account*
<br>

1. Once the deployment is successful, go to the "Resource groups" section in the Azure Portal.

2. Open the resource group you specified during the setup. 

3. Click on your newly created storage account to access its details.
<br>
<br>

<span style="font-size: larger;">**Step 2: Enable static website hosting on storage account**</span>
<br>

1. In the storage account settings, navigate to the "Static website" section.

2. Enable static website hosting.

3. Type file names as index.html and error.html as shown below. 
<br>
<br>

<img src="/images/blog/Upload-files-to-azure.png" alt="Upload-files-to-azure" title="Upload-files-to-azure">
<br>
<br>

*4. Obtain Access Keys*
<br>

1. In the storage account settings, navigate to the "Access keys" section.

2. Copy one of the access keys. You will need this for programmatic access to your storage account.
<br>
<br>

<span style="font-size: larger;">**Step 3: Upload static website files**</span>
<br>
<br>

Creating a static website involves creating HTML, CSS, and possibly JavaScript files that will be served directly without any server-side processing. Here is a simple guide to creating a basic static website:
<br>
<br>

*1. Create HTML Files*
<br>

Use a text editor (Visual Studio Code, Sublime Text, or Notepad) to create HTML files(Index.html, Error.html) for each page of your website.
<br>
<br>


*2. Manually Deploy Static Website to Azure Storage*
<br>

You can upload your HTML Files(Index.html and Error.html) and other files to the Azure Storage, by using Upload button in Azure portal UI.
<br>
<br>

Go to the storage account and click on containers, where you can find **$web.** In **$web** upload index.html and error.html files. this file will be served when someone access the root url of your website. 
<br>
<br>

<img src="/images/blog/How-to-upload-files-in-azure-container.png" alt="How-to-upload-files-in-azure-container" title="How-to-upload-files-in-azure-container">
<br>
<br>

*3. Access Your Static Website*
<br>

1. Once the files are uploaded, your static website will be accessible using the primary endpoint URL. 

2. In the storage account’s left-hand menu,click on the static website section.

3. From the overview page, copy the static site endpoint. Open it in web browser to verify if your static website is working or note
<br>
<br>

<img src="/images/blog/How-to-access-static-website-in-azure.png" alt="How-to-access-static-website-in-azure" title="How-to-access-static-website-in-azure">
<br>
<br>

<img src="/images/blog/Razorops-ci-cd-static-website.png" alt="Razorops-ci-cd-static-website" title="Razorops-ci-cd-static-website">
<br>
<br>


### **Part 2: Configuring a FREE Custom Domain and Enabling HTTPS with Azure CDN**
<br>

A static website hosted on Azure Storage is already a great way to serve your content. But to take it a step further and enhance its functionality and performance, you can configure a custom domain and enable HTTPS using Azure CDN 
<br>

<span style="font-size: larger;">**Step 1: Create a new CDN endpoint for the custom domain**</span>
<br>

To start, you need to create a new Content Delivery Network(CDN) endpoint in Azure. This endpoint acts as a gateway between your custom domain and the underlying storage account hosting your static website.
<br>

1. In the Azure portal, navigate to your resource group and click on "Add" to create a new resource.

2. Search for "CDN" in the search bar and select "CDN" from the results.
<br>
<br>

<img src="/images/blog/How-to-create-the-new-cdn-in-azure.png" alt="How-to-create-the-new-cdn-in-azure" title="How-to-create-the-new-cdn-in-azure">
<br>
<br>

<img src="/images/blog/How-to-create-new-cdn-in-azure.png" alt="How-to-create-the-new-cdn-in-azure" title="How-to-create-the-new-cdn-in-azure">
<br>
<br>


<span style="font-size: larger;">**Step 2:- Select "Storage Static Site" as the origin type for the CDN endpoint**</span>
<br>

When configuring the CDN endpoint, you need to specify where it should fetch content from. In this case,we are using azure storage to host static website, we will select storage static site as origin type.  
<br>
<br>

<img src="/images/blog/How-to-create-new-cdn-in-the-azure.png" alt="How-to-create-the-new-cdn-in-azure" title="How-to-create-the-new-cdn-in-azure">
<br>
<br>



<span style="font-size: larger;">**Step 3: Map the custom domain to the CDN endpoint using CNAME records**</span>
<br>

Now that you have set up your CDN endpoint, it's time to map your custom domain to it. This involves adding CNAME (Canonical Name) records in your DNS settings that point your domain name to the CDN endpoint.
<br>

1. Go to your domain service provider (e.g., cloudflare) and access the domain management settings for your custom domain.

2. Look for the DNS settings or advanced DNS settings section.

3. Add CNAME records:
<br>
<br>

<img src="/images/blog/how-to-login-to-cloudfare.png" alt="how-to-login-to-cloudfare" title="how-to-login-to-cloudfare">
<br>
<br>


<img src="/images/blog/Map-the-custom-domain-to-the-CDN-endpoint-using-CNAME-records.png" alt="Map-the-custom-domain-to-the-CDN-endpoint-using-CNAME-records" title="Map-the-custom-domain-to-the-CDN-endpoint-using-CNAME-records">
<br>
<br>


Select Type as CNAME, enter required name for your website(Example static website), In Target copy and enter the endpoint url provided in domain section of azure as provided in below image
<br>
<br>

<img src="/images/blog/How-to-map-the-custom-domain-to-the-CDN-endpoint-using-CNAME-records.png" alt="How-to-map-custom-domain-to-the-CDN-endpoint-using-CNAME-records" title="How-to-map-custom-domain-to-the-CDN-endpoint-using-CNAME-records">
<br>
<br>
<br>


<img src="/images/blog/How-to-map-custom-domain-to-the-CDN-endpoint-using-CNAME-records.png" alt="How-to-map-custom-domain-to-the-CDN-endpoint-using-CNAME-records" title="How-to-map-custom-domain-to-the-CDN-endpoint-using-CNAME-records">
<br>
<br>


<span style="font-size: larger;">**Step 4: Configure Custom Domain and Enable HTTPS**</span>
<br>

1. In the Azure Portal, select the CDN endpoint you created earlier.

2. Go to the custom domain feature and click on "Add custom domain".

3. Enter your custom domain name and click on "Add" to add it to the CDN endpoint
<br>
<br>


<img src="/images/blog/How-to-configure-custom-domain-and-enable-HTTPS.png" alt="How-to-configure-the-custom-domain-and-enable-HTTPS" title="How-to-configure-the-custom-domain-and-enable-HTTPS">
<br>
<br>

<img src="/images/blog/How-to-configure-the-custom-domain-and-enable-HTTPS.png" alt="How-to-configure-the-custom-domain-and-enable-HTTPS" title="How-to-configure-the-custom-domain-and-enable-HTTPS">
<br>
<br>


### **Part 3: How to setup FREE Razorops CI/CD for automatic deployment of same Static Website**
<br>

CI/CD stands for Continuous Integration and Continuous Delivery (or Continuous Deployment). It is a set of practices that involve automatically testing and delivering code changes frequently and consistently. CI/CD aims to improve the software development process by providing automation and feedback at every stage, from code development to deployment.
<br>
<br>

Razorops CI/CD will help auto upload the new files of the website. To upload files from any CICD system we will need the Azure Access details and use the Azure CLI to copy files and upload to Azure Static Web Site Container. 
<br>
<br>

<span style="font-size: larger;">**Step 1: Generate azure credentials**</span>
<br>

**How to generate Azure credentials or service accounts for CICD automation ?**
<br>
<br>

To generate deployment credentials using Azure CLI and set up a service principal, follow these steps:
<br>
<br>

**Step 1: Create a Service Principal**
<br>
<br>

Run the following command in the Azure CLI to create a service principal:
<br>

`az ad sp create-for-rbac --name <service_principal_name> --role contributor --scopes /subscriptions/<subscription_id>`
<br>
<br>

**Save Credentials**
<br>

Make sure to save the following information
<br>

* appId (Application ID) from the service principal creation output.

* password (Secret) from the service principal creation output.

* tenant (Directory ID) from the service principal creation output.

* `<subscription_id>` (Your Azure subscription ID).
<br>
<br>



`az login --service-principal -u “appId” -p “password” --tenant “tenant id”`

Replace `<appId>, <password>,` and `<tenantId>` with the actual values obtained when creating the service principal.
<br>
<br>

After running this command, you should be authenticated to Azure using the specified service principal, and you can proceed with managing resources using the Azure CLI.
<br>
<br>

<img src="/images/blog/how-to-create-service-principal-in-azure-cli.png" alt="how-to-create-service-principal-in-azure-cli" title="how-to-create-service-principal-in-azure-cli">
<br>
<br>

**Step 2: Setup the Razorops pipeline**
<br>

**How to Setup the Razorops pipeline**
<br>

1. Create new account with RazorOps CICD

2. Create New WorkFlow/Pipeline form Dashboard

3. Add .razorops.yaml file in your static website root folder
<br>
<br>

Signup with your preferred Source code management platform like Github, Bitbucket or Gitlab.
<a href="https://razorops.com/" target=_blank style="text-decoration: none"> <b>https://razorops.com/</b></a>
 
<br>
<br>


<img src="/images/blog/how-to-signup-to-razorops.png" alt="how-to-signup-to-razorops" title="how-to-signup-to-razorops">
<br>
<br>

Let's say you are using github to sign up, after signup you will be land to Razorops dashboard 
<br>
<br>


<img src="/images/blog/How-to-create pipeline-on razorops.png" alt="How-to-create pipeline-on razorops" title="How-to-create pipeline-on razorops">
<br>
<br>




**2. Create your first pipeline**
<br>


<img src="/images/blog/how-to-add-new-pipeline-in-razorops.png" alt="how-to-add-new-pipeline-in-razorops" title="how-to-add-new-pipeline-in-razorops">
<br>
<br>




Select GITHUB to create your first pipeline 
<br>
<br>


<img src="/images/blog/how-to-select-repository-for-pipeline-in-razorops.png" alt="how-to-select-repository-for-pipeline-in-razorops" title="how-to-select-repository-for-pipeline-in-razorops">
<br>
<br>

<img src="/images/blog/how-to-select-repository-for-pipeline-razorops.png" alt="how-to-select-repository-for-pipeline-in-razorops" title="how-to-select-repository-for-pipeline-in-razorops">
<br>
<br>

<img src="/images/blog/how-to-check-workflow-razorops.png" alt="How-to-add-variables-in-razorops" title="How-to-add-variables-in-razorops">
<br>
<br>

<img src="/images/blog/How-to-add-variables-in-razorops.png" alt="How-to-add-variables-in-razorops" title="How-to-add-variables-in-razorops">
<br>
<br>


Follow the documents to write CI/CD razorops.yaml file to store files in azure storage account
<a href="https://docs.razorops.com/" target=_blank style="text-decoration: none"> <b>https://docs.razorops.com/</b></a>


.razorops.yaml

`global:`

  `runner:`

  `os_image: ubuntu`


`tasks:`

  `deploy-to-dev:`

   `steps:`

   `- checkout`

   `- commands:`

  `#access variables from environment variables of razorops pipeline`

  `- az login --service-principal -u $APP_ID -p $PASS --tenant $TENANT`

  `- az storage blob upload-batch -s . -d '$web' --account-name razorops --overwrite true`

  `--overwrite true`
  <br>
  <br>
 
### **Use Razorops Variables to securely store the deployment credentials**
<br>

1. Login to Razorops and integrate pipeline using github repo

2. Add variables as shown in below image

<a href="https://dashboard.razorops.com/users/sign_in" target=_blank style="text-decoration: none"> <b>https://dashboard.razorops.com/</b></a>
 <br>
<br>


To build the pipeline select on workflows and click on the new pipeline. Click on github and select the repository.  pipeline get automatically build and deploy the jobs or task mentioned in razorops.yaml file
<br>
<br>


<img src="/images/blog/Razorops-CICD-workflow.png" alt="Razorops-CICD-workflow" title="Razorops-CICD-workflow">
<br>
<br>


<img src="/images/blog/how-to-check-workflow-in-razorops.png" alt="how-to-check-workflow-in-razorops" title="how-to-check-workflow-in-razorops">
<br>
<br>

While, pipeline succeeded, go to azure website and can check files uploaded through Razorops in containers of azure storage account. as show below
<br>
<br>

<img src="/images/blog/How-t-access-container-in-azure.png" alt="How-to-access-container-in-azure" title="How-to-access-container-in-azure">
<br>
<br>



You can check following github repository for static website code through this link- https://github.com/kshyam/static-website
<br>
<br>


**Conclusion:**
<br>

Hosting a static website on Azure Storage with a CI/CD pipeline is a straightforward process that brings several advantages. 
By following these best practices, you can create a reliable and efficient static website infrastructure on Azure. This approach not only simplifies the hosting process but also sets the foundation for scalability and automation, enabling you to focus on creating and delivering content without worrying about infrastructure complexities.
