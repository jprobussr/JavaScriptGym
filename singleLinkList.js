class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}


let list = new SinglyLinkedList()
list.push('Hello Ghost');
list.push('How are you?');
list.push(99);

list.head;
console.log(list);
list.head.next;
console.log(list);
list.head.next.next;
console.log(list);

