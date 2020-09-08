---
marp: true
theme: default
header: 'Koa2'
footer: 'by Xing'
paginate: true
size: 16:9
---

<!--
_backgroundColor: white
_color: black
-->

# Koa2

- https://www.youtube.com/watch?v=l5eH1ez96g4&list=PL9nxfq1tlKKlhV1UzUmElRkxmjkoO3mtH&index=78

---

### Koa2 vs Express

- express middleware is using async callback, koa2 support async/await
- new framework based on koa2, such as egg.js
- koa2 is future

---

### async/await

- https://javascript.info/async-await
- Can’t use await in regular functions
- await won’t work in the top-level code
- Error handling , try catch

---

### async/await and promise.then/catch

- When we use async/await, we rarely need .then, because await handles the waiting for us. And we can use a regular try..catch instead of .catch. That’s usually (but not always) more convenient.

- But at the top level of the code, when we’re outside any async function, we’re syntactically unable to use await, so it’s a normal practice to add .then/catch to handle the final result or falling-through error, like in the line (\*) of the example above.

---

### install Koa2

---

### develop API, connect to DB, login, log

---

### koa2 middleware

---
