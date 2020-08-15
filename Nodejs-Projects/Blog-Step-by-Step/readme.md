### init dev env
- do not use an framework
- use nodemon
- use cross-env setup env, cross platform mac, linux and windows
```
process.env.NODE_ENV
```
- www.js for server
- app.js for logic
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