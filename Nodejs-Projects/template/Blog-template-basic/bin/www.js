const http = require('http');

const PORT = 8000;
const sererHandle = require('../app');

const server = http.createServer(sererHandle).listen(PORT, () => {
    console.log(`...server is listening PORT : ${PORT}`);
});
