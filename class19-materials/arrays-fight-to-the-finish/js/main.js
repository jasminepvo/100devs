//Create an array of movie titles. Loop through the array and add each element to the h2.
let movies = ["Bring it on", "Bring it on again", "Fight to the finish"];
for (let i = 0; i < movies.length; i++) {
	document.querySelector("h2").innerText += movies[i];
}

//Create an array of numbers. Loop through the array and add three to each number and replace the old number.
let arrOfNums = [10, 20, 30];

arrOfNums.forEach((item, i) => {
	arrOfNums[i] = item + 3;
});

//Find the average of all the numbers from question two
// let sum = 0;
// arrOfNums.forEach((num) => {
//   sum += num;
// })

let sum = 0;

for (let i = 0; i < arrOfNums.length; i++) {
	sum += arrOfNums[i];
}
console.log(sum / arrOfNums.length); //60 / 3 = 20
