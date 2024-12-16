class TrainCar {
    constructor(content) {
        this.content = content;
        this.nextCar = null;
    }

    setNextCar(car) {
        if (!(car instanceof TrainCar)) {
            throw new Error('Next car must be a TrainCar instance.');
        }
        this.nextCar = car;
    }

    getNextCar() {
        return this.nextCar;
    }
}

module.exports = TrainCar;