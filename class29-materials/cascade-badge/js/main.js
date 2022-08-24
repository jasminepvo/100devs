//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console.
let pokemonParty = ["pikachu", "charmander", "squirtle"];
function reverseList(pokemonParty) {
	console.log(pokemonParty.reverse());
}
reverseList(pokemonParty);

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
//2 array of numbers, sum of squared

function compareSquareAndCube(a, b) {
	return (
		a.reduce((acc, c) => acc + c ** 2, 0) >
		b.reduce((acc, c) => acc + c ** 3, 0)
	);
}
compareSquareAndCube([2, 2, 2], [2, 2, 2]);

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]
//can 22/0, -6/1, 32/2, 82/3, 9/4, 25/5 ?

function isMultiple(arr) {
	return arr.filter((element, index) => element % index === 0);
}

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.
function sumOfValue(arr) {
	return arr.reduce((acc, c) => acc + Number(c), 0);
}
sumOfValue(["5", 3, "2", 1]);

//codewars brain
const s = (r) => r.reduce((a, c) => +a + +c);
