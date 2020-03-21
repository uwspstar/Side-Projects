const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config')

//Middlewares
//app.use(Auth);

app.use("/posts", () => {
    console.log("this is middle ware for /posts");
})


//Routs
app.get("/", (req, res) => {
    res.send("hell world");
    console.log("hello response");

})


app.get("/posts", (req, res) => {
    res.send("hell world, posts");
    console.log("hello posts");

})


//Connect to DB 
mongoose
    .connect(process.env.DB_CONNECTION, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(() => console.log("DB Connected !"))
    .catch(err => {
        console.log(`DB Connection Error: ${err.message}`);
    });

//Listen server
app.listen(3000);