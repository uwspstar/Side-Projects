### MSSQL Pagination

- https://www.sqlshack.com/pagination-in-sql-server/
- https://sqlperformance.com/2015/01/t-sql-queries/pagination-with-offset-fetch

### MSSQL Pagination Example

- https://www.sqlshack.com/pagination-in-sql-server/

```
DECLARE @PageNumber AS INT
DECLARE @RowsOfPage AS INT
SET @PageNumber=2
SET @RowsOfPage=4
SELECT FruitName,Price FROM SampleFruits
ORDER BY Price
OFFSET (@PageNumber-1)*@RowsOfPage ROWS
FETCH NEXT @RowsOfPage ROWS ONLY
```

### Dynamic Sorting with Pagination

- https://www.sqlshack.com/pagination-in-sql-server/
- use an ORDER BY clause with CASE conditions so that we obtain a query that can be sorted by the variables

```
DECLARE @PageNumber AS INT
DECLARE @RowsOfPage AS INT
DECLARE @SortingCol AS VARCHAR(100) ='FruitName'
DECLARE @SortType AS VARCHAR(100) = 'DESC'
SET @PageNumber=1
SET @RowsOfPage=4
SELECT FruitName,Price FROM SampleFruits
ORDER BY
CASE WHEN @SortingCol = 'Price' AND @SortType ='ASC' THEN Price END ,
CASE WHEN @SortingCol = 'Price' AND @SortType ='DESC' THEN Price END DESC,
CASE WHEN @SortingCol = 'FruitName' AND @SortType ='ASC' THEN FruitName END ,
CASE WHEN @SortingCol = 'FruitName' AND @SortType ='DESC' THEN FruitName END DESC
OFFSET (@PageNumber-1)*@RowsOfPage ROWS
FETCH NEXT @RowsOfPage ROWS ONLY
```

### Pagination in a Loop

- https://www.sqlshack.com/pagination-in-sql-server/

```
DECLARE @PageNumber AS INT
DECLARE @RowsOfPage AS INT
DECLARE @MaxTablePage  AS FLOAT
SET @PageNumber=1
SET @RowsOfPage=4
SELECT @MaxTablePage = COUNT(*) FROM SampleFruits
SET @MaxTablePage = CEILING(@MaxTablePage/@RowsOfPage)
WHILE @MaxTablePage >= @PageNumber
BEGIN
    SELECT FruitName,Price FROM SampleFruits
    ORDER BY Price
    OFFSET (@PageNumber-1)*@RowsOfPage ROWS
    FETCH NEXT @RowsOfPage ROWS ONLY
    SET @PageNumber = @PageNumber + 1
END
```

### MSSQL Pagination with OFFSET and FETCH

- When the `OFFSET` and `FETCH` arguments are used in with the ORDER BY clause in a SELECT statement, it will be a pagination solution for SQL Server.

### OFFSET

- `OFFSET` argument specifies how many rows will be skipped from the result set of the query.

```
SELECT FruitName, Price
FROM SampleFruits
ORDER BY Price
OFFSET 3 ROWS
```

- `OFFSET` value as `0`, no rows will be skipped from the result set

```
SELECT FruitName,Price FROM SampleFruits
ORDER BY Price
OFFSET 0 ROWS
```

- `OFFSET` is greater than the total row number of the result set, no rows will be displayed on the result.

```
SELECT FruitName,Price FROM SampleFruits
ORDER BY Price
OFFSET 200 ROWS
```

### FETCH

- `FETCH` argument specifies how many rows will be displayed in the result
- `FETCH` argument `MUST` be used with the `OFFSET` argument.

```

SELECT FruitName, Price
FROM SampleFruits
ORDER BY Price
OFFSET 5 ROWS FETCH NEXT 6 ROWS ONLY
```

### TOP vs OFFSET-FETCH

- The TOP CLAUSE limits the number of rows that returned from the SELECT statement. When we use the TOP clause without ORDER BY, it can be returned to arbitrary results.

```
SELECT TOP 7 FruitName, Price
FROM SampleFruits
```

- to implement an undefined order OFFSET-FETCH

```
SELECT  FruitName ,Price FROM SampleFruits
ORDER BY (SELECT NULL)
OFFSET 0 ROWS FETCH NEXT 7 ROWS ONLY
```
