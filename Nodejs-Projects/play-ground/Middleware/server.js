const express = require('express');
const app = express();

// globle middleware
app.use(loggingMiddleware);

app.get('/', middleware, (req, res) => {
    console.log('Home Page ...')
    res.send('Home Page')
})

app.get('/users', authMiddleware, (req, res) => {
    console.log(req.admin)
    res.send('Users Page')
})

function loggingMiddleware(req, res, next) {
    console.log('Inside Middleware')
    console.log(`${new Date().toISOString()}: ${req.originalUrl}`)
    next()
}

function middleware(req, res, next) {
    console.log('Before Next')
    next()
    console.log('After Next')
}

function authMiddleware(req, res, next) {

    console.log('authMiddleware')
    if (req.query.admin === 'true') {
        req.admin = true
        next()
    } else {
        res.send('ERROR: You must be an admin')
    }


}

app.listen(3000, () => console.log(`listening on 3000`))