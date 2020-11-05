---
marp: true
theme: default
header: 'Microservices with Node JS and React'
footer: 'https://www.udemy.com/course/microservices-with-node-js-and-react'
paginate: true
size: 16:9
---

# Microservices with Node JS and React

- https://www.udemy.com/course/microservices-with-node-js-and-react

---

![75% bg brightness:0.9](mn.png)

---

![75% bg brightness:0.9](ms.png)

---

### Data in Microservices

- the big problem of the microservices : data management between services
- each service gets its own database (if it needs one).service will never, ever reach into another services database

---

### What is the #1 challenge in microservices?

- managing data between different services

---

### Why do we create one database per service?

- We want every service to be able to act `independently` without depending on any other service
- If each service has its own database, we can optimize what type of database we pick for a service
- A single database shared between many services would be a single point of failure, which would `limit the reliability` of our app

---

### Imagine you are developing a service called ProductsService. Your service's goal is to manage all aspects of products sold on your platform. Another engineer who is responsible for a different service comes to you and asks for documentation on how to connect to your services database. How would you respond?

- ​I would ask them to find another way to get information out of my service's database.

---

### Communication Strategies Between Services

- Sync vs. Async
- these words don't mean what they mean in the JS world

---

![90% bg brightness:0.9](com.png)

---

### Sync Communication Between Services

- Sync service communicate with each other using direct requests

---

![90% bg brightness:0.9](sync.png)

---

### Async Communication Between Services

- Async service communicate with each other using events

---
