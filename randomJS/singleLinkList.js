// Define a Node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null; // Pointer to the next node;
  }
}

// Define the singly Linked List
class SinglyLinkedList {
  constructor() {
    this.head = null; // Start the list
    this.size = 0; // Track the size of the list
  }

  // Add a new node to the end of the list
  add(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode; // If the list is empty, set head to new node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next; // Traverse to the end of the list
      }
      current.next = newNode; // Link the last node to the new node
    }
    this.size++;
  }
}

const list = new SinglyLinkedList();

console.log('Adding 10...');
list.add(10);
console.log('Head Node:', list.head); // Logs the head Node.

console.log('Adding 20...');
list.add(20);
console.log('Head Node:', list.head); // Logs the head node and its next node.
