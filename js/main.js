console.log("Tic Tac Toe")

const myBtn = document.querySelector('.resetName');
// myBtn.addEventListener('click', myFunction);

function resetBoard() {

	// Reset tiles
	for (let i = 0; i < playfieldArray.length; i++) {
		let tile = fields[i];
		tile.innerHTML = "";
	}
	currentPlayer = "X"; // Start with X
	playfieldArray = [false, false, false, false, false, false, false, false, false];
	location.reload()
}

const resetButton = document.querySelector(".resetBoard"); //A button to reset the game
resetButton.addEventListener("click", resetBoard); // Add an event listener to the reset button

const playerOneLabel = document.querySelector('.player1');
const playerTwoLabel = document.querySelector('.player2');

let player1Points = "X";
let player2Points = "O";
// let playerOneName = "";
// let playerTwoName = "";
let currentPlayer = "X";
let gameEnded = false;

let playerTurn = 1;

let playfieldArray = [false, false, false, false, false, false, false, false, false];


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

	checkWinner();
}

function checkWinner(currentPlayer) {

	let winningConditions = [
		[0, 1, 2],// First horizontal row
		[3, 4, 5],// Second horizontal row
		[6, 7, 8],// Third horizontal row
		[0, 3, 6],// First vertical row
		[1, 4, 7],// Second vertical row
		[2, 5, 8],// Third vertical row
		[0, 4, 8],// First diagonal row
		[2, 4, 6],// Second diagonal row
	]



	for (let i = 0; i < winningConditions.length; i++) {
		let matchCounter = 0;


		const firstSymbol = fields[winningConditions[i][0]].textContent;

		const array = winningConditions[i];
		//n is number
		let nOne = array[0];
		let nTwo = array[1];
		let nThree = array[2];

		if (playfieldArray[nOne] == currentPlayer && playfieldArray[nTwo] == currentPlayer && playfieldArray[nThree] == currentPlayer) {
			alert(currentPlayer + " wint!");
			gameEnded = true;

		}
	}
}

// const winningConditions = [
// 	[0, 1, 2],
// 	[3, 4, 5],
// 	[6, 7, 8],
// 	[0, 3, 6],
// 	[1, 4, 7],
// 	[2, 5, 8],
// 	[0, 4, 8],
// 	[2, 4, 6],
// ];


function boxClicked(index) {
	console.log("Box clicked");

	const field = fields[index];
	if (gameEnded == false) {
		if (playerTurn == 1 && playfieldArray[index] == false) {
			//speler 1(X)
			currentPlayer = "X";
			playerTurn = 2;
			playfieldArray[index] = `X`;
			field.textContent = currentPlayer;
			checkWinner(`X`);
		} else if (playerTurn == 2 && playfieldArray[index] == false) {
			//speler 2 (O)
			currentPlayer = "O";
			playerTurn = 1;
			playfieldArray[index] = `O`;
			field.textContent = currentPlayer;
			checkWinner(`O`);
		}
		console.log(playfieldArray)
	}
}




// playerOneName = prompt(' in wat wil je Speler 1 naam veranderen');
// playerOneLabel.innerHTML = 'Player 1:' + playerOneName + "<br>";
// playerOneLabel.innerHTML += 'Score:'+ player1Points;

// playerTwoName = prompt('in wat wil je Speler 2 naam veranderen');
// playerTwoLabel.innerHTML = 'Player 2:' + playerTwoName + "<br>";
// playerTwoLabel.innerHTML += 'Score:'+ player2Points;

// function myFunction() {
// 	playerOneName = prompt(`Wat word de nieuwe naam van ${playerOne}?`);
// 	playerOneLabel.innerHTML = 'Player 1:' + playerOneName + "<br>";
// 	playerOneLabel.innerHTML += 'Score:' + player1Points;

// 	playerTwoName = prompt(`Wat word de nieuwe naam van ${playerTwo}?`)
// 	playerTwoLabel.innerHTML = 'Player 2:' + playerTwoName + "<br>";
// 	playerTwoLabel.innerHTML += 'Score:' + player2Points;
// }

function changePlayer() {

	currentPlayer = "X"

}




function myFunction() {

	playerOneName = prompt(' in wat wil je Speler 1 naam veranderen');

	playerOneLabel.innerHTML = 'Player 1:' + playerOneName + "<br>";

	playerOneLabel.innerHTML += 'Symbol:' + player1symbol;



	playerTwoName = prompt('in wat wil je Speler 2 naam veranderen');

	playerTwoLabel.innerHTML = 'Player 2:' + playerTwoName + "<br>";

	playerTwoLabel.innerHTML += 'Symbol:' + player2symbol;

}

