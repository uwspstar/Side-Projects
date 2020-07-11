// typic
// console.log(JSON.stringify(linkedList))

class Node {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

// let current = this.head; // cannot use "const current = this.head;"
// compar with Array
// always set current =  this.head; start searching with head


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
            //console.log('current =',current)
            node.next = current.next;
            current.next = node;
        }
        return this;
    }
}

let linkedList = new SinglyLinkedList(5);
linkedList.append(10);
//linkedList.append(20);
//linkedList.prepend(1);
//linkedList.insert(1, -1)
linkedList.insert(2, 4);
console.log(JSON.stringify(linkedList))
linkedList.insert(0, 100);
//console.table(linkedList);
console.log(JSON.stringify(linkedList))