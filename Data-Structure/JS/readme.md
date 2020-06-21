# Data Structures in JavaScript
- https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/
- https://adrianmejia.com/most-popular-algorithms-time-complexity-every-programmer-should-know-free-online-tutorial-course/

### Standard built-in objects
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

### SOME PATTERNS...
- Frequency Counter
- Multiple Pointers
- Sliding Window
- Divide and Conquer
- Dynamic Programming
- Greedy Algorithms
- Backtracking

### Sliding Window
- https://medium.com/outco/how-to-solve-sliding-window-problems-28d67601a66
- 2 pointers, one indicating the index corresponding beginning of the window, and one indicating the end of the window.
- usually want to keep track of the previous best solution you’ve found if any, and some other current information about the window that takes up O(1) space

### Frequency Counter

### BigO
- indexOf is O(n)

### Data Type
- - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

### Six Data Types that are primitives
- undefined : typeof instance === "undefined"
- Boolean : typeof instance === "boolean"
- Number : typeof instance === "number"
- String : typeof instance === "string"
- BigInt : typeof instance === "bigint"
- Symbol : typeof instance === "symbol"
- null : typeof instance === "object".
- Object : typeof instance === "object".

```
data structures: new Object, new Array, new Map, new Set, new WeakMap, new WeakSet, new Date
```
- Function non data structure, though it also answers for typeof operator: typeof instance === "function".

### data structures:
- new Object, 
- new Array, 
- new Map, 
- new Set, 
- new WeakMap, 
- new WeakSet, 
- new Date

### new Map()
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
- Map.prototype.size
- Map.prototype.get(key)
- Map.prototype.has(key)
- Map.prototype.set(key, value)
- Map.prototype.keys()
- Map.prototype.values()
- Map.prototype.forEach(callbackFn[, thisArg])
- Use Array.from() // transform a map into a 2D key-value Array.from(myMap)
- Array.from(myMap.keys())

### new Set()
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
- Set.prototype.size
- Set.prototype.add(value)
- Set.prototype.forEach()
- Set.prototype.has()
- Set.prototype.keys() // same as the values() method.
- Set.prototype.values() // ame as the keys() method.
- let myArr = Array.from(mySet) // convert Set object to an Array object, with Array.from
- converting between Set and Array
```
mySet2 = new Set([1, 2, 3, 4])
mySet2.size    // 4
[...mySet2]    // [1, 2, 3, 4]
```

### Objects vs. Maps
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
- When to Use Map instead of Plain JavaScript Object https://dmitripavlutin.com/maps-vs-plain-objects-javascript/


### Keyed collections: Maps, Sets, WeakMaps, WeakSets
- The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

### HOW DO YOU IMPROVE?
- Devise a plan for solving problems
- Master common problem solving patterns

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
- using new Nap() instead of using {}

### linear data structures: Arrays, Lists, Sets, Stacks, and Queues.

### Objects ,  HashMap vs Set
- using ```const map = new Map();``` instead of using ```const map = {};```
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
- In arrays, the data is referenced using a numeric index (relatively to the position).
- However, HashMaps uses labels that could be a string, number, object or anything.
- Internally, the HashMap uses an Array, and it maps the labels to array indexes using a ```hash function```.
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

- The most common implementation of Maps is using an array and hash function.
- use the ```Map``` rather than regular ```Object```, since the ```Map’s key``` could be ```anything``` while on ```Object’s key``` can only be ```string``` or ```number```. Also, Maps keeps the order of insertion.

##### HashMap
- Conditional (ternary) operator
```
hashMap[key] ? hashMap[key]++ : hashMap[key] = 1;
```
- using ```const map = new Map();``` instead of using ```const map = {};```

### Map
- const map = new Map()
```
for (let [key, value] of map) {
  console.log(`${key} = ${value}`);
}
```
- const plainObjMap = {}
```
for (let key of Object.keys(plainObjMap)) {
  const value = plainObjMap[key];
  console.log(`${key} = ${value}`);
}
```
##### Set
- remove duplicate elements from the array
- Set (array without duplicates)
```
// Use to remove duplicate elements from the array 
const numbers = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5]

console.log([...new Set(numbers)]) // [2, 3, 4, 5, 6, 7, 32]
```
- case sensitive & duplicate omission
```
new Set("Firefox")  // Set(7) [ "F", "i", "r", "e", "f", "o", "x" ]
new Set("firefox")  // Set(6) [ "f", "i", "r", "e", "o", "x" ]
```
### HashMap vs. Array
- the main difference is that the Array’s index doesn’t have any relationship with the data.
- Search on an array is O(n) while on a HashMap is O(1)
- Arrays can have duplicate values 
- HashMap cannot have duplicated keys (but they can have duplicate values.)
- The array has a key (index) that is ```always a number``` from 0 to max value
- In a HashMap you have control of the key and it can be whatever you want: number, string, or symbol.
- The primary purpose of a HashMap is to reduce the search/access time of an Array from O(n) to O(1).

### Hash Function
- Collisions in HashMaps are unavoidable when using an array-like underlying data structure.
###### Rehash

### Array 
- Arrays ```cannot``` use strings as element indexes (as in an associative array) but ```must use integers```.
- In JavaScript, it would automatically increase the size of the array when needed.
- JavaScript Array class is a global object that is used in the construction of arrays; which are high-level, ```list-like``` objects.
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
```
Function	  Runtime	Description
array.push	  O(1)	Insert element to the end of the array
array.pop 	  O(1)	Remove element to the end of the array
array.shift	  O(n)	Remove element to the beginning of the array
array.unshift	O(n)	Insert element(s) to the beginning of the array
array.slice	  O(n)	Returns a copy of the array from beginning to end.
array.splice	O(n)	Changes (add/remove) the array
```
##### forEach
- The ```forEach()``` method executes a provided function once for each array element.
- ```forEach()``` executes the callback function once for each array element; unlike map() or reduce() it always returns the value undefined and is ```not chainable```
- ```forEach() does not mutate``` the array on which it is called
- There is no way to stop or break a forEach() loop other than by throwing an exception. If you need such behavior, the forEach() method is the wrong tool.
- forEach expects a synchronous function
- In order to display the content of an array in the console, you can use ```console.table()```, which prints a formatted version of the array.
- Since the thisArg parameter (this) is provided to forEach(), it is passed to callback each time it's invoked. The callback uses it as its this value.
- If passing the callback function uses an arrow function expression, the thisArg parameter can be omitted, since all arrow functions lexically bind the this value.
- forEach() does not make a copy of the array before iterating.
### Polyfill
##### Array.from()
- The Array.from() method ```creates a new, shallow-copied Array``` instance from an array-like or iterable object.
```
console.log(Array.from('foo')); // expected output: Array ["f", "o", "o"]
console.log(Array.from([1, 2, 3], x => x + x)); // expected output: Array [2, 4, 6]
```
- Array.from() lets you create Arrays from: ```array-like objects``` (objects with a length property and indexed elements); or iterable objects (objects such as Map and Set)



### String
- str.charCodeAt(char)
```
for (let index = 0; index < stringKey.length; index++) {
    const charCode = stringKey.charCodeAt(index);
    hashValue += charCode;
  }
```
### Linked Lists
- Node
##### Node
```
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
```
```
class LinkedList {
  constructor() {
    this.head = null; // first/head/root element
    this.size = 0; // total number of elements in the list
  }
}
```
### Dynamic Programming I: Fibonacci, Shortest Paths 
- https://www.youtube.com/watch?v=OQ5jsbhAv_M&list=RDCMUCEBb1b_L6zDS3xTUrIALZOw&start_radio=1&t=12

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

### sort 2
- merge sort
- quick sort
- radix sort
```
FASTER SORTS
There is a family of sorting algorithms that can improve time complexity from O(n^2  ) to O(n log n)
```
### searching
- binary search (sorted arr, O(log n))
- ```git bisect``` Use binary search to find the commit that introduced a bug

### Differences between HashMap and Array

- Search on an array is O(n) while on a HashMap is O(1)
- Arrays can have duplicate values, while HashMap cannot have duplicated keys (but they can have duplicate values.)
- The array has a key (index) that is always a number from 0 to max value, while in a HashMap you have control of the key and it can be whatever you want: number, string, or symbol.

### ES6
- https://adrianmejia.com/overview-of-javascript-es6-features-a-k-a-ecmascript-6-and-es2015/
- var vs. let vs. const
- Swapping values
```
let a = 1;
let b = 2;


[a, b] = [b, a];

console.log(a, b); // 2 1
```
### Others
- split array in half ```const half = parseInt(array.length / 2);```
- HashMap implemented with an array
- https://adrianmejia.com/data-structures-time-complexity-for-beginners-arrays-hashmaps-linked-lists-stacks-queues-tutorial/#HashMap-operations-time-complexity

### others
- reverse() only for array 
```var array = str.split('');```
```var str = array.join('')```
- Because even though the ```if-block``` is not executed, the expression ```var x``` is hoisted.
