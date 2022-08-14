// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

let nums = [10, 20, 30, 40, 50];

function checkFirstAndLast(nums) {
	if (nums[0] < nums[nums.length - 1]) {
		alert("Hi");
	} else if (nums[0] > nums[nums.length - 1]) {
		alert("Bye");
	} else {
		alert("We close in an hour");
	}
}
