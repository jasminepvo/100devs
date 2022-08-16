// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = " water ";
favDrink = favDrink.trim();
console.log(favDrink);

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let fruits = ["apple", "banana", "mango"];
// for (let fruit of fruits) {
// 	(fruit = "apple") ? "Match" : "No Match";
// 	console.log(fruit);
// }
console.log(fruits.includes("apple"));

// search() method
// let str = "Bob Duck apple dog"
//console.log(str.search("apple")); //returns -9 or index of where apple starts
// if (str.search('apple') !== -1 ) { //-1 means it does not contain apple
//   console.log('yes')
// } else {
//   console.log('no')
// }

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rps() {
	let random = Math.random(); //random is between 0 and 1 so since we have 3 items to randomize we divide 1 by 3
	if (random < 0.33) {
		return "rock"; //rock is 0 - .33
	} else if (random < 0.66) {
		return "paper"; //paper is .33 - .66
	} else {
		return "scissors"; //scissors is .66 - 1
	}
}
rps();

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function checkWin(playerChoice) {
	let botChoice = rps(); //assign to function created above
	if (
		(playerChoice === "rock" && botChoice === "scissors") ||
		(playerChoice === "paper" && botChoice === "rock") ||
		(playerChoice === "scissors" && botChoice === "paper")
	) {
		console.log("You win.");
	} else if (playerChoice === botChoice) {
		console.log("We tied..");
	} else {
		console.log("YOU LOSEEEEEEE SUCKAAAAA!!!");
	}
}
checkWin("rock");

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function playGameXTimes(choices) {
	choices.forEach((choice) => checkWin(choice));
}
playGameXTimes(["rock", "paper", "scissors"]);
