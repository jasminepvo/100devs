//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

//find evens
// //fat arrow ES6
// const evens = (numbers) => {
// 	for (const num of numbers) {
// 		if (num % 2 === 0) {
// 			console.log(num);
// 		}
// 	}
// };
// evens([1, 2, 3, 4]);

// //function declaration
// function findEvens(numbers) {
// 	for (const num of numbers) {
// 		if (num % 2 === 0) {
// 			console.log(num);
// 		}
// 	}
// }
// findEvens([1, 2, 3, 4]);

//Leon's solution
function onlyEvens(nums) {
	let evens = [];

	nums.forEach((n) => {
		if (n % 2 === 0) {
			evens.push(n);
		}
	});
	return evens;
}
console.log(onlyEvens([1, 2, 3, 4, 5, 6]));
