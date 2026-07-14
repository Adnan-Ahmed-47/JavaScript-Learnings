// 3. Weather App (Console)

// Features:

// temperature = 42;

// Print:

// Very Hot

// Hot

// Pleasant

// Cold

// using:

// if...else
// switch
// ternary

// ---------------------------------------- SOLUTION -----------------------------------------
// const temperature = 101;

// if else
// if(temperature >= 103) {
//     console.log("Very hot")
// } else if(temperature > 100 && temperature <= 102) {
//     console.log("Hot")
// } else if(temperature >= 98 && temperature <= 100) {
//     console.log("Pleasant")
// } else {
//     console.log("Cold")
// }


// switch
// switch(temperature) {
//     case temperature>=103: {
//         console.log("Very hot")
//         break;
//     }
//     case (temperature > 100 && temperature <= 102): {
//         console.log("Hot")
//         break;
//     }
//     case (temperature >= 98 && temperature <= 100): {
//         console.log("Pleasant")
//         break;
//     }
    
//     default: {
//         console.log("Cold")
//         break;
//     }
    
// }


// ---------------------------------------- Actual Solution -----------------------------------------

// Using if....else
const temperature = 42;

if (temperature >= 40) {
    console.log("Very Hot");
} else if (temperature >= 30) {
    console.log("Hot");
} else if (temperature >= 20) {
    console.log("Pleasant");
} else {
    console.log("Cold");
}


// Using switch
const weather = "hyderabad";

switch (weather) {
    case "secunderabad":
        console.log("Very Hot");
        break;
    case "hyderabad":
        console.log("Hot");
        break;
    case "delhi":
        console.log("Pleasant");
        break;
    case "banglore":
        console.log("Cold");
        break;
    default:
        console.log("Invalid weather");
}


// Using ternary
const temp = 42;

temp >= 40
    ? console.log("Very Hot")
    : temp >= 30
    ? console.log("Hot")
    : temp >= 20
    ? console.log("Pleasant")
    : console.log("Cold");