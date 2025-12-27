const gameNightFood = {
    "🍕 pizza": 30, 
    "🌮 tacos": 10, 
    "🥗 salads": 7,
    "🍝 pasta": 5
}

const findTheWinner = obj => {
  let highestTotalVotes = 0;
  let winningItem = '';

  for (let food in obj) {
    if (obj[food] > highestTotalVotes) {
      highestTotalVotes = obj[food];

      winningItem = food;
    }
  }
  return `The winner is ${winningItem} with ${highestTotalVotes} votes!`
}

console.log(findTheWinner(gameNightFood));