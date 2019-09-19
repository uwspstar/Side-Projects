//console.log('emoji', '🍏');
//On macOS control+command+space pulls up the Emoji keyboard
//0) twoSum
//1) reverseStr "abc"
//2) printC {[()]}
//3) slidewindwo ([ 1,2,-3,4,-5], 2)
//4 funMatrix [ [ 1, 2, 3 ], [ 8, 9, 4 ], [ 7, 6, 5 ] ]
//5) LinkedList
//6) evenOldArr [1,2,3,4] //[4,2,3,1]
//7) lenthofLongestNoRepeatString "abcade" // 3 -> abc

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    insert(data) {
        this.head = new Node(data, this.head);
    }

    getAt(index) {
        let counter = 0;
        // if(!this.head) {
        //     return;
        // }
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        return null

    }

    findMidPoint() {
        let slow = this.head;
        let fast = this.head;

        while (fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow;
    }

    removelast() {
        let prev = this.head;
        let node = this.head.next;

        while (node.next) {
            prev = node;
            node = node.next;
        }

        prev.next = null;
    }
}


// /*  
//       cols  colE
//  rowS ----------
//        1  2  3   
//        8  9  4
//        7  6  5
// rowE------------
// */

// const funMatrix = function (n) {
//     let rowStart = 0;
//     let rowEnd = n - 1;
//     let colStart = 0;
//     let colEnd = n - 1;
//     let result = [];
//     let num = 1;
//     for (let i = 0; i < n; i++) {
//         result.push([]);
//     }

//     while (colStart <= colEnd && rowStart <= rowEnd) {
//         for (let i = colStart; i <= colEnd; i++) {
//             result[rowStart][i] = num;
//             num++;
//         }
//         rowStart++;

//         for (let i = rowStart; i <= rowEnd; i++) {
//             result[i][colEnd] = num;
//             num++;
//         }
//         colEnd--;

//         for (let i = colEnd; i >= colStart; i--) {
//             result[rowEnd][i] = num;
//             num++;
//         }
//         rowEnd--;

//         for (let i = rowEnd; i >= rowStart; i--) {
//             result[i][colStart] = num;
//             num++;
//         }
//         colStart++;
//     }

//     return result;
// }

// console.log(funMatrix(3));

// const slideWindow = function (arr, size) {
//     if (arr.length < size) {
//         return null;
//     }
//     let maxSum = 0;
//     let tempSum = 0;

//     for (let i = 0; i < size; i++) {
//         maxSum += arr[i];
//     }
//     console.log('maxSum', maxSum);

//     temSum = maxSum;
//     //console.log(slideWindow([1, -3, 5, -1, 2], 3)); //3,1,6
//     for (let i = size; i < arr.length; i++) { // i <arr.length
//         //console.log('arr[i]', arr[i], 'arr[i - size]', arr[i - size]);
//         tempSum = tempSum + arr[i] - arr[i - size];

//         maxSum = Math.max(maxSum, tempSum);

//         console.log('tempSum', tempSum, 'maxSum', maxSum);

//     }

//     return maxSum;
// }
// console.log(slideWindow([1, -3, 5, -1, 2], 1)); //
// console.log(slideWindow([1, -3, 5, -1, 2], 2)); //3,1,6
// console.log(slideWindow([1, -3, 5, -1, 2], 2));
//  const printC = function (str) {
//      if (str.length % 2 !== 0) {
//          return false;
//      }

//      let result = [];
//      let map = {
//          "(": ")",
//          "{": "}",
//          "[": "]"
//      };

//      for (let i = 0; i < str.length; i++) {
//          if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
//              result.push(str[i]);
//          } else {
//              let last = result.pop();
//              if (map[last] !== str[i]) {
//                  return false;
//              }
//          }
//      }

//      return result.length === 0
//  }
//  console.log(printC("({})"));
//  console.log(printC("({)(})"));


//  const reverseStr = function (str) {
//      let result = '';
//      for (let i = 0; i < str.length; i++) {
//          result = str[i] + result;
//      }
//      return result;
//  }
//  //reverseStr("abc")
//  console.log(reverseStr("abc"));