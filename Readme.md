# Design and Build a Load Balancer

[![Language](https://img.shields.io/badge/Language-Go%20%7C%20Java%20%7C%20C%2B%2B%20%7C%20Node.js-blue.svg)](https://nodejs.org/)
[![Category](https://img.shields.io/badge/Category-System%20Design-brightgreen.svg)](https://github.com/)
[![Status](https://img.shields.io/badge/Status-Challenge-orange.svg)](https://github.com/)



This repository contains the problem statement and requirements for designing and building a high-performance, scalable TCP load balancer from scratch.

---

## 🎯 Problem Statement

Design and build a load balancer that acts as a **Reverse Proxy**, distributing incoming TCP connections across multiple configured backend servers.

---

## 📋 Requirements

The problem statement is a starting point. Be creative, dive into the product details, and add constraints and features you think would be important.

### Core Requirements

- [ ] Ability to **accept incoming TCP connections** and forward them to a configured backend server.
- [ ] Ability to **add and remove** backend servers dynamically at runtime.
- [ ] Ability to **monitor the health** of backend servers (Health Checks).
- [ ] Ability to have a **configurable load balancing strategy** (e.g., Round Robin, Least Connections).
- [ ] Ability to **measure and monitor** key load balancer metrics.
- [ ] Should be designed to scale to **millions of concurrent TCP connections**.

### High-Level Requirements

- [ ] **High Availability:** Ensure all high-level components are fault-tolerant.
- [ ] **Durability:** Ensure system data (like configuration) is durable and not lost on restarts.
- [ ] **Scalability:** Define how the system behaves during scale-up and scale-down events.
- [ ] **Cost-Effectiveness:** Justify design choices based on cost and performance trade-offs.
- [ ] **Capacity Planning:** Describe how capacity planning influenced the design.
- [ ] **Inter-service Communication:** Define how other services will interact with your load balancer (e.g., for configuration changes).

### Micro Requirements

- [ ] **Consistency:** Ensure system data (especially the list of active servers) never enters an inconsistent state.
- [ ] **Deadlock Freedom:** Ensure the system is free of deadlocks, particularly in multi-threaded environments.
- [ ] **Throughput:** Analyze and state how locking might affect system throughput and what strategies are used to minimize it.

---

## 🚀 Project Output

### 📄 Design Document

Create a comprehensive design document detailing all critical design decisions, tradeoffs, components, services, and communication protocols. Specify how the system handles scale and identify potential chokepoints.

> **Note:** Do not create unnecessary components just to make the design look complicated. **A good design is always simple and elegant.** A good way to think about it is: if you were to create a separate process/machine/infra for each component and you had to code it yourself, would you still do it?

### 💻 Prototype

To understand the nuances and internals of this system, build a working prototype that:

- [ ] Functions as a working TCP load balancer.
- [ ] Provides an interface (CLI or API) to add and remove backend servers.
- [ ] Shows the health status of all configured backend servers.
- [ ] Visualizes key load balancer metrics (e.g., active connections, request rate).
- [ ] Allows changing the load balancing strategy on the fly.
- [ ] All configuration changes should take effect **without requiring a reboot**.

---

## 🛠️ Recommended Tech Stack

This is a recommended tech stack that will help you build your Load Balancer effectively.

| Category | Options                                   |
| :------- | :---------------------------------------- |
| Language | A multi-threaded language like **Golang**, **Java**, **C++**, **Node.js** . |

---

## ⚠️ Keep in Mind

A common pitfall to be aware of while building this Load Balancer:
> **System calls are blocking.** Consider how to handle I/O operations without blocking the main execution thread (e.g., using non-blocking I/O, event loops like `epoll`/`kqueue`, or thread pools).

---

## 🎓 What You'll Learn

By completing this project, you will gain a deep understanding of:

- **System Calls:** Master the fundamentals of networking system calls (`socket`, `bind`, `listen`, `accept`).
- **Load Balancer Internals:** Gain deep insight into health checks, proxying, and routing strategies.
- **Concurrent Execution:** Master concurrent programming using multi-threading, goroutines, or other paradigms.