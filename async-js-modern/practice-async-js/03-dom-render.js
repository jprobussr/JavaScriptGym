const url = 'https://apis.scrimba.com/jsonplaceholder/posts';

const postsEl = document.getElementById('posts');

const renderPosts = (posts) => {
  const html = posts
    .slice(0, 15)
    .map((post) => {
      return `<p>${post.title}</p>`;
    })
    .join('');

  postsEl.innerHTML = html;
};

const getPosts = async () => {
  try {
    postsEl.textContent = 'Loading...';
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Request failed');
    }
    const data = await response.json();
    renderPosts(data);
    console.log(data);
  } catch (error) {
    postsEl.textContent = 'Failed to get posts';
    console.error(error.message);
  }
};

getPosts();