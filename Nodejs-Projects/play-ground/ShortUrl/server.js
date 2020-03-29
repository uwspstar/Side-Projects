const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.set('view engine', 'ejs')

app.post('shortUrls', (req, res) => {
    res.render('index')
})
app.get('/', (req, res) => {
    res.render('index')
});

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`listening on http://localhost:${port}`))