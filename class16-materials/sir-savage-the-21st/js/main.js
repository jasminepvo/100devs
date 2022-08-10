//Create a function that has a loop that prints '21' 21 times to the console and then call that function
//Bonus can you make it print '21' 21 times to the dom?

function savage21() {
  for (i = 0; i < 21; i++) {
    document.querySelector("#savageSays").innerText += " 21";
  }
}
savage21();

//go back later make it a button you click and have voice
