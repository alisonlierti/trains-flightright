const startTheProcess = require('./processRunner/startTheProcess');
const Train = require('./entities/Train');;
const Station = require('./entities/Station');
  
  
function getSpaceBeetwenTheStations() {
  return {
      time: 0.01, // in seconds
  };
}
  
const station1a = new Station("1A", null, []);
  const station2a = new Station("2A", null, []);
  const station3ac = new Station("3AC", null, []);
  const station4a = new Station("4A", null, []);
  const station5ab = new Station("5AB", null, []);
  const station6a = new Station("6A", null, []);
  const station7a = new Station("7A", null, []);
  const station1b = new Station("1B", null, []);
  const station2b = new Station("2B", null, []);
  const station3bc = new Station("3BC", null, []);
  const station5b = new Station("4B", null, []);
  const station6b = new Station("5B", null, []);
  const station1c = new Station("1C", null, []);
  const station2c = new Station("2C", null, []);
  const station5c = new Station("3C", null, []);
  const station6c = new Station("4C", null, []);


  const trains =  [
      new Train(
        [station1a,
            station2a,
            station3ac,
            station4a,
            station5ab,
            station6a,
            station7a],
        "1",
        300,
        0.01 // in seconds
        ),
        new Train(
            [station1b,
                station2b,
                station3bc,
                station5ab,
                station5b,
                station6b],
            "2",
            200,
            0.01 // in seconds
        ),
        new Train(
            [station1c,
                station2c,
                station3ac,
                station3bc,
                station5c,
                station6c],
            "3",
            100,
            0.01 // in seconds
        )
    ];
  
  
  test('amount of departured', () => {
    return startTheProcess(trains, getSpaceBeetwenTheStations(), 1).then(data => {
      data = data.filter(data => data.includes('departured'));
      expect(data.length).toBe(38);
    });
  });


  test('amount of arrived', () => {
    return startTheProcess(trains, getSpaceBeetwenTheStations(), 1).then(data => {
      data = data.filter(data => data.includes('arrived'));

      expect(data.length).toBe(38);
    });
  });
  