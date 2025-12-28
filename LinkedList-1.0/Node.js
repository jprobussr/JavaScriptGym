export default class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  setNextNode(node) {
    this.next = node;
  }

  getNextNode() {
    return this.next;
  }
};

