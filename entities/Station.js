module.exports = class Station {
  constructor(name, awaitingTrainInTheStation, awaitingTrains) {
    this.name = name;
    this.awaitingTrainInTheStation = awaitingTrainInTheStation;
    this.awaitingTrains = awaitingTrains;
  }

  getTrainsInTheStation() {
    return awaitingTrains;
  }

  arrivedTrainInTheStation(train, listOfEvents, promise) {
    if (this.awaitingTrainInTheStation) {
      const promise = this.createHandablePromise();
      this.awaitingTrains.push({ train, promise });
      const event = `The train ${train.name} is awaiting at the station ${
        this.name
      }`;
      listOfEvents.push(event);
      return { promise: promise.promise };
    } else {
      const event = `The train ${train.name} arrived at station ${this.name}`;
      listOfEvents.push(event);
      if (promise) {
        promise.resolve();
      }
      this.awaitingTrainInTheStation = train;
      return { train, arrived: true, station: this };
    }
  }

  departureTrainFromStation(train, listOfEvents) {
    const event = `The train ${train.name} departured the station ${this.name}`;
    listOfEvents.push(event);
    this.awaitingTrainInTheStation = null;
    if (this.awaitingTrains && this.awaitingTrains.length) {
      const nextTrain = this.awaitingTrains.shift();
      return this.arrivedTrainInTheStation(
        nextTrain.train,
        listOfEvents,
        nextTrain.promise
      );
    }
  }

  createHandablePromise() {
    const promise = {};
    promise.promise = new Promise((resolve, reject) => {
      promise.resolve = resolve;
      promise.reject = reject;
    });
    return promise;
  }
}
