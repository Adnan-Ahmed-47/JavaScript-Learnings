// Functions -> jo bhi code likha hai 10, 20, 30 line ka, usko ek package mein band karke, woh package aap jahan chahe jitni baar chahe copies le jaa sakte hain, aur woh kaam jo function mein likha hua hai multiple times kar sakte hain. For eg:

//  If I want these lines to run 10 times, so we need to write this 10 times, so here comes functions
// console.log("A")
// console.log("d")
// console.log("n")
// console.log("a")
// console.log("n")

//  first keyword named function, then the name same as variable, then parenthesis (), then scope {}, i.e., function definition.

// Function definition
function sayMyName() {
    console.log("A")
    console.log("d")
    console.log("n")
    console.log("a")
    console.log("n")
}

// Calling the function sayMyName is the reference of the function, and () means function execution, whenever we write () after function reference, that means its an execution of that function
// sayMyName -> Reference
// () -> Execution

// sayMyName()

// -----------------------------------------------------------------
function addTwoNumbers(number1, number2) { // parameters
    console.log(number1 + number2)
}
// addTwoNumbers(3, 4) // arguments

// addTwoNumbers() // NaN
// addTwoNumbers(3, "4") // 34 -> type conversion, we need to add check if/else in the function, will learn afterwards
// addTwoNumbers(3, "a") // 3a -> type conversion
// addTwoNumbers(3, null) // 3 -> type conversion

// NOTE: When u make a function definition, so whatever inputs we take in it, is called parameters. On the other hand, when u call a function, so we pass the values in it, is called an argument.
// -----------------------------------------------------------------

function addTwoNums(number1, number2) { 
    console.log(number1 + number2)  // 8
}
// const result = addTwoNums(3, 5) 

// console.log("Result: ", result) // undefined

// As you can see, the result variable value is undefined here, because, the 8 is coming from the function console, the result value is undefined because the function has not returned a value yet.
// -----------------------------------------------------------------

function addTwoNos(number1, number2) { 
    // let result = number1 + number2;
    // console.log(result) // 8
    // return result;

    // One more easy way for the above lines of code is:
    return number1 + number2;
}
const result = addTwoNos(3, 5) 

// console.log("Result: ", result) // 8

// NOTE: IF you write any lines of code after return statement in a function, it will not execute that code.

// -----------------------------------------------------------------

// function loginUserMessage(username) {
//     // to check the parameter type and then proceed with the execution
//     // if(username === undefined) { // in place of this we use mostly the below line which is given
//     if(!username) {
//         console.log("Please enter a username")
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("Adnan")) // Adnan just logged in
// console.log(loginUserMessage("")) //   just logged in
// console.log(loginUserMessage()) // undefined just logged in


// NOTE: When u don't pass any value to the function, it returns undefined, not null.

// NOTE: If we want to avoid the user giving nothing, then we give the default value to the parmeter as given below:

function loginUserMessage(username = "sam") { // or username = ""

    if(!username) {
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage()) // undefined just logged in
