const mysql = require('mysql');
const { MYSQL_CONF } = require('../config/db');

// create con obj
const con = mysql.createConnection(MYSQL_CONF);

// create connection
con.connect();

// generic execute sql
// also keep connection open after this block
// exec many query with same connection

const exec = (sql) => {
    const promise = new Promise((resolve, reject) => {
        con.query(sql, (err, result) => {
            if (err) {
                //console.log(err)
                //throw err;
                reject(err);
                return;
            }
            //console.log(result)
            resolve(result);
        })
    })
    return promise;

}

module.exports = {
    exec
}