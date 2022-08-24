//Example fetch using pokemonapi.co
document.querySelector("button").addEventListener("click", getFetch);
//have to put outside the function so it stores on page load
document.querySelector("h3").innerText = localStorage.getItem("books");

function getFetch() {
	const choice = document.querySelector("input").value;
	console.log(choice);
	const url = `https://openlibrary.org/isbn/${choice}.json`;

	fetch(url)
		.then((res) => res.json()) // parse response as JSON
		.then((data) => {
			console.log(data);
			//if nothing in books\
			if (!localStorage.getItem("books")) {
				localStorage.setItem("books", data.title);
			} else {
				//get every book in local storage and add new title
				let books = localStorage.getItem("books") + " ; " + data.title;
				//put new title into local storage to update
				localStorage.setItem("books", books);
			}
			document.querySelector("h3").innerText = localStorage.getItem("books");
		})
		.catch((err) => {
			console.log(`error ${err}`);
		});
}

//REDOOOO
// if (!localStorage.getItem("books")) {
//   localStorage.setItem("books", data.title);
// } else {
//   // get every book already in localStorage then add new title
//   let books = localStorage.getItem("books") + " " + data.title;
//   //put new title into localStorage to update
//   localStorage.setItem("books", books);
// }
// document.querySelector("h3").innerText = localStorage.getItem("books");
