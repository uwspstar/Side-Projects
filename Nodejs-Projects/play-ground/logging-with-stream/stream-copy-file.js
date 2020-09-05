const fs = require('fs');
const path = require('path');

const fileName1 = path.resolve(__dirname, 'log.txt');
const fileName2 = path.resolve(__dirname, 'log-bak.txt');

// read stream object
var readStream = fs.createReadStream(fileName1);
// write steam object
var writeStream = fs.createWriteStream(fileName2);
// copy through pipe
readStream.pipe(writeStream)
// read as chunk
readStream.on('data', chunk => {
    console.log(chunk.toString());
})
// finish copy data
readStream.on('end', () => {
    console.log('finish copy')
})
