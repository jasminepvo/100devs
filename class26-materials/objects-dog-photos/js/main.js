fetch("https://dog.ceo/api/breeds/image/random")
	.then((res) => res.json()) // parse response as JSON
	.then((data) => {
		console.log(data);
		document.querySelector("img").src = data.message;
	})
	.catch((err) => {
		console.log(`error ${err}`);
	});
