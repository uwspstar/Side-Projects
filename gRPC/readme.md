---
marp: true
theme: default
header: 'gRPC C# Master Class: Build Modern API & Microservices'
footer: 'https://www.udemy.com/course/grpc-csharp/learn/lecture/16570004#overview'
paginate: true
size: 16:9
---

# gRPC C# Master Class: Build Modern API & Microservices

- https://www.udemy.com/course/grpc-csharp/learn/lecture/16570004#overview
- https://grpc.io/docs
- `gRPC` is a free and open-source framework developed by Google
- `gRPC` is a part of the `Cloud Native Computation Foundation` (`CNCF`) -
  like `Docker` & `Kubernetes` for example.
- `gRPC` is the future of `micro-services API` and `mobile-server API` (and maybe `Web APIs`)

---

### RPC (Remote Procedure Calls)

- RPC (`Remote Procedure Calls`)
- In your Client code, it looks like you're just calling a function directly on the Server
- at the `core of gRPC`, you need to define the messages and services using `Protocol Buffers`

---

### Protocol Buffers

- Data is `binary` and `efficiently serialized` (`small payloads`) , this is one reason we are not using `JSON` data.
- `binary data` is `less CPU intensive`, good for Mobile
- `Protocol Buffers` are language agnostic
- code can be generated for pretty much any language

---

### Protocol Buffers role in gRPC

- `message` (data, request and response)
- `service` (service name and RPC endpoints)

---
