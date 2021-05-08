---
marp: true
theme: default
header: 'Microservices with Node JS and React'
footer: 'https://www.udemy.com/course/microservices-with-node-js-and-react/'
paginate: true
size: 16:9
---

# Microservices with Node JS and React (微服务)

- https://www.udemy.com/course/microservices-with-node-js-and-react/
- Build, deploy, and scale an E-Commerce app using Microservices built with Node, React, Docker and Kubernetes

---

### Data Management Between Services

- Database-Per-Service
- each service gets its own database
- services will never, ever reach into another services database
- independently
- efficiently may related DB types (SQL, noSQL,etc)

---

### Communication Strategies Between Services

- `Sync vs Async` (not the same mean as in the js)
- `Sync` : Services communicate with each other using `direct request`
- `Async` : Services communicate with each other `using events`
  - event bus
  - database-per-service pattern

---

### Pros and Cons of Async Communication

---

![75% bg brightness:0.9](q1.png)

---

### Event Bus Overview

---

![75% bg brightness:0.9](event-bus.png)

---

### Deployment Issues

---

![75% bg brightness:0.9](event-bus.png)

---

### Running Services with Docker

---

![75% bg brightness:0.9](docker1.png)

---

![75% bg brightness:0.9](d2.png)

---

### Kubernetes

---

![75% bg brightness:0.9](k1.png)

---

![75% bg brightness:0.9](k2.png)

---

![75% bg brightness:0.9](k3.png)

---