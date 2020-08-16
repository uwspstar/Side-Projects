### init

- $ touch readme.md
- $ npm init -y
- $ touch .gitignore
- $ npm install mysql
- $ touch index.js

### troubleshoot
```
code: 'ER_NOT_SUPPORTED_AUTH_MODE',
  errno: 1251,
  sqlMessage: 'Client does not support authentication protocol requested by server; consider upgrading MySQL client',
  sqlState: '08004',
  fatal: true
```
- https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server
- solution :  execute following statement
```
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '12345678';
flush privileges;
``
### links
- https://www.w3schools.com/nodejs/nodejs_mysql.asp