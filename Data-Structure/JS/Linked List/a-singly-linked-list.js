// typic
class Node {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

// let current = this.head; // cannot use "const current = this.head;"
// compar with Array

class SinglyLinkedList {
    constructor(val) {
        this.head = new Node(val);
    }
    prepend(val) {
        const node = new Node(val);
        const current  =  this.head;
        node.next = current;
        this.head = node;
    }
    append(val) {
        const node = new Node(val);
        if (this.head === null) this.head = node;
        else {
            let current = this.head; // cannot use "const current = this.head;"
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }
    }
}

let linkedList = new SinglyLinkedList(5);
linkedList.append(10);
linkedList.append(20);
linkedList.prepend(1);
console.log(linkedList);