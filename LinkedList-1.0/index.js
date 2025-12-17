import Node from "./Node.js";
import LinkedList from "./LinkedList.js";

const list = new LinkedList();

list.addToHead('JS');
list.addToHead('React');
list.addToHead('Study');
list.addToHead('Sleep');
list.addToHead('Repeat');

list.printList();

const wordRemoved = list.removeHead();
console.log(`${wordRemoved.data}: was removed.`);
list.printList();
