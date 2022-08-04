//Write your pseduo code first!

//only on click
document.querySelector("#convert").addEventListener("click", check);

function check() {
  //get value out of input
  let temp = document.querySelector("#celsius").value;
  //convert the value
  temp = temp * (9 / 5) + 32;
  //show value to user
  document.querySelector("#result").innerText = temp;
}
