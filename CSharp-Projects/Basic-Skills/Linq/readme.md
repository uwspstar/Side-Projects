---
marp: true
theme: default
header: 'Linq'
footer: 'by Xing'
paginate: true
size: 16:9
---

<!--
_backgroundColor: white
_color: black
-->

# LINQ TO EVERYTHING

- 在 LINQ 查询中，始终会用到对象。 可以使用相同的基本编码模式来查询和转换 XML 文档、SQL 数据库、ADO.NET 数据集、.NET 集合中的数据以及 LINQ 提供程序可用的任何其他格式的数据。
- https://www.youtube.com/watch?v=z3PowDJKOSA&list=PL6n9fhu94yhWi8K02Eqxp3Xyh_OmQ0Rp6

---

### 查询操作的三个部分

所有 LINQ 查询操作都由以下三个不同的操作组成：

- 获取数据源 :  支持 IEnumerable<T> 或派生接口（如泛型 IQueryable<T>）的类型称为可查询类型 。
- 创建查询。
- 执行查询

---

```C#
class IntroToLINQ
{
    static void Main()
    {
        // The Three Parts of a LINQ Query:
        // 1. Data source.
        int[] numbers = new int[7] { 0, 1, 2, 3, 4, 5, 6 };

        // 2. Query creation.
        // numQuery is an IEnumerable<int>
        var numQuery =
            from num in numbers
            where (num % 2) == 0
            select num;

        // 3. Query execution.
        foreach (int num in numQuery)
        {
            Console.Write("{0,1} ", num);
        }
    }
}
```

---

### Standard Query Operators Overview (C#)

---

### Enabling a Data Source for LINQ Querying

- The data source might be a data structure, a Web service, a file system, or a database, to name some.
- https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/enabling-a-data-source-for-linq-querying1

---

### LINQ to Objects (C#)

---

### Write LINQ queries

- https://docs.microsoft.com/en-us/dotnet/csharp/linq/write-linq-queries

---

### LINQ to ADO.NET (Portal Page)

- https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/linq-to-adonet-portal-page
