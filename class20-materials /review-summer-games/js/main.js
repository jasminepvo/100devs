//Create a function that takes in an array of numbers. Multiply each number together and alert the product.
// const multiply = (arr) => {

// }

// for (const arr of myArray) {
// 	console.log(arr);
// }

function multiNumsInArr(arr) {
	let product = 1;
	arr.forEach((num) => (product *= num));
	alert(product);
}
multiNumsInArr([2, 3, 4]);
