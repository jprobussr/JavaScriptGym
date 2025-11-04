const startCountDown = (device) => {
  let secondsRemaining = 3;

  const shutdownTimer = setInterval(() => {
    if (secondsRemaining > 0) {
      console.log(`Your ${device} will shut down in ${secondsRemaining}.`);
      secondsRemaining--;
    } else {
      console.log(`Your device is shutting down.`);
      clearInterval(shutdownTimer);
    }
  }, 1000);
};

startCountDown('MacBook');


