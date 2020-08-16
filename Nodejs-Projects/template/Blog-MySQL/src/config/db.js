const env = process.env.NODE_ENV;
// for production, do not use nodemon

let MYSQL_CONF = {};

switch (env) {
    case 'production':
        MYSQL_CONF = {
            host: 'localhost',
            user: 'root',
            password: '12345678',
            port: '3306',
            database: 'myblog'
        }
        break;

    default:
        MYSQL_CONF = {
            host: 'localhost',
            user: 'root',
            password: '12345678',
            port: '3306',
            database: 'myblog'
        }
        break;
}

module.exports = {
    MYSQL_CONF
}