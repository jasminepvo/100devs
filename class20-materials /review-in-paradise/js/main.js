// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let food = "pizza";
food = "fruit";
alert(food);

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
const fName = "jasmine";
alert(fName.charAt(1));

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
const product = (n1, n2, n3) => alert((n1 / n2) * n3);
product(4, 5, 2);

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
const cube = (n1) => console.log(Math.pow(n1, 3)); //Math.cbrt() //toFixed(4) will give 4 decimal places
cube(3);

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
const monthAlert = (month) => {
	if ((month = "june" || "july" || "august")) {
		alert("YAY");
	} else {
		alert("Boo");
	}
};
monthAlert("june");

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
const skipsFive = (n) => {
	for (let i = 1; i < n; i++) {
		if (i % 5 !== 0) {
			console.log(i);
		}
	}
};
skipsFive(25);
