var letterLower = ("a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z");
var letterUpper = ("A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z");
var symbol = ("!, @, #, $, %, &, *, ?");

var passwordType = function() {
    var passLength = prompt("how long password");
    if (passLength == isNaN) {
        alert("invalid. nan")
    }if (passLength < 8 || passLength > 128) {
        alert("invalid")
    }else {
        console.log(passLength)
    }
    var passLower = prompt("Do you want lowercase?");
    if (passLower === "yes") {
        console.log("lowercase letters");
    }else {
        console.log("no lowercase")
    }
    var passUpper = prompt("Do you want uppercase?");
    if (passUpper === "yes") {
        console.log("uppercase letters");
    }else {
        console.log("no uppercase")
    }
    var passSymbol = prompt("do you want symbols?");
    if (passSymbol === "yes") {
        console.log("symbols");
    }else {
        console.log("no symbols")
    }
    var passNum = prompt("do you want to include numbers?");
    if (passNum === "yes") {
        console.log("numbers");
    }else {
        console.log("no nums")
    }
}
passwordType();   