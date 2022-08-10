//---Easy
//create a function that subtracts two numbers and alerts the difference
function subtractsTwo(num1, num2) {
  let product = num1 - num2;
  alert(product);
}
subtractsTwo(10, 6);

//create a function that divides three numbers and console logs the quotient
function dividesThreeNumbers(n1, n2, n3) {
  console.log(n1 / n2 / n3);
}
dividesThreeNumbers(40, 4, 5);

//create a function that multiplys three numbers and returns the product
function multiplysThreeNumbers(n1, n2, n3) {
  return n1 * n2 * n3;
}
console.log(multiplysThreeNumbers(2, 3, 6));

//another example of return function
function turnIntoMoney() {
  let result = multiplysThreeNumbers(2, 3, 6);
  alert("$" + result);
}
turnIntoMoney();

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function returnRemainderOfThreeNumbers(n1, n2, n3) {
  return (n1 + n2) % n3;
}
console.log(returnRemainderOfThreeNumbers(4, 2, 5));

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function fourNums(n1, n2, n3, n4) {
  let sum1 = n1 * n2;
  if (sum1 > 100) {
    console.log(n3 + n4);
  } else if (sum1 < 100) {
    console.log(n3 - n4);
  } else if ((sum1 = 100)) {
    console.log((n1 * n2 * n3) % n4);
  }
}

console.log(fourNums(20, 8, 4, 5));
