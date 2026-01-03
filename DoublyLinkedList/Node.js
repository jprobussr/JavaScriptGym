export default class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }

  // Next 
  getNextNode() {
    return this.next;
  }

  setNextNode(node) {
    this.next = node;
  }

  // prev 
  getPrevNode() {
    return this.prev;
  }

  setPrevNode(node) {
    this.prev = node;
  }
}
