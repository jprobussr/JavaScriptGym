// Fetch from real API

const fetchDogImage = async () => {
  const url = `https://dog.ceo/api/breeds/image/random`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data.message);
  } catch (error) {
    console.log('Error fetching data:', error);
  }
};

fetchDogImage();

// const fetchPosts = async () => {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     const posts = await response.json();
//     console.log(posts);
//   } catch (error) {
//     console.error('Error fetching posts', error);
//   }
// };

// fetchPosts();
