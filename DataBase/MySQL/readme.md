### MySQL

### mac install

- https://macresearch.org/fix-cant-be-opened-because-apple-cannot-check-it-for-malicious-software/

### mac root user issue

```
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '12345678';
flush privileges;
```

```
System Preferences -> Security & Privacy -> click “Open Anyway”.
```

### update

```
SET SQL_SAFE_UPDATE = 0
```

### install mySql

- `$ npm install mysql`

### Pagination in SQL Server

- https://www.sqlshack.com/pagination-in-sql-server/
- https://sqlperformance.com/2015/01/t-sql-queries/pagination-with-offset-fetch