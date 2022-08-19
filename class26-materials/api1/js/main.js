//Example fetch using pokemonapi.co
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
	// fetch("https://api.goprogram.ai/inspiration/")
	// 	.then((res) => res.json()) // parse response as JSON
	// 	.then((data) => {
	// 		console.log(data);
	// 	})
	// 	.catch((err) => {
	// 		console.log(`error ${err}`);
	// 	});
	var url = "https://api.goprogram.ai/inspiration";

	var xhr = new XMLHttpRequest();
	xhr.open("GET", url);

	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
			console.log(xhr.status);
			console.log(xhr.responseText);
			document.querySelector("h2").innerText = xhr.responseText;
		}
	};

	console.log(typeof xhr.responseText);
	xhr.send();
}
