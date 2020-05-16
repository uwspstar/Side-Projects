# Template
### Quick start
- touch readme.md
- touch server.js
- touch .env
- touch .gitignore
- touch request.rest
```
install "REST Client" Extension first
```
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

### Simple way with mongoose
- set up work folder
```
$ mkdir <workfoldername>
$ cd <workfoldername>
```
- init project
```
$ npm init --yes
$ sudo npm install -g npm
```
- create api 
```
$ npm install express 
$ npm install -D nodemon
```
- run project
```
$ npm start
```
- create mongooDB
```
$ npm install mongoose
```
- hide connection string info
```
$ npm install -D dotenv
```
```
mongodb+srv://<dbuser>:<dbuserpassword>@cluster0-ywywv.mongodb.net/<test>?retryWrites=true&w=majority
```
```
mongoose
.connect(process.env.MONGO_URI, {
useUnifiedTopology: true,
useNewUrlParser: true,
})
.then(() => console.log('DB Connected!'))
.catch(err => {
console.log(DB Connection Error: ${err.message});
});
```
