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

### MSSQL Pagination

- https://www.sqlshack.com/pagination-in-sql-server/
- https://sqlperformance.com/2015/01/t-sql-queries/pagination-with-offset-fetch

### MSSQL Pagination with OFFSET and FETCH

- When the `OFFSET` and `FETCH` arguments are used in with the ORDER BY clause in a SELECT statement, it will be a pagination solution for SQL Server.

### OFFSET

- ```OFFSET``` argument specifies how many rows will be skipped from the result set of the query.
- ```OFFSET``` value as ```0```, no rows will be skipped from the result set
