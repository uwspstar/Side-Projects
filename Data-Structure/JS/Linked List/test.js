class Node {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

class SinglyLinkedList {
    constructor(val) {
        this.head = new Node(val)
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

    findMidPoint() {
        let fast = this.head;
        let slow = this.head;
        while (fast.next !== null && fast.next.next !== null) {
            fast = fast.next.next;
            slow = slow.next; 
        }
        return slow;
    }
}
let linkedList = new SinglyLinkedList(5);
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
linkedList.append(40);
console.log(JSON.stringify(linkedList))
let tmp = linkedList.findMidPoint();
console.log('findMidPoint = ', JSON.stringify(tmp));

/*
class SinglyLinkedList {
    constructor(val) {
        this.head = new Node(val);
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

    insert(index, val) {
        if (index === 0) {
            this.prepend(val);
        } else {
            const node = new Node(val);
            let current = this.head;
            let count = 0;
            while (count < index) {
                if (current.next !== null) current = current.next;
                count++;
            }
            node.next = current.next;
            current.next = node;
        }
        return this;
    }
    //1--2--3
    remove(index) {

        if (index === 0) {
            this.head = this.head.next;
        } else {
            let current = this.head;
            let pre = this.head;
            let count = 0
            while (count < index) {
                if (current.next) {
                    pre = current;
                    current = current.next;
                }
                count++
            }
            pre.next = current.next;
        }
        return this;
    }

    size() {
        let count = 1;
        let current = this.head.next;
        while (current !== null) {
            count++;
            current = current.next;
        }
        return count;
    }
}


let linkedList = new SinglyLinkedList(5);
//console.log(JSON.stringify(linkedList))
linkedList.append(10);
linkedList.append(20);
linkedList.prepend(1);
//console.log(JSON.stringify(linkedList))
linkedList.insert(2, 4);
linkedList.insert(0, 100);
//console.log(JSON.stringify(linkedList))
linkedList.remove(0);
//console.log(JSON.stringify(linkedList))
linkedList.remove(1);
console.log(JSON.stringify(linkedList))
console.log('size =', linkedList.size())
*/