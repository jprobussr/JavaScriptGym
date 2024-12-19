class Node {
    // Constructor initializes the node with the data
    constructor(data) {
        this.data = data; // The data for this node (song name)
        this.next = null; // Pointer to the next node (initially null);
    }

    // Sets the next node in the linked list
    setNextNode(node) {
        if (!(node instanceof Node)) {
            // Ensure the next node is a valid Node Instance
            throw new Error('Next node must be a member of the node class');
        }
        this.next = node; // Link to the next node
    }

    // Retrieves the next node in the linked list
    getNextNode() {
        return this.next; // Return the reference to the next node
    }
}

module.exports = Node; //Export Node for the use in the Linked List