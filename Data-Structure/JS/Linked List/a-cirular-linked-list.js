/*
https://www.geeksforgeeks.org/circular-linked-list/

Check if a linked list is Circular Linked List

Given a singly linked list, find if the linked list is circular or not. A linked list is called circular if it is not NULL-terminated and all nodes are connected in the form of a cycle. Below is an example of a circular linked list.

An empty linked list is considered as circular.

The idea is to store head of the linked list and traverse it. If we reach NULL, linked list is not circular. If reach head again, linked list is circular.
*/

class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}
class LinkedList {
    constructor(val) {
        this.head = new Node(val);
    }
    isCircular() {
        if (this.head === null) return true;
        let current = this.head;
        while (current.next !== null && current.next !== this.head) {
            current = current.next;
        }
        return current.next === this.head
    }

    isCircularFastSlow() {
        if (this.head === null) return true;
        // if it is circular in part of nodes
        let slow = this.head;
        let fast = this.head;
        while (slow.next !== null && fast.next !== null && fast.next.next !== null) {
            fast = fast.next.next;
            slow = slow.next;
            if (fast === slow) return true;
        }
        return false;
    }

    append(val) {
        let node = new Node(val);
        if (this.head === null) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }
        return this;
    }
    // 1-->2-->3-->4
    // c   n   
    reverse() {
        let current = this.head;
        let pre = null;
        let next = null;
        while (current !== null) {
            next = current.next;
            current.next = pre;
            pre = current;
            current = next;
        }
        this.head = pre; // very important
        return this;
    }
    findMid() {
        if (this.head === null) return undefined;
        let fast = this.head;
        let slow = fast;
        while (fast.next !== null && fast.next.next !== null) {
            fast = fast.next.next;
            slow = slow.next;
        }
        return slow.value;
    }
}

let linkedList = new LinkedList(5);
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
linkedList.append(40);
console.log(JSON.stringify(linkedList.isCircular()));