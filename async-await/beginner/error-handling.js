// Multiple Promises with error handling

// Simulate asynchronous tasks
const fetchDataFromAPI1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data from API 1');
    }, 1500);
  });
};

const fetchDataFromAPI2 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Error fetching data from API2');
    }, 1000);
  });
};

const fetchData = async () => {
  try {
    const result1 = await fetchDataFromAPI1();
    console.log(result1);
  } catch (error) {
    console.error('Error in API1:', error);
  }

  try {
    const result2 = await fetchDataFromAPI2();
    console.log(result2);
  } catch (error) {
    console.error('Error in API 2', error);
  }
};


fetchData();