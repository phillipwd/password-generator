
//DON'T TOUCH THIS CODE! This code is adding click handlers and DOM manipulation to the page.  Edit the generatePassword function and all should work properly.
// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");

//this function will fire when you click the generate password button on the page.  I've set it to alert "You've clicked a button" and return a password of password for now. Update it to make your password
function generatePassword() {
    //YOUR CODE HERE
    var nums = confirm("Would you like to use numbers?");
    var sp = confirm("Would you like to use special characters?");
    var low = confirm("Would you like to use lower case letters?");
    var up = confirm("Would you like to use upper case letters?");
    var len = prompt("How many characters would you like? Choose 8-128");
    var numbers = [1,2,3,4,5,6,7,8,9] //is numbers
    var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];//is letters    
    var special = ["!","#","$","%","&","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"]//is characters

    var poss = [];
    
    // for (i = 0; i < inputsValue[4]; i++){
    //     //works from
    //     var types = Math.floor(Math.random()*inputsValue.length); // picks number from short array

        // console.log(typeArray.length);
        
        // console.log("types is " + types);// shows number
        // console.log(typeArray[types]); // shows variable name
        // to
    }
  
    alert("ive been clicked");
    // return "password";
// }

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    copyBtn.removeAttribute("disabled");
    copyBtn.focus();
}

function copyToClipboard() {
    // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER