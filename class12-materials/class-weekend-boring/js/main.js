document.querySelector("#check").addEventListener("click", check);

function check() {
  const day = document.querySelector("#day").value.toLowerCase;

  if (day === "tuesday" || day === "thursday") {
    alert("CLASS DAY!");
  } else if (day === "saturday" || day === "sunday") {
    alert("Weekend!");
  } else {
    alert("BORRRINNNNGGGGG!!!!");
  }
}

//Handle capital letters, place results in DOM, add a check for humpday (Wed)
