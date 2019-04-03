  const sleep = require('../utils/sleep');
  
  // for each train to make all its route and only there to leave the loop of the trains
  module.exports = async function doTheTrainRoute(train, spaceBeetwenTheStations, i, listOfEvents) {
    for (let j = 0; j < (train.percurso.length * 2); j++) {
        const currentStation = train.percurso.shift();

        await sleep(spaceBeetwenTheStations * 1000);

        const isAwaiting = currentStation.arrivedTrainInTheStation(train, listOfEvents);
        if (isAwaiting.promise) {
            await isAwaiting.promise;
        }
        train.percurso.push( currentStation );

        // if arrived at the end of the array the same should be reversed
        if ( ( (train.percurso.length * 2) - 1 ) === j ) {
            train.percurso = train.percurso.reverse();
        }

        await sleep(train.timeNeedInTheStation * 1000);
        currentStation.departureTrainFromStation(train, listOfEvents);
    }
}