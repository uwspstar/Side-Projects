/*
https://visualgo.net/en/sorting?slide=1

merge sort:
It's a combination of two things - merging and sorting

Try out bubble sort on an array of 100000 elements, it will take quite some time!
There is a family of sorting algorithms that can improve time complexity from O(n  ) to O(n log n)

In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays

Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the two input arrays

This function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it.
*/