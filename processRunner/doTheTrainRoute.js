  const sleep = require('../utils/sleep');
  
  // for each train to make all its route and only there to leave the loop of the trains
  module.exports = async function doTheTrainRoute(train, spaceBeetwenTheStations, i, listOfEvents) {
    for (let j = 0; j < (train.route.length * 2); j++) {
        const currentStation = train.route.shift();

        await sleep(spaceBeetwenTheStations * 1000);

        const isAwaiting = currentStation.arrivedTrainInTheStation(train, listOfEvents);
        if (isAwaiting.promise) {
            await isAwaiting.promise;
        }
        train.route.push( currentStation );

        // if arrived at the end of the array the same should be reversed
        if ( ( (train.route.length - 1) ) === j ) {
            train.route = train.route.reverse();
        }

        await sleep(train.timeNeedInTheStation * 1000);
        currentStation.departureTrainFromStation(train, listOfEvents);
    }
}