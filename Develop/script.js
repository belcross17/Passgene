
// Assignment code here
var characterlength = 8;
var choiceArr = [];

var specialCharArr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '~','[', ']', '{','}', ':', ';', '<', '>', '/', '?', '`', '\\', '|','+',];
var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y','z'];
var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y','Z'];
var numberArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];


function generatePassword() {
  var password = "";
  for(var i = 0; i < characterlength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;
}

function getPrompts() {
  choiceArr = [];
  characterlength = parseInt(prompt("how many characters do you want your paassword to be? between 8 - 128"));

  if(isNaN(characterlength) || characterlength < 8 || characterlength > 128) {
    alert("you need to input a valid answer, try again.");
    return false;
  }

  if (confirm("Would you like lowercase letters in your password?")) {
    choiceArr = choiceArr.concat(lowerCaseArr);
  }
  if (confirm("Would you like uppercase letters in your password?")) {
    choiceArr = choiceArr.concat(upperCaseArr);
  }
  if (confirm("Would you like special characters in your password?")) {
    choiceArr = choiceArr.concat(specialCharArr);
  }
  if (confirm("Would you like numbers in your password?")) {
    choiceArr = choiceArr.concat(numberArr);
  }
  return true;

}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var correctPrompts = getPrompts(); //checking for true or false
    var passwordText = document.querySelector("#password");

    if(correctPrompts) {
      var newPassword = generatePassword();
      passwordText.value = newPassword;
    } else {
        passwordText.value = "";
    }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
