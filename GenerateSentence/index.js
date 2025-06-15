const generateSentence = (desc, arr) => {
  let itemList = '';
  for (let i = 0; i < arr.length; i++) {
    itemList += arr[i];

    if (i < arr.length - 1) {
      itemList += ', ';
    }
  }

  return `The ${arr.length} ${desc} are ${itemList}`;
};

console.log(generateSentence('best fruits', ['Apples', 'Bananas']));

console.log(generateSentence('largest countries', ['China', 'India', 'USA']));
