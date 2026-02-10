const anagrams = [
  'moz biblical torchbearers',
  "it's razorbill beachcomber",
  'och mcrobbie trailblazers',
  'bib chorizo cellarmaster',
  'thor scribble carbimazole',
  'zilla borscht abercrombie',
  'brazil scorcher batmobile',
  'dame shelburne characterizing',
  'uber englishman characterized',
  'agnes rhumbline characterized',
  'rehab scrutinized charlemagne',
  'dreams zurich interchangeable',
  'bam hamster technocratic',
  'mechatronic masterbatch',
  'bam ratchet mechatronics',
];

const sortPhrase = (phrase) => {
  return phrase.toLowerCase().split('').sort().join('').trim();
};

const isAnagramInArray = (anagram, arr) => {
  return arr.filter((item) => {
    const word1 = sortPhrase(anagram);
    const word2 = sortPhrase(item);

    return word1 === word2;
  });
};

console.log(isAnagramInArray('Bob Ziroll Scrimba Teacher', anagrams));
