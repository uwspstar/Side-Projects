const fs = require('fs');
const path = require('path');

const fileName = path.resolve(__dirname, 'log.txt');

// read file
fs.readFile(fileName, (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data.toString())
})

// write file
const content = '1232432432345-new content\n';
const opt = {
    flag: 'a' // append
}
fs.writeFile(fileName, content, opt, (err) => {
    if (err) {
        console.error(err);
    }
})