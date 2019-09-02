const http = require('http');

let PORT = process.env.PORT || 1080

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-type': 'text/plain'
    });
    res.end('Hello world\n')
});

server.listen(PORT, '127.0.0.1', () => {
    console.log(`I am listening ${PORT}`)
})