/* Coded by Maciek Sroka. 29.04.2022 */

const buttons = document.querySelectorAll('.btn-rps');
const btnContainer = document.querySelector('.btn-container');
const playAgainButton = document.createElement('button');
playAgainButton.textContent = 'Play again';

game(buttons, btnContainer, playAgainButton);


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

function game(buttons, btnContainer, playAgainButton) {
    let playerScore = 0;
    let computerScore = 0;

    const roundResultText = document.querySelector('.roundresult');
    const playerScoreText = document.querySelector('.playerscore');
    const computerScoreText = document.querySelector('.computerscore');

    playerScoreText.textContent = ('0');
    computerScoreText.textContent = ('0');

    buttons.forEach(button => button.addEventListener('click', e => {
        const roundResult = playRound(e.target.innerText, computerPlay());

        if(roundResult.includes('lose')) ++computerScore;
        if(roundResult.includes('win')) ++playerScore;
        playerScoreText.textContent = playerScore;
        computerScoreText.textContent = computerScore;

        if(playerScore === 5 || computerScore === 5) {
            roundResultText.textContent = `Game over ${playerScore === 5 ? 'player' : computerScore === 5 ? 'computer' : ''} wins`;
            buttons.forEach(button => btnContainer.removeChild(button));
            btnContainer.appendChild(playAgainButton);
            return;
        } 
        else {
            roundResultText.textContent = roundResult;
        }
    }));
    
    buttons.forEach(button => btnContainer.appendChild(button));
}
