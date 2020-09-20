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

# 协变和逆变 (C#)

- 在 C# 中，协变和逆变能够实现数组类型、委托类型和泛型类型参数的隐式引用转换。 协变保留分配兼容性，逆变则与之相反
- https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/covariance-contravariance/

---

```C#
interface ICovariant<out R>
{
    R GetSomething();
    // The following statement generates a compiler error.
    // void SetSomething(R sampleArg);

}

interface ICovariant<out R>
{
    // The following statement generates a compiler error
    // because you can use only contravariant or invariant types
    // in generic constraints.
    // void DoSomething<T>() where T : R;
}
```
