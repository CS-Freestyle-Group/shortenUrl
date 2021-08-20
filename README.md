
วิธีใช้งาน
ต้องมี Docker Desktop + Kubernetes installed


Step 1 set id docker hub ก่อน โดยการสร้าง secret

```
kubectl create secret docker-registry myregistrykey --docker-server=docker.io --docker-username=first545455 --docker-password=Su50090909 --docker-email=first545455@gmail.com
```

Step 2 apply deploy.yaml

```
kubectl apply -f deploy.yaml
```

Step 3 apply service.yaml

```
kubectl apply -f service.yaml
```

Step 4 เช็ค service

```
kubectl get service
```

คำสั่งอื่นๆ

ดู pod

```
kubectl get pod
```

ดู Deploy

```
kubectl get deployment
```

ดู log

```
kubectl log pod ชื่อpod
```

ดูรายละเอียดpod

```
kubectl describe pod ชื่อpod
```