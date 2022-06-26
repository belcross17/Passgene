
// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("You just agreed to create a new password");

//prompt password criteria

//choose password length between # to 128

//prompt choose lowercase, uppercase, numbers, and special characters

//validate input and minimum requirements for password

//display password in page
  return "Generated Password will go here"
} 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

