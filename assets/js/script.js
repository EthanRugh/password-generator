var buttonEl = document.querySelector("#generate");
var textContent = document.querySelector("#password");
var letterLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var letterUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var symbol = ["!", "@", "#", "$", "%", "&", "*", "?"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var passwordLength = 0;
var newLibrary = []
var generatedPassword = "";

var passwordType = function() {
    var passLength = prompt("how long password");
    passLength = parseInt(passLength, 10);
    if(isNaN(passLength)) {
        alert("invalid. nan")
        return;
    }if (passLength < 8 || passLength > 128) {
        alert("invalid")
        return;
    }else {
        console.log(passLength)
        passwordLength = passLength;
    }
    
    //Lowercase letters
    var passLower = confirm("Do you want lowercase?");
    if (passLower == true) {
        newLibrary.push(letterLower);
    }
    // uppercase letters
    var passUpper = confirm("Do you want uppercase?");
    if (passUpper == true) {
        newLibrary.push(letterUpper);
    }
    // symbol
    var passSymbol = confirm("do you want symbols?");
    if (passSymbol == true) {
        newLibrary.push(symbol);
    }
    // numbers
    var passNum = confirm("do you want to include numbers?");
    if (passNum == true) {
        newLibrary.push(numbers);
    }
    if(passLower == false && passUpper == false && passSymbol == false && passNum == false) {
        alert("Invalid. Please select at least one of the options");
        passwordType();
    }else {
        generatePassword();
    }
}

var generatePassword = function() {
    // create empty string to hold password
    let password = "";
    // iterate over given length
    for(let i = 0; i < passwordLength; i++) {
        let randomListIndex = Math.floor(Math.random() * newLibrary.length); // index = 3
        let newList = newLibrary[randomListIndex]; // library[3] = ["1", "2", ....]

        let randomIndex = Math.floor(Math.random() * newList.length);
        let newChar = newList[randomIndex];
        password += newChar;
    }
    
        // iterate over library
            // make a random number between 0 & length of library
            // save corresponding indexed item (array) in library

        //  make a random number between 0 &
        //  grab item in __uppercase__ list at index {rando}
        //let newChar = letterUpper[randomIndex];
        //  place at end of password
        //password += newChar;
    //}
        // (1) password = ""
        //  decide on random character
            //  make a random number between 0 & 25, rando = 4,
            //  grab item in __uppercase__ list at index {rando}, uppercase[4] = "D"
            //  place at end of password, password = "D"
            // continue
        // (2) password = "D"
        //  decide on random character
            //  make a random number between 0 & 25, rando = 25,
            //  grab item in __uppercase__ list at index {rando}, uppercase[15] = "Z"
            //  place at end of password, password = "DZ"
            // continue
        // (3) password = "DZ"
        //  decide on random character
            //  make a random number between 0 & 25, rando = 1,
            //  grab item in __uppercase__ list at index {rando}, uppercase[1] = "B"
            //  place at end of password, password = "DZB"
            // continue


    // return generated password
    generatedPassword = password;
    document.getElementById("password").innerHTML = generatedPassword;
    return password;
}
 
buttonEl.addEventListener("click", passwordType);
