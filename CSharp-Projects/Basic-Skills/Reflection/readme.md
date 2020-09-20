---
marp: true
theme: default
header: 'Reflection'
footer: 'by Xing'
paginate: true
size: 16:9
---

<!--
_backgroundColor: white
_color: black
-->

# Reflection

- 程序集包含模块、模块包含类型，而类型包含成员。
- 反射提供封装程序集、模块和类型的对象。
- https://docs.microsoft.com/zh-cn/dotnet/csharp/programming-guide/concepts/reflection
- https://www.youtube.com/watch?v=INeS_iIAiQ8&list=PLZ-AgxQOHWViL6IwVGLcP2x4oGkHInWyy&index=4
- ILSpy

---

![](r1.png)

---

- DL-IL-Metadata-Reflection
- second compile for multiple platform
- protected 和 internal 在 IL 中没有任何意义，且不会用于反射 API 中

---

- GetType()（被 Object 基类的所有类型继承）以获取变量类型

```C#
using System;
using System.Reflection;
...
int i = 42;
Type type = i.GetType();
Console.WriteLine(type);
// Using Reflection to get information of an Assembly:
Assembly info = typeof(int).Assembly;
Console.WriteLine(info);
// System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e。
```

---

### .NET 中的反射

- `System.Reflection` 命名空间中的类与 `System.Type` 使你能够获取有关加载的程序集和其中定义的类型的信息，如类、接口和值类型（即结构和枚举）.
- https://docs.microsoft.com/zh-cn/dotnet/framework/reflection-and-codedom/reflection

---

### 查看类型信息

- `System.Type` 类是反射的中心。 当反射提出请求时，公共语言运行时为已加载的类型创建 Type 。 可使用 Type 对象的方法、字段、属性和嵌套类来查找该类型的任何信息。
- https://docs.microsoft.com/zh-cn/dotnet/framework/reflection-and-codedom/viewing-type-information
