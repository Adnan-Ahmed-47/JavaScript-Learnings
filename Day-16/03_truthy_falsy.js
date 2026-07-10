// Till now we were working on the exact true of false values

// Truthy & Falsy values

// const userEmail = "a@adnan.ai"
// if(userEmail) {
//     console.log("Got user email")
// } else {
//     console.log("Don't have user email")
// }

// const userEmail = ""
// if(userEmail) {
//     console.log("Got user email")
// } else {
//     console.log("Don't have user email")
// }


// ----------------------------------------------------------------------
// Falsy Values // other than falsy values, all are truthy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy Values
// "0", 'false', " ", [], {}, function(){} -> empty function is also truthy, 

// ---------------------------------------------------------------------------

// Empty Array check
const userEmail = []
if(userEmail.length === 0) {
    console.log("Array is empty")
} 

// Empty Object check
const emptyObj = {}
if(Object.keys(emptyObj).length === 0) {
    console.log("Object is empty")
} 


// -----------------------------------------------

// NOTE:

// false == 0 // true
// false == '' // true
// 0 == '' //true 


// --------------------------------------------------------
// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10; // 5
// val1 = null ?? 10  // 10
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 20;  // whatever first value it gets, it assignes that value (10)


console.log(val1)

// ----------------------------------------------------------
// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")