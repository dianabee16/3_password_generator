// Assignment Code
var generateBtn = document.querySelector("#generate");

// Definition of the characters
var characters = ("");
var uppercase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var lowercase = ("abcdefghijklmnopqrstuvwxyz");
var number = ("0123456789");
var special = (" !#$%&'()*+,-./:;<=>?@[\]^_`{|}~");

// This is the function to generate a password
function generatePassword() {
  var password = ("");

// Generates a prompt for the password length
  var length = parseInt(
    prompt("How many characters (between 8 and 128) would you like your password to contain?")
  );

// If password length input doesn't follow the parameters, a warning will pop-up
    while (isNaN(length) || length < 8 || length > 128) {
      length = parseInt(
        prompt("Invalid! Please enter a number between 8 and 128:")
      );
  }
   
// Password criteria for the user to choose in a confirm dialog
   var includeLowercase = confirm("Would you like to use lowercase letters?");
   var includeUppercase = confirm("Would you like to use uppercase letters?");
   var includeNumber = confirm("Would you like to use numbers?");
   var includeSpecialChars = confirm("Would you like to use special characters?");
  
// This will define a characters set based on the user choices
  if (includeLowercase == true){
    characters += lowercase;
  }
  if (includeUppercase == true){
    characters += uppercase;
  }
  if (includeNumber == true){
    characters += number;
  }
  if (includeSpecialChars == true){
    characters += special;
  }
  else if (includeLowercase == false && includeUppercase == false && includeNumber == false && includeSpecialChars == false){
    alert("Your password must have at least one character type. Let's start again!");
    return;
  }

// Generates a password according to the selected criteria
  var password = ("");
  for (var i = 0; i < length; i++){
    var randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }
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
