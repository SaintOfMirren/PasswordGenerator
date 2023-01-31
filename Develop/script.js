// Assignment code here
// Create array variables of options
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbol = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function generatePassword() {
  var passwordLength = "";
  var choices = [];
  var passwordText = "";
  // Declare lenght of password
  var passwordLength = Number(prompt("Please choose how long your pw needs to be between 8 and 128 characters"));
  if (!passwordLength) {
    alert("Must choose a length");
  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = Number(prompt("Must be between 8 and 128"));
    // Select options for password complexity
  } else {
    passwordType1 = confirm("Do you want lowercase included in your password?");
    passwordType2 = confirm("Do you want uppercase included in your password?");
    passwordType3 = confirm("Do you want numbers included in your password?");
    passwordType4 = confirm("Do you want special characters included in your password?");
  }
  // Setup array of options based on selections above
  if (!passwordType1 && !passwordType2 && !passwordType3 & !passwordType4) {
    alert("Must pick at least one option");
    generatePassword();
  } else {
    if (passwordType1) {
      choices= choices.concat(lowerCase);
    } if (passwordType2) {
      choices = choices.concat(upperCase);
    } if (passwordType3) {
      choices =  choices.concat(number);
    } if (passwordType4) {
      choices = choices.concat(symbol);
    } 
    choices.join("");
    console.log(choices);
    console.log(passwordLength);
    
  }
  // Loop through array of options to choose value
  for (var i = 0; i < passwordLength; i++) {
    passwordText = passwordText + choices[Math.floor(Math.random() * choices.length)];
    console.log(passwordText);
  }
  return passwordText;
};
// Apply password value to document
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
