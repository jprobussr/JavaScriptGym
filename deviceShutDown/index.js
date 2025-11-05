const startCountDown = (device) => {
  let secondsRemaining = 3;
  const message = document.getElementById('message');

  message.textContent = `Your ${device} will shut down in ${secondsRemaining}...`;

  const shutdownTimer = setInterval(() => {
    if (secondsRemaining > 1) {
      secondsRemaining--;
      message.textContent = `Your ${device} will shut down in ${secondsRemaining}...`;
    } else {
      message.textContent = `Your ${device} is shutting down... 💻`;
      clearInterval(shutdownTimer);
    }
  }, 1000);
};

document.getElementById('startBtn').addEventListener('click', () => {
  startCountDown('iPhone');
});
