
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

    if(correctPrompts) {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");

      passwordText.value = password;
    }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






// console.log("You just agreed to create a new password");

// //alert password criteria
//   var passCriteria = window.alert('Select which of the following criterias, you would like to include in your password, make sure to include at least one.');
// //choose password length between # to 128
//   var passLength = paserInt(window.prompt('Please select the length of your password. Choose a number between 8 and 128'));
//   console.log(passLength);
//   if (passLength === "" || passLength === null) {
//     window.alert("you need to input a valid answer, try again.");

//     return generatePassword();

//   } else if (passLength < 8 || passLength > 128) {
//     window.alert("Wrong password length, please try again");

//     return generatePassword();

//   } else if (passLength => 8 || passLength == 128) {
//     window.alert("You chose " + passLength + " as your password length.");
//   }
  
// //prompt choose lowercase, uppercase, numbers, and special characters

// //validate input and minimum requirements for password

// //display password in page
//   return "Generated Password will go here"
// } 