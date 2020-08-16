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
### MVC
### create Model
```
$ mkdir src/model
$ touch src/model/resModel.js
```
### create Controller, handle data
```
$ mkdir src/controller
$ touch src/controller/blog.js
```


### Lib
- https://www.npmjs.com/package/cross-env
- https://www.npmjs.com/package/nodemon