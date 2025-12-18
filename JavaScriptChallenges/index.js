// Whisper Function
// const whisper = (str) => {
//   if (str.endsWith('!')) {
//     return 'shh... ' + str.slice(0, -1).toLowerCase();
//   }
//   return 'shh...' + str.toLowerCase();
// };

// console.log(whisper('PLEASE BE CAREFUL!'));
// console.log(whisper('Please GO home!'));

// Panic Function

// const panic = (str) => {
//   return str.split('').join('🥳').toUpperCase()
// };

// console.log(panic('hello world part 3'))

// Alternating Caps

// const altCaps = str => {
//     let newStr = '';

//     for (let i = 0; i < str.length; i++) {
//         if (i % 2 === 0) {
//             newStr += str[i].toUpperCase();
//         } else {
//             newStr += str[i];
//         }
//     }

//     return newStr;
// }

// console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));

// To TitleCase()

// const capitalizeWord = word => {
//     return word[0].toUpperCase() + word.slice(1);
// }

// const toTitleCase = str => {
//     const sentenceArr = str.split(' ')

//     const capArr = sentenceArr.map((word) => capitalizeWord(word));

//     return capArr.join(' ');
// }

// console.log(capitalizeWord('ghost'));
// console.log(toTitleCase('pumpkin pranced and pranced across the pond, that\'s All!'));

// Not Fiz Buzz

// const awardBonus = () => {
//     for (let i = 1; i < 100; i++) {
//         if (i % 15 === 0) {
//             console.log(`${i} - First Place Prize: Steak Gift Card'`);
//         } else if (i % 3 === 0) {
//             console.log(`${i} - Second Place Prize: Amusement Park`)
//         } else if (i % 5 === 0) {
//             console.log(`${i} - Third Place Prize: $40 Gift Card`);
//         }
//     }
// }

// awardBonus();

// Emojify

// const emojis = {
//   smile: '😊',
//   angry: '😠',
//   party: '🎉',
//   heart: '💜',
//   cat: '🐱',
//   dog: '🐕',
// };

// const emojifiedWord = word => {
//   if (!word.startsWith(':') || !word.endsWith(':')) {
//     return word;
//   }

//   const key = word.slice(1, -1);

//   if (emojis[key]) {
//     return emojis[key];
//   }
//   return key;
// }

// const emojifyPhrase = phrase => {
//   const words = phrase.split(' ');
//   const emojifiedWords = words.map((word) => emojifiedWord(word));
//   return emojifiedWords.join(' ');
// }

// console.log(emojifyPhrase("I :heart: my :cat:"));
// console.log(emojifyPhrase("I :heart: my :elephant:"));

// console.log('I :heart: my :cat:');
// console.log(emojifiedWord('ghost'));
// console.log(emojifiedWord('hello'));
// console.log(emojifiedWord(':heart:'));
// console.log(emojifiedWord(':cat:'));

// Anagram

const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  const newStr1 = str1.split('').sort().join('');
  const newStr2 = str2.split('').sort().join('');

  return newStr1 === newStr2;
};

console.log(isAnagram('inch', 'chin'));
console.log(isAnagram('tac', 'cat'));
console.log(isAnagram('build', 'child'));
