const tipForm = document.getElementById('tipForm');
const billInput = document.getElementById('bill');
const tipInput = document.getElementById('tip');
const peopleInput = document.getElementById('people');
const tipAmountDisplay = document.getElementById('tipAmount');
const totalAmountDisplay = document.getElementById('totalAmount');
const perPersonDisplay = document.getElementById('perPerson');
const themeToggleBtn = document.getElementById('themeToggle');

tipForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const billValue = parseFloat(billInput.value);
  const tipValue = parseFloat(tipInput.value);
  const peopleValue = parseInt(peopleInput.value);

  if (Number.isNaN(billValue) || billValue <= 0) return;
  if (Number.isNaN(tipValue) || tipValue < 0) return;
  if (Number.isNaN(peopleValue) || peopleValue < 1) return;

  const tipAmount = billValue * (tipValue / 100);
  const totalAmount = billValue + tipAmount;
  const perPersonAmount = totalAmount / peopleValue;

  tipAmountDisplay.textContent = `$${tipAmount.toFixed(2)}`;
  totalAmountDisplay.textContent = `$${totalAmount.toFixed(2)}`;
  perPersonDisplay.textContent = `$${perPersonAmount.toFixed(2)}`;
});

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
