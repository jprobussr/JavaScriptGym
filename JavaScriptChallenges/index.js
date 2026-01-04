import podcasts from './data.js';

const sortByDuration = (data, flightLength) => {
  if (flightLength > 60) {
    data.sort((a, b) => b.duration - a.duration);
  } else {
    data.sort((a, b) => a.duration - b.duration);
  }
  data.forEach(({ title, duration }, index) => {
    console.log(`${index + 1}. ${title}, ${duration} minutes`);
  });
};

sortByDuration(podcasts, 122);