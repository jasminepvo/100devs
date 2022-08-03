// declare total variable with starting value of 0
let total = 0; //using let since it will be reassigned multiple times

// get all elements when smurf clicks
document.querySelector("#reset").addEventListener("click", makeZero);
document.querySelector("#apple").addEventListener("click", add3);
document.querySelector("#strawberry").addEventListener("click", add9);
document.querySelector("#mango").addEventListener("click", sub2);
document.querySelector("#kiwi").addEventListener("click", add16);

// make zero and show in result
function makeZero() {
  total = 0;
  document.querySelector("#result").innerText = total;
}

// add3 to total and show in result
function add3() {
  total += 3;
  document.querySelector("#result").innerText = total;
}

// add 9 to total and show in result
function add9() {
  total += 9;
  document.querySelector("#result").innerText = total;
}

// subtract 2 to total and show in result
function sub2() {
  total -= 2;
  document.querySelector("#result").innerText = total;
}

// add another value button - add 16 to total and show in result
function add16() {
  total += 16;
  document.querySelector("#result").innerText = total;
}
