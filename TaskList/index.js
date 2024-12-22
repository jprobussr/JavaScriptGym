const SinglyLinkedList = require('./SinglyLinkedList');

// Example: Adding and removing tasks
let taskList = new SinglyLinkedList();

taskList.push({ name: 'Buy Groceries', priority: 'High' }); // Add task
taskList.push({ name: 'Buy x-mas gift', priority: 'Med' });
taskList.push({ name: 'Schedule Meeting', priority: 'Low' }); // Add another task
taskList.push({ name: 'Go Running', priority: 'Low' }); // Add another task

console.log('Entire Task List: ', taskList);

// Removing tasks using pop
console.log('Removed Task:', taskList.pop()); // Removes the last task
console.log('Entire Task List after pop: ', taskList);

console.log('Removed Task:', taskList.pop()); // Removes another task
console.log('Entire Task List after second pop: ', taskList);
