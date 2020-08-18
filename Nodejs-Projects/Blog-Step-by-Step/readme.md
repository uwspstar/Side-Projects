### keep safe guard in mind
### init dev env
- ```npm init -y'
- do not use an framework
- use nodemon
```
$ npm install --save-dev nodemon
```
- add ```.gitignore```
```
$ touch .gitignore
```
- use cross-env setup env, cross platform mac, linux and windows , process.env.NODE_ENV

```
$ npm install --save-dev cross-env
```
```
"main": "/bin/www.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "cross-env NODE_ENV=dev nodemon ./bin/www.js",
    "prod": "cross-env NODE_ENV=production nodemon ./bin/www.js"
  },
```
- www.js for server
- app.js for logic
```
$ touch app.js
$ mkdir bin
$ touch bin/www.js
```

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
- ```$ npm install mysql```

### create db config
- mkdir src/config
- touch src/config/db.js

### create db
- mkdir src/db
- touch src/db/mysql.js






### cookie and session, login with cookie

### cookie
- cannot put username , such as email, phone
- can put userId (server side match username)
- client / browser side cookie
- js with cookie
- server side using cookie for login
- cookie size is <= 5kb
- not share with different domain
- key / value; k1=v1;k2=va;k3=v3;
- every http request, the cookie will be sent to request domain
- server can modify cookie and send back to client/browser
- server response ```Set-Cookie```
- js client/browser can modify cookie (has limit)
- cookie append
- client check cookie (3 ways)
- js check and modify cookie (limit, not often)
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

### write session into redis

### Lib
- https://www.npmjs.com/package/cross-env
- https://www.npmjs.com/package/nodemon
- https://github.com/Eished/node_blog_notes