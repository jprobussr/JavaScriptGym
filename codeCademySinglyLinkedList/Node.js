

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

// const step1 = new Node('Preheat the oven to 375° (190°C).');
// const step2 = new Node('Mix flour, sugar, and baking powder in a bowl.');
// const step3 = new Node('Add eggs and milk, then whisk until smooth.');
// const step4 = new Node('Pour the batter into a greased baking dish.');
// const step5 = new Node('Bake for 25 minutes or until golden brown.');
// const step6 = new Node('Let it cool before serving.');

// step1.setNextNode(step2);
// step2.setNextNode(step3);
// step3.setNextNode(step4);
// step4.setNextNode(step5);
// step5.setNextNode(step6);

// let currentStep = step1;
// console.log('Recipe Instructions:');
// while (currentStep) {
//     console.log(`${currentStep.data}`);
//     currentStep = currentStep.getNextNode();
// }

// console.log('Enjoy your dish!:)');



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

// // create node for each grocery item 
// const item1 = new Node('Milk');
// const item2 = new Node('Eggs');
// const item3 = new Node('Jalephenos');
// const item4 = new Node('Beer');
// const item5 = new Node('Steak');

// item1.setNextNode(item2);
// item2.setNextNode(item3);
// item3.setNextNode(item4);
// item4.setNextNode(item5);

// let currentItem = item1;
// console.log('Grocery Shopping List:');

// while (currentItem) {
//     console.log(`-${currentItem.data}`);
//     currentItem = currentItem.getNextNode();
// }

// console.log('Shopping complete.');



// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }

//     setNextNode(node) {
//         if (node instanceof Node || node === null) {
//             this.next = node;
//         } else {
//             throw Error('Not a Node');
//         }
//     }

//     getNextNode() {
//         return this.next;
//     }
// }

// const stop1 = new Node('4434 PottersTown Rd');
// const stop2 = new Node('444 Butterfly Lane');
// const stop3 = new Node('8934 Bel Vista Rd');
// const stop4 = new Node('590 Autum Pl');
// const stop5 = new Node('88 Coohoon Rd');

// stop1.setNextNode(stop2);
// stop2.setNextNode(stop3);
// stop3.setNextNode(stop4);
// stop4.setNextNode(stop5);


// // Traverse the route 
// let currentStop = stop1;
// console.log('Starting the bus route.');
// while (currentStop) {
//     console.log(`Arrived at: ${currentStop.data}`);
//     currentStop = currentStop.getNextNode();
// }

// console.log('End of the route.');




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