# Data Structures in JavaScript
- https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/
- https://adrianmejia.com/most-popular-algorithms-time-complexity-every-programmer-should-know-free-online-tutorial-course/

### HOW DO YOU IMPROVE?
- Devise a plan for solving problems
- Master common problem solving patterns

### SOME PATTERNS...
- Frequency Counter
- Multiple Pointers
- Sliding Window
- Divide and Conquer
- Dynamic Programming
- Greedy Algorithms
- Backtracking

### TOP 10 interview Algorithms
- Depth First Search. -stack
- Breadth First Search. -queue
- Matching Program
- Hash Tables
- Variable/Pointer multiple pointers , one pointer chase another pointer
- reversing linklist (3 different pointers
- Sorting experts /quick sort, merge sort, bubble sort, insert sort (nlogn)
- Recursion
- custom data structure
- Binary Search , sort list, find the bug commit

### Data Structures in JavaScript: Arrays, HashMaps, and Lists 
- https://adrianmejia.com/data-structures-time-complexity-for-beginners-arrays-hashmaps-linked-lists-stacks-queues-tutorial/

### Objects ,  hashmap vs set

```
Objects
JavaScript objects can be thought of as simple collections of name-value pairs. As such, they are similar to:

Dictionaries in Python.
Hashes in Perl and Ruby.
Hash tables in C and C++.
HashMaps in Java.
Associative arrays in PHP
```
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

```
// Conditional (ternary) operator
hashMap[key] ? hashMap[key]++ : hashMap[key] = 1;
```
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

```
remove duplicate elements from the array
// Use to remove duplicate elements from the array 

const numbers = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5]

console.log([...new Set(numbers)]) 

// [2, 3, 4, 5, 6, 7, 32]
```
```
//case sensitive & duplicate omission
new Set("Firefox")  // Set(7) [ "F", "i", "r", "e", "f", "o", "x" ]
new Set("firefox")  // Set(6) [ "f", "i", "r", "e", "o", "x" ]
```

### Dynamic Programming I: Fibonacci, Shortest Paths 
- https://www.youtube.com/watch?v=OQ5jsbhAv_M&list=RDCMUCEBb1b_L6zDS3xTUrIALZOw&start_radio=1&t=12

### Array 
- In JavaScript, it would automatically increase the size of the array when needed.
- JavaScript Array class is a global object that is used in the construction of arrays; which are high-level, ```list-like``` objects.

### recursion
- https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/8344106#overview
- JSON.parse / JSON.stringify
- document.getElementById and DOM traversal algorithms
- Object traversal
- Two essential parts of a recursive function!
    - Base Case
    - Different Input
- Pure Recursion Tips 
- For arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you do not mutate them
- Remember that strings are immutable so you will need to use methods like slice, substr, or substring to make copies of strings
- To make copies of objects use Object.assign, or the spread operator

### Searching
- arrays in JavaScript:
    - indexOf
    - includes
    - find
    - findIndex
- Linear Search
- Binary search is a much faster form of search
- Binary search only works on sorted arrays!
- Divide and Conquer
- Binary Search Pseudocode
```
This function accepts a sorted array and a value
Create a left pointer at the start of the array, and a right pointer at the end of the array
While the left pointer comes before the right pointer:
    Create a pointer in the middle
    If you find the value you want, return the index
    If the value is too small, move the left pointer up
    If the value is too large, move the right pointer down
If you never find the value, return -1
```
### sort 1
- bubble sort
- selection sort
- insertion sort
- Difference Between Insertion Sort and Selection Sort https://pediaa.com/what-is-the-difference-between-insertion-sort-and-selection-sort/

- The built-in sort method accepts an optional comparator function
```
function numberCompare(num1, num2) {
  return num1 - num2;
}

[ 6, 4, 15, 10 ].sort(numberCompare);
// [ 4, 6, 10, 15 ]
```
- Before we sort, we must swap!
```
// ES2015
const swap = (arr, idx1, idx2) => {
  [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]];
}
```
```
Algorithm	Time Complexity (Best)	Time Complexity (Average)	Time Complexity (Worst)	Space Complexity
Bubble Sort	O(n)	O(n^2 )	O(n^2)	O(1)
Insertion Sort	O(n)	O(n^2)	O(n^2)	O(1)
Selection Sort	O(n^2)	O(n^2)	O(n^2)	O(1)
```
### Array
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

### sort 2
- merge sort
- quick sort
- radix sort
```
FASTER SORTS
There is a family of sorting algorithms that can improve time complexity from O(n^2  ) to O(n log n)
```
### searching
- binary serarch (sorted arr, O(log n))
- ```git bisect``` Use binary search to find the commit that introduced a bug

### Differences between HashMap and Array

- Search on an array is O(n) while on a HashMap is O(1)
- Arrays can have duplicate values, while HashMap cannot have duplicated keys (but they can have duplicate values.)
- The array has a key (index) that is always a number from 0 to max value, while in a HashMap you have control of the key and it can be whatever you want: number, string, or symbol.

### Others
- split array in half ```const half = parseInt(array.length / 2);```
- HashMap implemented with an array
- https://adrianmejia.com/data-structures-time-complexity-for-beginners-arrays-hashmaps-linked-lists-stacks-queues-tutorial/#HashMap-operations-time-complexity

### others
- reverse() only for array 
```var array = str.split('');```
```var str = array.join('')```
- Because even though the ```if-block``` is not executed, the expression ```var x``` is hoisted.