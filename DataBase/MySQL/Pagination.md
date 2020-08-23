### MySQL Pagination

- https://www.w3schools.com/php/php_mysql_select_limit.asp

### MySQL Pagination with OFFSET and LIMIT

### LIMIT

- MySQL provides a `LIMIT` clause that is used to specify the number of records to return.

```
- Assume we wish to select all records from 1 - 30 , it will return the first 30 records.

"SELECT * FROM Orders LIMIT 30";

```

### OFFSET

- if we want to select records 16 - 25 (inclusive)? Mysql also provides a way to handle this: by using OFFSET.

```
- "return only 10 records, start on record 16 (OFFSET 15)":

"SELECT * FROM Orders LIMIT 10 OFFSET 15";
```

### short syntax

```
"SELECT * FROM Orders LIMIT 15, 10";
```


