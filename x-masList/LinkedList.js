const Node = require('./Node'); // Import the Node class

class LinkedList {
    constructor() {
        this.head = null; // Start with an empty list (no head node)
    }

    // Adds a new song (node) to the beginning of the list
    addToHead(data) {
        const newHead = new Node(data); // Create a new node for the song
        const currentHead = this.head; // Store the current head node
        this.head = newHead; // Update the head to the new node;
        if (currentHead) {
            // If there was a previous head, link it to the new head;
            this.head.setNextNode(currentHead);
        }
    }

    // Adds a new Song (node) to the end of the list.
    addToTail(data) {
        let tail = this.head; // Start at the head.
        if (!tail) {
            // If the list is empty, create the first node as the head.
            this.head = new Node(data);
        } else {
            // Traverse to the end of the list
            while (tail.getNextNode() !== null) {
                tail = tail.getNextNode();
            }

            // Add the new node at the end
            tail.setNextNode(new Node(data));
        }
    }

    removeHead() {
        const removeHead = this.head; // Store the current head;
        if (!removeHead) {
            // If the list is empty, there's nothing to remove
            return;
        }
        this.head = removeHead.getNextNode(); // Move the head to the next node.
        return removeHead.data; // Return the removed song name.
    }

    printList() {
        let currentNode = this.head; // Start at the head
        let output = '<head>'; // Begin list output
        while (currentNode !== null) {
            output += `${currentNode.data} ->`; // Append each song to the output
            currentNode = currentNode.getNextNode(); // Move to the next node.
        }
        output += ` <tail> `; // End list output
        console.log(output); // Display the playlist
    }
}

module.exports = LinkedList;