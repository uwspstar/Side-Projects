# threads
- https://docs.microsoft.com/en-us/dotnet/standard/threading/managed-threading-basics
- use of multi-threading might increase throughput along with the increased responsiveness.

### basic
- In current versions of Windows, each application runs in its own ```process```. 
- A process isolates an application from other applications by giving it its own ```virtual memory``` and by ensuring that different processes can’t influence each other. 
- Each ```process``` runs in its own ```thread```. 
- A thread is something like a ```virtualized CPU```. 
- Each thread is allowed by Windows to execute for a certain ```period``` time.
- After this ```period``` ends, the thread is ```paused``` and Windows switches to another thread. This is called ```context switching```.
- Windows has to make sure that the whole context of the thread is saved and restored on each switch.
- Although there are certain ```performance hits```, but this ```improves the responsiveness``` of the system and gives the illusion that one CPU can ```execute multiple tasks``` at a time.
### System.Threading
- This class enables you to create new treads, manage their priority, and get their status.
- Multiple threads might need to access a ```shared resource```. To keep the resource in a uncorrupted state and avoid race conditions, you must ```synchronize``` the thread access to it.
### Exceptions in Managed Threads
- There is no such thing as an unhandled exception on a thread pool thread. - When a task throws an exception that it does not handle, the runtime prints the exception stack trace to the console and then returns the thread to the thread pool.