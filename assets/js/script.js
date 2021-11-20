var buttonEl = document.querySelector("#generate");
var textContent = document.querySelector("#password");
var letterLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var letterUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var symbol = ["!", "@", "#", "$", "%", "&", "*", "?"];
var mumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

var passwordType = function() {
    var passLength = prompt("how long password");
    if (passLength == isNaN) {
        alert("invalid. nan")
        return;
    }if (passLength < 8 || passLength > 128) {
        alert("invalid")
        return;
    }else {
        console.log(passLength)
    }
    
    //Lowercase letters
    var passLower = confirm("Do you want lowercase?");
    if (passLower == true) {
        console.log("lowercase letters");
    }else {
        console.log("no lowercase");
    }
    
    var passUpper = confirm("Do you want uppercase?");
    if (passUpper == true) {
        console.log("uppercase letters");
    }else {
        console.log("no uppercase");
    }
    
    var passSymbol = confirm("do you want symbols?");
    if (passSymbol == true) {
        console.log("symbols");
    }else {
        console.log("no symbols");
    }
    
    var passNum = confirm("do you want to include numbers?");
    if (passNum == true) {
        console.log("numbers");
    }else {
        console.log("no nums");
    }
    if(passLower == !true && passUpper == !true && passSymbol == !true && passNum == !true) {
        alert("Invalid. Please select at least one of the options");
        passwordType();
    }else {
        generatePassword();
    }
}

var generatePassword = function() {
    console.log("its working");
}
 
buttonEl.addEventListener("click", passwordType);