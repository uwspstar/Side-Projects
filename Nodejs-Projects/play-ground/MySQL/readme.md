### init

- \$ touch readme.md
- \$ npm init -y
- \$ touch .gitignore
- \$ npm install mysql
- \$ touch index.js

### index.js

- for `update`, we can check `affectedRows`

```
OkPacket {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 0,
  serverStatus: 2,
  warningCount: 0,
  message: '(Rows matched: 1  Changed: 1  Warnings: 0',
  protocol41: true,
  changedRows: 1
}
```

- for `insert`, check `insertId` and `affectedRows`

```
OkPacket {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 4,
  serverStatus: 2,
  warningCount: 0,
  message: '',
  protocol41: true,
  changedRows: 0
}
```

### troubleshoot

```
code: 'ER_NOT_SUPPORTED_AUTH_MODE',
  errno: 1251,
  sqlMessage: 'Client does not support authentication protocol requested by server; consider upgrading MySQL client',
  sqlState: '08004',
  fatal: true
```

- https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server
- solution : execute following statement

```
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '12345678';
flush privileges;
```

### Cannot start Mysql on Mac

```
To fix this I had to reset the owner of the mysql data dir, it was changed back to my userId after the update.

cd /usr/local/mysql
sudo chown -R _mysql data/
```

### links

- https://www.w3schools.com/nodejs/nodejs_mysql.asp
