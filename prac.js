const awardBonuses = () => {
  for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`${i} - JACKPOT! 1 MILLION DOLLORS`);
    } else if (i % 3 === 0) {
      console.log(`${i} - Vacation!`);
    } else if (i % 5 === 0) {
      console.log(`${i} - $100,000 bonus!`);
    } else {
      console.log(`${i} - :(`);
    }
  }
};

awardBonuses();