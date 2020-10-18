const { Sequelize } = require('sequelize');
const seq = require('./seq');

// User model
const User = seq.define('user', {
    // id will be auto created, and auto increase
    // createdAt and updateAt also auto created
    userName: {
        type: Sequelize.STRING,  // varchar(255)
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nickName: {
        type: Sequelize.STRING,
        comment: 'this is nickname'
    }
})
// User model
const Blog = seq.define('blog', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    userId: { // can be auto created, not recommend
        type: Sequelize.INTEGER,
        allowNull: false
    }

})

// foreign key, allow can be auto created if we comment out this, such as: Blog.belongsTo(User);
// search user by blog
Blog.belongsTo(User, {
    // Blog.userId -> User.id
    foreignKey: 'userId'
})
// search blog by user
User.hasMany(Blog, {
    // Blog.userId -> User.id
    foreignKey: 'userId'
})

module.exports = {
    User,
    Blog
}