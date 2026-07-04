// Immediately Invoked Function Expressions (IIFE) -> hamne ek function likha aur hame turant hi uss function ko execute karwana hai. 
// jaise ke ham ek file likhte hain jisme sirf database connection hain, aur ham chahte hain ke jaise hi application start ho, waise hi us file ke andar database ka connection start hojaaye.
// Most of the times, the function variables gets polluted from the global scope variables, which we don't want any pollution from global scope

// This is the normal function we have written and executed it instantly, but what about the global scope pollution.
// function chai() {
//     console.log('DB CONNECTED')
// }
// chai()

// So here comes IIFE functions
// (function chai() {
//     console.log('DB CONNECTED')
// })()

// How to write IIFE:
// ()() 
// First () is the function definition and declaration
// Second () is the execution call of that IIFE function

(function chai() {
    console.log('DB CONNECTED')
})();

//  This gives error, because the above function which we've written is invoked, but it doesn't know where to end the context, so we need to add semicolon ; after the execution parenthesis to run the below function
(() => {
    console.log("DB CONNECTED TWO")
})();

// -------------------------------------------------------------

// we can also pass the parameters and arguments in IIFE functions, you may pass the name in the execution parenthesis and parameter will be in the function declaration

((name) => {
    // unnamed IIFE
    console.log(`HELLO ${name}!`)
})('Adnan');

(function addTwo(num1, num2) {
    // named IIFE
    console.log(num1 + num2)
})(3, 6);