---
marp: true
theme: uncover
header: 'Node.js 从零开发个人博客项目'
footer: ''
paginate: true
size: 16:9
---

<!--
_backgroundColor: grey
_color: white
-->

# Node.js 从零开发个人博客项目

- https://www.youtube.com/playlist?list=PL9nxfq1tlKKlhV1UzUmElRkxmjkoO3mtH

---

### core points

- http, nodejs handel http, route, mysql
- error handle
- cookie, session, redis, nginx reverse proxy
- sql injection, xss attack, crypto
- log, stream, contrab, readline
- deployment
- micro service, monolithic

---

### workflow

![90% bg brightness:0.9](workflow.png)

---

### start project

- start mySql server
- start redis server
- \$ npm run dev

---

### over all

- log
- error handler
- security
- CURD

---

### keep safe guard in mind

---

### init dev env

- `npm init -y`

```
$ npm install --save-dev nodemon
```

- add `.gitignore`

```
$ touch .gitignore
```

- use cross-env setup env, cross platform mac, linux and windows , process.env.NODE_ENV

```
$ npm install --save-dev cross-env
```

---

### package.json

```
"main": "/bin/www.js",
  "scripts": {
    "dev": "cross-env NODE_ENV=dev nodemon ./bin/www.js",
    "prod": "cross-env NODE_ENV=production nodemon ./bin/www.js"
  },
```

---

- www.js for server
- app.js for logic

```
$ touch app.js
$ mkdir bin
$ touch bin/www.js
```

---

### dev API

- build router (split router and data)

```
GET     /api/blog/list?author=abc&keyword=myKeywords
GET     /api/blog/detail?id=1
POST    /api/blog/new
POST    /api/blog/update?id=1
POST    /api/blog/del?id=1
POST    /api/user/login
```

- return 404

```
// return 404 , page no found
res.writeHead(404, { 'Content-type': 'text/plain' });
res.write("404 Not Found");
res.end();
```

### create Router, handle http req and res

```
$ mkdir src
$ mkdir src/router
$ touch src/router/blog.js
$ touch src/router/user.js
```

### MVC, split router and controller

### create Model

```
$ mkdir src/model
$ touch src/model/resModel.js
```

### create Controller, handle data

```
$ mkdir src/controller
$ touch src/controller/blog.js
$ touch src/controller/user.js
```

### build API with mock data, no login

### install mySQL

- for mac
- https://macresearch.org/fix-cant-be-opened-because-apple-cannot-check-it-for-malicious-software/

```
System Preferences -> Security & Privacy -> click “Open Anyway”.
```

- create users table
- create blogs table
- update a record

```
SET SQL_SAFE_UPDATE = 0
```

- alter users table, add state column for "soft delete"

### install mySql on nodejs

- `$ npm install mysql`

### create db config

- mkdir src/config
- touch src/config/db.js

### create db

- mkdir src/db
- touch src/db/mysql.js

### cookie and session, login with cookie

---

### cookie

- cannot put username , such as email, phone
- can put userId (server side match username)
- client / browser side cookie
- js with cookie
- server side using cookie for login
- cookie size is <= 5kb

---

- not share with different domain
- key / value; k1=v1;k2=va;k3=v3;
- every http request, the cookie will be sent to request domain
- server can modify cookie and send back to client/browser
- server response `Set-Cookie`
- js client/browser can modify cookie (has limit)

---

- cookie append
- client check cookie (3 ways)
- js check and modify cookie (limit, not often)

---

### use cookie (frontend)

```
document.cookie;
document.cookie = 'k1=100'
document.cookie = 'k2=200'
```

- sever nodejs modify cookie (check, modify, verify login)

### session

- for cookie : cannot put username , such as email, phone
- for cookie : can put userId, sId (sessionId), (server side match username)
- for session : server side match username, save user info
- session save inside Heap

---

### write session into redis

- https://www.runoob.com/redis/redis-install.html
- https://dev.to/ravishan16/brew-redis-on-mac-1ni8
- https://redis.io/topics/quickstart

---

### redis (need to use Terminal to run install and server, open two windows)

- brew install redis
- start server `$ redis-server`
- redis-cli

---

### use redis

```
set mykey 123
get mykey
keys *
del mykey
set userId userSessionID1234
get userId
```

---

### nodejs redis

- npm install redis --save
- redis-server

---

### frontend and server end

- login relay on cookie, must use browser to test
- cookie not share cross domain, frontend and server end has to be same domain
- need "nignx" as proxy, make frontend and server end same domain

---

### nginx 配置

- CDN
- load balance
- reverse proxy : different domain

```
localhost:8080 --> nginx --> localhost:8001 (html)
localhost:8080 --> nginx --> localhost:8002 (nodejs)
```

---

### Log 日志 qps

- access log
- self log (event, err log)
- nodejs file
- nodejs stream
- \*\*\* log function and usage
- \*\*\* log separation, log content separation. analyze

---

- log separation with Date, such as `2020-09-05.access.log`
- log save to file, not save to mySql, not save to redis
- linux `crontab`

---

### log folder

- \$ mkdir logs
- \$ touch logs/access.log
- \$ touch logs/error.log
- \$ touch logs/event.log

---

### utils folder

- \$ mkdir src/utils
- \$ touch src/utils/log.js

---

### crontab

- Schedule jobs with crontab on macOS
- https://ole.michelsen.dk/blog/schedule-jobs-with-crontab-on-mac-osx/
- 5 star command `***** command`

---

### log separation

- set up daily job with `crontab`
- copy access.log and rename to `2020-09-05.access.log`
- clear access.log, continue write new log

---

### analyze log

- access.log, analyze the chrome percentage
- log is save as line by line
- use nodejs `readline` based on stream, efficient

---

### security

- sql injection (database steal data), start from web 2.0, input a sql piece code, use mySql escape() function
- xss attack, steal frontend cookie, server side also need to concern to avoid (both side). in html has js code to get html info. avoid it , change js special character (such as, `&` -> &amp; `<` -> &lt; `>`->&gt; `"`->&quot;). avoid can use `npm i xss --save`
- encryption
- server side attack (we use web server nodejs in this case)
- some attack need hardware and service to support (OP, such as DDOS)

---

### install xss

- \$ npm i xss --save

---

### password encryption

- when user register, encrypt password
- nodejs use crypto

---

### Lib

- https://www.youtube.com/playlist?list=PL9nxfq1tlKKlhV1UzUmElRkxmjkoO3mtH
- https://www.npmjs.com/package/cross-env
- https://www.npmjs.com/package/nodemon
- https://github.com/Eished/node_blog_notes
- https://github.com/marp-team/marp-core
