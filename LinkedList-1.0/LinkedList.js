import Node from './Node.js';

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const newNode = new Node(data);
    const currentHead = this.head;

    newNode.setNextNode(currentHead);

    this.head = newNode;
  }
}
