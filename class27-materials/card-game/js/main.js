//create a game called war that compares two cards and higher wins,
//global variable
let deckId = "";

//Grabs the desk and stores the deck in global variable
fetch(`https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
	.then((res) => res.json()) // parse response as JSON
	.then((data) => {
		console.log(data);
		deckId = data.deck_id;
	})
	.catch((err) => {
		console.log(`error ${err}`);
	});

//on click of button, draw two cards from that deck
document.querySelector("button").addEventListener("click", drawTwo);

function drawTwo() {
	const url = `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`;

	fetch(url)
		.then((res) => res.json()) // parse response as JSON
		.then((data) => {
			console.log(data);
			//put images of cards on DOM
			document.querySelector("#player1").src = data.cards[0].image;
			document.querySelector("#player2").src = data.cards[1].image;

			//get values from each card
			let player1Val = convertToNum(data.cards[0].value);
			let player2Val = convertToNum(data.cards[1].value);

			convertToNum();
			if (player1Val > player2Val) {
				document.querySelector("h3").innerText = "Player 1 Wins";
			} else if (player1Val < player2Val) {
				document.querySelector("h3").innerText = "Player 2 Wins";
			} else {
				document.querySelector("h3").innerText = "Time for War!";
			}
		})
		.catch((err) => {
			console.log(`error ${err}`);
		});
}

//helper function to return the face cards as numbers
function convertToNum(val) {
	if (val === "ACE") {
		return 14;
	} else if (val === "KING") {
		return 13;
	} else if (val === "QUEEN") {
		return 12;
	} else if (val === "JACK") {
		return 11;
	} else {
		return Number(val);
	}
}
