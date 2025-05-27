import Node from "./Node.js";

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(data) {
        const newNode = new Node(data);
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

    pop() {
        if (!this.head) return null;

        let current = this.head;
        let newTail = current;

        while (current.next) {
            newTail = current;
            current = current.next;
        }

        newTail.next =  null;
        this.tail = newTail;
        this.length--;

        if (this.length === 0) {
            this.head =  null;
            this.tail = null;
        }

        return current.data;
    }
}

export default SinglyLinkedList;