const altCaps = (str) => {
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
        newStr += str[i].toUpperCase();
    } else {
        newStr += str[i];
    }
  }

  return newStr;
};

console.log(altCaps('never give up!'));
console.log(altCaps('I code, therefore I am!'));
console.log(altCaps('Keep Coding!'));
