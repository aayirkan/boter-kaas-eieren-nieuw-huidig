console.log("Tic Tac Toe")

const myBtn = document.querySelector('.resetName');
myBtn.addEventListener('click', myFunction);

const playerOneLabel = document.querySelector('.player1');
const playerTwoLabel = document.querySelector('.player2');

let player1Points = 0;
let player2Points = 0;
let playerOneName = "";
let playerTwoName = "";
let playerOnePlaying = true;

// let playerOne = prompt("Wat is de naam van speler 1?")
// let playerTwo = prompt("Wat is de naam van speler 2?")

// Haal met queryselectorAll alle div's met de class 'box'
// op en stop die in een variable

const fields = document.querySelectorAll('.box');
console.log("fields: " + fields.length);

// loop nu door fields en zet in elke div een X

for (let i = 0; i < fields.length; i++) {
	const field = fields[i];

	console.log(field);
	field.textContent = "";//i + 1;
	field.addEventListener('click', function () {
		boxClicked(i);
	});
}
const winningConditions = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

function boxClicked(index) {
	// alert("Geklikt op vakje " + index);
	const field = fields[index];

	// Alleen als het veldje leeg is, dus geen X of O
	
	if(field.innerText != "") {

		return;
	
	  }

	if (playerOnePlaying) {
		field.textContent = "X";
		playerOnePlaying = false;
	} else {
		field.textContent = "O";
		playerOnePlaying = true;
	}
}



// playerOneName = prompt(' in wat wil je Speler 1 naam veranderen');
// playerOneLabel.innerHTML = 'Player 1:' + playerOneName + "<br>";
// playerOneLabel.innerHTML += 'Score:'+ player1Points;

// playerTwoName = prompt('in wat wil je Speler 2 naam veranderen');
// playerTwoLabel.innerHTML = 'Player 2:' + playerTwoName + "<br>";
// playerTwoLabel.innerHTML += 'Score:'+ player2Points;

function myFunction() {
	playerOneName = prompt(`Wat word de nieuwe naam van ${playerOne}?`);
	playerOneLabel.innerHTML = 'Player 1:' + playerOneName + "<br>";
	playerOneLabel.innerHTML += 'Score:' + player1Points;

	playerTwoName = prompt(`Wat word de nieuwe naam van ${playerTwo}?`)
	playerTwoLabel.innerHTML = 'Player 2:' + playerTwoName + "<br>";
	playerTwoLabel.innerHTML += 'Score:' + player2Points;
}

