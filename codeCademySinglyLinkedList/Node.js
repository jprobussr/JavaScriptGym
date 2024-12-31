class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    setNextNode(node) {
        if (node instanceof Node || node === null) {
            this.next = node;
        } else {
            throw Error('Not a Node');
        }
    }

    getNextNode() {
        return this.next;
    }
}

const stop1 = new Node('4434 PottersTown Rd');
const stop2 = new Node('444 Butterfly Lane');
const stop3 = new Node('8934 Bel Vista Rd');
const stop4 = new Node('590 Autum Pl');
const stop5 = new Node('88 Coohoon Rd');

stop1.setNextNode(stop2);
stop2.setNextNode(stop3);
stop3.setNextNode(stop4);
stop4.setNextNode(stop5);


// Traverse the route 
let currentStop = stop1;
console.log('Starting the bus route.');
while (currentStop) {
    console.log(`Arrived at: ${currentStop.data}`);
    currentStop = currentStop.getNextNode();
}

console.log('End of the route.');




// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }

//     setNextNode(node) {
//         if (node instanceof Node || node === null) {
//             this.next = node;
//         } else {
//             throw Error('Not a node');
//         }
//     }

//     getNextNode() {
//         return this.next;
//     }
// }

// const strawberryNode = new Node('Berry Tasty');
// const vanillaNode = new Node('Vanilla');
// const coconutNode = new Node('Coconuts for Coconut');

// vanillaNode.setNextNode(strawberryNode);
// strawberryNode.setNextNode(coconutNode);

// let currentNode = vanillaNode;

// while (currentNode) {
//     console.log(currentNode.data);
//     currentNode = currentNode.getNextNode();
// }



module.exports = Node;