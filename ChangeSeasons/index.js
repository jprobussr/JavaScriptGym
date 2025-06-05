import { Node } from './Node.js';
import { LinkedList } from './LinkedList.js';

const list = new LinkedList();

function addHead() {
  const inputData = document.getElementById('inputData').value;
  if (inputData) {
    list.addToHead(inputData);
    document.getElementById('inputData').value = '';
    updateListDisplay();
  }
}

function addTail() {
  const inputData = document.getElementById('inputData').value;
  if (inputData) {
    list.addToTail(inputData);
    document.getElementById('inputData').value = '';
    updateListDisplay();
  }
}

function removeHead() {
  list.removeHead();
  updateListDisplay();
}

function updateListDisplay() {
  document.getElementById('listOutput').innerHTML = list.printList();
}

window.addHead = addHead;
window.addTail = addTail;
window.removeHead = removeHead;

updateListDisplay();
