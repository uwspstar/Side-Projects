# c# 70-483
- The Microsoft 70-483 exam focuses on a broad range of topics that you can use in your work as a C# developer. 
- https://www.amazon.com/Exam-Ref-70-483-Programming-C/dp/0735676828/

### Objective 1.1: Implement multithreading and asynchronous processing
- In current versions of Windows, each application runs in its own process. A process isolates an application from other applica- tions by giving it its own virtual memory and by ensuring that different processes can’t influ- ence each other. 
- A thread is something like a virtualized CPU.
- Each process runs in its own thread. 
- If an application crashes or hits an infinite loop, only the application’s process is affected.
- The ```Thread``` class can be found in the ```System.Threading namespace```
- The ```Thread.Join``` method is called on the main thread to let it wait until the other thread finishes.
- ```Thread.Sleep(0)``` ? It is used to signal to Windows that this thread is finished. In- stead of waiting for the whole time-slice of the thread to finish, it will immediately switch to another thread.