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

    insert(index, val) {
        const node = new Node(val);
        let current = this.head;
        let count = 0;
        while (count < index) {
            current = current.next;
            count++;
        }
        let currentNext = current.next;
        current.next = node;
        node.next = currentNext;
    }

    prepend(val) {
        const node = new Node(val);
        let current = this.head;
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
//linkedList.append(20);
//linkedList.prepend(1);
//console.log(linkedList);
//linkedList.insert(1, -1)
//linkedList.insert(2, 4);
linkedList.insert(0, 100);
console.table(linkedList);
console.log(JSON.stringify(linkedList))
