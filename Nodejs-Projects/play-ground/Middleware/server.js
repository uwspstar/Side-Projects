const express = require('express');
const app = express();

// globle middleware
app.use(loggingMiddleware);

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.get('/users', authMiddleware, (req, res) => {
    res.send('Users Page')
})

function loggingMiddleware(req, res, next) {
    console.log('Inside Middleware')
    console.log(`${new Date().toISOString()}: ${req.originalUrl}`)

    next()
}

function authMiddleware(req, res, next) {
    console.log('authMiddleware')
    next()
}

app.listen(3000, () => console.log(`listening on 3000`))