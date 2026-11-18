// Array total
const miles = [120, 250, 180, 300];

const sumArray = (numbers) => {
  if (numbers.length === 0) {
    return 0;
  }
  return numbers[0] + sumArray(numbers.slice(1));
};

const totalMiles = sumArray(miles);

console.log(totalMiles);

// Sum Numbers
// const sumNumbers = (number) => {
//   if (number === 0) {
//     return 0;
//   }
//   console.log(number);
//   return number + sumNumbers(number - 1);
// };

// console.log(sumNumbers(3));

// Countdown
// const countdown = number => {
//   if (number === 0) {
//     console.log(number);
//     return;
//   }
//   console.log(number);
//   countdown(number - 1);
// };

// countdown(10);
