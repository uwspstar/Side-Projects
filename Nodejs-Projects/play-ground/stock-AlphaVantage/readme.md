### project init
$ touch readme.md
$ touch .env
$ touch .gitignore
$ touch server.js
$ mkdir views
$ touch views/index.ejs

$ npm init --y
$ npm install -D dotenv nodemon
$ npm install express body-parser
$ npm install ejs

### alpha vantage
- https://www.alphavantage.co/support/#api-key

### code
- https://levelup.gitconnected.com/stocks-api-tutorial-with-javascript-40f24320128c

### live server
- need to restart after create index.html page ( may need to change the ```port``` after start live server)

### EJS
```
startEJS
|--public
|--views
  |--pages
     |--home.ejs
  |--template
     |--head.ejs
     |--nav.ejs
     |--footer.ejs 
|--index.js
|--package.json
```