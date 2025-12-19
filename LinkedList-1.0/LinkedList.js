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

  printList() {
    let currentNode = this.head;
    let output = '<head> ';

    while (currentNode !== null) {
      output += `${currentNode.data} -> `;
      currentNode = currentNode.getNextNode();
    }

    output += '<tail>';
    console.log(output);
  }
}
