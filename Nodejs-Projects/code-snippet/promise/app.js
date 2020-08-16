const fs = require('fs');
const path = require('path');

// callback-hell
// callback way : ('a.json',callback)
function getFileContent(fileName, callback) {
    // __dirname current app path
    const fullFileName = path.resolve(__dirname, 'files', fileName);
    fs.readFile(fullFileName, (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        // console.log(data.toString());

        callback(JSON.parse(data.toString()));

    })
}
// test callback-hell
getFileContent('a.json', aData => {
    console.log('a data', aData) // console.log('a data', JSON.parse(data.toString()))
    getFileContent(aData.next, bData => {
        console.log('b data', bData);
        getFileContent(bData.next, cData => {
            console.log('c data', cData);
        })
    })
})

// promise way
function getFileContentPromise(fileName) {
    const promise = new Promise((resolve, reject) => {

        // __dirname current app path
        const fullFileName = path.resolve(__dirname, 'files', fileName);
        fs.readFile(fullFileName, (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(JSON.parse(data.toString()));

        })

    })
    return promise;
}

//test promise
getFileContentPromise('a.json')
    .then(aData => {
        console.log('a data', aData);
        return getFileContentPromise(aData.next);
    }).then(bData => {
        console.log('b data', bData);
        return getFileContentPromise(bData.next);
    }).then(cData => {
        console.log('c data', cData);
    })


    // async await