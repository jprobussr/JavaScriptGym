// Simulate fetching data from three different APIs
const fetchData1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data from first API');
    }, 1000);
  });
};

const fetchData2 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data from Second API');
    }, 2000);
  });
};

const fetchData3 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data from API number 3');
    }, 3000);
  });
};

const fetchAllData = async () => {
  try {
    const results = await Promise.all([
      fetchData1(),
      fetchData2(),
      fetchData3(),
    ]);
    console.log(results);
  } catch (e) {
    console.log(e);
  }
};

fetchAllData();
