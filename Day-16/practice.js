// ######################################### EASY QUESTIONS #############################################

// const age = 18;
// if(age == 18) {
//     console.log("Eligible to vote")
// }

// if(10>5) {
//     console.log("yes, 10 is greater than 5")
// }

// let marks = 80;
// if(marks >= 36) {
//     console.log("Pass")
// }else {
//     console.log("Fail")
// }

// 100 > 50 ? console.log("Yes, 100 is greater than 50") : console.log("No, 100 is lesser than 50")

// console.log(Boolean("")) // false

// console.log(Boolean("Adnan")) // true

// let arr = []
// if(arr.length === 0) {
//     console.log("truthy")
// }else {
//     console.log("falsy")
// }

// let empObj = {}
// if(Object.keys(empObj).length === 0) {
//     console.log("Object is truthy")
// }else {
//     console.log("Object is falsy")
// }

// console.log(null ?? 50) // 50

// console.log(undefined ?? 100) // 100

// const day = "tue"
// switch (day) {
//     case "mon":
//         console.log("Monday")
//         break;
//     case "tue":
//         console.log("Tuesday")
//         break;
//     case "wed":
//         console.log("Wednesday")
//         break;
//     case "thurs":
//         console.log("Thursday")
//         break;

//     default: 
//         console.log("Friday")
//         break;
// }

// console.log(Object.keys({})) // []

// const arrr = []
// if(arrr.length === 0) {
//     console.log("Empty")
// }else {
//     console.log("Not empty")
// }

// const objj = {}
// // console.log(Object.keys(objj)) // []
// if(Object.keys(objj).length === 0) {
//     console.log("Empty Object")
// }else {
//     console.log("Non Empty Object")
// }

// console.log(true && false) // false


// ######################################### MEDIUM QUESTIONS #############################################

// Memory Creation Phase: This phase is created once after the Global Execution phase, whatever the variables are declared in the code, will be alloted as undefined firstly, so the memory is alloted to every variable, but the value is not assigned yet, nor executed any operation.

// Execution Phase: Here, the actual execution happens, where the values will be assigned and executed, the operations will be performed.

// == -> It check for the equality of the values, it only checks the values, if its equal, this gives true as answer.
// === -> It also checks for the type and the value , it is called the strict equality operator.

// && -> Logical && operator, checks whether all the conditions are true, then gives true, if any one of the condition is false, then it gives false.
// || -> Logical || operator, checks whether if any one of the value is true, it returns true, if none of them is true, it returns false.

// if ("0") {
//     console.log("Hello"); // Hello
// }

// console.log(Boolean([])); // true

// console.log(Boolean({})); // true

// console.log(null ?? "Hello"); // Hello

// console.log(undefined ?? null ?? 50); // 50

// const age = 16;
// age >= 18 ? console.log("Eligible to vote") : console.log("not eligible to vote")
// if(age >= 18) {
//     console.log("Eligible to vote")
// } else {
//     console.log("not eligible to vote")
// }

// const month = "june"
// switch(month) {
//     case 'jan':
//         console.log("January");
//         break;
//     case 'feb':
//         console.log("February");
//         break;
//     case 'mar':
//         console.log("March");
//         break;
//     case 'apr':
//         console.log("April");
//         break;
//     case 'may':
//         console.log("May");
//         break;
//     case 'jun':
//         console.log("June");
//         break;
    
//     default:
//         console.log("Not in the list")
//         break;
// }


// console.log([] == false) // true // strange behaviour
//  []  ==  false
//      │         │
//      │      (Step 1: Convert Boolean to Number)
//      ▼         ▼
//      []  ==    0
//      │         │
//      │      (Step 2: Convert Object/Array to Primitive)
//      ▼         ▼
//     ""   ==    0
//      │         │
//      │      (Step 3: Convert String to Number)
//      ▼         ▼
//      0   ==    0   ───►  true


