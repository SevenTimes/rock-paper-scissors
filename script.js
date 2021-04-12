const choices = ['ROCK', 'PAPER', 'SCISSORS'];
// let playerSelection = prompt('Choose: Rock, Paper or Scissors');
// let computerSelection = computerPlay();

function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  let playerChoice = playerSelection.toUpperCase();
  if (playerChoice === computerSelection) {
    return 'Tied';
  } else if (playerChoice === 'ROCK') {
    if (computerSelection === 'SCISSORS') {
      return 'You win';
    }
    return 'You lose';
  } else if (playerChoice === 'PAPER') {
    if (computerSelection === 'ROCK') {
      return 'You win';
    }
    return 'You lose';
  } else if (playerChoice === 'SCISSORS') {
    if (computerSelection === 'PAPER') {
      return 'You win';
    }
    return 'You lose';
  }
  return 'Please insert correct choice';
}

function game() {
  for (i = 0; i < 5; i++) {
    let playerSelection = prompt('Choose: Rock, Paper or Scissors');
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    console.log(result);
  }
}

// console.log(playRound(playerSelection, computerSelection));
game();
