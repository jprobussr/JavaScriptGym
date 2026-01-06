import Node from './Node.js';

export default class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(data) {
    // Create the new node
    const newHead = new Node(data);
    // Save the currentHead
    const currentHead = this.head;
    // if the list is not empty, link the nodes
    if (currentHead) {
      // old head point back to new head
      currentHead.setPrevNode(newHead);
      // new head point forward to old head
      newHead.setNextNode(currentHead);
    }
    // update the head ref
    this.head = newHead;
    // if list was empty, update the tail
    if (!this.tail) {
      this.tail = newHead;
    }
  }
}
