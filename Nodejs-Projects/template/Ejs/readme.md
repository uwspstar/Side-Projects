- https://medium.com/swlh/master-ejs-template-engine-with-node-js-and-expressjs-979cc22b69be

### folder structure
```
$ touch readme.md
$ touch .env
$ touch .gitignore
$ mkdir server
$ touch server/app.js
$ mkdir web/public
$ mkdir web/public/assets
$ mkdir web/public/images
$ mkdir web/views 
$ touch web/views/index.ejs
$ mkdir web/views/template
$ touch web/views/template/head.ejs
$ touch web/views/template/foot.ejs
$ touch web/views/template/nav.ejs
```
### nodejs init
```
$ npm init --y
$ npm install -D dotenv nodemon
$ npm install express body-parser
$ npm install ejs
```
### .gitignore
```
.env
node_modules/*
```
### package.json
```
"main": "server/app.js",
  "scripts": {
    "start": "nodemon server/app.js"
  },
```
### npm run start
