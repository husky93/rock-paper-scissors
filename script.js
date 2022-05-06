/* Coded by Maciek Sroka. 29.04.2022 */

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
    // for(let i = 0; i < 5; i++) {
    //     let playerChoice = prompt('Choose! Rock, Paper or Scissors!');
    //     playerChoice = playerChoice === null ? playerChoice : playerChoice.toLowerCase();
    //     // Check if player is entering correct values
    //     if (playerChoice === null) {
    //         alert('You cancelled the game!');
    //         break;
    //     } else if (playerChoice !== 'rock' && playerChoice !== 'paper' && playerChoice !== 'scissors') {
    //         alert('You can choose only rock, paper or scissors!');
    //         i--;
    //         continue;
    //     }
    //     // Play current round
    //     const roundResult = playRound(playerChoice, computerPlay());
    //     console.log(roundResult);

    //     // Compute game score
    //     if(roundResult.includes('win')) {
    //         ++playerScore; 
    //     } else if (roundResult.includes('lose')) {
    //         ++computerScore;
    //     }

    //     console.log(`Score is:
    // Player: ${playerScore} - Computer: ${computerScore}`);
    // }

    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => button.addEventListener('click', e => {
        console.log(e.target);
    }));

    computerScore > playerScore ? console.log('Game result: Computer wins!') :
            playerScore > computerScore ? console.log('Game result: Player wins!') :
            console.log('Game result: Draw!');
}

game();