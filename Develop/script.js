
// Assignment code here
var characterlength = 8;
var choiceArr = [];

var specialCharArr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '~','[', ']', '{','}', ':', ';', '<', '>', '/', '?', '`', '\\', '|','+',];
var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y','z'];
var uppercaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y','Z'];
var numberArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];


function generatePassword() {
  
}

function getPrompts() {
  characterlength = parseInt(prompt("how many characters do you want your paassword to be? between 8 - 128"));
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

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