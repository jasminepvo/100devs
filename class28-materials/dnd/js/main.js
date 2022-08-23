//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
	const choice = document.querySelector("input").value;
	const url = `https://www.dnd5eapi.co/api/spells/${choice}`;

	fetch(url)
		.then((res) => res.json()) // parse response as JSON
		.then((data) => {
			console.log(data.subclasses);
			//can't hardcode bc it's an array
			data.subclasses.forEach((obj) => {
				//create an li
				const li = document.createElement("li");
				//add text to li
				li.textContent = obj.name;
				//append the li to the ul
				document.querySelector("ul").appendChild(li);
			});
			//document.querySelector("ul").innerText = data.subclasses[0].name;
		})
		.catch((err) => {
			console.log(`error ${err}`);
		});
}
