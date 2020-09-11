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

# c# 70-483

- The Microsoft 70-483 exam focuses on a broad range of topics that you can use in your work as a C# developer.
- https://www.amazon.com/Exam-Ref-70-483-Programming-C/dp/0735676828/

---

### Objective 1.1: Implement multi threading and asynchronous processing

- In current versions of Windows, each application runs in its own process.
- A process isolates an application from other applications by giving it its own virtual memory and by ensuring that different processes can’t influence each other.
- A thread is something like a virtualized CPU.
- Each process runs in its own thread.
- If an application crashes or hits an infinite loop, only the application’s process is affected.

---

### Thread

- The `Thread` class can be found in the `System.Threading namespace`
- The `Thread.Join` method is called on the main thread to let it wait until the other thread finishes.
- `Thread.Sleep(0)` ? It is used to signal to Windows that this thread is finished. In- stead of waiting for the whole time-slice of the thread to finish, it will immediately switch to another thread.
- Both your process and your thread have a priority
- A higher-priority thread should be used only when it’s absolutely necessary

---

### difference between fore- ground and background threads.

- Foreground threads can be used to keep an application alive.
- Only when all foreground threads end does the common language runtime (CLR) shut down your application. Background threads are then terminated.
- If you run this application with the IsBackground property set to true, the application exits immediately. If you set it to false (creating a foreground thread), the application prints the ThreadProc message ten times.
- A better way to `stop a thread` is by using a shared variable that both your target and your calling thread can access.

---

```
public static void Main()
{
    Thread t = new Thread(new ThreadStart(ThreadMethod)); t.IsBackground = true;
    t.Start();
}

public static void ThreadMethod()
{
    for (int i = 0; i < 10; i++) {
    Console.WriteLine(“ThreadProc: {0}”, i);
    Thread.Sleep(1000); }
}
```

---

### Thread pools

- A thread pool is created to reuse those threads, similar to the way a database connection pooling works
