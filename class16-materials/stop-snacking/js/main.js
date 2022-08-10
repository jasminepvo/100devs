//Create a function that grabs the number of snacks from the input and tells you to stop that many times

document.querySelector("#help").addEventListener("click", stopSnacking);

function stopSnacking() {
  //grab num of snacks and make sure it's a number
  let numOfSnacks = Number(document.querySelector("input").value);

  //reset each time you click, make it empty first
  document.querySelector("#stops").innerText = "";

  //loop until we have the num of snacks we have
  for (let i = 1; i <= numOfSnacks; i++) {
    //each time this runs, tell the user to stop
    document.querySelector("#stops").innerText += " STOP!";
  }
}
