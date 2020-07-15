/*
- https://leetcode.com/problems/add-two-numbers/

2. Add Two Numbers
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// fast one
var addTwoNumbers = function (l1, l2) {
    let node = null
    const carry = arguments[2]
    if (l1 || l2) {
        const val1 = l1 ? l1.val : 0
        const val2 = l2 ? l2.val : 0
        const next1 = l1 ? l1.next : null
        const next2 = l2 ? l2.next : null
        const val = carry ? val1 + val2 + 1 : val1 + val2
        node = new ListNode(val % 10)
        node.next = addTwoNumbers(next1, next2, val >= 10)
    } else if (carry) {
        node = new ListNode(1)
        node.next = null
    }
    return node
};

//regular one

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor(val) {
        this.head = new Node(val);
    }
    add(val) {
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = new Node(val);
        return this;
    }
}
let list1 = new LinkedList(2);
list1.add(2);
list1.add(3);
//console.log(JSON.stringify(list1));
let list2 = new LinkedList(1);
list2.add(9);
list2.add(6);
list2.add(9);
//console.log(JSON.stringify(list2));

//2-->2-->3
//1-->9-->6-->9
//3-->1-->0-->0-->1
const addTwoNumbers = function (l1, l2) {
    //console.log(JSON.stringify(list1));
    //console.log(JSON.stringify(list2));
    let list = new LinkedList();
    let cur1 = l1.head;
    let cur2 = l2.head;
    let sum = 0;
    let carry = 0;
    while (cur1 !== null || cur2 !== null || sum >= 10) {
        // every node, the sum need to recalculate, but carry
        sum = 0;
        if (cur1 !== null) {
            sum += cur1.val;
            cur1 = cur1.next;
        }
        if (cur2 !== null) {
            sum += cur2.val;
            cur2 = cur2.next;
        }
        sum += carry;
        sum >= 10 ? carry = 1 : carry = 0;
        sum = sum % 10;
        list.add(sum);
        console.log('sum=', sum, 'carry=', carry);
        console.log(JSON.stringify(list));
    }
    return list.head.next;
}
let result = addTwoNumbers(list1, list2);
console.log('list.next =', JSON.stringify(result));