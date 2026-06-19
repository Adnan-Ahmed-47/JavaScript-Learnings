// Primitive datatypes: 
// -> Primitive datatypes are basically Call by value, because whenever you copy this datatypes reference is not original, we will get the duplicate references.

// -> ye jitne bhi primitive types hain, ye Call by value hote hain, matlab jab bhi aap inko kahin se kahin copy karte hain, toh inka jo original data hai, woh reference apko memory ka nai diya jata, inko copy karke aapko diya jaata hai, aur usme aap jo bhi changes karte ho woh copy mein changes hote hain.

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedin = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId);

const bigNumber = 987495738457238473845n;
// console.log(typeof bigNumber)

// ----------------------------------------------------------------------------
// Reference type(Non-primitive): ye saari values woh hai jo ki memory mein inka reference aapko directly allocate kiya ja sakta hai

// Arrays, Objects, Functions

const heros = ['superman', 'batman', 'spiderman'];

let obj = {
    name: "Adnan",
    age: 24,
};

const myFunction = function() {
    console.log("Hello World");
}

// console.log(typeof heros)
// console.log(typeof obj)
// console.log(typeof myFunction)


// console.log(typeof isLoggedin)
// console.log(typeof outsideTemp)
// console.log(typeof id)
// console.log(typeof userEmail)


// The Biggest Misconception

// Many beginners think:

// x++ means "increase x by 1".

// That's only half true.

// The increment operator actually does TWO things:

// Increase the variable by 1.
// Return a value.

// The difference between prefix and postfix is which value gets returned.