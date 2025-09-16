const ideaBox = document.getElementById('bored-idea');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  fetch('https://apis.scrimba.com/bored/api/activity')
    .then((response) => response.json())
    .then((data) => {
      ideaBox.textContent = data.activity;
    })
    .catch((error) => {
      ideaBox.textContent = 'Oops! Something went wrong 😢';
      console.error(error);
    });
});
