const url = 'https://apis.scrimba.com/jsonplaceholder/posts';

const getPosts = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Request Failed');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
};

getPosts();
