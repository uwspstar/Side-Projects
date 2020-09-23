---
marp: true
theme: default
header: 'Csharp Vscode'
footer: 'by Xing'
paginate: true
size: 16:9
---

# 泛型类型

- 通过使用泛型类型参数 T，可以编写其他客户端代码能够使用的单个类，而不会产生运行时转换或装箱操作的成本或风险
- 泛型类和泛型方法兼具
  - 可重用性
  - 类型安全性
  - 效率
- 不使用允许键和值为任意类型的 Hashtable 类，而使用 `Dictionary<TKey,TValue>` 泛型类并指定允许的密钥类型和允许的值的类型。
- https://docs.microsoft.com/zh-cn/dotnet/csharp/programming-guide/generics/
- https://www.youtube.com/watch?v=o0H0g52MbpU&t=2342s

---

### 泛型概述

- 使用泛型类型可以最大限度地重用代码、保护类型安全性以及提高性能。
- 泛型最常见的用途是创建集合类。
- .NET 类库在 `System.Collections.Generic` 命名空间中包含几个新的泛型集合类。 应尽可能使用这些类来代替某些类，如 `System.Collections` 命名空间中的 `ArrayList`。
- 可以创建自己的泛型接口 `API`、泛型类 `CLASS`、泛型方法 `Method`、泛型事件 `Event` 和 泛型委托 `Delegate`。
- 可以对泛型类进行`约束` `Where` 以访问特定数据类型的方法。
- 在泛型数据类型中所用类型的信息可在运行时通过使用反射来获取。

---

### 占位符 <T>

- 此特定类的类型参数可以是编译器可识别的任何类型。
- 在泛型类型或方法定义中，类型参数是在其创建泛型类型的一个实例时，客户端指定的特定类型的占位符
- 若要使用 `GenericList<T>`，客户端代码必须通过指定尖括号内的类型参数来声明并实例化构造类型。
- https://docs.microsoft.com/zh-cn/dotnet/csharp/programming-guide/generics/generic-type-parameters

---

### 有关 CLR 如何执行此替换的详细信息

- 泛型类型或方法编译为 Microsoft 中间语言 (`MSIL`) 时，它包含将其标识为具有类型参数的元数据。
- 如何使用泛型类型的 MSIL 根据所提供的类型参数是值类型还是引用类型而有所不同。
- https://docs.microsoft.com/zh-cn/dotnet/csharp/programming-guide/generics/generics-in-the-run-time

---

### 装箱和取消装箱

- `装箱`是将值类型转换为 `object` 类型或由此值类型实现的任何接口类型的过程。 常见语言运行时 (CLR) 对值类型进行装箱时，会将值包装在 `System.Object` 实例中并将其存储在托管堆中。
- `取消装箱`将从对象中提取值类型。
- 装箱是隐式的；取消装箱是显式的。
- 装箱和取消装箱的概念是类型系统 C# 统一视图的基础，其中任一类型的值都被视为一个对象。
- https://docs.microsoft.com/zh-cn/dotnet/csharp/programming-guide/types/boxing-and-unboxing

---

### System.Collections.Generic

- 许多泛型集合类型均为非泛型类型的直接模拟。
- `Dictionary<TKey,TValue>` 是 `Hashtable` 的泛型版本；它使用枚举的泛型结构 `KeyValuePair<TKey,TValue>` 而不是 `DictionaryEntry`。
- `List<T>` 是 `ArrayList` 的泛型版本。 存在响应非泛型版本的泛型 `Queue<T>` 和 `Stack<T>` 类。
- 存在 `SortedList<TKey,TValue>` 的泛型和非泛型版本。 这两个版本均为字典和列表的混合.
- `SortedDictionary<TKey,TValue>` 泛型类是一个纯字典，并且没有任何非泛型对应项。
- `LinkedList<T>` 泛型类是真正的链接列表。 它没有任何非泛型对应项。

---

### 集合功能

- `ICollection<T>` 泛型接口是泛型集合类型的基本接口。 它提供添加、删除、复制和枚举元素的基本功能.
- `ICollection<T>` 继承自泛型 `IEnumerable<T>` 和非泛型 `IEnumerable`。
- `IList<T>` 泛型接口使用索引检索的方法扩展 `ICollection<T>` 泛型接口。
- `IDictionary<TKey,TValue>` 泛型接口使用键控检索的方法扩展 `ICollection<T>` 泛型接口。
- .NET Framework 基类库中的泛型字典类型还实现非泛型 `IDictionary` 接口。
- `IEnumerable<T>` 泛型接口提供泛型枚举器结构。 泛型枚举器实现的 `IEnumerator<T>` 泛型接口继承自非泛型
  `IEnumerator` 接口；`MoveNext` 和 `Reset` 成员（不依赖于类型参数 T）仅出现在非泛型接口中。
- 这意味着非泛型接口的任何使用者还可以使用泛型接口。

---

### 类型参数的约束 七种类型的约束 (NOT sealed)

- A struct is sealed because it is a value type and all value types are sealed.
- `where T : struct`
- `where T : class`
- `where T : new()`
- `where T : <interface name>`
- `where T : unmanaged`

```C#
class EmployeeList<T> where T : Employee, IEmployee, System.IComparable<T>, new()
{...}
```

- https://docs.microsoft.com/zh-cn/dotnet/csharp/programming-guide/generics/constraints-on-type-parameters

---

### 约束多个参数

```C#
class Base { }
class Test<T, U>
    where U : struct
    where T : Base, new()
{ }
```

---

### Generic (.NET Framework 2.0)

- `System.Collections.Generic`
- Compiler + JIT support
- .exe .dll through JIT to be machine code
- Generic type start with VS compile, to .exe or .dll (`compile time`), then, under CLR, JIT convert Generic type inside .exe or .dll to be real type (`run time`)
- `1 means 1 position, such as List<>
- `2 means 2 positions, such as Dictionary<,>

---

### box vs unbox

- `int` in stack, data inside stack will be released after used
- `string` data in heap, but location is in stack.
- `object` data in heap, but location is in stack.
- data in heap for share, will be collected later
- box : int to Object, it copy date from stack to heap
- unbox : Object to int, it copy date from heap to stack

---

### Generic fast than Object

- before Generic, ms using Object (.NET Framework 1.0), slow
- when use Object, the box and unbox will be used
- delay declare, per compile
- delay anything which we can delay, such as lazy loading

### Generic

- Generic Method
- Generic Class
- Generic Interface
- Generic Delegate

---

###
