---
marp: true
theme: default
header: 'Csharp'
footer: 'by Xing'
paginate: true
size: 16:9
---

<!--
_backgroundColor: white
_color: black
-->

# Delegate : Delegates are used to pass methods as arguments to other methods.

- it is a sealed class
- extends `system.MulticastDelegate`
- .ctor (constructor)d
- `Invoke()`
- `BeginInvoke()`
- `EndInvoke()`
- Delegates are used to `pass methods` ( such as static method, object method,etc) as arguments to other methods

---

### public delegate void ExampleDelegate

- used it as same as class
- `method.Invoke()` same as `method()`
- direct pass a function
- lower case `delegate` same as `class`
- example : `public delegate bool ThanDelegate(Student s);`

---

### Invoke() vs BeginInvoke()

- Delegate.Invoke: Executes synchronously, on the same thread.
- Delegate.BeginInvoke: Executes asynchronously, on a thread pool thread.
- Control.Invoke: Executes on the UI thread, but calling thread waits for completion before continuing.
- Control.BeginInvoke: Executes on the UI thread, and calling thread doesn't wait for completion.

---

### BeginInvoke()

- asynchronously
- `method.BeginInvoke(null, null);`
- asynchronously multi-threading base on Delegate BeginInvoke();

---

### EndInvoke()

- need pass the result as input
- `method.EndInvoke(result)`

---

### SafeInvoke

```C#
public static void SafeInvoke(Action act)
{
    try
    {
        act.Invoke();
    }
    catch (Exception ex)
    {
        Console.WriteLine(ex.Message);
    }

}
```

---

### SqlHelper

---

### LogHelper

---

### Delegate.Combine && Delegate.Remove

- Delegate.Combine: `+=` ; CANNOT use for for asynchronously
- Delegate.Remove: `-=` : `CANNOT` remove the method when it is belong to different obj, such as `new Student.study()`
### Delegate.Combine Handler
---
