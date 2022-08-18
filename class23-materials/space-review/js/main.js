//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let nums = [1, 2, 3, 4];
let sum = nums.reduce((acc, c) => acc + c, 0);
//alert(sum);
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
let newArr = (nums) => nums.map((num) => Math.pow(num, 2));
console.log(nums);

//Create a function that takes string
//Print the reverse of that string to the console

let unoReverse = (str) => console.log(str.split("").reverse().join(""));
//split turns it into an array
//reverse reverses the array
//join turns array back into string

//Create a function that takes in a string
//Alert if the string is a palindrome or not

const palindromeCheck = (str) =>
	alert(str === str.split("").reverse().join(""));

palindromeCheck("petep");
