// *Variables*
// Declare a variable, assign it a value, and alert the value
let num = 0;
alert(num);

// Create a variable, divide it by 10, and console log the value
let num2 = 20;
num2 /= 10;
console.log(num2);

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function multiplysThreeNums(n1, n2, n3) {
  alert(n1 * n2 * n3);
}
multiplysThreeNums(1, 2, 3); //6

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function takesFourNums(n1, n2, n3, n4) {
  console.log(n1 + n2 - n3 - n4);
}
takesFourNums(5, 5, 3, 4); //3

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function takesThreeNums(n1, n2, n3) {
  sum = (100 + n1 - n2) / n3;
  if (sum > 25) {
    console.log("WE HAVE A WINNA");
  }
}
takesThreeNums(4, 5, 1); // 99 so "WE HAVE A WINNA"

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function alertTypeOfDay() {
  let day = prompt("What is the day?").toLowerCase();
  switch (day) {
    case ("monday", "tuesday", "wednesday", "thursday", "friday"):
      console.log("weekday");
      break;
    case ("saturday", "sunday"):
      console.log("weekend");
      break;
    default:
      console.log("Try again!");
  }
}
alertTypeOfDay();

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function takesOneNum(n1) {
  for (let i = 1; i >= n1; i * 3) {
    console.log(i);
  }
}
takesOneNum();

/* or?
let i = 1;
  while(i <= n1) {
    console.log(i*3)
  }
*/
