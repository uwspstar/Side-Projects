const fs = require('fs');
const path = require('path');

// write log
function writeLog(writeStream, log) {
    writeStream.write(log + '\n');
}

// write Stream
function createWriteStream(fileName) {
    const fullFileName = path.join(__dirname, '../', '../', 'logs', fileName);

    const writeStream = fs.createWriteStream(fullFileName, {
        flag: 'a'
    })
    return writeStream;
}

const accessWriteStream = createWriteStream('access.log');
const errorWriteStream = createWriteStream('error.log');
const eventWriteStream = createWriteStream('event.log');

// write access log
function access(log) {
    writeLog(accessWriteStream, log);
}

// write error log
function error(log) {
    writeLog(errorWriteStream, log);
}

// write event log
function event(log) {
    writeLog(eventWriteStream, log);
}
module.exports = {
    access,
    error,
    event,
}