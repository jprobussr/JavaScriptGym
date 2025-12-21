import LinkedList from './LinkedList.js';

const list = new LinkedList();

list.addToTail('A');
list.addToTail('B');
list.addToTail('C');

list.printList();

console.log(`Removed: `, list.removeHead());
list.printList();

console.log('Removed: ', list.removeHead());
list.printList();



