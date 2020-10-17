---
marp: true
theme: default
header: 'MySQL'
footer: 'study note by Xing, source https://www.npmjs.com/package/mysql2'
paginate: true
size: 16:9
---

### MySQL

### MySQL2

- https://www.npmjs.com/package/mysql2
- `npm install --save mysql2`

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

### create a table

```
CREATE TABLE `TestDB`.`SampleFruits` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `FruitName` VARCHAR(50) NOT NULL,
  `Price` DECIMAL(2) NOT NULL,
  PRIMARY KEY (`id`));

```

### insert

```
INSERT INTO SampleFruits (FruitName, Price) values('Apple',20.00);
```

### select

```
SELECT * FROM SampleFruits
```

### update

```
SET SQL_SAFE_UPDATE = 0
```

### install mySql

- `$ npm install mysql`
