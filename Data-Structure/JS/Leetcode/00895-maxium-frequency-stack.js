// 895. Maximum Frequency Stack

// Implement FreqStack, a class which simulates the operation of a stack-like data structure.

// FreqStack has two functions:

// push(int x), which pushes an integer x onto the stack.
// pop(), which removes and returns the most frequent element in the stack.
// If there is a tie for most frequent element, the element closest to the top of the stack is removed and returned.


// Example 1:

// Input: 
// ["FreqStack","push","push","push","push","push","push","pop","pop","pop","pop"],
// [[],[5],[7],[5],[7],[4],[5],[],[],[],[]]
// Output: [null,null,null,null,null,null,null,5,7,5,4]
// Explanation:
// After making six .push operations, the stack is [5,7,5,7,4,5] from bottom to top.  Then:

// pop() -> returns 5, as 5 is the most frequent.
// The stack becomes [5,7,5,7,4].

// pop() -> returns 7, as 5 and 7 is the most frequent, but 7 is closest to the top.
// The stack becomes [5,7,5,4].

// pop() -> returns 5.
// The stack becomes [5,7,4].

// pop() -> returns 4.
// The stack becomes [5,7].

var FreqStack = function () {
    this.freqStack = [];
    this.freqMap = {};
};

/** 
 * @param {number} x
 * @return {void}
 */
FreqStack.prototype.push = function (x) {
    this.freqMap[x] = this.freqMap[x] ? this.freqMap[x] + 1 : 1;
    const freq = this.freqMap[x];
    if (this.freqStack.length < freq) {
        this.freqStack.push([x]);
    } else {
        this.freqStack[freq - 1].push(x);
    }
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function () {
    const lastPart = this.freqStack[this.freqStack.length - 1];
    const result = lastPart.pop();
    if (lastPart.length === 0) {
        this.freqStack.pop();
    }
    this.freqMap[result] -= 1;
    return result;
};

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 */