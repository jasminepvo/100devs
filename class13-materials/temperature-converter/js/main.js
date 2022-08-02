//Write your pseduo code first!
// show it - put back in DOM

document.querySelector("#convert").addEventListener("click", convert);

function convert() {
  //get value in celsius
  let temp = document.querySelector("#celsius").value;
  //convert from celsius to fahrenheight (x * 9/5) + 32
  temp = temp * (9 / 5) + 32;
  //show it - put it back in DOM
  document.querySelector("#conversion").innerText = temp;
}
