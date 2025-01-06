const LinkedList = require('./LinkedList.js');


const seasons = new LinkedList();


seasons.addToHead('Winter');
seasons.addToHead('Spring');


seasons.addToTail('Break');

seasons.removeHead();
seasons.printList();

// Search for Node
// const result = seasons.search('Summer');
// console.log(result ? `Found: ${result.data}` : "Not Found");

// const LinkedList = require('./LinkedList.js');

// const myPlayList = new LinkedList();

// myPlayList.addToHead('Song 1');
// myPlayList.addToTail('Song 2');
// myPlayList.addToTail('Song 3');
// myPlayList.addToHead('Song 4');

// myPlayList.printList();

// const train = new LinkedList();
// train.printList();
// train.addToHead('The First Passenger Cart');
// train.printList();
// train.addToTail('The Last Cart Luggage');
// train.printList();
// train.printList();

// const result = train.search('The Last Cart Luggage');
// console.log(result ? `Found: ${result.data}` : 'Not found!!');
