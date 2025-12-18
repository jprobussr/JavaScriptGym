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

  removeHead() {
    // If the list is empty, stop and return null;
    if (!this.head) {
      return null;
    }

    // Save the current head node
    const removedHead = this.head;

    // Move the head to the next node
    this.head = removedHead.getNextNode();

    // Disconnect the old head from the list
    removedHead.setNextNode(null);

    // Return removedHead;
    return removedHead;
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
