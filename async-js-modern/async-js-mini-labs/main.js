const setUI = (statusText, outputText) => {
  const statusEl = document.getElementById('status');
  const outputEl = document.getElementById('output');

  statusEl.textContent = statusText;
  outputEl.textContent = outputText;
};

const runLab3 = () => {
  setUI('Button clicked', 'UI update successful');
};


document.getElementById('action-btn').addEventListener('click', runLab3);