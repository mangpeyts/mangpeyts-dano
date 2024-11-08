let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  loses: 0,
  ties: 0
};

updateScoreElemet();
/*if (!score) {
  score = {
    wins: 0,
    loses: 0,
    ties: 0
  };
}
*/
JSON.parse(localStorage.getItem('score'));

function updateScoreElemet() {
  document.querySelector('.js-score')
  .innerHTML = `Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`;
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose';
    } else if (computerMove === 'paper') {
      result = 'You win';
    } else if (computerMove === 'scissors') {
      result = 'It\'s a tie';
    }
  }
  
  else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win';
    } else if (computerMove === 'paper') {
      result = 'It\'s a tie'; 
    } else if (computerMove === 'scissors') {
      result = 'You lose';
    }
  }

  else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'It\'s a tie';
    } else if (computerMove === 'paper') {
      result = 'You lose';
    } else if (computerMove === 'scissors') {
      result = 'You win'
    }
  }

  if(result === 'You win') {
    score.wins += 1;
  } else if(result === 'You lose') {
    score.loses += 1;
  } else if(result === 'It\'s a tie') {
    score.ties += 1;
  }

  const scoreJson = JSON.stringify(score);
  
  localStorage.setItem('score', scoreJson);
  
  document.querySelector('.js-result').innerHTML = `You
<img class="move-icon" src="images-for-RSP/${playerMove}-emoji.png">
vs
<img class="move-icon" src="images-for-RSP/${computerMove}-emoji.png">
Computer`;

  document.querySelector('.js-move').innerHTML = result;

  updateScoreElemet();

  /*
  alert(`You picked ${playerMove}. The computer picked ${computerMove}. ${result}.
Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`);
  */
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 0.3) {
    computerMove = 'rock';
    //alert(randomNumber);
    //console.log(randomNumber);
  } else if (randomNumber >= 0.3 && randomNumber < 0.6) {
    computerMove = 'paper';
    //alert(randomNumber);
    //console.log(randomNumber);

  } else if (randomNumber >= 0.6 && randomNumber < 1) {
    computerMove = 'scissors';
    //alert(randomNumber);
    //console.log(randomNumber);
  }
  return computerMove;
}

function resetScore() {
  score.wins = 0;
  score.loses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  //alert('The score was reset.');
  document.querySelector('.js-score')
  .innerHTML = `The score was reset`;
  
  //return alert(`Wins: 0, Loses: 0, Ties: 0`);
}