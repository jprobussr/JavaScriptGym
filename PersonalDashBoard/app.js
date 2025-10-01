fetch(
  'https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature'
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data.user.name)
    document.body.style.backgroundImage = `url(${data.urls.full})`;
    document.getElementById('author').textContent = `Image By: ${data.user.name}`;
  });
