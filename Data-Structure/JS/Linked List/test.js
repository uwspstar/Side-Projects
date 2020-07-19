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
console.log(JSON.stringify(linkedList));
console.log(JSON.stringify(linkedList.findMid()));
console.log(JSON.stringify(linkedList.reverse()));
console.log(JSON.stringify(linkedList.findMid()));

