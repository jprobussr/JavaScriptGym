const quotes = [
  {
    text: 'Success is not final, failure is not fatal.',
    author: 'Winston Churchill',
  },
  {
    text: 'Stay hungry, stay foolish.',
    author: 'Steve Jobs',
  },
  {
    text: 'Simplicity is the soul of efficiency.',
    author: 'Austin Freeman',
  },
  {
    text: 'First solve the problem. Then write the code.',
    author: 'John Johnson',
  },
  {
    text: 'Experience is the name everyone gives to their mistakes.',
    author: 'Oscar Wilde',
  },
];

const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');
const newQuoteBtn = document.getElementById('newQuoteBtn');
const themeToggleBtn = document.getElementById('themeToggle');

const getRandomQuote = () => {
  const randIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randIndex];

  quoteText.textContent = `"${randomQuote.text}"`;
  quoteAuthor.textContent = `- ${randomQuote.author}`;
};

newQuoteBtn.addEventListener('click', getRandomQuote);

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

getRandomQuote();