class Node {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

class SinglyLinkedList {
    constructor(val) {
        this.head = new Node(val);
    }
    append(val) {
        const current = this.head; 
        
        while (current.next!== null) { 
            current = current.next;
        }
        current.next = new Node(val);

        console.log('current = ', current, 'current.next=',current.next);
    }
}

let linkedList = new SinglyLinkedList(5);
linkedList.append(10);
// linkedList.append(20);
console.log(linkedList);