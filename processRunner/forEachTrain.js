const doTheTrainRoute = require('./doTheTrainRoute');

module.exports =  async function forEachTrain(orderedTrains, spaceBeetwenTheStations, i, listOfEvents) {
    promises = [];
    for (let j = 0; j < orderedTrains.length; j++) {

        const train = orderedTrains[j];
        promises.push(doTheTrainRoute(train, spaceBeetwenTheStations, i, listOfEvents));
    }
    await Promise.all(promises);
}