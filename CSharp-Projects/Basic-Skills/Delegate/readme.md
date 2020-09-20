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

# Delegate :

- https://docs.microsoft.com/en-us/dotnet/csharp/delegates-overview
- https://www.youtube.com/watch?v=IzKCT34nVoE&list=PLp5ARg5A-DeA1WYsrlv_mK300GJ9hMGzE&index=8
- https://www.youtube.com/watch?v=txzL4A3UFYo&list=PLZX6sKChTg8GQxnABqxYGX2zLs4Hfa4Ca&index=21
- https://csharp-video-tutorials.blogspot.com/2012/06/part-36-c-tutorial-delegates.html
- https://www.youtube.com/watch?v=IzKCT34nVoE&list=PLp5ARg5A-DeA1WYsrlv_mK300GJ9hMGzE&index=8

---

- ![70% bg](del.png)

---

- ![70% bg](del2.png)

---

- ![70% bg](del3.png)

---

- ![70% bg](del4.png)

---

### Delegates are used to pass methods as arguments to other methods.

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

### Func vs. Action vs. predicate

- https://stackoverflow.com/questions/4317479/func-vs-action-vs-predicate
- The difference between Func and Action is simply whether you want the delegate to return a value (use Func) or not (use Action).
- Predicate is just a special cased Func<T, bool> really, introduced before all of the Func and most of the Action delegates came along.

---

### Event

- Safe : child class cannot use parent class Event, only can be used inside declared class
- CANNOT directly `.Invoke()` from outside
- CANNOT = null
- same concept as framework

---

### Event vs Delegate

- Delegate is a type, Event is an instance of Delegate
- https://www.youtube.com/watch?v=jQgwEsJISy0
- Listening to Events is Optional
- Return Values Require Delegates
- Events Have Private Invocation
- Event Listeners Often Have Longer Lifetimes
- Evaluate Carefully
- https://docs.microsoft.com/en-us/dotnet/csharp/distinguish-delegates-events

---

- ![](win.png)
