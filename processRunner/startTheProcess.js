const forEachTrain = require('./forEachTrain');

module.exports = async function startTheProcess(trains, spaceBeetwenTheStations, amountOfStops) {
  const listOfEvents = [];

  // ordering the trains by people inside
  const orderedTrains = trains.sort((a, b) =>
    a.amoutOfPeople > b.amoutOfPeople
      ? -1 : a.amoutOfPeople < b.amoutOfPeople
      ? 1 : 0
  );

  for (let i = 1; i <= amountOfStops; i++) {
    await forEachTrain(orderedTrains, spaceBeetwenTheStations, i, listOfEvents);
  }

  return listOfEvents;
}
