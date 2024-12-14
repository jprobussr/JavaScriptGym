class Node {
    constructor(data) {
        this.head = data;
        this.next = null;
    }

    setNextNode(node) {
        if (!(node instanceof Node)) {
            throw new Error("Next node must be a member of the Node class");
        }
        this.next = node;
    }

    getNextNode() {
        return this.next;
    }
}

module.exports = Node;