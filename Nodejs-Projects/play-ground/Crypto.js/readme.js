const crypto = require('crypto');

// key
const SECRET_KEY = 'Xw987!!456$$123';

// md5 
function md5(content) {
    let md5 = crypto.createHash('md5');
    return md5.update(content).digest('hex')
}

// encrypt function
function getPassword(password) {
    const str = `password=${password}&key=${SECRET_KEY}`;
    return md5(str)
}

//const result = getPassword('123abc');
//console.log('getPassword("123abc") : ', result);

module.exports = {
    getPassword,
}