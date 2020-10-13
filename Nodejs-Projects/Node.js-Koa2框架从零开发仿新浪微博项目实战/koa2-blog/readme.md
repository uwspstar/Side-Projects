---
marp: true
theme: default
header: 'Node.js-Koa2框架从零开发仿新浪微博项目实战'
footer: 'https://www.youtube.com/watch?v=McRK0JWnwcw&list=PL9nxfq1tlKKnOUzdKHwe_7dl5A0uOuTew'
paginate: true
size: 16:9
---

### Project init

- `$ npm install -g koa-generator`
- `koa2 -e blog-code`
- `cd blog-code && npm install`
- `npm run dev`
- `npm install cross-env -D`
- using cross-env for windows, OS, Linux

---

- modify `package.json`

```js
"scripts": {
   // ...
    "dev": "cross-env NODE_ENV=dev ./node_modules/.bin/nodemon bin/www",
    "prd": "cross-env NODE_ENV=production pm2 start bin/www",
   //...
  },
```

---

- `mkdir src`
- move `public`, `routes`, `views`, and `app.js` inside `src` folder
- modify `bin\www` file

```js
var app = require('../src/app');
```

- `npm run dev`

---

### 路由 (2020-11-12)

### ejs (2020-11-13)

- https://github.com/mde/ejs

---
