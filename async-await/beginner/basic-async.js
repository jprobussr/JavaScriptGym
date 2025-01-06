// Sequential-vs-parallel

// Simulate an asynchronous task with a delay
const simulateTask = (taskName, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${taskName} completed in ${delay}ms`);
    }, delay);
  });
};

// Sequential execution
const runTasksSequentially = async () => {
  console.log('Starting sequential execution...');

  const result1 = await simulateTask('Task 1', 1000);
  console.log(result1);

  const result2 = await simulateTask('Task 2', 2000);
  console.log(result2);

  const result3 = await simulateTask('Task 3', 1500);
  console.log(result3);
};

// Parallel execution
const runTasksInParallel = async () => {
  console.log('Starting parallel execution...');

  const task1 = simulateTask('Task 1', 1000);
  const task2 = simulateTask('Task 2', 2000);
  const task3 = simulateTask('Task 3', 1500);

  const results = await Promise.all([task1, task2, task3]);
  results.forEach((result) => console.log(result));

  console.log('Parallel execution complete.');
};

// Call the functions
runTasksSequentially().then(() => {
  runTasksInParallel();
});

// Simulate a delay using a promise

// const simulateApiCall = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('API call to complete!');
//     }, 2000);
//   });
// };

// // Using async/await to handle the promise
// const fetchData = async () => {
//   try {
//     const result = await simulateApiCall();
//     console.log(result); // API call complete!
//   } catch (error) {
//     console.log('Error:', error);
//   }
// }

// fetchData();
