



// // Error Handling 

// const handleErrors = error => {
//     if (error.message !== 'Not found') {
//         console.log('Handling other types of errors');
//     } else {
//         console.log('Handling Not  found error');
//     }
// }

// let error = new Error('Not Found');
// handleErrors(error);

// error = new Error('Something went wrong.');
// handleErrors(error);



// // Response Handling

// let apiResponse = {
//   statusCode: 200,
//   data: { userId: '134', active: 'true' },
// };

// const isValidResponse = (response) => {
//   return (
//     response.statusCode !== 200 ||
//     typeof response.data.userId !== 'string' ||
//     typeof response.data.active !== 'boolean'
//   );
// };

// console.log(isValidResponse(apiResponse));

// // Data Filtering

// let products = [
//   { id: 1, name: 'Laptop', available: true },
//   { id: 2, name: 'Smartphone', available: false },
//   { id: 3, name: 'Tablet', available: true },
// ];

// let availableProducts = products.filter((product) => product.available !== false);

// console.log(availableProducts);

// // Form Validation
// const validateForm = (input) => {
//   if (input !== '') {
//     return 'Input is valid';
//   } else {
//     return 'Input cannot be empty';
//   }
// };

// console.log(validateForm(''));
// console.log(validateForm('Hello'));

// // User Authentication

// let storedUserName = 'user134';
// let storedPassword = 'securePass';

// const authenicate = (userName, password) => {
//   if (userName !== storedUserName || password !== storedPassword) {
//     return 'Authenication Failed';
//   } else {
//     return 'Authenication Successful';
//   }
// };

// console.log(authenicate('user134', 'wrongPass'));
// console.log(authenicate('user134', 'securePass'));

// const fibonacci = n => {
//     const sequence = [0, 1];
//     for (let i = 2; i < n; i++) {
//         sequence.push(sequence[i - 1] + sequence[i - 2]);
//     }
//     return sequence;
// }

// console.log(fibonacci(15));

// const fibonacci = n => {
//     if (n <= 0) {
//         return 0;
//     }

//     if (n === 1) {
//         return 1;
//     }

//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

// console.log(fibonacci(10));

// const factorial = n => {
//     if (n === 0) return 1;
//     return n * factorial(n - 1);
// }

// console.log(factorial(5));

// const removeDuplicates = (arr) => {
//   return [...new Set(arr)];
// };

// console.log(removeDuplicates(['John', 'John', 'Alice', 'Alice']));

// const reverseWords = sentence => {
//     return sentence.split(' ').reverse().join(' ');
// }

// console.log(reverseWords('Hello World'));
