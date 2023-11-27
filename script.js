// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var length = parseInt(prompt("Enter the length of password (between 8 - 128 characters"));
  
  if (length < 8 || length > 128) {
    alert ("Invalid. The password should between 8 - 128 characters.");
    return getPasswordOptions();
  } else if (isNaN(length)) {
    alert ("Please enter valid number.");
    return getPasswordOptions();
  } else {
    alert ("The password length is " + length);
  }

  let includeLowercase = confirm("Do you want to include lowercase letter(s) in your password?");

  if (includeLowercase) {
    alert ("Include lowercase letter(s).");
  } else {
    alert ("Not include lowercase letter.");
  }

  let includeUppercase = confirm("Do you want to include uppercase letter(s) in your password?");

  if (includeUppercase) {
    alert ("Include uppercase letter(s).");
  } else {
    alert ("Not include uppercase letter.");
  } 

  let includeNumeric = confirm("Do you want to include numeric character(s) in your passoword?");

  if (includeNumeric) {
    alert ("Include numberic character(s).");
  } else {
    alert ("Not include numberic character.");
  }

  let includeSpecial = confirm("Do you want to include special character(s) in your password?");

  if (includeSpecial) {
    alert ("Include special character(s).");
  } else {
    alert ("Not include special character.");
  }

  if (includeLowercase == false && includeUppercase == false && includeNumeric == false && includeSpecial == false) {
    alert ("Please choose at least 1 character type.");
    return getPasswordOptions();
  } else {
    return {includeLowercase, includeUppercase, includeNumeric, includeSpecial, length};
  }

}

// Function for getting a random element from an array
function getRandom(arr) {
  var random = Math.floor(Math.random() * arr.length);
  return arr[random];
}

// Function to generate password with user input
function generatePassword() {
  var passwordOptions = getPasswordOptions();
  
  const characterType = [];
  if (passwordOptions.includeLowercase) characterType.push(...lowerCasedCharacters);
  if (passwordOptions.includeUppercase) characterType.push(...upperCasedCharacters);
  if (passwordOptions.includeNumeric) characterType.push(...numericCharacters);
  if (passwordOptions.includeSpecial) characterType.push(...specialCharacters);

  let password = "";
  for (let i = 0; i < passwordOptions.length; i++) {
    password += getRandom(characterType);
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
