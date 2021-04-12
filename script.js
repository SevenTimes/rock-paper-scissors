const choices = ['ROCK', 'PAPER', 'SCISSORS'];
const btns = Array.from(document.querySelectorAll('button'));

function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}

btns.forEach((btn) =>
  btn.addEventListener('click', () => {
    let cpuChoice = computerPlay();
    let playerChoice = btn.id;
    if (playerChoice === cpuChoice) {
      console.log('Tied');
    } else if (playerChoice === 'ROCK') {
      if (cpuChoice === 'SCISSORS') {
        console.log('You Win');
      } else {
        console.log('You Lose');
      }
    } else if (playerChoice === 'PAPER') {
      if (cpuChoice === 'ROCK') {
        console.log('You Win');
      } else {
        console.log('You Lose');
      }
    } else if (playerChoice === 'SCISSORS') {
      if (cpuChoice === 'PAPER') {
        console.log('You Win');
      } else {
        console.log('You Lose');
      }
    }
  })
);

// function playRound(playerSelection, cpuChoice) {
//   let playerChoice = playerSelection.toUpperCase();
//   if (playerChoice === cpuChoice) {
//     return 'Tied';
//   } else if (playerChoice === 'ROCK') {
//     if (cpuChoice === 'SCISSORS') {
//       return 'You win';
//     }
//     return 'You lose';
//   } else if (playerChoice === 'PAPER') {
//     if (cpuChoice === 'ROCK') {
//       return 'You win';
//     }
//     return 'You lose';
//   } else if (playerChoice === 'SCISSORS') {
//     if (cpuChoice === 'PAPER') {
//       return 'You win';
//     }
//     return 'You lose';
//   }
//   return 'Please insert correct choice';
// }
