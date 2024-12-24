// Node class to represent a task
class Node {
    constructor(task) {
        this.data = task; // The task data (e.g., name and priority)
        this.next = null; // Pointer to the next node, initially null;
    }
}

// SinglyLinkedList class to manage the task list
class SinglyLinkedList {
    constructor() {
        this.head = null; // Points to the first node (first task) in the list
        this.tail = null; // Points to the last node (last task) in the list
        this.length = 0; // Number of tasks in the list;
    }

    // Method to add a new task to the end of the list
    push(task) {
        let newNode = new Node(task); // Create a new Node with the given task
        if (!this.head) {
            // If the list is empty
            this.head = newNode; // set head to the new node
            this.tail = this.head; // Tail also points to the same node
        } else {
            // If the list already has tasks
            this.tail.next = newNode; // Link the current tail to the new node
            this.tail = newNode; // Update the tail to the new node
        }
        this.length++; // Increment the length of the list
        return this; // Return the entire list for chaining
    }
}

// Example: Adding tasks to the task list
let taskList = new SinglyLinkedList();

taskList.push({ name: 'Buy Groceries', priority: 'High' }); // Add task
taskList.push({ name: 'Buy x-mas gift', priority: 'Med'});
taskList.push({name: 'Schedule Meeting', priority: 'Low'}); // Add another task
taskList.push({name: 'Go Running', priority: 'Low'}); // Add another task

console.log('Entire Task List: ', taskList);

// Log specific task
console.log('First Task:', taskList.head.data); // Log the first task
console.log('Second Task:', taskList.head.next.data); // Log the second task
console.log('Third Task:', taskList.head.next.next.data);