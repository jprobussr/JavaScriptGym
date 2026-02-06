const fetchPost = async () => {
  const statusEl = document.getElementById('status');
  const outputEl = document.getElementById('output');

  statusEl.textContent = 'Loading...';
  outputEl.textContent = '';

  try {
    const response = await fetch(
      'https://apis.scrimba.com/jsonplaceholder/posts/1',
    );
    const data = await response.json();

    outputEl.textContent = data.title;
    statusEl.textContent = 'Done!';
  } catch (err) {
    statusEl.textContent = 'Something went wrong';
    outputEl.textContent = err.message;
  }
};

document.getElementById('action-btn').addEventListener('click', fetchPost);