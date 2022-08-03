document.querySelector("#check").addEventListener("click", check);

function check() {
  // handle capital letters
  const day = document.querySelector("#day").value.toLowerCase();
  let result;
  // check date
  if (day === "tuesday" || day === "thursday") {
    result = "CLASS DAY!";
  } else if (day === "saturday" || day === "sunday") {
    result = "Weekend!";
  } else if (day === "wednesday") {
    // add a check for humpday
    result = "HUMPPPP DAYYYY🐪🐪🐪🐪";
  } else {
    result = "BORRRINNNNGGGGG!!!!";
  }

  //place results in DOM
  document.querySelector("#placeToSee").innerText = result;
}
