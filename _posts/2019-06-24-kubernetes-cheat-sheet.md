---
title: Kubernetes Cheat Sheet
description: Kubernetes is an open-source container-orchestration system for automating application deployment, scaling, and management. It was originally designed by Google, and is now maintained by the Cloud Native Computing Foundation.
keywords: kubectl, kubernetes, cheat sheet, Commands, deployment, namespace, healthcheck
permalink: "/blog/:title/"
layout: post
date: '2018-10-15 14:15:43'
author: Shyam Mohan
category: kubernetes
image: "/images/blog/kubernetes-cheat-sheet.png"
---

<style type="text/css">
table {
	min-width: 100%;
}
.outline-3 td {
    font-size: 14px;
}
.outline-3 th, .outline-3 td {
    padding: 10px;
}

.outline-3 table, .outline-3 th, .outline-3 td {
    border: 1px solid #e1e1e1;
}
</style>


Kubernetes is an open-source container-orchestration system for automating application deployment, scaling, and management. It was originally designed by Google, and is now maintained by the Cloud Native Computing Foundation.

<div id="outline-container-org0305d46" class="outline-3">
<h2>Common Commands</h2>

<div class="outline-text-3" id="text-1-1">
<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
<colgroup>
<col class="org-left">
<col class="org-left">
</colgroup>
<thead>
<tr>
<th scope="col" class="org-left">Name</th>
<th scope="col" class="org-left">Command</th>
</tr>
</thead>
<tbody>
<tr>
<td class="org-left">Run curl test temporarily</td>
<td class="org-left"><code>kubectl run --rm mytest --image=yauritux/busybox-curl -it</code></td>
</tr>
<tr>
<td class="org-left">Run wget test temporarily</td>
<td class="org-left"><code>kubectl run --rm mytest --image=busybox -it</code></td>
</tr>
<tr>
<td class="org-left">Run nginx deployment with 2 replicas</td>
<td class="org-left"><code>kubectl run my-nginx --image=nginx --replicas=2 --port=80</code></td>
</tr>
<tr>
<td class="org-left">Run nginx pod and expose it</td>
<td class="org-left"><code>kubectl run my-nginx --restart=Never --image=nginx --port=80 --expose</code></td>
</tr>
<tr>
<td class="org-left">Run nginx deployment and expose it</td>
<td class="org-left"><code>kubectl run my-nginx --image=nginx --port=80 --expose</code></td>
</tr>
<tr>
<td class="org-left">Set namespace preference</td>
<td class="org-left"><code>kubectl config set-context &lt;context_name&gt; --namespace=&lt;ns_name&gt;</code></td>
</tr>
<tr>
<td class="org-left">List pods with nodes info</td>
<td class="org-left"><code>kubectl get pod -o wide</code></td>
</tr>
<tr>
<td class="org-left">List everything</td>
<td class="org-left"><code>kubectl get all --all-namespaces</code></td>
</tr>
<tr>
<td class="org-left">Get all services</td>
<td class="org-left"><code>kubectl get service --all-namespaces</code></td>
</tr>
<tr>
<td class="org-left">Show nodes with labels</td>
<td class="org-left"><code>kubectl get nodes --show-labels</code></td>
</tr>
<tr>
<td class="org-left">Validate yaml file with dry run</td>
<td class="org-left"><code>kubectl create --dry-run --validate -f pod-dummy.yaml</code></td>
</tr>
<tr>
<td class="org-left">Start a temporary pod for testing</td>
<td class="org-left"><code>kubectl run --rm -i -t --image=alpine test-$RANDOM -- sh</code></td>
</tr>
<tr>
<td class="org-left">kubectl run shell command</td>
<td class="org-left"><code>kubectl exec -it mytest -- ls -l /etc/hosts</code></td>
</tr>
<tr>
<td class="org-left">Get system conf via configmap</td>
<td class="org-left"><code>kubectl -n kube-system get cm kubeadm-config -o yaml</code></td>
</tr>
<tr>
<td class="org-left">Get deployment yaml</td>
<td class="org-left"><code>kubectl -n denny-websites get deployment mysql -o yaml</code></td>
</tr>
<tr>
<td class="org-left">Explain resource</td>
<td class="org-left"><code>kubectl explain pods</code>, <code>kubectl explain svc</code></td>
</tr>
<tr>
<td class="org-left">Watch pods</td>
<td class="org-left"><code>kubectl get pods  -n wordpress --watch</code></td>
</tr>
<tr>
<td class="org-left">Query healthcheck endpoint</td>
<td class="org-left"><code>curl -L https://127.0.0.1:10250/healthz</code></td>
</tr>
<tr>
<td class="org-left">Open a bash terminal in a pod</td>
<td class="org-left"><code>kubectl exec -it storage sh</code></td>
</tr>
<tr>
<td class="org-left">Check pod environment variables</td>
<td class="org-left"><code>kubectl exec redis-master-ft9ex env</code></td>
</tr>
<tr>
<td class="org-left">Enable kubectl shell autocompletion</td>
<td class="org-left"><code>echo "source &lt;(kubectl completion bash)" &gt;&gt;~/.bashrc</code>, and reload</td>
</tr>
<tr>
<td class="org-left">Use minikube dockerd in your laptop</td>
<td class="org-left"><code>eval $(minikube docker-env)</code>, No need to push docker hub any more</td>
</tr>
<tr>
<td class="org-left">Kubectl apply a folder of yaml files</td>
<td class="org-left"><code>kubectl apply -R -f .</code></td>
</tr>
<tr>
<td class="org-left">Get services sorted by name</td>
<td class="org-left"><code>kubectl get services –sort-by=.metadata.name</code></td>
</tr>
<tr>
<td class="org-left">Get pods sorted by restart count</td>
<td class="org-left"><code>kubectl get pods –sort-by=’.status.containerStatuses[0].restartCount’</code></td>
</tr>
<tr>
<td class="org-left"><a href="https://kubernetes.io/docs/tasks/tools/install-kubectl/">Ubuntu install kubectl</a></td>
<td class="org-left"><code>"deb https://apt.kubernetes.io/ kubernetes-xenial main"</code></td>
</tr>
</tbody>
</table>
</div>
</div>
<br>
<center>
  <a href="/schedule-demo" class="btn btn-rounded btn-lg btn-primary">Schedule a Demo for RazorOps-Container Native CI/CD </a> 
</center>
<br>
<div id="outline-container-org7a8765a" class="outline-3">
<h2> Check Performance</h2>
<div class="outline-text-3" id="text-1-2">
<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
<colgroup>
<col  class="org-left" />
<col  class="org-left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="org-left">Name</th>
<th scope="col" class="org-left">Command</th>
</tr>
</thead>
<tbody>
<tr>
<td class="org-left">Get node resource usage</td>
<td class="org-left"><code>kubectl top node</code></td>
</tr>
<tr>
<td class="org-left">Get pod resource usage</td>
<td class="org-left"><code>kubectl top pod</code></td>
</tr>
<tr>
<td class="org-left">Get resource usage for a given pod</td>
<td class="org-left"><code>kubectl top &lt;podname&gt; --containers</code></td>
</tr>
<tr>
<td class="org-left">List resource utilization for all containers</td>
<td class="org-left"><code>kubectl top pod --all-namespaces --containers=true</code></td>
</tr>
</tbody>
</table>
</div>
</div>

<div id="outline-container-org61329fe" class="outline-3">
<h2> Resources Deletion</h2>
<div class="outline-text-3" id="text-1-3">
<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
<colgroup>
<col  class="org-left" />
<col  class="org-left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="org-left">Name</th>
<th scope="col" class="org-left">Command</th>
</tr>
</thead>
<tbody>
<tr>
<td class="org-left">Delete pod</td>
<td class="org-left"><code>kubectl delete pod/&lt;pod-name&gt; -n &lt;my-namespace&gt;</code></td>
</tr>
<tr>
<td class="org-left">Delete pod by force</td>
<td class="org-left"><code>kubectl delete pod/&lt;pod-name&gt; --grace-period=0 --force</code></td>
</tr>
<tr>
<td class="org-left">Delete pods by labels</td>
<td class="org-left"><code>kubectl delete pod -l env=test</code></td>
</tr>
<tr>
<td class="org-left">Delete deployments by labels</td>
<td class="org-left"><code>kubectl delete deployment -l app=wordpress</code></td>
</tr>
<tr>
<td class="org-left">Delete all resources filtered by labels</td>
<td class="org-left"><code>kubectl delete pods,services -l name=myLabel</code></td>
</tr>
<tr>
<td class="org-left">Delete resources under a namespace</td>
<td class="org-left"><code>kubectl -n my-ns delete po,svc --all</code></td>
</tr>
<tr>
<td class="org-left">Delete persist volumes by labels</td>
<td class="org-left"><code>kubectl delete pvc -l app=wordpress</code></td>
</tr>
<tr>
<td class="org-left">Delete statefulset only (not pods)</td>
<td class="org-left"><code>kubectl delete sts/&lt;stateful_set_name&gt; --cascade=false</code></td>
</tr>
</tbody>
</table>
</div>
</div>

<div id="outline-container-orgd674ca1" class="outline-3">
<h2> Log &amp; Conf Files</h2>
<div class="outline-text-3" id="text-1-4">
<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
<colgroup>
<col  class="org-left" />
<col  class="org-left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="org-left">Name</th>
<th scope="col" class="org-left">Comment</th>
</tr>
</thead>
<tbody>
<tr>
<td class="org-left">Config folder</td>
<td class="org-left"><code>/etc/kubernetes/</code></td>
</tr>
<tr>
<td class="org-left">Certificate files</td>
<td class="org-left"><code>/etc/kubernetes/pki/</code></td>
</tr>
<tr>
<td class="org-left">Credentials to API server</td>
<td class="org-left"><code>/etc/kubernetes/kubelet.conf</code></td>
</tr>
<tr>
<td class="org-left">Superuser credentials</td>
<td class="org-left"><code>/etc/kubernetes/admin.conf</code></td>
</tr>
<tr>
<td class="org-left">kubectl config file</td>
<td class="org-left"><code>~/.kube/config</code></td>
</tr>
<tr>
<td class="org-left">Kubernets working dir</td>
<td class="org-left"><code>/var/lib/kubelet/</code></td>
</tr>
<tr>
<td class="org-left">Docker working dir</td>
<td class="org-left"><code>/var/lib/docker/</code>, <code>/var/log/containers/</code></td>
</tr>
<tr>
<td class="org-left">Etcd working dir</td>
<td class="org-left"><code>/var/lib/etcd/</code></td>
</tr>
<tr>
<td class="org-left">Network cni</td>
<td class="org-left"><code>/etc/cni/net.d/</code></td>
</tr>
<tr>
<td class="org-left">Log files</td>
<td class="org-left"><code>/var/log/pods/</code></td>
</tr>
<tr>
<td class="org-left">log in worker node</td>
<td class="org-left"><code>/var/log/kubelet.log</code>, <code>/var/log/kube-proxy.log</code></td>
</tr>
<tr>
<td class="org-left">log in master node</td>
<td class="org-left"><code>kube-apiserver.log</code>, <code>kube-scheduler.log</code>, <code>kube-controller-manager.log</code></td>
</tr>
<tr>
<td class="org-left">Env</td>
<td class="org-left"><code>/etc/systemd/system/kubelet.service.d/10-kubeadm.conf</code></td>
</tr>
<tr>
<td class="org-left">Env</td>
<td class="org-left"><code>export KUBECONFIG=/etc/kubernetes/admin.conf</code></td>
</tr>
</tbody>
</table>
</div>
</div>

<div id="outline-container-org01b70e6" class="outline-3">
<h2>Pod</h2>
<div class="outline-text-3" id="text-1-5">
<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
<colgroup>
<col  class="org-left" />
<col  class="org-left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="org-left">Name</th>
<th scope="col" class="org-left">Command</th>
</tr>
</thead>
<tbody>
<tr>
<td class="org-left">List all pods</td>
<td class="org-left"><code>kubectl get pods</code></td>
</tr>
<tr>
<td class="org-left">List pods for all namespace</td>
<td class="org-left"><code>kubectl get pods -all-namespaces</code></td>
</tr>
<tr>
<td class="org-left">List all critical pods</td>
<td class="org-left"><code>kubectl get -n kube-system pods -a</code></td>
</tr>
<tr>
<td class="org-left">List pods with more info</td>
<td class="org-left"><code>kubectl get pod -o wide</code>, <code>kubectl get pod/&lt;pod-name&gt; -o yaml</code></td>
</tr>
<tr>
<td class="org-left">Get pod info</td>
<td class="org-left"><code>kubectl describe pod/srv-mysql-server</code></td>
</tr>
<tr>
<td class="org-left">List all pods with labels</td>
<td class="org-left"><code>kubectl get pods --show-labels</code></td>
</tr>
<tr>
<td class="org-left">List running pods</td>
<td class="org-left"><code>kubectl get pods &#x2013;field-selector=status.phase=Running</code></td>
</tr>
<tr>
<td class="org-left">Get Pod initContainer status</td>
<td class="org-left"><code>kubectl get pod --template '{.status.initContainerStatuses}' &lt;pod-name&gt;</code></td>
</tr>
<tr>
<td class="org-left">kubectl run command</td>
<td class="org-left"><code>kubectl exec -it -n &#8220;$ns&#8221; &#8220;$podname&#8221; &#x2013; sh -c &#8220;echo $msg &gt;&gt;/dev/err.log&#8221;</code></td>
</tr>
<tr>
<td class="org-left">Watch pods</td>
<td class="org-left"><code>kubectl get pods  -n wordpress --watch</code></td>
</tr>
<tr>
<td class="org-left">Get pod by selector</td>
<td class="org-left"><code>kubectl get pods &#x2013;selector=&#8221;app=syslog&#8221; -o jsonpath='{.items[*].metadata.name}&#8217;</code></td>
</tr>
<tr>
<td class="org-left">List pods and images</td>
<td class="org-left"><code>kubectl get pods -o=&#8217;custom-columns=PODS:.metadata.name,Images:.spec.containers[*].image&#8217;</code></td>
</tr>
<tr>
<td class="org-left">List pods and containers</td>
<td class="org-left"><code>-o=&#8217;custom-columns=PODS:.metadata.name,CONTAINERS:.spec.containers[*].name&#8217;</code></td>
</tr>
</tbody>
</table>
</div>
</div>
<br>
<center>
  <a href="/schedule-demo" class="btn btn-rounded btn-lg btn-primary">Schedule a Demo for RazorOps-Container Native CI/CD </a> 
</center>
<br>
<div id="outline-container-orgd8ff0c0" class="outline-3">
<h2> Label &amp; Annontation</h2>
<div class="outline-text-3" id="text-1-6">
<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
<colgroup>
<col  class="org-left" />
<col  class="org-left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="org-left">Name</th>
<th scope="col" class="org-left">Command</th>
</tr>
</thead>
<tbody>
<tr>
<td class="org-left">Filter pods by label</td>
<td class="org-left"><code>kubectl get pods -l owner=denny</code></td>
</tr>
<tr>
<td class="org-left">Manually add label to a pod</td>
<td class="org-left"><code>kubectl label pods dummy-input owner=denny</code></td>
</tr>
<tr>
<td class="org-left">Remove label</td>
<td class="org-left"><code>kubectl label pods dummy-input owner-</code></td>
</tr>
<tr>
<td class="org-left">Manually add annonation to a pod</td>
<td class="org-left"><code>kubectl annotate pods dummy-input my-url=https://dennyzhang.com</code></td>
</tr>
</tbody>
</table>
</div>
</div>

<div id="outline-container-orgc9c3474" class="outline-3">
<h2> Deployment &amp; Scale</h2>
<div class="outline-text-3" id="text-1-7">
<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
<colgroup>
<col  class="org-left" />
<col  class="org-left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="org-left">Name</th>
<th scope="col" class="org-left">Command</th>
</tr>
</thead>
<tbody>
<tr>
<td class="org-left">Scale out</td>
<td class="org-left"><code>kubectl scale --replicas=3 deployment/nginx-app</code></td>
</tr>
<tr>
<td class="org-left">online rolling upgrade</td>
<td class="org-left"><code>kubectl rollout app-v1 app-v2 --image=img:v2</code></td>
</tr>
<tr>
<td class="org-left">Roll backup</td>
<td class="org-left"><code>kubectl rollout app-v1 app-v2 --rollback</code></td>
</tr>
<tr>
<td class="org-left">List rollout</td>
<td class="org-left"><code>kubectl get rs</code></td>
</tr>
<tr>
<td class="org-left">Check update status</td>
<td class="org-left"><code>kubectl rollout status deployment/nginx-app</code></td>
</tr>
<tr>
<td class="org-left">Check update history</td>
<td class="org-left"><code>kubectl rollout history deployment/nginx-app</code></td>
</tr>
<tr>
<td class="org-left">Pause/Resume</td>
<td class="org-left"><code>kubectl rollout pause deployment/nginx-deployment</code>, <code>resume</code></td>
</tr>
<tr>
<td class="org-left">Rollback to previous version</td>
<td class="org-left"><code>kubectl rollout undo deployment/nginx-deployment</code></td>
</tr>

</tbody>
</table>

</div>
</div>

<div id="outline-container-orgf6f9098" class="outline-3">
<h2> Quota &amp; Limits &amp; Resource</h2>
<div class="outline-text-3" id="text-1-8">
<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
<colgroup>
<col  class="org-left" />
<col  class="org-left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="org-left">Name</th>
<th scope="col" class="org-left">Command</th>
</tr>
</thead>
<tbody>
<tr>
<td class="org-left">List Resource Quota</td>
<td class="org-left"><code>kubectl get resourcequota</code></td>
</tr>
<tr>
<td class="org-left">List Limit Range</td>
<td class="org-left"><code>kubectl get limitrange</code></td>
</tr>
<tr>
<td class="org-left">Customize resource definition</td>
<td class="org-left"><code>kubectl set resources deployment nginx -c=nginx --limits=cpu=200m</code></td>
</tr>
<tr>
<td class="org-left">Customize resource definition</td>
<td class="org-left"><code>kubectl set resources deployment nginx -c=nginx --limits=memory=512Mi</code></td>
</tr>

</tbody>
</table>
</div>
</div>

<div id="outline-container-orga610a11" class="outline-3">
<h2> Service</h2>
<div class="outline-text-3" id="text-1-9">
<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
<colgroup>
<col  class="org-left" />
<col  class="org-left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="org-left">Name</th>
<th scope="col" class="org-left">Command</th>
</tr>
</thead>
<tbody>
<tr>
<td class="org-left">List all services</td>
<td class="org-left"><code>kubectl get services</code></td>
</tr>
<tr>
<td class="org-left">List service endpoints</td>
<td class="org-left"><code>kubectl get endpoints</code></td>
</tr>
<tr>
<td class="org-left">Get service detail</td>
<td class="org-left"><code>kubectl get service nginx-service -o yaml</code></td>
</tr>
<tr>
<td class="org-left">Get service cluster ip</td>
<td class="org-left"><code>kubectl get service nginx-service -o go-template='{.spec.clusterIP}&#8217;</code></td>
</tr>
<tr>
<td class="org-left">Get service cluster port</td>
<td class="org-left"><code>kubectl get service nginx-service -o go-template='{(index .spec.ports 0).port}&#8217;</code></td>
</tr>
<tr>
<td class="org-left">Expose deployment as lb service</td>
<td class="org-left"><code>kubectl expose deployment/my-app --type=LoadBalancer --name=my-service</code></td>
</tr>
<tr>
<td class="org-left">Expose service as lb service</td>
<td class="org-left"><code>kubectl expose service/wordpress-1-svc --type=LoadBalancer --name=ns1</code></td>
</tr>
</tbody>
</table>
</div>
</div>


<div id="outline-container-orgd8554f4" class="outline-3">
<h2> Secrets</h2>
<div class="outline-text-3" id="text-1-10">
<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
<colgroup>
<col  class="org-left" />
<col  class="org-left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="org-left">Name</th>
<th scope="col" class="org-left">Command</th>
</tr>
</thead>
<tbody>
<tr>
<td class="org-left">List secrets</td>
<td class="org-left"><code>kubectl get secrets --all-namespaces</code></td>
</tr>
<tr>
<td class="org-left">Generate secret</td>
<td class="org-left"><code>echo -n 'mypasswd'</code>, then redirect to <code>base64 -decode</code></td>
</tr>
<tr>
<td class="org-left">Create secret from cfg file</td>
<td class="org-left"><code>kubectl create secret generic db-user-pass &#x2013;from-file=./username.txt</code></td>
</tr>

</tbody>
</table>
</div>
</div>

<div id="outline-container-org4fb3b41" class="outline-3">
<h2> StatefulSet</h2>
<div class="outline-text-3" id="text-1-11">
<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
<colgroup>
<col  class="org-left" />
<col  class="org-left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="org-left">Name</th>
<th scope="col" class="org-left">Command</th>
</tr>
</thead>
<tbody>
<tr>
<td class="org-left">List statefulset</td>
<td class="org-left"><code>kubectl get sts</code></td>
</tr>
<tr>
<td class="org-left">Delete statefulset only (not pods)</td>
<td class="org-left"><code>kubectl delete sts/&lt;stateful_set_name&gt; --cascade=false</code></td>
</tr>
<tr>
<td class="org-left">Scale statefulset</td>
<td class="org-left"><code>kubectl scale sts/&lt;stateful_set_name&gt; --replicas=5</code></td>
</tr>
</tbody>
</table>
</div>
</div>

<div id="outline-container-orged3138a" class="outline-3">
<h2> Volumes &amp; Volume Claims</h2>
<div class="outline-text-3" id="text-1-12">
<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
<colgroup>
<col  class="org-left" />
<col  class="org-left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="org-left">Name</th>
<th scope="col" class="org-left">Command</th>
</tr>
</thead>
<tbody>
<tr>
<td class="org-left">List storage class</td>
<td class="org-left"><code>kubectl get storageclass</code></td>
</tr>
<tr>
<td class="org-left">Check the mounted volumes</td>
<td class="org-left"><code>kubectl exec storage ls /data</code></td>
</tr>
<tr>
<td class="org-left">Check persist volume</td>
<td class="org-left"><code>kubectl describe pv/pv0001</code></td>
</tr>
<tr>
<td class="org-left">Copy local file to pod</td>
<td class="org-left"><code>kubectl cp /tmp/my &lt;some-namespace&gt;/&lt;some-pod&gt;:/tmp/server</code></td>
</tr>
<tr>
<td class="org-left">Copy pod file to local</td>
<td class="org-left"><code>kubectl cp &lt;some-namespace&gt;/&lt;some-pod&gt;:/tmp/server /tmp/my</code></td>
</tr>
</tbody>
</table>
</div>
</div>

<div id="outline-container-orge70c8d7" class="outline-3">
<h2> Events &amp; Metrics</h2>
<div class="outline-text-3" id="text-1-13">
<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
<colgroup>
<col  class="org-left" />
<col  class="org-left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="org-left">Name</th>
<th scope="col" class="org-left">Command</th>
</tr>
</thead>
<tbody>
<tr>
<td class="org-left">View all events</td>
<td class="org-left"><code>kubectl get events --all-namespaces</code></td>
</tr>
<tr>
<td class="org-left">List Events sorted by timestamp</td>
<td class="org-left"><code>kubectl get events &#x2013;sort-by=.metadata.creationTimestamp</code></td>
</tr>
</tbody>
</table>
</div>
</div>
<div id="outline-container-org620e862" class="outline-3">
<h2>Node Maintenance</h2>
<div class="outline-text-3" id="text-1-14">
<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
<colgroup>
<col  class="org-left" />
<col  class="org-left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="org-left">Name</th>
<th scope="col" class="org-left">Command</th>
</tr>
</thead>
<tbody>
<tr>
<td class="org-left">Mark node as unschedulable</td>
<td class="org-left"><code>kubectl cordon $NDOE_NAME</code></td>
</tr>
<tr>
<td class="org-left">Mark node as schedulable</td>
<td class="org-left"><code>kubectl uncordon $NDOE_NAME</code></td>
</tr>
<tr>
<td class="org-left">Drain node in preparation for maintenance</td>
<td class="org-left"><code>kubectl drain $NODE_NAME</code></td>
</tr>
</tbody>
</table>
</div>
</div>

<div id="outline-container-org10f3200" class="outline-3">
<h2> Namespace &amp; Security</h2>
<div class="outline-text-3" id="text-1-15">
<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
<colgroup>
<col  class="org-left" />
<col  class="org-left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="org-left">Name</th>
<th scope="col" class="org-left">Command</th>
</tr>
</thead>
<tbody>
<tr>
<td class="org-left">List authenticated contexts</td>
<td class="org-left"><code>kubectl config get-contexts</code>, <code>~/.kube/config</code></td>
</tr>
<tr>
<td class="org-left">Set namespace preference</td>
<td class="org-left"><code>kubectl config set-context &lt;context_name&gt; --namespace=&lt;ns_name&gt;</code></td>
</tr>
<tr>
<td class="org-left">Load context from config file</td>
<td class="org-left"><code>kubectl get cs --kubeconfig kube_config.yml</code></td>
</tr>
<tr>
<td class="org-left">Switch context</td>
<td class="org-left"><code>kubectl config use-context &lt;cluster-name&gt;</code></td>
</tr>
<tr>
<td class="org-left">Delete the specified context</td>
<td class="org-left"><code>kubectl config delete-context &lt;cluster-name&gt;</code></td>
</tr>
<tr>
<td class="org-left">List all namespaces defined</td>
<td class="org-left"><code>kubectl get namespaces</code></td>
</tr>
<tr>
<td class="org-left">List certificates</td>
<td class="org-left"><code>kubectl get csr</code></td>
</tr>
</tbody>
</table>
</div>
</div>
<br>
<center>
  <a href="/schedule-demo" class="btn btn-rounded btn-lg btn-primary">Schedule a Demo for RazorOps-Container Native CI/CD </a> 
</center>
<br>
<div id="outline-container-org26060d1" class="outline-3">
<h2> Network</h2>
<div class="outline-text-3" id="text-1-16">
<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
<colgroup>
<col  class="org-left" />
<col  class="org-left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="org-left">Name</th>
<th scope="col" class="org-left">Command</th>
</tr>
</thead>
<tbody>
<tr>
<td class="org-left">Temporarily add a port-forwarding</td>
<td class="org-left"><code>kubectl port-forward redis-izl09 6379</code></td>
</tr>
<tr>
<td class="org-left">Add port-forwaring for deployment</td>
<td class="org-left"><code>kubectl port-forward deployment/redis-master 6379:6379</code></td>
</tr>
<tr>
<td class="org-left">Add port-forwaring for replicaset</td>
<td class="org-left"><code>kubectl port-forward rs/redis-master 6379:6379</code></td>
</tr>
<tr>
<td class="org-left">Add port-forwaring for service</td>
<td class="org-left"><code>kubectl port-forward svc/redis-master 6379:6379</code></td>
</tr>
<tr>
<td class="org-left">Get network policy</td>
<td class="org-left"><code>kubectl get NetworkPolicy</code></td>
</tr>
</tbody>
</table>
</div>
</div>

<div id="outline-container-orgb7360bd" class="outline-3">
<h2> Patch</h2>
<div class="outline-text-3" id="text-1-17">
<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
<colgroup>
<col  class="org-left" />
<col  class="org-left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="org-left">Name</th>
<th scope="col" class="org-left">Summary</th>
</tr>
</thead>
<tbody>
<tr>
<td class="org-left">Patch service to loadbalancer</td>
<td class="org-left"><code>kubectl patch svc $svc_name -p '{"spec": {"type": "LoadBalancer"}}'</code></td>
</tr>
</tbody>
</table>
</div>
</div>

<div id="outline-container-org60a9717" class="outline-3">
<h2> Extenstions</h2>
<div class="outline-text-3" id="text-1-18">
<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
<colgroup>
<col  class="org-left" />
<col  class="org-left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="org-left">Name</th>
<th scope="col" class="org-left">Summary</th>
</tr>
</thead>
<tbody>
<tr>
<td class="org-left">List api group</td>
<td class="org-left"><code>kubectl api-versions</code></td>
</tr>
<tr>
<td class="org-left">List all CRD</td>
<td class="org-left"><code>kubectl get crd</code></td>
</tr>
<tr>
<td class="org-left">List storageclass</td>
<td class="org-left"><code>kubectl get storageclass</code></td>
</tr>
<tr>
<td class="org-left">List all supported resources</td>
<td class="org-left"><code>kubectl api-resources</code></td>
</tr>
</tbody>
</table>
</div>
</div>

<div id="outline-container-org33ad8ed" class="outline-3">
<h2> Components &amp; Services</h2>
<div class="outline-text-3" id="text-1-19">
</div>
<div id="outline-container-org080125b" class="outline-4">
<h3>1. Services on Master Nodes</h3>
<div class="outline-text-4" id="text-1-19-1">
<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
<colgroup>
<col  class="org-left" />
<col  class="org-left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="org-left">Name</th>
<th scope="col" class="org-left">Summary</th>
</tr>
</thead>
<tbody>
<tr>
<td class="org-left"><a href="https://github.com/kubernetes/kubernetes/tree/master/cmd/kube-apiserver">kube-apiserver</a></td>
<td class="org-left">exposes the Kubernetes API from master nodes</td>
</tr>
<tr>
<td class="org-left"><a href="https://coreos.com/etcd/">etcd</a></td>
<td class="org-left">reliable data store for all k8s cluster data</td>
</tr>
<tr>
<td class="org-left"><a href="https://github.com/kubernetes/kubernetes/tree/master/cmd/kube-scheduler">kube-scheduler</a></td>
<td class="org-left">schedule pods to run on selected nodes</td>
</tr>
<tr>
<td class="org-left"><a href="https://github.com/kubernetes/kubernetes/tree/master/cmd/kube-controller-manager">kube-controller-manager</a></td>
<td class="org-left">node controller, replication controller, endpoints controller, and service account &amp; token controllers</td>
</tr>
</tbody>
</table>
</div>
</div>
<div id="outline-container-orgb5f0ff6" class="outline-4">
<h3>2. Services on Worker Nodes</h3>
<div class="outline-text-4" id="text-1-19-2">
<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
<colgroup>
<col  class="org-left" />
<col  class="org-left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="org-left">Name</th>
<th scope="col" class="org-left">Summary</th>
</tr>
</thead>
<tbody>
<tr>
<td class="org-left"><a href="https://github.com/kubernetes/kubernetes/tree/master/cmd/kubelet">kubelet</a></td>
<td class="org-left">makes sure that containers are running in a pod</td>
</tr>
<tr>
<td class="org-left"><a href="https://github.com/kubernetes/kubernetes/tree/master/cmd/kube-proxy">kube-proxy</a></td>
<td class="org-left">perform connection forwarding</td>
</tr>
<tr>
<td class="org-left"><a href="https://github.com/docker/engine">Container Runtime</a></td>
<td class="org-left">Kubernetes supported runtimes: Docker, rkt, runc and any <a href="https://github.com/opencontainers/runtime-spec">OCI runtime-spec</a> implementation.</td>
</tr>
</tbody>
</table>
</div>
</div>

<div id="outline-container-orgc033053" class="outline-4">
<h3>3. Addons: pods and services that implement cluster features</h3>
<div class="outline-text-4" id="text-1-19-3">
<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
<colgroup>
<col  class="org-left" />
<col  class="org-left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="org-left">Name</th>
<th scope="col" class="org-left">Summary</th>
</tr>
</thead>
<tbody>
<tr>
<td class="org-left">DNS</td>
<td class="org-left">serves DNS records for Kubernetes services</td>
</tr>
<tr>
<td class="org-left">Web UI</td>
<td class="org-left">a general purpose, web-based UI for Kubernetes clusters</td>
</tr>
<tr>
<td class="org-left">Container Resource Monitoring</td>
<td class="org-left">collect, store and serve container metrics</td>
</tr>
<tr>
<td class="org-left">Cluster-level Logging</td>
<td class="org-left">save container logs to a central log store with search/browsing interface</td>
</tr>
</tbody>
</table>
</div>
</div>

<div id="outline-container-orga528ad8" class="outline-4">
<h3>4. Tools</h3>
<div class="outline-text-4" id="text-1-19-4">
<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
<colgroup>
<col  class="org-left" />
<col  class="org-left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="org-left">Name</th>
<th scope="col" class="org-left">Summary</th>
</tr>
</thead>
<tbody>
<tr>
<td class="org-left"><a href="https://github.com/kubernetes/kubernetes/tree/master/cmd/kubectl">kubectl</a></td>
<td class="org-left">the command line util to talk to k8s cluster</td>
</tr>
<tr>
<td class="org-left"><a href="https://github.com/kubernetes/kubernetes/tree/master/cmd/kubeadm">kubeadm</a></td>
<td class="org-left">the command to bootstrap the cluster</td>
</tr>
<tr>
<td class="org-left"><a href="https://kubernetes.io/docs/reference/setup-tools/kubefed/kubefed/">kubefed</a></td>
<td class="org-left">the command line to control a Kubernetes Cluster Federation</td>
</tr>
<tr>
<td class="org-left">Kubernetes Components</td>
<td class="org-left"><a href="https://kubernetes.io/docs/concepts/overview/components/">Link: Kubernetes Components</a></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<br>
