const env = process.env.NODE_ENV;
// for production, do not use nodemon

let MYSQL_CONF = {};
let REDIS_CONF = {}

switch (env) {
    case 'production':
        MYSQL_CONF = {
            host: 'localhost',
            user: 'root',
            password: '12345678',
            port: '3306',
            database: 'myblog'
        }
        REDIS_CONF = {
            port: 6379,
            host: '127.0.0.1'
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
        REDIS_CONF = {
            port: 6379,
            host: '127.0.0.1'
        }
        break;
}

module.exports = {
    MYSQL_CONF,
    REDIS_CONF
}