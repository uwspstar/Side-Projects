const fs = require('fs');
const path = require('path');
const readline = require('readline');

// the access.log is under the Blog project
// file name
const fileName = path.resolve(__dirname, 'access.log');

// read stream
const readStream = fs.createReadStream(fileName);

// create readline obj
const myReadline = readline.createInterface({
    input: readStream
})

let chromeNum = 0;
let total = 0;

myReadline.on('line', (lineData) => {
    if (!lineData) return;
    total++;

    const arr = lineData.split('--')
    if (arr[2] && arr[2].indexOf('Chrome') > 0) chromeNum++;
})

myReadline.on('close', () => {
    console.log('chrome percentage : ', chromeNum / total * 100, '%')
})