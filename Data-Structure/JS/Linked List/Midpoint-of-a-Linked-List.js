// try one is fast, one is slow, fast move 2 steps, show move 1 step
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