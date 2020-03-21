const express = require('express');

const app = express();

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
//Listen server

app.listen(3000);