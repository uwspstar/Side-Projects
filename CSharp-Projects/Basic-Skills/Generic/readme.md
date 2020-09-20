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
- https://docs.microsoft.com/zh-cn/dotnet/csharp/programming-guide/generics/

---

### 泛型概述

- 使用泛型类型可以最大限度地重用代码、保护类型安全性以及提高性能。
- 泛型最常见的用途是创建集合类。
- .NET 类库在 System.Collections.Generic 命名空间中包含几个新的泛型集合类。 应尽可能使用这些类来代替某些类，如 System.Collections 命名空间中的 ArrayList。
- 可以创建自己的泛型接口 API、泛型类 CLASS、泛型方法 Method、泛型事件 Event 和 泛型委托 Delegate。
- 可以对泛型类进行约束 Where 以访问特定数据类型的方法。
- 在泛型数据类型中所用类型的信息可在运行时通过使用反射来获取。

---

### 占位符 <T>

- 此特定类的类型参数可以是编译器可识别的任何类型。
- 在泛型类型或方法定义中，类型参数是在其创建泛型类型的一个实例时，客户端指定的特定类型的占位符
- 若要使用 GenericList<T>，客户端代码必须通过指定尖括号内的类型参数来声明并实例化构造类型。
- https://docs.microsoft.com/zh-cn/dotnet/csharp/programming-guide/generics/generic-type-parameters

---

### 有关 CLR 如何执行此替换的详细信息

- 泛型类型或方法编译为 Microsoft 中间语言 (`MSIL`) 时，它包含将其标识为具有类型参数的元数据。
- 如何使用泛型类型的 MSIL 根据所提供的类型参数是值类型还是引用类型而有所不同。
- https://docs.microsoft.com/zh-cn/dotnet/csharp/programming-guide/generics/generics-in-the-run-time

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
