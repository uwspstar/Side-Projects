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


const sqlUpdate = `update users set username = 'xingWang@xing.com' where id =  1;`;
con.query(sqlUpdate, (err, result) => {
    if (err) throw err;

    console.log(result);
});

const sqlInsert = `insert into blogs(title, content, createtime, author) values('Title-Sun','content-Sun@xing.com', 4597525543764, 'Sun');`;
con.query(sqlInsert, (err, result) => {
    if (err) throw err;

    console.log(result);
});

// close connection
con.end();
