// console.log ("External script loaded")
// const x="sonam"
// console.log(x);
// const a=5;
// const b=6;
// const sum=a+b;
// console.log("sum",sum);
// console.log("Product:multiply");
// const multiply=a*b;
// console.log("Product",multiply);
let x = 7;
let y = 8;
let z = 9;

let result = "";

if (x % 2 == 0) {
    result += "x = 7 is Even<br>";
} else {
    result += "x = 7 is Odd<br>";
}

if (y % 2 == 0) {
    result += "y = 8 is Even<br>";
} else {
    result += "y = 8 is Odd<br>";
}

if (z % 2 == 0) {
    result += "z = 9 is Even<br>";
} else {
    result += "z = 9 is Odd<br>";
}

document.getElementById("result").innerHTML = result;