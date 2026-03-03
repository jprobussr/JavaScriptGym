const themeToggleBtn = document.getElementById('themeToggle');
const textArea = document.getElementById('message');
const countDisplay = document.getElementById('count');
const limitDisplay = document.getElementById('limit');
const statusText = document.getElementById('status');

const maxLength = 120;

textArea.addEventListener('input', () => {
  const currentLength = textArea.value.length;
  countDisplay.textContent = currentLength;

  if (currentLength > maxLength) {
    statusText.textContent = 'Over limit ❌';
    statusText.classList.add('over-limit');
    countDisplay.classList.add('over-limit');
  } else {
    statusText.textContent = 'Within limit ✅';

    statusText.classList.remove('over-limit');
    countDisplay.classList.remove('over-limit');
  }
});

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// themeToggleBtn.addEventListener('click', () => {
//   if (document.body.classList.contains('dark')) {
//     document.body.classList.remove('dark');
//   } else {
//     document.body.classList.add('dark');
//   }
// });
