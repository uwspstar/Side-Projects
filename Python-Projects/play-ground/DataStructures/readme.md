- https://www.amazon.com/Elements-Programming-Interviews-Python-Insiders/dp/1537713949/
### list (Array) 
```
The time complexity to delete the element at index i from an array of length n is O(n−i).
The same is true for inserting a new element (as opposed to updating an existing entry)
```
- When working with arrays you should take advantage on ```both ends```.
- Instead of deleting an entry (which requires moving all entries to its right), consider overwriting it.
- When operating on 2D arrays, use parallel logic for rows and for columns.
- Arrays in Python are provided by the list type.
- The key property of a list is that it is dynamically-resized, i.e., there’s no bound as to how many values can be added to it
```python3
len(A), A.append(42), A.remove(2), and A.insert(3, 28)
min(A), max(A),
```
- binary search for sorted lists
```python3
(bisect.bisect(A, 6), bisect.bisect_left(A, 6), and bisect.bisect_right(A, 6)),
```
- the difference between B = A and B = list(A)
- deep copy vs. shallow copy
- copy.copy(A) differs from copy.deepcopy(A)
- A.reverse() (in-place), reversed(A) (returns an iterator), 
- A.sort() (in-place), sorted(A) (returns a copy)
- ```del A[i]``` (deletes the i-th element), and del ```A[i:j]``` (removes the slice).
- slice is A[i:j:k]

### list vs tuple
- The tuple type is very similar to the list type, with the constraint that it is immutable.

### tuple
### Dictionary
### set
### BTS Tree


