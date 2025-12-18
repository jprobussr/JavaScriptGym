
import LinkedList from "./LinkedList.js";

const list = new LinkedList();

list.addToHead('work')
list.addToHead('code')
list.addToHead('repeat')
list.printList()

const removedWord = list.removeHead();
console.log(`${removedWord.data} was removed from the list.`);
list.printList()

