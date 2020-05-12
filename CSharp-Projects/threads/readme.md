# threads
- In current versions of Windows, each application runs in its own ```process```. 
- A process isolates an application from other applications by giving it its own ```virtual memory``` and by ensuring that different processes can’t influence each other. 
- Each ```process``` runs in its own ```thread```. 
- A thread is something like a ```virtualized CPU```. 
- Each thread is allowed by Windows to execute for a certain ```period``` time.
- After this ```period``` ends, the thread is ```paused``` and Windows switches to another thread. This is called ```context switching```.
- Windows has to make sure that the whole context of the thread is saved and restored on each switch.
- Although there are certain ```performance hits```, but this ```improves the responsiveness``` of the system and gives the illusion that one CPU can ```execute multiple tasks``` at a time.