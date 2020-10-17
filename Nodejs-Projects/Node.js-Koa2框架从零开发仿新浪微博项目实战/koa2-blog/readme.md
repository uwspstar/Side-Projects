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

### ejs (2020-11-13, 14)

- `EJS` stands for `Embedded JavaScript template`.
- https://github.com/mde/ejs
- local variable in ejs page, such as `locals.myName`
- `if ...else`
- `for loop`
- `<%- include(path, {variable})%>`

---

### SSR (Server-Side Rendering) (2020-11-14)

- Node.js Server Side Rendering (SSR) using EJS https://www.geeksforgeeks.org/node-js-server-side-rendering-ssr-using-ejs/

---

### mySQL (2020-11-14)

- `install mysql` https://dev.mysql.com/downloads/mysql/
- `macOS 10.15 (x86, 64-bit), DMG Archive`
- `install mysql workbench` (root user)
- `client side` open workbench, connect to mysql service https://dev.mysql.com/downloads/workbench/

---

![85% bg brightness:0.9](workbench.png)

---

### mysql (2020-10-15)

- https://www.w3schools.com/sql/sql_ref_mysql.asp

### mysql2 (2020-11-17)

- https://www.npmjs.com/package/mysql2

### sequelize ORM (2020-11-17)

- `Sequelize` is a promise-based Node.js `ORM` for `Postgres`, `MySQL`, `MariaDB`, `SQLite` and `Microsoft SQL` Server.
- https://sequelize.org

---
