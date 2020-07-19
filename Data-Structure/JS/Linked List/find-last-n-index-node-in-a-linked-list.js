/*

Fast & Slow strategy
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
    getLastGivenIndexNode(n) {
        if (this.head === null) return undefined;
        let fast = this.head;
        let slow = this.head;
        while (n > 0) {
            fast = fast.next
            if (fast === null) return undefined;
            n--;
        }
        while (fast.next !== null) {
            fast = fast.next;
            slow = slow.next;
        }
        return slow;
    }
    
    isCircularFastSlow() {
        if (this.head === null) return true;
        // if it is circular in part of nodes
        let slow = this.head;
        let fast = this.head;
        // not need to check slow.next !== null && ...
        while (fast.next !== null && fast.next.next !== null) {
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
    isCircular() {
        if (this.head === null) return true;
        let current = this.head;
        while (current.next !== null && current.next !== this.head) {
            current = current.next;
        }
        return current.next === this.head
    }
}

let linkedList = new LinkedList(5);
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
linkedList.append(40);
console.log(JSON.stringify(linkedList.isCircularFastSlow()));
console.log(JSON.stringify(linkedList.isCircular()));
/*

console.log(JSON.stringify(linkedList));
console.log(JSON.stringify(linkedList.findMid()));
console.log(JSON.stringify(linkedList.reverse()));
console.log(JSON.stringify(linkedList.findMid()));
*/

