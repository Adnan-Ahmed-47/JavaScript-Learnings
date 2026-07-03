// Nested scopes 

// NOTE: nested scope is something like icecream lene jaisa, bache badon se icecream maang sakte hain, par bade, bachon se ice cream nahi mang sakte, so in the below function, the bigger is one() and the child is two(), so two() can access the values or icecream from one(), bcoz for two(), one() is only the global scope, so the vice versa isn't possible.

// NOTE: JavaScript code is executed line by line from top to bottom.

function one() {
    const username = "Adnan"

    function two() {
        const website = "youtube"
        console.log(username) // Adnan
    }
    console.log(website) // website is not defined

    two()
}

// one()

// -------------------------------- NESTED Condtionals ------------------------

if(true) {
    const username = "Adnan";
    if(username === "Adnan") {
        const website = " youtube"
        // console.log(username + website) // Adnan youtube
    }
    // console.log(website) // website is not defined
}
// console.log(username) // username is not defined

// +++++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++++++


// IMPORTANT POINTS TO NOTE:
// -> Both are functions, but when we declare a function in a variable, its basically called an expression.
// -> For both functions value is returns, but not printed yet.

// function addOne(num) {
//     return num + 1
// } 
// addOne(5)


// const addTwo = function(num) {
//     return num + 2
// }
// addTwo(5)
// ----------------------------------------------

// Now, I take this function calls above the function declaration, so it behaves differently in expression and normal function

console.log(addOne(5)) //  6 -> this works fine, but the expression gives error.
function addOne(num) {
    return num + 1
} 


addTwo(5)  // ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num) {
    return num + 2
}


// NOTE: The above concept is called Hoisting in JavaScript.
