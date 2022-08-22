//TEMPLATE FOR APIs
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
	const url = `https://api.goprogram.ai/inspiration`;

	fetch(url)
		.then((res) => res.json()) // parse response as JSON
		.then((response) => {
			console.log(response);
			document.querySelector("h2").innerText = response.quote;
		})
		.catch((err) => {
			console.log(`error ${err}`);
		});
}
