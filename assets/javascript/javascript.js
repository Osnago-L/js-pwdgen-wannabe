function recommendPassFunction() {
    let myName= prompt("Please enter your name")
    let mySurname= prompt("Please enter your surname")
    let myColour= prompt("Please enter your favorite colour")
    document.getElementById("suggested-pass").innerHTML = myName + mySurname + myColour + 22;
  }