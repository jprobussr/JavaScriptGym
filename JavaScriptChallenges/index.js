const isPalindrome = str => {
  let newReverseString = '';

  for (let i = str.length - 1; i >= 0; i--) {
    newReverseString += str[i];
  }

  return newReverseString === str;
}

console.log(isPalindrome("abba"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("octopus"));
console.log(isPalindrome("pumpkins"));
console.log(isPalindrome("madam"));