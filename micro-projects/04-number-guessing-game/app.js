const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const message = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');
const resetBtn = document.getElementById('resetBtn');
const guessForm = document.getElementById('guessForm');
const themeToggleBtn = document.getElementById('themeToggle');

let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const updateAttemptsDisplay = () => {
  attemptsDisplay.textContent = `Attempts: ${attempts}`;
};

const setGameDisabled = (disabled) => {
  guessInput.disabled = disabled;
  guessBtn.disabled = disabled;
};

const updateMessageState = (text, className) => {
  message.textContent = text;
  message.classList.remove('high', 'low', 'correct');

  if (className) {
    message.classList.add(className);
  }
};

const handleGuess = () => {
  const userGuess = Number(guessInput.value);

  attempts++;
  updateAttemptsDisplay();

  if (userGuess === secretNumber) {
    updateMessageState(`Correct! The number was ${secretNumber} 🎉`, 'correct');
    setGameDisabled(true);
  } else if (userGuess > secretNumber) {
    updateMessageState('Too High! Try again.', 'high');
  } else {
    updateMessageState('Too low! Try again.', 'low');
  }
};

const resetGame = () => {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;

  updateAttemptsDisplay();
  updateMessageState('Start guessing!', '');
  setGameDisabled(false);

  guessInput.value = '';
};

guessForm.addEventListener('submit', (event) => {
  event.preventDefault();
  handleGuess();
});

resetBtn.addEventListener('click', resetGame);

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

updateAttemptsDisplay();
updateMessageState('Start guessing!', '');
