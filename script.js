// console.log("External script loaded successfully!");
// const x="Shiv"; 
// console.log(x);
// const a = 5;
// const b = 10;
// const sum = a + b;
// console.log("sum:",sum);
// const multiply = a * b;
// console.log("Product:",multiply);
// const remainder = a % b;
// console.log("Remainder:",remainder);
// //if x=7,y=8,z=9. Find if they are even number or odd number
// const p = 7;
// const q = 8;
// const r = 9;

// if (p % 2 == 0) {
//     console.log(p + " is an even number");
// } else {
//     console.log(p + " is an odd number");
// }

// if (q % 2 == 0) {
//     console.log(q + " is an even number");
// } else {
//     console.log(q + " is an odd number");
// }

// if (r % 2 == 0) {
//     console.log(r + " is an even number");
// } else {
//     console.log(r + " is an odd number");
// }

// let num = 5
// if (num === 5) {
//     console.log("number");
// } else if (num == 5) {
//     console.log("string");
// }

// function displayname(name) {
//     console.log("My name is", name);
// }
// displayname("Shivnarayan");
// function sum(a, b) {
//     console.log("The sum is:", a + b);
// }
// sum(4, 10);

// function product(a, b) {
//     console.log("The product is:", a * b);
// }
// product(4, 10);

// function remainder(a, b) {
//     console.log("The remainder is:", a % b);
// }
// remainder(4, 10);

// function checkEvenOdd(num){
//     return num % 2;
// }
// let x = 5;
// let result = checkEvenOdd(x);
// if (result == 0) {
//     console.log(x + " is an even number");
// } else {
//     console.log(x + " is an odd number");
// }
//abc
//create a function to check if a number is even or odd

// let x = prompt("Enter any number to check odd or even");
// let result = checkEvenOdd(x);
// if (result == 0) {
//     alert(x + " is an even number");
// } else {
//     alert(x + " is an odd number");
// }
// function checkEvenOdd(num){
//     return num % 2;
// }
// let i;

// for (i = 0; i < 10; i++) {
//     if (i == 3) break  ;
//     console.log(`The value of i is ${i}`);
// }

// console.log(`The value of i is ${i}`);
// for ( i = 1; i <= 10; i++) {
//     if (i == 3) continue;
//     console.log(`2 × ${i} = ${2 * i}`);
// }

// let i=1;
// while (i <= 10) {
//     console.log(`2 × ${i} = ${2 * i}`);
//     i++;
// }
// let num = Number(prompt("Enter a number:"));
// let i = 1;

// while (i <= 10) {
//     console.log(`${num} × ${i} = ${num * i}`);
//     i++;
// }
// let fruits = ["Apple", "Mango", "Banana"];

// console.log(fruits[0]);
// console.log(fruits[1]); 
// console.log(fruits[2]); 

// let fruits = ["Apple", "Mango", "Banana", "Orange"];
// fruits.push("coconut");
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
//     console.log(fruits.length);
// }
let fruits = ["Apple", "Mango", "Banana", "Orange"];
fruits.pop();
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
    console.log(fruits.length);
}

