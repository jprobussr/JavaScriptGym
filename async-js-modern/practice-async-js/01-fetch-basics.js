const url = 'https://apis.scrimba.com/jsonplaceholder/posts/';


const getPosts = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
};

getPosts();