//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let nums = [1, 2, 3, 4];
let sum = nums.reduce((acc, c) => acc + c, 0);
alert(sum);
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
const numbers = (numbers) => {
	for (const num of nums) {
		num = num ** 2;
	}
};
numbers([1, 2, 3, 4]);

//Create a function that takes string
//Print the reverse of that string to the console

//Create a function that takes in a string
//Alert if the string is a palindrome or not
