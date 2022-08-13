//Create an array of movies with at least three movies.
let movies = [
	"bring it on",
	"bring it on again",
	"bring it on: in it to win it",
];

//Using the array from above, store the first movie in a variable
let firstMovie = movies[0];

//Get the length of the original array and store it in a new variable
let movieLength = movies.length();
console.log(movieLength);

//Get the last element in that array and store it in a new variable. What if your array was really large and you didn't know the last index? Would your solution still work?
let lastMovie = movies[movieLength - 1]; //-1 bc index starts at 0
