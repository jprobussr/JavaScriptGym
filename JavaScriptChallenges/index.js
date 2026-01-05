import podcasts from './data.js';

const awards = ['🏆', '⭐', '💎', '🥇', '👑'];

const getHosts = (data) => {
  return data.reduce((acc, curr) => {
    return acc.concat(curr.hosts);
  }, []);
};

const assignAwards = (data) => {
  const hosts = getHosts(data);
  return hosts.map((host) => {
    const randIndex = Math.floor(Math.random() * awards.length);
    return `${awards[randIndex]} ${host}`;
  });
};

console.log(assignAwards(podcasts));