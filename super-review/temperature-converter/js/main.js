//Write your pseduo code first!
//convert from celsius to fahrenheit
//get celsius value
//conversion - store in fahrenheit

document.querySelector("h1").addEventListener("click", convert);

function convert() {
	let usrInput = Number(document.querySelector("input").value);
	let fahrenheit = usrInput * (9 / 5) + 32;
	document.querySelector("h2").innerText = fahrenheit;
}
