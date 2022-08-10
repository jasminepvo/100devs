// *Variables*
// Create a variable and console log the value
let num = 5;
console.log(num);
//console = 5

// Create a variable, add 10 to it, and alert the value
let num2 = 20;
num2 += 10;
alert(num2);
//alert = 30

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subFourNumsAndAlerts(n1, n2, n3, n4) {
  alert(n1 - n2 - n3 - n4);
}
subFourNumsAndAlerts(5, 1, 2, 1);
//alert = 1

// Create a function that divides one number by another and returns the remainder
function dividesOneNum(n1, n2) {
  return n1 % n2;
}
console.log(dividesOneNum(5, 3));
//console = 2

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwoNums(n1, n2) {
  let sum = n1 + n2;
  if (sum > 50) {
    alert("Jumanji");
  }
}
addTwoNums(50, 1);
//Jumanji

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplysThreeNums(n1, n2, n3) {
  product = n1 * n2 * n3;
  if (product % 3 == 0) {
    alert("ZEBRA");
  }
}
multiplysThreeNums(3, 3, 3);
//ZEBRA

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function takesWordAndNum() {
  word = prompt("Give me a word");
  num = Number(prompt("Give me a num"));
  for (let i = 0; i < num; i++) {
    console.log(word + "");
  }
}
takesWordAndNum();

/*
Leon's code

function logWordXTimes(word, num){
  for (let i = 1; i <= num; i++){
    console.log(word)
  }
}
logWordXTimes('wonderful', 21)
*/
