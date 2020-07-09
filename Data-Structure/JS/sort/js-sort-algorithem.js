
/*

Ideally, the good sort algorithm runtime is O(n log n)	

Default sort() in JavaScript uses insertion sort by V8 Engine of Chrome, 
and Merge sort by Mozilla Firefox and Safari.

There is no draft requirement for JS to use a specific sorting algorithm.

Mozilla uses merge sort.
However, In Chrome's v8 source code, as of today, it uses QuickSort and InsertionSort, for smaller arrays. The ECMAscript standard does not specify which sort algorithm is to be used


bubbleSort // outer loop and inner loop, each time find the biggest
selectionSort // find the smallestIndex, swap at the end, two loop
insertionSort // two loop, left side is sorted, insert
mergeSort // find mid, merge two sorted arrays
quickSort // find pivot index, sort left and right


Big O Notation	Name	        Example(s)
------------------------------------------------------------------------------------
O(1)	        Constant	    # Odd or Even number,
                                # Look-up table (on average)
O(log n)	    Logarithmic	    # Finding element on sorted array with binary search
O(n)	        Linear	        # Find max element in unsorted array,
                                # Duplicate elements in array with Hash Map
O(n log n)	    Linearithmic	# Sorting elements in array with merge sort
O(n^2)	        Quadratic	    # Duplicate elements in array **(naïve)**,
                                # Sorting array with bubble sort, insertion sort, or selection sort
O(n^3)	        Cubic	        # 3 variables equation solver
O(2^n)	        Exponential	    # Find all subsets
O(n!)	        Factorial	    # Find all permutations of a given set/string
-------------------------------------------------------------------------------------


Examples of quadratic algorithms:

- Check if a collection has duplicated values.
- Sorting items in a collection using bubble sort, insertion sort, or selection sort.
- Find all possible ordered pairs in an array.

O(logN)
- git bisect <subcommand> <options> // git binary search
- binary search (ordered array)



Bubble Sort - O(n^2)
Insertion Sort - O(n^2)
Selection Sort - O(n^2)
Quick Sort - O(n log (n))
Merge Sort - O(n log (n))
Radix sort - O(nk)

- Merge sort and quick sort are standard efficient sorting algorithms
- Quick sort can be slow in the worst case, but is comparable to merge sort on average
- Merge sort takes up more memory because it creates a new array (in-place merge sorts exist, but they are really complex!)
- Radix sort is a fast sorting algorithm for numbers
- Radix sort exploits place value to sort numbers in linear time (for a fixed number of digits)

*/