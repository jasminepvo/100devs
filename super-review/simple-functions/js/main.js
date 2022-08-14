//---Easy
//create a function that subtracts two numbers and alerts the difference
const subTwoNums = (n1, n2) => alert(n1 - n2);
subTwoNums(2, 3);
//create a function that divides three numbers and console logs the quotient
const dividesThreeNums = (n1, n2, n3) => console.log(n1 / n2 / n3);
dividesThreeNums(3, 4, 5);
//create a function that multiplys three numbers and returns the product
const multiplysThreeNums = (n1, n2, n3) => n1 * n2 * n3;
multiplysThreeNums(2, 4, 5);
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
const addTwoNumsReturnsRemainer = (n1, n2, n3) => (n1 + n2) % n3;
addTwoNumsReturnsRemainer(2, 4, 3);
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
const alotOfStuff = (n1, n2, n3, n4) => {
	let product = n1 * n2;
	if (product > 100) {
		console.log(n3 + n4);
	} else if (product < 100) {
		console.log(n3 - n4);
	} else if (product === 100) {
		alert((n1 * n2 * n3) % n4);
	}
};
