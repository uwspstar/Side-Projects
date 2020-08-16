const mysql = require('mysql');

// init connection
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    port: '3306',
    database: 'myblog'
});

// connect
con.connect();

// execute mysql query
const sql = `select * from users;`;
con.query(sql, (err, result) => {
    if (err) throw err;

    console.log(result);
});

// close connection
con.end();
