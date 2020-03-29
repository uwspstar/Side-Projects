const express = require('express')
const mongoose = require('mongoose')
const ShortUrl = require('./models/shortUrl')
const app = express()



mongoose.connect('mongodb://localhost/urlShortener', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.urlencoded({
    extended: false
}))

app.set('view engine', 'ejs')

app.get('/', async (req, res) => {
    const shortUrls = await ShortUrl.find()
    res.render('index', {
        shortUrls: shortUrls
    })
})

app.post('/shortUrls', async (req, res) => {
    await ShortUrl.create({
        full: req.body.fullUrl
    })

    res.redirect('/')
})

app.get('/:shortUrl', async (req, res) => {
    const shortUrl = await ShortUrl.findOne({
        short: req.params.shortUrl
    })
    if (shortUrl == null) return res.sendStatus(404)

    shortUrl.clicks++
    shortUrl.save()

    res.redirect(shortUrl.full)
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`listening on http://localhost:${port}`))