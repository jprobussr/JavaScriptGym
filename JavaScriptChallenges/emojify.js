const emojis = {
  smile: '😊',
  angry: '😠',
  party: '🎉',
  heart: '💜',
  cat: '🐱',
  dog: '🐕',
};

const emojifiedWord = (word) => {
  if (!word.startsWith(':') || !word.endsWith(':')) {
    return word;
  }

  const key = word.slice(1, -1);

  if (emojis[key]) {
    return emojis[key];
  }

  return key;
};

const emojifyPhrase = (phrase) => {
  const words = phrase.split(' ');

  const emojifiedWords = words.map((word) => emojifiedWord(word));

  return emojifiedWords.join(' ');
};

console.log(emojifyPhrase('I :heart: my :cat:')); // I 💜 my 🐱
console.log(emojifyPhrase('I :heart: my :elephant:'));
