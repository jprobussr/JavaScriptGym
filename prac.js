// toTitleCase()

const capitalizeWord = word => {
  return word[0].toUpperCase() + word.slice(1);
}

const toTitleCase = str => {
  const sentenceArr = str.split(' ');
  const capArr = sentenceArr.map(word => capitalizeWord(word));
  return capArr.join(' ');
}

console.log(capitalizeWord("pumpkin"));
console.log(toTitleCase("pumpkin pranced purposefully across the pond"));