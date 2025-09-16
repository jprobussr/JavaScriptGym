fetch('https://apis.scrimba.com/jsonplaceholder/posts')
  .then((response) => response.json())
  .then((data) => {
    const postArr = data.slice(0, 5);
    let html = '';

    for (let post of postArr) {
      html += `
                <h2>${post.title}</h2>
                <p>${post.body}</p>

                <hr />
            `;
    }
    document.getElementById('blog-list').innerHTML = html;
  });

const form = document.getElementById('post-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.getElementById('post-title').value;
  const body = document.getElementById('post-body').value;

  const postObj = {
    title: title,
    body: body,rc
  };

  console.log(postObj);

  const blogList = document.getElementById('blog-list')
  blogList.innerHTML = `
  <h2>${postObj.title}</h2>
  <p>${postObj.body}</p>
  <hr />
  ` + blogList.innerHTML;

  form.reset()
});
