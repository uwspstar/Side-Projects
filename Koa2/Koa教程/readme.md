---
marp: true
theme: default
header: 'Koa教程'
footer: 'https://www.youtube.com/watch?v=SkSsdKreKm0&list=PL9nxfq1tlKKnsFu7c9Stxz6DCD4EJZ9pg'
paginate: true
size: 16:9
---

### koa2

- [koa2](https://www.npmjs.com/package/koa2)
- [koajs](https://github.com/koajs/koa)
- [koa.bootcss.com](https://koa.bootcss.com/)
- [koa-router](https://www.npmjs.com/package/koa-router)

---

### Project quick start

- `npm i koa`
- https://www.npmjs.com/package/koa-router

```js
const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
  ctx.body = 'Hello World';
});

app.listen(3000);
```

---

### 使用 async 功能，我们可以实现 “真实” 的中间件

- 当一个中间件调用 next() 则该函数暂停并将控制传递给定义的下一个中间件。
- 当在下游没有更多的中间件执行后，堆栈将展开并且每个中间件恢复执行其上游行为。

---

```js
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});
```

---

```js
const Koa = require('koa');
const app = new Koa();

// logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

app.use(async (ctx) => {
  ctx.body = 'Hello World';
});

app.listen(3000);
```

---

### koa-router

- `npm i koa-router`
- [koajs/router API](https://github.com/koajs/router/blob/HEAD/API.md)

```javascript
const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => {
  // ctx.router available
});

app.use(router.routes()).use(router.allowedMethods());
```

---
