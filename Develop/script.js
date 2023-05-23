// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var length = prompt("How many characters (between 8 and 128) would you like your password to contain?");


  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
