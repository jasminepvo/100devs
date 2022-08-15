//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let powerRangers = ["Mighty Morphin", "Alien Rangers", "Zeo"];

powerRangers.forEach((show) => console.log(show));
//Create and array of numbers
let nums = [21, 56, 88, 24, 99, 710];

//Return a new array of numbers that includes every even number from the previous Arrays
let onlyEvens = (arr) => arr.filter((n) => n % 2 === 0);
console.log(onlyEvens(nums));

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function sumSecondLowAndHigh(arr) {
	let sorted = arr.sorted((a, b) => a - b);
	alert(sorted[1] + sorted[sorted.length - 2]);
}
sumSecondLowAndHigh([2, 3, 4, 5, 6]);
