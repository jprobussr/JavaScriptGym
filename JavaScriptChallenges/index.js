import data from './data.js';

const getFreePodcasts = (data) => {
  return data
    .filter((item) => item.paid === false)
    .map((podcast) => {
      return {
        title: podcast.title,
        rating: podcast.rating,
        paid: podcast.paid,
      };
    });
};

console.log(getFreePodcasts(data));