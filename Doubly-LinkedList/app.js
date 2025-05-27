const DoublyLinkedList = require('./DoublyLinkList.js');

const subway = new DoublyLinkedList();

subway.addToHead('TimesSquare');
subway.addToHead('Grand Central');
subway.addToHead('Central Park');

subway.printList();

subway.addToTail('Penn Station');
subway.printList();

subway.removeHead();
subway.removeTail();
subway.printList();
subway.removeHead();

subway.removeByData('TimesSquare');
subway.printList();