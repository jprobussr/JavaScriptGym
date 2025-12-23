import Node from './Node.js';

export default class LinkedList {
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
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    let tail = this.head;

    while (tail.getNextNode() !== null) {
      tail = tail.getNextNode();
    }
    tail.setNextNode(new Node(data));
  }

  removeHead() {
    if (!this.head) {
      return null;
    }

    const removedHead = this.head;
    this.head = removedHead.getNextNode();
    removedHead.setNextNode(null);

    return removedHead.data;
  }

  printList() {
    let currentNode = this.head;
    let output = 'Head: ';

    while (currentNode !== null) {
      output += `${currentNode.data} -> `;
      currentNode = currentNode.getNextNode();
    }

    output += '<tail>';
    console.log(output);
  }
}
