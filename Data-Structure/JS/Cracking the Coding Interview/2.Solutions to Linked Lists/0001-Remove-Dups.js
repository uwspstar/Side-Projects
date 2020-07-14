/*
Remove Duplicates: 
Write code to remove duplicates from an unsorted linked list. 
FOLLOW UP
How would you solve this problem if a temporary buffer is not allowed?
*/
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor(val) {
        this.head = new Node(val)
    }
    append(val) {
        let current = this.head;
        while (current.next !== null) {
            current = current.next
        }
        current.next = new Node(val);
    }
}
let list = LinkedList(5);
list.append(10);
list.append(10);
list.append(30);

const removeDuplicate = function (list) {
    let current = this.head;
    let map = new Map()
    while (current.next !== null) {
        let key = current.val;
        if (!map.get(key)) {
            map.set(key, true)

        }
    }
    let key = current.val;
    if (!map.get(key)) {
        map.set(key, true)
    }
    let cur = this.head;
    //[1, 2, 1, 3]
    // 1 = true, 2= true; 3= true
    // 1 = false, 2 = false, 3 = false
    while (cur.next !== null) {
        let k = cur.val;
        if (!map.get(k)) {
            cur = cur.next.next;
        } else {
            map.set(k,false);
        }
    }
}