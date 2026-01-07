import DoublyLinkedList from './DoublyLinkList.js';

const testList = new DoublyLinkedList();
testList.addToHead(9);
testList.removeTail();
testList.addToTail(8);
testList.addToTail(2);
testList.removeHead();
testList.addToTail(4);
testList.removeByData(9);
testList.removeHead();
console.log(testList.head.data);
