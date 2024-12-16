const TrainCar = require('./TrainCar');

class Train {
    constructor() {
        this.engine = null;
    }

    addCarToFront(content) {
        const newEngine = new TrainCar(content);
        const currentEngine = this.engine;
        this.engine = newEngine;
        if (currentEngine) {
            this.engine.setNextCar(currentEngine);
        }
    }

    addCarToEnd(content) {
        let lastCar = this.engine;
        if (!lastCar) {
            this.engine = new TrainCar(content);
        } else {
            while (lastCar.getNextCar() !== null) {
                lastCar = lastCar.getNextCar();
            }
            lastCar.setNextCar(new TrainCar(content));
        }
    }

    removeFrontCar() {
        const removedCar = this.engine;
        if (!removedCar) {
            return null;
        }

        this.engine = removedCar.getNextCar();
        return removedCar.content;
    }
}

module.exports = Train;

