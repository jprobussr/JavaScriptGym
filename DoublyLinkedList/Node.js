export default class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }

  setNextNode(node) {
    this.next = node;
  }

  getNextNode() {
    return this.next;
  }

  setPrevNode(node) {
    this.prev = node;
  }

  getPrevNode() {
    return this.prev;
  }
}
