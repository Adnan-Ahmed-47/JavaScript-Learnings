//  Control Flow - Conditionals:
// -> Everytime the whole code shouldn't run, it should be run, based on the logic, as if we are logged in, some block of code should execute, similarly, if we are logged out, another flow should run etc.

// if
// const userLoggedIn = true

// if(2 == "2") {
//     console.log("== executed")
// }
// if(2 === "2") { // type checking
//     console.log("=== executed")
// }
// 3 != 2
// <, >, >=, <=, ==, !=, ===, !==

// if(2 !== 3) {
//     console.log("== executed")
// }
// if(2 !== "3") { // type checking
//     console.log("=== executed")
// }

// --------------------------------------
// const temperature = 41;

// if(temperature < 50) {
//     console.log("less than 50")
// }
// console.log("temperature is greater than 50")

// --------------------------------------
// const temperature = 41;

// if(temperature < 50) {
//     console.log("less than 50")
// } else {
//     console.log("temperature is greater than 50")
// }

// ----------------------------------------------------
// Scope based condtionals
// const score = 200

// if(score > 100) {
//     // var power = "fly" // if we use var, then the scope goes outside the local block
//     const power = "fly"
//     console.log(`User power: ${power}`)
// }
// console.log(`User power: ${power}`) // power not defined, bcoz we cannot access the values from child scope to the global scope

// ----------------------------------------------------------
// short hand notation

// const balance = 1000;

// if(balance > 500) console.log("test"), console.log("test2"); // we cannot write multiple lines of stmts or code

// if(balance < 500) {
//     console.log("less than 500")
// } else if(balance < 750) {
//     console.log("less than 750")
// } else if(balance < 900) {
//     console.log("less than 900")
// } else {
//     console.log("less than 1200")
// }

// ------------------------------------------------------------------

const userLoggedIn = true
const debitCard = true 
const loggedInFromGoogle = false 
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==3) {
    console.log("allow to buy course")
}

if(loggedInFromEmail || loggedInFromGoogle) {
    console.log("User logged in")
}