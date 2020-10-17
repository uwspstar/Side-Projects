const { Sequelize } = require('sequelize');
const seq = require('./seq');

const User = seq.define('user', {
    // id will be auto created, and auto increase
    userName: {
        type: Sequelize.STRING,  // varchar(255)
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nickName: {
        type: Sequelize.STRING
    }
})