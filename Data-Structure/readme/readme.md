# Data Structures Easy to Advanced - Full Tutorial Course
- https://www.youtube.com/watch?v=RBSGKlAvoiM&feature=em-uploademail
- https://github.com/williamfiset/Algorithms

- Abstract Data Type (ADT)
```
An abstract data type is an abstraction of a data structure 
which provides only the interface to which a data structure mush adhere to.  
the interface does not give any specific details about 
how something should be implemented or in what programming language
```
- List ( Dynamic Array, linked List)
- Queue ( Linked List based Queue, array based Queue, Stack based Queue)
- Map  (Tree Map, Hash Map / Hash Table)

### Complexity Analysis
- time
- space

### Big-O Notation
```
Constant Time: O(1)
Logarithmic Time: O(log(n))
Liner Time: O(n)
Quadric Time: O(n^2)
Cubic Time: O(n^3)
Exponential Time: O(b^n), b>1
Factorial Time: O(n!)
```
- O(n + c) = O(n)
- O(cn) = O(n) , c >0
- f(n) = 7log(n)^3 + 15n^2+ 2n^3 + 8 // ```O(f(n)) = O(n^3)```
### When and where is a static Array Used ?
    - 1) storing and accessing sequential data
    - 2) Temporarily storing objects
    - 3) Used by IO routines as buffers
    - 4) Lookup tables and inverse lookup tables
    - 5) can be used to return multiple values from a function
    - 6) Used in dynamic programming to cache answers to subproblems
### when you use linked lists?  
    - used in many List, Queue, Stack implementations
    - Great for creating circular lists
    - Can easily model real world objects such as trains.
    - used in separate chining which is persnet certain hashtable implementations to deal with hashing collisions.
    - ofter used in the implementation of adjacency lists for graphs
### when you use stack 
    - used by undo mechanisms in text editors
    - used in comiler syntax checking for matching brackets and braces
    - can be used to model a pile of books or plates.
    - used behind the scenes to support recursion by keep track of previous function calls.
    - can be used to d a Depth First Search (DFS) on a graph