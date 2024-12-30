// // Anagrams -> Frequency Counter

// const isAnagram = (str1, str2) => {
//     // If lengths are not the same, they cannot be anagrams
//     if (str1.length !== str2.length) {
//         return false;
//     }

//     // Create frequency counters
//     const frequencyCounter1 = {};
//     const frequencyCounter2 = {};

//     // Populate frequency counters
//     for (let char of str1) {
//         frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
//     }
//     for (let char of str2) {
//         frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
//     }

//     // Compare the frequency counters
//     for (let key in frequencyCounter1) {
//         if (frequencyCounter1[key] !== frequencyCounter2[key]) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isAnagram('cinema', 'iceman'));
// console.log(isAnagram('hello', 'ollhe'));
// console.log(isAnagram('text', 'best'));

// Optimized version 
const isAnagram = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }

    const frequencyCounter = {};

    for (let char of str1) {
        frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;
    }

    for (let char of str2) {
        if (!frequencyCounter[char]) {
            return false;
        }
        frequencyCounter[char] -= 1;
    }

    return true;
}

console.log(isAnagram('cinema', 'iceman'));
console.log(isAnagram('hello', 'ollhe'));
console.log(isAnagram('test', 'best'));
console.log(isAnagram('code', 'doce'));





















// const same = (arr1, arr2) => {
//     if (arr1.length !== arr2.length) {
//         return false;
//     }
//     let frequencyCounter1 = {};
//     let frequencyCounter2 = {};
//     for (let val of arr1) {
//         frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
//     }
//     for (let val of arr2) {
//         frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
//     }
//     for (let key in frequencyCounter1) {
//         if (!(key ** 2 in frequencyCounter2)) {
//             return false;
//         }
//         if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
//             return false;
//         }
//     }
//     console.log(frequencyCounter1);
//     console.log(frequencyCounter2);
//     return true;
// }

// console.log(same([1, 2, 3], [1, 4, 9]));
// console.log(same([1, 2, 3], [1, 9]));
// console.log(same([1, 2, 1], [4, 4, 1]));
// console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));

// const same = (arr1, arr2) => {
//     if (arr1.length !== arr2.length) {
//         return false;
//     }

//     for (let i = 0; i < arr1.length; i++) {
//         let correctIndex = arr2.indexOf(arr1[i] ** 2);

//         if (correctIndex === -1) {
//             return false;
//         }

//         arr2.splice(correctIndex, 1);
//     }

//     return true;
// }

// console.log(same([1, 2, 3], [1, 4, 9]));
// console.log(same([1, 2, 3], [1, 9]));
// console.log(same([1, 2, 1], [4, 4, 1]));
// console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));