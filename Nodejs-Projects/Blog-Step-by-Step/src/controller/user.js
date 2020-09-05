const { exec, escape } = require('../db/mysql')
// mysql.escape avoid sql injection
const checkLoginAsync = async (username, password) => {
    /*
    if (username === 'xing' && password === '123') {
        return true;
    }
    return false;
    */
    //avoid sql injection
    username = escape(username);
    password = escape(password);

    const sql = `
    SELECT username, realname FROM users 
    WHERE username ='${username}' AND password='${password}'
    `
    const rows = await exec(sql);
    return rows[0] || {};
}

const checkLogin = (username, password) => {
    /*
    if (username === 'xing' && password === '123') {
        return true;
    }
    return false;
    */
    username = escape(username);
    password = escape(password);
    const sql = `
    SELECT username, realname FROM users 
    WHERE username ='${username}' AND password='${password}'
    `
    return exec(sql).then(rows => rows[0] || {});
}

module.exports = {
    checkLogin,
    checkLoginAsync
}