// get elements
document.getElementById("lavender").onclick = partyLavender;
document.getElementById("seashell").onclick = partySeashell;
document.getElementById("cyan").onclick = partyCyan;
document.getElementById("blush").onclick = partyBlush;

// make background lavender with tan text
function partyLavender() {
  document.querySelector("body").style.backgroundColor = "lavender";
  document.querySelector("h1").style.color = "tan";
  document.querySelector("h2").style.color = "tan";
}

// make background seashell with tan text
function partySeashell() {
  document.querySelector("body").style.backgroundColor = "seashell";
  document.querySelector("h1").style.color = "tan";
  document.querySelector("h2").style.color = "tan";
}

// make background cyan with tan text
function partyCyan() {
  document.querySelector("body").style.backgroundColor = "lightcyan";
  document.querySelector("h1").style.color = "tan";
  document.querySelector("h3").style.color = "tan";
}

// make backgroud blush with tan text
function partyBlush() {
  document.querySelector("body").style.backgroundColor = "lavenderblush";
  document.querySelector("h1").style.color = "tan";
  document.querySelector("h2").style.color = "tan";
}
