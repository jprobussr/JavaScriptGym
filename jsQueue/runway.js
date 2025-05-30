const Queue = require('./Queue.js');

const load = (flights) => {
  const runway = new Queue(3);
  flights.forEach((flight) => {
    try {
      runway.enqueue(flight);
      console.log(`${flight} taxi to runway.`);
    } catch (e) {
      console.log('Runway full!');
    }
  });

  return runway;
};

const clear = (runway) => {
  while (runway.isEmpty() === false) {
    const cleared = runway.dequeue();
    console.log('\nFlights wait...\n');
    console.log(`${cleared}, is cleared for takeoff!\n${cleared} in air.`);
  }

  console.log('\nAll planes took off, runway clear.');
};

module.exports = { load, clear };
