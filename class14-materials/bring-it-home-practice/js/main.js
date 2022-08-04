// *Variables*
// Create a variable and console log the value
let num = 4;
console.log(num);

// Create a variable, add 10 to it, and alert the value
let num2 = 4;
num2 += 10;
alert(num2);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractsFourNumbers(n1, n2, n3, n4) {
  product = n1 - n2 - n3 - n4;
  alert(product);
}
subtractsFourNumbers(20, 2, 4, 3);

// Create a function that divides one number by another and returns the remainder
function dividesOneNumber(n1, n2) {
  return n1 % n2;
}
console.log(dividesOneNumber(5, 2));

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addsTwoNumbers(n1, n2) {
  const sum = n1 + n2;

  if (sum > 50) alert("Jumanji");
  else alert("Not Jumanji");
}
addsTwoNumbers(50, 5);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplysThreeNumbers(n1, n2, n3) {
  product = n1 * n2 * n3;

  if (product % 3 == 0) alert("ZEBRA");
  else alert("PANDA");
}
multiplysThreeNumbers(3, 3, 3);
