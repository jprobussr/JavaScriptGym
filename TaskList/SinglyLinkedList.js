const Node = require('./Node');

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Method to add a new task to the end of the list;
    push(task) {
        let newNode = new Node(task); // Create a new Node with the given task;
        if (!this.head) {
            // If the list is empty
            this.head = newNode; // set head to the new node;
            this.tail = this.head; // Tail also points to the same node
        } else {
            // If the list already has a task
            this.tail.next = newNode; // Link the current tail to the new node
            this.tail = newNode; // Update the tail to the new node
        }
        this.length++; 
        return this; // Return the entire list for chaining 
    }

    pop() {
        if (!this.head) {
            // If the list is empty return undefined
            return undefined;
        }

        let current = this.head;
        let newTail = current;

        // Traverse the list to find the second-to-last node
        while (current.next) {
            newTail = current; // Keep track of the second-to-last node
            current = current.next; // Move to the next node;
        }

        this.tail = newTail; // Update the tail to the second-to-last node
        this.tail.next = null; // Remove the reference to the last node;
        this.length--; // Decrement the length of the list;

        // If the list is now empty, reset head and tail to null;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current.data; // Return the data of the removed node;
    }
}


module.exports = SinglyLinkedList;