const startTheProcess = require('./processRunner/startTheProcess');
const Train = require('./entities/Train');;
const Station = require('./entities/Station');
  
  
  const spaceBeetwenTheStations = {
      time: 2, // in seconds
      space: 1 // in meters
  };
  
  // name, awaitingTrainInTheStation, awaitingTrains
  
  const stationa = new Station("A", null, []);
  const stationb = new Station("B", null, []);
  const stationc = new Station("C", null, []);
  
  
  // (percurso, name, amoutOfPeople, timeNeedInTheStation)
  const trains =  [new Train(
      [stationc, stationa, stationb],
      "1",
       100,
       3 // in seconds
  ),
  new Train(
      [stationa, stationc, stationb],
      "3",
       8,
       3 // in seconds
  ),
  new Train(
      [stationb, stationa, stationc],
      "4",
       200,
       3 // in seconds
  )];
  
  startTheProcess(trains, spaceBeetwenTheStations, 1).then(data => console.log(data));
  