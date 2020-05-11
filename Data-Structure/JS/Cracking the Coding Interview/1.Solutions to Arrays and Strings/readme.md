### HashTables

### Set
- The Set object lets you store unique values of any type, whether primitive values or object references.
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
```
let mySet = new Set()
let o = {a: 1, b: 2}
mySet.add(o)
mySet.add({a: 1, b: 2})   // o is referencing a different object, so this is okay

mySet.has(o)       // true

for (let item of mySet) console.log(item)

// converting between Set and Array
mySet2 = new Set([1, 2, 3, 4])

```
- Use Set to remove duplicate elements from the array 
```
const numbers = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5]

console.log([...new Set(numbers)]) 

// [2, 3, 4, 5, 6, 7, 32]
```
### JavaScript Bitwise Operators
- https://www.w3schools.com/jsref/jsref_operators.asp
- https://www.youtube.com/watch?v=mesu75PTDC8
- https://www.youtube.com/watch?v=RRyxCmLX_ag
- ```user permission```
```
AND &
OR |
XOR ^
NOT ~
shift left <<
shift right >>
```