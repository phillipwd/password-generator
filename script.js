
//DON'T TOUCH THIS CODE! This code is adding click handlers and DOM manipulation to the page.  Edit the generatePassword function and all should work properly.
// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");

//this function will fire when you click the generate password button on the page.  I've set it to alert "You've clicked a button" and return a password of password for now. Update it to make your password
function generatePassword() {
    //YOUR CODE HERE
    var nums;
    var sp;
    var low;
    var up;
    var options = 0;
    while(options===0){
        nums = confirm("Would you like to use numbers?");
        sp = confirm("Would you like to use special characters?");
        low = confirm("Would you like to use lower case letters?");
        up = confirm("Would you like to use upper case letters?");
        options = nums+sp+low+up;
        if(options===0){
            alert("Please select character type(s)");
        }
    }
    var len = prompt("How many characters would you like? Choose 8-128");
    var numbers = [1,2,3,4,5,6,7,8,9]; //is numbers
    var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];//is letters    
    var special = ["!","#","$","%","&","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];//is characters

    var poss = [];

    if(nums){
        poss = poss + numbers;       
        // console.log(poss[0]);
    }

    if(sp){
        poss = poss + special;
        // console.log(poss[0]);
    }

    if(low){
        poss = poss + letters;
        // console.log(poss[0]);
    }
    
  
    alert("ive been clicked");
    // return "password";
}

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