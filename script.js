function computerPlay() {
    const choice = ['rock', 'paper', 'scissors'];
    const index = Math.floor(Math.random() * 3);    //Get random number between 0-2
    return choice[index];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    switch (true) {
        case(playerSelection === 'rock' && computerSelection === 'paper'):
            return 'You lose! Paper beats rock.';
       
        case(playerSelection === 'rock' && computerSelection === 'scissors'):
            return 'You win! Rock beats scissors.';

        case(playerSelection === 'paper' && computerSelection === 'rock'):
            return 'You win! Paper beats rock.';

        case(playerSelection === 'paper' && computerSelection === 'scissors'):
            return 'You lose! Scissors beat paper.';

        case(playerSelection === 'scissors' && computerSelection === 'rock'):
            return 'You lose! Rock beats scissors.';

        case(playerSelection === 'scissors' && computerSelection === 'paper'):
            return 'You win! Scissors beat paper.';

        default:
            return `Draw! You both chose ${playerSelection}.`;
    }
}

function game() {
    let computerScore = 0;
    let playerScore = 0;
    for(let i = 0; i < 5; i++) {
        let playerChoice = prompt('Choose! Rock, Paper or Scissors!');
        playerChoice = playerChoice === null ? playerChoice : playerChoice.toLowerCase();
        if(playerChoice === null) {
            alert('You cancelled the game!');
            break;
        } else if(playerChoice !== 'rock' || playerChoice !== 'paper' || playerChoice !== 'scissors') {
            alert('You can choose only rock, paper or scissors!');
            i--;
            continue;
        }
        console.log(`Score is:
        Player: ${playerScore} - Computer: ${computerScore}`);
    }
    computerScore > playerScore ? console.log('Computer wins!') ? playerScore > computerScore: console.log('Player wins!') : console.log('Draw!');
}

game();