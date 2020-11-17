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
- [koajs](https://koajs.com/)
- [koa.bootcss.com](https://koa.bootcss.com/)

---

### project init

- `npm init`
- `touch app.js`
- `npm i koa`
- `.gitignore`

```js
const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
  ctx.body = 'Hello World';
});

app.listen(3000);
```
