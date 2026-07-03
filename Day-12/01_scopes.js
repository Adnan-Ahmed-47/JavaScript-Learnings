// Scope

// Till here its okay, we get the values as 10, 20, 30
// let a = 10;
// const b = 20;
// var c = 30;
// console.log(a) // 10
// console.log(b) // 20
// console.log(c) // 30

// ----------------------------------------------------------------
// Block & Global Scope

// The problem comes when there comes a scope {}, this {} comes in functions, loops, conditionals etc.

// if(true) {
//     let a = 10;
//     const b = 20;
//     var c = 30;
// }
// console.log(a) // a is not defined
// console.log(b) // b is not defined
// console.log(c) // 30

// NOTE: There is a concept of block and global scope, let & const are blocked scope, whereas, var is a global scope. Thats the reason, we don't use var mostly, bcoz it gives errors.

// ----------------------------------------------------------------

var c = 300;

if(true) {
    let a = 10;
    const b = 20;
    var c = 30;
    // c = 30; // works same as var c = 30;
}
// console.log(a) // a is not defined
// console.log(b) // b is not defined
// console.log(c) // 30

// NOTE: whatever the value we declare in global scope, that value will also be available inside the scope(block scope), but whatever is written inside block scope, that value shouldn't go outside of that scope.

// ----------------------------------------------------------------

let a = 300;

if(true) {
    let a = 10;
    const b = 20;
    console.log("INNER: ", a) // 10
}

console.log(a); // 300
// console.log(b); // b is not defined, bcoz, b is declared inside of the block scope, not in global scope as a.

// ------------------------------------------------------------------
// Global scope in node vs windows

// NOTE: Whenever we check the scope in windows and scope by using node in terminal, in both scenarios, the global scope is different in both cases.