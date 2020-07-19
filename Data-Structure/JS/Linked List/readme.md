# Linked Lists
- A data structure that contains a head, tail and length property.
- Linked Lists consist of nodes, and each node has a value and a pointer to another node or null

### Lists vs Arrays
- list
    - Do not have indexes!
    - Connected via nodes with a next pointer
    - Random access is not allowed
- array
    - indexed in order!
    - Insertion and deletion can be expensive
    - Can quickly be accessed at a specific index

### Singly Linked Lists
- https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/8344202#overview
- https://cs.slides.com/colt_steele/singly-linked-lists#/
- https://visualgo.net/en/list?slide=1
- https://adrianmejia.com/data-structures-time-complexity-for-beginners-arrays-hashmaps-linked-lists-stacks-queues-tutorial/
- https://www.geeksforgeeks.org/circular-linked-list/

### There are 4 basic operations that we can do in every Linked List:

- addLast / push : appends an element to the end of the list (tail)
- removeLast / pop : deletes element to the end of the list
- addFirst / unshift : Adds an element to the beginning of the list (head)
- removeFirst / shift : Removes an element from the start of the list (head/root)

### Circular Linked list
- https://www.geeksforgeeks.org/circular-linked-list/
- Circular lists are useful in applications to repeatedly go around the list.  It is convenient for the operating system to use a circular list so that when it reaches the end of the list it can cycle around to the front of the list.
- For example, when multiple applications are running on a PC, it is common for the operating system to put the running applications on a list and then to cycle through them, giving each of them a slice of time to execute, and then making them wait while the CPU is given to another application.

### fast and slow strategy
- https://www.udemy.com/course/coding-interview-bootcamp-algorithms-and-data-structure/learn/lecture/8547208#overview