const Train = require('./Train');

const myTrain = new Train();

myTrain.addCarToFront('Locomotive');
myTrain.addCarToEnd('Cargo Car 1');
myTrain.addCarToEnd('Passenger Car 1');

console.log('Removed: ', myTrain.removeFrontCar());

myTrain.addCarToFront('New Locomotive');

let currentCar = myTrain.engine;
console.log('Train contents: ');
while (currentCar) {
    console.log(currentCar.content);
    currentCar = currentCar.getNextCar();
}