- https://www.youtube.com/watch?v=vjf774RKrLc&t=56s
```
$ npm init --yes
$ sudo npm install -g npm
```
- create api 
```
$ npm install express nodemon
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
$ npm install dotenv
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