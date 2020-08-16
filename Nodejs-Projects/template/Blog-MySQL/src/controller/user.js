const { exec } = require('../db/mysql')
const checkLogin = (username, password) => {
    /*
    if (username === 'xing' && password === '123') {
        return true;
    }
    return false;
    */
    const sql = `
    SELECT username, realname FROM users 
    WHERE username ='${username}' AND password='${password}'
    `
    return exec(sql).then(rows => rows[0] || {});
}

module.exports = {
    checkLogin
}