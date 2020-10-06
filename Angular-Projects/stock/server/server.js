const express = require('express');
const axios = require('axios');

let app = express();

app.get('/', (req, res) => {
    res.send('apiServer')
})

app.get('/api/indx', (req, res) => {
    res.json();
})

let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`listening...port ${port}`, `server start http://localhost:${port}`)
})