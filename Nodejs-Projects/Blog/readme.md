- mac use "brew" to install "nvm" for multiple node version
- https://brew.sh/
- ECMAScript : syntax
- JS : (ECMAScript syntax + Web API (w3c))
- NodeJs (ECMAScript syntax + NodeJs API)
- https://nodejs.org/docs/latest/api/
- commonJs
- debugger

### Quick start
- touch readme.md
- touch server.js
- touch .env
- touch .gitignore
- npm init -y
- npm install -D dotenv nodemon

### .gitignore
```
.env
node_modules/*
```

### lib
```
install "REST Client" Extension first
```
- touch request.rest

- npm init -y
- npm install express
- npm install -D dotenv nodemon
- npm install ejs
- npm install mongoose
```
view engine, need to create "view" folder
```
- mkdir views
- touch views/index.ejs
- touch views/login.ejs
- touch views/register.ejs
- npm install bcrypt
```
encryption
```
- npm install express-flash express-session
```
session
```
- npm install passport passport-local
```
passport local :  login with username and password
```
- touch passport-config.js
