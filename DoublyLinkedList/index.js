import Node from './Node.js';

const a = new Node('A');
const b = new Node('B');

a.setNextNode(b);
b.setPrevNode(a);

console.log(a.data);
console.log(a.getNextNode().data);
console.log(b.getPrevNode().data);

console.log(a.getPrevNode());
console.log(b.getNextNode());