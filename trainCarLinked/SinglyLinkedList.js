const Node = require('./Node');

class SinglyLinkedList {
    constructor() {
        this.head = null; // The engine of the train
        this.tail = null; // The caboose of the train
        this.length = 0; // Keeps track of the number of cars
    }

    // Add a train car to the end of the train
    push(data) {
        const newNode = new Node(data);
        if (!this.head) {
            // If the train is empty, set both head and tail to the new car
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Add the new car to the end and update the caboose
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    // Remove a train car from the end of the train
    pop() {
        if (!this.head) {
            console.warn("The train is empty!");
            return null;
        }

        let current = this.head;
        let previous = null;

        while (current.next) {
            previous = current;
            current = current.next;
        }

        if (previous) {
            previous.next = null;
            this.tail = previous;
        } else {
            // If there's only one car, reset the train
            this.head = null;
            this.tail = null;
        }

        this.length--;
        return current.data; // Return the data of the removed car
    }

    // Display the train
    printTrain() {
        let current = this.head;
        let train = '';
        while (current) {
            train += `${current.data} -> `;
            current = current.next;
        }
        console.log(train + 'null');
    }
}

module.exports = SinglyLinkedList;