class Node {
    constructor(data) {
        this.data = data; //The value stored in the node
        this.next = null; // Pointer to the next node, initially null
    }
}

// SinglyLinkedList class to manage the list

class SinglyLinkedList {
    constructor() {
        this.head = null; // Points to the first node in the list
        this.tail = null; // Points to the last node in the list
        this.length = 0; // Number of nodes in the list
    }

    // Method to add new node to the end of the list
    push(data) {
        let newNode = new Node(data); //Create a new Node with the given data
        if (!this.head) {
            // If the list is empty
            this.head = newNode; // Set head to the new node
            this.tail = this.head // Tail also points to the same node
        } else {
            // If the list already has nodes
            this.tail.next = newNode; // Link the current tail to the new node
            this.tail = newNode; // Update the tail to be the new node;
        }
        this.length++; // Increment the length of the list
        return this; // Return the entire list for chaining
    }
}

// Create a  new SinglyLinkedList instance
let list = new SinglyLinkedList();

list.push('Hello'); // Add node with the value 'Hello'
list.push('How Are You?'); //Add node
list.push(99); // Add node

// Log the entire list
console.log('Entire List:', list);

// Log specific parts of the list
console.log('Head Node:', list.head); // Log the head node
console.log('Second Node:', list.head.next); // Log the second node
console.log('Third Node:', list.head.next.next); // Log the third node