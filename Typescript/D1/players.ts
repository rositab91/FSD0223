let randomNumber: number = Math.round(Math.random() * (100 - 1) + 1);
let player1: number = Math.round(Math.random() * (100 - 1) + 1);
let player2: number = Math.round(Math.random() * (100 - 1) + 1);

console.log('The drawn number is ' + randomNumber);
console.log('The number of player 1 is ' + player1);
console.log('The number of player 2 is ' + player2);

if (player1 == randomNumber) {
    console.log('The winner is: player 1!')
} else if (player2 == randomNumber) {
    console.log('The winner is: player 2!')
} else if (player1 == player2) {
    console.log('You both gave the same number, try again!')
} else if ((randomNumber - player1) > (randomNumber - player2)) {
    console.log('Neither player guessed the number, but player 1 came closest!')
} else if ((randomNumber - player1) < (randomNumber - player2)) {
    console.log('Neither player guessed the number, but player 2 came closest!')
}