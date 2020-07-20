/*
Return the length of the longest increasing subsequence (not necessarily contiguous) in the array.

Example: [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15]
the longest increasing subsequence is [0, 2, 6, 9 , 11, 15].
*/

// 1: brute force time complexity of O(2^N) because at each position n you can either include it or not (two choices) yielding (2 * 2 * 2 * 2 * 2 ... = 2n).

// 2: slide window

// 3: dynamic programming