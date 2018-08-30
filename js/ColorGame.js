
//declaring global variables
let numSquares = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.getElementById("message");
let header = document.querySelector("h1");
let resetButton = document.getElementById("reset");
let nodeButtons = document.querySelectorAll("node");

init();

function init() {
	for (let i = 0; i < nodeButtons.length; i++) {
	nodeButtons.addEventListener("click", function() {
		nodeButtons[0].classList.remove("selected");
		nodeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		//using ternary operators
		this.textContent === "Hard" ? numSquares = 6 : numSquares = 3;
		reset();
	});
	}

	for (let i = 0; i < squares.length; i++) {
	//add click listeners to squares
	squares[i].addEventListener("click", function() {
	//grab color of clicked square
	let clickedColor = this.style.backgroundColor;
	//compare color to the pickedColor
	if (clickedColor === pickedColor) {
		messageDisplay.textContent = "Yass! Correct!";
		resetButton.textContent = "Play Again?"
		changeColor(pickedColor);
		header.style.backgroundColor = pickedColor;
	}
	else {
		this.style.backgroundColor = "#232323";
		messageDisplay.textContent = "Nope! Try Again";
	}
	});
}
	reset();
}

//changes all colors to the correct color 
function changeColor(color) {
	//loop through all squares
		for (let i = 0; i < squares.length; i++) {
	//change each color to match the correct color
		squares[i].style.backgroundColor = color;
	}
}

//the Color shuffle function: picks a color at random to be the correct color
function shuffleColor() {
	let random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
//generate an array
	let arr = [];
 //repeat num times
	for (var i = 0; i < num; i++) {
	//get random colors and push into arr
	arr.push(randomColor());
	}
	//return arr
	return arr;
}

function randomColor() {
	//pick a "red" from 0 to 255
	let r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 to 255
	let g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 to 255
	let b = Math.floor(Math.random() * 256);
	
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

resetButton.addEventListener("click", function() {
	reset();
});

function reset() {
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = shuffleColor();
	//change colorDisplay to match new color
	colorDisplay.textContent = pickedColor;
	//when the PlayAgain button is clicked, content returns to New Colors
	resetButton.textContent = "New COlors";
	messageDisplay.textContent = "";
	//change color of squares
	for (let i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
	header.style.backgroundColor = "steelblue";
}








