---
marp: true
theme: default
header: 'AWS Certified Solutions Architect Associate 2021'
footer: 'study note by Xing, source https://www.udemy.com/course/aws-certified-solutions-architect-associate-/
'
paginate: true
size: 16:9
---

# AWS Certified Solutions Architect Associate 2021

- Introduction to Cloud Computing
- AWS Services

---

### Cloud Computing

- Private, Public and Hybrid Cloud and Multi Cloud
- Cloud Services (Offering) - IaaS , PaaS, SaaS, XaaS
- TCP /IP
- AWS Free Tier https://aws.amazon.com/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc

---
### Hybrid Cloud vs Multi Cloud
- is a mix of public and on-premises private cloud
- suitable for cost effectiveness, backup, disaster recovery, development and testing.
---

### IAM : Identity and Access Management

- https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html
- `Principal` : `Users`, `roles`, `federated users`, and `applications` are all `AWS principals`.
  - By default, a brand new IAM user has NO permissions to do anything.
  - Users are global entities.
  - use `roles` for application that run on `AWS EC2 instances`
  - Information about the principal includes the `policies` that are `associated with that principal`. In addition, a managed policy can be directly attached to your IAM Users,

---

- `federated users` : If the users in your organization already have a way to be authenticated, you can federate those user identities into AWS.
  - You can allow users to use `identity federation` to get `temporary access` to your AWS account.
- `IAM groups` : You can organize IAM users into `IAM groups` and attach `access control policies` to a `group`.
  - A user can belong to multiple groups.
  - `Groups` do not have security credentials, and cannot access web services directly.

---

- `IAM Role` : A role does not have any credentials associated with it.
  - An IAM user can assume a role to `temporarily` take on different permissions for a specific task. A role can be assigned to a federated user

---

- `Authentication`
  - To authenticate from the `console` as a user, you must sign in with your user name and password.
  - To authenticate from the `API or AWS CLI`, you must provide your `access key` and `secret key`

---

- `Authorization`
  - `Policies` types can be categorized as permissions policies or permissions boundaries.
  - To provide your users with permissions to access the AWS resources in their own account, you need `identity-based policies`.
  - `Resource-based policies` are for granting cross-account access
  - By default, all requests are denied.

---

- `Actions` or `Operations`
  - Operations are defined by a service, and include things that you can do to a resource, such as viewing, creating, editing, and deleting that resource.
- `Resource` : `policy` attached
  - Users or groups can have multiple policies attached to them that grant different permissions.

---

- IAM Users
  - use an `access key` (an `access key ID` and `secret access key`) to make `programmatic` requests to AWS.
  - An Access Key ID and Secret Access Key can only be uniquely generated once and must be `regenerated` if lost
- `CloudTrail log` records that include information about IAM identities who made requests for resources in your account.
- `IAM` and `AWS Security Token Service (STS)` are offered at `NO additional charge`.
- use IAM tags to add custom attributes to an IAM user or role using a tag key–value pair.

---

### pre knowledge

- Binary Representation
- bit vs byte : Bytes are a larger measurement that bits. 1 byte = 8 bits. There are eight bits in one Byte.

---

### IPv4 vs IPv6

- IPv4
  - 32 bits long
  - 4 bytes or octets (each in 8 bits)
  - Ex. 120.130.233.12
  - Requires a subnet mask
  - can have public or private ranges

###

- IPv6
  - 128 bits long
  - 8 fields each up to 16 bytes
  - Ex. 2002:odb8:85a3:0000:0000:8a2e:0370:7334
  - Requires a subnet mask
  - All public

---

### CIDR & Subnets

- CIDR Range

  - Classless Inter Domain Routing
  - ex. 10.0.0.0/8, 192.168.1.0/24

- Subnets
  - Any CIDR can be broken down to a smaller chunks called Subnets

---

### Encryption

- Asymmetric Key Encryption (key pair , private and public)
- Symmetric Key Encryption (one security key)
- AWS KMS can use both Asymmetric and Symmetric keys
- Asymmetric cryptography can be shared Symmetric Key

---

### Block storage vs Object storage

- `Block Storage` : Suitable for databases, random read/write loads. EBS is an example.
  - Divides the data into `equal sized blocks`.
  - Data blocks do NOT contain metadata.
  - It keeps an index for the block storage location.

---

- `Object Storage` : Photos, videos, music, static web content, data backups are examples of objects. It stores the object as a whole (including metadata).
  - An object is the data itself, its metadata, and a unique ID (such as the file name).
  - Suitable for data that can be updated incrementally and does not require a lot of writes/updates.
  - Is ideally suited for distributed architectures.
  - Is `cheaper`.
  - Better scalability and durability.
  - No limit on amount of data or metadata in an object.
  - It can `NOT` be mounted as drive, or directory to an EC2 instance.
  - Ideal for data growth storage.

---

### Monolithic vs Multi-Tier Applications

### Monolithic vs. Microservices Applications

---

### Domain Name System (DNS)

- Domain Name Servers (DNS) are databases on the internet `mapping domain names`
  to `IP` address(es).
- Each device connected to the internet `MUST` have a DNS in its `TCP/IP` configuration.
- It is much easier to remember a domain name than an IP address.

---

### OLTP vs OLAP Databases

---

### Disaster Recovery (DR)

### Disaster Recovery - RTO & RPO

---

### IP Routing

- every router will know about `all networks` and how to get to them.
- Routing can be configured statically or using dynamic routing protocols such as BGP.

---

### Internet Protocol Security (IPSec) : VPN

- `IPSec` is used to establish secure communication in `Virtual Private Networks` (`VPN`s).
- Internet Protocol Security (`IPSec`) is a `secure network layer protocol suite` that can authenticate and encrypt data packets between `host and gateway`, `host to host`, and `gateway to gateway` (network to network or commonly referred to as site-to-site).

---

### TLS/SSL/X.509 Digital Certificates 101 : Digital Certificates

- `X.509/TLS/SSL` or Digital Certificates is a `digital file` that is used to certify the `ownership/binding` between a `public cryptographic key` to an `entity` that must be named in the subject field. The entity can be a person, organization, web entity, or a software distribution. The certificate includes the `public key` in question and information about who issued it (the `Certificate Authority`).
- widely used for authentication in AWS services including `ELB` and `CloudFront`.

---

### TLS/SSL (& HTTPS) – Sever-Side Authentication and SSL Handshake

- Client sent Secure Page `Request` (https://) to Server
- Server sent `Public Key` + `Digital Certificate` to Client
- Client verify Server Certificate with Certificate Authority (CA)
- Client sent `Symmetric key` + `URL` & `Session data` All `encrypted` with Server `Public Key` to Server
- Server sent Requested Document + Encrypted HTTP data using `symmetric key` to Client

### TLS/SSL – Mutual (Two Way) Authentication and SSL Handshake

- Both Client and Server verify Server Certificate with Certificate Authority (CA)

---

### Data Warehouse

- A data warehouse is a `relational DB` (support SQL queries) that is designed for analytics (OLAP) rather then Transaction processing (OLTP).
- A data warehouse is a collection of data collected from different sources, which then undergoes complex long `queries` for analytics and business reporting purposes.

---

### NoSQL Databases

- suited for today’s mobile, gaming and web applications.
- Use unstructured or semi-structure data such as documents, key-value, and
  graphs.
- Distributed databases that can `scale horizontally`, `yielding` much higher performance compared to relational databases.
- A key value database
  - Session data storage.
  - Large shopping carts.

### Containers

- AWS ECS is all about launching Docker-based clusters in AWS using Docker images.
- `virtualize the OS` of the host rather than the hardware as in VMs. A container does not have a full
  OS copy.
- includes the `code`, `system tools`, `runtime`, `libraries` and `binaries` required to run the respective microservices.
- smaller in size, and much faster to boot.
