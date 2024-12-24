const SinglyLinkedList = require('./SinglyLinkedList');

const train = new SinglyLinkedList();

// Add train cars
train.push('Engine');
train.push('Passenger Car 1');
train.push('Passenger Car 2');
train.push('Caboose');

console.log('Initial train.');
train.printTrain();

// Remove the last car
console.log("\nRemoving the last car...");
const removedCar = train.pop();
console.log(`Removed: ${removedCar}`);

// Display the train again
console.log("\nTrain after removing the last car:");
train.printTrain();