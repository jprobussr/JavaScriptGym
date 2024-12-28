// Define a class Node, which represents a single element in a linked list
class Node {
    // The constructor method initializes the node with data and a pointer to the next node
    constructor(data) {
        // Store the data passed to the node
        this.data = data;
        // Initialize the next pointer to null since the node doesn't point to anything yet
        this.next = null;
    }

    // Method to set the next node on the linked list
    setNextNode(node) {
        // Check if the provided node is either an instance of Node or null
        if (node instanceof Node || node === null) {
            // If the check passes, set the next pointer to the given node.
            this.next = node;
        } else {
            // If the check fails, throw an error to ensure data integrity in the linked list
            throw new Error('Next node must be a member of the Node class');
        }
    }

    // Method to get the next node that this node points to
    getNextNode() {
        // Return the node stored in the next pointer
        return this.next;
    }
}

// Export the Node class to make it available for use in other files
module.exports = Node;