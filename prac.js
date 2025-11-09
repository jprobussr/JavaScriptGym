// Exercise 3 AltCaps

const altCaps = str => {
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

console.log(altCaps('When you visit Murray, you should stop by.'));

// Exercise 2 Whisper

// const whisper = str => {
//   if (str.endsWith('!')) {
//     return 'shh...' + str.slice(0, -1).toLowerCase()
//   }
//   return 'shh...' + str.toLowerCase();
// }

// console.log(whisper('PLEASE RELAX. HAVE A NICE DAY!'));
// console.log(whisper('MA\'AM, this is a Wendy\'s!'));

// Exercise 1 Panic

// const panic = (str) => {
//   return str.split(' ').join('😱').toUpperCase() + '!';
// };

// console.log(panic("I'm almost out of coffee"));
// console.log(panic('winter is cominggg'));
// console.log(panic('Coffee'));

// const panic = str => {
//   return str.split(' ').join(' 😱 ').toUpperCase() + '!'
// }

// console.log(panic('never, just take a break.'));
