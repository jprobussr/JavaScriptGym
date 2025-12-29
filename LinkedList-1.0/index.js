import LinkedList from './LinkedList.js';

const list = new LinkedList();

list.addToHead('Flour');
list.addToHead('Bacon');
list.addToHead('Milk');
list.removeHead();
console.log(list);

list.printList();