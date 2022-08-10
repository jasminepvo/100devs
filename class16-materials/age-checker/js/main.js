//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too
/*
let age = 30;

if (age < 16) console.log("You can not drive");
else if (age < 18)
  console.log(
    "Can't hate from outside the club, because you can't even get in"
  );
else if (age < 21) console.log("Can't drink");
else if (age < 25) console.log("Can't rent cars afforadbly");
else if (age < 30) console.log("Can't rent fancy cars affordably");
else console.log("There is nothing left to look forward too");
*/

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph

document.querySelector("h1").addEventListener("click", print);

function print() {
  printResult = result();
  document.querySelector("p").innerText = printResult;
}

function result() {
  const age = document.querySelector("#danceDanceRevolution").value;
  if (age < 16) return "You can not drive";
  else if (age < 18)
    return "Can't hate from outside the club, because you can't even get in";
  else if (age < 21) return "Can't drink";
  else if (age < 25) return "Can't rent cars afforadbly";
  else if (age < 30) return "Can't rent fancy cars affordably";
  else return "There is nothing left to look forward too";
}
