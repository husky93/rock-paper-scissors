console.log(computerPlay());

function computerPlay() {
    const choice = ['rock', 'paper', 'scissors'];
    const index = Math.floor(Math.random() * 3);    //Get random number between 0-2
    console.log(index);
    return choice[index];
}