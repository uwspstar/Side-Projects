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
- use cross-env setup env, cross platform mac, linux and windows
```
process.env.NODE_ENV
```
```
```
- www.js for server
- app.js for logic
```
$ touch app.js
$ touch www.js
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