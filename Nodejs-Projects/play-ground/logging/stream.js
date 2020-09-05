// standard IO
// process.stdin.pipe(process.stdout)
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        req.pipe(res)  // main method
    }
}).listen(8000);