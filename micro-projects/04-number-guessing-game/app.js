const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const message = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');
const resetBtn = document.getElementById('resetBtn');
const guessForm = document.getElementById('guessForm');
const themeToggleBtn = document.getElementById('themeToggle');

let secretNumber = Math.floor(Math.random() * 100) + 1
let attempts = 0;

console.log(guessForm)

guessForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const userGuess = Number(guessInput.value);

  attempts++;

  attemptsDisplay.textContent = `Attempts: ${attempts}`;

  if (userGuess === secretNumber) {
    message.textContent = `Correct! The number was ${secretNumber} 🎉`;

    guessInput.disabled = true;
    guessBtn.disabled = true;
  } else if (userGuess > secretNumber) {
    message.textContent = 'Too high! Try again.';
  } else {
    message.textContent = 'Too low! Try again.';
  }
});

resetBtn.addEventListener('click', () => {
  secretNumber = Math.floor(Math.random() * 100) + 1
  attempts = 0;

  attemptsDisplay.textContent = 'Attempts: 0';

  message.textContent = 'Start guessing!';

  guessInput.disabled = false;
  guessBtn.disabled = false;

  guessInput.value = '';
});
