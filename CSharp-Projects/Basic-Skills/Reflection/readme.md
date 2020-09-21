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
- MVC URL
---

- 使用 `Assembly` 来定义和加载程序集，加载程序集清单中列出的模块，以及在此程序集中定位一个类型并创建一个它的实例。
- 使用 `Module` 发现信息，如包含模块的程序集和模块中的类。 还可以获取所有全局方法或模块上定义的其它特定的非全局方法。
- 使用 `ConstructorInfo` 发现信息，如名称、参数、访问修饰符（如 `public` 或 `private`）和构造函数的实现详细信息（如 `abstract` 或 `virtual`）。 使用 `Type` 的 `GetConstructors` 或 `GetConstructor` 方法来调用特定构造函数。
- 使用 `MethodInfo` 发现信息，如名称、返回类型、参数、访问修饰符（如 `public` 或 `private`）和方法的实现详细信息（如 `abstract` 或 `virtual`）。 使用 Type 的 `GetMethods` 或 `GetMethod` 方法来调用特定方法。

---

- 使用 `FieldInfo` 发现信息，如名称、访问修饰符（如 `public` 或 `private`）和一个字段的实现详细信息 （如 `static`）；并获取或设置字段值。
- 使用 `EventInfo` 发现信息（如名称、事件处理程序的数据类型、自定义特性、声明类型以及事件的反射的类型），并添加或删除事件处理程序。
- 使用 `PropertyInfo` 发现信息（如名称、数据类型、声明类型，反射的类型和属性的只读或可写状态），并获取或设置属性值。
- 使用 `ParameterInfo` 发现信息，如参数的名称、数据类型、参数是输入参数还是输出参数以及参数在方法签名中的位置。
- 使用 `CustomAttributeData` 在于应用程序域的仅反射上下文中工作时发现有关自定义特性的信息。 `CustomAttributeData` 使你能够检查特性，而无需创建它们的实例。

---

### 查看类型信息

- `System.Type` 类是反射的中心。 当反射提出请求时，公共语言运行时为已加载的类型创建 Type 。 可使用 Type 对象的方法、字段、属性和嵌套类来查找该类型的任何信息。
- https://docs.microsoft.com/zh-cn/dotnet/framework/reflection-and-codedom/viewing-type-information

### Singleton

- use reflection can call private constructor to create an instance
