// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var passwordLength = 8;
var passwordArray = [];

var lowerCase = ['a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCare =['A', 'B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var numbers = ['1','2','3','4','5','6','7','8','9','0'];
var spCharacter = ['!','@','#','$','%','^','&','*','(',')','~', '{','}','[',']'];

// 1. Prompt the user for password criteria
//  a. password length between 8 and 128.
//  b. lowercase, uppercase, numbers, special characters
// 2. Validate and test the input.
// 3. Generate password based on criteria.

// 4.Display password to the page.  



// Write password to the #password input
function writePassword() {
  var correctCriteria = getCriteria();
  var passwordText = document.querySelector("#password");

  if (correctCriteria) {
  var newPassword = generatePassword();
  passwordText.value = newPassword;

} else {
  passwordText.value ='';
}
}
function generatePassword() {
  var password = '';
  for( var i =0; i< passwordLength; i++) {
    var randomIndex = Math.floor (Math.random() * passwordArray.length);
    password = password + passwordArray [randomIndex];
  }
  return password;

} 
function getCriteria() {
  passwordLength = parseInt(prompt('How many characters do you want your password to be? (8-128 characters'))

  if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) { 
    alert ("Password length has to be a number and between 8-128 characters. ");
    return false;
  }
  if (confirm ("Would you like lowercase letters in your password?")){
    passwordArray = passwordArray.concat (lowerCase);

  }
  if (confirm('would  you like upperCase letters in you password?')){
    passwordArray = passwordArray.concat(upperCare);
  
  }
  if (confirm ('Would you like special characters in you password?')) {
    passwordArray= passwordArray.concat(spCharacter);
  }
  if (confirm('Would you like numbers in your password?' )) {
    passwordArray=passwordArray.concat(numbers);
  }
  return true;

}
