import SinglyLinkedList from "./SinglyLinkedList.js";


const list = new SinglyLinkedList();

list.push('Front of list');
list.push('???');
list.push(99);
list.pop();
list.pop();
console.log(list)