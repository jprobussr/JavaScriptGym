const Node = require('./Node.js');

const a = new Node('Apple')
const b= new Node('Bannana')
const c = new Node('Cali')
const d = new Node('Desert');

a.setNextNode(b)
b.setNextNode(c)
c.setNextNode(d);

let current = a;

while (current !== null) {
    console.log(current.data);
    current = current.getNextNode();
}
