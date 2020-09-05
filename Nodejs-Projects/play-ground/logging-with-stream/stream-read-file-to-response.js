var http = require('http');
var fs = require('fs');
var path = require('path');

var server = http.createServer((req, res) => {
    var method = req.method;
    if (method === 'GET') {
        var fileName = path.resolve(__dirname, 'data.txt');
        // file IO
        var stream = fs.createReadStream(fileName);
        // network IO 
        stream.pipe(res);
    }
}).listen(8000);