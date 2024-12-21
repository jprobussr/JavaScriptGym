const Node = require('./Node');

class LinkedList {
    constructor() {
        this.head = null;
    }

    addToHead(data) {
        const newHead = new Node(data);
        const currentHead = this.head;
        this.head = newHead;
        if (currentHead) {
            this.head.setNextNode(currentHead);
        }
    }

    addToTail(data) {
        let tail = this.head;
        if (!tail) {
            this.head = new Node(data);
        } else {
            while (tail.getNextNode() !== null) {
                tail = tail.getNextNode();
            }
            tail.setNextNode(new Node(data));
        }
    }

    removeHead() {
        const removeHead = this.head;
        if (!removeHead) {
            return;
        }
        this.head = removeHead.getNextNode();
        return removeHead.data;
    }

    printList() {
        let currentNode = this.head;
        let output = "<head> ";
        while (currentNode !== null) {
            output += currentNode.data + ' ';
            currentNode = currentNode.getNextNode();
        }

        output += '<tail>';
        console.log(output);
    }
}

module.exports = LinkedList;