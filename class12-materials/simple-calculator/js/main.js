let total = 0;

document.querySelector("#pumpkin").addEventListener("click", makeZero);
document.querySelector("#dominosPizza").addEventListener("click", jumanji);
document.querySelector("#zebra").addEventListener("click", add9);
document.querySelector("#cantThinkOfAnything").addEventListener("click", sub2);
document.querySelector("#utOh").addEventListener("click", add16);

function makeZero() {
  total = 0;
  document.querySelector("#placeToPutResult").innerText = total;
}

function jumanji() {
  total = total + 3;
  document.querySelector("#placeToPutResult").innerText = total;
}

function add9() {
  total = total + 9;
  document.querySelector("#placeToPutResult").innerHTML = total;
}

function sub2() {
  total = total - 2;
  document.querySelector("#placeToPutResult").innerHTML = total;
}

function add16() {
  total = total + 16;
  document.querySelector("#placeToPutResult").innerHTML = total;
}

// declare total variable with starting value of 0
// get all elements when smurf clicks
// make zero and show in result
// add3 to total and show in result
// add 9 to total and show in result
// subtract 2 to total and show in result
// add another value button
