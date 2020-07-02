
/*
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





*/