const nemo = ['nemo'];
const nemoNames = [
  'Ghost',
  'Marlin',
  'Dory',
  'Gill',
  'Bloat',
  'Peach',
  'Gurgle',
  'Bubbles',
  'nemo',
  'Bruce',
];
const large = new Array(100000).fill('nemo');

const findNemo = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('I found nemo.');
    }
  }
};

findNemo(large);
