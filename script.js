/* Coded by Maciek Sroka. 29.04.2022 */

let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('.btn-rps');
const btnContainer = document.querySelector('.btn-container');
const playAgainButton = document.createElement('button');
const roundResultText = document.querySelector('.roundinfo');
const playerScoreText = document.querySelector('.playerscore');
const computerScoreText = document.querySelector('.computerscore');
playAgainButton.textContent = 'Play again';
playAgainButton.classList.add('playagain');

buttons.forEach(button => button.addEventListener('click', e => rpsButtonOnClick(e)));
playAgainButton.addEventListener('click', () => playAgain());



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

function changeTextScore() {
    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
}

function endGame() {
    roundResultText.textContent = `Game over ${playerScore === 5 ? 'player' : computerScore === 5 ? 'computer' : ''} wins`;
    buttons.forEach(button => btnContainer.removeChild(button));
    btnContainer.appendChild(playAgainButton);
    playerScore = 0;
    computerScore = 0;
}

function rpsButtonOnClick(e) {
    const roundResult = playRound(e.target.innerText, computerPlay());
    
    if(roundResult.includes('lose')) ++computerScore;
    if(roundResult.includes('win')) ++playerScore;
    changeTextScore();
    
    if(playerScore === 5 || computerScore === 5) endGame();
    else roundResultText.textContent = roundResult;
}

function playAgain() {
    btnContainer.removeChild(playAgainButton);
    buttons.forEach(button => btnContainer.appendChild(button));
    changeTextScore();
}
