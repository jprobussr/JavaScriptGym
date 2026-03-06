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

const updateMessage = (text) => {
  message.textContent = text;
};

const setGameDisabled = (disabled) => {
  guessInput.disabled = disabled;
  guessBtn.disabled = disabled;
};

const handleGuess = () => {
  const userGuess = Number(guessInput.value);

  attempts++;
  updateAttemptsDisplay();

  if (userGuess === secretNumber) {
    updateMessage(`Correct! The number was ${secretNumber} 🎉`);
    setGameDisabled(true);
  } else if (userGuess > secretNumber) {
    updateMessage('Too High! Try again.');
  } else {
    updateMessage('Too low! Try again.');
  }
};

const resetGame = () => {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;

  updateAttemptsDisplay();
  updateMessage('Start guessing!');
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
updateMessage('Start guessing!');