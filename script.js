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
    let playerScore = 0;
    let computerScore = 0;
    const playerScoreSelector = document.querySelector('.playerscore');
    const computerScoreSelector = document.querySelector('.computerescore');
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => button.addEventListener('click', e => {
        const roundResult = playRound(e.target.innerText, computerPlay());

        if(roundResult.includes('lose')) ++computerScore;
        if(roundResult.includes('win')) ++playerScore;

        playerScoreSelector.textContent = (`Player: ${playerScore}`);
        computerScoreSelector.textContent = (`Computer: ${computerScore}`);
    }));


}

game();