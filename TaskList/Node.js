class Node {
    constructor(task) {
        this.data = task; // The Task data;
        this.next = null; // Pointer to the next node, initially null;
    }
}

module.exports = Node;