"use strict"; // treal all JS code as newer version

// alert(3+3);
let num = prompt(3+3);
// console.log(num);



let userName = prompt("Please enter your name:", "Guest");

if (userName !== null) {
    console.log(`Hello, ${userName}!`);
} else {
    console.log("User canceled the prompt.");
}