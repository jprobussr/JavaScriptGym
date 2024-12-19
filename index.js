import { LinkedList } from "./LinkedList.js";

const groceryList = new LinkedList();

groceryList.addToHead('Apples');
groceryList.addToHead('Bananas');
groceryList.addToHead('Grapes');

console.log('Current Grocery List:');
groceryList.printList();

groceryList.addToHead("Dairy Milk");
console.log('Updated Grocery List:');
groceryList.printList();