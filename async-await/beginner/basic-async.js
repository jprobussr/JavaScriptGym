// Simulate a delay using a promise

const simulateApiCall = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('API call to complete!');
    }, 2000);
  });
};


// Using async/await to handle the promise
const fetchData = async () => {
  try {
    const result = await simulateApiCall();
    console.log(result); // API call complete!
  } catch (error) {
    console.log('Error:', error);
  }
}

fetchData();