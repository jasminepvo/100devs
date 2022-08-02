document.querySelector("#check").addEventListener("click", check);

function check() {
  const day = document.querySelector("#day").value;

  if (day === "Tuesday" || day === "Thursday") {
    alert("CLASS DAY!");
  } else if (day === "Saturday" || day === "Sunday") {
    alert("Weekend!");
  } else {
    alert("BORRRINNNNGGGGG!!!!");
  }
}
