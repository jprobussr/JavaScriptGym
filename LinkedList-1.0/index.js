import LinkedList from './LinkedList.js';

const list = new LinkedList();

list.addToHead('Flour');
list.addToHead('Bacon');
list.addToHead('Milk');
list.addToTail('Sugar');
list.removeHead();


list.printList();