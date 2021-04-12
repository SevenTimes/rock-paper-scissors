const choices = ['ROCK', 'PAPER', 'SCISSORS'];
const btns = Array.from(document.querySelectorAll('button'));
const result = document.querySelector('.result');
const scoreBoard = document.querySelector('.score-board');
let cpuScore = 0;
let playerScore = 0;

function reset() {
  cpuScore = 0;
  playerScore = 0;
}

function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function score(a) {
  result.textContent = a;
  switch (a) {
    case 'Win':
      playerScore++;
      break;
    case 'Lose':
      cpuScore++;
      break;
    default:
      break;
  }
  if (playerScore >= 5) {
    alert("You've won!");
    reset();
  } else if (cpuScore >= 5) {
    alert("You've lost!");
    reset();
  }
  scoreBoard.textContent = `SCORE: ${playerScore} - ${cpuScore}`;
}

btns.forEach((btn) =>
  btn.addEventListener('click', () => {
    let cpuChoice = computerPlay();
    let playerChoice = btn.id;
    if (playerChoice === cpuChoice) {
      score('Tie');
    } else if (playerChoice === 'ROCK') {
      if (cpuChoice === 'SCISSORS') {
        score('Win');
      } else {
        score('Lose');
      }
    } else if (playerChoice === 'PAPER') {
      if (cpuChoice === 'ROCK') {
        score('Win');
      } else {
        score('Lose');
      }
    } else if (playerChoice === 'SCISSORS') {
      if (cpuChoice === 'PAPER') {
        score('Win');
      } else {
        score('Lose');
      }
    }
  })
);
