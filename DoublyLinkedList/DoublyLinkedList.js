import Node from './Node.js';

export default class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;

    if (currentHead) {
        currentHead.setPrevNode(newHead);
        newHead.setNextNode(currentHead);
    }

    this.head = newHead;

    if (!this.tail) {
        this.tail = newHead;
    }
  }
}
