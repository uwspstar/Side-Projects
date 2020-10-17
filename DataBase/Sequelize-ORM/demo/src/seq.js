const { Sequelize } = require('sequelize');
const conf = {
    host: 'localhost',
    dialect: 'mysql'
}

const seq = new Sequelize('koa2_db', 'root', '12345678', conf);
/* 
// test connection --> move to sync.js
async function conn() {
    try {
        await seq.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

conn();
*/

module.exports = seq;