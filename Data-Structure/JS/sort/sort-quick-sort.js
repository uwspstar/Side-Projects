/*
https://blog.bitsrc.io/a-guide-to-sorting-algorithms-in-javascript-5b32da4eae1e
https://www.guru99.com/quicksort-in-javascript.html
https://www.youtube.com/watch?v=ZHVk2blR45Q
https://zh.wikipedia.org/wiki/%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F


Quick Sort
Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
Works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array
Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot

Mozilla uses merge sort. 
However, In Chrome's v8 source code, as of today, it uses QuickSort and InsertionSort, for smaller arrays. The ECMAscript standard does not specify which sort algorithm is to be used

https://www.geeksforgeeks.org/quick-sort/

Like Merge Sort, QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways.

Always pick first element as pivot.
Always pick last element as pivot (implemented below)
Pick a random element as pivot.
Pick median as pivot.

Select right pivot effect performance

how Quick sort works in simple words.

First select an element which is to be called as pivot element.
Next, compare all array elements with the selected pivot element and arrange them in such a way that, elements less than the pivot element are to it's left and greater than pivot is to it's right.
Finally, perform the same operations on left and right side elements to the pivot element.

But before going forward with the Quick sort, selecting the pivot element plays a major role. 

If you select the first element as the pivot element, then it gives WORST performance in the sorted array. 

So, it is always advisable to pick the middle element (length of the array divided by 2) as the pivot element and we do the same

*/

// find the pivot index
function getPivotIndex(arr, start = 0, end = arr.length - 1) {
    // find the right position for the 1st item  
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    // We are assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }

    // Swap the pivot from the start the swapPoint
    swap(arr, start, swapIdx);
    return swapIdx;
}

const quickSort = function (arr, left, right) {

    if (left < right) {
        let pi = getPivotIndex(arr, left, right)
        quickSort(arr, left, pi - 1)
        quickSort(arr, pi + 1, right)
    }
    return arr
}

/*
function partition(a, left, right, pivotIndex)
 {
     pivotValue = a[pivotIndex]
     swap(a[pivotIndex], a[right]) // 把pivot移到結尾
     storeIndex = left
     for i from left to right-1
     {
         if a[i] <= pivotValue
          {
             swap(a[storeIndex], a[i])
             storeIndex = storeIndex + 1
          }
     }
     swap(a[right], a[storeIndex]) // 把pivot移到它最後的地方
     return storeIndex
 }
這是原地分割演算法，它分割了標示為"左邊（left）"和"右邊（right）"的序列部份，藉由移動小於a[pivotIndex]的所有元素到子序列的開頭，留下所有大於或等於的元素接在他們後面。在這個過程它也為基準元素找尋最後擺放的位置，也就是它回傳的值。它暫時地把基準元素移到子序列的結尾，而不會被前述方式影響到。由於演算法只使用交換，因此最後的數列與原先的數列擁有一樣的元素。要注意的是，一個元素在到達它的最後位置前，可能會被交換很多次。

一旦我們有了這個分割演算法，要寫快速排列本身就很容易：

 procedure quicksort(a, left, right)
     if right > left
         select a pivot value a[pivotIndex]
         pivotNewIndex := partition(a, left, right, pivotIndex)
         quicksort(a, left, pivotNewIndex-1)
         quicksort(a, pivotNewIndex+1, right)

*/