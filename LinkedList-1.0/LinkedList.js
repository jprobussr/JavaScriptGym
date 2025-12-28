import Node from './Node.js';

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;

    newHead.setNextNode(currentHead);
    this.head = newHead;
  }

  printList() {
    let currentNode = this.head; 
    let output = 'Head: ';

    while (currentNode !== null) {
      output += `${currentNode.data} -> `;
      currentNode = currentNode.getNextNode();
    }

    output += 'null';
    console.log(output);
  }
}
