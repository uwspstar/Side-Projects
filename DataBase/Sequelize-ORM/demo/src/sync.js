const seq = require('./seq');
require('./model');

(async function conn() {
    try {
        await seq.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

/*
// Sync :  will clean data inside table, not trunk table, id increase
Executing (default): DROP TABLE IF EXISTS `users`;
Connection has been established successfully.
Executing (default): DROP TABLE IF EXISTS `users`;
Executing (default): CREATE TABLE IF NOT EXISTS `users` (`id` INTEGER NOT NULL auto_increment , `userName` VARCHAR(255) NOT NULL, `password` VARCHAR(255) NOT NULL, `nickName` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `users`
sync ok
*/
seq.sync({ force: true })
    .then(() => {
        console.log('sync ok')
        process.exit();
    })